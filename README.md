###

E pagina ta atheri na e sigiuente requirements

1. E documento "Fiscale wettenbundel Curacao 2020" ta den e systema i ta wordu huza komo knowledge base pa e AI por search aden
2. E System prompts nan ta adapta pa e AI kompronde miho kiko ta e bedoeling di e systema i duna miho kontesta asina
3. E Execution time a wordu adapta pa e systema por kontesta pregunta nan ku ta rekeri mas processing time. Timout a bira 60 Sec.
4. E logo I kolonan a wordu adapta pa klop mas ku e tema di belastingdienst

Si tin algun requirements ku falta of otro kambionan, please laga mi sa

### Meeting with India Solution - Sep 17

They use new4j for knowledge graph
azure document intelligence tool will convert the the file

### Graph database

To query the graph database

- Match (n) Return n

---

### Data Ingestion and Knowledge graph generation

# Knowledge Graph Generation from Documents

The first step of implementing the RAG Application using Knowledge graph is the creation of the knowledge graph

We created a script that automates the process of converting textual documents into a knowledge graph stored in a Neo4j database.

## Key Features:

1. **Document Loading**: Supports multiple file types, but we convert the pdf to Markdown file and load it from a specified directory.
2. **Text Splitting**: Breaks large documents into manageable chunks for processing.
3. **Graph Transformation**: Uses LLM (Language Model) to convert text into graph structures (nodes and relationships).
4. **Database Integration**: Stores the generated graph in a local Neo4j database.
5. **Performance Tracking**: Measures and reports processing time so we have an overview and estimate.

## Process Flow:

1. Load documents from the "ingestionData" folder.
2. Split documents into chunks (4000 characters each, 200 character overlap).
3. Transform text chunks into graph structures using Azure OpenAI's GPT-4 model.
4. Insert the generated graph into a local Neo4j database.

## Notes:

- Current processing rate: ~0.0761 seconds per word.
- 1270 words took 97 Seconds to process
- Estimated processing time for the full document "731,417-word document": ~15.52 hours.
- We could consider batch processing or parallelization for very large documents.

### Sources

- Creating the knowledge graph

  - https://www.datacamp.com/tutorial/knowledge-graph-rag
  - https://js.langchain.com/docs/how_to/graph_constructing/#llm-graph-transformer

- Picture below of the generated graph

---

### Using The Knowledge graph as a knowledge base

### Sources

- Creating the semantic layer over the database
  - https://js.langchain.com/docs/how_to/graph_semantic/#custom-tools-with-cypher-templates
  - https://js.langchain.com/docs/tutorials/graph
- Using LLamaIndex
  - https://www.datacamp.com/tutorial/knowledge-graph-rag
  - https://ts.llamaindex.ai/

### Meeting Nov 20 2024

- Lloyd talked about breakout sessions that they were planning to do
- Alexei brainstormed with Wallid in the mording about some ideas

  - they want to put actual news of
    - Financial sector
    - Every day Uses
    - Education Uses
    - Fraud cases that were made with AI
  - They want a section of european AI act
    - Talk about why this is important
    - site: artificialintelligenceact.eu
    - Talk about how GDPR connects with the EU AI act
    - Look if there is a newer version
    - Talk about the audit process that are incorporating AI (Nist, ISO/IEC 42001)
  - We must update the quiz
    - The quiz is too easy we need to make it more challenging
  - The part of promtp engineering
    - We will let them try a prompt then we will give them how its supposed to be
    - Check with Cyril for the AI Slide that explains how the chat system

  ## Prompts

  Inkomstenbelasting:
  Ik ben een ZZP’er gevestigd op Curaçao en bied mijn diensten aan kleine en middelgrote bedrijven op Curaçao en Bonaire. Kun je in formele bewoordingen in het Nederlands uitleggen hoe ik mijn inkomsten moet aangeven in mijn belastingaangifte?

Auto en Belasting:
Ik zal kortom een tweedehandsmotorvoertuig uit de Verenigde Staten importeren. Kun je in het Nederlands op een eenvoudige manier uitleggen wat de regels zijn omtrent motorrijtuigenbelasting bij de import van tweedehandsmotorvoertuigen uit het buitenland?

Vennootschapsbelasting:
Ik wil zo een lokale landbouwkundige BV (Besloten Vennootschap) beginnen. Leg in het Nederlands uit welke aftrekposten beschikbaar zijn voor BV’s en kleine ondernemingen in het algemeen.

## To be revised prompts

V: "Wat wordt wettelijk verstaan onder huispersoneel volgens de Gezamenlijke beschikking AOV/AWW en loonbelasting 1976?" A: "Huispersoneel wordt gedefinieerd als werknemers die in de huishouding van een privaat persoon uitsluitend of nagenoeg uitsluitend huiselijke diensten verrichten."

V: "Wanneer moet een werkgever de AOV/AWW premies inhouden op het loon?" A: "De werkgever moet de premies inhouden op het moment dat het loon wordt betaald of verrekend, als het ter beschikking wordt gesteld aan de werknemer, als het rentedragend wordt, of als het vorderbaar en inbaar wordt."

V: "In welke gevallen kan er sprake zijn van een 'hardheid' bij de inhouding van loonbelasting?" A: "Er is sprake van een hardheid in twee gevallen:

    1	Als de definitieve aanslag inkomstenbelasting naar verwachting meer dan 25% lager zal zijn dan de ingehouden loonbelasting

    2	Als het verschil naar verwachting meer dan ƒ. 1000,- zal bedragen"

V: "Hoeveel tijd heeft de inspecteur om te reageren op een verzoek tot opheffing van hardheid?" A: "De inspecteur moet binnen 30 dagen na ontvangst van het verzoek schriftelijk reageren naar de werknemer en een afschrift sturen naar de werkgever."

V: "Welke premies vallen onder deze gezamenlijke beschikking?" A: "Deze beschikking regelt de premies voor de Algemene Ouderdomsverzekering (AOV) en de Algemene Weduwen- en wezenverzekering (AWW)."

V: "Als er een beslissing wordt genomen over een hardheid, geldt deze dan voor zowel loonbelasting als premies?" A: "Ja, een beslissing over hardheid geldt automatisch voor beide, tenzij uitdrukkelijk anders is aangegeven."
Here are some useful Q&A pairs about the Landsverordening tarief van invoerrechten, written for someone who doesn't have access to the legal text:

V: "Wie wordt er bedoeld met douaneautoriteiten in de invoerrechtenwetgeving?"

A: "De douaneautoriteiten zijn de Inspecteur der Invoerrechten en Accijnzen of de ambtenaren die door deze inspecteur zijn aangewezen."

V: "Hoe worden invoerrechten berekend op de BES-eilanden?"

A: "Voor goederen die worden ingevoerd in Saba, Sint Eustatius en Sint Maarten geldt een invoertarief van NAF 0,-."

V: "Moet ik invoerrechten betalen als ik goederen van Sint Maarten naar Curaçao breng?"

A: "Ja, bij invoer van goederen van Sint Maarten naar Curaçao moet u invoerrechten betalen, tenzij u kunt aantonen dat de goederen oorspronkelijk uit Sint Maarten komen of er een vrijstelling van toepassing is."

V: "Gelden er speciale regels voor persoonlijke bagage van reizigers?"

A: "Ja, voor persoonlijke bagage van reizigers en kleine zendingen voor particulieren kan een speciaal forfaitair tarief gelden. Dit tarief wordt vastgesteld bij landsbesluit."

V: "Wat wordt verstaan onder 'goederen in het vrije verkeer'?"

A: "Dit zijn goederen die de status van Nederlands-Antilliaanse goederen hebben."

V: "Wie kan er aangifte doen voor invoerrechten?"

A: "Een aangever is een persoon (natuurlijk persoon of rechtspersoon) die in het binnenland (de Nederlandse Antillen) is gevestigd en die bevoegd of verplicht is om aangifte te doen."

V: "Wie bepaalt de hoogte van de invoertarieven?"

A: "De bedragen en percentages van de invoertarieven kunnen worden gewijzigd bij landsbesluit, houdende algemene maatregelen."

These questions help understand the key aspects of import duties without requiring access to the specific legal text.
V: "Wat valt er allemaal onder 'invoer van goederen' volgens de wet?" A: "Invoer van goederen omvat niet alleen het brengen van goederen in het vrije verkeer, maar ook alle handelingen die direct gericht zijn op het bewerkstelligen van invoer. Dit kan ook het brengen van goederen binnen de landsgrenzen inhouden."

V: "Mag ik archeologische voorwerpen exporteren?" A: "Nee, de uitvoer van archeologische voorwerpen of goederen met cultuurhistorische waarde is in principe verboden. U kunt wel een ontheffing aanvragen bij de Minister van Onderwijs en Cultuur. Als u een ontheffing krijgt, kunnen daar wel speciale voorwaarden aan verbonden zijn."

V: "Op welke gronden kunnen er regels worden gesteld voor in- en uitvoer?" A: "Er kunnen regels worden gesteld op drie gronden:

    1	Voor de veiligheid van het Land of internationale afspraken

    2	In het belang van de volkshuishouding

    3	Voor de economische belangen van de eilandgebieden"

V: "Wanneer moet de minister de Sociaal Economische Raad raadplegen bij nieuwe regelgeving?" A: "De minister moet de Sociaal Economische Raad of andere belangrijke belanghebbende organisaties raadplegen bij het maken van nieuwe regels, tenzij het algemeen belang zich daar volgens de minister tegen verzet."

V: "Wat moet er gebeuren als er nieuwe regels worden gemaakt die specifiek voor één eilandgebied gelden?" A: "Als er regels worden gemaakt voor de economische belangen van een specifiek eilandgebied, moet er eerst overleg plaatsvinden met het bestuurscollege van dat eilandgebied voordat het landsbesluit kan worden vastgesteld."

V: "Wat wordt verstaan onder een 'internationale afspraak'?" A: "Een internationale afspraak omvat ook besluiten van volkenrechtelijke organisaties. Dit betekent dat regels voor in- en uitvoer ook kunnen worden gemaakt op basis van internationale verdragen en besluiten."
