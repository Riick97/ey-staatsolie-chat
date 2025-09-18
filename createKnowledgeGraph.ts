import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";

//LLM
import { ChatOpenAI } from "@langchain/openai";

// Document Loaders
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

// Graph database
import { LLMGraphTransformer } from "@langchain/community/experimental/graph_transformers/llm";
import { Neo4jGraph } from "@langchain/community/graphs/neo4j_graph";
import "neo4j-driver";

// Performance Tracking
import { performance } from "perf_hooks";

export const run = async () => {
  const startTime = performance.now();

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

  //for example: Docs split into 3 chunks. Total words: 1270
  // Nodes: 10
  // Relationships: 10
  // Transform time: 96.67 seconds
  // Time per word: 0.0761 seconds
  // Schema refreshed successfully.
  // Database insertion time: 0.23 seconds
  // Total execution time: 97.02 seconds
  // Overall time per word: 0.0764 seconds
  // Done

  //Full document is 731417 words
  //Based on these calculations, processing the full document of 731417 words would take approximately 15.52 hours.

  //Creat GraphTransformer
  const model = new ChatOpenAI({
    azureOpenAIApiKey: "143bedd78b51497f894c7bf36d4aadcf", // In Node.js defaults to process.env.AZURE_OPENAI_API_KEY
    azureOpenAIApiVersion: "2023-07-01-preview", // In Node.js defaults to process.env.AZURE_OPENAI_API_VERSION
    azureOpenAIApiInstanceName: "CAEDAOIPOCAOA07", // In Node.js defaults to process.env.AZURE_OPENAI_API_INSTANCE_NAME
    azureOpenAIApiDeploymentName: "analyze-your-data", // In Node.js defaults to process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME
    temperature: 0,
    streaming: true,
    model: "gpt-4-turbo-preview",
  });

  const llmGraphTransformer = new LLMGraphTransformer({
    llm: model,
  });

  console.log({ llmGraphTransformer });

  // let text = `
  // Marie Curie, was a Polish and naturalised-French physicist and chemist who conducted pioneering research on radioactivity.
  // She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two scientific fields.
  // Her husband, Pierre Curie, was a co-winner of her first Nobel Prize, making them the first-ever married couple to win the Nobel Prize and launching the Curie family legacy of five Nobel Prizes.
  // She was, in 1906, the first woman to become a professor at the University of Paris.
  // `;
  // const docsTest = [new Document({ pageContent: text, meta: ... })];

  const transformStartTime = performance.now();
  const result = await llmGraphTransformer.convertToGraphDocuments(docs);
  const transformEndTime = performance.now();

  const transformTime = (transformEndTime - transformStartTime) / 1000; // in seconds
  const timePerWord = transformTime / totalWords;

  console.log(`Nodes: ${result[0].nodes.length}`);
  console.log(`Relationships: ${result[0].relationships.length}`);
  console.log(`Transform time: ${transformTime.toFixed(2)} seconds`);
  console.log(`Time per word: ${timePerWord.toFixed(4)} seconds`);

  //Create Database
  const url = process.env.NEO4J_URI!;
  const username = process.env.NEO4J_USERNAME!;
  const password = process.env.NEO4J_PASSWORD!;
  const graph = await Neo4jGraph.initialize({ url, username, password });

  const dbStartTime = performance.now();
  await graph.addGraphDocuments(result);
  const dbEndTime = performance.now();

  const dbTime = (dbEndTime - dbStartTime) / 1000; // in seconds

  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000; // in seconds

  console.log(`Database insertion time: ${dbTime.toFixed(2)} seconds`);
  console.log(`Total execution time: ${totalTime.toFixed(2)} seconds`);
  console.log(
    `Overall time per word: ${(totalTime / totalWords).toFixed(4)} seconds`
  );
};

(async () => {
  await run();
  console.log("Done");
})();
