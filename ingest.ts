import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import pLimit from "p-limit";
import { Document } from "langchain/document";

// Document Loaders
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";



class RateLimitedOpenAIEmbeddings extends OpenAIEmbeddings {
  private limit: pLimit.Limit;

  constructor(fields?: Partial<OpenAIEmbeddings>, concurrency = 1) {
    super(fields);
    this.limit = pLimit(concurrency);
  }

  async embedDocuments(texts: string[]): Promise<number[][]> {
    let processed = 0;
    const total = texts.length;
    return Promise.all(
      texts.map((text) =>
        this.limit(async () => {
          const result = await super.embedQuery(text);
          processed++;
          console.log(`Embedded ${processed}/${total} documents`);
          return result;
        })
      )
    );
  }

  async embedQuery(text: string): Promise<number[]> {
    return this.limit(() => super.embedQuery(text));
  }
}

export const run = async () => {
  //Step 1: convert to markdown using an online tool and put the markdown file in the ingestionData Folder

  //Step 2: load the markdown file in memory
  const DIRECTORY_PATH = "ingestionData";
  const loader = new DirectoryLoader(DIRECTORY_PATH, {
    ".md": (path) => new TextLoader(path),
    ".csv": (path) => new CSVLoader(path, "text"),
    ".pdf": (path) => new PDFLoader(path),
  });

  const rawDocs = await loader.load();
  console.log(`Loader created. Loaded ${rawDocs.length} documents.`);

  /* Step 3: Split the text into chunks using RecursiveCharacterTextSplitter */
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 4000,
    chunkOverlap: 200,
  });

  // Split Docs
  console.log("Splitting docs...");
  const docs = await textSplitter.splitDocuments(rawDocs);
  const totalWords = docs.reduce(
    (sum, doc) => sum + doc.pageContent.split(/\s+/).length,
    0
  );
  console.log(
    `Docs split into ${docs.length} chunks. Total words: ${totalWords}`
  );

  // Create Embeddings
  console.log("Creating Embeddings...");
  const embeddings = new RateLimitedOpenAIEmbeddings(
    {
      batchSize: 16,
      modelName: "text-embedding-ada-002",
      azureOpenAIApiKey: "143bedd78b51497f894c7bf36d4aadcf",
      azureOpenAIApiVersion: "2023-07-01-preview",
      azureOpenAIApiInstanceName: "CAEDAOIPOCAOA07",
      azureOpenAIApiDeploymentName: "analyze-your-data-embeddings",
    },
    1
  );

  /* Create the vectorstore */
  try {
    console.log("Creating vector store...");
    let processedDocs = 0;
    let processedWords = 0;

    const updateProgress = () => {
      processedDocs++;
      processedWords = docs
        .slice(0, processedDocs)
        .reduce((sum, doc) => sum + doc.pageContent.split(/\s+/).length, 0);
      console.log(
        `Processed ${processedDocs}/${docs.length} documents (${processedWords}/${totalWords} words)`
      );
    };

    // Create a new array of documents with progress tracking
    const docsWithProgress = docs.map((doc) => ({
      ...doc,
      metadata: {
        ...doc.metadata,
        updateProgress: updateProgress,
      },
    }));

    const vectorStore = await HNSWLib.fromDocuments(
      docsWithProgress,
      embeddings
    );
    console.log("Vector store created");

    await vectorStore.save("data");
    console.log("Vector store saved to disk");
  } catch (error) {
    console.error("Error creating vector store:", error);
  }
};

(async () => {
  await run();
  console.log("Done");
})();
