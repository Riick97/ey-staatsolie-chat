import { useState, useRef, useEffect, useMemo } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import remarkGfm from "remark-gfm";



const wordDocumentRenderer = {
  h1: ({ node, ...props }: any) => (
    <h1
      style={{
        fontSize: "24px",
        borderBottom: "2px solid #5083C1",
        paddingBottom: "10px",
        fontFamily: "Merriweather, serif",
        marginBottom: "20px",
        marginTop: "40px",
        color: "#333",
      }}
      {...props}
    />
  ),
  h2: ({ node, ...props }: any) => (
    <h2
      style={{
        fontSize: "20px",
        fontFamily: "Quicksand, sans-serif",
        marginBottom: "10px",
        marginTop: "45px",
      }}
      {...props}
    />
  ),
  h3: ({ node, ...props }: any) => (
    <h3
      style={{
        fontSize: "18px",
        fontFamily: "Quicksand, sans-serif",
        marginBottom: "10px",
        marginTop: "35px",
        color: "#333",
      }}
      {...props}
    />
  ),
  p: ({ node, ...props }: any) => (
    <p
      style={{
        fontSize: "16px",
        fontFamily: "Quicksand, sans-serif",
        margin: "10px 0",
        lineHeight: "1.6",
        color: "#333",
      }}
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");

    // Inline Code Styling
    const inlineCodeStyle = {
      backgroundColor: "#f4f4f4",
      borderRadius: "3px",
      padding: "2px 4px",
      fontFamily: "Courier New, monospace",
      fontWeight: "bold",
      color: "#333",
    };

    return (
      <pre
        style={{
          background: "#222",
          padding: "15px",
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
          margin: "10px 0",
          color: "#333",
        }}
      >
        <code
          className={className}
          style={{
            fontSize: "16px",
            fontFamily: "Quicksand, sans-serif",
            margin: "10px 0",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </code>
      </pre>
    );
  },
  a: ({ node, ...props }: any) => (
    <a
      style={{
        color: "#333",
        textDecoration: "underline",
      }}
      {...props}
    />
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote
      style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "20px",
        fontStyle: "italic",
        color: "#333",
      }}
      {...props}
    />
  ),
  ul: ({ node, ...props }: any) => (
    <ul
      style={{
        fontSize: "16px",
        paddingLeft: "40px",
        listStyleType: "disc",
        listStylePosition: "inside",
        color: "#333",
      }}
      {...props}
    />
  ),
  ol: ({ node, ...props }: any) => (
    <ol
      style={{
        fontSize: "16px",
        paddingLeft: "40px",
        listStyleType: "decimal",
        listStylePosition: "inside",
        color: "#333",
      }}
      {...props}
    />
  ),
  hr: ({ node, ...props }: any) => (
    <hr
      style={{
        borderTop: "2px solid gray",
        marginTop: "50px",
        marginBottom: "100px",
        color: "#333",
      }}
      {...props}
    />
  ),
  table: ({ node, ...props }: any) => (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
        color: "#333",
      }}
      {...props}
    />
  ),
  th: ({ node, ...props }: any) => (
    <th
      style={{
        borderBottom: "2px solid gray",
        padding: "8px",
        textAlign: "left",
        color: "#333",
      }}
      {...props}
    />
  ),
  td: ({ node, ...props }: any) => (
    <td
      style={{
        borderBottom: "1px solid gray",
        padding: "8px",
        textAlign: "left",
        color: "#333",
      }}
      {...props}
    />
  ),
  img: ({ node, ...props }: any) => (
    <img
      style={{
        maxWidth: "100%",
      }}
      {...props}
    />
  ),
};



export default function SourceDocumentsPage() {
  return (
    <div className="p-10 px-32 markdown-container">
      <ReactMarkdown
        components={wordDocumentRenderer}
        remarkPlugins={[remarkGfm]}
        linkTarget="_blank"
      >
        {` '''
http://www.hbnlawtax.com
'''
©2020 Stichting Publicaties HBN Law & Tax

Alle rechten voorbehouden

**Belastingwetgeving 2020**

# Curaçao

**Belastingwetgeving 2020**

Curaçao


**Belastingwetgeving 2020**

**Curaçao**

Uitgegeven door Stichting Publicaties HBN Law & Tax

Onder redactie van:

'''
Rejauna I.S. Rojer MSc
Werkzaam bij HBN Law & Tax
'''
en

'''
mr. drs. Joris M.L. Mulder
Werkzaam bij HBN Law & Tax
'''
Willemstad, Curaçao
Januari 2020


**Voorwoord**

II Curaçao

**Always there**
Sinds 1 juni 2019 werken DCTL en HBN Law samen als HBN Law & Tax. Twee ambitieuze
organisaties vinden elkaar in dezelfde visie. Een wereld die continu verandert, dwingt ons
om elke dag weer tot het uiterste te gaan om onze belofte na te leven: Always there. Om
daarin te slagen, koesteren we een cultuur die mensen gelukkig maakt. Dan is kwaliteit
een logisch gevolg.

_Als bewijs van onze ambitie_ presenteren we - met 1 januari 2020 als tijdstempel - ook dit jaar
weer een viertal geactualiseerde wettenbundels: Aruba, Caribisch Nederland (Bonaire,
Sint Eustatius en Saba), Curaçao en Sint Maarten. Nagenoeg alle fiscale wetten, besluiten,
beschikkingen en andere relevante publicaties zijn opgenomen. De wettenbundel voor
Suriname wordt vanaf 2017 om het jaar gepubliceerd.

_Als bewijs van onze cultuur_ zetten we graag een stap naar achteren en geven we onze geta-
lenteerde collega Rejauna Rojer het podium. Als hoofdredactrice heeft ze bij nacht en ontij
doorgewerkt om de wettenbundels op deze korte termijn gereed te krijgen. Rejauna kon
rekenen op verregaande betrokkenheid van haar collega’s.

Tip! Houd onze LinkedIn-pagina in de gaten voor updates en nieuwe producten.

**Vragen of opmerkingen**
De wettenbundels zijn met de grootste zorgvuldigheid samengesteld. Vragen of opmer-
kingen zijn altijd welkom: Stuur een bericht naar wet@hbnlawtax.com.

Namens het bestuur van Stichting Publicaties HBN Law & Tax,

mr. Wendell J. Meriaan

Januari 2020


**Contactgegevens HBN Law & Tax**

**Curaçao**
Huize Belvedère
L.B. Smithplein 3
Willemstad, Curaçao
T: +5999 732 5400

Wendell Meriaan
meriaan.wendell@hbnlawtax.com

Joris Mulder
mulder.joris@hbnlawtax.com

Jeanise Job
job.jeanise@hbnlawtax.com

François Simon
simon.francois@hbnlawtax.com

Rejauna Rojer
rojer.rejauna@hbnlawtax.com

Laetitia Wall
wall.laetitia@hbnlawtax.com

'''
Aruba
L.G. Smith Boulevard 54
Oranjestad, Aruba
T: +297 593 9311
'''
'''
Caribisch Nederland
Kaya Korona 40
Kralendijk, Bonaire
T: +599 717 60 44
'''
'''
Europees Nederland
Dutch Caribbean & Suriname
Weena 505
3013 AL Rotterdam
Nederland
T: +31 10 800 5483
'''
'''
Sint Maarten
The Vineyard Building
W.G. Buncamperroad 33
Philipsburg, Sint Maarten
T: +1721 542 22 72
'''
Curaçao III



Aan deze uitgave is de grootst mogelijke zorg besteed. Niettemin aanvaarden Stichting Publicaties
HBN Law & Tax de samenstellers generlei aansprakelijkheid voor de gevolgen van eventuele fouten of
onvolledigheden van welke aard dan ook.

Behoudens de in of krachtens de geldende auteursrechtelijke wetgeving gestelde uitzonderingen mag
niets uit deze uitgave worden verveelvoudigd en/of openbaar gemaakt door middel van druk, fotokopie,
microfilm of welke andere wijze dan ook, zonder voorafgaande uitdrukkelijke schriftelijke toestemming
van de Stichting Publicaties HBN Law & Tax.


### Algemene inhoudsopgave

'''
pag.
'''
**Voorwoord..........................................................................................................................II
Algemene inhoudsopgave...............................................................................................VI
Lijst van afkortingen.......................................................................................................XII**

**1 Formeel belastingrecht.................................................................................................... 1**
Algemene overgangsregeling wetgeving en bestuur Land Curaçao........................... 3
Algemene landsverordening Landsbelastingen......................................................... 10
Ministeriële regeling identiteit deelgerechtigden transparante vennoot-
schappen....................................................................................................................... 40
Ministeriële regeling termijn inkomstenbelastingaanslagen................................... 44
Aanschrijving vaststelling zakelijke rente................................................................... 45
Aanschrijving verduidelijking trust en spf.................................................................. 46
Aanschrijving ter uitvoering van de Landsverordening fiscale faciliteiten historische
binnenstad en monumenten....................................................................................... 50
Beleidsregels betreffende rechtsbescherming van belastingplichtigen tegen strafrech-
telijke vervolging bij inkeer.......................................................................................... 52
Verduidelijking verhouding tussen Beleidsregels van de Minister van Justitie en de
Minister van Financiën en de Instructie aan de Inspecteur der Belastingen en het
Openbaar Ministerie..................................................................................................... 54
Aanschrijving inzake boetebeleid voor winstbelasting van 19 februari
2002 ............................................................................................................................... 56
Landsbesluit fiscale kasregistratiesystemen............................................................... 57
Ministeriële regeling fiscale kasregistratiesystemen................................................. 74
Ministeriële regeling vaststelling prioriteiten uitvoering controle-auto-
riteit............................................................................................................................... 84
Landsbesluit administratieve sanctie bij niet nakomen fiscale verplich-
tingen............................................................................................................................ 86
Ministeriële regeling formeel belastingrecht.............................................................. 91
Landsverordening vereffening belastingschulden bij vertrek.................................. 115
Landsverordening op het beroep in belastingzaken................................................. 117
Landsbesluit griffierechten beroep in belastingzaken............................................. 125
Rijkswet cassatierechtspraak voor Aruba, Curaçao, Sint Maarten en voor Bonaire, Sint
Eustatius en Saba........................................................................................................ 126
Rijkswet goedkeuring Protocol nr. 16 EVRM............................................................. 130
Algemene wet inzake rijksbelastingen...................................................................... 131
Algemene wet bestuursrecht...................................................................................... 137
Procesreglement Hoge Raad der Nederlanden......................................................... 171
Procesregeling Belastingrecht GEA 2019................................................................... 198
Aanmeldings-, Transactie- en Vervolgingsrichtlijnen voor fiscale delicten en douane-
delicten 2019............................................................................................................... 203
Richtlijn (EU) 2015/849 inzake de voorkoming van het gebruik van het financiële
stelsel voor het witwassen van geld of terrorismefinanciering............................... 210
Landsverordening administratieve rechtspraak....................................................... 256
Algemene termijnenlandsverordening.................................................................... 282
Landsverordening melding ongebruikelijke transacties......................................... 284
Landsverordening identificatie bij dienstverlening................................................. 303
**2 Inkomstenbelasting..................................................................................................... 325**
Landsverordening op de inkomstenbelasting 1943.................................................. 327
Landsverordening regelende de inhouding van de inkomstenbelasting op rente-
inkomen....................................................................................................................... 371

'''
VI Curaçao
'''

## Brief van de directeur met betrekking tot de aftrek van premie van arbeids-ongeschikt-

Curaçao VII


VIII Curaçao


Curaçao IX


'''
Besluit ter uitvoering van art 5 & 8 van de Gedistilleerdverordening 1908............. 1166
Landsverordening op distilleerderijen..................................................................... 1168
Besluit ter uitvoering van art 16 van de Landsverordening op distilleerde-
rijen............................................................................................................................. 1172
18 Koninkrijk.................................................................................................................. 1173
Belastingregeling voor het Koninkrijk...................................................................... 1175
Gezamenlijke regeling van kwalificerende regelingen........................................... 1193
Gezamenlijke regeling als gevolg van de spaarrenterichtlijn................................. 1195
Uitvoeringsvoorschriften artikel 11 Belastingregeling voor het Koninkrijk (Curaçao en
Sint Maarten)............................................................................................................. 1197
Belastingregeling Nederland Curaçao.................................................................... 1204
Universele Nederlandse uitvoeringsvoorschriften 2015 inzake belastingverdragen,
uitgezonderd het belastingverdrag met de Verenigde Staten van Amerika, en de
Belastingregeling Nederland Curaçao..................................................................... 1228
Directe belastingen, internationale inlichtingenuitwisseling; Curaçao................. 1234
Convenant tussen Curaçao en Nederland inzake de heffing van invoerrechten en
andere indirecte belastingen in het verkeer tussen Curaçao en Caribisch
Nederland.................................................................................................................. 1237
19 Internationaal........................................................................................................... 1241
Internationaal Verdrag inzake burgerrechten en politieke rechten...................... 1243
Verdrag tot bescherming van de rechten van de mens en de fundamentele vrij-
heden......................................................................................................................... 1245
Protocol bij het Verdrag tot bescherming van de rechten van de mens en de funda-
mentele vrijheden..................................................................................................... 1247
Verdrag inzake wederzijdse administratieve bijstand in belastingzaken............. 1248
LGO-besluit................................................................................................................ 1259
CONCLUSIES VAN DE RAAD over de EU-lijst van niet-coöperatieve rechtsgebieden
voor belastingdoeleinden......................................................................................... 1293
Verdrag tussen het Koninkrijk der Nederlanden met betrekking tot de Nederlandse
Antillen en het Koninkrijk Noorwegen tot het vermijden van dubbele belasting en
het voorkomen van het ontgaan van belasting met betrekking tot belastingen naar
het inkomen en naar het vermogen.......................................................................... 1311
Verdrag tussen de Regering van het Koninkrijk der Nederlanden ten behoeve van de
Nederlandse Antillen en de Regering van Australië inzake de uitwisseling van inlich-
tingen met betrekking tot belastingen.................................................................... 1328
Common Reporting Standard (CRS)........................................................................ 1334
Verdrag tussen het Koninkrijk der Nederlanden, ten behoeve van Curaçao, en de
Verenigde Staten van Amerika tot verbetering van de internationale naleving van de
belastingplicht en tenuitvoerlegging van de FATCA............................................... 1352
Notawisseling houdende een Aanvullend Verdrag bij het Verdrag tussen het Koninkrijk
der Nederlanden, ten behoeve van Curaçao, en de Verenigde Staten van Amerika tot
verbetering van de internationale naleving van de belastingplicht en tenuitvoerlegging
van de FATCA............................................................................................................. 1388
Leidraad FATCA met technische toelichting bij de CUR IGA.................................. 1390
Landsverordening internationale bijstandsverlening bij de heffing van belas-
tingen......................................................................................................................... 1422
Landsbesluit uitvoering internationale bijstandsverlening................................... 1436
Regeling ex artikel 50, derde lid, Algemene landsverordening Landsbelas-
tingen......................................................................................................................... 1445
Ministeriële regeling dringende redenen................................................................ 1446
Ministeriële regeling dringende redenen II............................................................ 1448
Richtlijnen Investors permit 2014............................................................................ 1450
Multilateraal Verdrag ter implementatie van aan belastingverdragen gerelateerde
maatregelen ter voorkoming van grondslaguitholling en winstver-
schuiving.................................................................................................................... 1458
20 Fidemecum............................................................................................................... 1499
Tarieven Inkomstenbelasting (IB)............................................................................ 1501
'''
'''
X Curaçao
'''
Algemene inhoudsopgave


## Curaçao XI

   - Ministeriële regeling rentebelasting.........................................................................
   - Ministeriële regeling ex-patriates 2013......................................................................
   - Standaardvoorwaarden geruisloze inbreng IB-onderneming................................
   - Ministeriële beschikking kindertoeslag ongehuwde ouder.....................................
   - Ministeriële beschikking werkkleding 2001..............................................................
   - Ministeriële beschikking uitstel van betaling aanmerkelijk belang........................
   - heidsverzekeringen...................................................................................................
   - toepassing van vervangingsreserve........................................................................... Aanschrijving van de Directeur der Belastingen inzake investeringsaftrek ingeval
   - Brief van de directeur met betrekking tot inkomsten in natura..............................
   - belasting en premie AOV/AWW................................................................................ Brief van de Inspecteur der Belastingen inzake toepassing van spreiding inkomsten-
   - aandelen in een holding (Gietel-ruling)................................................................... Brief van de directeur met betrekking tot gefacilieerde aandelenruil bij inbreng van
   - lenruil per 1 december 2012....................................................................................... Additionele voorwaarden (voorwaarden 7, 8 en 9) bij toekenning gefacilieerde aande-
   - van de gouverneur en de gezaghebbers................................................................... Brief van de Minister van Financiën inzake de fiscale behandeling inkomen in natura
   - Aanschrijving van de directeur inzake fictief rendement........................................
   - Aanschrijving van de Minister van Financiën inzake hypotheekrente.....................
   - Aanschrijving inzake de certificering van aanmerkelijk belang aandelen...............
- 3 Loonbelasting...............................................................................................................
   - Landsverordening op de Loonbelasting 1976............................................................
   - Beschikking vaste vergoedingen...............................................................................
   - Gezamenlijke beschikking AOV/AWW en loonbelasting 1976................................
   - Beschikking pensioenen.............................................................................................
   - Ministeriële regeling fooien.......................................................................................
   - toren............................................................................................................................. Brief van Inspecteur inzake dubbele dienstbetrekking medewerkers trustkan-
   - Aanschrijving ziektekosten gepensioneerden..........................................................
   - Ministeriële regeling grote evenementen................................................................
   - AVBZ 2000 (door de BAB).......................................................................................... Fringe Benefits, uitvoeringsbeleid voor de Loonbelasting en premies AOV/AWW en
   - kenden (Lei di Bion).................................................................................................... Landsverordening ter bevordering van de werkgelegenheid voor jeugdige werkzoe-
- 4 Dividendbelasting.......................................................................................................
   - Landsverordening op de dividendbelasting 2000....................................................
- 5 Winstbelasting (NFR)..................................................................................................
   - Landsverordening op de winstbelasting 1940...........................................................
   - Ministeriële beschikking standaardvoorwaarden fiscale eenheid..........................
   - Aanschrijving fiscale eenheid....................................................................................
   - lasting.......................................................................................................................... Beschikking aanwijzing buitenl. belastingregimes vergelijkbare winstbe-
   - Aanschrijving inzake artikel 1A van de Landsverordening op de winstbelasting
   -
   - Beleidsregels standaardvoorwaarden geruisloze bedrijfsfusie
   - Aanschrijving investeringsaftrek...............................................................................
   - Aanschrijving Beleggingsinstelling en Vrijgestelde Vennootschap........................
   - Ministeriële beschikking rulingbeleid winstbelasting..............................................
   - Ministeriële regeling rentepercentage winstbelasting............................................
   - instellingen................................................................................................................. Aanschrijving fiscale behandeling verplicht gestelde voorzieningen bank- en krediet-
   - Landsbesluit winstbelasting
   - prijzen.......................................................................................................................... Aanschrijving Aanvullende documentatieverplichtingen verreken-
   - Ministeriële beschikking rulingpraktijk.....................................................................
   - Ministeriële regeling reële aanwezigheid.................................................................
   - Brief goedkeuring inspectie Curaçaose Beleggingsvennootschap..........................
   - Landsverordening op de scheepstonnagebelasting 2007........................................
- 6 Winstbelasting (offshore)...........................................................................................
   - Overgangsregeling offshorevennootschappen 2001...............................................
   - Landsverordening op de winstbelasting 1940 zoals deze luidde op 31 december
   - ningen......................................................................................................................... Overgangs- en slotbepalingen uit voorafgaande wijzigingslandsverorde-
   - Garantieverordening artikel 9A.................................................................................
   - Garantieverordening Winstbelasting 1969...............................................................
   - Garantieverordening Winstbelasting 1993...............................................................
   - Beschikking gedragscode informatieverschaffing winstbelasting.........................
- 7 Faciliteitenwetgeving..................................................................................................
   - Landsverordening belastingfaciliteiten investeringen............................................
   - Landsbesluit economische zones..............................................................................
   - Regeling verzoek toepassing belastingfaciliteiten investeringen...........................
   - Landsverordening economische zones 2000............................................................
   - Landsbesluit instellen tweede economische zone...................................................
   - Aanschrijving fiscaal transparante samenwerkingsverbanden..............................
   - Tijdelijk landsbesluit belastingfaciliteiten grote projecten....................................
- 8 Omzetbelasting...........................................................................................................
   - Landsverordening omzetbelasting 1999....................................................................
   - Ministeriële regeling omzetbelasting.......................................................................
   - Ministeriële regeling vrijstelling omzetbelasting bij invoer....................................
   - Aanschrijving beschikking aftrekrecht omzetbelasting..........................................
   - Beschikking ontheffing factureringsplicht omzetbelasting....................................
   - schepen....................................................................................................................... Aanschrijving inzake leveringen van bevoorradingsgoederen aan
   - Vrijgestelde Vennootschappen................................................................................. Aanschrijving inzake heffing van omzetbelasting ter zake van prestaties door en aan
   - Aanschrijving inzake intrekking aanschrijvingen omzetbelasting.........................
   - Aanschrijving goedkeuring prijsaanduiding en kassabonvereisten.......................
   - Aanschrijving vrijstelling omzetbelasting charitatieve organisaties.......................
   - Tijdelijke ministeriële regeling tax free winkelen.....................................................
- 9 Successiebelasting........................................................................................................
   - Successiebelastingverordening 1908.........................................................................
   - Besluit uitvoering artikel 23........................................................................................
- 10 Onroerendezaakbelasting.........................................................................................
   - Landsverordening onroerendezaakbelasting 2014..................................................
   - invorderingstermijnen............................................................................................... Aanschrijving achterwege laten aanslagen onroerendzaakbelasting en verruiming
- 11 Rechtsverkeerbelastingen.........................................................................................
   - Overdrachtsbelastingverordening 1908....................................................................
   - een trust...................................................................................................................... Aanschrijving overdrachtsbelastingheffing bij afzondering van onroerende zaken in
   - Registratieverordening 1908......................................................................................
   - Verkopingverordening 1908.......................................................................................
   - Zegelverordening........................................................................................................
   - Zegelbesluit................................................................................................................
- 12 Volksverzekeringen...................................................................................................
   - Landsverordening Algemene Ouderdomsverzekering............................................
   - Landsbesluit uitbreiding en beperking verzekeringsplicht......................................
   - verzekeringsplicht...................................................................................................... Ministeriële beschikking ter uitvoering van Landsbesluit uitbreiding en beperking
   - Landsbesluit inzake herleidingsregels......................................................................
   - Landsverordening Algemene Weduwen- en wezenverzekering.............................
   - Landsverordening algemene verzekering bijzondere ziektekosten.......................
   - Landsbesluit beperking kring van verzekerden AVBZ..............................................
   - Landsverordening basisverzekering ziektekosten
   - basisverzekering ziektekosten en premie ziekteverzekering.................................. Landsbesluit vaststelling premie, premie-inkomensgrenzen, eigen bijdrage en toeslag
   - Landsbesluit registratie verzekerden basisverzekering ziektekosten.....................
   - 2014 inzake buitenlandse particuliere ziektekostenverzekering............................ Aanschrijving tegemoetkoming in premies voor de basisverzekering ziektekosten
   - eigen risico dragers..................................................................................................... Aanschrijving tegemoetkoming premies basisverzekering ziektekosten 2013 inzake
   - 2014 inzake eigen risico dragers................................................................................ Aanschrijving tegemoetkoming in premies voor de basisverzekering ziektekosten
- 13 Werknemersverzekeringen......................................................................................
   - Landsverordening Ziekteverzekering.......................................................................
   - Landsbesluit Ziekteverzekering inzake waardering kost en inwoning....................
   - Landsverordening Ongevallenverzekering..............................................................
   - Gevarenklassenbesluit Ongevallenverzekering........................................................
   - inwoning..................................................................................................................... Landsbesluit Ongevallenverzekering inzake waardering kost en
   - Cessantialandsverordening.......................................................................................
- 14 Invordering.................................................................................................................
   - Landsverordening op de invordering van directe belastingen 1943........................
   - Landsbesluit inhouding inkomstenbelasting landsambtenaren...........................
   - Invorderingsverordening 1954...................................................................................
   - Landsverordening dwanginvordering......................................................................
   - Kostenbesluit invordering belastingen.....................................................................
- 15 Deviezen......................................................................................................................
   - Regeling Deviezenverkeer Curaçao en Sint Maarten...............................................
- 16 Douane.........................................................................................................................
   - Algemene verordening I.U. en D. 1908......................................................................
   - Besluit ter uitvoering van de algemene verordening I.U. en D. 1908.....................
   - Besluit ter uitvoering van art. 195, AL. 2 van de Algemene verordening I.U. en D. (
   - P. B. 1908 NO. 33,) en van art. 36, AL 3 van de Gedistilleerdverordening 1908 (P. B.
   - NO. 34).......................................................................................................................
   - 1.................................................................................................................................. Besluit ter uitvoering van art. 260 van de algemene verordening I.U. en D. 1908-
   - 2.................................................................................................................................. Besluit ter uitvoering van art. 260 van de algemene verordening I.U. en D. 1908-
   - Certificatenbeschikking E.E.G. 1974.........................................................................
   - Landsverordening in- en uitvoer..............................................................................
   - Landsverordening tarief van invoerrechten............................................................
   - Uitvoeringsregeling LVTI.........................................................................................
   - Aanschrijving gefaseerde vrijstelling invoerrechten..............................................
   - Bekendmaking uitvoering nieuwe vrijstelling LVTI................................................
   - Bekendmaking verlaagde tarieven van invoerrechten...........................................
   - Regeling bijzondere heffing gesubsidieerde brandstof..........................................
   - Ministeriële beschikking t.a.v. invoer sportartikelen...............................................
   - Rijkswet administratieve bijstand douane...............................................................
   - douane........................................................................................................................ Uitvoeringsbeschikking artikel 13 Rijkswet administratieve bijstand
   - Landsverordening uitvoerrecht op delfstoffen........................................................
- 17 Accijnzen....................................................................................................................
   - Landsverordening tot heffing van een bijzonder invoerrecht op benzine..............
   - Landsverordening accijns op bier 1970.....................................................................
   - Landsverordening accijns van sigaretten 1970........................................................
   - Landsbesluit accijnszegels 1970...............................................................................
   - Gedistilleerdverordening 1908.................................................................................
   - Tarieven Winstbelasting onshore (WB nfr).............................................................
   - Basiskorting en toeslagen
   - Tarieven en uitkeringen AOV/AWW........................................................................
   - Tarieven AVBZ...........................................................................................................
   - Tarieven Ziekteverzekering (ZV)..............................................................................
   - Tarieven Ongevallenverzekering (OV).....................................................................
   - Bijdrage Cessantia......................................................................................................
   - Tarieven basisverzekering ziektekosten...................................................................
   - Tarieven Successiebelasting (SB)..............................................................................
   - Boetecategorieën Wetboek van Strafrecht..............................................................
   - Boete achterstallige belastingen..............................................................................
   - Afschrijvingsbeleid IB & WB.....................................................................................
   - Valutakoersen............................................................................................................
   - Overzicht DTAs en TIEAs...........................................................................................
- Alfabetisch trefwoordenregister.................................................................................


### Afkortingenlijst

Aans. art.1A WB Aanschrijving inzake artikel 1A van de Landsverordening op de
winstbelasting 1940
Aans. BBH Aanschrijving inzake de bevordering bedrijfsvestiging en hotelbouw
Aans. BI/VV Aanschrijving Beleggingsinstelling en Vrijgestelde Vennootschap
Aans. boeteb. WB Aanschrijving inzake boetebeleid voor winstbelasting van 19 februari
2002
Aans. cert. ab aand. Aanschrijving inzake de certificering van aanmerkelijk belang aandelen
Aans. eindd. BIO Aanschrijving inzake de einddatum belastingvrijdom voor industriële
ondernemingen
Aans. fictief rend. Aanschrijving van de directeur inzake fictief rendement
Aans. fisc. tr. sam.w.v. Aanschrijving fiscaal transparante samenwerkingsverbanden
Aans. gefas. vrijst. ir. Aanschrijving gefaseerde vrijstelling invoerrechten
Aans. gk. pr. kassabonv.Aanschrijving goedkeuring prijsaanduiding en kassabonvereisten
Aans. hypotheekr. Aanschrijving van de Minister van Financiën inzake hypotheekrente
Aans. intr. aans. OB Aanschrijving inzake intrekking aanschrijvingen omzetbelasting
Aans. inv.aftr. Aanschrijving investeringsaftrek
Aans. inv.aftr. verv.res Aanschrijving van de Directeur der Belastingen inzake
investeringsaftrek ingeval toepassing van vervangingsreserve
Aans. lev. bevoorr.
schepen

'''
Aanschrijving inzake leveringen van bevoorradingsgoederen aan
schepen
'''
Aans. OB VV Aanschrijving inzake heffing van omzetbelasting ter zake van prestaties
door en aan Vrijgestelde Vennootschappen
Aans. OVB afz. o.z. trustAanschrijving overdrachtsbelastingheffing bij afzondering van
onroerende zaken in een trust
Aans. OZB Aanschrijving achterwege laten aanslagen onroerendzaakbelasting
en verruiming invorderingstermijnen
Aans. tegem.k. pr. BVZAanschrijving tegemoetkoming in premies voor de basisverzekering
ziektekosten 2014
Aans. voorz.
bank/kredietinst.

'''
Aanschrijving fiscale behandeling verplicht gestelde voorzieningen
bank- en kredietinstellingen
'''
Aans. vrijst. ob char. org.Aanschrijving vrijstelling omzetbelasting charitatieve organisaties
Aans. ziektek. pens. Aanschrijving ziektekosten gepensioneerden
Add.vw. aandelenruil Additionele voorwaarden (voorwaarden 7, 8 en 9) bij toekenning
gefacilieerde aandelenruil per 1 december 2012
Afschr.b. IB/WB Afschrijvingsbeleid IB & WB
Alg. ov.reg. wetg. best.Algemene overgangsregeling wetgeving en bestuur Land Curaçao
Alg. term. l.v. Algemene termijnenlandsverordening
ALL Algemene landsverordening Landsbelastingen
AVIUD Algemene verordening I.U. en D. 1908
Avtspf Aanschrijving verduidelijking trust en spf
Avzr Aanschrijving vaststelling zakelijke rente
Awb Algemene wet bestuursrecht
AWR Algemene wet inzake rijksbelastingen
Basisk./toesl. 2012-2016Basiskorting en toeslagen
Beleidsreg. inkeer Beleidsregels betreffende rechtsbescherming van belastingplichtigen
tegen strafrechtelijke vervolging bij inkeer
Beleidsreg. st.v.w.
bedrijfsf.

'''
Beleidsregels standaardvoorwaarden geruisloze bedrijfsfusie
'''
Besch. aanw. buit. bel.r.Beschikking aanwijzing buitenlandse belastingregimes met
vergelijkbare winstbelasting
Besch. gedr.c. inf.v. WBBeschikking gedragscode informatieverschaffing winstbelasting
Besch. onth. fact. OB Beschikking ontheffing factureringsplicht omzetbelasting

XII Curaçao


Besch. pens Beschikking pensioenen
Besch. vaste verg. Beschikking vaste vergoedingen
B. art.260 AVIUD 1908-2Besluit ter uitvoering van art. 260 van de algemene verordening I.U.
en D. 1908-
Besl. art.16 LD Besluit ter uitvoering van art 16 van de Landsverordening op
distilleerderijen
Besl. art.195 AVIUD Besluit ter uitvoering van art. 195, AL. 2 van de Algemene verordening
I.U. en D. (1908 P. B. 1908 NO. 33,) en van art. 36, AL 3 van de
Gedistilleerdverordening 1908 (P. B. 1908 NO. 34)
B. art.260 AVIUD 1908-1Besluit ter uitvoering van art. 260 van de algemene verordening I.U.
en D. 1908-
Besl. art.5,8 Ged.V Besluit ter uitvoering van art 5 & 8 van de Gedistilleerdverordening
1908
Besl. AVIUD Besluit ter uitvoering van de algemene verordening I.U. en D. 1908
Besl. inv. ber. cass. Besluit invoering beroep in cassatie in belastingzaken in de Caribische
delen van het Koninkrijk
Besl. uitv. art.23 SB Besluit uitvoering artikel 23
Boetecat. SR Boetecategorieën Wetboek van Strafrecht
Br. dub. d.b. med. trustBrief van Inspecteur inzake dubbele dienstbetrekking medewerkers
trustkantoren
Brf ink. in natura gouv.
gez.

'''
Brief van de Minister van Financiën inzake de fiscale behandeling
inkomen in natura van de gouverneur en de gezaghebbers
'''
Brief aandelenruil Brief van de directeur met betrekking tot gefacilieerde aandelenruil
bij inbreng van aandelen in een holding (Gietel-ruling)
Brief aftrek premie AOVBrief van de directeur met betrekking tot de aftrek van premie van
arbeids-ongeschiktheidsverzekeringen
Brief ink. in natura Brief van de directeur met betrekking tot inkomsten in natura
BRK Belastingregeling voor het Koninkrijk
BRNC Belastingregeling Nederland Curaçao
Bu LVTI Bekendmaking uitvoering nieuwe vrijstelling LVTI
BUPO Internationaal Verdrag inzake burgerrechten en politieke rechten
Cert.besch. E.E.G. Certificatenbeschikking E.E.G. 1974
CLv Cessantialandsverordening
Conv. invoerr. Convenant tussen Curaçao en Nederland inzake de heffing van
invoerrechten en andere indirecte belastingen in het verkeer tussen
Curaçao en Caribisch Nederland
CRS Common Reporting Standard (CRS)
Dir. bel. int. inl. CUR Directe belastingen, internationale inlichtingenuitwisseling; Curaçao
DTA NA/NOR Verdrag tussen het Koninkrijk der Nederlanden met betrekking tot de
Nederlandse Antillen en het Koninkrijk Noorwegen tot het
vermijden van dubbele belasting en het voorkomen van het
ontgaan van belasting met betrekking tot belastingen naar het
inkomen en naar het vermogen
EVRM Verdrag tot bescherming van de rechten van de mens en de
fundamentele vrijheden
FATCA-verdrag/CUR IGAVerdrag tussen het Koninkrijk der Nederlanden, ten behoeve van
Curaçao, en de Verenigde Staten van Amerika tot verbetering van
de internationale naleving van de belastingplicht en
tenuitvoerlegging van de FATCA
Gar.v. art.9A Garantieverordening artikel 9A
Gar.v. WB 1969 Garantieverordening Winstbelasting 1969
Gar.v. WB 1993 Garantieverordening Winstbelasting 1993
Gb AOV/AWW/LB Gezamenlijke beschikking AOV/AWW en loonbelasting 1976
Ged.V Gedistilleerdverordening 1908
Gev.kl.b. OV Gevarenklassenbesluit Ongevallenverzekering
Gez.reg. ESRR Gezamenlijke regeling als gevolg van de spaarrenterichtlijn
Gez.reg. kw.reg. art.35b
BRK

'''
Gezamenlijke regeling van kwalificerende regelingen
'''
Irw. ver. dig. pr. Invoeringsrijkswet vereenvoudiging en digitalisering procesrecht en
uitbreiding prejudiciële vragen
IV Invorderingsverordening 1954

Curaçao XIII

'''
Afkortingenlijst
'''

'''
Kostenb. inv. bel. Kostenbesluit invordering belastingen
LAoB Landsverordening accijns op bier 1970
LAOV Landsverordening Algemene Ouderdomsverzekering
LAR Landsverordening administratieve rechtspraak
LAVBZ Landsverordening algemene verzekering bijzondere ziektekosten
LAvS Landsverordening accijns van sigaretten 1970
LAWW Landsverordening Algemene Weduwen- en wezenverzekering
Lb. accijnszeg. Landsbesluit accijnszegels 1970
Lb. adm. sanctie Landsbesluit administratieve sanctie bij niet nakomen fiscale
verplichtingen
Lb. bep. kr. verz. AVBZ Landsbesluit beperking kring van verzekerden AVBZ
Lb. EZ Landsbesluit economische zones
Lb. fisc. kasreg.syst. Landsbesluit fiscale kasregistratiesystemen
Lb. gr. ber. bel.z. Landsbesluit griffierechten beroep in belastingzaken
Lb. herl.reg. Landsbesluit inzake herleidingsregels
Lb. inh. IB landsambt. Landsbesluit inhouding inkomstenbelasting landsambtenaren
Lb. inst. Tweede EZ Landsbesluit instellen tweede economische zone
Lb. OV waard. kost inw.Landsbesluit Ongevallenverzekering inzake waardering kost en
inwoning
Lb. reg. verz. BVZ Landsbesluit registratie verzekerden basisverzekering ziektekosten
Lb. vastst. pr. BVZ ZV Landsbesluit vaststelling premie, premie-inkomensgrenzen, eigen
bijdrage en toeslag basisverzekering ziektekosten en premie
ziekteverzekering
Lb. ZV waard. kost inw.Landsbesluit Ziekteverzekering inzake waardering kost en inwoning
LBB Landsverordening op het beroep in belastingzaken
Lbibhb Landsbesluit internationale bijstandsverlening bij de heffing van
belastingen
LBIoB Landsverordening tot heffing van een bijzonder invoerrecht op benzine
Lbubv Landsbesluit uitbreiding en beperking verzekeringsplicht
LBVZ Landsverordening basisverzekering ziektekosten
LD Landsverordening op distilleerderijen
LDB Landsverordening op de dividendbelasting 2000
LDI Landsverordening dwanginvordering
Lei di Bion Landsverordening ter bevordering van de werkgelegenheid voor
jeugdige werkzoekenden (Lei di Bion)
Leidr. FATCA Leidraad FATCA met technische toelichting bij de CUR IGA
LEZ Landsverordening economische zones 2000
Lffhbm Landsverordening fiscale faciliteiten historische binnenstad en
monumenten
LGOb LGO-besluit
LIB Landsverordening op de inkomstenbelasting 1943
Libhb Landsverordening internationale bijstandsverlening bij de heffing van
belastingen
LIDB Landsverordening op de invordering van directe belastingen 1943
LIU Landverordening in- en uitvoer
LLB Landsverordening op de Loonbelasting 1976
LOB Landsverordening omzetbelasting 1999
LOV Landsverordening Ongevallenverzekering
LOZB Landsverordening onroerendezaakbelasting 2014
LTI Landsverordening tarief van invoerrechten
Lv. inh. IB op rente-ink.Landsverordening regelende de inhouding van de inkomstenbelasting
op rente-inkomen
Lvbbv Landsverordening vereffening belastingschulden bij vertrek
LWB Landsverordening op de winstbelasting 1940
LWB off Landsverordening op de winstbelasting 1940 zoals deze luidde op 31
december 1999
LZV Landsverordening Ziekteverzekering
M.reg.fisc. kasreg. syst.Ministeriële regeling fiscale kasregistratiesystemen
Min. besch. Lbubv Ministeriële beschikking ter uitvoering van Landsbesluit uitbreiding
en beperking verzekeringsplicht
'''
'''
XIV Curaçao
'''
Afkortingenlijst


Min. besch. sport.art. Ministeriële beschikking t.a.v. invoer sportartikelen
Min. reg. gr. ev. Ministeriële regeling grote evenementen
Min.besch. kindertoesl.Ministeriële beschikking kindertoeslag ongehuwde ouder
Min.besch. rulingb. WBMinisteriële beschikking rulingbeleid winstbelasting
Min.besch. st.vw. f.e. Ministeriële beschikking standaardvoorwaarden fiscale eenheid
Min.besch. uitst. bet. abMinisteriële beschikking uitstel van betaling aanmerkelijk belang
Min.besch. werkkl. Ministeriële beschikking werkkleding 2001
Min.reg. ex-pat Ministeriële regeling ex-patriates 2013
Min.reg. FB Ministeriële regeling formeel belastingrecht
Min.reg. fooien Ministeriële regeling fooien
Min.reg. idTV Ministeriële regeling identiteit deelgerechtigden transparante
vennootschappen
Min.reg. OB Ministeriële regeling omzetbelasting
Min.reg. prio. contr.aut.Ministeriële regeling vaststelling prioriteiten uitvoering
controle-autoriteit
Min.reg. rentep. WB Ministeriële regeling rentepercentage winstbelasting
Min.reg. term. IBa Ministeriële regeling termijn inkomstenbelastingaanslagen
Mrrb Ministeriële regeling rentebelasting
Ov. DTA/TIEA Overzicht DTAs en TIEAs
Ov.reg. offsh.v. Overgangsregeling offshorevennootschappen 2001
Ov.sl.bep. wijz.l.v. Overgangs- en slotbepalingen uit voorafgaande
wijzigingslandsverordeningen
OVB Overdrachtsbelastingverordening 1908
Protocol EVRM Protocol bij het Verdrag tot bescherming van de rechten van de mens
en de fundamentele vrijheden
RABD Rijkswet administratieve bijstand douane
Rbhgb Regeling bijzondere heffing gesubsidieerde brandstof
Reg. dev.v. CUR SXM Regeling Deviezenverkeer Curaçao en Sint Maarten
Reg.V Registratieverordening 1908
Rlip 2014 Richtlijnen Investors permit 2014
Rw. cass.rechtspr. Rijkswet cassatierechtspraak voor Aruba, Curaçao, Sint Maarten en
voor Bonaire, Sint Eustatius en Saba
SBV Successiebelastingverordening 1908
St.v.w. geruisl. inbr. IB Standaardvoorwaarden geruisloze inbreng IB-onderneming
Tar. AVBZ Tarieven AVBZ
Tar. bas. verz. zk Tarieven basisverzekering ziektekosten
Tar. Cess. Bijdrage Cessantia
Tar. IB Tarieven Inkomstenbelasting (IB)
Tar. IB/WB/GB Opcenten IB, WB & GB
Tar. OV Tarieven Ongevallenverzekering (OV)
Tar. SB Tarieven Successiebelasting (SB)
Tar. uitk. AOV/AWW Tarieven en uitkeringen AOV/AWW
Tar. WB nfr Tarieven Winstbelasting onshore (WB nfr)
Tar. ZV Tarieven Ziekteverzekering (ZV)
TIEA NA/AUS Verdrag tussen de Regering van het Koninkrijk der Nederlanden ten
behoeve van de Nederlandse Antillen en de Regering van Australië
inzake de uitwisseling van inlichtingen met betrekking tot
belastingen
Tonnagebel. Landsverordening op de scheepstonnagebelasting 2007
Uitv. vrijst. LVTI Bekendmaking verlaagde tarieven van invoerrechten
Uitv.beleid
LB/AOV/AWW/AVBZ

'''
Fringe Benefits, uitvoeringsbeleid voor de Loonbelasting en premies
AOV/AWW en AVBZ 2000 (door de BAB)
'''
Uitv.besch. art.13 RABDUitvoeringsbeschikking artikel 13 Rijkswet administratieve bijstand
douane
Uitv.reg. LTI Uitvoeringsregeling LVTI
Uitv.v. art.11 BRK Uitvoeringsvoorschriften artikel 11 Belastingregeling voor het Koninkrijk
(Curaçao en Sint Maarten)
Un. Ned. uitvv. 2015 Universele Nederlandse uitvoeringsvoorschriften 2015 inzake
belastingverdragen, uitgezonderd het belastingverdrag met de

Curaçao XV

'''
Afkortingenlijst
'''

'''
Verenigde Staten van Amerika, en de Belastingregeling Nederland
Curaçao
Valutak. Valutakoersen
Verd. verh. beleidsr. Verduidelijking verhouding tussen Beleidsregels van de Minister van
Justitie en de Minister van Financiën en de Instructie aan de
Inspecteur der Belastingen en het Openbaar Ministerie
Verk. V Verkopingverordening 1908
WABB Verdrag inzake wederzijdse administratieve bijstand in belastingzaken
Zegelbesl. Zegelbesluit
ZegelV Zegelverordening
'''
'''
XVI Curaçao
'''
Afkortingenlijst


### Formeel belastingrecht



### Algemene overgangsregeling wetgeving en

### bestuur Land Curaçao^1

'''
Art. 1
Behoud rechtskracht tot
intrekking of wijziging
'''
**1.** Alle op het tijdstip van inwerkingtreding van de Staatsregeling in Curaçao geldende
landsverordeningen, landsbesluiten, houdende algemene maatregelen en andere
besluiten van regelgevende aard van de Nederlandse Antillen, alsmede eilandsveror-
deningen en eilandsbesluiten, houdende algemene maatregelen van het eilandgebied
Curaçao blijven van kracht, totdat zij met inachtneming van de Staatsregeling zijn
gewijzigd of ingetrokken.
**2.** Het bepaalde in het eerste lid geldt niet voor de in de Bijlage A en B bij deze **Uitzonderingen**
landsverordening vermelde landsverordeningen, landsbesluiten, houdende algemene
maatregelen en andere besluiten van regelgevende aard van de Nederlandse Antillen,
alsmede eilandsverordeningen en eilandsbesluiten, houdende algemene maatregelen
van het eilandgebied Curaçao.

'''
Art. 2
Behoud rechtskracht tot
intrekking of wijziging
'''
Besluiten van de Nederlandse Antillen en van het eilandgebied Curaçao die niet van
regelgevende aard zijn en op het tijdstip van inwerkingtreding van de Staatsregeling
in Curaçao rechtskracht hebben, behouden hun rechtskracht, totdat zij met inachtne-
ming van de Staatsregeling zijn gewijzigd of ingetrokken.

'''
Art. 3
Handhaving bestuursorga-
nen
'''
De op het tijdstip van inwerkingtreding van de Staatsregeling van Curaçao in het ei-
landgebied Curaçao bestaande bestuursorganen blijven gehandhaafd, totdat zij met
inachtneming van de Staatsregeling door andere organen zijn vervangen of zijn op-
geheven.

'''
Art. 4
Overgang rechten en ver-
plichtingen
'''
Met ingang van de datum van inwerkingtreding van de Staatsregeling van Curaçao
gaan alle rechten en verplichtingen naar burgerlijk recht van het eilandgebied Curaçao
over op het land Curaçao.

'''
Art. 5
'''
**1.** De in artikel 1 bedoelde landsverordeningen van de Nederlandse Antillen en ei- **Overgang status**
landsverordeningen van het eilandgebied Curaçao verkrijgen de staat van landsver-
ordeningen van Curaçao.
**2.** De in artikel 1 bedoelde landsbesluiten, houdende algemene maatregelen van de
Nederlandse Antillen en eilandsbesluiten, houdende algemene, maatregelen van
het eilandgebied Curaçao verkrijgen de staat van landsbesluit, houdende algemene
maatregelen van Curaçao.
**3.** De in artikel 1 bedoelde andere besluiten van regelgevende aard van de Nederlandse
Antillen verkrijgen de staat van ministeriële regeling met algemene werking van Cu-
raçao.

'''
Art. 6
'''
**1.** In de tekst van de regelingen die ingevolge artikel 5 de staat van landsverordening, **Aanpassingen**
landsbesluit houdende algemene maatregelen of ministeriële regeling van Curaçao
verkrijgen, vinden met toepassing van de volgende leden van dit artikel de aanpassin-
gen plaats die als gevolg van het verkrijgen van deze nieuwe hoedanigheid noodza-
kelijk zijn.
**2.** Waar melding wordt gemaakt van het land de Nederlandse Antillen of het eiland-
gebied Curaçao, treedt daarvoor in de plaats het land Curaçao.

1 A.B. 2010-

**Algemene overgangsregeling wetgeving en bestuur Land Curaçao 1** art. 6


**3.** Waar melding wordt gemaakt van de eilanden of eilandgebieden Curaçao, Bonaire,
de Bovenwindse Eilanden, Sint Maarten, Saba of Sint Eustatius of voorzien wordt in
gevallen die samenhangen met de gedecentraliseerde staatsinrichting van de Neder-
landse Antillen, vervallen de desbetreffende artikelen of gedeelten van artikelen,
voor zover zulks uit de gewijzigde rechtsorde voortvloeit.
**4.** Waar onderscheid wordt gemaakt tussen procedures op het eiland Curaçao en de
overige eilanden van de Nederlandse Antillen, wordt de voor Curaçao geldende rege-
ling gevolgd.
**5.** Waar melding wordt gemaakt van ambten, organen, instellingen, diensten of
kantoren van de Nederlandse Antillen of van het eilandgebied Curaçao, treden
daarvoor in de plaats de overeenkomstige met inachtneming van de Staatsregeling
ingestelde ambten, organen, instellingen, diensten of kantoren van het land Curaçao.
**6.** Waar melding wordt gemaakt van het Hof van Justitie van de Nederlandse Antillen,
treedt daarvoor in de plaats het Gemeenschappelijk Hof van Justitie van Curaçao,
Aruba, Sint Maarten en van Bonaire. Sint Eustatius en Saba, als bedoeld in de Rijkswet
Gemeenschappelijk Hof van Justitie.
**7.** Waar voor de uitvoering van taken van het land wordt voorzien in de medewerking
of tussenkomst van eilandelijke organen en waar voor de uitvoering van taken door
een eilandgebied wordt voorzien in de medewerking of tussenkomst van landelijke
organen, vervallen de desbetreffende artikelen of gedeelten van artikelen, voor zover
voor deze medewerking of tussenkomst in de gewijzigde rechtsorde geen plaats meer
is.
**8.** Waar melding wordt gemaakt van uitvoering of nadere regeling bij eilandsveror-
dening, treedt daarvoor in de plaats uitvoering of nadere regeling bij landsbesluit,
houdende algemene maatregelen.
**9.** Waar van enige beslissing beroep wordt opengesteld op de eilandsraad of een
commissie daaruit, treedt daarvoor in de plaats beroep overeenkomstig de bepalingen
van de Landsverordening Administratieve Rechtspraak.
**10.** Waar melding wordt gemaakt van de gezaghebber, treedt daarvoor in de plaats
de minister tot wiens taak de betreffende aangelegenheid behoort of een door deze
aan te wijzen ambtenaar.
**11.** Waar aan de gezaghebber is opgedragen eden af te nemen, treedt daarvoor in
de plaats de Gouverneur.
**12.** Waar melding wordt gemaakt van de gezaghebber of het plaatselijk hoofd van
Politie als bevoegde instantie tot het afgeven van een bijzondere last tot het binnen-
treden van woningen, vervalt de betreffende aanduiding.
**13.** Waar melding wordt gemaakt van het plaatselijk hoofd van Politie treedt daarvoor
in de plaats de minister van Justitie of een door hem aan te wijzen ambtenaar.
**14.** Waar melding wordt gemaakt van algemene verordeningen wordt deze term
vervangen door: wettelijke regelingen.
**15.** Waar melding wordt gemaakt van bedragen luidend in de geldeenheid van de
Nederlandse Antillen treden daarvoor in de plaats gelijkluidende bedragen in de
geldeenheid nader door Curaçao en Sint Maarten overeen te komen bij onderlinge
regeling als bedoeld in artikel 38 van het Statuut.
**16.** Verwijzingen naar andere artikelen, andere regelingen of andere onderdelen
daarvan, worden waar nodig aangepast.
**17.** Voor zover dit niet reeds uit de voorgaande leden van dit artikel voortvloeit,
worden aanduidingen en formuleringen die met de gewijzigde rechtsorde niet meer
in overeenstemming zijn, daarmee in overeenstemming gebracht of geschrapt.

**Art. 7
Vaststelling bij landsbe-
sluit**

**1.** Voor zover dit niet reeds uit de voorgaande leden van dit artikel voortvloeit, worden
aanduidingen en formuleringen die met de gewijzigde rechtsorde niet meer in over-
eenstemming zijn, daarmee in overeenstemming gebracht of geschrapt.
**2.** Bij eilandsbesluit vastgestelde ontwerpen van landsbesluiten, als bedoeld in het
eerste lid, verkrijgen op het tijdstip van inwerkingtreding van de Staatsregeling de
staat van landsbesluit van Curaçao.

**1** art. 7 **Algemene overgangsregeling wetgeving en bestuur Land Curaçao**


**3.** De met toepassing van artikel 6 aangepaste teksten van regelingen die de staat
van ministeriële regeling van Curaçao verkrijgen, worden bij beschikking van de mi-
nister van Justitie vastgesteld.
**4.** Bij de vaststelling, bedoeld in het eerste en derde lid, wordt de wettelijke spelling
van de Nederlandse taal gebruikt. Zonodig worden artikelen vernummerd en leden
van artikelen genummerd of vernummerd.

'''
Art. 7A^2
Plaatsing geconsolideerde
tekst
'''
De geconsolideerde tekst van de wettelijke regelingen die met toepassing van deze
landsverordening zijn gewijzigd, worden op voordracht van de Minister van Justitie,
bij landsbesluit vastgesteld. Het landsbesluit wordt in het Afkondigingsblad geplaatst
met de aanduiding "GT".

'''
Art. 7B^3
Aanwijzigingen voor opma-
ken geconsolideerde tekst
'''
De voor een regeling eerst verantwoordelijke minister past bij het opmaken van de
geconsolideerde tekst van een wettelijke regeling de volgende aanwijzingen toe:
_a._ bepalingen die op het tijdstip van inwerkingtreding van de Staatsregeling reeds
waren uitgewerkt dan wel wijzigingen van andere regelingen inhouden, worden ge-
schrapt;
_b._ verwijzingen naar andere artikelen, andere regelingen of andere onderdelen
daarvan, worden, waar nodig, aangepast;
_c._ aanduidingen en formuleringen die met de geldende rechtsorde niet meer in
overeenstemming zijn, worden daarmee in overeenstemming gebracht of geschrapt;
_d._ de op dat moment gangbare spelling van de Nederlandse taal wordt gebruikt;
_e._ zonodig worden artikelen vernummerd en leden van artikelen genummerd of
vernummerd.

**Art. 8**
Bij de uitvoering van artikel 6 worden tevens in aanmerking genomen de wijzigingen **Uitvoering Art. 6**
die na 31 december 2009 zijn aangebracht in de in dat artikel bedoelde wettelijke re-
gelingen.

'''
Art. 9
Gelding na verlies rechts-
kracht
'''
Op het tijdstip van inwerkingtreding van de Staatsregeling bestaande rechten, geba-
seerd op wettelijke regelingen die op dat tijdstip hun rechtskracht verliezen, kunnen
ook daarna geldend worden gemaakt, indien de redelijkheid en billijkheid dit vorde-
ren.

'''
Art. 9A^4
Rechtskracht besluit
rechtspositie Korps Politie
NA
'''
Het Besluit rechtspositie Korps Politie Nederlandse Antillen 2000 (P.B. 2000, no. 80)
blijft van kracht.

**Art. 10**
Deze landsverordening kan worden aangehaald als “Algemene overgangsregeling **Citeertitel**
wetgeving en bestuur Land Curaçao” en treedt in werking op het tijdstip waarop de
Rijkswet wijziging Statuut in verband met de opheffing van de Nederlandse Antillen
in werking treedt.

2 Toegevoegd bij de Landsverordening houdende de wijziging van de Algemene overgangsregeling wetgeving
en bestuur Land Curaçao.
3 Toegevoegd bij de Landsverordening houdende de wijziging van de Algemene overgangsregeling wetgeving
en bestuur Land Curaçao.
4 Toegevoegd bij de Landsverordening houdende de wijziging van de Algemene overgangsregeling wetgeving
en bestuur Land Curaçao.

**Algemene overgangsregeling wetgeving en bestuur Land Curaçao 1** art. 10


'''
Bijlage A
'''
'''
In deze bundel zijn alleen de onderdelen inzake belastingen opgenomen.
'''
#### BELASTINGEN

'''
P.B. No. 1a Personeel der belastingen
Lvo. houdende regeling van de overgang van het per-
soneel v.d. landsoverheidsdienst Belastingaccountants-
bureau naar de Stichting Belastingaccountantsbureau.
'''
#### 2001, 150

'''
P.B. No. Hondenbelasting
1944, 39 Tekst van de "Hondenverordening 1923"
Hondenbelastingverordening 1946 (Wijz. van P.B.
1944, 39)
'''
#### 1946, 112

'''
P.B. No. 13. Inkomstenbelasting en loonbelasting
Uitvoering loonbelasting:
1959, 190: L.h.a.m. tot vaststelling van het tijdstip voor
het welk de eilandsverordening betreffende heffing
van opcenten moet zijn afgekondigd (Aruba).
1985, 77 Alsvoren (Aruba).
1993,113 Alsvoren (St. Maarten).
2007, 8 L.h.a.m. tot vaststelling van het tijdstip vóór
hetwelk de eilandsverordening van het eilandgebied
Sint Maarten van de 4de december 2006 tot wijziging
van de Eilandsverordening van de 25 mei 1965 rege-
lende de heffing van opcenten op de aanslagen in de
inkomstenbelasting en de winstbelasting (A.B. 1965,
nr. 3), strekkende tot verlaging van de opcenten gehe-
ven op de inkomstenbelasting van 30 naar 25, wordt
afgekondigd
P.B. No. Winstbelasting
L.h.a.m. tot vaststelling van het tijdstip voor het welk
de eilandsverordening betr. heffing van opcenten moet
zijn afgekondigd (Aruba)
'''
#### 1959, 190

'''
1993, 113 Alsvorens (St. Maarten).
L.h.a.m. tot vaststelling van het tijdstip voor hetwelk
de eilandsverordening van het eilandgebied Sint
'''
#### 2007, 8

'''
Maarten van de 4de december 2006 tot wijziging van
de Eilandsverordening van de 25ste mei 1965 regelende
de heffing van opcenten op de aanslagen in de inkom-
stenbelasting en de winstbelasting (A.B. 1965, nr. 3),
strekkende tot verlaging van de opcenten geheven op
de inkomstenbelasting van 30 naar 25, wordt afgekon-
digd
P.B. No. In-, uit- en doorvoer en de accijnzen
Uitvoering Algemene Verordening I.U. en D. 1908:
1939, 66 Verordening tot het tijdelijk afschaffen van
invoerrechten en accijnzen op de eilanden Saba, St.
Eustatius en St. Maarten (Ned. ged.). Wijzigingen:
1942,243; 1944,4; 1946,193; 1949,1; 1950,51; 1951,79;
1952,20,179; 1954,3,126; 1955,137; 1957,6;
P.B. No. Invoerrecht benzine
1985, 105 Bevoegdheidsverlening aan Aruba.
Regeling bijzonder invoerrecht op benzine Boven-
windse eilanden Wijzigingen: 1986,148; 1995, 231;
'''
#### 1985, 151

'''
1996,75(gewijzigd bij 1996,210); 1997,123, 237 (art.
'''
**1** bijlage A **Algemene overgangsregeling wetgeving en bestuur Land Curaçao**


'''
LXXXVI); 1997,264; 1999,242 (art.XXIV); 2000,30;
2002,109 (p.58); 2005, 73; 2006,82;
'''
#### VERKEER EN VERVOER

**P.B. No. Motorrijtuigenbelasting**
Tekst van de "motorrijtuig-, rijwiel- en motorbootbe-
lastingverordening 1928" Wijzigingen: 1938,35; 1941,14,

#### 1936, 17

'''
inwtr.: 1941,78; 1941,164; 1949,145; 1951,19; 1952,129;
2001,80 (p.4);
'''
#### ORGANISME DER EILANDGEBIEDEN

**P.B. No. Financiën**
Landsverordening toescheiding belastingopbrengsten
(uitv. art. 87 ERNA) Wijzigingen: 1957,155; 1971,15;
1975,254;

#### 1955, 100

'''
Landsverordening tot tijdelijke wijziging van het per-
centage genoemd in het tweede lid van art. 87 van de
Eilandenregeling Wijziging: 1960,215;
'''
#### 1957, 59

'''
Lv. tot wijziging van verschillende belastingverordenin-
gen en tijdelijke wijziging van het aandeelpercentage
als bedoeld in art. 86, lid 2 van de ERNA
'''
#### 1961, 80

**P.B. No. Bevoegdheden**
Lv. houdende verlening aan het eilandgebied Aruba
van de bevoegdheid tot het heffen en invorderen van

#### 1985, 105

een bijzondere omzetbelasting op benzine en van een
bijzondere belasting op inkomens
**P.B. No. Eilandsverordeningen en -besluiten**
Lb.h.a.m. tot vaststelling van het tijdstip voor het welk
de eilandsverordening van 29 december 1984 van het

#### 1985, 77

'''
eilandgebied Aruba,regelende de heffing van dertig
opcenten op de aanslagen in de I.B., aanvangende met
het belastingjaar 1985, moet zijn afgekondigd.
Lb.h.a.m. van de 8ste december 1986 tot vaststelling
van het tijdstip voor hetwelk het besluit van het be-
'''
#### 1986, 158

'''
stuurscollege bepalende de datum van inwerkingtre-
ding van de eilandsverordening van het eilandgebied
Curaçao van de 18de april 1985 (A.B. 1985, no. 10) zoals
gewijzigd bij eilandsverordening van 30 augustus 1986
(A.B. 1986 no. 20) tot wijziging van de eilandsverorde-
ning regelende de heffing van opcenten op de aansla-
gen in de Inkomstenbelasting en de Winstbelasting
(A.B. 1959 no. 47) waarbij de opcenten op de aanslagen
in de Inkomstenbelasting over 1987 en volgende belas-
tingjaren op 30 zijn gebracht, moet zijn afgekondigd.
L.h.a.m. tot vaststelling van het tijdstip voor hetwelk
de eilandsverordening van het eilandgebied St. Maar-
'''
#### 1993, 113

'''
ten tot wijziging v.d. eilandsverordening v.d. 25ste mei
1965 regelende de heffing van opcenten op de aansla-
gen in de inkomstenbelasting en de Winstbelasting,
waarbij de opcenten op de aanslagen in de inkomsten-
'''
**Algemene overgangsregeling wetgeving en bestuur Land Curaçao 1** bijlage A


'''
belasting ingaande 1 januari 1994 op 30 zijn gebracht,
moet zijn afgekondigd.
P.B. No. Departementen en diensten
Lvo. tot aanwijzing van het belastingcontroleorgaan
van de Nederlanse Antillen ("Stichting Overheidsbelas-
tingaccountantsbureau").
'''
#### 2001, 149

'''
Bijlage B
'''
'''
In deze bundel zijn alleen de onderdelen inzake belastingen opgenomen.
'''
#### BELASTINGEN

'''
P.B. No. Belastingspaarregeling
Eilandsverordening nopens het instellen van een be-
lastingspaarregeling "Belastingspaarregeling"
'''
#### 1966, 68

'''
P.B. No. Logeergastenbelasting
Eilandsverordening nopens de heffing en inning van
een logeergastenbelasting “Logeergastenbelastingver-
ordening Curaçao”
'''
#### 1969, 46

'''
Eilandsbesluit, houdende algemene maatregelen van
de 27ste november 1969 ter uitvoering van artikel 16
'''
#### 1969 81

'''
van de Logeergastenbelastingverordening Curaçao
(A.B. 1969, no. 46)
P.B. No. Motorrijtuig- en motorbootbelasting
Eilandsverordening, van de 19de december 1952 tot
vaststelling van de “Motorrijtuig- en motorboot-belas-
'''
#### 1952, 9

'''
tingverordening” “Motorrijtuig- en motorbootbelas-
tingverordening” Wijzigingen: 1954, 7; 1958, 11; 1962,
16; 1964, 28;
P.B. No. Retributies
Eilandsverordening van de 19de December 1952 tot
vaststelling van de "Algemene Retributieverordening"
"Algemene Retributieverordening"
'''
#### 1952, 7

'''
Uitvoering:
Eilandsbesluit, houdende algemene maatre-
gelen, van de 30ste September 1953, rege-
'''
#### 1953

#### 32

'''
lende de heffing en inning van retributies,
verschuldigd voor het gebruik van schoolloka-
len en -terreinen in gebruik bij het openbaar
onderwijs "Retributiebesluit gebruik school-
lokalen"
Eilandsbesluit, houdende algemene maatre-
gelen, van de 12de Mei 1954, regelende de
'''
#### 1954

#### 26

'''
heffing en inning van retributies wegens
diensten door de Dienst van Openbare Wer-
ken bewezen "Retributiebesluit Openbare
Werken Wijziging: 1956,2;
Eilandsbesluit, houdende algemene maatre-
gelen, van de 24ste November 1954, regelende
'''
#### 1954

#### 38

'''
de heffmg en inning van retributies, verschul-
digd voor het huren van films van het van
toegang eilandgebied en voor het verkrijgen
'''
**1** bijlage B **Algemene overgangsregeling wetgeving en bestuur Land Curaçao**


'''
tot vanwege het eilandgebied te verzorgen
filmvoorstellingen "Retributiebesluit film-
dienst"
Eilandsbesluit, houdende algemene maatre-
gelen, van de 25ste April 1955 regelende het
gebruik van openbare vleeshallen
'''
#### 1955

#### 28

'''
Eilandsbesluit, houdende algemene maatre-
gelen, van 15 mei 1964, regelende de heffing
'''
#### 1964

#### 19

en inning van retributies, verschuldigd voor
het gebruik van de openbare markten "Retri-
butiebesluit Marktgelden"
**P.B. No. Winstbelasting**
Eilandsverordening van de 14de december 1995 hou-
dende tijdelijke opschorting van de werking van artikel

#### 1995 49

'''
1a van de Eilandsverordening regelende de heffing
van opcenten op de aanslagen in de Inkomsten en de
Winstbelasting (A.B. 1959 no. 47)
Eilandsverordening houdende opschorting van de
werking van artikel 1a van de Eilandsverordening rege-
'''
#### 1997 83

'''
lende de heffing van opcenten op de aanslagen van
de inkomsten- en de Winstbelasting (A.B. 1959 no. 47)
gedurende het jaar 1998
Eilandsverordening houdende tijdelijke opschorting
van de werking van artikel 1a van de Eilandsverorde-
'''
#### 1998 80

'''
ning regelende de heffing van opcenten op de aan
slagen van de inkomsten- en de Winstbelasting (A.B.
1959 no. 47)
'''
**Algemene overgangsregeling wetgeving en bestuur Land Curaçao 1** bijlage B


### Algemene landsverordening Landsbelastingen

'''
LANDSVERORDENING van de 3de augustus 2001 houdende algemene bepalingen
van formeel belastingrecht (Algemene landsverordening Landsbelastingen)^1
'''
'''
Hoofdstuk I
Algemene bepalingen
'''
**Art. 1
Werkingssfeer 1.** De bepalingen van deze landsverordening gelden bij de heffing van:
_a._ inkomstenbelasting als bedoeld in de Landsverordening op de inkomstenbelasting
1943 (P.B. 2002, no. 63);
_b._ loonbelasting als bedoeld in de Landsverordening op de Loonbelasting 1976 (P.B.
1975, no. 254);
_c._ winstbelasting als bedoeld in de Landsverordening op de winstbelasting 1940 (P.B.
2002, no. 54);
_d._ scheepstonnagebelasting als bedoeld in de Landsverordening op de Scheepston-
nagebelasting 2007;
_e._ overdrachtsbelasting als bedoeld in de Overdrachtsbelastingverordening 1908
(P.B. 1908, no. 49);
_f._ successie- en overgangsbelasting als bedoeld in de Successiebelastingverordening
1908 (P.B. 1908, no. 48);
_g._ onroerendezaakbelasting als bedoeld in de Landsverordening onroerendezaakbe-
lasting 2014 (P.B. 2013, no. 54);^2
_h._ omzetbelasting als bedoeld in de Landsverordening omzetbelasting 1999 (P.B.
1999, no. 43);
_i._ dividendbelasting als bedoeld in de Landsverordening op de dividendbelasting
2000 (P.B. 1999, no. 246);
_j._^3 de Landsverordening regelende de inhouding van de inkomstenbelasting op rente-
inkomen.

**2.** De bepalingen van deze landsverordening zijn van overeenkomstige toepassing
op binnen Curaçao gevestigde lichamen, die niet aan belastingheffing zijn onderwor-
pen dan wel van belastingheffing zijn vrijgesteld.

**Art. 2
Definities 1.** In deze landsverordening en de daarop berustende bepalingen wordt verstaan
onder:
_a._ belastingverordening: deze landsverordening, de in artikel 1 bedoelde heffingsver-
ordeningen, alsmede alle ter uitvoering van die landsverordeningen gegeven wettelijke
regelingen;
_b._ lichamen: verenigingen en andere rechtspersonen, vennootschappen en doelver-
mogens;
_c._ belastingen: de belastingen, genoemd in artikel 1, met inbegrip van de administra-
tieve boeten die ingevolge de belastingverordening kunnen worden opgelegd.

**2.** De belastingverordening verstaat onder:
_a._ Minister: de Minister van Financiën;
_b._ Directeur: de Sectordirecteur Fiscale Zaken;

'''
1
'''
'''
2
'''
'''
3
'''
'''
Zoals deze luidt na wijzigingen, het laatst bij P.B. 2018-83.
De geconsolideerde tekst van de Algemene landsverordening Landsbelastingen is bij P.B. 2013-53 gepubliceerd
en van toepassing met ingang van 01/05/13.
Artikel 13 van P.B. 2013-54 is ietwat onduidelijk over dit onderdeel. Het wijzigt ofwel onderdeel g waarin de
Landsverordening Grondbelasting 1908 was opgenomen ofwel het voegt een nieuw onderdeel toe. Bewerker
heeft in verband met de intrekking van de Landsverordening Grondbelasting 1908 onderdeel g gewijzigd.
Ingevoegd bij P.B. 2014-115 met ingang van 01/01/15.
'''
**2** art. 1 **Algemene landsverordening Landsbelastingen**


_c._ Inspecteur: de Inspecteur der Belastingen en, uitsluitend voor de toepassing van
Hoofdstuk VI, de Ontvanger en de Directeur van de Stichting Overheids Belastingac-
countantsbureau en door de Minister bij ministeriële regeling, met algemene werking,
aangewezen medewerkers van zelfstandige bestuursorganen;^4
_d._ Ontvanger: de functionaris die belast is met de invordering van de door de Inspec-
teur vastgestelde aanslagen;
_e._ belastingaanslag: de voorlopige aanslag, de aanslag, de navorderingsaanslag als-
mede de naheffingsaanslag;
_f._ belastingplichtige: de natuurlijke of rechtspersoon van wie op grond van een belas-
tingverordening belasting wordt geheven;
_g._ het Gerecht: het Gerecht in eerste aanleg van Curaçao, bedoeld in artikel 1, eerste
lid, van de Landsverordening op het beroep in belastingzaken^5 ;
_h._ bevoegde autoriteit: de door een staat tot het uitwisselen van inlichtingen aange-
wezen persoon of instantie;
_i._^6 open commanditaire vennootschap: de commanditaire vennootschap waarbij,
buiten het geval van vererving of legaat, toetreding of vervanging van commanditaire
vennoten kan plaats hebben zonder toestemming van alle vennoten, gewone zowel
als commanditaire;
_j._ Crib-nummer: een door de Inspecteur toegekend identificatienummer;
_k._ ID-nummer: een door het bevolkingsregister toegekend nummer;
_l._^7 monument: een onroerende zaak, welke voor ten minste vijftig jaar vervaardigd
is en die van algemeen belang wordt geacht wegens zijn schoonheid, zijn kunstwaarde,
zijn betekenis voor de wetenschap, de geschiedenis van het Land of zijn volkskundige
waarde;
_m._ beschermd monument: een monument, welke is ingeschreven in het openbaar
register voor beschermde monumenten, bedoeld in artikel 6, eerste lid, van de Monu-
menteneilandsverordening Curaçao^8 of een onroerende zaak in de binnenstad, be-
doeld in onderdeel n, is gelegen;
_n._ binnenstad: het stadsgebied en het havengebied die door United Nations Educati-
onal Scientific and Cultural Organization als historisch gebied van Curaçao zijn erkend
en die bij landsbesluit, houdende algemene maatregelen, aangewezen wordt als het
historische gedeelte van Willemstad.

'''
Art. 2a
Bevoegdheid tot verlenen
mandaat
'''
**1.** De Inspecteur kan mandaat verlenen aan ambtenaren met de heffing en invordering
van belasting belast en aan medewerkers van de Stichting Overheids Belastingaccoun-
tantsbureau.
**2.** De Ontvanger en de Directeur van de Stichting Overheid Belastingaccountantsbu-
reau kunnen mandaat verlenen aan respectievelijk ambtenaren met de invordering
van belasting belast en aan medewerkers van de Stichting Overheids Belastingaccoun-
tantsbureau.
**3.** Het mandaat wordt schriftelijk verleend.
**4.** Het mandaat omvat alle bevoegdheden die uit de belastingverordening voort-
vloeien, maar kan door de Inspecteur worden beperkt.
**5.** De mandaatgever blijft bevoegd de gemandateerde bevoegdheid uit te oefenen.
**6.** De mandaatgever kan het mandaat te allen tijde intrekken.

'''
Art. 3^9
Definities belastingveror-
deningen
'''
**1.** Waar in de belastingverordening wordt gesproken van:

4 Gewijzigd bij P.B. 2018-30 met ingang van 16/06/18.
5 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
6 De onderdelen i, j en k zijn herletterd bij P.B. 2015-53 met ingang van 26/09/15.
7 Onderdelen l, m en n zijn ingevoegd bij P.B. 2016-78 met ingang van 01/01/17 conform P.B. 2016-82.
8 A.B. 1990, 5.
9 Gewijzigd bij P.B. 2014-114 met ingang van 01/01/15. Herletterd bij P.B. 2015-53 met ingang van 01/01/16.

**Algemene landsverordening Landsbelastingen 2** art. 3


'''
a. de bestuurder van een lichaam, wordt daaronder begrepen de besturende vennoot
van een vennootschap en de binnenlandse vertegenwoordiger van een niet binnen
Curaçao gevestigd lichaam, alsmede in geval van ontbinding degene die met de ver-
effening is belast;
b. vereniging, wordt daaronder begrepen het samenwerkingsverband zonder
rechtspersoonlijkheid die maatschappelijk met een vereniging gelijk kan worden
gesteld;
c. transparante vennootschap, wordt daaronder begrepen het lichaam waarbij het
kapitaal geheel of gedeeltelijk in aandelen is verdeeld dat in overeenstemming met
de in artikel 3b neergelegde procedure te kennen heeft gegeven dat het lichaam voor
toepassing van de landsverordeningen, bedoeld in artikel 1, eerste lid, onderdelen a,
c of i, behandeld wenst te worden als een vennootschap, als bedoeld in de Landsver-
ordening personenvennootschap^10 ;
d. Curaçao, wordt daar mede onder begrepen het buiten de territoriale zee van de
Curaçao gelegen deel van de zeebodem en de ondergrond daarvan, voor zover het
Koninkrijk der Nederlanden daar op grond van het internationale recht ten behoeve
van de exploratie en de exploitatie van natuurlijke rijkdommen soevereine rechten
mag uitoefenen, alsmede de in, op of boven dat gebied aanwezige installaties en
andere inrichtingen ten behoeve van de exploratie en exploitatie van natuurlijke
rijkdommen in dat gebied.
'''
**2.** Onverminderd het in het eerste lid, onderdeel c, bepaalde, kan een lichaam slechts
als transparante vennootschap worden aangemerkt, indien:
_a._ alle aandelen in haar kapitaal luiden op naam;
_b._ de statuten een aanbiedingsregeling voor de overdracht van aandelen bevatten,
waarin aan de aandeelhouder die één of meer aandelen wil vervreemden, de verplich-
ting wordt opgelegd om slechts aan een mede aandeelhouder of aan een derde - die
gelijktijdig met de overdracht aan het bestuur van het lichaam, een verklaring overlegt
akkoord te gaan met de behandeling van het lichaam als een vennootschap, als be-
doeld in de Landsverordening personenvennootschap zoals bepaald in deze landsver-
ordening - aandelen over te dragen;
_c._ het bestuur van het lichaam een register bijhoudt waarin de namen en adressen
van de uiteindelijke gerechtigden die een belang van 10% of meer hebben in het li-
chaam zijn opgenomen.
**3.** Voor doeleinden van afdeling 2 van hoofdstuk VIII van deze landsverordening
wordt een transparante vennootschap behandeld als ware het een aan een belasting
als bedoeld in artikel 1, eerste lid, onderdelen c en i, onderworpen lichaam.

**Art. 3a
Transparante vennoot-
schap**

**1.** Waar in een landsverordening als bedoeld in artikel 1, eerste lid, onderdelen a, c
of i, wordt gesproken van naamloze vennootschappen, besloten vennootschappen,
of andere vennootschappen of verenigingen waarbij het kapitaal geheel of gedeeltelijk
in aandelen is verdeeld, wordt daaronder niet begrepen de transparante vennootschap.
**2.** Voor de toepassing van de landsverordeningen, bedoeld in artikel 1, eerste lid,
onderdelen a, c of i, wordt het inkomen en vermogen van de transparante vennoot-
schap aangemerkt als het inkomen en vermogen van de deelgerechtigden tot het
vermogen van de transparante vennootschap

**Art. 3b**^11
**Verzoek transparante sta-
tus**

**1.** Een lichaam wordt overeenkomstig artikel 3, eerste lid, onderdeel c, behandeld
als een vennootschap, als bedoeld in de Landsverordening personenvennootschap,
indien door of namens het bestuur van het lichaam, na daartoe door elk van haar
aandeelhouders afzonderlijk te zijn gemachtigd, een schriftelijk verzoek wordt inge-
diend bij de Inspecteur. De Inspecteur beslist binnen twee maanden na ontvangst
van een verzoek als bedoeld in de eerste volzin bij voor bezwaar vatbare beschikking.

'''
10 P.B. 2011-61.
11 Gewijzigd bij P.B. 2014-114 met ingang van 01/01/15.
'''
**2** art. 3a **Algemene landsverordening Landsbelastingen**


Indien de beschikking als hiervoor bedoeld, niet binnen de termijn, genoemd in de
tweede volzin, wordt verzonden, wordt het verzoek geacht te zijn ingewilligd. Indien
blijkt dat niet aan alle voorwaarden is voldaan, komt de transparante status van het
lichaam met terugwerkende kracht te vervallen.

**2.**. Het verzoek, bedoeld in het eerste lid, kan uitsluitend worden ingediend door:
_a._ een in het jaar van het verzoek of daaraan voorafgaand jaar opgericht lichaam, of
_b._ een reeds eerder bestaand lichaam, indien het lichaam in het jaar van het verzoek
of het daaraan voorafgaande jaar geen deelneming heeft waarvan de winst op grond
van het bepaalde in artikel 11, vierde lid, van de Landsverordening op de winstbelasting
1940, gedeeltelijk buiten aanmerking is gebleven.^12
**3.** Een lichaam als bedoeld in het tweede lid, onderdeel a, is verplicht het verzoek,
bedoeld in het eerste lid, binnen drie maanden na de oprichting van het lichaam, in
te dienen;
**4.** Een lichaam als bedoeld in het tweede lid, onderdeel b, is verplicht het verzoek,
bedoeld in het eerste lid, voorafgaand aan of binnen drie maanden na aanvang van
het boekjaar waarin het lichaam als transparante vennootschap wenst te worden
behandeld, in te dienen.
**5.** Het verzoek, bedoeld in het eerste lid, bevat tevens de bij ministeriële regeling
met algemene werking nader aan te duiden gegevens omtrent de identiteit van de
deelgerechtigden tot het vermogen van het lichaam.
**6.** Onder oprichting als bedoeld in het tweede lid, onderdeel a, wordt tevens begrepen
de omzetting van een lichaam in een lichaam waarbij het kapitaal geheel of gedeel-
telijk in aandelen is verdeeld, op grond van artikel 303 van Boek 2, dan wel artikel 832
van Boek 7 van het Burgerlijk Wetboek, indien deze omzetting zou leiden tot het
ontstaan van een belastingplicht in Curaçao.
**7.** Een eenmaal op grond van het eerste en het tweede lid uitgebrachte keuze voor
de behandeling als vennootschap, als bedoeld in de Landsverordening personenven-
nootschap, werkt met ingang van de datum van oprichting en voor wat betreft het
lichaam^13 , bedoeld in het tweede lid, onderdeel b, met ingang van het boekjaar, be-
doeld in het vierde lid.
**8.** Indien de transparante vennootschap niet meer aan de voorwaarden, bedoeld in
het tweede lid of artikel 3, tweede lid, voldoet, wordt deze vennootschap, met ingang
van het boekjaar waarin niet langer voldaan wordt aan evengenoemd lid, niet meer
behandeld als een vennootschap, als bedoeld in de Landsverordening personenven-
nootschap. Het is het lichaam in dat geval niet toegestaan nogmaals een verzoek als
bedoeld in het eerste lid in te dienen.
**9.** Indien een lichaam schriftelijk aan de Inspecteur verzoekt om niet langer overeen-
komstig artikel 3, eerste lid, onderdeel c, als een vennootschap, als bedoeld in de
Landsverordening personenvennootschap, te worden behandeld, vangt de belasting-
plicht van dit lichaam aan met ingang van het boekjaar volgend op het boekjaar
waarin het verzoek is gedaan.

**Art. 3c**
De artikelen 1, 3 en 5 van de Algemene termijnenlandsverordening^14 zijn van overeen- **Termijnen**
komstige toepassing op de termijnen genoemd in de belastingverordening.

'''
Art. 4
'''
**1.** Waar iemand woont of een lichaam is gevestigd, wordt naar de omstandigheden **Woonplaats personen**
beoordeeld.

12 Gewijzigd bij P.B. 2018-83 met terugwerkende kracht tot en met 01/07/18.
13 Gewijzigd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
14 Zie P.B. 2001-27, opgenomen in deze wettenbundel. De Algemene termijnenlandsverordening is op dit moment
nog niet van toepassing op het belastingrecht. In de MvT op de Veegwet wordt opgemerkt dat de Algemene
termijnenlandsverordening in de praktijk wel wordt toegepast en dat om die reden de verankering heeft
plaatsgevonden in de ALL. De verankering in de ALL geeft de belastingplichtige zekerheid over de verlenging
van de termijn. Hij kan hierop dan in procedures een beroep doen. De verlenging van de termijnen geldt voor
alle termijnen genoemd in de ALL en de heffingslandsverordeningen.

**Algemene landsverordening Landsbelastingen 2** art. 4


**Vestingsplaats lichamen 2.** Voor de toepassing van het eerste lid worden schepen en luchtvaartuigen welke
in Curaçao hun thuishaven hebben, ten opzichte van de bemanning als deel van Cu-
raçao beschouwd.

**3.** Een trust wordt geacht zijn woonplaats in Curaçao te hebben, indien de trust:
_a._ volgens het recht van Curaçao is ingesteld,
_b._ in Curaçao is gevestigd, of
_c._ ingevolge de trustakte slechts één trustee heeft en deze in Curaçao woont of aldaar
gevestigd is.
Of een naar buitenlands recht ingestelde trust is gevestigd in Curaçao wordt, indien
het voorgaande niet van toepassing is, naar de omstandigheden beoordeeld.
**4.** Iedere belastingplichtige is verplicht de Inspecteur de gegevens omtrent diens
woon- of vestigingsplaats schriftelijk te verstrekken. Bij wijziging van die plaats
worden de gegevens binnen een maand na de wijziging verstrekt. Bij het niet nakomen
van deze verplichting kan de belastingplichtige zich niet beroepen op een onjuiste
bekendmaking van belastingaanslagen, beschikkingen danwel andere schriftelijke
stukken van de functionarissen, bedoeld in artikel 2, tweede lid, onderdelen a, b, c en
d.^15

**Art. 5
Vaststelling invordering
en betaling belastingaan-
slag**

**1.** De vaststelling van een belastingaanslag geschiedt door het ter zake daarvan op-
maken van een aanslagbiljet door de Inspecteur. De dagtekening van het aanslagbiljet
geldt als dagtekening van de vaststelling van de belastingaanslag. De Inspecteur stelt
het aanslagbiljet ter invordering van de daaruit blijkende belastingaanslag aan de
Ontvanger ter hand.^16
**2.**^17 De Inspecteur vermeldt op het aanslagbiljet in ieder geval:
_a._ de mogelijkheid tot het indienen van een bezwaarschrift en de termijn waarbinnen
dat moet geschieden;
_b._ de termijn of termijnen waarbinnen de verschuldigde belasting moet worden be-
taald;
_c._ de dagen en uren waarop het ontvangkantoor is geopend.
**3.** De belastingplichtige is verplicht de belastingaanslag binnen twee maanden na
dagtekening van het aanslagbiljet te betalen voor zover de heffingsverordening niet
anders bepaalt.
**4.** In afwijking van het tweede lid is een voorlopige aanslag, gedagtekend vóór 1 no-
vember van het belastingjaar waarop deze betrekking heeft, invorderbaar in zoveel
gelijke termijnen als er na de maand van dagtekening van het aanslagbiljet nog
maanden in het belastingjaar overblijven. Op de laatste dag van elk van die maanden
vervalt een termijn.
**5.** In afwijking van het tweede lid is de naheffingsaanslag invorderbaar een maand
na dagtekening van het aanslagbiljet.

'''
Hoofdstuk II
Heffing van belasting
'''
'''
Afdeling 1
De aangifte
'''
**Art. 6**^18
**Uitreiking aangiftebiljet 1.** De Inspecteur kan aan een ieder die naar zijn mening vermoedelijk belastingplichtig
of inhoudingsplichtig is uitnodigen tot het doen van aangifte.

**2.** Een ieder die daartoe een verzoek doet, wordt in ieder geval uitgenodigd tot het
doen van aangifte.

'''
15 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
16 Gewijzigd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
17 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
18 Gewijzigd bij P.B. 2016-37 met terugwerkende kracht tot en met 01/01/16 conform P.B. 2016-56.
'''
**2** art. 5 **Algemene landsverordening Landsbelastingen**


**3.** In de uitnodiging tot het doen van aangifte wordt de wijze aangegeven waarop
aangifte wordt gedaan, wordt opgave verlangd van gegevens en kan overlegging of
toezending worden gevraagd van gegevensdragers, waarvan de kennisneming voor
de heffing van de belasting van belang kan zijn.^19
**4.** Een ieder die is uitgenodigd tot het doen van aangifte, is gehouden aangifte te
doen door de in de uitnodiging:
_a._ gevraagde gegevens duidelijk, stellig en zonder voorbehoud op bij ministeriële
regeling met algemene werking^20 in te vullen, te ondertekenen en in te leveren of toe
te zenden;
_b._ gevraagde gegevensdragers op bij ministeriële regeling met algemene werking te
bepalen wijze in te leveren of toe te zenden.
**5.**^21 De Inspecteur stelt de modellen voor de uitnodiging tot het doen van aangifte
vast. De modellen worden ter inzage neergelegd bij de Inspecteur.^22
**6.** Bij ministeriële regeling met algemene werking wordt bepaald voor welke belas-
tingen en onder welke voorwaarden het doen van aangifte en het toezenden van ge-
gevensdragers langs elektronische weg zal geschieden.
**7.** Bij het indienen van een aangifte langs elektronische weg wordt door de Inspecteur
terstond een ontvangstbewijs afgegeven.^23
**8.** De Inspecteur draagt er zorg voor dat een elektronische aangifte voldoet aan de
maximale betrouwbaarheids- en vertrouwelijkheidseisen, waaronder in ieder geval
wordt verstaan dat de langs elektronische weg verstuurde gegevens worden gecodeerd
middels encryptie.^24
**9.** Bij ministeriële regeling, met algemene werking kunnen ter uitvoering van dit
artikel nadere regels worden gesteld.^25

**Art. 6A**
[Vervallen bij P.B. 2018-30 met ingang van 16/06/18.]

'''
Art. 7^26
Aangifteplicht aanslagbe-
lastingen
'''
**1.** Met betrekking tot belastingen welke bij wege van aanslag worden geheven, moet
de aangifte binnen een door de Inspecteur gestelde termijn van tenminste twee
maanden na het uitnodigen tot het doen van aangifte bij de Inspecteur worden inge-
leverd.
**2.** De Inspecteur maant, na verloop van de in het eerste lid bedoelde termijn, de be-
lastingplichtige aan binnen een door hem te stellen termijn van ten minste vijf
werkdagen aangifte te doen, tenzij uitstel voor het doen van aangifte overeenkomstig
artikel 9 is verleend.
**3.** Bij de inlevering van de aangifte wordt op verzoek een ontvangstbewijs afgegeven.
**4.** De belastingplichtige die niet binnen zes maanden na het ontstaan van de belas-
tingschuld is uitgenodigd tot het doen van aangifte, is gehouden binnen vijftien dagen
na afloop van deze termijn de Inspecteur om een uitnodiging tot het doen van aangifte
te verzoeken.
**5.** Het vierde lid is niet van toepassing indien redelijkerwijs kan worden aangenomen
dat over dat tijdvak, na verrekening van voorheffingen, geen belasting verschuldigd
is of geen aanslag zal worden opgelegd.
**6.** Een belastingschuld waarvan de grootte eerst kan worden vastgesteld na afloop
van het tijdvak waarover de belasting wordt geheven, wordt geacht te zijn ontstaan
op het tijdstip waarop dat tijdvak of de belastingplicht eindigt.

19 Gewijzigd bij P.B. 2018-30 met ingang van 16/06/18.
20 Bewerker vermoedt dat de woorden "te bepalen wijze" hier ontbreken.
21 Zie P.B. 2016-87.
22 Gewijzigd bij P.B. 2018-83 met ingang van 29/12/18.
23 Ingevoegd bij P.B. 2018-30 met ingang van 16/06/18.
24 Ingevoegd bij P.B. 2018-30 met ingang van 16/06/18.
25 Ingevoegd bij P.B. 2018-30 met ingang van 16/06/18.
26 Gewijzigd bij P.B. 2016-37 met terugwerkende kracht tot en met 01/01/16 conform P.B. 2016-56.

**Algemene landsverordening Landsbelastingen 2** art. 7


**Art. 8**^27
**Aangifteplicht aangiftebe-
lastingen**

**1.** Met betrekking tot belasting welke op aangifte moet worden voldaan of afgedragen,
moet de aangifte worden gedaan bij de Inspecteur of de Ontvanger.
**2.** Heeft de aangifte betrekking op een tijdvak, dan wordt zij gedaan binnen een
termijn van vijftien dagen na het einde van dat tijdvak. Heeft de aangifte betrekking
op een tijdstip, dan wordt zij gedaan binnen een termijn van vijftien dagen na het
tijdstip waarop de belastingschuld is ontstaan.
**3.** Het tijdvak waarover voor de loonbelasting en de omzetbelasting aangifte moet
worden gedaan is de kalendermaand.
**4.** De Minister kan bij ministeriële regeling regels stellen met betrekking tot het doen
van aangifte over een afwijkend tijdvak.
**5.** De belastingplichtige dan wel inhoudingsplichtige die niet reeds is uitgenodigd
tot het doen van aangifte, is gehouden vóór het tijdstip waarop de belasting moet
worden betaald de Inspecteur om een uitnodiging tot het doen van aangifte te ver-
zoeken.
**6.** De Directeur kan bepalen onder welke voorwaarden de aangifte anders dan bij
de Inspecteur of de Ontvanger kan worden gedaan.

**Art. 9
Uitstel indiening 1.** De Inspecteur kan onder door hem te stellen voorwaarden uitstel verlenen voor
het indienen van de aangifte^28 en kan daarbij voorwaarden stellen. Uitstel wordt niet
langer verleend dan tot achttien maanden na de datum waarop de belastingschuld
is ontstaan.

**2.** Indien voor het doen van aangifte uitstel is verleend, wordt elke termijn die met
de aangifte of het opleggen van een aanslag verband houdt met de duur van het
verleende uitstel verlengd.
**3.** In afwijking van hetgeen in deze landsverordening is bepaald, is de belastingplich-
tige en de inhoudingsplichtige die Curaçao metterwoon wenst te verlaten dan wel
zijn plaats van vestiging wenst over te brengen naar een buiten Curaçao gelegen
plaats, verplicht terstond aangifte te doen voor de inkomstenbelasting, de winstbe-
lasting, de loonbelasting en de omzetbelasting, tot het einde van de belastingplicht.

'''
Afdeling 2
Heffing bij wege van aanslag
'''
**Art. 10
Afwijken van aangifte 1.** De Inspecteur kan bij het vaststellen van de aanslag van de aangifte gemotiveerd
afwijken, alsmede bij het ontbreken van de aangifte de aanslag ambtshalve vaststellen.
**Aanslagtermijn 2.** De bevoegdheid tot het vaststellen van de aanslag vervalt door verloop van vijf
jaar na het tijdstip waarop de belastingschuld is ontstaan.

**Art. 11
Voorlopige aanslag 1.** De Inspecteur kan, ingeval de grootte van de belastingschuld eerst kan worden
vastgesteld na afloop van het tijdvak waarover de belasting wordt geheven, na aanvang
van het belastingtijdvak aan de belastingplichtige een voorlopige aanslag opleggen
tot het bedrag waarop de aanslag vermoedelijk zal worden vastgesteld.

**2.** De voorlopige aanslag blijft beperkt tot het bedrag waarmee de aanslag vermoe-
delijk de voorheffingen te boven zal gaan.
**3.** Een voorlopige aanslag kan worden gevolgd door één of meer voorlopige aanslagen.
**4.** De voorlopige aanslag en de voorheffingen worden verrekend met de aanslag.
**5.** Een voorlopige aanslag kan de Inspecteur ook opleggen aan niet binnen Curaçao
wonende of gevestigde belastingplichtigen, die slechts tijdelijk binnen Curaçao een
bedrijf of beroep uitoefenen.

'''
27 Gewijzigd bij P.B. 2016-37 met terugwerkende kracht tot en met 01/01/16 conform P.B. 2016-56.
28 Gewijzigd bij P.B. 2016-37 met terugwerkende kracht tot en met 01/01/16 conform P.B. 2016-56.
'''
**2** art. 8 **Algemene landsverordening Landsbelastingen**


**6.** Een voorlopige aanslag kan direct na het ontstaan van de belastingschuld of, bij
tijdvak belastingen, direct na aanvang van het tijdvak, altijd worden opgelegd tot
het bedrag dat de Inspecteur juist voorkomt indien:
_a._ de belastingplichtige in staat van faillissement is verklaard of, indien sprake is van
een lichaam, in geval van ontbinding, beëindiging of vereffening ervan;
_b._ de belastingplichtige Curaçao metterwoon wil verlaten dan wel zijn plaats van
vestiging wil overbrengen naar een plaats buiten Curaçao;
_c._ het bedrijf van de belastingplichtige wordt gestaakt of aanmerkelijk wordt inge-
krompen, of de belastingplichtige binnen Curaçao gelegen onroerende goederen of
daarop gevestigde rechten vervreemdt.
**7.** Bij ministeriële regeling met algemene werking kunnen ten aanzien van het eerste
lid nadere regels worden vastgesteld.

**Art. 12**
De Inspecteur neemt het besluit om aan hem die aangifte heeft gedaan, geen aanslag **Besluit geen aanslag**
op te leggen, bij met redenen omklede voor bezwaar vatbare beschikking.

'''
Art. 13
'''
**1.** Indien enig feit grond oplevert voor het vermoeden dat een aanslag ten onrechte **Navordering**
achterwege is gelaten of tot een te laag bedrag is vastgesteld, dan wel dat een in de
belastingverordening voorziene vermindering, ontheffing of teruggaaf ten onrechte
of tot een te hoog bedrag is verleend, kan de Inspecteur de te weinig geheven belasting
navorderen. Een feit, dat de Inspecteur bekend was of redelijkerwijs bekend had
kunnen zijn, kan geen grond voor navordering opleveren, behoudens in de gevallen
waarin de belastingplichtige ter zake van dit feit te kwader trouw is.
**2.** Navordering kan mede plaatsvinden in alle gevallen waarin te weinig belasting is
geheven, doordat:
_a._ een voorlopige aanslag, of een voorheffing ten onrechte of tot een onjuist bedrag
is verrekend;
_b._ een bij de belastingplichtige in aanmerking te nemen bestanddeel van het voorwerp
van enige belasting ten onrechte in aanmerking is genomen bij hem of bij zijn echt-
genoot;
_c._ de basiskorting en de daarop van toepassing zijnde alleenverdienertoeslag, oude-
rentoeslag en kindertoeslag ten onrechte of tot een te hoog bedrag is verleend.
**3.** De bevoegdheid tot het opleggen van een navorderingsaanslag als bedoeld in het
eerste en tweede lid vervalt door verloop van tien respectievelijk vijf jaar na het ont-
staan van de belastingschuld.
**4.** Indien te weinig belasting is geheven over het bestanddeel van het voorwerp van
enige belasting dat in het buitenland wordt gehouden of is opgekomen, vervalt, in
afwijking van het derde lid, de bevoegdheid tot navorderen door verloop van vijftien
jaren na het tijdstip waarop de belastingschuld is ontstaan.

'''
Afdeling 3
Heffing bij wege van afdracht en voldoening op aangifte
'''
'''
Art. 14
Verplichting voldoening
of afdracht op aangifte
'''
**1.** In geval de belastingverordening voldoening van in een tijdvak verschuldigde be-
lasting dan wel afdracht van in een tijdvak ingehouden belasting voorschrijft, is de
belastingplichtige dan wel de inhoudingsplichtige gehouden binnen vijftien dagen
na afloop van dat tijdvak de belasting overeenkomstig de aangifte te betalen bij de
Ontvanger.
**2.** Het tijdvak waarover de loonbelasting en de omzetbelasting moet worden betaald
is de kalendermaand.
**3.** De Minister kan bij ministeriële regeling regels stellen met betrekking tot het be-
talen van de belasting over een afwijkend tijdvak.
**4.** In geval over een belastingtijdvak geen belasting is verschuldigd, moet aangifte
worden gedaan binnen vijftien dagen na het einde van dat tijdvak.

**Algemene landsverordening Landsbelastingen 2** art. 14


**5.** De Inspecteur kan van de belastingplichtige dan wel inhoudingsplichtige die be-
lasting over een tijdvak van langer dan een maand moet voldoen respectievelijk af-
dragen, vorderen dat hij binnen vijftien dagen na het einde van elke maand een
voorlopige betaling doet.
**6.** In de niet in het eerste lid bedoelde gevallen moet de aangifte worden gedaan en
de belasting overeenkomstig de aangifte worden betaald binnen vijftien dagen na
het tijdstip waarop de belastingschuld is ontstaan.

**Art. 15
Voldoening winstbelasting
op aangifte**

**1.** Voor de belastingplichtigen in de winstbelasting zijn in afwijking van de bepalingen
van de artikelen 8 en 14, de bepalingen van dit artikel van toepassing.
**2.** De belastingplichtige is gehouden uiterlijk op de laatste dag van de derde maand
na afloop van het boekjaar over dat jaar voorlopige aangifte te doen en de belasting
overeenkomstig die aangifte te betalen bij de Ontvanger. Uitstel voor het indienen
van een voorlopige aangifte is niet mogelijk.
**3.** De op de voorlopige aangifte als verschuldigd aan te geven belasting dient ten
minste gelijk te zijn aan het voor het jaar waarvoor de voorlopige aangifte wordt ge-
daan geldende belastingtarief toegepast op de winst volgens de meest recente defi-
nitieve aangifte. Indien de belastingplichtige een lager bedrag wenst aan te geven,
kan hij daartoe een gemotiveerd verzoek indienen bij de Inspecteur.
**4.** De belastingplichtige is gehouden uiterlijk op de laatste dag van de zesde maand
na afloop van het boekjaar over dat jaar definitieve aangifte te doen en de belasting
overeenkomstig die aangifte te betalen bij de Ontvanger.
**5.** De Inspecteur neemt een schriftelijk gemotiveerde beslissing binnen vijftien dagen
na ontvangst van een verzoek als bedoeld in het derde lid. Als datum van de beslissing
geldt de datum waarop het afschrift ter post wordt bezorgd. Indien de Inspecteur
niet binnen vijftien dagen schriftelijk afwijzend heeft beslist, wordt het verzoek geacht
te zijn ingewilligd.
**6.** De Inspecteur neemt een schriftelijk gemotiveerde beslissing binnen vijftien dagen
na ontvangst van een verzoek om uitstel voor het doen van de definitieve aangifte.
Indien een beslissing wordt genomen, geldt als datum van de beslissing de datum
waarop het afschrift ter post wordt bezorgd. Indien de Inspecteur niet binnen vijftien
dagen afwijzend heeft beslist, wordt de termijn van indiening van de definitieve
aangifte verlengd met drie maanden.
**7.** Artikel 11, derde, vierde en zesde lid, is van overeenkomstig toepassing.
**8.** Indien bij de definitieve aangifte de berekening van de verschuldigde belasting
resulteert in een door de belastingplichtige terug te ontvangen bedrag, legt de Inspec-
teur binnen zes maanden na indiening van de definitieve aangifte een aanslag op.
**9.** Indien de Inspecteur de in het achtste lid bedoelde aanslag niet oplegt binnen zes
maanden na de datum van indiening van de definitieve aangifte, wordt hiervan aan
de belastingplichtige schriftelijk en gemotiveerd mededeling gedaan.

**Art. 16
Naheffing 1.** De Inspecteur kan, indien de belasting die op aangifte behoort te worden voldaan
of afgedragen niet of niet volledig is betaald, de niet of te weinig betaalde belasting
naheffen door middel van een naheffingsaanslag ten name van degene die de belas-
ting had behoren te betalen. Indien tevens geen aangifte is gedaan, stelt de Inspecteur
de aanslag ambtshalve vast.

**2.** Met niet volledig betaald zijn als bedoeld in het eerste lid wordt gelijkgesteld het
geval waarin, naar aanleiding van een ingevolge de belastingverordening gedaan
verzoek, ten onrechte of tot een te hoog bedrag, vrijstelling of vermindering van in-
houding van belasting dan wel teruggaaf van belasting is verleend.
**3.** De inhoudingsplichtige is gerechtigd het bedrag van de nageheven belasting te
verhalen op zijn werknemer ingeval het aan de werknemer te wijten is dat er te weinig
belasting is ingehouden.

**2** art. 15 **Algemene landsverordening Landsbelastingen**


'''
Art. 17
'''
**1.** De bevoegdheid tot het opleggen van een naheffingsaanslag vervalt door verloop **Naheffingstermijn**
van vijf jaar na het einde van het kalenderjaar waarin de belastingschuld is ontstaan
of de teruggaaf is verleend.
**2.** Indien de belastingplichtige of inhoudingsplichtige ter zake van de in artikel 16
genoemde feiten te kwader trouw is vervalt in afwijking van het eerste lid de bevoegd-
heid tot het opleggen van een naheffingsaanslag door verloop van tien jaar na het
einde van het kalenderjaar waarin de belastingschuld is ontstaan of de teruggaaf is
verleend.

'''
Hoofdstuk III
Administratieve sancties en boeten
'''
'''
Afdeling 1
Verzuim- en vergrijpboeten
'''
'''
Art. 18
'''
**1.** Indien de belastingplichtige de aangifte voor een belasting welke bij wege van **Verzuim aangifte doen**
aanslag wordt geheven niet, dan wel niet binnen de ingevolge artikel 7, tweede lid,
gestelde termijn heeft gedaan, vormt dit een verzuim ter zake waarvan de Inspecteur
hem, gelijktijdig met de vaststelling van de aanslag een boete van ten hoogste NAf
2.500,-- kan opleggen.
**2.** Indien de belastingplichtige of de inhoudingsplichtige de aangifte voor een belas-
ting welke op aangifte moet worden voldaan of afgedragen niet, dan wel niet binnen
de gestelde termijn heeft gedaan, vormt dit een verzuim ter zake waarvan de Inspec-
teur hem gelijktijdig met de vaststelling van de aanslag een boete van ten hoogste
NAf 2.500,-- kan opleggen.
**3.** De bevoegdheid tot het opleggen van de in het tweede lid bedoelde boete vervalt
door verloop van een jaar na het einde van de termijn waarbinnen de aangifte had
moeten worden gedaan.

'''
Art. 19
Verzuim voldoening of af-
dracht op aangifte
'''
**1.** Indien de belastingplichtige of inhoudingsplichtige de belasting die op aangifte
moet worden voldaan of afgedragen niet, gedeeltelijk niet, dan wel niet binnen de
gestelde termijn heeft betaald, vormt dit een verzuim ter zake waarvan de Inspecteur
hem een boete van ten hoogste NAf 10.000,-- kan opleggen.
**2.** Bij niet of gedeeltelijk niet betalen legt de Inspecteur de boete op, gelijktijdig met
de vaststelling van de naheffingsaanslag.
**3.** De bevoegdheid tot het opleggen van de in het eerste lid bedoelde boete vervalt
door verloop van vijf jaar na het einde van het kalenderjaar waarin de belastingschuld
is ontstaan.

'''
Art. 20
Vergrijp aanslagbelastin-
gen
'''
**1.** Indien het met betrekking tot een belasting welke bij wege van aanslag wordt ge-
heven aan opzet of grove schuld van de belastingplichtige is te wijten dat de aanslag
te laag is vastgesteld dan wel anderszins te weinig belasting is geheven, vormt dit
een vergrijp ter zake waarvan de Inspecteur hem, gelijktijdig met de vaststelling van
de aanslag, een boete kan opleggen van ten hoogste 100% van de in het tweede lid
omschreven grondslag voor de boete.
**2.** De grondslag voor de boete is:
_a._ het bedrag van de navorderingsaanslag, dan wel
_b._ indien verliezen in aanmerking zijn of worden genomen, het bedrag waarop de
navorderingsaanslag zou zijn berekend zonder rekening te houden met die verliezen.
**3.** De bevoegdheid voor het opleggen van de boete vervalt door het verloop van de
termijn die geldt voor het opleggen van de navorderingsaanslag.

**Algemene landsverordening Landsbelastingen 2** art. 20


**Art. 21
Vergrijp aangiftebelastin-
gen**

**1.** Indien het aan opzet of grove schuld van de belastingplichtige of de inhoudings-
plichtige is te wijten dat belasting welke op aangifte moet worden voldaan of afge-
dragen niet, gedeeltelijk niet, dan wel niet binnen de in de belastingverordening ge-
stelde termijn is betaald, vormt dit een vergrijp ter zake waarvan de Inspecteur hem
een boete kan opleggen van ten hoogste 100% van de in het tweede en derde lid
omschreven grondslag voor de boete.
**2.** De grondslag voor de boete wordt gevormd door het bedrag van de belasting dat
niet of niet tijdig is betaald, voor zover dat bedrag als gevolg van de opzet of de grove
schuld van de belastingplichtige of de inhoudingsplichtige niet of niet tijdig is betaald.
**3.** De grondslag voor de boete voor een naheffingsaanslag winstbelasting is:
_a._ het bedrag van de naheffingsaanslag, dan wel
_b._ indien verliezen in aanmerking zijn of worden genomen, het bedrag waarop de
naheffingsaanslag zou zijn berekend zonder rekening te houden met die verliezen.
**4.** Bij niet of gedeeltelijk niet betalen legt de Inspecteur de boete op, gelijktijdig met
de vaststelling van de naheffingsaanslag.
**5.** De bevoegdheid voor het opleggen van de boete vervalt door het verloop van de
termijn die geldt voor het opleggen van de naheffingsaanslag.

**Art. 21a
Verzuim verstrekken op-
gave werknemers en niet-
werknemers**

**1.** Indien de administratieplichtige niet, niet tijdig of niet volledig de opgave, bedoeld
in artikel 45, tweede en derde lid, verstrekt, vormt dit een verzuim ter zake waarvan
de Inspecteur hem een boete van ten hoogste NAf 5.000,-- kan opleggen.
**2.** De bevoegdheid tot het opleggen van een boete als bedoeld in het eerste lid vervalt
door verloop van een jaar na het einde van de termijn waarbinnen de opgave, bedoeld
in artikel 45, tweede en derde lid, had moeten worden verstrekt.

'''
Art. 21b^29
Indien de rapporterende entiteit een verplichting als bedoeld in artikel 43, eerste tot
en met vierde lid van de Landsverordening op de winstbelasting 1940, wegens opzet
of grove schuld, niet, niet tijdig, niet volledig of niet juist nakomt, vormt dit een vergrijp
ter zake waarvan de Inspecteur de rapporterende entiteit, onderscheidenlijk de
groepsentiteit, bedoeld in artikel 44, tweede lid, van de Landsverordening op de
winstbelasting 1940, een boete kan opleggen van NAf 100.000 en ten hoogste NAf
250.000.
'''
'''
Art. 21c^30
Indien een lichaam dat voordelen verkrijgt anders dan voordelen uit binnenlandse
onderneming als bedoeld in artikel 4, vierde lid, van de Landsverordening op de
winstbelasting 1940 in enig jaar de verplichting als bedoeld in artikel 1C, tweede lid,
van de Landsverordening op de winstbelasting 1940 wegens opzet of grove schuld
niet nakomt, vormt dit een vergrijp ter zake waarvan de Inspecteur het lichaam on-
derscheidenlijk het concern, een boete kan opleggen van NAf 50.000 en ten hoogste
NAf 500.000.
'''
'''
Afdeling 2
Voorschriften inzake het opleggen van administratieve boeten
'''
**Art. 22
Aankondiging vergrijp-
boete**

**1.** Alvorens een vergrijpboete op te leggen, stelt de Inspecteur de belastingplichtige
of inhoudingsplichtige in kennis van zijn voornemen daartoe, onder vermelding van
de gronden waarop het voornemen berust.

'''
29 Ingevoegd bij P.B. 2018-30 met ingang van 16/06/18.
30 Ingevoegd bij P.B. 2019-92 met ingang van 01/01/2020.
Verslag inzake doeltreffendheid uiterlijk 31 december 2024, P.B. 2019 nr. 92 artikel IX onderdeel 2.
'''
**2** art. 21 **Algemene landsverordening Landsbelastingen**


**2.** De Inspecteur stelt de belastingplichtige of inhoudingsplichtige in de gelegenheid
binnen een door hem daarvoor te stellen termijn van ten minste twee weken de in
die kennisgeving vermelde gronden gemotiveerd te betwisten.
**3.** Indien niet is voldaan aan het bepaalde in het eerste of tweede lid, heeft dat niet
de nietigheid van de boete tot gevolg.

'''
Art. 23
'''
**1.** De Inspecteur legt de boete op bij voor bezwaar vatbare beschikking. **Boete bij beschikking
2.** Onverminderd het bepaalde in artikel 22, eerste en tweede lid, stelt de Inspecteur
de belastingplichtige of inhoudingsplichtige, uiterlijk bij de in het eerste lid bedoelde
beschikking, in kennis van de gronden waarop de oplegging van de boete berust.
**3.** De Inspecteur kan, in afwijking van het eerste en tweede lid, binnen zes maanden
na de vaststelling van de navorderings- of naheffingsaanslag een boete opleggen in-
dien de feiten of omstandigheden op grond waarvan wordt nagevorderd of nageheven
eerst bekend worden binnen zes maanden vóór de afloop van de in artikel 13, derde
lid, respectievelijke artikel 17, bedoelde termijnen en er tevens aanwijzingen zijn dat
het aan opzet of grove schuld van de belastingplichtige of inhoudingsplichtige is te
wijten dat de aanslag tot een te laag bedrag is vastgesteld dan wel anderszins te
weinig belasting is geheven. In dat geval doet de Inspecteur vóór of gelijktijdig met
de vaststelling van de navorderings- dan wel naheffingsaanslag mededeling aan de
belastingplichtige of inhoudingsplichtige dat wordt onderzocht of in verband met
de navordering of naheffing het opleggen van een vergrijpboete gerechtvaardigd is.
**4.** Op verzoek van de belastingplichtige of inhoudingsplichtige die de kennisgeving
wegens zijn gebrekkige kennis van de Nederlandse taal onvoldoende begrijpt, draagt
de Inspecteur er zoveel mogelijk zorg voor dat de in die kennisgeving vermelde
gronden aan de belastingplichtige of inhoudingsplichtige worden medegedeeld in
een voor hem begrijpelijke taal.
**5.** Indien de boete gelijktijdig wordt opgelegd met de vaststelling van een belasting-
aanslag, wordt het bedrag van de boete afzonderlijk op het aanslagbiljet vermeld.
**6.** De boete wordt ingevorderd overeenkomstig de bepalingen die gelden voor de
invordering van de belasting ter zake waarvan de boete is opgelegd.

'''
Art. 24
Verplichtingen gelden
mede voor boeteopleg-
ging
'''
Hoofdstuk VI is van overeenkomstige toepassing bij het opleggen van administratieve
boeten, met dien verstande dat de belastingplichtige of inhoudingsplichtige tegen
wie het onderzoek naar de oplegging van een administratieve boete is gericht slechts
gehouden is toe te laten dat de Inspecteur gegevensdragers of de inhoud daarvan
raadpleegt dan wel toegang te verlenen tot gebouwen of gronden.

'''
Art. 25
'''
**1.** De Inspecteur kan de belastingplichtige of inhoudingsplichtige ten aanzien van **Verhoor**
wie de redelijke verwachting bestaat dat hem een vergrijpboete kan worden opgelegd,
oproepen voor een verhoor. In deze oproep deelt de Inspecteur hem mee dat hij zich
desgewenst kan doen bijstaan.
**2.** Voordat het verhoor aanvangt, deelt de Inspecteur de belastingplichtige of inhou-
dingsplichtige mee dat hij niet tot antwoorden verplicht is.
**3.** De Inspecteur kan op verzoek van de belastingplichtige of inhoudingsplichtige die
het Nederlands, Papiaments of Engels onvoldoende begrijpt, toestaan dat deze zich
tijdens het verhoor door een tolk laat bijstaan.

**Art. 26**
Ingeval een belastingplichtige of inhoudingsplichtige alsnog een juiste en volledige **Inkeerbepaling**
aangifte doet dan wel juiste en volledige inlichtingen, gegevens of aanwijzingen
verstrekt vóórdat hij weet of redelijkerwijze moet vermoeden dat de Inspecteur de
onjuistheid of onvolledigheid bekend is of bekend zal worden, wordt in plaats van
een vergrijpboete een verzuimboete opgelegd van ten hoogste 15%.

**Algemene landsverordening Landsbelastingen 2** art. 26


**Art. 27
Samenloop boete en
strafrechtelijke uitspraak**

**1.** Een opgelegde boete vervalt indien de belastingplichtige of inhoudingsplichtige
wegens het vergrijp op grond waarvan de boete verschuldigd is, bij onherroepelijke
rechterlijke uitspraak is vrijgesproken, ontslagen van rechtsvervolging of veroordeeld.
**2.** De Inspecteur legt een in deze afdeling bedoelde vergrijpboete niet op voor zover
het niet aan opzet of grove schuld van de belastingplichtige of inhoudingsplichtige
is te wijten dat te weinig belasting is geheven.
**3.** Ingeval na het opleggen van een vergrijpboete blijkt dat de grondslag daarvoor
ontbreekt maar wel een grondslag aanwezig is voor een verzuimboete, kan deze lagere
boete daarvoor in de plaats worden gesteld. De reeds opgelegde boete wordt dan
verminderd tot het bedrag van de verzuimboete.
**4.** Indien de grondslag voor een boete wordt verminderd, vermindert de Inspecteur
de boete ambtshalve dienovereenkomstig.

**Art. 28
Geen boete na overlijden 1.** Geen boete wordt opgelegd aan de belastingplichtige of inhoudingsplichtige die
is overleden.

**2.** Indien een boete op het tijdstip van het overlijden van de belastingplichtige of de
inhoudingsplichtige niet onherroepelijk vaststaat, vernietigt de Inspecteur de beschik-
king waarbij de boete is opgelegd op verzoek van een belanghebbende bij voor be-
zwaar vatbare beschikking.
**3.** Indien een boete op het tijdstip van het overlijden van de belastingplichtige of de
inhoudingsplichtige onherroepelijk vaststaat, maar nog niet of niet volledig is betaald
verlaagt de Inspecteur op verzoek van een belanghebbende de boete tot het op dat
tijdstip betaalde bedrag bij voor bezwaar vatbare beschikking.

'''
Afdeling 3
Administratieve sancties
'''
**Art. 28a**^31
**Administratieve sancties 1.** Een administratieve sanctie als bedoeld in het tweede lid, onderdeel a, kan worden
opgelegd aan een belastingplichtige die niet, dan wel niet op de voorgeschreven
wijze, voldoet aan de verplichtingen die voortvloeien uit Hoofdstuk VI. Een adminis-
tratieve sanctie als bedoeld in het tweede lid, onderdeel b, kan worden opgelegd aan
een administratieplichtige bedoeld in artikel 44a die niet, dan wel niet op de voorge-
schreven wijze, voldoet aan de verplichtingen van artikel 43, tweede tot en met ne-
gende lid, of artikel 44a eerste tot en met zesde lid, dan wel niet voldoet aan het ge-
stelde bij of krachtens artikel 43, tiende lid of bij of krachtens artikel 44a, achtste lid.

**2.** De administratieve sanctie bestaat uit:
_a._ een administratieve boete van ten hoogste NAf 25.000; of
_b._ de sluiting voor maximaal één jaar van een bedrijfslocatie van waaruit goederen
worden geleverd of diensten worden verricht, als bedoeld in artikel 2, onderdeel a,
van Landsverordening omzetbelasting 1999.
**3.** De Inspecteur is ter uitvoering van het bepaalde in het tweede lid bevoegd tot het
verzegelen van gebouwen, gronden en al hetgeen zich daarin of daarop bevindt.
**4.** De Inspecteur legt de administratieve sanctie op bij een voor bezwaar vatbare
beschikking, in de zin van artikel 3, eerste lid, van de Landsverordening administratieve
rechtspraak.
**5.** Een tegen de in dit artikel bedoelde administratieve sanctie ingesteld bezwaar of
beroep, leidt niet tot opschorting van de administratieve sanctie.
**6.** Bij landsbesluit, houdende algemene maatregelen^32 , kunnen ten aanzien van de
toepassing en uitvoering van de administratieve sanctie als bedoeld in het tweede
lid, onderdeel b, nadere regels worden gesteld.

'''
31 Gewijzigd bij P.B. 2018-83 met terugwerkende kracht tot en met 01/07/18.
32 Zie Landsbesluit tijdelijke sluiting bedrijfslocatie, gepubliceerd in P.B. 2014-83, hierna opgenomen in de bundel.
De citeertitel van dat landsbesluit is gewijzigd bij P.B. 2016-23 naar “Landsbesluit administratieve sanctie bij
niet nakomen fiscale verplichtingen”.
'''
**2** art. 27 **Algemene landsverordening Landsbelastingen**


'''
Hoofdstuk IV
Bezwaar en beroep
'''
'''
Art. 29
'''
**1.** Degene die bezwaar heeft tegen een hem opgelegde belastingaanslag of tegen **Bezwaar**
een ingevolge de belastingverordening^33 door de Inspecteur genomen voor bezwaar
vatbare beschikking, kan binnen twee maanden na de dagtekening van het aanslag-
biljet of van het ter post bezorgde of uitgereikte afschrift van de beschikking een ge-
motiveerd bezwaarschrift indienen bij de Inspecteur. De Inspecteur tekent onverwijld
de datum van ontvangst aan op het bezwaarschrift. De Inspecteur zendt de aanvrager
onverwijld een bewijs van ontvangst, waarin die datum is vermeld.
**2.** Degene die bezwaar heeft tegen het bedrag dat als belasting door hem op aangifte
is voldaan of dat als belasting door een inhoudingsplichtige van hem is ingehouden,
kan binnen twee maanden na de betaling respectievelijk de inhouding een gemoti-
veerd bezwaarschrift indienen bij de Inspecteur.
**3.** Indien een bezwaarschrift meer dan één belastingaanslag of beschikking inzake
boete betreft, stelt de Inspecteur de belanghebbende binnen een door hem te bepalen
termijn in de gelegenheid het geschrift te vervangen door zoveel bezwaarschriften
als het belastingaanslagen of beschikkingen betreft. Maakt de belanghebbende van
deze gelegenheid gebruik, dan worden de nieuwe bezwaarschriften geacht op dezelfde
dag als het oorspronkelijke geschrift door de Inspecteur te zijn ontvangen.
**4.** Voor de toepassing van het tweede lid wordt de belasting, bedoeld in de Landsver-
ordening op de dividendbelasting 2000 (P.B. 1999, no. 246), geacht te zijn ingehouden
op de dag waarop de nota, bedoeld in artikel 9 van genoemde landsverordening, is
gedagtekend.^34
**5.**^35 Met een voor bezwaar vatbare beschikking wordt gelijk gesteld het weigeren een
besluit te nemen en het niet tijdig nemen van een besluit. De bezwaartermijn voor
de in de in de vorige volzin bedoelde gevallen vangt aan zodra de wettelijke termijn
voor het nemen van een besluit is verstreken, dan wel, indien geen wettelijke termijn
is gegeven, twee maanden na de datum van indiening van het verzoek.

'''
Art. 30
'''
**1.** De Inspecteur doet uitspraak op het bezwaarschrift. **Uitspraak op bezwaar
2.** Met een uitspraak wordt gelijkgesteld het weigeren dan wel niet tijdig doen van
de uitspraak. Een uitspraak wordt geacht niet tijdig te zijn gedaan indien de Inspecteur
niet binnen negen maanden na ontvangst van het bezwaarschrift een uitspraak heeft
gedaan.
**3.** Indien de Inspecteur niet in de gelegenheid is om binnen de in het tweede lid be-
doelde termijn uitspraak op het bezwaar te doen, stelt hij de belanghebbende hiervan
schriftelijk in kennis, onder mededeling van de reden waarom nog geen uitspraak
kan worden gedaan. De termijn van het tweede lid wordt in de door de Minister te
bepalen gevallen^36 met dit uitstel verlengd. De Inspecteur is gehouden om, zodra dat
in redelijkheid van hem verwacht kan worden, uitspraak te doen.
**4.** Indien de belanghebbende in zijn bezwaarschrift het verlangen daartoe te kennen
geeft, wordt hij vóór de uitspraak door de Inspecteur gehoord. Hij kan ook ambtshalve
worden opgeroepen tot het verstrekken van inlichtingen of om de overwegingen te
vernemen die bij de vaststelling van de aanslag hebben gegolden. Alle oproepingen
worden gedaan op een termijn van ten minste zeven dagen.
**5.** Indien niet of niet volledig aan het bezwaar wordt tegemoet gekomen, wordt de
uitspraak gemotiveerd.
**6.** Indien het bezwaar is gericht tegen een belastingaanslag met betrekking tot welke
ten onrechte geen aangifte is gedaan, de vereiste aangifte niet is gedaan, of niet vol-

33 Gewijzigd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
34 Dit lid is toegevoegd bij P.B. 2001-145, maar nog niet in werking getreden. Zie P.B. 2001-146.
35 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
36 Zie hoofdstuk V van de Ministeriële regeling formeel belastingrecht (P.B. 2013-63) hierna opgenomen.

**Algemene landsverordening Landsbelastingen 2** art. 30


'''
ledig is voldaan aan de verplichting ingevolge de artikelen 40, 40a, 41, 42 en 43 wordt
de belastingaanslag gehandhaafd, tenzij gebleken is dat, en zo ja in hoeverre, deze
onjuist is.
'''
**Art. 31**^37
**Beroep 1.** De belanghebbende die bezwaar heeft tegen een ingevolge de belastingverordening
door de Inspecteur gedane uitspraak, kan binnen twee maanden na de dagtekening
van het afschrift van de uitspraak in beroep komen bij het Gerecht. De belanghebbende
kan ook in het geval, bedoeld in artikel 30, tweede lid, in beroep komen binnen twaalf
maanden:
_a._ gerekend vanaf het tijdstip waarop negen maanden is verlopen na het tijdstip
waarop het bezwaarschrift door de Inspecteur is ontvangen; danwel
_b._ gerekend vanaf het tijdstip waarop de verlenging van de termijn, bedoeld in artikel
30, derde lid, tweede volzin, is verlopen.

**2.** Indien het beroep is gericht tegen het niet tijdig doen van een uitspraak door de
Inspecteur, kan het Gerecht de Inspecteur verzoeken alsnog een uitspraak op het
bezwaar te doen en het Gerecht bepaalt hierbij dat Hoofdstuk VI van overeenkomstige
toepassing is gedurende een daarbij te bepalen termijn.
**3.** Het Gerecht wijst het beroep af indien ten onrechte geen aangifte is gedaan, de
vereiste aangifte niet is gedaan of niet volledig is voldaan aan de verplichtingen inge-
volge de artikelen 40, 40a, 41, 42 en 43 tenzij gebleken is, dat, en zo ja in hoeverre, de
uitspraak onjuist is.

**Art. 32
Geen schorsing betalings-
plicht**

'''
De verplichting tot betaling wordt niet geschorst door de indiening van een bezwaar-
of beroepschrift inzake een belastingaanslag.
'''
**Art. 32a**^38
**Vergoeding kosten be-
zwaarfase**

**1.** De kosten die de belastingplichtige in verband met de behandeling van het bezwaar
redelijkerwijs heeft moeten maken, worden uitsluitend ten laste van s’ Lands kas
vergoed, op verzoek van de belastingplichtige, voor zover de belastingaanslag of de
voor bezwaar vatbare beschikking door ernstige onzorgvuldigheid in strijd met het
recht is opgelegd dan wel genomen.
**2.** Het verzoek wordt gedaan voordat de Inspecteur uitspraak op het bezwaar heeft
gedaan. De Inspecteur doet uitspraak op het verzoek gelijktijdig met de uitspraak op
het bezwaar.
**3.** Bij ministeriële regeling met algemene werking kunnen nadere regels worden
gesteld met betrekking tot de kosten waarop de vergoeding, bedoeld in het eerste
lid, uitsluitend betrekking kan hebben en de wijze waarop het bedrag van de kosten
wordt vastgesteld.

'''
Hoofdstuk V
Bijzondere bepalingen
'''
'''
Afdeling 1
Vertegenwoordiging
'''
**Art. 33
Volmacht 1.** Vertegenwoordiging is mogelijk op grond van schriftelijke volmacht. Op vordering
van de Inspecteur dient het stuk waaruit van de volmacht blijkt, te worden overgelegd.

**2.** Degene die, opgeroepen om mondeling aan de Inspecteur inlichtingen en gegevens
te verstrekken, en zich doet vertegenwoordigen, is gehouden op vordering van de
Inspecteur zijn vertegenwoordiger te vergezellen.

'''
37 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
38 Gewijzigd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
'''
**2** art. 31 **Algemene landsverordening Landsbelastingen**


'''
Weigeren vertegenwoordi-
ging
'''
**3.** De Inspecteur kan de vertegenwoordiging door een bepaalde persoon gemotiveerd
weigeren.

'''
Art. 34
'''
**1.** De bevoegdheden en de verplichtingen van een minderjarige, een onder curatele **Vertegenwoordiging**
gestelde of iemand die in staat van faillissement is verklaard, of wiens vermogen onder
bewind is gesteld, kunnen worden uitgeoefend en nagekomen door hun wettelijke
vertegenwoordiger, curator of bewindvoerder. Desgevorderd zijn laatstgenoemden
tot nakoming van die verplichtingen gehouden.
**2.** De bevoegdheden van een lichaam kunnen worden uitgeoefend en zijn verplich-
tingen kunnen worden nagekomen door iedere bestuurder. Desgevorderd is ieder
van hen tot nakoming van die verplichtingen gehouden.
**3.** Indien iemand is overleden, kunnen de erfgenamen in het uitoefenen van de be-
voegdheden en het nakomen van de verplichtingen welke de overledene zou hebben
gehad, als hij in leven was gebleven, worden vertegenwoordigd door één hunner, de
executeur, de door de rechter benoemde vereffenaar van de nalatenschap of de be-
windvoerder over de nalatenschap. Desgevorderd is ieder van de genoemde personen
tot nakoming van die verplichtingen gehouden.
**4.** Stukken betreffende belastingaangelegenheden van een overledene kunnen
worden gericht aan een van de in het derde lid genoemde personen.

'''
Art. 35
Uitsluiting vertegenwoor-
diging
'''
De Inspecteur kan vertegenwoordiging uitsluiten in de nakoming van een verplichting
van degene die zelf tot nakoming in staat is.

**Art. 36**
De bepalingen van deze afdeling gelden niet met betrekking tot strafvordering. **Niet voor strafvordering**

'''
Afdeling 2
Domiciliekeuze
'''
**Art. 37**
In bezwaar- en beroepschriften is degene die niet binnen Curaçao een vaste woonplaats **Domiciliekeuze**
of plaats van vestiging heeft, verplicht domicilie te kiezen binnen Curaçao.

'''
Art. 38
Geen vaste woon- of vesti-
gingsplaats
'''
Ingeval ingevolge de belastingverordening een aangiftebiljet of ander stuk moet
worden uitgereikt aan degene die niet binnen Curaçao een vaste woonplaats of plaats
van vestiging heeft, kan die uitreiking ook geschieden:
_a._ middels bezorging of afgifte bij de binnen Curaçao gelegen vaste inrichting voor
de uitoefening van zijn bedrijf of beroep;
_b._ aan de woning of het kantoor van zijn binnen Curaçao wonende of gevestigde
vertegenwoordiger.

'''
Afdeling 3
Toekenning van bevoegdheden
'''
'''
Art. 39
'''
**1.** De Minister is bevoegd: **Uitvoering**
_a._ bij ministeriële regeling met algemene werking nadere regels ter uitvoering van
de belastingverordening vast te stellen, tenzij bij de in artikel 1, eerste lid, genoemde
landsverordeningen anders is bepaald^39 ;

39 Zie o.a. Aanschrijving vaststelling zakelijke rente, Aanschrijving verduidelijking trust en spf en de Ministeriële
regeling grote evenementen.

**Algemene landsverordening Landsbelastingen 2** art. 39


**Hardheid** _b._ voor bepaalde gevallen of groepen van gevallen tegemoet te komen aan onbillijk-
heden van overwegende aard, welke zich bij de toepassing van de belastingverorde-
ning mochten voordoen;
**Kwijtschelding** _c._ regels te geven voor het verlenen van gehele of gedeeltelijke kwijtschelding van
opgelegde boeten.^40

**2.** De Inspecteur is belast met de uitvoering van de beslissing van de Minister.
**3.**^41 Ministeriële regelingen met algemene werking als bedoeld in het eerste lid worden
gepubliceerd. Overige beslissingen van de Minister, waaronder richtlijnen en instruc-
ties aan de functionarissen als bedoeld in artikel 2, tweede lid, onderdeel b, c en d,
worden gepubliceerd, voor zover het de uitvoering van de belastingverordening be-
treft.

**Art. 39a**^42
**Ambtshalve vermindering 1.** Een onjuiste belastingaanslag of beschikking kan door de Inspecteur ambtshalve
worden verminderd binnen tien jaar na het ontstaan van de belastingschuld. Een in
de belastingverordening voorziene vermindering, ontheffing of teruggaaf kan door
hem ambtshalve worden verleend.

**2.** Het eerste lid is van overeenkomstige toepassing ten aanzien van degene die een
onjuist bedrag op aangifte heeft voldaan of afgedragen, of van wie een onjuist bedrag
is ingehouden.

'''
Hoofdstuk VI
Verplichtingen ten dienste van de belastingheffing
'''
**Art. 40
Inlichtingenverplichting
eigen belastingheffing**

**1.** Een ieder is gehouden aan de Inspecteur op diens verzoek:
_a._ de gegevens en inlichtingen te verstrekken welke voor de belastingheffing ten
aanzien van hem van belang kunnen zijn;
_b._ de gegevensdragers of de inhoud daarvan, - zulks naar keuze van de Inspecteur –
waarvan de inzage van belang kan zijn voor de vaststelling van de feiten die op de
belastingheffing ten aanzien van hem invloed kunnen uitoefenen, voor dit doel be-
schikbaar te stellen.
**2.** De in het eerste lid genoemde verplichtingen gelden eveneens voor de transparante
vennootschap ten aanzien van de belastingheffing van de deelgerechtigden tot haar
vermogen.
**3.** De in het eerste lid, onderdeel b, genoemde verplichting geldt eveneens voor de
derde bij wie de gegevensdragers zich bevinden. De Inspecteur stelt degene wiens
gegevensdragers bij de derde worden ingezien zo spoedig mogelijk van de inzage in
kennis.
**4.** Ingeval de belastingverordening aangelegenheden van een derde aanmerkt als
aangelegenheden van de vermoedelijk belastingplichtige, gelden voor de derde gelijke
verplichtingen.
**5.** Een ieder is verplicht op vordering van de Inspecteur terstond een op hem betrek-
king hebbend geldig paspoort, rijbewijs, dan wel een geldige identiteitskaart aan te
bieden, indien dit van belang kan zijn voor de belastingheffing te zijnen aanzien.

**Art. 40a**^43
**Inlichtingenverplichting
verbonden lichaam**

**1.** Met betrekking tot een lichaam met een geheel of ten dele in aandelen verdeeld
kapitaal waarin een niet in Curaçao gevestigd lichaam of een niet in Curaçao wonende
natuurlijke persoon een belang heeft van meer dan 50 procent en met betrekking tot
een ander lichaam waarover dat niet binnen Curaçao gevestigde lichaam of die na-
tuurlijke persoon de zeggenschap heeft, is artikel 40, eerste lid, van overeenkomstige

'''
40 Zie Ministeriële regeling formeel belastingrecht (P.B. 2013-63) hierna opgenomen.
41 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
42 Ingevoegd bij P.B. 2013-50 met ingang van 01/05/13.
43 Ingevoegd bij P.B. 2013-50 met ingang van 01/05/13.
'''
**2** art. 39a **Algemene landsverordening Landsbelastingen**


toepassing ter zake van gegevens en inlichtingen, alsmede gegevensdragers die in
het bezit zijn van dat niet binnen Curaçao gevestigde lichaam of die natuurlijke per-
soon. De vorige volzin is van overeenkomstige toepassing in gevallen waarin twee of
meer lichamen of natuurlijke personen waarvan er ten minste één niet in Curaçao is
gevestigd of woont, volgens een onderlinge regeling tot samenwerking een belang
houden van meer dan 50 procent in een lichaam met een geheel of ten dele in aandelen
verdeeld kapitaal dan wel de zeggenschap hebben in een ander lichaam. Ter zake
van die gegevensdragers kan worden volstaan met het voor raadpleging beschikbaar
stellen van de inhoud daarvan door middel van kopieën, leesbare afdrukken of uit-
treksels.

**2.** Met betrekking tot de in het eerste lid bedoelde lichamen is artikel 40, eerste lid,
eveneens van overeenkomstige toepassing ter zake van gegevens en inlichtingen
alsmede gegevensdragers die in het bezit zijn van een niet in Curaçao gevestigd li-
chaam met een geheel of ten dele in aandelen verdeeld kapitaal waarin een in het
eerste lid bedoeld niet in Curaçao gevestigd lichaam of wonend natuurlijk persoon
een belang heeft van meer dan 50 procent of die in het bezit zijn van een ander niet
in Curaçao gevestigd lichaam waarover dat niet in Curaçao gevestigde lichaam of die
natuurlijke persoon zeggenschap heeft. Ter zake van die gegevensdragers kan worden
volstaan met het voor raadpleging beschikbaar stellen van de inhoud daarvan door
middel van kopieën, leesbare afdrukken of uittreksels.
**3.** Het eerste en het tweede lid zijn niet van toepassing indien het in die leden be-
doelde niet in Curaçao gevestigde lichaam of de in die leden bedoelde natuurlijke
persoon is gevestigd onderscheidenlijk woont in een staat waarmee in de relatie met
Curaçao een wederkerige regeling bestaat die voorziet in inlichtingenuitwisseling
met betrekking tot de belasting voor de heffing waarvan de Inspecteur de gegevens,
inlichtingen of gegevensdragers nodig heeft.
**4.** In afwijking van het derde lid kan de Minister de Inspecteur toestaan het eerste
en het tweede lid alsnog toe te passen indien is gebleken dat bij toepassing van het
derde lid de gevraagde inlichtingen niet kunnen worden verkregen.
**5.** Voor een weigering om te voldoen aan de in dit artikel omschreven verplichtingen
kan een lichaam zich niet met vrucht beroepen op een gebrek aan medewerking van
het niet in Curaçao gevestigde lichaam of de niet in Curaçao wonende natuurlijke
persoon.

'''
Art. 41
Wijze verstrekking gege-
vens en inlichtingen
'''
**1.** De gegevens en inlichtingen dienen duidelijk, stellig en zonder voorbehoud te
worden verstrekt, mondeling, schriftelijk of op andere wijze, - zulks naar keuze van
de Inspecteur -, en binnen een door de Inspecteur te stellen termijn. De gevraagde
gegevens en inlichtingen dienen kosteloos te worden verstrekt.
**2.** Toegelaten moet worden dat kopieën, leesbare afdrukken of uittreksels worden
gemaakt van de voor de raadpleging beschikbaar gestelde gegevensdragers of de
inhoud daarvan. Indien het maken van kopieën of leesbare afdrukken niet ter plaatse
kan geschieden, is de Inspecteur bevoegd de gegevensdragers voor dat doel voor
korte tijd mee te nemen.
**3.** Inzage in gegevensdragers dient te worden verleend op het kantoor van de Inspec-
teur binnen een door hem te stellen termijn. De Inspecteur kan akkoord gaan met
inzage op een andere plaats, voor zover dat de voortgang van het onderzoek niet be-
lemmert.

'''
Art. 42
Toegang gebouwen en
gronden
'''
**1.** Degene die een gebouw of grond in gebruik heeft, is verplicht ten behoeve van een
ingevolge de belastingverordening te verrichten onderzoek de Inspecteur en de door
deze aangewezen deskundigen desgevraagd toegang te verlenen tot alle gedeelten
van dat gebouw of van die grond.
**2.** De gevraagde toegang wordt verleend, tussen acht uur 's-ochtends en zes uur 's-
avonds, met uitzondering van zaterdagen, zondagen en algemeen erkende feestdagen.

**Algemene landsverordening Landsbelastingen 2** art. 42


**3.** Indien het gebouw of de grond wordt gebruikt voor het uitoefenen van een bedrijf
of een zelfstandig beroep wordt de gevraagde toegang mede verleend tijdens de uren
waarin het gebruik voor de uitoefening van dat bedrijf of zelfstandig beroep daadwer-
kelijk plaatsvindt.
**4.** De gebruiker van het gebouw of de grond is verplicht desgevorderd aanwijzingen
te geven die voor het onderzoek nodig zijn.
**5.** De tot de toegang bevoegde personen treden een woning zonder de uitdrukkelijke
toestemming van de bewoner niet binnen dan met inachtneming van het bepaalde
in het zesde lid.
**6.** Op het binnentreden in woningen is Titel X van het Derde Boek van het Wetboek
van Strafvordering van overeenkomstige toepassing, met uitzondering van de artikelen
155, vierde lid, 156, tweede lid, 157, tweede en derde lid, 158, eerste lid, laatste zinsnede,
en 160, eerste lid, en met dien verstande dat de machtiging wordt verleend door de
procureur generaal, de officier van justitie dan wel een hulpofficier van justitie.

**Art. 43
Administratieplicht 1.** Administratieplichtigen zijn:
_a._ natuurlijke personen die een bedrijf of beroep uitoefenen;
_b._ natuurlijke personen die inhoudingsplichtig zijn;
_c._ lichamen;
_d._ ingeval van ontbinding van een administratieplichtige degene die met de vereffe-
ning belast is of de bewaarder die daartoe door de rechter op verzoek van de vereffe-
naar is aangewezen.^44

**2.** Administratieplichtigen zijn gehouden van hun vermogenstoestand en van alles
betreffende hun bedrijf of beroep naar de eisen van dat bedrijf of beroep op zodanige
wijze een administratie te voeren en de daartoe behorende gegevensdragers op zo-
danige wijze te bewaren, dat te allen tijde hun rechten en verplichtingen alsmede de
voor de heffing van de belasting overigens van belang zijnde gegevens hieruit duidelijk
blijken.
**3.** De administratie behoort te worden gevoerd in het Nederlands, Papiaments, Engels
of Spaans, met gebruikmaking van de daarbij gebruikelijke cijfers.
**4.** Tot de administratie behoort hetgeen ingevolge de belastingverordening wordt
vastgelegd.
**5.** De inrichting, het bijhouden en bewaren van de administratie dient controle
daarvan door de Inspecteur binnen een redelijke termijn mogelijk te maken. De ad-
ministratieplichtige verleent de hiervoor benodigde medewerking en verschaft het
nodige inzicht in de opzet en de werking van de administratie.
**6.** Administratieplichtigen zijn verplicht hun administratie en de daartoe behorende
gegevensdragers gedurende tien jaar te bewaren.
**7.** De administratieplichtige die de gevorderde gegevensdragers of de inhoud daarvan,
niet of slechts ten dele ter inzage verstrekt, wordt geacht niet volledig te hebben
voldaan aan een op grond van dit artikel opgelegde verplichting tenzij aannemelijk
wordt gemaakt dat de afwezigheid of onvolledigheid van de gegevensdragers of de
inhoud ervan het gevolg is van overmacht.
**8.** Iedere administratieplichtige is gehouden bij de Inspecteur een Crib-nummer aan
te vragen.
**9.** De Inspecteur kent op verzoek van een belanghebbende aan deze een Crib-nummer
toe, dan wel maakt aan de belanghebbende op diens verzoek een reeds toegekend
Crib-nummer bekend. De belanghebbende is ter vaststelling van zijn identiteit ge-
houden een geldig paspoort, rijbewijs, dan wel een geldige identiteitskaart ter inzage
te verstrekken.
**10.** Bij landsbesluit, houdende algemene maatregelen, kunnen ten aanzien van ad-
ministratieplichtigen of groepen van administratieplichtigen met betrekking tot de
wijze van het voeren en bewaren van de administratie en de daartoe behorende ge-
gevensdragers, nadere regels worden gesteld.

'''
44 Toegevoegd bij P.B. 2018-30 met ingang van 16/06/18.
'''
**2** art. 43 **Algemene landsverordening Landsbelastingen**


**11.**^45 Indien een lichaam, onmiddellijk of middellijk, deelneemt aan de leiding van
of het toezicht op, dan wel in het kapitaal van een ander lichaam en tussen deze licha-
men ter zake van hun onderlinge rechtsverhoudingen voorwaarden worden overeen-
gekomen of opgelegd, nemen die lichamen in hun administratie gegevens op waaruit
blijkt:
_a._ op welke wijze de bedoelde voorwaarden tot stand zijn gekomen en
_b._ waaruit kan worden opgemaakt dat er sprake is van voorwaarden die in het econo-
mische verkeer door onafhankelijke partijen zouden zijn overeengekomen.
**12.**^46 Het elfde lid is van overeenkomstige toepassing, indien een zelfde persoon,
onmiddellijk of middellijk, deelneemt aan de leiding van of het toezicht op, dan wel
in het kapitaal van het ene en het andere lichaam.
**13.** Lichamen waarop het bepaalde in artikel 1A, eerste lid, onderdeel c, onder 2º, van
de Landsverordening op de winstbelasting van toepassing is, dienen de administratie
zodanig in te richten en de gegevens zodanig in de administratie vast te leggen dat,
ter bepaling van de buitenlandse winst, de opbrengsten behaald met genoemde ac-
tiviteiten en de daaraan gerelateerde kosten kunnen worden vastgesteld.^47
**14.** Administratieplichtigen, die een beroep doen op artikel 3b van de Algemene
landsverordening Landsbelastingen en waarvan de aandelen in dit lichaam niet
middellijk of onmiddellijk worden gehouden door een of meer in Curaçao gevestigde
lichamen of natuurlijk personen, of die voordelen verkrijgen anders dan voordelen
uit binnenlandse onderneming als bedoeld in artikel 4, vierde lid, van de Landsveror-
dening op de winstbelasting 1940, zijn ten behoeve van ’s landskas jaarlijks een bedrag
verschuldigd overeenkomstig bij landsbesluit, houdende algemene maatregelen,
nader vast te stellen tabel, tijdstip en regels.^48

'''
Art. 44
'''
**1.** De Administratieplichtige, bedoeld in artikel 43, eerste lid, onderdelen a en c, is **Factureringsplicht**
gehouden ter zake van zijn leveringen van goederen en verrichtingen van diensten,
als bedoeld in artikel 2, onderdeel a, van de Landsverordening omzetbelasting 1999,
een factuur aan de afnemer uit te reiken.
**2.** De factuur wordt uitgereikt binnen vijftien dagen na de maand waarin de levering
of de dienst is verricht.
**3.** Ingeval de administratieplichtige is overeengekomen dat de vergoeding voor de
door hem te verrichte levering of dienst vooraf geheel of in gedeelten zal worden
voldaan, dient ter zake van die betaling of deelbetalingen vóór het tijdstip van de
opeisbaarheid daarvan telkens een overeenkomstig het vijfde lid opgemaakte factuur
te worden uitgereikt.
**4.** De administratieplichtige is verplicht een afschrift van de uitgereikte factuur op
te maken en te bewaren.
**5.** Op de factuur, bedoeld in het eerste lid, dienen op duidelijke en overzichtelijke
wijze de volgende gegevens te worden vermeld:
_a._ de datum waarop de factuur is uitgereikt;
_b._ een doorlopend genummerd uniek factuurnummer;
_c._ de naam of handelsnaam, het adres, het Crib-nummer en het door de Kamer van
Koophandel toegekende registratienummer van de administratieplichtige die de le-
vering of de dienst verricht;
_d._ de naam of handelsnaam en het adres van de afnemer van de levering of de dienst;
_e._ een duidelijke omschrijving van de geleverde goederen of van de verrichte diensten;
_f._ de hoeveelheid van de geleverde goederen en de omvang van de verrichte diensten;
_g._ de eenheidsprijs exclusief omzetbelasting;
_h._ de datum waarop de goederen zijn geleverd of de dienst is verricht, indien deze
datum afwijkt van de datum waarop de factuur is uitgereikt;

45 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
46 Ingevoegd bij P.B. 2016-37 met ingang van 01/01/17 conform P.B. 2016-57.
47 Ingevoegd bij P.B. 2018-33 met terugwerkende kracht tot 01/07/18.
48 Ingevoegd bij P.B. 2018-83 met ingang van 29/12/2018 en gewijzigd bij P.B. 2019-92 met ingang van 01/01/2020.

**Algemene landsverordening Landsbelastingen 2** art. 44


'''
i. het toegepaste omzetbelastingtarief of, indien een vrijstelling van omzetbelasting
van toepassing is dan wel de omzetbelasting van de afnemer wordt geheven, enige
vermelding daarvan;
j. de vergoeding, alsmede eventuele kortingen die niet in de eenheidsprijs zijn begre-
pen;
k. het omzetbelastingbedrag dat ter zake van de leveringen of diensten verschuldigd
is geworden;
l. het totaal door de afnemer te betalen bedrag.
'''
**6.** Naast de in het vijfde lid vermelde gegevens dient op de aan de afnemer uitgereikte
factuur de vermelding “factuur” en op het afschrift als bedoeld in vierde lid de vermel-
ding “kopie factuur” te worden vermeld.
**7.** Op een factuur kunnen bedragen in willekeurig welke munteenheid voorkomen,
mits het te betalen bedrag aan omzetbelasting is uitgedrukt in Antilliaanse guldens.
De toepasselijke wisselkoers wordt bepaald aan de hand van de laatste verkoopkoers,
vastgesteld door de Centrale Bank van Curaçao en Sint Maarten, op het tijdstip waarop
de belasting verschuldigd wordt.
**8.** Bij doorlopende prestaties mag op de factuur in plaats van de datum van de
prestatie de periode worden vermeld waarop de factuur betrekking heeft. Deze periode
mag niet langer zijn dan een kalenderjaar.
**9.** Indien een factuur wijziging brengt aan een eerder uitgereikte factuur dient de
factuur een verwijzing naar de eerder uitgereikte factuur te bevatten, waarbij ten
minste de datum van uitreiking en het unieke factuurnummer van de eerder uitge-
reikte factuur worden vermeld.
**10.** Bij ministeriële regeling met algemene werking kunnen diensten en leveringen
van goederen worden aangewezen ter zake waarvan onder voorwaarden geen facturen
behoeven te worden uitgereikt.

**Art. 44a**^49
**Verplichte kassabon 1.**^50 In afwijking van het bepaalde in artikel 44:

'''
a. kunnen bij ministeriële regeling met algemene werking groepen administratie-
plichtigen worden aangewezen die verplicht zijn om ter zake van hun leveringen van
goederen en verrichtingen van diensten, als bedoeld in artikel 2, onderdeel a, van de
Landsverordening omzetbelasting 1999, een kassabon uit te reiken;
b. kan de Inspecteur bij een voor bezwaar vatbare beschikking de administratieplich-
tige, die ontheven is van de verplichting om een kassabon uit te reiken en die de ver-
plichtingen met betrekking tot diens kasadministratie niet volledig nakomt, alsnog
verplichten een kassabon uit te reiken.
'''
**2.** Een kassabon dient op het tijdstip waarop de goederen worden geleverd of de
dienst wordt verricht te worden uitgereikt.
**3.** De administratieplichtige is verplicht een afschrift van de uitgereikte kassabon op
te maken en te bewaren.
**4.** Op de kassabon, bedoeld in het eerste lid, dienen op duidelijke en overzichtelijke
wijze de volgende gegevens te worden vermeld:
_a._ de datum en het tijdstip waarop de kassabon is uitgereikt;
_b._ een door de Inspecteur toegekend uniek kassabonnummer;
_c._ het kassa-identificatienummer;
_d._ een door de Minister vastgesteld fiscaal logo;
_e._ de naam of handelsnaam, het adres en het Crib-nummer van de administratieplich-
tige die de levering of de dienst verricht;
_f._ een duidelijke omschrijving van de geleverde goederen of verrichte diensten;
_g._ de hoeveelheid van de geleverde goederen of de omvang van de verrichte diensten;
_h._ de eenheidsprijs inclusief omzetbelasting;
_i._ het toegepaste omzetbelastingtarief of indien een vrijstelling van omzetbelasting
van toepassing is, enige vermelding daarvan;

'''
49 Ingevoegd bij P.B. 2013-50 met ingang van 01/05/13.
50 Gewijzigd bij P.B. 2016-37 met ingang van 01/08/16 conform P.B. 2016-44.
'''
**2** art. 44a **Algemene landsverordening Landsbelastingen**


_j._ het totaal door de afnemer te betalen bedrag, alsmede eventuele kortingen die
niet in de eenheidsprijs zijn begrepen;
_k._ het omzetbelastingbedrag dat ter zake van de leveringen of diensten verschuldigd
is geworden.

**5.** Naast de in het vierde lid vermelde gegevens dient op de aan de afnemer uitgereikte
kassabon de vermelding “kassabon” en op het afschrift als bedoeld in het derde lid
de vermelding “kopie kassabon” te worden vermeld.
**6.** Op een kassabon mogen slechts bedragen in Antilliaanse guldens worden vermeld.
Het totaal door een afnemer te betalen bedrag mag daarnaast eveneens in Ameri-
kaanse dollars worden vermeld.
**7.** Bij ministeriële regeling met algemene werking kunnen administratieplichtigen
worden aangewezen die onder voorwaarden geen kassabon hoeven uit te reiken.
**8.** Bij landsbesluit, houdende algemene maatregelen^51 , kunnen nadere regels ter
uitvoering van deze bepaling worden gesteld.

'''
Art. 45^52
Inlichtingverplichtingen
heffing derden
'''
**1.** Met betrekking tot administratieplichtigen als bedoeld in artikel 43, eerste lid, zijn
de in de artikelen 40, 40a, 41, 42 en 43 omschreven verplichtingen van overeenkomstige
toepassing ten behoeve van:
_a._ de belastingheffing van derden;
_b._ de heffing van de belasting waarvan de inhouding aan hen is opgedragen.
**2.** Administratieplichtigen zijn gehouden in de maand januari van elk jaar aan de
Inspecteur een opgave te verstrekken betreffende derden,^53 die in het afgelopen jaar
bij of voor de administratieplichtige, anders dan in dienstbetrekking, werkzaamheden
of diensten hebben verricht.
**3.** Administratieplichtigen zijn gehouden in de maand januari van elk jaar aan de
Inspecteur een opgave te verstrekken betreffende de personen die in het afgelopen
jaar bij of voor de administratieplichtige in dienstbetrekking zijn geweest, met inbegrip
van bestuurders, commissarissen en personen, die niet anders dan op provisiebasis
werken.
**4.** Transparante vennootschappen verstrekken binnen twaalf maanden na afloop
van het boekjaar aan de Inspecteur:
_a._ een opgave, betreffende derden die in het afgelopen boekjaar aandeelhouder van
de transparante vennootschap zijn geweest, alsmede een verklaring dat op geen enkel
moment toonderaandelen hebben uitgestaan;
_b._ een begin- en eindbalans, alsmede een verlies- en winstrekening met betrekking
tot het afgelopen boekjaar.
**5.** De in het tweede en derde lid genoemde opgaaf moet worden gedaan op een
formulier dat bij de Inspecteur verkrijgbaar is.
**6.** De administratieplichtige, bedoeld in artikel 43, eerste lid, onderdeel c, is gehouden
in zijn administratie vast te leggen wie de uiteindelijk gerechtigden tot zijn vermogen
zijn. Als uiteindelijk gerechtigden worden aangemerkt:
_a._ de natuurlijke persoon die onmiddellijk of middellijk voor 25 procent of meer eige-
naar is van een lichaam of de natuurlijke persoon die onmiddellijk of middellijk voor
25 procent of meer van de stemrechten of een daarmee vergelijkbare uiteindelijke
zeggenschap kan uitoefenen over het lichaam;
_b._ indien na uitputting van alle mogelijke middelen en op voorwaarde dat er geen
gronden voor verdenking bestaan, geen van de personen, bedoeld in onderdeel a, is
achterhaald, of indien er enige twijfel bestaat of een persoon als bedoeld in onderdeel
a, de uiteindelijke eigenaar is of uiteindelijke zeggenschap heeft, de natuurlijke per-
soon voor wiens rekening een transactie wordt verricht;
_c._ indien na uitputting van alle mogelijke middelen en op voorwaarde dat er geen
gronden voor verdenking bestaan, geen van de personen, bedoeld in onderdeel a en

51 Zie Landsbesluit fiscale kasregistratiesystemen (P.B. 2014-80), hierna opgenomen in de wettenbundel.
52 Gewijzigd bij P.B. 2018-83 met terugwerkende kracht tot en met 01/07/18.
53 Gewijzigd bij P.B. 2018-33 met terugwerkende kracht tot 01/07/18.

**Algemene landsverordening Landsbelastingen 2** art. 45


'''
b, is achterhaald, of indien er enige twijfel bestaat of een persoon als bedoeld in on-
derdeel a en b, de uiteindelijke eigenaar is of uiteindelijke zeggenschap heeft, dan
wel of het degene is voor wiens rekening de transactie wordt verricht, de natuurlijke
persoon die behoort tot het hoger leidinggevend personeel, dat bindende beslissingen
kan nemen. Indien er geen hoger leidinggevend personeel, dat bindende beslissingen
kan nemen, is, de natuurlijke personen die bestuurslid of directielid zijn.
'''
**7.** Als uiteindelijk gerechtigden worden in het geval van een besloten vennootschap
of een naamloze vennootschap in elk geval de volgende categorieën van natuurlijke
personen aangemerkt:
_a._ natuurlijke personen, die de uiteindelijke eigenaar zijn van of zeggenschap hebben
over de vennootschap, via:
het onmiddellijk of middellijk houden van 25 procent of meer van de aandelen of een
daarmee vergelijkbaar belang, 25 procent of meer van de stemrechten of een daarmee
vergelijkbare uiteindelijke zeggenschap kunnen uitoefenen of 25 procent of meer
van het eigendomsbelang in die vennootschap houden met inbegrip van het houden
van toonderaandelen of andere middelen; of
_b._ indien na uitputting van alle mogelijke middelen en op voorwaarde dat er geen
gronden voor verdenking bestaan, geen van de personen, bedoeld in onderdeel a, is
achterhaald, of indien er enige twijfel bestaat of een persoon als bedoeld in onderdeel
a, de uiteindelijke eigenaar is of uiteindelijke zeggenschap heeft, dan wel de natuur-
lijke persoon is voor wiens rekening een transactie wordt verricht, de natuurlijke
personen die behoren tot het hoger leidinggevend personeel, dat bindende beslissin-
gen kan nemen, van de vennootschap. Indien er geen hoger leidinggevend personeel,
dat bindende beslissingen kan nemen, is, de natuurlijke persoon die bestuurslid of
directielid is.
Dit lid, is van overeenkomstige toepassing op andere juridische entiteiten vergelijkbaar
met een besloten vennootschap of een naamloze vennootschap of vennootschappen
naar buitenlands recht opgericht die met deze rechtsvormen vergelijkbaar zijn.
**8.** Als uiteindelijk gerechtigden worden in het geval van een vennootschap, bedoeld
in titel 13 van Boek 7 van het Burgerlijk Wetboek, in elk geval de volgende categorieën
van natuurlijke personen aangemerkt:
_a._ natuurlijke personen, die onmiddellijk of middellijk recht hebben op een aandeel
in de winsten van de vennootschap van 25 procent of meer, die bij besluitvorming ter
zake van wijziging van de overeenkomst die ten grondslag ligt aan de vennootschap,
of ter zake van de uitvoering van die overeenkomst anders dan door daden van beheer,
onmiddellijk of middellijk 25 procent of meer van de stemmen kunnen uitoefenen
voor zover in die overeenkomst besluitvorming bij meerderheid van stemmen is
voorgeschreven, die bij ontbinding van de vennootschap onmiddellijk of middellijk
recht hebben op een aandeel in de gemeenschap van 25 procent of meer, die uitein-
delijke zeggenschap kunnen uitoefenen over de vennootschap; of
_b._ indien na uitputting van alle mogelijke middelen en op voorwaarde dat er geen
gronden voor verdenking bestaan, geen van de personen, bedoeld in onderdeel a, is
achterhaald, of indien er enige twijfel bestaat of een persoon als bedoeld in onderdeel
a, de uiteindelijke eigenaar is of uiteindelijke zeggenschap heeft, dan wel de natuur-
lijke persoon is voor wiens rekening een transactie wordt verricht, de natuurlijke
personen die behoren tot het hoger leidinggevend personeel, dat bindende beslissin-
gen kan nemen, van de vennootschap. Indien er geen hoger leidinggevend personeel,
dat bindende beslissingen kan nemen, is, de natuurlijke persoon die bestuurslid of
directielid is.
Dit lid, is van overeenkomstige toepassing op onderlinge waarborgmaatschappijen,
coöperaties, rederijen, commanditaire vennootschappen, open commanditaire ven-
nootschappen, openbare vennootschappen, stille vennootschappen, fondsen voor
gemene rekening of vennootschappen naar buitenlands recht opgericht die met deze
rechtsvormen vergelijkbaar zijn, alsmede op andere juridische entiteiten vergelijkbaar
met een vennootschap.
**9.** Als uiteindelijk gerechtigden worden in het geval van een vereniging in elk geval
de volgende categorieën van natuurlijke personen aangemerkt:

**2** art. 45 **Algemene landsverordening Landsbelastingen**


_a._ natuurlijke personen, die bij de besluitvorming ter zake van wijziging van de sta-
tuten van de vereniging, of ter zake van de uitvoering van die statuten anders dan
door daden van beheer, onmiddellijk of middellijk 25 procent of meer van de stemmen
kunnen uitoefenen voor zover in die statuten besluitvorming bij meerderheid van
stemmen is voorgeschreven, die bij ontbinding van de vereniging onmiddellijk of
middellijk recht hebben op een aandeel in de gemeenschap van 25 procent of meer,
die uiteindelijke zeggenschap kunnen uitoefenen over de vereniging; of
_b._ indien na uitputting van alle mogelijke middelen en op voorwaarde dat er geen
gronden voor verdenking bestaan, geen van de personen, bedoeld in onderdeel a, is
achterhaald, of indien er enige twijfel bestaat of een persoon als bedoeld in onderdeel
a, de uiteindelijke eigenaar is of uiteindelijke zeggenschap heeft, dan wel de natuur-
lijke persoon is voor wiens rekening een transactie wordt verricht, de natuurlijke
personen die behoren tot het hoger leidinggevend personeel, dat bindende beslissin-
gen kan nemen, van de vereniging. Indien er geen hoger leidinggevend personeel,
dat bindende beslissingen kan nemen, is, de natuurlijke persoon die bestuurslid of
directielid is.
Dit lid, is van overeenkomstige toepassing op andere juridische entiteiten vergelijkbaar
met een vereniging of entiteiten naar buitenlands recht opgericht die met deze
rechtsvorm vergelijkbaar zijn.

**10.** Als uiteindelijk gerechtigden worden in het geval van een stichting in elk geval
de volgende categorieën van natuurlijke personen aangemerkt:
_a._ de oprichters;
_b._ de bestuurders;
_c._ voor zover van toepassing, de begunstigden, of voor zover de afzonderlijke personen
die de begunstigden zijn van de stichting niet kunnen worden bepaald, de groep van
personen in wier belang de stichting hoofdzakelijk is opgericht of werkzaam is; of
_d._ elke natuurlijke persoon die via andere middelen uiteindelijke zeggenschap over
de stichting uitoefent.
Dit lid, is van overeenkomstige toepassing op stichtingen particulier fonds, kerkge-
nootschappen, op andere juridische entiteiten vergelijkbaar met een stichting, alsmede
op entiteiten naar buitenlands recht opgericht die met deze rechtsvorm vergelijkbaar
zijn.
**11.** Als uiteindelijk gerechtigden worden in het geval van een trust in elk geval de
volgende categorieën van natuurlijke personen aangemerkt:
_a._ de oprichters;
_b._ de trustees;
_c._ voor zover van toepassing de protectors;
_d._ de begunstigden, of voor zover de afzonderlijke personen die de begunstigden zijn
van de trust niet kunnen worden bepaald, de groep van personen in wier belang de
trust hoofdzakelijk is opgericht of werkzaam is;
_e._ elke andere natuurlijke persoon die door onmiddellijk of middellijk eigendom of
via andere middelen uiteindelijke zeggenschap over de trust uitoefent.
Dit lid, is van overeenkomstige toepassing op andere juridische constructies vergelijk-
baar met een trust, alsmede op constructies naar buitenlands recht opgericht die met
de trust vergelijkbaar zijn.
**12.** De administratieplichtige, bedoeld in artikel 43, eerste lid, onderdeel c, is gehou-
den zijn directeuren, gemachtigden en vertegenwoordigers te identificeren en hun
identiteit vast te leggen met behulp van een in het land van uitgifte geldig rijbewijs,
geldig identiteitskaart of geldig paspoort en is voorts gehouden een afschrift hiervan
in zijn administratie te bewaren.
**13.** De administratieplichtige, bedoeld in artikel 43, eerste lid, onderdeel c, is voorts
gehouden een afschrift van het geldig paspoort, het geldig rijbewijs, dan wel de geldige
identiteitskaart van de uiteindelijke gerechtigden in zijn administratie te bewaren.
**14.** In bij ministeriële regeling met algemene werking te bepalen gevallen kan ont-
heffing worden verleend voor de verplichting, als bedoeld in het zesde lid, of kan het
percentage, bedoeld in het zesde lid, worden aangepast.

**Algemene landsverordening Landsbelastingen 2** art. 45


**15.** De administratieplichtige, bedoeld in artikel 43, eerste lid, onderdeel c, is gehouden
informatie omtrent de uiteindelijk gerechtigden te melden aan een bij landsbesluit,
houdende algemene maatregelen, met algemene werking aangewezen entiteit. Deze
entiteit zal deze informatie registeren in een besloten centrale register van uiteindelijk
gerechtigden.
**16.** Bij landsbesluit, houdende algemene maatregelen, worden nadere regels gesteld
omtrent de vorm en inhoud van het register en hoe de informatie gerapporteerd dient
te worden. Uitsluitend het Openbaar Ministerie, de Centrale Bank van Curaçao en
Sint Maarten, de Financiële Inlichtingen Eenheid Curaçao en de Inspecteur der Belas-
tingen krijgen toegang tot de informatie in het besloten centrale register van uitein-
delijk gerechtigden.^54
**17.** Indien de vennootschap zelf, de uiteindelijk belanghebbende of de eigenaar van
de vennootschap een onderneming is die genoteerd is op een beurs en aldaar onder-
worpen is aan voldoende transparantie aangaande uiteindelijk belanghebbende(n)
of indien de vennootschap, de uiteindelijk belanghebbende of eigenaar van de ven-
nootschap een dochter of kleindochter is van een ter beurze genoteerde onderneming
met een meerderheidsbelang in de betreffende dochter of kleindochter dan is het
niet nodig om de identiteit van de aandeelhouder of uiteindelijk belanghebbende
van een dergelijk vennootschap vast te stellen en te verifiëren. De betreffende iden-
tificatie gegevens dienen dan uit een openbaar register, van de betreffende vennoot-
schap zelf of uit andere betrouwbare bronnen verkregen te worden.

**Art. 45a**^55
**Verplichtingen aangewe-
zen administratieplichti-
gen**

**1.** De bij of krachtens de belastingverordening aan te wijzen administratieplichtigen
zijn gehouden, volgens bij of krachtens de belastingverordening te stellen regels, van
degene op wie de inlichtingen en gegevens, bedoeld in het tweede lid betrekking
hebben:
_a._ opgave te verlangen van diens ID-nummer of Crib-nummer;
_b._ de identiteit vast te stellen aan de hand van een op hem betrekking hebbend geldig
paspoort, rijbewijs, dan wel geldige identiteitskaart;
_c._ in de administratie op te nemen diens ID-nummer of Crib-nummer, een afschrift
van het in onderdeel b bedoelde document, en voor zover uit het afschrift niet de aard
of het nummer van het document blijkt ook de aard of het nummer van het document.
**2.** De bij of krachtens de belastingverordening aan te wijzen administratieplichtigen
zijn gehouden de bij of krachtens de belastingverordening aan te wijzen gegevens
en inlichtingen waarvan de kennisneming voor de belastingheffing van belang kan
zijn eigener beweging te verstrekken aan de Inspecteur volgens bij of krachtens de
belastingverordening te stellen regels.
**3.** De administratieplichtigen, bedoeld in het eerste lid, zijn gehouden bij de gegevens
en inlichtingen, bedoeld in het tweede lid, het ID-nummer of Crib-nummer te vermel-
den van degene op wie de gegevens betrekking hebben.

**Art. 46
Verschoningsrecht 1.** Voor een weigering om te voldoen aan de in de artikelen 40, 40a, 41, 42 en 43 om-
schreven verplichtingen kan niemand zich beroepen op de omstandigheid dat hij uit
enigerlei hoofde tot geheimhouding verplicht is, zelfs niet indien deze hem bij een
landsverordening is opgelegd.

**2.** Voor een weigering om te voldoen aan de verplichtingen ten aanzien van derden
als bedoeld in artikel 45, eerste lid, kunnen alleen geestelijken, notarissen, advocaten,
artsen en apothekers zich beroepen op de omstandigheid dat zij uit hoofde van hun
stand, ambt of beroep tot geheimhouding verplicht zijn.

'''
54 Gewijzigd bij P.B. 2018-33 met terugwerkende kracht tot 01/07/18.
55 Ingevoegd bij P.B. 2013-50 met ingang van 01/05/13.
'''
**2** art. 45a **Algemene landsverordening Landsbelastingen**


'''
Art. 47
'''
**1.** Voor het onderzoek van gegevensdragers kunnen door de Inspecteur deskundigen **Deskundigen en tolken**
en tolken worden aangewezen.
**2.** Alvorens zijn taak te aanvaarden legt de deskundige of de tolk in handen van de
gezaghebber de eed of belofte af, dat hij de hem op te dragen werkzaamheden eerlijk,
nauwgezet en naar zijn beste weten zal verrichten.
**3.** Aan de in het eerste lid bedoelde deskundigen en tolken kan een vergoeding
worden toegekend volgens bij landsbesluit, houdende algemene maatregelen, te
stellen regels.

'''
Art. 48^56
'''
**1.** Openbare lichamen en rechtspersonen die bij of krachtens een bijzondere wet **Overheidsinstellingen**
rechtspersoonlijkheid hebben verkregen, de onder hen ressorterende instellingen
en diensten, alsmede lichamen die hoofdzakelijk uitvoering geven aan het beleid van
de overheid, verschaffen, mondeling, schriftelijk of op andere wijze - zulks ter keuze
van de Inspecteur - de gegevens en inlichtingen, en wel kosteloos, die hun door de
Inspecteur ter uitvoering van de belastingverordening worden gevraagd.
**2.** De minister kan, op schriftelijk verzoek, ontheffing verlenen van de in het eerste
lid omschreven verplichtingen.

'''
Hoofdstuk VII
Bepalingen van strafrecht en strafvordering
'''
'''
Art. 49
'''
**1.** Degene die ingevolge de belastingverordening verplicht is tot: **Delictsomschrijvingen**
_a._ het binnen een gestelde termijn doen van aangifte en dat niet binnen de gestelde
termijn, onjuist of onvolledig doet;
_b._ het verstrekken van inlichtingen, gegevens of aanwijzingen, en deze niet, onjuist
of onvolledig verstrekt;
_c._ het ter inzage verstrekken van gegevensdragers of de inhoud daarvan, en deze in
valse of vervalste vorm voor dit doel ter beschikking stelt;
_d._ het voeren van een administratie overeenkomstig de in de belastingverordening
gestelde eisen, en een zodanige administratie niet voert;
_e._ het bewaren van gegevensdragers, en deze niet bewaart;
_f._ het naleven van een administratieve sanctie als bedoeld in artikel 28a, tweede lid,
en dit niet doet;
_g_ het aanbieden van de identificatiebewijzen als bedoeld in artikel 40, vijfde lid, en
dit niet doet;
_h._ het verlenen van medewerking als bedoeld in artikel 43, vijfde lid, en deze niet
verleend;
_i._ het uitreiken van een factuur als bedoeld in artikel 44 en dit niet, dan wel niet con-
form de gestelde eisen doet;
_j._ het uitreiken van een kassabon als bedoeld in artikel 44a en dit niet, dan wel niet
conform de gestelde eisen doet;
_k._ het verstrekken van de opgave, bedoeld in artikel 45, tweede, derde en vierde lid,
en deze opgave niet verstrekt;
_l._ de vastlegging van de uiteindelijk gerechtigde of gerechtigden, bedoeld in artikel
45, zesde tot en met het elfde lid, het bewaren van een identificatiebewijs, bedoeld
in artikel 45, twaalfde en dertiende lid, en het melden van de uiteindelijk gerechtigden
aan een bij landsbesluit, houdende algemene maatregelen, aangewezen entiteit,
bedoeld in artikel 45, vijftiende lid en dit niet, dan wel niet conform de gestelde eisen
doet;^57
_m._ de verplichtingen, bedoeld in artikel 45a, eerste en tweede lid, en dit niet, dan wel
niet conform de gestelde eisen doet;

56 Gewijzigd bij P.B. 2016-37 met ingang van 01/08/16 conform P.B. 2016-44.
57 Gewijzigd bij P.B. 2018-83 met terugwerkende kracht tot en met 01/07/18.

**Algemene landsverordening Landsbelastingen 2** art. 49


'''
n. het vaststellen van de identiteit van de werknemer, bedoeld in artikel 19, eerste
lid, onderdeel b van de Landsverordening op de Loonbelasting 1976, en hieraan niet
voldoet;
o. het voldoen aan artikel 19A, eerste lid, van de Landsverordening op de Loonbelasting
1976 en hieraan niet voldoet; wordt gestraft met een gevangenisstraf van ten hoogste
zes maanden of een geldboete van de vierde categorie of, indien het feit er toe strekt
dat er te weinig belasting wordt geheven en de te weinig geheven belasting hoger is
dan een geldboete van de vierde categorie, gestraft met ten hoogste eenmaal het
bedrag van de te weinig geheven belasting, dan wel met beide straffen;
p. het naleven van artikel 43, eerste tot en met het vierde lid, van de Landsverordening
op de winstbelasting 1940 en dit niet, niet binnen de gestelde termijn, onvolledig of
onjuist doet.^58
'''
**2.** Degene die zich opzettelijk schuldig maakt aan een in het eerste lid omschreven
strafbaar gesteld feit, wordt gestraft met gevangenisstraf van ten hoogste vier jaar
of een geldboete van de vijfde categorie of, indien het feit er toe strekt dat er te weinig
belasting wordt geheven en de te weinig geheven belasting hoger is dan een boete
van de vijfde categorie, met ten hoogste tweemaal het bedrag van de te weinig gehe-
ven belasting, dan wel met beide straffen.
**3.** Het eerste en tweede lid blijven buiten toepassing indien degene op wie de ver-
plichting rust alsnog een juiste en volledige aangifte doet of juiste en volledige inlich-
tingen, gegevens of aanwijzingen verstrekt voordat hij weet of redelijkerwijs moet
vermoeden dat de Inspecteur de onjuistheid of onvolledigheid bekend is of bekend
zal worden.
**4.** Niet strafbaar is degene die de in artikel 40a bedoelde verplichting niet nakomt
ten gevolge van een voor het niet in Curaçao gevestigde lichaam of de niet in Curaçao
wonende natuurlijke persoon geldend wettelijk of rechterlijk verbod tot het verlenen
van medewerking aan de verstrekking van de verlangde gegevens of inlichtingen of
het voor raadpleging beschikbaar stellen van boeken, bescheiden, andere gegevens-
dragers of de inhoud daarvan.

**Art. 50
Geheimhoudingsplicht 1.** Een ieder die betrokken is bij de uitvoering van de belastingverordening en daarbij
de beschikking krijgt over gegevens waarvan hij het vertrouwelijk karakter kent of
redelijkerwijs moet vermoeden, en voor wie niet reeds uit hoofde van ambt, beroep
of wettelijk voorschrift ter zake van die gegevens een geheimhoudingsplicht geldt,
is verplicht tot geheimhouding van die gegevens behoudens voor zover enig wettelijk
voorschrift hem tot mededeling verplicht of uit zijn taak de noodzaak tot mededeling
voortvloeit.

**2.** Het eerste lid is niet van toepassing ten aanzien van de strafbare feiten omschreven
in de artikelen 198 en 200 van het Wetboek van Strafvordering.
**3.** De Minister kan ontheffing, dan wel bij ministeriële regeling met algemene werking
vrijstelling verlenen van de in het eerste lid bedoelde verplichting.
**4.** Degene die opzettelijk de hem ingevolge het eerste lid opgelegde geheimhou-
dingsplicht schendt, wordt gestraft met gevangenisstraf van ten hoogste twee jaar
of een geldboete van de vijfde categorie dan wel met beide straffen.
**5.** Degene aan wiens schuld schending van de geheimhouding te wijten is, wordt
gestraft met gevangenisstraf van ten hoogste zes maanden of een geldboete van de
vierde categorie.
**6.** Vervolging inzake schending van de geheimhouding wordt slechts ingesteld op
klacht van hem, te wiens aanzien de geheimhouding is geschonden.

**Art. 51
Delicten niet nakoming
verplichtingen**

'''
Degene die niet voldoet aan de hem opgelegde verplichting ingevolge de artikelen
41, tweede lid, 42, eerste lid, en 45a, derde lid, wordt gestraft met een geldboete van
de derde categorie.
'''
'''
58 Gewijzigd bij P.B. 2018-30 met ingang van 16/06/18.
'''
**2** art. 50 **Algemene landsverordening Landsbelastingen**


'''
Art. 52
Strafbepalingen gedele-
geerde wetgeving
'''
**1.** Overtreding van krachtens de belastingverordening bij landsbesluit, houdende
algemene maatregelen, vastgestelde bepalingen wordt, voor zover die overtreding
is aangemerkt als strafbaar feit, gestraft met geldboete van de derde categorie.
**2.** Overtreding van door de Minister krachtens de belastingverordening vastgestelde
ministeriële regeling met algemene werking wordt, voor zover die overtreding is
aangemerkt als strafbaar feit, gestraft met geldboete van de tweede categorie.

'''
Art. 53
'''
**1.** De bij deze landsverordening strafbaar gestelde feiten waarop gevangenisstraf is **Kwalificatiebepaling**
gesteld, zijn misdrijven. De overige bij deze landsverordening strafbaar gestelde feiten
zijn overtredingen.
**2.** De strafwet van Curaçao is mede van toepassing op ieder die zich buiten Curaçao
schuldig maakt aan een bij of krachtens deze landsverordening als misdrijf omschreven
strafbaar gesteld feit.

'''
Art. 54
'''
**1.** Met het opsporen van de bij belastingverordening strafbaar gestelde feiten zijn, **Opsporingsbevoegdheid**
naast de in artikel 184 van het Wetboek van Strafvordering bedoelde personen, belast
de Inspecteur alsmede de daartoe bij landsbesluit aangewezen ambtenaren en per-
sonen van de Belastingdienst. Een zodanige aanwijzing wordt bekendgemaakt in het
blad waarin van landswege de officiële berichten worden geplaatst.
**2.** De Inspecteur alsmede de in het eerste lid bedoelde ambtenaren en personen van
de Belastingdienst zijn te allen tijde bevoegd tot inbeslagneming van de ingevolge
het Wetboek van Strafvordering voor inbeslagneming vatbare voorwerpen. Zij kunnen
daartoe hun uitlevering vorderen.
**3.** Bij het opsporen van een bij de belastingverordening strafbaar gesteld feit hebben
de in het eerste lid bedoelde ambtenaren en personen toegang tot elke plaats, voor
zover dat redelijkerwijs voor de vervulling van hun taak nodig is. Zij zijn bevoegd zich
door bepaalde door hen aangewezen personen te laten vergezellen. Voor het betreden
van woningen is artikel 155 van het Wetboek van Strafvordering onverkort van toepas-
sing.
**4.** Bij landsbesluit, houdende algemene maatregelen, kunnen regels worden gesteld
met betrekking tot de vereisten waaraan de krachtens het eerste lid aangewezen
ambtenaren en personen dienen te voldoen.

'''
Art. 55
'''
**1.** De in artikel 54, eerste lid, bedoelde ambtenaren en personen maken van hun be- **Procesverbaal**
vindingen proces-verbaal op en delen dit in afschrift mede aan de bekeurde.
**2.** Alle processen-verbaal betreffende de bij deze landsverordening strafbaar gestelde
feiten worden ingezonden aan de Directeur. De Directeur doet de processen-verbaal
betreffende strafbare feiten, ter zake waarvan inverzekeringstelling of voorlopige
hechtenis is toegepast dan wel een woning zonder de uitdrukkelijke toestemming
van de bewoner is binnengetreden, met de inbeslaggenomen voorwerpen, onverwijld
toekomen aan de officier van justitie. De overige processen-verbaal doet de Directeur
met de inbeslaggenomen voorwerpen toekomen aan de officier van justitie indien
hij een vervolging wenselijk acht.
**3.** De officier van justitie is bevoegd, de zaak ter afdoening weer in handen van de
Directeur te stellen, die daarmede alsdan kan handelen overeenkomstig artikel 56.
**4.** Het bepaalde in artikel 14, tweede lid, van het Wetboek van Strafvordering is niet
van toepassing in zaken waarin de Directeur het proces-verbaal niet aan de officier
van justitie heeft doen toekomen.

'''
Art. 56
'''
**1.** Ten aanzien van feiten, met betrekking tot welk het proces-verbaal niet in handen **Transactiebevoegdheid**
van de officier van justitie is gesteld, vervalt het recht tot strafvordering indien vrijwillig

**Algemene landsverordening Landsbelastingen 2** art. 56


'''
wordt voldaan aan de voorwaarden welke de Directeur ter voorkoming van de straf-
vervolging heeft gesteld.
'''
**2.** Als voorwaarden kunnen worden gesteld:
_a._ betaling aan de openbare rechtspersoon Curaçao van een geldsom van ten minste
NAf 100,-- en ten hoogste het maximum van de geldboete die voor het feit kan worden
opgelegd;
_b._ afstand van voorwerpen die in beslag genomen zijn en vatbaar voor verbeurdver-
klaring of onttrekking aan het verkeer;
_c._ uitlevering, of voldoening aan de openbare rechtspersoon Curaçao van de geschatte
waarde, van voorwerpen die vatbaar zijn voor verbeurdverklaring;
_d._ voldoening aan de openbare rechtspersoon Curaçao van een geldbedrag gelijk aan
of lager dan het geschatte voordeel - met inbegrip van besparing van kosten - door
de verdachte verkregen door middel van of uit het strafbare feit;
_e._ het alsnog voldoen aan een bij de belastingverordening gestelde verplichting.
**3.** De Directeur bepaalt telkens de termijn waarbinnen aan de gestelde voorwaarden
moet zijn voldaan, en zo nodig tevens de plaats waar dat moet gebeuren.

**Art. 57
Uittreksels van vonnissen** De griffier van het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint
Maarten en van Bonaire, Sint Eustatius en Saba en Aruba verstrekt aan de Directeur
desgevraagd kosteloos afschrift of uittreksel van vonnissen, in belastingstrafzaken
gewezen.^59

'''
Hoofdstuk VIII
Bepalingen van internationaal recht
'''
'''
Afdeling 1
Voorkoming van dubbele belasting
'''
**Art. 58
Voorkoming dubbele be-
lasting**

'''
Bij landsbesluit, houdende algemene maatregelen, kunnen ter voorkoming van
dubbele belasting in gevallen waarin daaromtrent niet op andere wijze is voorzien,
regels worden gesteld ten einde gehele of gedeeltelijke vrijstelling of vermindering
van de belasting te verlenen, voor zover het voorwerp van de belasting is onderworpen
aan een belasting die vanwege een ander land van het Koninkrijk, een andere mo-
gendheid of een volkenrechtelijke organisatie wordt geheven.
'''
**Art. 59**^60
**Diplomatieke, consulaire
& andere vertegenwoordi-
gers**

**1.** Bij landsbesluit, houdende algemene maatregelen, kunnen regels worden gesteld
waardoor ten aanzien van in Curaçao wonende diplomatieke, consulaire en andere
vertegenwoordigers van een vreemde mogendheid alsmede hun gezinsleden, de hun
toegevoegde ambtenaren en de bij hen inwonende in hun dienst zijnde personen
vrijstelling van belasting wordt verleend.
**2.** Bij landsbesluit, houdende algemene maatregelen, kunnen in gevallen waarin
het volkenrecht, daartoe noopt, vrijstelling van belasting worden verleend.

**Art. 60
Internationale regelingen** Indien een gedeelte van een inkomen wordt genoten van een internationale organi-
satie en dit gedeelte ingevolge bepalingen van internationaal recht van de heffing
van belasting in Curaçao is vrijgesteld, wordt behoudens voor zover bij die bepalingen
een nadere wijze van berekenen is voorgeschreven, de inkomstenbelasting verschul-
digd over het overige gedeelte van het inkomen gesteld op het verschil tussen de be-
lasting berekend zonder inachtneming van de vrijstelling en de belasting welke volgens

'''
59 Per abuis is in P.B. 2012-49 “Aruba” tweemaal opgenomen in dit artikel.
60 Gewijzigd bij P.B. 2018-83 met ingang van 29/12/18.
'''
**2** art. 57 **Algemene landsverordening Landsbelastingen**


bij ministeriële regeling met algemene werking vast te stellen regels aan het vrijge-
stelde gedeelte van het inkomen dient te worden toegerekend.

'''
Hoofdstuk IX
Bepalingen omtrent de aanvraag van een ruling^61
'''
'''
Art. 61
'''
**1.** De Inspecteur is bevoegd om met een belastingplichtige een ruling aan te gaan.
**2.** Onder een ruling wordt verstaan vooraf gemaakte afspraken tussen een belasting-
plichtige en de Inspecteur omtrent hoe bepalingen van de belastingverordening
zullen worden toegepast op een specifieke situatie, een verrichting of een transactie.
**3.** De aanvraag van een ruling wordt binnen twee weken doch uiterlijk binnen dertig
dagen afgehandeld.
**4.** Bij ministeriële regeling, met algemene werking, kunnen ter uitvoering van dit
artikel nadere regels worden gesteld.

'''
Art. 62^62
'''
**1.** _Ten behoeve van het ’s landskas is verschuldigd NAf 500 voor elke ruling die wordt aange-
vraagd bij de Inspecteur en waarop Landsverordening op de winstbelasting 1940 toepassing
heeft_.
**2.** _Het in het eerste lid genoemde bedrag wordt door de belastingplichtige of zijn gemachtigde,
betaald aan de Ontvanger, binnen één week na het indienen van het verzoek bij de Inspecteur.
Een kopie van het betalingsbewijs dient naar de Inspecteur te worden gestuurd._
**3.** _Indien het in het eerste lid genoemde bedrag niet wordt betaald, wordt een verzoek niet in
behandeling genomen._
**4.** _Bij landsbesluit, houdende algemene maatregelen, kan het bedrag bedoeld in het eerste lid
worden aangepast._

**Art. 63**
[Vervallen bij P.B. 2015-53 met ingang van 26/09/15.]

**Art. 64**
[Vervallen bij P.B. 2015-53 met ingang van 26/09/15.]

**Art. 65**
[Vervallen bij P.B. 2015-53 met ingang van 26/09/15.]

'''
Hoofdstuk X
Overgangs- en slotbepalingen^63
'''
**Art. 66**
De stukken die de toepassing van de belastingverordening betreffen of die daaruit **Vrijstelling zegelbelasting**
voortvloeien, zijn vrij van zegel en worden, voor zover aan de formaliteit van registratie
onderworpen, kosteloos geregistreerd, tenzij bij landsverordening anders is bepaald.

'''
Art. 67
Kosten-regeling publica-
ties
'''
Bij landsbesluit, houdende algemene maatregelen, kan een vergoeding worden
vastgesteld ter dekking van de kosten voor een door de Directeur te publiceren voor-
lichtings- en informatiemateriaal betreffende belastingheffing.

**Art. 68**
Deze landsverordening kan worden aangehaald als: Algemene landsverordening **Citeertitel**
Landsbelastingen.

61 Ingevoegd bij P.B. 2018-30 met ingang van 16/06/18.
62 Treedt in werking op een nader te bepalen tijdstip.
63 Gewijzigd bij P.B. 2018-30 met ingang van 16/06/18.

**Algemene landsverordening Landsbelastingen 2** art. 68


### Ministeriële regeling identiteit deelgerechtigden

### transparante vennootschappen^1

**Art. 1
Definities** In deze ministeriële regeling wordt verstaan onder:

'''
lichaam: elk van de in artikel 2, eerste lid, onderdeel c, van de Algemene landsveror-
dening Landsbelastingen bedoelde lichamen waaraan de deelgerechtigdheid in de
transparante vennootschap rechtstreeks wordt toegerekend.
natuurlijke persoon: natuurlijke persoon aan wie de deelgerechtigheid in de transpa-
rante vennootschap rechtstreeks wordt toegerekend;
transparante vennootschap: de transparante vennootschap, bedoeld in artikel 3,
eerste lid, onderdeel d, van de Algemene landsverordening Landsbelastingen.
'''
**Art. 2
Identiteit van deelgerech-
tigden**

**1.** De in artikel 3b, vijfde lid van de Algemene landsverordening Landsbelastingen,
zijn:
_a._ indien de deelgerechtigde een natuurlijke persoon is die voor de belastingheffing
inwoner is van Curaçao:
_1._ de volledige naam;
_2._ de geboortedatum;
_3._ het adres zoals opgenomen in de bevolkingsadministratie;
_4._ eventueel een correspondentieadres; en
_5._ het identiteitsnummer (ID-nummer) of CRIB-nummer.
_b._ indien de deelgerechtigde een natuurlijke persoon is die voor de belastingheffing
geen inwoner is van Curaçao:
_1._ de volledige naam;
_2._ de geboortedatum;
_3._ het correspondentieadres;
_4._ het door zijn woonstaat toegekende fiscale identificatienummer.
_c._ indien de deelgerechtigde een lichaam is dat voor de belastingheffing gevestigd
is in Curaçao:
_1._ de statutaire naam;
_2._ de handelsnaam;
_3._ de oprichtingsdatum;
_4._ het adres; en
_5._ het CRIB-nummer.
_d._ indien de deelgerechtigde een lichaam is dat voor de belastingheffing niet gevestigd
is op Curaçao:
_1._ de statutaire naam;
_2._ de oprichtingsdatum;
_3._ het adres van de hoofdvestiging;
_4._ het door de vestigingstaat aan het lichaam toegekende fiscale identificatienummer.
**2.** De gegevens, bedoeld in artikel 1, eerste lid, onderdeel a en b, worden vergezeld
door een kopie van het paspoort of een ander van overheidswege afgegeven identifi-
catiemiddel.
**3.** De gegevens, bedoeld in artikel 1, eerste lid, onderdeel d, worden vergezeld door
een kopie van een uittreksel uit het handelsregister van vestigingsland van het lichaam
en een fiscale woonplaatsverklaring, afgegeven door de bevoegde autoriteit van het
fiscale vestigingsland van het lichaam. De gevraagde gegevens mogen niet langer
dan drie maanden voor het verzoek zijn afgegeven.

'''
1 P.B. 2012-17
'''
**3** art. 1 **Ministeriële regeling identiteit deelgerechtigden transparante vennootschappen**


'''
Art. 3
Kopie aandeelhoudersre-
gister
'''
De naamloze vennootschap of besloten vennootschap die het verzoek indient, overlegt
daarbij een kopie van een bijgewerkt aandeelhoudersregister en een kopie van haar
statuten.

'''
Art. 4
Vermelding uiteindelijke
gerechtigden
'''
Indien de aandeelhouders niet de uiteindelijke gerechtigden zijn tot het vermogen
van de verzoekende vennootschap, wordt vermeld wie de uiteindelijke gerechtigden
zijn, waaruit de gerechtigdheid bestaat en worden stukken overlegd waaruit blijkt
dat de deelgerechtigdheid bestaat.

'''
Art. 5
Vaststelling vaste inrich-
ting
'''
Indien een of meer aandeelhouders of deelgerechtigden buiten Curaçao wonen of
gevestigd zijn, wordt een omschrijving van de activiteiten van de transparante ven-
nootschap gegeven, zodanig dat vastgesteld kan worden of al dan niet sprake is van
een vaste inrichting.

**Art. 6**
Indien een bestaande naamloze vennootschap of besloten vennootschap een verzoek **Eindafrekening**
indient om als maatschap aangemerkt te worden, wordt een eindafrekening per het
einde van het laatste boekjaar van de belaste periode overlegd.

**Art. 7**
Deze ministeriële regeling treedt in werking met ingang van de dag na die van de **Inwerkingtreding**
uitgifte van het Publicatieblad waarin de afkondiging is geschied en werkt terug tot
en met 1 januari 2012.

**Art. 8**
Deze ministeriële regeling wordt aangehaald als: Ministeriële regeling identiteit **Citeertitel**
deelgerechtigden transparante vennootschappen.

**Ministeriële regeling identiteit deelgerechtigden transparante vennootschappen 3** art. 8


'''
Toelichting behorende bij de Ministeriële regeling identiteit deelgerechtigden
transparante vennootschappen
'''
'''
Algemeen
In verband met het streven van de regering naar een grotere diversificatie en flexibi-
liteit van het belastingregime voor kapitaalvennootschappen in Curaçao, is besloten
om de transparante vennootschap in het Curaçaose recht te introduceren.
Op deze manier wordt mede getracht om Curaçao aantrekkelijker te maken voor
buitenlandse investeerders.
Indien een naamloze vennootschap of een besloten vennootschap een beroep wenst
te doen op deze nieuwe regeling, die opgenomen is in de Algemene landsverordening
Landsbelastingen, zal het bestuur –conform artikel 3b, eerste lid, van de Algemene
landsverordening Landsbelastingen- daartoe een verzoek moeten indienen bij de
Inspecteur.
Het verzoek dient in ieder geval de in deze ministeriële regeling vermelde gegevens
te bevatten.
Op deze manier moet worden bereikt dat er duidelijkheid bestaat omtrent de identiteit
van de deelgerechtigde(n).
'''
'''
Artikelsgewijze toelichting
'''
'''
Artikel 1
Dit artikel spreekt voor zich.
'''
'''
Artikel 2
In dit artikel wordt een onderscheid gemaakt tussen personen die in Curaçao wonen
en lichamen die daar gevestigd zijn en personen en lichamen die elders wonen dan
wel gevestigd zijn. De gevraagde gegevens behoeven geen nadere toelichting.
'''
'''
Voor wat betreft het bepaalde in het tweede lid, luidende dat een paspoort of een
ander van overheidswege afgegeven identificatiemiddel kan worden gebruikt om
zich in het kader van de uitvoering van de fiscale regeling te identificeren, wordt het
volgende opgemerkt. Gedacht kan worden aan een kopie van een rijbewijs, een
identiteitskaart (sédula) of een daarmee vergelijkbaar buitenlands van overheidswege
afgegeven identificatiemiddel.
'''
'''
Artikel 3
Dit artikel spreekt voor zich. Het bestuur van een naamloze vennootschap respectie-
velijk besloten vennootschap is op basis van de artikelen 109 en 209 van Boek 2 van
het Burgerlijk Wetboek verplicht een register bij te houden, waarin de namen en
adressen van alle aandeelhouders van aandelen zijn opgenomen. Het aan de Inspec-
teur overdragen van een bewerkt aandeelhoudersregister brengt dientengevolge
geen hogere kosten met zich mee voor de verzoekende vennootschap.
'''
'''
Artikel 4
In de praktijk kunnen anderen dan de aandeelhouders, uiteindelijk gerechtigd zijn
tot het vermogen van de vennootschap. Te denken valt bijvoorbeeld aan gecertifi-
ceerde aandelen.
'''
'''
Artikel 5
Dit artikel spreekt voor zich. Indien geconstateerd wordt dat sprake is van een vaste
inrichting, zijn hieraan belastinggevolgen verbonden.
'''
**3** bijlage **Ministeriële regeling identiteit deelgerechtigden transparante vennootschappen**


_Artikel 6_
Deze gegevens worden gevraagd om de Inspecteur tijdig in staat te stellen de belas-
tingheffing te verzekeren.

_Financiële paragraaf_
Deze ministeriële regeling heeft geen financiële gevolgen voor de Landskas, omdat
deze strekt ter uitvoering van de nieuwe regeling in de Algemene landsverordening
Landsbelastingen en slechts wettelijk vastlegt welke gegevens aan de Inspecteur
dienen te worden overhandigd.

**Ministeriële regeling identiteit deelgerechtigden transparante vennootschappen 3** bijlage


### Ministeriële regeling termijn

### inkomstenbelastingaanslagen

'''
Ministeriële regeling met algemene werking, van de 20ste september 2016 ter
uitvoering van artikel 39, eerste lid, onderdeel a, van de Algemene landsverordening
Landsbelastingen (Ministeriële regeling termijn inkomstenbelastingaanslagen)^1
'''
**Art. 1
Vaststelling voor inwer-
kingtreding regeling**

'''
Een belastingaanslag voor de inkomstenbelasting voor het belastingjaar 2015 wordt,
voor een aangifte die voor de inwerkingtreding van deze regeling bij de Inspecteur is
ingeleverd, vastgesteld binnen een termijn van ten hoogste twee maanden na de in-
werkingtreding van deze regeling.
'''
**Art. 2
Vaststelling na inwerking-
treding regeling**

'''
Een belastingaanslag voor de inkomstenbelasting voor het belastingjaar 2015 wordt,
voor een aangifte die na de inwerkingtreding van deze regeling bij de Inspecteur is
ingeleverd, vastgesteld binnen een termijn van ten hoogste drie maanden na dagte-
kening van inlevering van het aangiftebiljet.
'''
**Art. 3
Vaststelling vanaf 2016** Een belastingaanslag voor de inkomstenbelasting wordt vanaf het belastingjaar 2016

'''
vastgesteld binnen een termijn van ten hoogste drie maanden na dagtekening van
inlevering van het aangiftebiljet.
'''
**Art. 4
Rapportage 1.** De Inspecteur stelt maandelijks binnen een week na afsluiting van een maand een

'''
rapportage op van de totale ingediende aangiftebiljetten en de totale vastgestelde
belastingaanslagen voor de inkomstenbelasting.
'''
**2.** De Inspecteur stuurt de Minister de rapportage, bedoeld in het eerste lid, maan-
delijks op.

**Art. 5
Intrekking** De Ministeriële regeling termijn vaststelling aanslagen inkomstenbelasting^2 wordt

'''
ingetrokken.
'''
**Art. 6
Inwerkingtreding** Deze regeling treedt in werking met ingang van de dag na de datum van bekendma-

'''
king.
'''
**Art. 7
Citeertitel** Deze regeling wordt aangehaald als: Ministeriële regeling termijn inkomstenbelas-

'''
tingaanslagen.
'''
'''
1 P.B. 2016-68
2 P.B. 2016, 51.
'''
**4** art. 1 **Ministeriële regeling termijn inkomstenbelastingaanslagen**


### Aanschrijving vaststelling zakelijke rente

**Aanschrijving ter uitvoering van artikel 39, lid 1, onderdeel a, van de Algemene
landsverordening Landsbelastingen**^1 **(Aanschrijving vaststelling zakelijke rente)**^2

De Raad van Beroep voor Belastingzaken heeft in de uitspraken nr. 1998-191 en 1999-
275 bepaald dat een zakelijke rente in gelieerde verhoudingen 6% bedraagt. Deze
procedures betreffen de belastingjaren 1993 en 1994. Het rentepercentage werd in
deze procedures benaderd vanuit de uitlener van de gelden.

Dit rentepercentage komt aan de orde in niet-zakelijke verhoudingen, zoals bijvoor-
beeld leningen tussen vennootschappen die tot hetzelfde concern behoren, tussen
een directeur-grootaandeelhouder en zijn vennootschap(pen) en bij leningen aan
personeelsleden (zie de Handleiding loonbelasting).

Gelet op de ontwikkelingen op Curaçao met betrekking tot de rente is er aanleiding
het percentage aan te passen en vast te stellen op 4. Dit percentage kan toegepast
worden voor boekjaren beginnend op of na 1 januari 2012.

Deze aanschrijving kan worden aangehaald als "Aanschrijving vaststelling zakelijke
rente".

Willemstad, 30 oktober 2012
De Minister van Financiën
Dr. J.M.M. Jardim

1 P.B. 2001, no. 89
2 30-10-2012

**Aanschrijving vaststelling zakelijke rente 5**


### Aanschrijving verduidelijking trust en spf

'''
Aanschrijving ter uitvoering van artikel 39, lid 1, onderdeel a, van de Algemene
landsverordening Landsbelastingen^1 (Aanschrijving verduidelijking trust en SPF)^2
'''
'''
Op 12 oktober 2011 heeft de Staten van Curaçao het wetsvoorstel Landsverordening
houdende aanvulling Boek 3 van het Burgerlijk Wetboek inzake trusts (Landverorde-
ning trusts) aangenomen. Dit voorstel, dat in werking is getreden per 1 januari 2012,
voorziet in de instelling van de trust. Daarnaast zijn bepalingen opgenomen waardoor
de trust fiscaal op dezelfde wijze behandeld wordt als de stichting particulier fonds
(hierna: spf).
'''
'''
Zowel voor de spf als de trust is bepaald dat zowel periodieke als eenmalige uitkerin-
gen in de inkomstenbelasting belast worden. Voor periodieke uitkeringen brengt dit
geen wijziging in de situatie voorafgaand aan 1 januari 2012. Vanwege de wetsyste-
matiek zal het belasten van de uitkeringen alleen gevolgen hebben voor binnenlandse
belastingplichtigen. Vanaf 1 januari 2012 zijn derhalve alle uitkeringen door een spf
of een trust aan inwoners van Curaçao belast voor inkomstenbelastingdoeleinden.
Uit de praktijk is gevraagd om duidelijkheid te verschaffen voor een aantal situaties.
'''
'''
Inbreng
Bij lijfrenten kunnen twee situaties onderscheiden worden.
In de eerste situatie bedingt een natuurlijk persoon een periodieke uitkering bij een
spf of trust. Hiervoor dient uiteraard een premie of koopsom betaald te worden. Op
grond van de saldomethode blijft de periodieke uitkering onbelast tot het bedrag
van de betaalde premies of koopsom (prestatie). Slechts voor zover de uitkeringen
de prestatie overtreffen worden ze belast.
Een spf of trust kan eveneens uit haar vermogen uitkeringen doen zonder dat hiervoor
een rechtsverhouding bestaat. Voorafgaand aan de wetswijzigingen, welke per 1 ja-
nuari 2012 inwerking zijn getreden, waren slechts de uitkeringen gedaan in de vorm
van een periodieke uitkering belast. Eenmalige uitkeringen konden in beginsel onbe-
last plaatsvinden. Echter, als gevolg van de wetswijzigingen worden eenmalige uitke-
ringen gedaan door een spf of trust eveneens in de belastingheffing betrokken.
'''
'''
Als uitgangspositie dient de eigen inleg in beginsel niet te worden belast, voor perio-
dieke uitkeringen bestaat hiervoor reeds de saldomethode. Voor eenmalige uitkerin-
gen is uitdrukkelijk bepaald dat deze slechts belast zijn voor zover zij de waarde van
de prestatie te boven gaan. Voor de spf en trust is in de wet vermeld dat de betaalde
successiebelasting als prestatie wordt aangemerkt.
'''
'''
Het werkelijk ingebrachte bedrag zal hierdoor bij uitkering deels als inkomen worden
aangemerkt. De gedachte bij deze bepaling is dat de uitkering meestal aan een andere
persoon zal plaatsvinden dan de inbrenger. Voor zover er reeds successiebelasting is
betaald, is het niet redelijk hetzelfde bedrag nogmaals onder de inkomstenbelasting
te brengen.
'''
'''
Derhalve keur ik goed dat in geval van een inbreng middels een schenking door een
ingezetenen in een spf of trust eveneens als prestatie wordt aangemerkt, de waarde
van hetgeen is ingebracht in de spf of trust. Voor een uitleg van het begrip schenking
wordt hierbij aangesloten bij de definitie zoals opgenomen in artikel 5 Successiebe-
lastingverordening 1908.
'''
'''
1 P.B. 2001, no. 89
2 26-11-2014
'''
**6 Aanschrijving verduidelijking trust en spf**


_Inbreng door een niet-ingezetene_
Indien een niet-ingezetene van Curaçao rechtstreeks zou schenken aan een inwoner
van Curaçao is daar in beginsel geen successiebelasting over verschuldigd. Om er voor
zorg te dragen dat de situatie van inbreng in een spf of trust door een niet-ingezetene
en een daaropvolgende uitkering gedaan door een spf of trust aan een begunstigde
in Curaçao, niet nadeliger wordt belast dan een rechtstreekse schenking gedaan door
een niet-ingezetene aan een ingezetene, keur ik het volgende goed. Op het moment
dat een ingezetene voor Curaçaose belastingdoeleinden definitief gerechtigd wordt
tot het vermogen van een spf of trust waarvan het vermogen is ingebracht door een
niet-ingezetene, dan wel door overlijden of immigratie van deze niet-ingezetene indien
eerder, dient de op dat moment in het economisch verkeer geldende waarde van het
vermogen als prestatie te worden beschouwd.

_Immigratie_
Een buitenlander, welke gerechtigd is tot een uitkering uit een spf, die naar Curaçao
immigreert, wordt hierdoor voor Curaçaose inkomstenbelastingdoeleinden als bin-
nenlands belastingplichtige aangemerkt. Uitkeringen uit een spf of trust aan de im-
migrant worden door de immigratie fiscaal tot het inkomen gerekend. Zonder nadere
maatregelen worden ook de uitkeringen die in de buitenlandse periode zijn ‘opge-
bouwd’ alsnog in de heffing betrokken. Indien de spf of trust de uitkeringen vüür de
immigratie had laten plaatsvinden, dan zouden deze onbelast zijn in Curaçao.
Ter vermijding van het dwingen tot uitkeringen door de spf of trust in de buitenlandse
periode, keur ik goed dat over de uitkeringen tot het bedrag van de prestatie er geen
inkomstenbelasting wordt geheven. Op verzoek van de spf, trust of immigrant kan
de prestatie worden vastgesteld op de waarde van het vermogen van de spf of trust
zoals die bestond op de dag van immigratie. Voorwaarden hiervoor zijn:

_-_ de natuurlijke persoon heeft direct voorafgaand aan de immigratie gedurende een
aaneengesloten periode van tenminste vijf jaar in het buitenland gewoond;
_-_ de spf of trust of de natuurlijke persoon die is gerechtigd tot een belaste uitkering
verzoekt de Inspecteur de waarde van het vermogen van de spf of trust op de dag van
immigratie vast te stellen (‘step up’); en
_-_ de inbreng in de spf dient in de buitenlandse periode te hebben plaatsgevonden.
Indien de inbrenger korter dan 5 jaar in het buitenland heeft gewoond, kan een verzoek
worden gedaan aan de Directeur Fiscale Zaken. Het verzoek wordt alleen gehonoreerd
indien vaststaat dat er niet uitsluitend fiscale motieven een rol hebben gespeeld.

_Penshonadoregeling_
Voor de penshonadoregeling zijn in artikel 23E van de Landsverordening op de Inkom-
stenbelasting 1943 kwalificerende buitenlandse bronnen van inkomen bepaald. Peri-
odieke uitkeringen ten laste van een rechtspersoon die niet gevestigd is in Curaçao
kwalificeert hierbij als een buitenlandse bron. In de praktijk is hierbij de vraag gesteld
of een eenmalige uitkering van een rechtspersoon die niet gevestigd is in Curaçao
eveneens kwalificeert als een buitenlandse bron. Aangezien niet beoogd is om een
onderscheid te maken tussen eenmalige en periodieke uitkeringen, keur ik goed dat
indien een rechtspersoon die niet gevestigd is in Curaçao een eenmalige uitkering
doet, dit eveneens kwalificeert voor de penshonadoregeling.

_Uitkering met charitatief doel_
Indien een spf een uitkering doet vanwege een cultureel, wetenschappelijk of ander
algemeen nut beogend doel aan een natuurlijke persoon zal de belastbaarheid beoor-
deeld worden vanuit de geldende regels voor de inkomstenbelasting. Indien de be-
lastingheffing in individuele gevallen tot onbillijkheden van overwegende aard leidt,
zal de onderbouwde verzoeken in welwillende overweging nemen.

**Aanschrijving verduidelijking trust en spf 6**


'''
Optie fiscale transparantie
Voor binnenlandse belastingplichtigen kan er sprake zijn van het inbrengen van ver-
mogen om ander dan fiscale redenen. Een vaak genoemd argument is ‘asset protec-
tion’.
'''
'''
Indien een belastingplichtige het volledig belasten van de uitkering wil voorkomen
kan hij ervoor kiezen de spf of trust als fiscaal transparant aan te merken. Fiscale
transparantie betekent dat het vermogen van de spf of trust aan de insteller wordt
toegerekend en rechtstreeks bij hem belast wordt volgens de voor die inkomsten
geldende regels. Bij de verhuur van onroerend goed betekent dit dat slechts 65% van
de huuropbrengsten belast wordt en dat rente uit binnenlandse spaartegoeden belast
wordt tegen 6,5%.
'''
'''
Ingeval de spf of trust optreedt als holding wordt de dividenduitkering gedaan door
de vennootschap waarvan de aandelen worden gehouden belast tegen 19,5% inkom-
stenbelasting bij een aanmerkelijk belang. Bij transparantie blijven vermogenswinsten
op beleggingen buiten de heffing van de inkomstenbelasting indien deze tot het
vermogen van de natuurlijke persoon worden gerekend.
Aan de fiscale transparantie stel ik de volgende voorwaarden:
'''
_-_ als de natuurlijke persoon kiest voor fiscale transparantie geldt dit voor het volledig
vermogen en alle inkomsten van de spf of trust;
_-_ het vermogen wordt juridisch in de macht van de spf of trust gebracht. Een econo-
mische eigendomsoverdracht kwalificeert niet. De inbreng is vrijgesteld van de suc-
cessiebelasting indien vüür of uiterlijk ten tijde van de inbreng geopteerd wordt voor
transparantie. Indien aanspraak wordt gemaakt op de vrijstelling van overdrachtsbe-
lasting conform artikel 4 onderdeel d Overdrachtsbelastingverordening 1908 wordt
niet voldaan aan de voorwaarden en is derhalve geen sprake van transparantie;
_-_ de natuurlijke persoon voegt jaarlijks een kopie van de jaarrekening (balans en
verlies- en winstrekening) bij zijn aangifte inkomstenbelasting;
_-_ de inkomsten worden in de aangifte vermeld alsof deze door de natuurlijke persoon
rechtstreeks genoten zijn;
_-_ de keus is onherroepelijk.
_-_ spf’s die op 31 december 2011 reeds bestonden mogen uiterlijk tot zes maanden na
publicatie van deze aanschrijving kiezen voor transparantie.
Bij een bestaande spf dient de insteller bij keuze voor transparantie voor inkomsten-
belastingdoeleinden tot zijn inkomen te rekenen de vanaf dat moment door de spf
genoten inkomsten. De inkomsten worden geacht te zijn genoten in het jaar waarin
het verzoek wordt gedaan of de spf geacht wordt transparant te zijn tegen de voor
dat jaar geldende tarieven van de inkomstenbelasting.

'''
Misbruik
In de praktijk is de spf als ‘holding’ gebruikt in de veronderstelling dat de dividenden
dan wel de verkoopopbrengsten van de aandelen in de werkmaatschappij via een
eenmalige uitkering door de spf onbelast door de directeur-aandeelhouder genoten
kunnen worden. Indien een NV of BV als holding gebruikt was zouden de dividenden
of verkoopopbrengsten bij uitkering door de holding als inkomen aangemerkt zijn
en tegen 19,5% belast zijn ingeval van een aanmerkelijk belang. Indien spf’s die als
holding dienden niet discretionair bevoegd waren om over het vermogen en de uit-
keringen te beslissen, neem ik het standpunt in dat deze uitkeringen bij de aandeel-
houder belast dienen te worden.
In die gevallen dat de spf of trust niet discretionair was ingesteld of niet feitelijk dis-
cretionair was bevoegd om over het vermogen en de uitkeringen van een spf of trust
te beslissen, neemt de Inspecteur het standpunt in dat deze transparant was voor
Curaçaose belastingdoeleinden.
'''
**6 Aanschrijving verduidelijking trust en spf**


_Overgangsregeling_
Voor een spf of trust die voor 1 januari 2012 zowel formeel als feitelijk discretionair
bevoegd was om over het vermogen of uitkeringen van deze spf of trust te beslissen,
keur ik het volgende goed. Tot aan 1 januari 2012 was op basis van de wet een eenma-
lige uitkering door een spf of trust niet onderworpen aan inkomstenbelastingheffing
in Curaçao. Om de belastingplichtige een kans te bieden haar activiteiten te herstruc-
tureren voor situaties waarbij geen sprake was van misbruik, keur ik goed dat indien
een belastingplichtige opteert om een spf of trust als transparant aan te merken
binnen zes maanden na publicatie van deze aanschrijving met terugwerkende kracht
naar 1 januari 2012, zal de overgang naar transparantie worden geacht als een uitkering
plaats te vinden direct voorafgaand aan 1 januari 2012. Indien deze uitkering het ka-
rakter heeft van een eenmalige uitkering, zal deze niet worden onderworpen aan in-
komstenbelasting.

_Misbruik_
De Inspecteur behoudt zich het recht voor om in misbruiksituaties een beroep te doen
op het leerstuk van fraus legis.

Deze aanschrijving kan worden aangehaald als ‘Aanschrijving verduidelijking trust
en spf’.
Willemstad, 26 november 2014
De Minister van Financiën
J.M.N. Jardim

**Aanschrijving verduidelijking trust en spf 6**


### Aanschrijving ter uitvoering van de

### Landsverordening fiscale faciliteiten historische

### binnenstad en monumenten^1

'''
Artikel 2, tweede lid, onderdeel n, van de Algemene landsverordening Landsbelastin-
gen^2 bepaalt dat de binnenstad, het stadsgebied en het havengebied is dat door
United Nations Educational Scientific and Cultural Organization als historisch gebied
van Curacao zijn erkend en die bij landsbesluit, houdende algemene maatregelen,
aangewezen zijn als het historische gedeelte van Willemstad. Deze aanwijzing van
de binnenstad bij landsbesluit, houdende algemene maatregelen, is noodzakelijk
om uitvoering te kunnen geven aan de in de Landsverordening fiscale faciliteiten
historische binnenstad en monumenten, opgenomen fiscale faciliteiten.
'''
'''
Echter, het landsbesluit, houdende algemene maatregelen, tot aanwijzing van de
binnenstad is vanwege het langdurig wetgevingstraject nog niet tot stand gekomen.
Deze situatie komt mij ongewenst voor aangezien zonder aanwijzing van de binnen-
stad er geen uitvoering kan worden gegeven aan de in de Landsverordening fiscale
faciliteiten historische binnenstad en monumenten opgenomen faciliteiten, hetgeen
de rechtszekerheid niet ten goede komt.
'''
'''
Gelet op het voorgaande heb ik besloten om vooruitlopend op het vaststellen van de
binnenstad bij landsbesluit, houdende algemene maatregelen, goed te keuren dat
indien een onroerende zaak duidelijk binnen de grens van de binnenstad ligt, zoals
afgebakend op bijgevoegde kaart, dat daarop dan de Landsverordening fiscale facili-
teiten historische binnenstad en monumenten van toepassing is.
'''
'''
Deze aanschrijving wordt in de Curaçaosche Courant gepubliceerd en treedt in werking
met ingang van de dag na de datum van bekendmaking en werkt terug tot en met 1
januari 2017.
'''
'''
1 P.B. 2016, no. 78
2 P.B. 2013, no. 53, zoals laatstelijk gewijzigd bij P.B. 2016, no. 78
'''
**7 Aanschrijving uitv. Landsverordening fiscale faciliteiten binnenstad en monumenten**


**Aanschrijving uitv. Landsverordening fiscale faciliteiten binnenstad en monumenten 7** bijlage


### Beleidsregels betreffende de rechtsbescherming

### van belastingplichtigen tegen strafrechtelijke

### vervolging bij vrijwillige verbetering in de zin

### van de artikelen 26 en 26A van de Algemene

### landsverordening Landsbelastingen en bij

### samenloop tussen fiscale misdrijven en andere

### misdrijven in de zin van artikel 230 e.v. van het

### Wetboek van Strafrecht^1

'''
Op 7 oktober 2008 heeft de Hoge Raad (HR 7 oktober 2008, nr. 03511/06, LJN: BD2774)
een arrest gewezen in de sfeer van het strafrecht, waarin de Hoge Raad oordeelt dat
een fiscaal delict een misdrijf is dat in beginsel de grondslag kan zijn voor het strafbare
feit witwassen.
'''
'''
Ingevolge de artikelen 26, 26A en 49 van de Algemene landsverordening Landsbelas-
tingen (hierna: “ALL”) kan de belastingplichtige een vrijwillige verbetering/inkeer in-
dienen waardoor onder bepaalde voorwaarden aan strafvervolging zou kunnen
worden ontkomen. In de praktijk is de vraag gesteld of voornoemd arrest een vrijwillige
verbetering feitelijk buiten werking stelt. Immers, bij een vrijwillige verbetering kan
ingevolge artikel 49, lid 3, van de ALL niet tot vervolging wegens belastingfraude
worden overgegaan, echter het is onduidelijk of er onder die omstandigheden een
strafrechtelijke vervolging kan worden ingesteld wegens witwassen.
'''
'''
De Ministers zijn van mening dat de belastingplichtige dient te worden beschermd
tegen vervolging voor witwassen in het geval waarin de belastingplichtige zijn aangifte
vrijwillig verbetert in situaties waarbij sprake is van belastingontduiking door het
verzwijgen van legale inkomsten. Deze visie heeft eveneens als uitgangspunt gediend
bij de invoering van artikel 26A van de ALL als onderdeel van de Landsverordening
belastingvoorzieningen 2011. Indien de verzwegen inkomsten uit illegale bron afkom-
stig zijn,zal dit, conform het bepaalde in de Aanschrijving verduidelijking inkeerrege-
ling, aan het Openbare Ministerie worden gemeld.
'''
'''
Om te voorkomen dat belastingplichtigen die tijdig en op de juiste wijze inkeren toch
worden vervolgd, zullen de Ministers aan de Belastingdienst en het Openbaar Minis-
terie een aanwijzing geven om te handelen in de geest van artikel 49, lid 3, van de
ALL. Deze aanwijzing houdt het volgende in:
'''
_-_ Indien naar het oordeel van de Inspecteur der Belastingen, zo nodig in overleg met
het Openbaar Ministerie, sprake is van vrijwillige verbetering, zal het Openbaar Mi-
nisterie geen strafvervolging voor witwassen instellen. De Inspecteur der Belastingen
doet in deze gevallen dan ook geen melding bij het Openbaar Ministerie.
_-_ Het is aan de Inspecteur der Belastingen, zo nodig in overleg met het Openbaar
Ministerie, om per geval te bepalen of er sprake is van een vrijwillige verbetering in
de zin van artikel 26 of 26A van de ALL.
_-_ Als de Inspecteur der Belastingen bekend is met de vrijwillige verbetering door de
belastingplichtige en er sprake is van een juiste en tijdige vrijwillige verbetering, zal
de Stichting Belasting Accountants Bureau geen onderzoek starten, noch naar het
witwassen van verzwegen legale inkomsten noch naar belastingontduiking.

'''
1 06/12/11
'''
**8 Beleidsregels betreffende rechtsbescherming van belastingplichtigen...**


_-_ Een legale herkomst wordt aanwezig geacht indien er in samenhang met het ver-
zwijgen van inkomsten andere fiscale delicten in de zin van artikel 49, lid 1, van de
ALL zijn gepleegd, zoals het niet voeren van een administratie overeenkomstig de
gestelde eisen en het in valse of vervalste vorm ter beschikking stellen van gegevens-
dragers.
_-_ In gevallen waarin, na overleg met de Inspecteur der Belastingen, is vast komen te
staan dat er sprake is van een juiste en tijdige vrijwillige verbetering ter zake van
verzwegen legale inkomsten, zal het Openbaar Ministerie indien reeds een strafrech-
telijk onderzoek dan wel vervolging is ingesteld, afgezien van (verdere) vervolging
en de zaak ingevolge artikel 55 van de ALL in handen stellen van de Inspecteur der
Belastingen (door tussenkomst van de Directeur der Belastingen) ter administratief-
rechtelijke afdoening.

Voorts doet zich in het fiscale strafrecht vaak de situatie voor dat het feit ter zake
waarvan de belastingplichtige kan worden vervolgd zowel kwalificeert als een fiscaal
misdrijf in de zin van artikel 49, lid 1, van de ALL als het valselijk opmaken van geschrif-
ten in de zin van artikel 230 e.v. van het Wetboek van Strafrecht. Indien een dergelijke
samenloop zich voordoet, zal de belastingplichtige uitsluitend op grond van artikel
49, leden 1 en 2, van de ALL strafrechtelijk worden vervolgd.

**Beleidsregels betreffende rechtsbescherming van belastingplichtigen... 8**


### Brief van de Minister van Justitie en de Minister

### van Financiën: Verduidelijking verhouding

### tussen Beleidsregels van de Minister van Justitie

### en de Minister van Financiën de dato 6 december

### 2011 en de Instructie aan de Inspecteur der

### Belastingen en het Openbaar Ministerie in

### verband met de Beleidsnota inkeerregeling de

### dato 30 september 2011^1

'''
Geachte heer Piar en mevrouw Taylor,
In verband met de inwerkingtreding van de Landsverordening Belastingenvoorzie-
ningen 2011 en de daarin vervatte inkeerregeling hebben wij met dagtekening 06
december 2011 uitgevaardigd Beleidsregels betreffende de rechtsbescherming van
belastingplichtigen tegen strafrechtelijke vervolging bij vrijwillige verbetering in de
zin van de artikelen 26 en 26A van de Algemene landsverordening Landsbelastingen
en bij samenloop tussen fiscale misdrijven en andere misdrijven in de zin van artikel
230 e.v. van het Wetboek van Strafrecht (hierna: “beleidsregels”). Eveneens op 06
december 2011 heeft de Minster van Financiën de Aanschrijving verduidelijking in-
keerregeling uitgevaardigd (hierna: “aanschrijving”). Daarnaast hebben wij een in-
structie met dagtekening 21 december 2011 aan de Inspecteur der Belastingen en het
Openbaar Ministerie gegeven (hierna: “instructie”).
'''
'''
Ondanks het feit dat het een interne instructie betreft, heeft het publiek van deze
instructie kennis genomen. Dit heeft voor de nodige consternatie en verwarring bij
belastingplichtigen gezorgd. In verband hiermee hebben ons de volgende vragen
bereikt:
'''
_1._ Hoe verhouden de instructie en de beleidsregels zich tot elkaar?
_2._ Zijn de beleidsregels door het uitvaardigen van de instructie komen te vervallen?
_3._ Worden belastingplichtigen die gebruik maken van de inkeerregeling (artikel 26
en 26A van de Algemene landsverordening Landsbelastingen (“ABB”) voor inkomsten
die uit legale bronnen afkomstig zijn, door de werking van de instructie toch strafrech-
telijk vervolgd voor belastingfraude, witwassen en/of valsheid in geschrifte?

'''
Ter beantwoording van de bovenstaande vragen maken de Minister van Justitie en
de Minister van Financiën het volgende bekend. De instructie laat de beleidsregels
ongemoeid. De beleidsregels zijn dan ook niet komen te vervallen met het geven van
de instructie. De instructie heeft ten doel om de meldingsplicht van de Inspecteur
der Belastingen zoals verwoord in de aanschrijving te benadrukken in die gevallen
waar er een gerede vermoeden bestaat van een commuun strafbaar feit in de zin van
het Wetboek van Strafrecht. De strafbare feiten waarvoor de meldingsplicht geldt
zijn derhalve uitsluitend die strafbare feiten die direct voortvloeien uit het Wetboek
van Strafrecht. Er bestaat geen meldingsplicht voorzover er sprake is van (fiscale)
strafbare feiten in de zin van artikel 49 leden 1 en 2 ALL. Immers, over de wenselijkheid
van een eventuele vervolging van fiscale strafbare feiten beslist de Directeur der Be-
lastingen (artikel 55 lid 2 ALL). Het hiervoorgaande geldt eveneens met betrekking
tot de delicten witwassen en valsheid in geschrifte voorzover deze gebaseerd zijn of
direct samenhangen met fiscale strafbare feiten. In gevallen waarin naar oordeel van
'''
'''
1 12/01/2012
'''
**9 Verduidelijking verhouding tussen Beleidsregels van de Minister van Justitie...**


de Inspecteur der Belastingen tijdig en op de juiste wijze is ingekeerd, met andere
woorden dat een inkeer heeft plaatsgevonden geheel conform alle aan die inkeer
gestelde eisen, heeft de Inspecteur der Belastingen (rekening houdend met de rechtens
aan de Directeur der Belasting gegeven primaire beslissingsmonopolie ten aanzien
van een eventuele vervolging van fiscaal strafbare feiten) geen meldingsplicht, één
en ander zoals verwoord in het beleid.

Het Openbaar Ministerie behoudt te allen tijde haar bevoegdheid om bij vermoeden
van een (commuun) strafbaar feit welke voortvloeit uit het Wetboek van Strafrecht
of bijzondere regelgeving of hiermee direct samenhangt (hierbij gaat het om de de-
licten witwassen en valsheid in geschrifte gebaseerd op een commuun stafbaar feit),
op eigen initiatief strafvervolging conform het Wetboek van Strafvordering in te
stellen.

In dit verband wordt herhaald hetgeen in de beleidsregels al is vermeld. Indien de
inkomsten waarvoor gebruik wordt gemaakt van de inkeerregeling afkomstig zijn
uit legale bronnen (waaronder mede begrepen de fiscale delicten in de zin van de
ALL), zal er geen strafrechtelijke vervolging worden ingesteld wegens witwassen en
valsheid in geschrifte.

**Verduidelijking verhouding tussen Beleidsregels van de Minister van Justitie... 9**


### Aanschrijving inzake boetebeleid voor

### winstbelasting^1

'''
De Directeur der Belastingen maakt het volgende bekend.
Op 18 augustus 2001 is de Algemene landsverordening Landsbelastingen (ALL) (PB.
2001, no. 89) in werking getreden. In de ALL zijn de formele bepalingen met betrekking
tot de in artikel 1 van voornoemde landsverordening genoemde belastingen samen-
gebracht. Hierdoor wordt de eenvormige redactie voor de verschillende belastingver-
ordeningen hersteld, onder andere ten aanzien van administratieve sancties. In
Hoofdstuk III van voornoemde landsverordening zijn namelijk gelijkluidende bepa-
lingen inzake de administratieve boete opgenomen.
'''
'''
Om de eenvoud in de toepassing van het boetebeleid te bevorderen, is er voor gekozen
om de inwerkingtreding van de ministeriële beschikking met algemene werking van
de 21ste december 2001 (Ministeriële beschikking administratieve boeten) (PB. 2001,
no. 148) ter uitvoering van artikel 39, eerste lid, onderdeel a, van de ALL te stellen op
1 januari 2002 voor alle belastingen waarop de ALL van toepassing is.
'''
'''
Voor de winstbelasting geldt echter voor de jaren 1996 tot en met 2001 een van de
overige belastingen afwijkend boetesysteem. Vóór 1996 gold een boetebeleid dat
min of meer overeenkomt met het boetebeleid vanaf 2002. Voor de periode 1996-
2001 zijn de boeten veel hoger dan de perioden daarvoor en daarna.
'''
'''
Met het oog hierop keur ik goed, dat de ministeriële beschikking administratieve
boeten ook toegepast wordt op de naheffingsaanslagen winstbelasting die zijn opge-
legd op grond van artikel 23, vierde en vijfde lid (oud) van de Landsverordening op
de Winstbelasting 1940. De ministeriële beschikking administratieve boeten werkt
derhalve voor genoemde boeten terug tot en met 1 januari 1996. Onherroepelijk
vaststaande aanslagen worden op verzoek van de belastingplichtige ambtshalve
verminderd.
'''
'''
1 19-02-2002
'''
**10 Aanschrijving inzake boetebeleid voor winstbelasting van 19 februari 2002**


### Landsbesluit fiscale kasregistratiesystemen

**Landsbesluit, houdende algemene maatregelen, van de 18de september 2014, ter
uitvoering van artikel 44a, achtste lid, van de Algemene landsverordening
Landsbelastingen**^1 **(Landsbesluit fiscale kasregistratiesystemen)**

**Art. 1**
In deze regeling en de daarop berustende bepalingen wordt verstaan onder: **Definities**
_a._ controle-autoriteit: de Stichting Overheids Belastingaccountantsbureau;
_b._ fiscaal kasregistratiesysteem: een kassa met een geïntegreerde printer danwel de
combinatie van een kassa met een separate printer, voorzien van een fiscaal geheugen,
dat voldoet aan de op grond van artikel 3 bij ministeriële regeling met algemene
werking gestelde eisen;
_c._ kassa-identificatienummer: een door de controle-autoriteit aan een fiscaal kasre-
gistratiesysteem toegekend uniek registratienummer;
_d._^2 kasregistratieplichtige:
_1°._ de op basis van artikel 44a, eerste lid, onderdeel a, van de Algemene landsveror-
dening Landsbelastingen, bij ministeriële regeling met algemene werking aangewezen
administratieplichtige, die ter zake van zijn leveringen of diensten een kassabon dient
uit te reiken met gebruikmaking van een fiscaal kasregistratiesysteem;
_2°._ de op basis van artikel 44a, eerste lid, onderdeel b, van de Algemene landsveror-
dening Landsbelastingen, door de Inspecteur aangewezen administratieplichtige,
die ter zake van zijn leveringen of diensten een kassabon dient uit te reiken met ge-
bruikmaking van een fiscaal kasregistratiesysteem.
_e._ leverancier: de leverancier van fiscale kasregistratiesystemen;
_f._ gekwalificeerde installateur: een door de controle-autoriteit aangewezen installateur
van fiscale kasregistratiesystemen.

'''
Art. 2^3
'''
**1.** Een kassabon, als bedoeld in artikel 44a, van de Algemene landsverordening **Kasregistratieplicht**
Landsbelastingen, wordt middels een fiscaal kasregistratiesysteem uitgereikt.
**2.** Bij ministeriële regeling met algemene werking worden administratieplichtigen
aangewezen die ontheven zijn van de verplichting om een fiscaal kasregistratiesysteem
te gebruiken.^4
**3.** Bij ministeriële regeling met algemene werking worden voorwaarden gesteld,
waaronder de Inspecteur, op verzoek van een kasregistratieplichtige, bij voor bezwaar
vatbare beschikking, ontheffing kan verlenen van de verplichting om een fiscaal
kasregistratiesysteem te gebruiken.
**4.** Op degene die is ontheven van de verplichting om een fiscaal kasregistratiesysteem
te gebruiken, zijn de bepalingen als bedoeld artikel 44a, vierde lid, onderdelen b, c
en d, van de Algemene landsverordening Landsbelastingen niet van toepassing.

'''
Art. 3
Eisen kasregistratiesys-
teem
'''
Bij ministeriële regeling met algemene werking^5 wordt bepaald aan welke eisen een
fiscaal kasregistratiesysteem moet voldoen.

1 P.B. 2013-53
P.B. 2014-80
Zoals deze luidt na wijzigingen, het laatst bij P.B. 2016-24.
2 Gewijzigd bij P.B. 2016-24 met ingang van 01/08/16 conform P.B. 2016-37 jo. P.B. 2016-44.
3 De leden 1 en 2 zijn gewijzigd en de leden 3 en 4 zijn ingevoegd bij P.B. 2016-24 met ingang van 21/05/16.
4 Zie Ministeriële regeling fiscale kasregistratiesystemen (P.B. 2014-82), hierna opgenomen in de bundel.
5 Zie Ministeriële regeling fiscale kasregistratiesystemen (P.B. 2014-82), hierna opgenomen in de bundel.

**Landsbesluit fiscale kasregistratiesystemen 11** art. 3


**Art. 4
Toegelaten systemen 1.** Een fiscaal kasregistratiesysteem dat voldoet aan de op grond van artikel 3 gestelde
eisen, wordt op schriftelijk verzoek van een leverancier van dat fiscale kasregistratie-
systeem of dat van een administratieplichtige, door de controle-autoriteit toegelaten.

**2.** Door de controle-autoriteit wordt een procedure vastgesteld waarmee op objectieve
wijze kan worden beoordeeld of een fiscaal kasregistratiesysteem voldoet aan de op
grond van artikel 3 gestelde eisen.
**3.** Onverminderd het bepaalde in het eerste en tweede lid, kan de controle-autoriteit
zelfstandig een fiscaal kasregistratiesysteem dat voldoet aan de op grond van artikel
3 gestelde eisen, met inachtneming van het tweede lid toelaten, indien:
_a._ er geen verzoek wordt ingediend als bedoeld in het eerste lid;
_b._ er zich onder de toegelaten fiscale kasregistratiesystemen geen systemen bevinden
van een voldoende betaalbaar niveau;
_c._ er met betrekking tot fiscale kasregistratiesystemen die een relevant aandeel
hebben in het totale gebruik, geen verzoek wordt ingediend als bedoeld in het eerste
lid.
**4.** Door de controle-autoriteit kunnen, in verband met de verplichtingen op grond
van dit landsbesluit, voorwaarden en verplichtingen aan een toelating worden gesteld.
**5.** Een beslissing over het al dan niet toelaten van een fiscaal kasregistratiesysteem,
is een beschikking in de zin van artikel 3, eerste lid, van de Landsverordening adminis-
tratieve rechtspraak.
**6.** Op een toegelaten fiscaal kasregistratiesysteem wordt door of namens de controle-
autoriteit middels een sticker het kassa-identificatienummer aangebracht.
**7.** Een op een fiscaal kasregistratiesysteem aangebracht kassa-identificatienummer
mag niet worden verwijderd.

**Art. 5
Installateur 1.** Een fiscaal kasregistratiesysteem mag slechts door een voor dat systeem gekwali-
ficeerde installateur worden geïnstalleerd, gedeïnstalleerd, gewijzigd of gerepareerd.

**2.** Een gekwalificeerde installateur voldoet aan de door de controle-autoriteit vast
te stellen noodzakelijke eisen van vakbekwaamheid en integriteit voor het onafge-
broken deugdelijk functioneren van het fiscaal kasregistratiesysteem.
**3.** Aanwijzing van een gekwalificeerde installateur geschiedt door de controle-auto-
riteit waarbij voorwaarden en beperkingen kunnen worden gesteld.
**4.** Een beslissing over het al dan niet aanwijzen van een gekwalificeerde installateur,
is een beschikking in de zin van artikel 3, eerste lid, van de Landsverordening adminis-
tratieve rechtspraak.

**Art. 6
Overzichtsregister 1.** De controle-autoriteit draagt zorg voor het bijhouden en de publicatie van een
overzichtsregister, waarin toegelaten fiscale kasregistratiesystemen en gekwalificeerde
installateurs worden vermeld.

**2.** Op verzoek wordt door de controle-autoriteit kosteloos een afschrift van het
overzichtsregister verstrekt.
**3.** In het overzichtsregister worden ook de voorwaarden en verplichtingen die op
grond van artikel 4, vierde lid, aan een toelating worden gesteld, alsmede de eisen
van vakbekwaamheid en integriteit die op grond van artikel 5, tweede lid, aan een
installateur worden gesteld, opgenomen.
**4.** De procedure, bedoeld in artikel 4, tweede lid, waarmee beoordeeld kan worden
of een fiscaal kasregistratiesysteem aan de gestelde eisen voldoet, wordt door de
controle-autoriteit op verzoek verstrekt.

**Art. 7
Verzegeling 1.** Bij de installatie van een fiscaal kasregistratiesysteem wordt door de gekwalificeerde
installateur of een medewerker van de controle-autoriteit een door de controle-auto-
riteit verstrekt zegel aan het kasregistratiesysteem aangebracht. Het zegel is voorzien
van een uniek zegelnummer.

**11** art. 4 **Landsbesluit fiscale kasregistratiesystemen**


**2.** De kasregistratieplichtige is verplicht het fiscaal kasregistratiesysteem onafgebro-
ken verzegeld te laten. Indien een fiscaal kasregistratiesysteem niet langer verzegeld
is, voldoet het niet aan de eisen van het bij of krachtens dit landsbesluit bepaalde.

'''
Art. 8
'''
**1.** De kasregistratieplichtige gebruikt en onderhoudt het fiscale kasregistratiesysteem **Gebruik en onderhoud**
op zodanige wijze dat het fiscaal kasregistratiesysteem onafgebroken deugdelijk
functioneert. Een fiscaal kasregistratiesysteem functioneert deugdelijk indien alle
door de kasregistratieplichtige verrichte transacties volledig en op de juiste wijze in
het fiscaal kasregistratiesysteem worden opgeslagen, zodat de voor de heffing van
de belasting van belang zijnde gegevens hieruit duidelijk blijken.
**2.** Indien het fiscale kasregistratiesysteem op enig moment niet deugdelijk functio-
neert, is de kasregistratieplichtige verplicht om:
_a._ de datum en het tijdstip waarop het kasregistratiesysteem ophoudt deugdelijk te
functioneren, alsmede het kassa-identificatienummer, in zijn administratie vast te
leggen;
_b._ vanaf dat moment ter zake van zijn leveringen en diensten een door de controle-
autoriteit vastgesteld model kassabon uit te reiken;
_c._ bij een defect het fiscaal kasregistratiesysteem onverwijld te laten repareren door
een gekwalificeerde installateur.
**3.** Zodra het fiscaal kasregistratiesysteem weer deugdelijk functioneert, is de kasre-
gistratieplichtige verplicht de volgende gegevens in zijn administratie vast te leggen:
_a._ de datum en het tijdstip waarop het fiscaal kasregistratiesysteem weer deugdelijk
functioneert; en
_b._ indien een reparatie heeft plaatsgevonden, de naam, adres, Crib-nummer en het
door de Kamer van Koophandel toegekende registratienummer van de gekwalificeerde
installateur die de reparatie heeft uitgevoerd.

**Art. 9**
De kasregistratieplichtige die zijn onderneming dan wel een tot zijn onderneming **Melding overdracht**
behorend fiscaal kasregistratiesysteem overdraagt, maakt daarvan onverwijld
schriftelijk melding bij de controle-autoriteit. Op de melding plaatst de kasregistra-
tieplichtige de hierna genoemde gegevens:
_a._ naam of handelsnaam, adres, Crib-nummer en het door de Kamer van Koophandel
toegekende registratienummer van de kasregistratieplichtige;
_b._ naam of handelsnaam, adres, Crib-nummer en het door de Kamer van Koophandel
toegekende registratienummer van degene aan wie de onderneming of het fiscaal
kasregistratiesysteem is overgedragen;
_c._ het kassa-identificatienummer en het nummer van het aangebrachte zegel van
het fiscale kasregistratiesysteem dat wordt overgedragen; en
_e._^6 datum van de overdracht van de onderneming of het fiscaal kasregistratiesysteem.
Indien ter zake van de overdracht een deïnstallatie of wijziging van het fiscaal kasre-
gistratiesysteem heeft plaatsgevonden, wordt daarnaast de naam of handelsnaam,
het adres, het Crib-nummer en het door de Kamer van Koophandel toegekende regis-
tratienummer van de gekwalificeerde installateur vermeld.

**Art. 10**
Het niet voldoen aan een verplichting als bedoeld in artikel 4, zevende lid, artikel 5, **Strafbaar feit**
eerste lid, artikel 8, tweede lid, onderdelen a en c, en derde lid, en artikel 9, is een
strafbaar feit.

**Art. 11**
Dit landsbesluit treedt in werking met ingang van 1 oktober 2014. **Inwerkingtreding**

6 De bewerker vermoedt dat hier “d.” is bedoeld.

**Landsbesluit fiscale kasregistratiesystemen 11** art. 11


**Art. 12
Intrekking** Het Landsbesluit kasregistratiesystemen^7 wordt ingetrokken.

**Art. 13
Citeertitel** Dit landsbesluit wordt aangehaald als: Landsbesluit fiscale kasregistratiesystemen.

'''
7 P.B. 2012-69.
'''
**11** art. 12 **Landsbesluit fiscale kasregistratiesystemen**


'''
Nota van toelichting behorende bij het Landsbesluit fiscale
kasregistratiesystemen
'''
_Inleiding_
Met ingang van 1 november 2012 is het Landsbesluit kasregistratiesystemen in werking
getreden. Op grond van dit landsbesluit konden in de periode november 2012 tot en
met december 2013 individuele administratieplichtigen worden aangewezen, die ter
zake van hun leveringen en diensten een kassabon middels een fiscaal kasregistratie-
systeem dienden uit te reiken. Met ingang van 1 januari 2014 geldt op grond van artikel
44a van de Algemene landsverordening Landsbelastingen (hierna: ALL) de algemene
verplichting om een kassabon via een fiscaal kasregistratiesysteem uit te reiken voor
aangewezen groepen administratieplichtigen. Bij aanschrijving van 20 december
2013 is door de Minister van Financiën echter goedgekeurd, dat de verplichting om
een fiscaal kasregistratiesysteem te gebruiken eerst per 1 augustus 2014 effectief van
kracht zal zijn.
Bij de Landsverordening tot aanpassing van de omzetbelasting, het formele belas-
tingrecht en aanverwante belastinglandsverordeningen^8 zijn onder andere in de ALL
wijzigingen aangebracht. Een aantal van deze wijzigingen hebben directe gevolgen
voor het Landsbesluit kasregistratiesystemen en de verplichting om een fiscaal kasre-
gistratiesysteem te gebruiken. In de eerste plaats wordt de groep administratieplich-
tigen, die ter zake van hun leveringen of diensten een kassabon dienen uit te reiken,
thans in een ander artikel geregeld. Als gevolg hiervan kloppen de verwijzingen naar
deze groep in het Landsbesluit kasregistratiesystemen niet langer en dient het
landsbesluit op dit punt te worden aangepast. In de tweede plaats was de verplichting
om een fiscaal kasregistratiesysteem te gebruiken, gebaseerd op artikel 43 van de
ALL. In dit artikel is de administratieplicht geregeld. De reden om het gebruik van een
fiscaal kasregistratiesysteem aan dit artikel te koppelen, was gelegen in de wens om
individuele administratieplichtigen, die niet aan hun administratieplicht voldeden,
reeds eerder tot het gebruik van een fiscaal kasregistratiesysteem te verplichten. Met
de algemene verplichting voor de op grond van artikel 44a, eerste lid, van de ALL, bij
ministeriële regeling aangewezen groepen administratieplichtigen om per 1 januari
2014 een fiscaal kasregistratiesysteem te gebruiken, is het verband met het niet vol-
doen aan de wettelijke administratieplicht feitelijk komen te vervallen. Een aansluiting
bij de verplichting van artikel 44a van de ALL, om ter zake van bepaalde leveringen
en diensten een kassabon uit te reiken, ligt thans veel meer voor de hand. Bij de wij-
zigingen van de ALL is hier ook rekening mee gehouden, door in artikel 44a de moge-
lijkheid op te nemen om bij landsbesluit, houdende algemene maatregelen nadere
regels te stellen. Ook in dit verband is het derhalve wenselijk om het huidige Lands-
besluit kasregistratiesystemen aan te passen.
Verder is nog van belang, dat, zoals reeds eerder opgemerkt, met ingang van 1 januari
2014 een algemene verplichting tot het gebruik van een fiscaal kasregistratiesysteem
geldt. De mogelijkheid om individuele administratieplichtigen tot het gebruik aan
te wijzen, is niet langer noodzakelijk en inmiddels ook vervallen. Het Landsbesluit
kasregistratiesystemen voorzag hier in artikel 7, tweede lid, ook reeds in. Nu het
landsbesluit, gelet op de hiervoor genoemde aanpassingen in de ALL, toch dient te
worden aangepast, kunnen de reeds vervallen bepalingen ook uit de tekst van het
landsbesluit worden geschrapt. Tot slot zijn er, zowel vanuit leveranciers als de kas-
registratieplichtigen, een aantal onduidelijkheden over de toelatingsprocedure naar
voren gebracht. Bij de aanpassing van het landsbesluit is deze procedure dan ook
gedetailleerder beschreven. De door het bedrijfsleven naar voren gebrachte praktische
bezwaren tegen een onverkorte toepassing van de huidige regeling, zijn voornamelijk
middels een aanpassing van de Ministeriële regeling formeel belastingrecht^9 en een

8 P.B. 2013-50.
9 P.B. 2013-63.

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
nieuwe ministeriële regeling met algemene werking, ter vervanging van de Ministe-
riële regeling kasregistratiesystemen^10 , opgelost.
De hiervoor genoemde noodzakelijke aanpassingen hebben tot gevolg, dat het
Landsbesluit kasregistratiesystemen grondig dient te worden herzien. Om deze reden
is er voor gekozen om het huidige landsbesluit niet te wijzigen, maar een nieuw
landsbesluit op te stellen. De uitgangspunten van dit nieuwe landsbesluit zijn echter
gelijk aan die van het Landsbesluit kasregistratiesystemen. De aanpassingen als gevolg
van de wijzigingen in de ALL en het vervallen van de mogelijkheid om individuele
administratieplichtigen tot het gebruik van een fiscaal kasregistratiesysteem te ver-
plichten, hebben geen inhoudelijke wijzigingen van de regeling tot gevolg. Feitelijk
geldt dit ook voor de procedure om tot toelating van een fiscaal kasregistratiesysteem
te komen. De betreffende aanpassingen beogen deze procedure slechts inzichtelijker
te maken; van een inhoudelijke wijziging is geen sprake. Slechts de aanpassingen om
de praktische bezwaren vanuit het bedrijfsleven weg te nemen, betreffen inhoudelijke
wijzigingen. Deze aanpassingen betreffen echter vooral wijzigingen in de hiervoor
genoemde ministeriële regelingen en niet zozeer aanpassingen in dit landsbesluit.
Om praktische redenen is er voor gekozen om de toelichting op het Landsbesluit
kasregistratiesystemen zo veel mogelijk in deze toelichting op te nemen en daar waar
noodzakelijk aan te passen en aan te vullen. Uiteraard is de toelichting ten aanzien
van vervallen bepalingen niet opgenomen en worden de nieuwe bepalingen toegelicht.
Voor een juist begrip van de gehele regeling is het echter wenselijk om niet alleen de
wijzigingen te beschrijven, maar ook hetgeen al eerder over de verplichting om een
fiscaal kasregistratiesysteem te gebruiken is geschreven op te nemen.
'''
'''
Algemeen
Artikel 44a, achtste lid, van de ALL bepaalt dat bij landsbesluit, houdende algemene
maatregelen, nadere regels kunnen worden gesteld ter uitvoering van de verplichting
om een kassabon uit te reiken. Op grond van het eerste lid van dat artikel kunnen
groepen administratieplichtigen worden aangewezen, die ter zake van hun leveringen
en diensten een kassabon dienen uit te reiken. Bij ministeriële regeling zijn admini-
stratieplichtigen aangewezen wiens activiteiten bestaan uit a) het verstrekken van
spijzen en dranken, b) de verkoop van consumentenartikelen (met uitzondering van
motorrijtuigen en vaartuigen), c) de reparatie van consumentenartikelen (met uitzon-
dering van motorrijtuigen en vaartuigen) en d) persoonlijke dienstverlening. Het
kenmerkende van deze groepen administratieplichtigen is dat het gebruikelijk is dat
zij ter zake van hun leveringen en diensten een kassabon uitreiken en vaak contante
betalingen ontvangen. Tijdens boekenonderzoeken is bovendien gebleken, dat een
aanzienlijk aantal van de betreffende administratieplichtigen hun wettelijke fiscale
verplichtingen niet, onvoldoende of op een onjuiste wijze nakomen. Om ook deze
groep administratieplichten hun fiscale verplichtingen volledig en op de juiste wijze
te laten nakomen, heeft de regering ervoor gekozen om een verplichting tot het ge-
bruik van een fiscaal kasregistratiesysteem in te voeren.
De controle van de volledigheid van de omzet bij ondernemingen op Curaçao vormt
één van de belangrijkste activiteiten van het controleapparaat van de Stichting
Overheids Belastingaccountantsbureau (de controle-autoriteit). Op deze manier kan
de aangegeven belasting worden getoetst aan de daadwerkelijk verschuldigde belas-
ting; niet alleen voor zover het de omzetbelasting betreft, maar ook ten aanzien van
de winst- of inkomstenbelasting. Een belangrijk instrument bij de vastlegging van
de omzet is de kasregistratie. De registratie van de omzet kan op verschillende manie-
ren plaatsvinden. Die registratie kan handmatig, mechanisch of geautomatiseerd
zijn. Bij het onderhavige landsbesluit wordt een fiscaal kasregistratiesysteem geïn-
troduceerd dat in beginsel voor alle kasregistratieplichtigen zal gaan gelden. Dit betreft
de administratieplichtigen die verplicht zijn om ter zake van hun leveringen en
diensten een kassabon uit te reiken.
'''
'''
10 P.B. 2012-70.
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


Het is de bedoeling dat kasregistratieplichtigen verplicht gebruik gaan maken van
een dergelijk fiscaal kasregistratiesysteem. Het doel van dit systeem is een betere
vastlegging van de volledigheid van de omzet, hetgeen moet leiden tot efficiëntere
en effectievere uitvoering van boekenonderzoeken. De invoering van deze verplichting
moet het (bewust dan wel onbewust) onvolledig aangeven van de behaalde omzet
tegengaan en zal naar verwachting een positief resultaat hebben op de belastingop-
brengsten.
Een fiscaal kasregistratiesysteem moet bonnen kunnen uitprinten waarvan de inhoud
ook in een digitale verzegelde database (chip) in het kasregistratiesysteem wordt
vastgelegd. Op deze wijze wordt de volledige geregistreerde omzet op de chip in het
kasregistratiesysteem vastgelegd. Het belang van de printer is hierin gelegen dat iedere
kasregistratieplichtige een bon aan de klant afgeeft. De bon kan dus voor controle-
doeleinden worden gebruikt. Het voornaamste doel van de verplichte kasregistratie
is echter - zoals hiervoor reeds is opgemerkt - een betere en volledige vastlegging van
de omzet, hetgeen moet leiden tot efficiëntere en effectievere uitvoering van boeken-
onderzoeken.
Bij ministeriële regeling met algemene werking wordt bepaald aan welke eisen een
fiscaal kasregistratiesysteem moet voldoen. Kasregistratiesystemen die voldoen aan
die eisen worden door de controle-autoriteit toegelaten. De toelating wordt schriftelijk
vastgelegd door de controle-autoriteit. De leverancier van fiscale kasregistratiesyste-
men kan vervolgens een dergelijk toegelaten fiscaal kasregistratiesysteem bestellen.
Door middel van het tonen van de aankoopfactuur, zijnde de zogenaamde “Bill of
Lading” van de invoer van de fiscale kasregistratiesystemen door de leverancier, ont-
vangt deze van de controle-autoriteit een sticker met daarop een kassa-identificatie-
nummer. De leverancier brengt deze sticker aan op het fiscale kasregistratiesysteem.
Vervolgens zal het fiscale kasregistratiesysteem door een gekwalificeerde installateur
bij de kasregistratieplichtige worden geïnstalleerd en verzegeld. Indien een kasregi-
stratieplichtige reeds over een fiscaal kasregistratiesysteem beschikt dat aan de ge-
stelde eisen voldoet, wordt de sticker met het kassa-identificatienummer door de
controle-autoriteit aangebracht.

_Financiële paragraaf_
In het project "kasregistratiesystemen" is een totaal bedrag van NAf 11,5 miljoen ge-
ïnvesteerd. Dit bedrag is toereikend geweest. De uitvoering van de kasregistratie is
gereed voor de start per 1 oktober 2014. Met het budget van Naf. 11,5 mln. zijn de
volgende deelprojecten bekostigd:

- Implementatie (project management, bijstand wetgeving en procedures, technische
ondersteuning, zoals het aanpassen van IT-systemen van de Inspectie, Ontvanger en
Stichting Overheids Belastingaccountantsbureau, consultancy en arbeidskosten);
- Reclame / publiciteit en voorlichting (media, karnaval, drukwerk, vervoerskosten,
diversen, etc.);
- Aanschaf fiscale kasregistratiesystemen (1400 kassa’s en 600 printers) en
- Uitvoering (servicekosten, extra uitgaven voor hardware, communicatie, bijstand,
etc.).
Na de invoeringsdatum zullen de kosten bestaan uit het houden van reguliere contro-
les. Deze passen binnen de jaarlijkse reguliere subsidie die aan de Stichting Belastings-
AccountansBureau (BAB) wordt verstrekt.
De invoering van een verplicht fiscaal kasregistratiesysteem zal een positieve invloed
op de belastingopbrengsten hebben. In het kader van het project “kasregistratiesys-
temen” zijn waarnemingen ter plaatse ingesteld binnen het segment toko’s en mini-
markets. Op grond van de bevindingen tijdens deze waarnemingen ter plaatse is ge-
bleken, dat circa 60% van de omzet fiscaal niet wordt verantwoord. Op grond van
een analyse van deze informatie, kan de conclusie worden getrokken dat binnen dit
segment jaarlijks NAf 5,1 miljoen aan omzetbelasting niet wordt verantwoord. Op
grond van de bekende brutowinstmarges kan hier aan worden toegevoegd, dat ook
aan inkomsten- en winstbelasting jaarlijks circa NAf 5,0 miljoen wordt verzwegen.
In totaal derhalve een jaarlijkse derving van ruim NAf 10,0 miljoen, alleen al binnen

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
het segment toko’s en minimarkets. Voor de overige sectoren, voor wie eveneens een
algemene verplichting tot gebruik van een fiscaal kasregistratiesysteem zal gelden,
heeft tot op heden geen specifiek onderzoek naar de derving van belastingopbrengsten
plaatsgevonden. Op grond van algemene controlegegevens is een derving van circa
10% binnen deze segmenten zeer reëel. Uitgaande van de bekende omzetgegevens,
is een schatting van de derving binnen deze segmenten van tussen de NAf 5,0 en NAf
10,0 miljoen per jaar behoudend. Als gevolg van het invoeren van een verplichting
tot het gebruik van fiscale kasregistratiesystemen, zullen de verantwoorde belasting-
opbrengsten toenemen. Het gaat daarbij om de opbrengsten van zowel de omzetbe-
lasting, als de inkomsten- en winstbelasting. Door de uitgestelde invoering van de
algemene verplichting om een fiscaal kasregistratiesysteem te gebruiken, zullen de
belastingopbrengsten vertraagd toenemen. Na de invoering is echter een jaarlijkse
meeropbrengst van circa NAf 15,0 miljoen te verwachten. De fiscale kasregistratiesys-
temen, gecombineerd met gerichte controles, blijvend voor een jaarlijkse meerop-
brengst van belastinginkomsten zullen zorgen.
'''
'''
Eerdere adviezen Raad van Advies en Sociaal Economische Raad
In de adviezen van de Raad van Advies (hierna: RvA) van 19 mei 2011, no. RA/16-11-LV,
en de Sociaal Economische Raad (hierna: SER) van 20 april 2011, no. 076/2011-SERCUR,
inzake de ontwerp-Landsverordening belastingvoorzieningen 2011, zijn met betrekking
tot artikel 43, tiende lid, van de ALL, vooruitlopend op het Landsbesluit kasregistratie-
systemen reeds enkele opmerkingen geplaatst.
De RvA heeft in zijn advies opgemerkt dat bij de keuze voor een bepaalde regeling
ernaar gestreefd moet worden de lasten voor burgers, bedrijven en instellingen zoveel
mogelijk te beperken. Daarbij heeft hij voorts opgemerkt dat het verplicht stellen
van een fiscaal kasregistratiesysteem kosten met zich brengt die in het bijzonder het
midden- en kleinbedrijf zullen treffen.
De SER heeft in zijn advies gesteld dat de invoering van het verplicht gebruik van een
fiscaal kasregistratiesysteem, in het bijzonder voor een kleine ondernemer/eenmans-
zaak, leidt tot een grotere bureaucratische last en hogere kosten als gevolg van de
aanschaf en het onderhoud van het verplicht aan te schaffen fiscaal kasregistratiesys-
teem.
In dit verband is door de regering het volgende naar voren te worden gebracht. De
invoering van het verplicht gebruik van een fiscaal kasregistratiesysteem is een nieuwe
administratieve verplichting. Aan een extra administratieve last kan dan ook niet
geheel worden ontkomen. Dit is inherent aan het invoeren van een aanvullende ad-
ministratieve verplichting. Deze last zal overigens tot een minimum beperkt blijven.
Bij het op de juiste wijze hanteren van het fiscaal kasregistratiesysteem worden de
voor de heffing van de belasting relevante gegevens immers allen opgeslagen in de
(chip van de) verplicht gestelde printer. Die gegevens kunnen zeer eenvoudig "uitge-
lezen" worden. De extra administratieve last zal wat dat betreft dus beperkt zijn.
Voorts streeft de regering ernaar de aanschafkosten van een fiscaal kasregistratiesys-
teem tot een minimum te beperken. Door de controle-autoriteit zijn inmiddels kos-
teloos fiscale kasregistratiesystemen ter beschikking gesteld. Getracht is om de fiscale
kasregistratiesystemen zo veel mogelijk bij administratieplichtigen te plaatsen voor
wie de financiële last op dit moment te zwaar is. Ter zake van de aanschaf van een
fiscaal kasregistratiesysteem kan een administratieplichtige uiteraard gebruik maken
van de bestaande mogelijkheden tot investeringsaftrek en afschrijving.
De SER heeft in voornoemd advies tevens gesteld dat ook elektronische kasregistra-
tiesystemen niet garanderen dat de volledige omzet van de ondernemer wordt aan-
gegeven. Daarvan is de regering zich terdege bewust. Met het invoeren van een fiscaal
kasregistratiesysteem wordt ook niet een absoluut sluitend systeem nagestreefd.
Het voornaamste doel is dat met behulp van dit systeem de volledigheid van de omzet
beter wordt vastgelegd. Daardoor moet de Stichting Overheids Belastingaccountants-
bureau haar onderzoeken efficiënter en effectiever kunnen uitvoeren. Dit heeft tot
gevolg dat meer belastingopbrengsten zullen worden gegenereerd. Dat bij de invoe-
ring van een nieuw verplicht gesteld fiscaal kasregistratiesysteem alsnog omzet buiten
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


de boeken wordt gehouden, kan uiteraard niet worden uitgesloten. Enkele jaren ge-
leden is in de Dominicaanse Republiek een vergelijkbaar fiscaal kasregistratiesystemen
ingevoerd. Aldaar stemmen de behaalde resultaten tot grote tevredenheid^11.
In het advies van de SER wordt tenslotte opgemerkt dat in Nederland is geconstateerd
dat door middel van bepaalde afroommodules omzet voor de belastingdienst verbor-
gen kan worden gehouden. Met die handelwijze is de regering bekend. In Nederland
worden overigens geen fiscale kasregistratiesystemen gebruikt. Met de verzegeling
van het kasregistratiesysteem wordt de manipulatie van de chip geminimaliseerd.
Manipulatie zal echter vermoedelijk niet helemaal voorkomen kunnen worden.
Daarmee zal bij de controle op de kasregistratiesystemen rekening worden gehouden,
mogelijk door de inzet van specialisten op dat gebied.
Op 13 juli 2012 heeft de RvA de regering inzake het Landsbesluit kasregistratiesystemen
van advies voorzien (RvA no. RA/19-12-LB). Bij de inhoudelijke opmerkingen adviseerde
de RvA op pagina 3, onder punt 4, om het begrip “administratieplichtige” in artikel 1
te omschrijven als een ondernemer als bedoeld in artikel 44, zesde lid, (thans artikel
44a, eerste lid) van de ALL. De regering heeft besloten om dit advies van de RvA niet
over te nemen, omdat het gebruik van het begrip “ondernemer” in artikel 44 van de
ALL op een omissie berust. Artikel 44 van de ALL is bij de invoering van de ALL overge-
nomen uit de Landsverordening omzetbelasting 1999^12. Daarbij is ten onrechte het
omzetbelastingbegrip “ondernemer” niet vervangen door het in de ALL gehanteerde
begrip “administratieplichtige”. Deze omissie zal bij een toekomstige wijziging van
de ALL worden gecorrigeerd. Vooruitlopend hierop acht de regering het hanteren van
het begrip “ondernemer” in dit landsbesluit niet wenselijk. Desondanks deelt de re-
gering wel de mening van de RvA dat de toegankelijkheid van het landsbesluit is ge-
baat bij een uniform begrip voor de doelgroep. Om deze reden heeft de regering het
begrip “kasregistratieplichtige” geïntroduceerd en in artikel 1 gedefinieerd. Bij de
Landsverordening tot aanpassing van de omzetbelasting, het formele belastingrecht
en aanverwante belastinglandsverordeningen is de terminologie in de artikelen 44
en 44a van de ALL conform het bovenstaande voornemen aangepast.
De SER heeft de regering op 17 september 2012 inzake het Landsbesluit kasregistra-
tiesystemen van advies voorzien (Ref.nr.: 186/2012-SER). In zijn advies vroeg de SER
in het bijzonder aandacht voor de mogelijkheden om de aanschaf van fiscale kasregi-
stratiesystemen (fiscaal) te faciliteren, dan wel om alle kasregistratieplichtigen kos-
teloos een fiscaal kasregistratiesyteem ter beschikking te stellen. De regering merkte
naar aanleiding daarvan op, dat het kosteloos ter beschikking stellen van een fiscaal
kasregistratiesysteem aan alle kasregistratieplichtigen niet aan de orde is. Niet alleen
zijn de financiële middelen hiervoor ontoereikend, het betreft bovendien een admi-
nistratieve verplichting die in beginsel voor rekening van de administratieplichtige
komt. In verband met het feit dat specifieke administratieplichtigen in de periode
november 2012 tot en met december 2013 aangewezen konden worden om al een
fiscaal kasregistratiesysteem te gebruiken en gelet op de financiële positie van deze
aangewezen administratieplichtigen, heeft de regering besloten om deze administra-
tieplichtigen tegemoet te komen door een basismodel fiscaal kasregistratiesysteem
ter beschikking te stellen. Voor wat betreft de administratieplichtigen die thans ver-
plicht gebruik dienen te maken van een fiscaal kasregistratiesysteem, is de regering
van mening dat deze administratieplichtigen voldoende tijd hebben gehad om zich
op de verplichting om een fiscaal kasregistratiesysteem te gebruiken hebben kunnen
voorbereiden. Dit geldt ook voor de financiële investeringen die hiermee verband
houden. Daarnaast beschikt een groot aantal administratieplichtigen die nu pas een
fiscaal kasregistratiesysteem hoeven te gebruiken, thans al over een kassasysteem
dat aan de gestelde voorwaarden voldoet. Voor deze administratieplichtigen is de
investering derhalve beperkt tot de aanschaf van een fiscale printer, waarvoor de
aanschafkosten relatief gering zijn. In dit verband wijst de regering bovendien op de
reeds bestaande mogelijkheden om de aanschaf van fiscale kasregistratiesystemen

11 Bron: Impresoras Fiscales: La experiencia Dominicana, DGII, Dominican Republic, 2011.
12 P.B. 2013-53.

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
fiscaal te faciliteren. Het gaat dan om de bestaande mogelijkheid om de kosten van
aanschaf middels afschrijvingen en de investeringsaftrek ten laste van het bedrijfsre-
sultaat te brengen. Binnen het budget is, conform het verzoek van de SER, wel gekeken
naar de mogelijkheid om gedurende een beperkte periode aan startende ondernemers
en ondernemers die de investering niet (geheel) kunnen opbrengen een basismodel
ter beschikking te stellen. De regering hecht er echter aan om te benadrukken, dat
de aanschaf van een fiscaal kasregistratiesysteem uiteindelijk de verantwoordelijkheid
van de ondernemer is en tot zijn reguliere bedrijfskosten behoort.
Adviezen Raad van Advies en Sociaal Economische Raad op het onderhavige besluit
Op 20 juni 2014 heeft de SER advies uitgebracht inzake het onderhavige landsbesluit
(Ref.nr.: 094/2014-SER). Het advies van de SER is voor de regering aanleiding geweest
om het ontwerp, de Nota van toelichting en de concept-ministeriële regelingen formeel
belastingrecht en fiscale kasregistratiesystemen aan te passen. Voor zover noodzakelijk
zal hierna nog op het door de SER uitgebrachte advies worden gereageerd.
In zijn advies wordt door de SER in de eerste plaats gewezen op de de (on)volledigheid
van het adviesverzoek. Daar is nota van genomen.
De SER wijst voorts op de complexiteit van de wetgeving op het gebied van de fiscale
kasregistratiesystemen. Door de regering wordt deze complexiteit eveneens onder-
kend, maar tevens wordt opgemerkt dat deze complexiteit wordt veroorzaakt door
de (maatschappelijke) wens, mede ook door de SER geuit, om uitzonderingen op het
verplicht gebruik van een fiscaal kasregistratiesysteem te introduceren. De introductie
van uitzonderingen leidt per definitie echter tot complexere wetgeving. In dit geval
acht de regering deze complexiteit echter te rechtvaardigen, met name vanwege het
feit dat de thans voorgestelde regelgeving beter aansluit bij de dagelijkse praktijk in
Curaçao. Met de SER is de regering het eens, dat een goede voorlichting over de inhoud
en strekking van de regelgeving noodzakelijk is.
De door de SER naar voren gebrachte opvatting, dat de voorgestelde regeling door
de vele uitzonderingen meer mogelijkheden biedt tot het ontwijken van (omzet)be-
lasting, wordt door de regering niet onderschreven. Juist door het bieden van maat-
werk op het gebied van de kassabonvereisten voor de diverse groepen administratie-
plichtigen die de Curaçaose samenleving rijk is, wordt de mogelijkheid tot het ontwij-
ken van belasting beperkt. Het verplicht stellen van het gebruik van een fiscaal kasre-
gistratiesysteem aan groepen administratieplichtigen die hier vanuit de aard van hun
activiteiten niet aan kunnen voldoen, werkt juist contraproductief. Door aan deze
groepen administratieplichtigen andere eisen met betrekking tot de kassabonver-
plichtingen te stellen, is een betere controle – zowel door de overheid als door de
burger – mogelijk.
Naar aanleiding van de opmerkingen van de SER ten aaanzien van de taxichauffeurs,
de verkoop en reparatie van motorrijtuigen en boten en de ambulante handel zijn
de Ministeriële regeling fiscale kasregistratiesystemen en de Ministeriële regeling
formeel belastingrecht aangepast.
De regering is het met de SER eens dat inspanningen moeten worden geleverd tot
verbetering van het nalevingsgedrag van belastingplichtigen in wat wordt genoemd
de informele sector. Het verbeteren van de belastingmoraal en het tegengaan van
belastingontwijking blijft voor de regering een speerpunt op fiscaal gebied.
Met betrekking tot de bevoegdheid om een beschikking in de zin van artikel 4 (toela-
ting fiscaal kasregistratiesysteem) en artikel 5 (aanwijzing gekwalificeerde installateur)
af te geven, merkt de SER op dat onduidelijk is aan wie deze bevoegdheid toekomt.
Voor wat betreft artikel 5 is de regering dit met de SER eens. Om deze reden is de tekst
van artikel 5 aangepast, zodat duidelijk is dat de aanwijzing door de controle-autoriteit
plaatsvindt. Een aanpassing van artikel 4 is naar de mening van de regering echter
niet noodzakelijk, aangezien in het eerste lid al expliciet is bepaald dat de toelating
door de controle-autoriteit geschiedt.
Naar aanleiding van de opmerkingen van de SER met betrekking tot de financiele
paragraaf is in die paragraaf in aanvulling op de verwachting dat de op de begroting
gereserveerde middelen toereikend zullen zijn, ook tot uitdrukking gebracht dat die
toereikendheid (vanzelfsprekend) tussentijds zal worden getoetst.
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


In de Nota van toelichting wordt uitgebreid ingegaan op de strafbaarstelling, waarbij
het onderscheid tussen overtredingen en misdrijven wordt besproken. De SER is van
mening dat dit onderscheid niet in de Nota van toelichting moet worden gemaakt,
maar dat de wettelijke bepaling hierin duidelijk moet zijn. De regering constateert
dat hier sprake van een misverstand moet zijn. Het wettelijke kader biedt middels
artikel 52 van de ALL de mogelijkheid om bepaalde overtredingen bij landsbesluit
vast te stellen. In artikel 10 is van deze mogelijkheid gebruik gemaakt. Niet-nakoming
van de in artikel 10 genoemde verplichtingen kwalificeert als een overtreding. Daar-
naast kwalificeert het niet voldoen aan een aantal andere in het landsbesluit opgeno-
men verplichtingen als een misdrijf. Die laatstbedoelde strafbaarstelling is echter
niet in (artikel 10 van) het landsbesluit geregeld, maar in artikel 49, eerste lid, onder-
deel j, van de ALL. In de Nota van toelichting wordt bij de toelichting op artikel 10
volledigheidshalve ook ingegaan op die strafbaarstelling als misdrijf.
De regering ziet op dit moment geen reden om voor de inwerkingtreding een andere
datum dan 1 oktober 2014 te kiezen. Met de voorbereidingen voor de implementatie,
zoals het ontwikkelen, drukken en verspreiden van de vereiste documenten, is reeds
een begin gemaakt. Er is ook een uitgebreide informatie- en voorlichtingscampagne
opgezet. De diverse belangengorganisatie zijn al uitgebreid ingelicht. Op radio en
televisie en in de overige media is er en zal er nog uitgebreid voorlichting worden
gegeven aan de samenleving. De informatie- en voorlichtingscampagne zal in de
aanloop naar 1 oktober 2014 in intensiteit toenemen.
De mogelijkheid van vervanging van het huidige cumulatieve stelsel waarmee de
omzetbelasting wordt geheven, houdt de regering in beraad en onderzoek. In de
memorie van toelichting bij de Landsverordening tot aanpassing van de omzetbelas-
ting, het formele belastingrecht en aanverwante belastinglandsverordeningen^13 , is
door de toenmalige regering al aangegeven dat mogelijkheden worden gezien voor
het op termijn (al dan niet stapsgewijs) doorvoeren van een vervanging door een
stelsel waarbij (gedeeltelijk) aftrek van voorbelasting mogelijk wordt, bijvoorbeeld
een btw-systeem.
Op 27 augustus 2014 heeft de RvA advies uitgebracht op het onderhavige landsbesluit
((RvA no. RA/20/20-14-LB).
In de artikelen 44 en 44a van de ALL is geregeld de wettelijke verplichting van een
administratieplichtige om aan afnemers een factuur uit te reiken en de mogelijkheid
om voor groepen administratieplichtigen een uitzondering te maken in de zin dat,
in de plaats van een factuur, een kassabon aan de afnemer moet worden uitgereikt.
Het onderhavige ontwerp-besluit regelt de plicht om kassabonnen uit te reiken met
gebruikmaking van een fiscaal kasregistratiesysteem en ook de mogelijkheid om van
die plicht ontheffing te verlenen. De RvA is (evenals de SER in zijn advies d.d. 20 juni
2014 Ref. nr. 094/2014-SER) van mening dat het ontwerp door die uitzonderingen op
de hoofdregel van het uitreiken van een factuur, bijzonder complex is en kan leiden
tot verwarring bij de administratieplichtigen maar ook bij degenen die belast worden
met de uitvoering en handhaving van deze regeling. De Raad verwijst hierbij naar
aanwijzing 8, eerste lid van de Aanwijzingen voor de regelgeving (hierna: AWR) waarin
omwille van de handhaafbaarheid van een regeling wordt bepaald dat uitzonderings-
bepalingen in een regeling tot een minimum moeten worden beperkt. De RvA advi-
seert de regering de uitzonderingen die krachtens het onderhavige ontwerpbesluit
op de hoofdregel worden gemaakt zoveel mogelijk te beperken. Daarnaast adviseert
de Raad de voorgestelde regeling bij de administratieplichtigen en hun afnemers
bekend te maken door middel van een uitgebreide informatie en voorlichtingscam-
pagne vóór de inwerkingtreding van het landsbesluit en de daarop berustende uitvoe-
ringsregelingen.
De regering onderkent de door de RvA geschetste complexiteit, maar acht die com-
plexiteit te rechtvaardigen. Verwezen zij naar de hierboven voor wat betreft dit aspect
gegeven reactie van de regering op het advies van de SER d.d. 20 juni 2014 Ref. nr.
094/2014-SER. De RvA merkt op dat in het voorgestelde artikel 8, eerste lid, de ver-

13 P.B. 2013, no. 51.

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
plichting van de kasregistratieplichtige is opgenomen om het fiscale kasregistratie-
systeem op zodanige wijze te gebruiken en te onderhouden dat het onafgebroken
deugdelijk functioneert. Volgens de RvA wordt in de tweede volzin van genoemd ar-
tikellid van het ontwerp beschreven wat onder deugdelijk functioneren van een fiscaal
registratiesysteem moet worden verstaan. Van deugdelijk functioneren van een fiscaal
kasregistratiesysteem is sprake indien alle door de kasregistratieplichtige verrichte
transacties volledig en op de juiste wijze in het fiscaal kasregistratiesysteem worden
opgeslagen. Dat houdt volgens de RvA in dat ook de software en het door de installa-
teur geïnstalleerde (steeds) deugdelijk moeten (blijven) functioneren. De RvA is van
oordeel dat de kasregistratieplichtige verantwoordelijk wordt gesteld voor het
deugdelijk functioneren van het fiscaal kasregistratiesysteem terwijl hij geen enkele
mogelijkheid heeft om dat blijvend te kunnen controleren. De RvA is van oordeel dat
de kasregistratieplichtige slechts verantwoordelijk kan worden gesteld voor wat onder
zijn invloedssfeer valt en waar hij zeggenschap over heeft. De RvA adviseert de regering
artikel 8, eerste lid van het ontwerp met inachtneming van het bovenstaande aan te
passen.
De regering kan zich niet vinden in dat advies van de RvA. In de tweede volzin van
artikel 8, eerste lid, is opgenomen dat het fiscaal kasregistratiesysteem deugdelijk
functioneert indien alle door de kasregistratieplichtige verrichte transacties volledig
en op de juiste wijze in het fiscaal kasregistratiesysteem worden opgeslagen. Op het
moment dat de kasregistratieplichtige constateert dat het fiscaal kasregistratiesysteem
technisch niet deugdelijk functioneert, dient hij de procedure te volgen zoals bepaald
in artikel 8, tweede lid. Zijn verantwoordelijkheid beperkt zich tot het constateren
van het gebrek en het nemen van voorgeschreven stappen. Hij wordt zelf niet betrok-
ken bij het technische deel (installatie van software etc.). Zijn aandeel en verantwoor-
delijkheid beperkt zich tot het de juiste wijze opslaan van de verrichte transacties.
Met de overige opmerkingen van de RvA is rekening gehouden in het ontwerp.
'''
'''
Artikelsgewijze toelichting
'''
'''
Artikel 1
In dit artikel zijn de definities van een aantal relevante begrippen opgenomen. Voor
zover de gegeven definitie een nadere toelichting behoeft, is deze hierna opgenomen.
Onder het begrip controle-autoriteit moet worden verstaan: de Stichting Overheids
Belastingaccountantsbureau. Deze autoriteit is verantwoordelijk voor het periodiek
(laten) controleren van de fiscale kasregistratiesystemen. Tevens is deze autoriteit
het bevoegde orgaan voor het toezicht op en de handhaving van het verplicht gestelde
gebruik van het fiscaal kasregistratiesysteem.
Onder het begrip fiscale kasregistratiesysteem moet worden verstaan: een kassa met
een geïntegreerde printer danwel de combinatie van een kassa met een separate
printer, voorzien van een fiscaal geheugen. Dit fiscaal geheugen is verzegeld en inge-
bouwd en kan niet worden verwijderd zonder onherstelbare schade aan het systeem
aan te brengen. Een fiscaal kasregistratiesysteem kan dus zowel bestaan uit een kassa
met een geïntegreerde printer als uit twee losse componenten, een kassa en een se-
parate printer. Tot de tweede soort behoort ook een Point Of Sale (POS) systeem.
Onder het begrip kasregistratieplichtige wordt verstaan: een administratieplichtige
die ter zake van zijn leveringen of diensten middels een fiscaal kasregistratiesysteem
een kassabon dient uit te reiken. Het gaat hierbij om administratieplichtigen wiens
activiteiten geheel of gedeeltelijk bestaan uit de volgende leveringen of diensten:
verstrekken van spijzen en dranken, verkoop van consumentenartikelen (met uitzon-
dering van motorrijtuigen en vaartuigen), reparatie van consumentenartikelen (met
uitzondering van motorrijtuigen en vaartuigen) en persoonlijke dienstverlening. Voor
zover deze leveringen en diensten worden verricht, dient ter zake een kassabon te
worden verstrekt. Op grond van dit landsbesluit, dient deze kassabon middels een
fiscaal kasregistratiesysteem te worden uitgereikt. In dit verband wordt nog opge-
merkt, dat administratieplichtigen de personen en lichamen zijn als bedoeld in artikel
43, eerste lid, van de ALL. In dat artikel is omschreven wie administratieplichtig zijn
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


voor de heffingen die onder de werkingssfeer van de ALL vallen. Het betreft natuurlijke
personen die een bedrijf of beroep uitoefenen (onderdeel a), alsmede lichamen (on-
derdeel c). Het begrip lichamen is in artikel 2, eerste lid, onderdeel b, van de ALL nader
gedefinieerd. Daaronder vallen verenigingen en andere rechtspersonen, vennoot-
schappen en doelvermogens. Natuurlijke personen die inhoudingsplichtig zijn, vallen
ook onder het begrip “administratieplichtige” (onderdeel b). Die personen zullen in
beginsel niet verplicht worden om een fiscaal kasregistratiesysteem te gebruiken,
aangezien zij niet vallen onder de groep administratieplichtigen bedoeld in artikel
44a, eerste lid, van de ALL.

_Artikel 2_
De kernbepaling van dit landsbesluit is feitelijk in het eerste lid van dit artikel opge-
nomen. Op grond van dit artikel dient een kassabon immers middels een fiscaal kas-
registratiesysteem te worden uitgereikt. Het betreft dan uiteraard een fiscaal kasre-
gistratiesysteem als bedoeld in dit landsbesluit. Administratieplichtigen die behoren
tot de op grond van artikel 44a, eerste lid, van de ALL aangewezen groepen admini-
stratieplichtigen, zijn in beginsel dan ook verplicht om een fiscaal kasregistratiesys-
teem te gebruiken. Zij dienen immers ter zake van hun leveringen en diensten een
kassabon uit te reiken. Zoals bij de definitie van kasregistratieplichtige reeds beschre-
ven, behoren administratieplichtigen wiens activiteiten geheel of gedeeltelijk bestaan
uit de volgende leveringen of diensten tot de benoemde groepen: verstrekken van
spijzen en dranken, verkoop van consumentenartikelen (met uitzondering van mo-
torrijtuigen en vaartuigen), reparatie van consumentenartikelen (met uitzondering
van motorrijtuigen en vaartuigen) en persoonlijke dienstverlening. De verplichting
om een kassabon uit te reiken en daarmee de verplichting om een fiscaal kasregistra-
tiesysteem te gebruiken, is overigens beperkt tot de genoemde leveringen en diensten.
In het tweede lid is de mogelijkheid opgenomen, om een ontheffing voor het gebruik
van een fiscaal kasregistratiesysteem te verlenen. Gelet op het feit dat de aangewezen
groepen administratieplichtigen zeer ruim zijn omschreven, bestaat de mogelijkheid
dat de verplichting om een fiscaal kasregistratiesysteem te gebruiken voor een aantal
administratieplichtigen niet mogelijk of uit oogpunt van bedijfsvoering onevenredig
nadelig is. Om deze reden wordt in het tweede lid de mogelijkheid aan de Minister
van Financiën geboden om ontheffingen te verlenen. Aan deze ontheffing kunnen
voorwaarden en beperkingen worden verbonden. Dit om een juiste en volledige
vastlegging van de gerealiseerde omzet te garanderen en verwarring bij de afnemer
over een juiste fiscale handelwijze door de administratieplichtige te voorkomen.In
het geval van een ontheffing blijft de plicht bestaan tot het uitreiken van een kassabon.

_Artikel 3_
Op grond van dit artikel wordt bij ministeriële regeling met algemene werking, bepaald
aan welke eisen een fiscaal kasregistratiesysteem moet voldoen. Hierbij moet onder
meer worden gedacht aan algemene technische vereisten, hardware specificaties,
eisen met betrekking tot de elektronische journaals, (het geheugen van) de printer,
de beveiliging alsmede de programmeercapaciteiten.

_Artikel 4_
Een fiscaal kasregistratiesysteem dat voldoet aan de eisen, zoals nader omschreven
in de krachtens artikel 3 uitgevaardigde ministeriële regeling met algemene werking,
kan op schriftelijk verzoek van een leverancier of van een administratieplichtige door
de controle-autoriteit worden toegelaten.
Voor controle-doeleinden en om de continuïteit van een fiscaal kasregistratiesysteem
te garanderen, is het wenselijk om voorwaarden en verplichtingen aan een toelating
te verbinden. Het zal hierbij in de eerste plaats gaan om een verplichting om, al dan
niet op verzoek van de controle-autoriteit, een overzicht te verstrekken van de ver-
kochte fiscale kasregistratiesystemen. Uit dit overzicht zal in ieder geval informatie
over de kasregistratieplichtige, het kassa-identificatienummer en de verzegeling
moeten blijken. Aan een gekwalificeerde installateur zal, op grond van artikel 5, een

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
soortgelijke verplichting worden opgelegd. Daarnaast kunnen aan de een toelating
verplichtingen ten aanzien van de installatie en het onderhoud van een fiscaal kasre-
gistratiesysteem worden opgelegd. In dit verband is het bijvoorbeeld van belang, dat
een gekwaliceerde installateur beschikbaar is, om het voor toelating verzochte fiscale
kasregistratiesystemen te installeren en indien nodig te repareren.
De procedure waarmee wordt beoordeeld of een fiscaal kasregistratiesysteem aan
de gestelde vereisten voldoet, wordt door de controle-autoriteit vastgesteld. Uiteraard
dient deze procedure een objectief oordeel over het fiscaal kasregistratiesysteem te
vellen.
Op het verzoek om een fiscaal kasregistratiesysteem toe te laten, beslist de controle-
autoriteit middels een beschikking in de zin van artikel 3, eerste lid, van de Landsver-
ordening administratieve rechtspraak. Tegen deze beschikking staat bezwaar en be-
roep open.
De controle-autoriteit kan ook zelfstandig besluiten om een fiscaal kasregistratiesys-
teem toe te laten. Dit fiscaal kasregistratiesysteem dient uiteraard ook aan de eisen,
in de ministeriële regeling met algemene werking ter uitvoering van het bepaalde in
artikel 3, te voldoen. Dit instrument kan nodig zijn in het geval dat er zich geen ver-
zoeken worden gedaan of dat die wel worden gedaan maar dat die geen betrekking
hebben op betaalbare fiscale kasregistratiesystemen. Ook kan worden gedacht aan
de mogelijkheid dat met betrekking tot fiscale kasregistratiesystemen die een relevant
aandeel hebben in het totale gebruik, geen verzoek voor toelating wordt ingediend.
Indien een fiscaal kasregistratiesysteem aan de gestelde eisen voldoet en door de
controle-autoriteit is toegelaten, wordt het fiscaal kasregistratiesysteem van een
kassa-identificatienummer voorzien. Dit unieke nummer, dat ook op de kassabonnen
wordt geprint, wordt middels een sticker op het fiscaal kasregistratiesysteem aange-
bracht. Een op het fiscaal kasregistratiesysteem aangebracht kassa-identificatienum-
mer mag niet worden verwijderd.
'''
'''
Artikel 5
De programmering van een fiscaal kasregistratiesysteem vergt zeer specialistische
kennis van de hard- en software van het fiscaal kasregistratiesysteem. Om deze reden
is in dit artikel bepaald, dat de installatie, deïnstallatie, wijziging of reparatie van een
fiscaal kasregistratie uitsluitend door een gekwalificeerde installateur mag plaatsvin-
den. In deze gevallen dient immers een aanpassing aan het fiscaal kasregistratiesys-
teem plaats te vinden.
Onder een gekwalificeerde installateur wordt verstaan een installateur die voldoet
aan de door de controle-autoriteit vastgestelde eisen van vakbekwaamheid en inte-
griteit. Hiermee wordt voorkomen dat een fiscaal kasregistratiesysteem op een on-
juiste wijze wordt geprogrammeerd of anderszins niet deugdelijk kan functioneren.
Een gekwalificeerde installateur zal meestal een nauwe band met een leverancier
hebben, aangezien producenten van fiscale kasregistratiesystemen veelal verplichten
dat een leverancier over een gekwalificeerde installateur beschikken. Installateurs
kunnen ook zijn verbonden aan producenten.
Een gekwalificeerde installateur wordt door de controle-autoriteit, middels een be-
schikking in de zin van artikel 3, eerste lid, van de Landsverordening administratieve
rechtspraak, aangewezen. Tegen deze beschikking staat bezwaar en beroep open.
'''
'''
Artikel 6
Door de controle-autoriteit wordt een overzichtsregister bijgehouden en gepubliceerd.
In het overzichtsregister worden de toegelaten fiscale kasregistratiesystemen en ge-
kwalificeerde installateurs vermeld, zodat duidelijk is welke fiscale kasregistratiesys-
temen zijn toegelaten en welke installateurs aan de door de controle-autoriteit ge-
stelde eisen van vakbekwaamheid en integriteit voldoen. Publicatie zal in ieder geval
plaatsvinden via de website van de controle-autoriteit, maar kan ook via lokale dag-
bladen of brochures plaatsvinden. De controle-autoriteit draagt er zorg voor dat het
overzichtsregister actueel is en verstrekt op verzoek een afschrift van het meest actuele
overzichtsregister.
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


In het overzichtsregister worden ook de voorwaarden en verplichtingen die aan een
toelating worden gesteld en de eisen van vakbekwaamheid en integriteit die aan een
gekwalificeerde installateur worden gesteld opgenomen. Door publicatie in het
overzichtsregister is het duidelijk aan welke voorwaarden en eisen een gekwalificeerde
installateur moet voldoen.
De procedure waarmee wordt beoordeeld of een fiscaal kasregistratiesysteem aan
de gestelde eisen voldoet, wordt op verzoek verstrekt. De reeds geldende praktijk
wordt hiermee in het landsbesluit vastgelegd. Gelet op het specifieke karakter van
de procedure is publicatie in het overzichtsregister niet wenselijk.

_Artikel 7_
Bij de installatie van een fiscaal kasregistratiesysteem wordt door of namens de con-
trole-autoriteit een verzegeling aangebracht. Namens de controle-autoriteit wordt
de verzegeling door de gekwalificeerde installateur aangebracht. Met de verzegeling
moet fraude met de chip van het fiscaal kasregistratiesysteem worden voorkomen.
De controle-autoriteit verstrekt voor elk toegelaten fiscaal kasregistratiesysteem een
zegel.
Het zegel mag niet worden verbroken of verwijderd. Dit is de verantwoordelijkheid
van de kasregistratieplichtige. Is de verzegeling verbroken of verwijderd, dan voldoet
het fiscaal kasregistratiesysteem niet langer aan de eisen waaraan het op grond van
dit landsbesluit dient te voldoen.

_Artikel 8_
Op grond van dit artikel is de kasregistratieplichtige gehouden het fiscaal kasregistra-
tiesysteem op zodanige wijze te onderhouden dat het fiscaal kasregistratiesysteem
onafgebroken deugdelijk functioneert. De term deugdelijk houdt in dat het systeem
zodanig functioneert dat alle door de kasregistratieplichtige verrichte transacties
volledig en op de juiste wijze in het fiscaal kasregistratiesysteem worden opgeslagen,
zodat de voor de heffing van de belastingen van belang zijnde gegevens hieruit dui-
delijk blijken.
In het tweede lid is bepaald, dat de kasregistratieplichtige, indien het fiscaal kasregi-
stratiesysteem op enig moment niet deugdelijk functioneert, verplicht is om de datum
en het tijdstip waarop het fiscaal kasregistratiesysteem niet langer deugdelijk functi-
oneert in zijn administratie vast te leggen. Hiervoor kan het zogenoemde inspectie-
boek worden gebruikt. Het inspectieboek wordt bij een fiscaal kasregistratiesysteem
verstrekt en dient om aantekeningen over het functioneren van het fiscaal kasregi-
stratiesysteem te maken. Van het niet deugdelijk functioneren van een fiscaal kasre-
gistratiesysteem is niet alleen sprake bij een defect, maar ook ingeval van stroomuitval
of –onderbreking.
Vanaf het moment dat het fiscaal kasregistratiesysteem niet langer deugdelijk func-
tioneert, dient de kasregistratieplichtige ter zake van zijn leveringen en diensten een
handmatige kassabon uit te reiken. Dit dient te geschieden op een door de controle-
autoriteit vastgesteld model kassabon. Op deze kassabon zijn de diverse rubrieken
reeds voorgedrukt, zodat de kasregistratieplichtige slechts de relevante gegevens
hoeft in te vullen. Een afschrift van een handmatig uitgereikte kassabon dient de
kasregistratieplichtige uiteraard in zijn eigen administratie te bewaren. Gelet op de
verplichting om bij het niet deugdelijk functioneren van het fiscaal kasregistratiesys-
teem een door de controle-autoriteit voorgeschreven kassabon uit te reiken, betekent
dat de kasregistratieplichtige altijd over een voorraad van deze kassabonnen dient
te beschikken. De kasregistratieplichtige dient een defect fiscaal kasregistratiesysteem
onverwijld te laten repareren door een gekwalificeerde installateur. Een melding van
het defect bij de gekwalificeerde installateur binnen een periode van maximaal 24
uur kan in dit verband in ieder geval als onverwijld worden beschouwd. Voor de be-
paling van de termijn waarbinnen de melding van het defect dient te geschieden,
gelden de regels van de Algemene termijnenlandsverordening^14.

14 P.B. 2001-27.

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


'''
Zodra het fiscaal kasregistratiesysteem weer deugdelijk functioneert, is de kasregi-
stratieplichtige gehouden hiervan aantekening te maken in zijn administratie, veelal
weer in het inspectieboek. In het derde lid is aangegeven welke gegevens de kasregi-
stratieplichtige moet vermelden.
'''
'''
Artikel 9
In dit artikel zijn bepalingen opgenomen voor het geval de kasregistratieplichtige
die verplicht is een fiscaal kasregistratiesysteem te gebruiken, zijn onderneming dan
wel een daartoe behorend fiscaal kasregistratiesysteem overdraagt. In dat geval dient
de kasregistratieplichtige dit onverwijld schriftelijk bij de controle-autoriteit te mel-
den. Deze verplichting geldt dus bijvoorbeeld ook indien een kasregistratieplichtige
zijn eenmanszaak inbrengt in een rechtspersoon. Op de melding plaatst de kasregi-
stratieplichtige de in dit artikel genoemde gegevens. Op die manier blijft de controle-
autoriteit geïnformeerd over de locatie van het fiscaal kasregistratiesysteem. Indien
met de onderneming van de kasregistratieplichtige, of afzonderlijk daarvan, meerdere
fiscale kasregistratiesystemen worden overgedragen, worden op de schriftelijke
melding evenzoveel kassa-identificatienummers en zegelnummers vermeld. Een en
ander is ook van toepassing indien een gedeelte van de onderneming van de kasregi-
stratieplichtige wordt overgedragen.
'''
'''
Artikel 10
Overtreding
In dit artikel is het niet voldoen aan een van de verplichtingen bedoeld in artikel 4,
vijfde lid, artikel 5, eerste lid, artikel 8, tweede lid, onderdelen a en c, en derde lid, en
artikel 9, als een strafbaar feit aangemerkt. Op grond van artikel 52 van de ALL kan
de overtreding van deze bepalingen worden gestraft met een geldboete van ten
hoogste de derde categorie. Een overtreding van deze verplichtingen is afzonderlijk
strafbaar gesteld in het landsbesluit, aangezien deze verplichtingen niet kunnen
worden aangemerkt als het niet, dan wel niet conform de gestelde eisen uitreiken
van een kassabon, een en ander als bedoeld in artikel 44a van de ALL. Daarmee valt
het niet nakomen van deze verplichtingen niet onder het bereik van artikel 49, eerste
lid, onderdeel j, van de ALL.
De op grond van deze bepaling strafbaar gestelde overtredingen zijn: het verwijderen
van een kassa-identificatienummer, het laten installeren, deïnstalleren, wijzigen of
repareren door een niet-gekwalificeerde installateur, het niet vastleggen in de admi-
nistratie en niet onverwijld laten repareren van een niet-deugdelijk functioneren en
het niet melden bij de controle-autoriteit van een overdracht van de onderneming
of een fiscaal kasregistratiesysteem.
Het niet nakomen van het bepaalde in artikel 2, eerste lid, artikel 7, tweede lid, dan
wel artikel 8, eerste en tweede lid, onderdeel b, van dit landsbesluit moet daarentegen
wel worden aangemerkt als een misdrijf in de zin van artikel 49, eerste lid, van de ALL.
Misdrijf
Het niet, dan wel niet conform de in de belastingverordening gestelde eisen uitreiken
van een kassabon, is in artikel 49, eerste lid, onderdeel j, van de ALL strafbaar gesteld.
Onder "belastingverordening" wordt ook verstaan de ter uitvoering gegeven wettelijke
regelingen, waaronder landsbesluiten zoals de onderhavige (artikel 2, eerste lid, letter
a, van de ALL). Dit betekent dat aan degene die zijn kassabonnen niet overeenkomstig
de verplichtingen in de ALL en dit landsbesluit uitreikt, een strafrechtelijke boete
danwel gevangenisstraf kan worden opgelegd. Het niet nakomen van het bepaalde
in artikel 2, eerste lid, artikel 7, tweede lid, dan wel artikel 8, eerste en tweede lid,
onderdeel b, van dit landsbesluit, valt derhalve onder het bereik van artikel 49, eerste
lid, onderdeel j, van de ALL. Bij opzet is artikel 49, tweede lid, van de ALL van toepas-
sing.
'''
'''
Artikel 11
De inwerkingtreding is op 1 oktober 2014 vastgesteld. Met de voorbereidingen voor
de implementatie, zoals het ontwikkelen, drukken en verspreiden van de vereiste
'''
**11** bijlage **Landsbesluit fiscale kasregistratiesystemen**


documenten is reeds begonnen. Er is ook een uitgebreide informatie- en voorlichtings-
campagne opgezet. De diverse belangengorganisatie zijn al uitgebreid ingelicht. Op
radio en televisie en in de overige media is er en zal er nog uitgebreid voorlichting
worden gegeven aan de samenleving. De informatie- en voorlichtingscampagne zal
in de aanloop naar 1 oktober 2014 in intensiteit toenemen.

**Landsbesluit fiscale kasregistratiesystemen 11** bijlage


### Ministeriële regeling fiscale

### kasregistratiesystemen

'''
Ministeriële regeling, met algemene werking, van de 18de september 2014 ter
uitvoering van artikel 2, tweede lid, en artikel 3 van het Landsbesluit fiscale
kasregistratiesystemen^1 (Ministeriële regeling fiscale kasregistratiesystemen)^2
'''
**Art. 1**^3
**Ontheffing verplichting 1.** De Inspecteur verleent, op schriftelijk verzoek van de administratieplichtige, ont-

'''
heffing van de verplichting om een fiscaal kasregistratiesysteem te gebruiken, indien
de administratieve organisatie en het in gebruik zijnde kasregistratiesysteem een
volledig betrouwbaar beeld geeft van de door de administratieplichtige gerealiseerde
omzet.
'''
**2.** In afwijking van het eerste lid en onder de voorwaarde dat ter zake van hun leve-
ringen en diensten een door de controle-autoriteit vastgestelde kassabon wordt uit-
gereikt, worden de hierna genoemde administratieplichtigen ontheven van de ver-
plichting om een fiscaal kasregistratiesysteem te gebruiken:
_a._ administratieplichtigen ter zake waarvan de ontheffing voor het voldoen van om-
zetbelasting, bedoeld in artikel 8 van de Landsverordening omzetbelasting 1999^4 , van
toepassing is;
_b._ administratieplichtigen voor zover de verplichting tot het uitreiken van een kassa-
bon slechts bijkomstige activiteiten betreft; of
_c._ administratieplichtigen voor zover de verplichting tot het uitreiken van een kassabon
ambulante activiteiten betreft.
**3.** Ter zake van de levering van brandstoffen door administratieplichtigen die een
benzinestation exploiteren geldt eveneens een ontheffing van de verplichting om
een fiscaal kasregistratiesysteem te gebruiken. Aan een afnemer wordt, op verzoek,
wel een kassabon uitgereikt. Deze kassabon dient te voldoen aan de vereisten van
artikel 44a, vierde lid, van de Algemene landsverordening Landsbelastingen^5 , met
uitzondering van de in de onderdelen c en d opgenomen vereisten. Uit de administratie
van een administratieplichtige die een benzinestation exploiteert, dient op betrouw-
bare wijze de dagelijkse verkoop van brandstoffen te blijken.
**4.** administratieplichtigen die een kwalificerend schriftelijk verzoek aan de Inspecteur
voor een ontheffing als bedoeld in het eerste lid hebben ingediend, zijn eveneens
ontheven van de verplichting om een fiscaal kasregistratiesysteem te gebruiken.
**5.** Een verzoek tot ontheffing, bedoeld in het eerste lid, omvat:
_a._ een kassabon uit het in gebruik zijnde kasregistratiesysteem;
_b._ een verklaring van de administratieplichtige dat over de afgelopen vijf jaar aan
alle fiscale verplichtingen is voldaan;
_c._ een uitdraai van het debiteurenoverzicht van de Ontvanger, niet ouder dan een
maand;
_d._^6 een door een accountant met certificerende bevoegdheid gecontroleerde jaarre-
kening over het voorgaande belastingjaar welke jaarrekening is voorzien van een
goedkeurende accountantsverklaring of een goedkeurende beoordelingsverklaring.
**6.** In afwijking van het vijfde lid omvat een verzoek tot ontheffing, bedoeld in het
eerste lid, van een onderneming die in het voorgaande belastingjaar niet bestond,

'''
1 P.B. 2014-80.
P.B. 2014-82
2 Zoals deze luidt na wijzigingen, het laatst bij P.B. 2016-64.
3 Gewijzigd bij P.B. 2016-42 met ingang van 30/07/16.
4 P.B. 2013, 52.
5 P.B. 2013-53.
6 Gewijzigd bij P.B. 2016-64 met terugwerkende kracht tot en met 30/07/16.
'''
**12** art. 1 **Ministeriële regeling fiscale kasregistratiesystemen**


een niet ouder dan twee maanden zijnde verklaring van een accountant met certifi-
cerende bevoegdheid dat de administratieve organisatie van de onderneming een
volledige verantwoording van de omzet waarborgt.

**7.** Aan een kassa waarvoor een ontheffing als bedoeld in het eerste lid en het tweede
lid is verleend, wordt door de Inspecteur een kassa-ontheffingsnummer aangebracht.
**8.** Indien een kassa op enig moment vervangen wordt door een andere kassa, wordt
melding gemaakt aan de Inspecteur en wordt door de Inspecteur aan de andere kassa
een kassa-ontheffingsnummer aangebracht.
**9.** De ontheffing, bedoeld in het eerste lid, vervalt op het moment dat de Inspecteur,
bij een voor bezwaar vatbare beschikking, vaststelt dat:
_a._ de administratieplichtige bij het verzoek tot ontheffing onjuiste of onvolledige
informatie heeft verschaft;
_b._ de administratieplichtige zich niet houdt of de administratieplichtige zich in de
voorgaande vijf jaren niet heeft gehouden aan diens belastingverplichtingen; of
_c._ de administratieve organisatie van de onderneming niet van dien aard is dat de
voor de belastingheffing van belang zijnde gegevens duidelijk blijken.
**10.** De ontheffing, bedoeld in het eerste lid, vervalt op het moment dat de controle-
autoriteit constateert dat de administratieve organisatie en het in gebruik zijnde
kasregistratiesysteem niet adequaat zijn om een betrouwbaar beeld te vormen over
de volledigheid van de omzetverantwoording.
**11.** Indien een ontheffing overeenkomstig het tiende lid komt te vervallen, is de ad-
ministratieplichtige verplicht om een fiscaal kasregistratiesysteem als bedoeld in ar-
tikel 1, onderdeel b, van het Landsbesluit kasregistratiesystemen, in gebruik te nemen.

**Art. 2**
De minimale eisen waaraan een fiscaal kasregistratiesysteem, als bedoeld in het **Minimale eisen**
Landsbesluit fiscale kasregistratiesystemen, moet voldoen, zijn in de bijlage^7 bij deze
ministeriële regeling opgenomen.

'''
Art. 3
'''
**1.** Deze ministeriële regeling treedt in werking met ingang van 1 oktober 2014. **Inwerkingtreding
2.** De Ministeriële regeling kasregistratiesystemen^8 wordt ingetrokken.

**Art. 4**
Deze ministeriële regeling wordt aangehaald als: Ministeriële regeling fiscale kasre- **Citeertitel**
gistratiesystemen.

7 Hierna opgenomen in de bundel.
8 P.B. 2012-70.

**Ministeriële regeling fiscale kasregistratiesystemen 12** art. 4


'''
Nota van toelichting behorende bij de Ministeriële regeling fiscale
kasregistratiesystemen
'''
'''
§ 1. Algemeen
Op grond van artikel 44a, eerste lid, van de Algemene landsverordening Landsbelas-
tingen zijn in artikel 7.2, eerste lid, van de Ministeriële regeling formeel belastingrecht
groepen administratieplichtigen aangewezen die ter zake van hun leveringen en
diensten een kassabon dienen uit te reiken. In het Landsbesluit fiscale kasregistratie-
systemen is vervolgens bepaald, dat deze kassabon middels een fiscaal kasregistra-
tiesysteem dient te worden verstrekt. Voor een aantal administratieplichtigen, beho-
rende tot de in artikel 7.2 van de Ministeriële regeling formeel belastingrecht aange-
wezen groepen, is het gebruik van een fiscaal kasregistratiesysteem echter bezwaarlijk.
Om deze reden wordt in artikel 1 van deze ministeriële regeling, onder voorwaarden,
een ontheffing verleend van de verplichting om een fiscaal kasregistratiesysteem te
gebruiken. De mogelijkheid om een ontheffing te verlenen, wordt in artikel 2, tweede
lid, van het Landsbesluit fiscale kasregistratiesystemen geboden.
De eisen waaraan een fiscaal kasregistratiesysteem dient te voldoen, worden, conform
het bepaalde in artikel 3 van het Landsbesluit fiscale kasregistratiesystemen, bij mi-
nisteriële regeling met algemene werking vastgesteld. Met artikel 2 van deze minis-
teriële regeling wordt aan deze bepaling uitvoering gegeven. De thans vastgestelde
eisen verschillen slechts op enkele minieme punten van de eisen, zoals eerder vastge-
steld bij de Ministeriële regeling kasregistratiesystemen^9.
Het vaststellen van de eisen waaraan een fiscaal kasregistratiesysteem dient te vol-
doen, is van belang omdat alleen fiscale kasregistratiesystemen die aan de gestelde
eisen voldoen, kunnen worden toegelaten. Toelating van een fiscaal kasregistratie-
systeem geschiedt op verzoek van een leverancier of door aanwijzing door de controle-
autoriteit. In beide gevallen dient een fiscaal kasregistratiesysteem aan de bij deze
ministeriële beschikking vastgestelde eisen te voldoen. Toelating op verzoek van een
leverancier vindt bovendien plaats door middel van een beschikking in de zin van de
Landsverordening administratieve rechtspraak. In het kader van de rechtsbescherming
is het voor de leverancier van belang om kennis te kunnen nemen van de eisen
waaraan een fiscaal kasregistratiesysteem moet voldoen om te worden toegelaten.
'''
'''
§ 2. Financiële paragraaf
Aan deze ministeriële regeling zijn geen bijzondere financiële lasten verbonden.
'''
'''
§ 3. Artikelsgewijze toelichting
'''
'''
Artikel 1
In afwijking van de hoofdregel, dat een administratieplichtige ter zake van zijn leve-
ringen en diensten een factuur dient uit te reiken, is in artikel 44a van de Algemene
landsverordening Landsbelastingen de mogelijkheid opgenomen om voor bepaalde
groepen administratieplichtigen het uitreiken van een kassabon voor te schrijven.
Aan een kassabon worden andere, eenvoudigere, eisen dan aan een factuur gesteld.
Als gevolg hiervan wordt een kassabon met name in het handelsverkeer met consu-
menten gebruikt. Bij het bepalen van de groepen administratieplichtigen die een
kassabon dienen uit te reiken, is hierbij aangesloten. Ter zake van de volgende leve-
ringen en diensten is het uitschrijven van een kassabon verplicht: verstrekken van
spijzen en dranken, verkoop van consumentenartikelen, reparatie van consumenten-
artikelen en persoonlijke dienstverlening.
Vanwege het feit dat in het handelsverkeer met consumenten veelal contante beta-
lingen plaatsvinden, is de kans dat een deel van de omzet buiten de administratie
wordt gehouden zeer nadrukkelijk aanwezig. Door een elektronische vastlegging van
deze verkopen, wordt de mogelijkheid om omzet buiten de administratie te houden
aanmerkelijk verkleind. Daarnaast is het uitreiken van een kassabon via een kasregi-
'''
'''
9 P.B. 2012-70.
'''
**12** bijlage **Ministeriële regeling fiscale kasregistratiesystemen**


stratiesysteem zeer goed mogelijk en in veel gevallen reeds gebruikelijk. Om deze
redenen is in het Landsbesluit fiscale kasregistratiesystemen de verplichting opgeno-
men om een kassabon middels een fiscaal kasregistratiesysteem uit te reiken.
De groep administratieplichtigen, die op grond van de Algemene landsverordening
Landsbelastingen en het Landsbesluit fiscale kasregistratiesystemen, ter zake van
hun leveringen en diensten een kassabon middels een fiscaal kasregistratiesysteem
dienen uit te reiken, is echter zeer divers. Voor een aantal van de tot deze groep beho-
rende administratieplichtigen is het gebruik van een fiscaal kasregistratiesysteem,
in ieder geval op dit moment, zeer bezwaarlijk. Door het bedrijfsleven is hier ook
aandacht voor gevraagd. Gelet op de in artikel 2, tweede lid, van het Landsbesluit
fiscale kasregistratiesystemen geboden mogelijkheid, wordt thans voor de hierna
genoemde administratieplichtigen, onder voorwaarden, een ontheffing verleend van
de verplichting om een fiscaal kasregistratiesysteem te gebruiken.
In de eerste plaats wordt een ontheffing verleend voor administratieplichtigen op
wie de zogenoemde kleine ondernemersregeling voor de omzetbelasting van toepas-
sing is. Op grond van artikel 8 van de Landsverordening omzetbelasting 1999 kan aan
een in Curaçao woonachtige natuurlijke persoon, wiens omzet in een kalenderjaar
minder dan NAf 30.000 bedraagt, op verzoek worden ontheven van de verplichting
tot het voldoen van de in rekening gebrachte omzetbelasting. De bedoelde ontheffing
wordt bij beschikking verleend en blijft van kracht zolang de administratieplichtige
aan de wettelijke eisen voldoet. Vanuit het bedrijfsleven is ten aanzien van deze groep
administratieplichtigen gewezen op de relatief grote investering voor de aanschaf
van een fiscaal kasregistratiesysteem, vergeleken met de door deze administratie-
plichtigen te realiseren omzet. Bovendien gaat het bij deze groep administratieplich-
tigen vaak om starters, voor wie een investering in een fiscaal kasregistratiesysteem
financieel niet haalbaar is. Onder de voorwaarde, dat ter zake van hun leveringen en
diensten een door de controle-autoriteit voorgeschreven kassabon wordt uitgeschre-
ven, wordt aan deze administratieplichtigen op dit moment een ontheffing voor het
gebruik van een fiscaal kasregistratiesysteem verleend.
De tweede groep administratieplichtigen aan wie een ontheffing wordt verleend,
zijn administratieplichtigen die slechts voor bijkomstige activiteiten een fiscaal kas-
registratiesysteem dienen te gebruiken. Bij het bepalen van de groep administratie-
plichtigen die verplicht zijn om een kassabon uit te reiken, is aangesloten bij de te
verrichten leveringen of diensten. Ook administratieplichtigen voor wie deze leverin-
gen of diensten slechts bijkomstig zijn – en ter zake van wiens primaire activiteiten
derhalve een factuur moet worden uitgereikt – zijn verplicht ter zake van deze leve-
ringen of diensten een kassabon, middels een fiscaal kasregistratiesysteem, uit te
reiken. Een voorbeeld kan deze situatie verduidelijken. Een duikschool is ter zake van
zijn primaire activiteiten – het geven van duiklessen en begeleiden van duikers –
verplicht een factuur uit te schrijven. Indien de duikschool naast haar primaire activi-
teiten ook frisdranken verkoopt, dient zij voor deze verkopen een kassabon uit te
reiken. Het verplichte gebruik van een fiscaal kasregistratiesysteem in deze situaties
is niet wenselijk. Om deze reden wordt, wederom onder de voorwaarde dat ter zake
van de bijkomstige activiteiten een door de controle-autoriteit vast te stellen kassabon
wordt uitgereikt, aan deze administratie-plichtigen een ontheffing verleend. Of van
bijkomstige activiteiten sprake is, dient naar de omstandigheden te worden beoor-
deeld. Om praktische redenen wordt goedgekeurd, dat indien de in artikel 7.2 van de
Ministeriële regeling formeel belastingrecht genoemde leveringen en diensten, niet
meer dan 20% van de totale omzet bedragen, er in ieder geval sprake van bijkomstige
activiteiten is.
Ook voor administratieplichtigen wiens activiteiten bestaan uit de ambulante handel
of persoonlijke dienstverlening aan huis is het gebruik van een fiscaal kasregistratie-
systeem niet wenselijk. Bij ambulante handel gaat het bijvoorbeeld om huis-aan-
huisverkoop, markthandelaren en straatautowassers. Het verstrekken van spijzen
en dranken vanuit een mobiele locatie, bijvoorbeeld vanuit een batidowagen of truck’i
pan, is niet uitgezonderd. In deze situaties is het gebruik van een fiscaal kasregistra-
tiesysteem wel mogelijk en ook wenselijk. De verkoop van etenswaren en dagbladen

**Ministeriële regeling fiscale kasregistratiesystemen 12** bijlage


'''
door straatventers valt niet onder deze bepaling, aangezien voor deze activiteiten
reeds een afwijkende regeling geldt. Onder de voorwaarde dat de dagelijkse verkopen
worden geregistreerd, geldt voor deze leveringen een ontheffing van de verplichting
om ter zake van elke verkoop een kassabon uit te reiken. De dagelijkse verkopen
dienen op een door de Directeur van de Stichting Overheids Belastingaccountantsbu-
reau vast te stellen overzicht te worden geregistreerd. Bij persoonlijke dienstverlening
aan huis gaat het om bijvoorbeeld kappers, masseurs, schoonheidsspecialisten, pedi-
curen en manicuren die hun activiteiten niet vanuit een vaste locatie verrichten.
Hoewel het technisch mogelijk is om een mobiel fiscaal kasregistratiesysteem te ge-
bruiken, wordt de aanschaf hiervan thans niet opportuun geacht. Om deze reden
wordt aan deze groep administratieplichtigen een ontheffing verleend, onder de
voorwaarden dat ter zake van hun leveringen en diensten een door de controle-auto-
riteit vast te stellen kassabon wordt uitgereikt.
Aan de ontheffing voor de hiervoor genoemde administratieplichtigen wordt telkens
de voorwaarde verbonden, dat ter zake van hun leveringen en diensten een door de
controle-autoriteit vastgestelde kassabon wordt uitgereikt. Het gaat hier om dezelfde
kassabon, als die op grond van het Landsbesluit fiscale kasregistratiesystemen moet
worden uitgereikt indien het fiscale kasregistratiesysteem tijdelijk niet deugdelijk
functioneert. Door middel van deze kassabon is de gerealiseerde omzet beter te
controleren.
In het tweede lid van artikel 1 is nog een bijzondere regeling voor benzinestations
opgenomen. Vanwege het feit dat het in de praktijk niet gebruikelijk is dat ter zake
van de levering van brandstoffen door de afnemer een kassabon wordt gevraagd of
aangenomen, wordt op dit moment een ontheffing voor het gebruik van een fiscaal
kasregistratiesysteem verleend. Indien een afnemer echter een kassabon wenst te
ontvangen, dient de exploitant van een benzinestation hiervoor zorg te dragen. Een
dergelijke kassabon dient aan de eisen van artikel 44a van de Algemene landsveror-
dening Landsbelastingen te voldoen, met uitzondering van de specifieke eisen die
betrekking hebben op het gebruik van een fiscaal kasregistratiesysteem. In de admi-
nistratie dient de exploitant de dagelijkse verkoop van brandstoffen op een betrouw-
bare wijze vast te leggen. Ter voorkoming van misverstanden wordt opgemerkt, dat
een exploitant voor zijn overige activiteiten, voor zover deze tot de in artikel 7.2 van
de Ministeriële beschikking formeel belastingrecht benoemde leveringen en diensten
behoren, middels een kasregistratiesysteem een kassabon dient uit te reiken.
'''
'''
Artikel 2
De eisen waaraan een fiscaal kasregistratiesysteem moet voldoen, zijn in een bijlage
bij deze ministeriële regeling opgenomen. De keuze voor het opnemen van deze eisen
in een bijlage, is gelegen in de voornamelijk technische eisen die zich niet lenen voor
een artikelsgewijze behandeling in de ministeriële regeling.
De diverse eisen zijn onderverdeeld in de rubrieken: Algemene technische vereisten,
Hardware specificaties, Elektronische journaals, Fiscaal geheugen, Printen, Beveiliging,
Programmeercapaciteiten, Kassabonnen, X- en Z-rapporten, Ondersteunende software
en Inspectieboek.
'''
'''
Bijlage behorende bij artikel 2 van de Ministeriële regeling fiscale
kasregistratiesystemen
'''
_1. Algemene technische vereisten_
Een fiscaal kasregistratiesysteem moet minimaal aan de volgende algemene techni-
sche eisen voldoen:
_a._ het systeem dient zowel de Engelse als de Nederlandse taal te ondersteunen;
_b._ data dienen berekend, weergegeven en verzonden te worden in het formaat:
dd/mm/yyyy.

**12** bijlage **Ministeriële regeling fiscale kasregistratiesystemen**


_2. Hardware specificaties_
Een fiscaal kasregistratiesysteem moet minimaal aan de volgende hardware specifi-
caties voldoen:
_a._ het fiscaal kasregistratiesysteem beschikt over een verzegeld fiscaal geheugen, bij
voorkeur ingebouwd met een epoxy hars of vergelijkbare kunststof, dat niet mecha-
nisch, chemisch, elektromagnetisch of fysiek verwijderd kan worden uit het moeder-
bord zonder onherstelbare schade aan het systeem aan te brengen;
_b._ het fiscaal kasregistratiesysteem beschikt over een externe sabotagebestendige
verzegeling, bijv. een schroef die verzegeld kan worden met een unieke zegel uitge-
geven door de controle-autoriteit of een ander type van sabotagebestendige verzege-
ling. Toegang tot het interne gedeelte van de machine is niet mogelijk zonder aantas-
ting van de sabotagebestendige verzegeling;
_c._ de verwisseling van kassabonpapier/kassarol kan geschieden zonder aantasting
van de sabotagebestendige verzegeling;
_d._ het fiscaal kasregistratiesysteem beschikt over een poort, bij voorkeur USB of
ETHERNET, voor een connectie met een computer (vereiste voor fiscale printer);
_e._ het fiscaal kasregistratiesysteem beschikt over een display waarin de input en
output van de machine gelijktijdig aan de ondernemer en consument getoond wordt;
_f._ het display scherm is in staat minimaal 13 cijfers te tonen, inclusief 2 decimalen;
_g._ het fiscaal kasregistratiesysteem heeft een interne klok met de werkelijke datum
en tijd.
_3. Elektronisch journaal_
Een fiscaal kasregistratiesysteem moet over een elektronisch journaal beschikken
dat minimaal aan de volgende eisen voldoet:
_a._ het fiscaal kasregistratiesysteem heeft een elektronisch journaal op een SD Card
of vergelijkbare gegevensdrager dat alle transacties en andere informatie die geprint
wordt, registreert. Dit elektronische journaal dient de dagelijkse verkoop samenvatting
te registreren in het fiscale geheugen. De data dient versleuteld opgeslagen te worden;
_b._ het eerste elektronische journaal activeert de registratie van verkopen en het
printen van kassabonnen. Wanneer het elektronische journaal verwijderd wordt,
dient het systeem onmiddellijk te blokkeren en is het niet langer mogelijk transacties
te verrichten;
_c._ de data van het elektronische journaal kan niet verwijderd of hergebruikt worden;
_d._ het fiscaal kasregistratiesysteem registreert wanneer het elektronisch journaal
voor het laatst is ge-update en alle veranderingen die betrekking hebben op het
elektronische journaal.
_4. Fiscaal geheugen_
Een fiscaal kasregistratiesysteem moet over een fiscaal geheugen beschikken dat
minimaal de volgende gegevens vastlegt:
_a._ datum en tijd van begin en einde van de dagelijkse handelingen;
_b._ het kassa-identificatienummer van het fiscaal kasregistratiesysteem en het Crib-
nummer van de kasregistratieplichtige;
_c._ de omzetbelastingtarieven van producten en diensten;
_d._ het bedrag van alle verkopen inclusief omzetbelasting, het totale bedrag van de
verkopen inclusief omzetbelasting, het bedrag van alle belastbare verkopen, het be-
drag van alle verkopen vrijgesteld van omzetbelasting en het totale bedrag aan om-
zetbelasting;
_e._ de serienummers en de datums van resetten van het Z-rapport elke vierentwintig
uur;
_f._ de aantallen keren en de datums van het resetten van het geheugen, informatie
over de initiatie van de reset en de wijze waarop gereset is;
_g._ alle pogingen van wijzigingen, sabotage, annuleringen, etc. van de data, dit om
de controle te vergemakkelijken.
Overige vereisten die betrekking hebben op het fiscaal geheugen:
_h._ het fiscaal geheugen kan een minimum van 3.650 dagelijkse Z-rapporten opslaan;

**Ministeriële regeling fiscale kasregistratiesystemen 12** bijlage


'''
i. het systeem registreert heraansluitingen elke keer dat het fiscaal geheugen afge-
sloten is voor service of door sabotage. Het heraansluitingrapport bevat het tijdstip
en datum van de afsluiting en heraansluiting;
j. wanneer het fiscaal geheugen nog capaciteit voor 30 Z-rapporten heeft, wordt de
volgende waarschuwing geprint op de eerstvolgende Z-rapporten: “FISCAAL GEHEU-
GEN BIJNA VOL. XX Z-RAPPORTEN OVER” of “FISCAL MEMORY NEAR FULL. REMAI-
NING XX Z-REPORTS”. Indien het geheugen vol is stopt het fiscaal kasregistratiesys-
teem automatisch met het registreren van transacties, maar alle andere functies be-
treffende de informatie van het fiscaal geheugen dienen wel beschikbaar te zijn;
k. indien de diagnostische procedure vaststelt dat het fiscaal geheugen defect is, is
het verder registreren van omzet onmogelijk;
l. indien de diagnostische procedure vaststelt dat de printer defect is, is het verder
registreren van omzet onmogelijk;
m. indien de printer geen papier meer bevat, wordt het verder registreren van omzet
onmogelijk.
'''
_5. Printen_
Een fiscaal kasregistratiesysteem moet over een mogelijkheid tot printen beschikken
dat minimaal aan de volgende eisen voldoet:
_a._ voor elke gemaakte transactie wordt een kassabon geprint;
_b._ op basis van standaard tijdseenheden (dag, maand, jaar) kunnen vanuit het geheu-
gen verkoopgegevens geprint worden;
_c._ mogelijkheid om samenvattende verkooprapporten te printen tussen twee wille-
keurige data (van-tot) of door het selecteren van twee verschillende Z-rapporten;
_d._ mogelijkheid om een logo van de ondernemer op elke kassabon te printen in een
niet standaard lettertype;
_e._ opgeslagen gegevens kunnen door instructies (bijv. via een keyboard) geprint
worden;
_f._ het unieke kassa-identificatienummer van het fiscaal kasregistratiesysteem wordt
op elke kassabon geprint, dit ter bevordering van het identificeren van ongeregi-
streerde kasregistratiesystemen;
_g._ het gebruik van het fiscaal logo, geprint in een niet standaard lettertype op elke
kassabon, dit ter vergemakkelijking van het herkennen van authentieke kassabonnen
door consumenten;
_h._ indien een transactie met vreemde valuta wordt betaald, wordt de valuta van het
ontvangen bedrag op de kassabon geregistreerd. Indien een transactie met een debit-
of creditcard wordt betaald, wordt de handelsnaam van de debit- of creditcardmaat-
schappij op de kassabon vermeld;
_i._ de op de kassabon geprinte gegevens zijn minimaal voor een periode van 5 jaar
leesbaar;
_j._ elke begonnen en vervolgens onderbroken printactie wordt voortgezet na reparatie
van de printer;
_k._ elke begonnen en vervolgens door stroomuitval onderbroken, actie wordt voortge-
zet na terugkomst van de stroom;
_l._ mogelijkheid tot herprinten van een kassabon of elk ander document in het geval
van ontkoppeling van de printer of papierstoring;
_m._ gemakkelijke verwisseling van het kassabonpapier/kassarol;
_n._ robuuste en scherpe papiersnijder;
_o._ mogelijkheid om te printen in de Nederlandse en Engelse taal.
_6. Beveiliging en betrouwbaarheid_
Een fiscaal kasregistratiesysteem moet minimaal aan de volgende eisen aangaande
beveiliging en betrouwbaarheid voldoen:
_a._ de basisfuncties worden geregistreerd op een beschermd geheugen en kunnen
niet worden veranderd;
_b._ het systeem is beschermd tegen computervirus aanvallen;
_c._ het systeem biedt zekerheden voor data-integriteit en data-authenticiteit;

**12** bijlage **Ministeriële regeling fiscale kasregistratiesystemen**


_d._ intrinsieke bescherming tegen ongeautoriseerde handelingen;
_e._ applicatie upgrades zijn mogelijk via een onafhankelijk proces zonder de beveili-
gingsfuncties te verstoren;
_f._ automatische registratie van configuratiedata in het permanente geheugen;
_g._ automatisch management van export van elektronische journalen;
_h._ het systeem heeft een back-up batterij die tenminste 96 uur zonder externe
stroomaanlevering kan werken;
_i._ het systeem heeft zowel oplaadbare interne batterijen als voedingen die de schade
van stroomonderbrekingen beperken en die ervoor zorgen dat het systeem tijdens
stroomonderbrekingen operationeel kan blijven;
_j._ het systeem verplicht het uitprinten van een Z-rapport voorafgaand aan elke confi-
guratie verandering;
_k._ het systeem staat het aanpassen van geregistreerde data of het wijzigen/herroepen
van transacties niet toe;
_l._ het systeem stuurt een alarm en toont een bericht in het geval van ontkoppeling
van het electronisch journaal of het fiscaal geheugen;

_7. Programmeercapaciteiten_
Een fiscaal kasregistratiesysteem moet minimaal aan de volgende eisen ten aanzien
van de programmeercapaciteiten voldoen:
_a._ het systeem staat slechts 20 wijzigingen met betrekking tot de geprogrammeerde
belastingen toe en slechts 10 wijzigingen met betrekking tot de geprogrammeerde
header-informatie van de kassabonnen. Deze veranderingen worden in het fiscaal
geheugen geregistreerd en meer dan deze wijzigingen zorgen ervoor dat het systeem
geen kassabonnen meer kan printen;
_b._ staat configuratie van kasregistratiesystemen ter plaatse toe via een aangesloten
keypad en/of door een standaard PC. De fabrikant levert de programmeersoftware
ter goedkeuring, welke geëvalueerd zal worden op functionaliteit en betrouwbaarheid
door de controle-autoriteit;
_c._ staat het programmeren van tenminste 6 verschillende belastingcategorieën
(“departments”) toe met tenminste 2 belastingcodes voor elke categorie;
_d._ beschikt over de mogelijkheid om tenminste 20.000 artikelen op te slaan;
_e._ datum formaat voor alle geprinte documenten is DD-MM-YYYY:HHMMSS;
_f._ de geprogrammeerde en opgeslagen gegevens gaan niet verloren indien de interne
batterij verzwakt of geheel ontlaadt;
_g._ staat het direct printen van alle opgeslagen data toe, inclusief dat van het fiscaal
geheugen en het elektronisch journaal, door middel van een keypad of vanaf een
standaard PC door een verbinding via een USB, RS232 of Ethernet;
_h._ de datums in het systeem moeten onveranderbaar zijn. Dit verzekert integriteit
van de geregistreerde data en voorkomt "backdating".
_8. Kassabonnen_
Een fiscaal kasregistratiesysteem moet kassabonnen kunnen printen die minimaal
aan de volgende vereisten voldoen:
_a._ de datum en het tijdstip waarop de kassabon is uitgereikt;
_b._ het aan de kasregistratieplichtige toegekende uniek kassabonnummer (Number
di Komprobante Fiskal; NKF-nummer);
_c._ het kassa-identificatienummer (Number di Sistema Fiskal; NSF-nummer);
_d._ een door de Minister vastgesteld fiscaal logo;
_e._ de naam of handelsnaam, het adres en het Crib-nummer van de administratieplich-
tige die de levering of de dienst verricht;
_f._ het adres waar het fiscaal kasregistratiesysteem is geplaatst, indien dit adres afwijkt
van het adres bedoeld onder e;
_g._ een duidelijke omschrijving van de geleverde goederen of verrichte diensten;
_h._ de hoeveelheid van de geleverde goederen of verrichte diensten;
_i._ de eenheidsprijs, inclusief omzetbelasting;

**Ministeriële regeling fiscale kasregistratiesystemen 12** bijlage


'''
j. het toegepaste omzetbelastingtarief of indien een vrijstelling van omzetbelasting
van toepassing is, enige vermelding daarvan;
k. het totaal door de afnemer te betalen bedrag, alsmede eventuele kortingen die
niet in de eenheidsprijs zijn begrepen;
l. het omzetbelastingbedrag dat ter zake van de leveringen of diensten verschuldigd
is geworden;
m. de wijze van betaling.
Deze vereisten gelden tevens voor inruilbonnen en teruggavebonnen.
'''
_9. X- en Z-rapporten_
Een fiscaal kasregistratiesysteem moet X- en Z-rapporten kunnen genereren die mi-
nimaal aan de volgende eisen voldoen:
_a._ de naam of handelsnaam en het Crib-nummer van de kasregistratieplichtige;
_b._ datum en tijdstip waarop het rapport is geprint;
_c._ informatie waaruit blijkt dat het een X of Z rapport betreft;
_d._ kassa aanduiding
_e._ maand en jaar van de verkopen;
_f._ totaal verkoopbedrag (totaliseren van alle verkopen);
_g._ totaal verkoopbedrag per belastingcategorie (“department”);
_h._ bedrag van de omzetbelasting;
_i._ aantal verkochte artikelen;
_j._ aantal verleende diensten;
_k._ aantal contante transacties;
_l._ aantal kassalade openingen;
_m._ aantal kopie kassabonnen en bedrag;
_n._ verkoopbedrag opgesplitst in wijze van betaling;
_o._ aantal artikelen retour en bedrag;
_p._ kortingen;
_q._ overige transacties of registraties die invloed hebben gehad op de dagomzet;
_r._ aantal onvolledige transacties;
_s._ totaal omzet;
_t._ totaal retouraanslagen;
_u._ totaal nettobedrag.
_10. Ondersteunende software_
Een fiscaal kasregistratiesysteem moet geschikt zijn voor ondersteunende software
die minimaal aan de volgende eisen voldoet:
_a._ de fabrikant verschaft fiscale software die het mogelijk maakt voor de controle-
autoriteit om alle data van de Z-rapporten van alle kasregistratiesystemen via het
elektronisch journaal te ontvangen en te decrypten;
_b._ de bovengenoemde data moeten geëxporteerd kunnen worden naar standaard
Excel- of CSV-formaat.
_11. Inspectieboek
a._ de fabrikant verschaft een Inspectieboek voor elk verkocht fiscaal kasregistratie-
systeem.

'''
Bijlage
'''
'''
Artikel II van P.B. 2016-42 bepaalt het volgende:
'''
_1._ Een verzoek voor ontheffing van een fiscaal kasregistratiesysteem, bedoeld in artikel
2, tweede lid, van het Landsbesluit kasregistratiesystemen, die reeds voor de inwer-
kingtreding van deze regeling is ingediend en nog niet is afgehandeld, wordt aange-
merkt als een verzoek als bedoeld in artikel 1, eerste lid, van de Ministeriële regeling
fiscale kasregistratiesystemen.

**12** bijlage **Ministeriële regeling fiscale kasregistratiesystemen**


_2._ Een reeds ingediend verzoek voor ontheffing van een fiscaal kasregistratiesysteem
als bedoeld in het eerste lid, dient eveneens te voldoen aan hetgeen, bedoeld in artikel
1, vijfde of zesde lid, van de Ministeriële regeling fiscale kasregistratiesystemen.
_3._ Een administratieplichtige heeft na inwerkingtreding van deze regeling ten
hoogste tweemaanden de tijd om een verzoek als bedoeld in artikel 1, eerste lid, van
de Ministeriële regeling fiscale kasregistratiesystemen, nader aan te vullen met de
gegevens, bedoeld inartikel 1, vijfde of zesde lid, van de Ministeriële regeling fiscale
kasregistratiesystemen.
_4._ Een ontheffing van een fiscaal kasregistratiesysteem als bedoeld in artikel 2, tweede
lid, van het Landsbesluit kasregistratiesystemen, die voor de inwerkingtreding van
dezeregeling is verleend, geldt voor een periode van een jaar.
_5._ Om in aanmerking te kunnen komen voor een ontheffing van een fiscaalkasregi-
stratiesysteem na verloop van de periode, bedoeld in het vierde lid, kan een admini-
stratieplichtige binnen drie maanden na verloop van die periode, een verzoek tot
ontheffing als bedoeld in artikel 1, eerste lid, van de Ministeriële regeling fiscalekas-
registratiesystemen indienen.

**Ministeriële regeling fiscale kasregistratiesystemen 12** bijlage


### Ministeriële regeling vaststelling prioriteiten

### uitvoering controle-autoriteit

'''
Ministeriële regeling met algemene werking, van de 27ste juli 2016 ter uitvoering
van artikel 39, eerste lid, onderdeel a, van de Algemene landsverordening
Landsbelastingen (Ministeriële regeling vaststelling prioriteiten uitvoering
controle-autoriteit)^1
'''
**Art. 1
Vaststelling prioriteiten 1.** Voor de naleving van de verplichtingen opgenomen in de artikelen 43, tweede tot
en met negende lid, of 44a, eerste tot en met de zesde lid, dan wel met de naleving
van het gestelde bij of krachtens artikelen 43, tiende lid, of bij of krachtens artikel
44a, achtste lid, van de Algemene landsverordening Landsbelastingen, worden voor
de uitvoering van de controle, door de controle-autoriteit, bedoeld in artikel 1, onder-
deel d, van het Landsbesluit administratieve sanctie bij het niet nakomen fiscale
verplichtingen, prioriteiten vastgesteld.

**2.** De prioriteiten, bedoeld in het eerste lid, zijn als volgt en worden in deze volgorde
uitgevoerd:
_a._ de controle-autoriteit controleert overeenkomstig artikel 2, eerste lid, van het
Landsbesluit fiscale kasregistratiesysteem^2 , of een kassabon middels een fiscale
kasregistratiesystemen wordt uitgereikt;
_b._ de controle-autoriteit controleert of een kassabon voldoet aan hetgeen opgenomen
in artikel 44a, vierde lid, van de Algemene landsverordening Landsbelastingen;
_c._ de controle-autoriteit controleert overeenkomstig artikel 7, tweede lid, van het
Landsbesluit fiscale kasregistratiesysteem, of het fiscale kasregistratiesysteem onaf-
gebroken verzegeld is;
_d._ de controle-autoriteit controleert overeenkomstig artikel 8, eerste lid, van het
Landsbesluit fiscale kasregistratiesysteem, of het fiscale kasregistratiesystemen on-
afgebroken deugdelijk functioneert;
_e._ door de controle-autoriteit wordt de volledige administratie opgevraagd voor het
lopend boekjaar;
_f._ de controle-autoriteit onderzoek of de administratie voldoet aan hetgeen opgeno-
men in artikel 43, tweede, derde, vijfde, zevende, achtste en negende lid, van de Alge-
mene landsverordening Landsbelastingen;
_g._ de controle-autoriteit controleert of er een sluitende kasadministratie is;
_h._ de controle-autoriteit controleert of er een inkoopadministratie aanwezig is;
_i._ de controle-autoriteit controleert of er een voorraadadministratie aanwezig is voor
de producten opgenomen op de productcontrolelijst, bedoeld in artikel 3, eerste lid,
voor zover die producten door belastingplichtige worden verkocht;
_j._ de controle-autoriteit controleert of de voorraadadministratie van een product
opgenomen op de productcontrolelijst, bedoeld in artikel 3, eerste lid, volledig aansluit
op de inkoopadministratie van dat product, waardoor de verkopen van dat product,
dat gelijk is aan de inkopen minus voorraden, middels kassabonnen volledig gevali-
deerd kunnen worden;
_k._ de controle, bedoeld in onderdeel j, wordt herhaald voor alle producten op de
productcontrolelijst, bedoeld in artikel 3, eerste lid, in de daarin opgenomen volgorde;
_l._ de controle-autoriteit onderzoekt of de administratie voldoet aan hetgeen opgeno-
men in artikel 43, zesde lid, van de Algemene landsverordening Landsbelastingen;
_m._ de controle wordt door de controle-autoriteit overeenkomstig de onderdelen a
tot en met k, herhaald voor de vijf boekjaren daarvoor.

'''
1 P.B. 2016-43.
2 P.B. 2014-80.
'''
**13** art. 1 **Ministeriële regeling vaststelling prioriteiten uitvoering controle-autoriteit**


**3.** Indien de controle-autoriteit constateert dat de belastingplichtige niet voldoet
aan een van de prioriteiten, bedoeld in het tweede lid, dan is er sprake van een over-
treding, bedoeld in Indien de controle-autoriteit constateert dat de belastingplichtige
niet voldoet aan een van de prioriteiten, bedoeld in het tweede lid, dan is er sprake
van een overtreding, bedoeld in artikel 1, onderdeel e, van het Landsbesluit adminis-
tratieve sanctie bij het niet nakomen fiscale verplichtingen.
**4.** Na de constatering, bedoeld in het derde lid staakt de controle-autoriteit de con-
trole voor een termijn als bedoeld in artikel 10, derde lid, van het Landsbesluit admi-
nistratieve sanctie bij het niet nakomen fiscale verplichtingen.
**5.** De controle-autoriteit stelt overeenkomstig de prioriteiten, bedoeld in het tweede
lid, een gedetailleerde controleplan op.

'''
Art. 2
Aanstelling controle-auto-
riteit
'''
**1.** Voor de uitvoering van de controle, bedoeld in artikel 1, eerst lid, worden naast de
interne beschikbare capaciteit van de Stichting Overheids Belastingaccountantsbureau,
twaalf externe personen tijdelijk ingezet en aangewezen als controle-autoriteit.
**2.** De controle-autoriteit, bedoeld in artikel 1, onderdeel d, van het Landsbesluit ad-
ministratieve sanctie bij het niet nakomen fiscale verplichtingen, stelt voor de uitvoe-
ring van de controle, bedoeld in artikel 1, eerste lid, een roulatieschema van de perso-
nen, bedoeld in het eerste lid op.
**3.** Voor de uitvoering van de controle, bedoeld in artikel 1, het eerste lid, wordt een
persoon aangewezen als projectleider.
**4.** De controle, bedoeld in artikel 1, eerst lid, vindt telkens, overeenkomstig het rou-
latieschema, bedoeld in het tweede lid, plaats door twee personen.

'''
Art. 3
Interne productcontrole-
lijst
'''
**1.** De controle-autoriteit, bedoeld in artikel 1, onderdeel d, van het Landsbesluit ad-
ministratieve sanctie bij het niet nakomen fiscale verplichtingen, stelt voor de uitvoe-
ring van de controle, bedoeld in artikel 1, eerste lid, na overleg met de Minister, een
interne productcontrolelijst op.
**2.** De interne productcontrolelijst, bedoeld in het eerste lid, draagt een vertrouwelijke
karakter en zal als zodanig door de controle-autoriteit worden behandeld.

'''
Art. 4
Rapportages en constate-
ringslijst
'''
**1.** De controle-autoriteit stelt naar aanleiding van de gevoerde controles, dagelijks
en wekelijks, rapportages op.
**2.** De controle-autoriteit stelt van de overtredingen, bedoeld in artikel 1, onderdeel
e, van het Landsbesluit administratieve sanctie bij het niet nakomen fiscale verplich-
tingen, van alle belastingplichtige dagelijks een constateringslijst op en houdt deze
bij.
**3.** De controle-autoriteit stuurt de Minister langs elektronische weg wekelijkse de
rapportages, de bijgehouden constateringslijst en de interne productcontrolelijst,
bedoeld in artikel 3, eerste lid, op.

**Art. 5**
Met het toezicht op de naleving van de prioriteiten, bedoeld in artikel 1, eerste lid, **Toezicht op naleving**
wordt de Sectordirecteur Fiscale Zaken, dan wel door de Sectordirecteur Fiscale Zaken
aan te wijzen personen, belast.

**Art. 6**
Deze regeling treedt in werking met ingang van de dag na de datum van bekendma- **Inwerkingtreding**
king.

**Art. 7**
Deze regeling wordt aangehaald als: Ministeriële regeling vaststelling prioriteiten **Citeertitel**
uitvoering controle-autoriteit.

**Ministeriële regeling vaststelling prioriteiten uitvoering controle-autoriteit 13** art. 7


### Landsbesluit administratieve sanctie bij niet

### nakomen fiscale verplichtingen

'''
Landsbesluit houdende algemene maatregelen, van de 18de september 2014 ter
uitvoering van artikel 28a, zesde lid, van de Algemene landsverordening
Landsbelastingen^1 (Landsbesluit administratieve sanctie bij niet nakomen fiscale
verplichtingen)
'''
**Art. 1
Definities** In deze regeling en de daarop berustende bepalingen wordt verstaan onder:
_a._ Kasregistratieplichtige: een kasregistratieplichtige als bedoeld in artikel 1, onderdeel
d , van het Landsbesluit fiscale kasregistratiesystemen^2.
_b._ Bedrijfslocatie: de locatie van waaruit een belastingplichtige^3 goederen levert of
diensten verricht, als bedoeld in artikel 2, onderdeel a, van de Landsverordening
omzetbelasting 1999, uitgezonderd woongedeelten.
_c._ fiscaal kasregistratiesysteem: een fiscaal kasregistratiesysteem als bedoeld in artikel
1, onderdeel b, van het Landsbesluit fiscale kasregistratie-systemen.
_d._ controle-autoriteit: de directeur van de Stichting Overheids Belasting-accountants-
bureau, dan wel door de directeur aan te wijzen personen.
_e._ overtreding: het niet, dan wel niet op de voorgeschreven wijze, voldoen aan de
verplichtingen die voortvloeien uit Hoofdstuk VI van de Algemene landsverordening
Landsbelastingen.^4
_f._ overtreder: de belastingplichtige^5 die de overtreding pleegt of medepleegt.
_g._ begunstigingstermijn: de termijn waarbinnen een geconstateerde overtreding
moet zijn hersteld.

**Art. 2**^6
**Administratieve sanctie** De administratieve sanctie, bedoeld in artikel 28a, tweede lid, van de Algemene
landsverordening Landsbelastingen, wordt opgelegd aan de overtreder.

**Art. 3
Toezicht** Met het toezicht op de naleving van de verplichtingen als bedoeld in artikel 1, onder-
deel e^7 , is belast de controle-autoriteit.

**Art. 4
Legitimatie 1.** Bij de uitoefening van zijn taak draagt de medewerker van de controle-autoriteit
een door de controle-autoriteit uitgegeven legitimatiebewijs bij.

**2.** De medewerker toont het legitimatiebewijs, bedoeld in het eerste lid, desgevraagd
aanstonds.
**3.** Het legitimatiebewijs bevat een foto van de medewerker en vermeldt in ieder geval
diens naam en hoedanigheid.

**Art. 5
Gebruik bevoegdheden** De controle-autoriteit maakt van zijn bevoegdheden slechts gebruik voor zover dat
redelijkerwijs voor de vervulling van zijn taak nodig is.

'''
1
'''
'''
2
3
4
'''
'''
Zoals deze luidt na wijzigingen, het laatst bij P.B. 2018-19.
De citeertitel is gewijzigd bij P.B. 2016-23 en luidde voorheen "Landsbesluit tijdelijke sluiting bedrijfslocatie"
conform art. 19 van
P.B. 2014-83. P.B. 2014-80.
Gewijzigd bij P.B. 2016-23 met ingang van 21/05/16.
Gewijzigd bij P.B. 2018-19 met terugwerkende kracht tot en met 01/01/18.
5 Gewijzigd bij P.B. 2016-23 met ingang van 21/05/16.
6 Gewijzigd bij P.B. 2016-23 met ingang van 21/05/16.
7 Gewijzigd bij P.B. 2016-23 met ingang van 21/05/16.
'''
**14** art. 1 **Landsbesluit administratieve sanctie bij niet nakomen fiscale verplichtingen**


'''
Art. 6
'''
**1.** De controle-autoriteit is bevoegd elke plaats te betreden met uitzondering van **Toegangsverschaffing**
een woning, tenzij de bewoner daartoe toestemming geeft.
**2.** Zo nodig verschaft de controle-autoriteit zich toegang met behulp van de sterke
arm.
**3.** De controle-autoriteit is bevoegd zich te doen vergezellen door personen die
daartoe door hem zijn aangewezen.
**4.** Op de personen bedoeld in het derde lid is artikel 4 van overeenkomstige toepas-
sing.

'''
Art. 7
'''
**1.** De controle-autoriteit is bevoegd ter plaatse: **Bevoegdheden ter plaatse**
_a._ inlichtingen te vorderen;
_b._ inzage te vorderen van zakelijke gegevens en bescheiden;
_c._ van de gegevens en bescheiden kopieën te maken;
_d._ van personen inzage te vorderen van een identiteitsdocument, als bedoeld in artikel
2 van de Landsverordening Identificatieplicht^8.
**2.** Indien het maken van kopieën niet ter plaatse kan geschieden, is de controle-au-
toriteit bevoegd de gegevens en bescheiden voor dat doel voor korte tijd mee te nemen
tegen een door hem af te geven schriftelijk bewijs.

'''
Art. 8
Onderzoek fiscale kasregi-
stratiesysteem
'''
**1.** De controle-autoriteit is bevoegd het fiscale kasregistratiesysteem van de kasregi-
stratie-plichtige te onderzoeken.
**2.** Indien het onderzoek niet ter plaatse kan geschieden, is de controle-autoriteit
bevoegd het fiscale kasregistratiesysteem voor dat doel voor korte tijd mee te nemen
tegen een door hem af te geven schriftelijk bewijs.
**3.** De kasregistratieplichtige wordt zo spoedig mogelijk schriftelijk in kennis gesteld
van de resultaten van het onderzoek.
**4.** Bij toepassing van het tweede lid, is artikel 8, tweede en derde lid, van het Lands-
besluit fiscale kasregistratiesystemen van overeenkomstige toepassing.

'''
Art. 9
'''
**1.** Een ieder is verplicht aan de controle-autoriteit binnen de door hem gestelde rede- **Medewerking verlenen**
lijke termijn alle medewerking te verlenen die deze redelijkerwijs kan vorderen bij
de uitoefening van zijn bevoegdheden.
**2.** Zij die uit hoofde van ambt, beroep of wettelijk voorschrift verplicht zijn tot ge-
heimhouding, kunnen het verlenen van medewerking weigeren, voor zover dit uit
hun geheimhoudingsplicht voortvloeit.

'''
Art. 10
'''
**1.** Indien de controle-autoriteit een overtreding constateert, handelt de Inspecteur **Overtreding**
als volgt:
_a._ bij een eerste constatering geeft de Inspecteur aan de overtreder terstond een
schriftelijke waarschuwing;
_b._ bij een tweede constatering legt de Inspecteur aan de overtreder terstond een last
tot herstel van de overtreding op;
_c._ bij een derde en daarop volgende constateringen alsmede bij het niet binnen de
begunstigingstermijn herstellen van de overtreding, kan de Inspecteur aan de over-
treder terstond een administratieve sanctie opleggen.
**2.** De administratieve sanctie bestaat uit:
_a._ bij een derde constatering: sluiting van de bedrijfslocatie voor driemaal 24 uur;
_b._ bij een vierde constatering: sluiting van de bedrijfslocatie voor zevenmaal 24 uur;
_c._ bij een vijfde constatering: sluiting van de bedrijfslocatie voor dertigmaal 24 uur;
_d._ bij een zesde of volgende constatering: sluiting van de bedrijfslocatie voor een jaar.

8 P.B. 2002-76.

**Landsbesluit administratieve sanctie bij niet nakomen fiscale verplichtingen 14** art. 10


**3.** De periode gelegen tussen twee opeenvolgende constateringen, bedoeld in het
eerste en tweede lid, betreft minimaal een kalenderweek.
**4.** Na een geconstateerde overtreding wordt het toezicht bij de overtreder de eerst
volgende keer uitgeoefend door twee andere medewerkers van de controle-autoriteit.
**5.** Indien de controle-autoriteit vaststelt dat:
_a._ de laatst geconstateerde overtreding volledig en op de juiste wijze is hersteld; en
_b._ bij de overtreder gedurende een periode van een jaar geen nadere overtreding is
geconstateerd;
vervallen daarmee alle eerdere constateringen als bedoeld in het eerste en tweede
lid. De Inspecteur verstrekt daarvan een schriftelijk bewijs.

**Art. 11
Waarschuwing 1.** Een waarschuwing als bedoeld in artikel 10, eerste lid, onderdeel a, vermeldt:
_a._ de naam of handelsnaam, het adres, het Crib-nummer en het door de Kamer van
Koophandel toegekende registratienummer van de overtreder;
_b._ een omschrijving van de overtreding;
_c._ de overtreden wettelijke bepaling;
_d._ de datum en het tijdstip waarop de overtreding is geconstateerd;
_e._ de naam van de medewerker of de medewerkers van de controle-autoriteit die de
overtreding heeft of hebben geconstateerd;
_f._ het bepaalde in artikel 10, eerste en tweede lid.

**2.** Een waarschuwing als bedoeld in artikel 10, eerste lid, onderdeel a, wordt terstond
na de constatering van de overtreding in persoon uitgereikt aan de overtreder. De
overtreder dient voor ontvangst te tekenen. Voorts wordt de waarschuwing per post
verzonden.
**3.** Indien de uitreiking van de waarschuwing niet kan geschieden op de wijze als
voorzien in het tweede lid, geschiedt zij op een andere geschikte wijze.
**4.** Een waarschuwing, als bedoeld in artikel 10, eerste lid, onderdeel a, is geen beschik-
king in de zin van artikel 3, eerste lid, van de Landsverordening administratieve
rechtspraak^9.

**Art. 12
Last tot herstel overtre-
ding**

**1.** Een last tot herstel van de overtreding, als bedoeld in artikel 10, eerste lid, onderdeel
b, vermeldt:
_a._ de naam of handelsnaam, het adres, het Crib-nummer en het door de Kamer van
Koophandel toegekende registratienummer van de overtreder;
_b._ de waarschuwing als bedoeld in artikel 11;
_c._ een omschrijving van de overtreding;
_d._ de overtreden wettelijke bepaling;
_e._ de datum en het tijdstip waarop de overtreding is geconstateerd;
_f._ de begunstigingstermijn van minimaal zevenmaal 24 uur;
_g._ de te treffen herstelmaatregelen;
_h._ de sanctie op het niet tijdig herstellen van de overtreding;
_i._ in hoeverre de kosten van een administratieve sanctie ten laste van de overtreder
zullen worden gebracht;
_j._ de naam van de medewerkers van de controle-autoriteit die de overtreding hebben
geconstateerd;
_k._ een rechtsmiddelenverwijzing.
**2.** De last tot herstel van de overtreding, als bedoeld in artikel 10, eerste lid, onderdeel
b, wordt opgelegd bij beschikking in de zin van artikel 3, eerste lid, van de Landsver-
ordening administratieve rechtspraak.
**3.** Artikel 11, tweede en derde lid, zijn van overeenkomstige toepassing.
**4.** De rechthebbende tot het gebruik van de bedrijfslocatie wordt schriftelijk in
kennisgesteld van de last tot herstel van de overtreding als bedoeld in artikel 10,
eerste lid, onderdeel b.

'''
9 A.B. 2010-86.
'''
**14** art. 11 **Landsbesluit administratieve sanctie bij niet nakomen fiscale verplichtingen**


'''
Art. 13
'''
**1.** Een administratieve sanctie vermeldt: **Administratieve sanctie**
_a._ de naam of handelsnaam, het adres, het Crib-nummer en het door de Kamer van
Koophandel toegekende registratienummer van de overtreder;
_b._ de waarschuwing bedoeld in artikel 11;
_c._ de last tot herstel van de overtreding bedoeld in artikel 12;
_d._ een omschrijving van de overtreding;
_e._ de overtreden wettelijke bepaling;
_f._ de datum en het tijdstip waarop de overtreding is geconstateerd;
_g._ in hoeverre de kosten van de administratieve sanctie ten laste van de overtreder
zullen worden gebracht;
_h._ de naam van de medewerkers van de controle-autoriteit die de overtreding hebben
geconstateerd;
_i._ de datum en het tijdstip van de administratieve sanctie;
_j._ een rechtsmiddelenverwijzing.
**2.** De administratieve sanctie wordt opgelegd bij beschikking in de zin van artikel 3,
eerste lid, van de Landsverordening administratieve rechtspraak. Artikel 11, tweede
en derde lid, zijn van overeenkomstige toepassing.
**3.** De rechthebbende tot het gebruik van de bedrijfslocatie wordt schriftelijk in kennis
gesteld van de administratieve sanctie.
**4.** Na de bekendmaking van de administratieve sanctie aan de overtreder verzegelt
de Inspecteur de tot de bedrijfslocatie behorende gebouwen, gronden en al hetgeen
zich daarin of daarop bevindt.
**5.** Onder verzegelen wordt verstaan: het aanbrengen van een zegel, één of meerdere
sloten, dan wel andere materialen, op zodanige wijze dat de bedrijfslocatie van de
overtreder niet langer voor publiek of de overtreder toegankelijk is.
**6.** Op de bedrijfslocatie van de overtreder wordt - duidelijk zichtbaar, goed leesbaar
en in de officiële talen - een bekendmaking aangebracht, waarin in ieder geval het
volgende is opgenomen:
_a._ aan het hoofd de woorden “Tijdelijke sluiting bedrijfslocatie”;
_b._ de handelsnaam van de overtreder;
_c._ de periode waarin de bedrijfslocatie is gesloten;
_d._ het bepaalde in artikel 2:141 van het Wetboek van Strafrecht;
_e._ het bepaalde in artikel 2:157, eerste en tweede lid, van het Wetboek van Strafrecht.
**7.** Bij ministeriële regeling met algemene werking kunnen nadere regels worden
gesteld met betrekking tot de verzegeling en de bekendmaking.

'''
Art. 14
Overeenkomstige toepas-
sing
'''
Bij het sluiten van de bedrijfslocatie zijn de artikelen 4 tot en met 6 van overeenkom-
stige toepassing.

'''
Art. 15
'''
**1.** Het sluiten van een bedrijfslocatie geschiedt op kosten van de overtreder, tenzij **Kosten sluiting**
deze kosten redelijkerwijs niet of niet geheel te zijnen laste behoren te komen.
**2.** Tot de kosten van het sluiten van een bedrijfslocatie behoren de kosten van voor-
bereiding daarvan, voor zover deze zijn gemaakt na het verstrijken van de termijn
waarbinnen de last tot herstel van de overtreding had moeten worden uitgevoerd.
**3.** De kosten van voorbereiding van het sluiten van een bedrijfslocatie zijn ook ver-
schuldigd, voor zover als gevolg van het alsnog uitvoeren van de last tot herstel van
de overtreding de bedrijfslocatie niet is gesloten.
**4.** Tot de kosten van het sluiten van een bedrijfslocatie behoren tevens de kosten
van vergoeding van schade welke door het sluiten van de bedrijfslocatie aan derden
is toegebracht.
**5.** De Inspecteur stelt de hoogte van de verschuldigde kosten vast bij beschikking in
de zin van artikel 3, eerste lid, van de Landsverordening administratieve rechtspraak.
**6.** Artikel 1 van de Invorderingsverordening 1954 is van overeenkomstige toepassing.

**Landsbesluit administratieve sanctie bij niet nakomen fiscale verplichtingen 14** art. 15


**Art. 16
Vervallen beschikking
sluiting**

**1.** De beschikking die strekt tot het sluiten van de bedrijfslocatie vervalt, voor zover
de beschikking waarbij de last tot herstel van de overtreding is opgelegd, wordt her-
roepen.
**2.** Indien de controle-autoriteit constateert dat een overtreding op de juiste wijze is
hersteld, herroept de Inspecteur bij beschikking in de zin van artikel 3, eerste lid, van
de Landsverordening administratieve rechtspraak, terstond de beschikking waarbij
de last tot herstel van de overtreding is opgelegd.
**3.** Artikel 11, tweede en derde lid, zijn van overeenkomstige toepassing.

**Art. 17
Bezwaar, beroep, hoger
beroep**

**1.** Het bezwaar, beroep of hoger beroep tegen de last tot herstel van de overtreding
heeft mede betrekking op een beschikking die strekt tot het sluiten van de bedrijfslo-
catie of op een beschikking tot vaststelling van de kosten betreffende het sluiten van
de bedrijfslocatie, voor zover de overtreder deze beschikking betwist.
**2.** Het eerste lid is van overeenkomstige toepassing op een verzoek om voorlopige
voorziening.

**Art. 18
Inwerkingtreding** Dit landsbesluit treedt in werking met ingang van 1 oktober 2014.

**Art. 19**^10
**Citeertitel** Dit landsbesluit wordt aangehaald als: Landsbesluit administratieve sanctie bij niet
nakomen fiscale verplichtingen.

'''
10 Gewijzigd bij P.B. 2016-23 met ingang van 21/05/16.
'''
**14** art. 16 **Landsbesluit administratieve sanctie bij niet nakomen fiscale verplichtingen**


### Ministeriële regeling formeel belastingrecht

**Ministeriële regeling met algemene werking van de 28ste mei 2013 ter uitvoering
van diverse bepalingen van de Algemene landsverordening Landsbelastingen
(Ministeriële regeling formeel belastingrecht)**^1

'''
Hoofdstuk I
Transparante vennootschap
'''
'''
Art. 1.1
Identiteit van deelgerech-
tigden
'''
**1.** De gegevens, bedoeld in artikel 3b, vijfde lid, van de Algemene landsverordening
Landsbelastingen, zijn:
_a._ indien de deelgerechtigde een natuurlijk persoon is die voor de belastingheffing
inwoner is van Curaçao:
_1._ de volledige naam;
_2._ de geboortedatum;
_3._ het adres, zoals opgenomen in de bevolkingsadministratie;
_4._ eventueel een correspondentieadres; en
_5._ het ID-nummer of Crib-nummer;
_b._ indien de deelgerechtigde een natuurlijk persoon is die voor de belastingheffing
geen inwoner is van Curaçao:
_1._ de volledige naam;
_2._ de geboortedatum;
_3._ het correspondentieadres;
_4._ het door zijn woonstaat toegekende fiscale identificatienummer;
_c._ indien de deelgerechtigde een lichaam is dat voor de belastingheffing gevestigd
is in Curaçao:
_1._ de statutaire naam;
_2._ de handelsnaam;
_3._ de oprichtingsdatum;
_4._ het adres; en
_5._ het Crib-nummer;
_d._ indien de deelgerechtigde een lichaam is dat voor de belastingheffing niet gevestigd
is op Curaçao:
_1._ de statutaire naam;
_2._ de oprichtingsdatum;
_3._ het adres van de hoofdvestiging;
_4._ het door de vestigingstaat aan het lichaam toegekende fiscale identificatienummer.
**2.** De gegevens, bedoeld in het eerste lid, onderdelen a en b, worden vergezeld door
een afschrift van een geldig paspoort, een geldig rijbewijs, dan wel een geldige
identiteitskaart van de uiteindelijk gerechtigde.
**3.** De gegevens, bedoeld in het eerste lid, onderdeel d, worden vergezeld door een
kopie van een uittreksel uit het handelsregister van het vestigingsland van het lichaam
en een fiscale woonplaatsverklaring, afgegeven door de bevoegde autoriteit van het
fiscale vestigingsland van het lichaam. De gevraagde gegevens mogen niet langer
dan drie maanden voor het verzoek zijn afgegeven.

'''
Art. 1.2
Kopie aandeelhoudersre-
gister
'''
De naamloze vennootschap of besloten vennootschap die het verzoek indient, overlegt
daarbij een kopie van een bijgewerkt aandeelhoudersregister en een kopie van haar
statuten.

1 Zoals deze luidt na wijzigingen, het laatst bij P.B. 2018-52.

**Ministeriële regeling formeel belastingrecht 15** art. 1.2


**Art. 1.3
Vermelding uiteindelijke
gerechtigden**

'''
Indien de aandeelhouders niet de uiteindelijk gerechtigden zijn tot het vermogen
van de verzoekende vennootschap, wordt vermeld wie de uiteindelijk gerechtigden
zijn, waaruit de gerechtigheid bestaat en worden stukken overgelegd waaruit blijkt
dat de (deel-)gerechtigdheid bestaat.
'''
**Art. 1.4
Vaste inrichting** Indien een of meer aandeelhouders of deelgerechtigden buiten Curaçao wonen of
gevestigd zijn, wordt een omschrijving van de activiteiten van de transparante ven-
nootschap gegeven, zodanig dat vastgesteld kan worden of al dan niet sprake is van
een vaste inrichting.

**Art. 1.5
Slotbalans** Indien een bestaande naamloze vennootschap of besloten vennootschap een verzoek
indient om als maatschap aangemerkt te worden, wordt een slotbalans per het einde
van het laatste boekjaar van de belaste periode overgelegd.

'''
Hoofdstuk II
Aangiften
'''
**Art. 2.1
Aangiftebiljet loonbelas-
ting**

**1.** Het model van het aangiftebiljet voor de afdracht van loonbelasting door inhou-
dingsplichtigen, bedoeld in artikel 4 van de Landsverordening op de Loonbelasting
1976 wordt vastgesteld overeenkomstig de bij deze ministeriële regeling behorende
bijlage A^2.
**Aangiftebiljet omzetbelas-
ting
2.** Het model van het aangiftebiljet voor de voldoening van omzetbelasting door
ondernemers, bedoeld in artikel 1, onderdeel d, van de Landsverordening omzetbe-
lasting 1999, wordt vastgesteld overeenkomstig de bij deze ministeriële regeling be-
horende bijlage B^3.

**Art. 2.2**^4
**Elektronische aangifte 1.** Aangifte inkomstenbelasting wordt langs elektronische weg gedaan.

**2.** De Inspecteur kan ondersteuning verlenen bij het invullen van de aangifte inkom-
stenbelasting aan particuliere belastingplichtigen met een inkomen, voor aftrek van
persoonlijke lasten en de buitengewone lasten, dat niet hoger is dan NAf 60.000 of
gezamenlijk NAf 90.000 per jaar in het geval van gehuwden.
**3.** Onder ondersteuning wordt in elk geval verstaan het ondersteunen en hulp bieden
bij het doen van aangifte inkomstenbelasting of het elektronisch indienen van aan-
giften inkomstenbelasting.

'''
Art. 2.3^5
Een inhoudingsplichtige op wie een van de volgende artikelen van dit hoofdstuk van
toepassing is, is tevens verplicht de opgave van artikel 45, derde lid, van de Algemene
landsverordening Landsbelastingen langs elektronische weg te doen.
'''
'''
Art. 2.4^6
Aangifte door administratieplichtigen als bedoeld in artikel 43, eerste lid, van de Al-
gemene landsverordening Landsbelastingen wordt langs elektronische weg gedaan
indien het betreft:
a. de loonbelasting voor meer dan 20 werknemers;
b. de omzetbelasting voor administratieplichtigen met meer dan 20 werknemers;
'''
'''
2 Bijlage A is niet opgenomen in deze bundel.
3 Bijlage B is niet opgenomen in deze bundel.
4 Gewijzigd bij P.B. 2018-52, met ingang van 01/01/19.
5 Ingevoegd bij P.B. 2018-52, met ingang van 01/01/19.
6 Ingevoegd bij P.B. 2018-52, met ingang van 01/01/19.
'''
**15** art. 1.3 **Ministeriële regeling formeel belastingrecht**


_c._ de winstbelasting voor administratieplichtigen met meer dan 20 werknemers.

**Art. 2.5**^7
_Aangifte door administratieplichtigen als bedoeld in artikel 43, eerste lid, van de Algemene
landsverordening Landsbelastingen wordt langs elektronische weg gedaan indien het betreft:
a. de loonbelasting voor meer dan 5 werknemers;
b. de omzetbelasting voor administratieplichtigen met meer dan 5 werknemers;
c. de winstbelasting voor administratieplichtigen met meer dan 5 werknemers._

**Art. 2.6**^8
_Aangifte door administratieplichtigen als bedoeld in artikel 43, eerste lid, van de Algemene
landsverordening Landsbelastingen wordt langs elektronische weg gedaan indien het betreft:
a. de loonbelasting voor 1 of meer dan 1 werknemer;
b. de omzetbelasting voor administratieplichtigen met 1 of meer dan 1 werknemer;
c. de winstbelasting voor administratieplichtigen met 1 of meer dan 1 werknemer._

'''
Art. 2.7^9
'''
**1.** Door de Inspecteur wordt aan de belastingplichtige, de inhoudingsplichtige of de
administratieplichtige, een gebruikersnaam en een daarbij behorend wachtwoord
toegekend, waarmee de belastingplichtige, inhoudingsplichtige of de administratie-
plichtige toegang krijgt tot het webportaal van de Inspecteur. Door middel van dit
webportaal kan de aangifte worden ingevuld en ingediend.
**2.** De Inspecteur draagt er zorg voor dat een elektronische aangifte voldoet aan de
maximale betrouwbaarheids- en vertrouwelijkheidseisen, waaronder in ieder geval
wordt verstaan dat de langs elektronische weg verstuurde gegevens worden gecodeerd
middels encryptie.

'''
Hoofdstuk III
Afwijkende aangiftetermijn en betalingstermijn
'''
'''
Art. 3.1
Aangiftetijdvak kalender-
jaar
'''
Op verzoek van de ondernemer wordt het aangiftetijdvak voor de omzetbelasting
voor de hierna genoemde ondernemers op een kalenderjaar gesteld:
_a._ ondernemers in het bezit van een ontheffing als bedoeld in artikel 8 van de
Landsverordening omzetbelasting 1999;
_b._ ondernemers die geheel of nagenoeg geheel prestaties verrichten waarvoor een
vrijstelling van belasting geldt. De belaste omzet van deze ondernemer mag niet
meer dan NAf 30.000,-- per jaar bedragen.

'''
Art. 3.2
Aangiftetijdvak kalender-
kwartaal
'''
Op verzoek van de ondernemer wordt het aangiftetijdvak voor de omzetbelasting
voor ondernemers met een belaste omzet van niet meer dan NAf 10.000,-- per
kwartaal op een kalenderkwartaal gesteld.

'''
Art. 3.3
Aangiftetijdvak bijzondere
gevallen
'''
In bijzondere gevallen kan de Inspecteur, al dan niet op verzoek van de ondernemer,
onder voorwaarden een afwijkend aangiftetijdvak voor de omzetbelasting van ten
hoogste een kalenderjaar vaststellen.

'''
Art. 3.4
'''
**1.** Het verzoek als bedoeld in artikel 3.1 wordt, indien aan de gestelde voorwaarden **Inwilliging verzoek**
is voldaan, ingewilligd met ingang van de eerste dag van het kalenderjaar volgend
op het jaar waarin het verzoek bij de Inspecteur is ingediend.

7 Ingevoegd bij P.B. 2018-52, met ingang van 01/01/20.
8 Ingevoegd bij P.B. 2018-52, met ingang van 01/01/21.
9 Ingevoegd bij P.B. 2018-52, met ingang van 01/01/19.

**Ministeriële regeling formeel belastingrecht 15** art. 3.4


**2.** Het verzoek als bedoeld in artikel 3.2 wordt, indien aan de gestelde voorwaarden
is voldaan, ingewilligd met ingang van de eerste dag van het kalenderkwartaal volgend
op het kwartaal waarin het verzoek bij de Inspecteur is ingediend.
**3.** Bij een vaststelling van het aangiftetijdvak als bedoeld in artikel 3.3, bepaalt de
Inspecteur de ingangsdatum.

**Art. 3.5
Toepassing afwijkend
tijdvak**

**1.** Een afwijkend aangiftetijdvak is van toepassing zolang de ondernemer aan de
gestelde voorwaarden voldoet.
**2.** Indien niet meer aan de gestelde voorwaarden wordt voldaan, is de ondernemer
gehouden dit voor het einde van het vastgestelde aangiftetijdvak bij de Inspecteur
te melden.

**Art. 3.6
Overeenkomstig tijdvak
betaling**

'''
Indien op grond van de voorgaande bepalingen een afwijkend aangiftetijdvak voor
de omzetbelasting is vastgesteld, wordt, in afwijking van het bepaalde in artikel 14,
tweede lid, van de Algemene landsverordening Landsbelastingen, het tijdvak waarover
de omzetbelasting moet worden betaald overeenkomstig het afwijkende aangifte-
tijdvak vastgesteld.
'''
'''
Hoofdstuk IV
Administratieve boeten
'''
**Art. 4.1
Definitie** In dit Hoofdstuk wordt onder “boete” verstaan: de sanctie die de Inspecteur ingevolge
Hoofdstuk III van de Algemene landsverordening Landsbelastingen kan opleggen
met betrekking tot belastingen als bedoeld in artikel 1, eerste lid, van genoemde
landsverordening, overeenkomstig de in dit Hoofdstuk vastgestelde regels.

**Art. 4.2
Inspecteur is gebonden 1.** Bij het vaststellen van de boete wijkt de Inspecteur niet af van de percentages en
bedragen, die in dit Hoofdstuk zijn vermeld.

**2.** De boete kan worden verminderd wanneer sprake is van een wanverhouding
tussen de ernst van het feit en de opgelegde boete, of wanneer de omstandigheden
die hebben geleid tot het beboetbare feit buiten de directe invloedssfeer van belang-
hebbende liggen. De vermindering kan slechts worden verleend wanneer een bezwaar-
schrift, als bedoeld in artikel 29 van de Algemene landsverordening Landsbelastingen,
tegen de boete is ingediend.

**Art. 4.3
Recidive 1.** Bij het opleggen van een verzuimboete voor een belasting welke bij wege van
aanslag wordt geheven, houdt de Inspecteur rekening met het aantal keren dat in de
voorafgaande vier belastingjaren een verzuim is geconstateerd. De vorige volzin is
ook van toepassing bij het opleggen van een verzuimboete voor de winstbelasting
welke ingevolge Hoofdstuk II van de Landsverordening op de winstbelasting 1940 op
aangifte moet worden voldaan.

**2.** Bij het opleggen van een verzuimboete voor een belasting, anders dan de winst-
belasting, welke op aangifte moet worden voldaan of afgedragen, houdt de Inspecteur
voor de gevallen, bedoeld in de artikelen 4.5 en 4.6, rekening met het aantal keren
dat in de voorafgaande 9 tijdvakken een verzuim is geconstateerd.
**3.** Voor de toepassing van het eerste en het tweede lid wordt geen onderscheid ge-
maakt tussen de verzuimen wegens het niet of niet tijdig doen van de aangifte en de
verzuimen wegens het niet, gedeeltelijk niet dan wel niet tijdig betalen van de belas-
ting.
**4.** Voor de toepassing van het tweede lid worden slechts die verzuimen in aanmerking
genomen welke betrekking hebben op tijdvakken die vallen in een periode van 24
maanden.

**15** art. 3.5 **Ministeriële regeling formeel belastingrecht**


**5.** Indien er sprake is van kwijtschelding van de boete wegens het afwezig zijn van
alle schuld, telt dit verzuim niet mee in de verzuimenreeks.
**6.** De verzuimenreeks, bedoeld in het eerste en het tweede lid, wordt toegepast per
belastingmiddel.
**7.** Indien de Inspecteur voor de belastingen genoemd in het tweede lid het doen van
een jaaraangifte heeft goedgekeurd, dan is op verzuimen het eerste lid van toepassing.

'''
Art. 4.4
Te laat aangegeven aan-
slagbelasting
'''
**1.** Indien de belastingplichtige de aangifte voor een belasting welke bij wege van
aanslag wordt geheven niet of niet tijdig heeft gedaan, legt de Inspecteur in geval
van een:
_a._ eerste verzuim een boete op van NAf 250,--;
_b._ tweede verzuim een boete op van NAf 500,--;
_c._ derde verzuim een boete op van NAf 1.000,--;
_d._ een vierde verzuim een boete op van NAf 1.500,--.
**2.** Indien de belastingplichtige stelselmatig niet voldoet aan de verplichtingen, be-
doeld in het eerste lid, legt de Inspecteur een boete op van maximaal NAf 2.500,--.
**3.** Het eerste en tweede lid zijn ook van toepassing indien de belastingplichtige de
aangifte voor de winstbelasting, welke ingevolge Hoofdstuk II van de Landsverorde-
ning op de winstbelasting 1940 op aangifte moet worden voldaan, niet of niet tijdig
heeft gedaan.
**4.** Een boete blijft achterwege indien door de werking van artikel 41B van de Lands-
verordening op de inkomstenbelasting 1943 de aanslag op nihil of op een negatief
bedrag wordt vastgesteld.

'''
Art. 4.5
Te laat aangegeven aangif-
tebelasting
'''
**1.** Indien de belastingplichtige of de inhoudingsplichtige de aangifte voor een belas-
ting, anders dan de winstbelasting, welke op aangifte moet worden voldaan of afge-
dragen niet of niet tijdig heeft gedaan, legt de Inspecteur in geval van een:
_a._ eerste verzuim geen boete op;
_b._ tweede verzuim een boete op van NAf 50,--;
_c._ derde of volgend verzuim een boete op van NAf 100,--.
**2.** Indien de belastingplichtige of de inhoudingsplichtige stelselmatig niet voldoet
aan de verplichtingen, bedoeld in het eerste lid, legt de Inspecteur een boete op van
maximaal NAf 2.500,--.

'''
Art. 4.6
Verzuimboeten te laat be-
talen aangiftebelasting
'''
**1.** Indien de belastingplichtige of de inhoudingsplichtige de belasting, anders dan
de winstbelasting, die op aangifte moet worden voldaan of afgedragen niet, gedeel-
telijk niet dan wel niet tijdig heeft betaald, legt de Inspecteur in geval van een:
_a._ eerste verzuim een boete op van 5% van het bedrag van de naheffingsaanslag met
een minimum van NAf 50,-- en een maximum van NAf 2.500,--;
_b._ tweede verzuim een boete op van 10% van het bedrag van de naheffingsaanslag
met een minimum van NAf 100,-- en een maximum van NAf 5.000,--;
_c._ derde of volgend verzuim een boete op van 15% van het bedrag van de naheffings-
aanslag met een minimum van NAf 150,-- en een maximum van NAf 10.000,--.
**2.** Indien de belastingplichtige voor de winstbelasting die op aangifte moet worden
voldaande belasting niet, gedeeltelijk niet dan wel niet tijdig heeft betaald, legt de
Inspecteur in geval van een:
_a._ eerste verzuim een boete op van 5% van het bedrag van de naheffingsaanslag met
een minimum van NAf 250,-- en een maximum van NAf 2.500,--;
_b._ tweede verzuim een boete op van 10% van het bedrag van de naheffingsaanslag
met een minimum van NAf 500,-- en een maximum van NAf 5.000,--;
_c._ derde of volgend verzuim een boete op van 15% van het bedrag van de naheffings-
aanslag met een minimum van NAf 1.000,-- en een maximum van NAf 10.000,--.

**Ministeriële regeling formeel belastingrecht 15** art. 4.6


**Art. 4.7
Verzuimboeten te weinig
aangegeven belasting**

'''
In afwijking van artikel 4.6 wordt een verzuimboete opgelegd van 15% van het bedrag
van de naheffingsaanslag, met een minimum van NAf 25,-- en een maximum van
NAf 10.000,--, indien de belastingplichtige of de inhoudingsplichtige de belasting
die op aangifte moet worden voldaan of afgedragen niet, gedeeltelijk niet dan wel
niet tijdig heeft betaald, omdat te weinig is aangegeven.
'''
**Art. 4.8
Opzet of grove schuld 1.** Indien het aan opzet dan wel grove schuld van de belastingplichtige te wijten is
dat, met betrekking tot een belasting welke bij wege van aanslag wordt geheven, de
aanslag te laag is vastgesteld of anderszins te weinig belasting is geheven legt de in-
specteur een boete op van 25% van de in artikel 20, tweede lid, van de Algemene
landsverordening Landsbelastingen omschreven grondslag voor de boete ingeval
van grove schuld dan wel 50% ingeval van opzet.

**2.** Indien het aan opzet dan wel grove schuld van de belastingplichtige of de inhou-
dingsplichtige te wijten is dat, met betrekking tot een belasting welke op aangifte
moet worden voldaan of afgedragen niet, gedeeltelijk niet dan wel niet tijdig is be-
taald, legt de Inspecteur ten boete op van 25% van de in artikel 21, tweede lid, van de
Algemene landsverordening Landsbelastingen omschreven grondslag voor de boete
ingeval van grove schuld dan wel 50% ingeval van opzet.
**3.** De Inspecteur legt in geval er sprake is van opzet waarbij de ernst van de gedraging
tot een hogere boete dan die in het eerste of tweede lid aanleiding geeft, een boete
op van 100%. Hiertoe is in elk geval aanleiding indien sprake is van ernstige en ver-
houdingsgewijs omvangrijke fraude.
**4.** In geval van recidive wordt de vergrijpboete bij grove schuld verhoogd tot 50%
en de vergrijpboete bij opzet tot 100%. Van recidive is sprake indien aan de belasting-
plichtige of de inhoudingsplichtige voor hetzelfde belastingmiddel in de periode van
vijf jaren voorafgaand aan de door de Inspecteur op te leggen vergrijpboete reeds
eerder een vergrijpboete is opgelegd, een transactie is voldaan, dan wel strafoplegging
heeft plaatsgevonden.
**5.** Indien op grond van een samenhangend complex van feiten over enig belastingjaar
terzake van meerdere belastingmiddelen aanslagen met een vergrijpboete worden
opgelegd die uiteindelijk drukken op één belastingplichtige of inhoudingsplichtige,
wordt de hoogste boete gehandhaafd en worden de overige boeten elk verminderd
tot de helft.

**Art. 4.9
Vrijwillige verbetering 1.** Indien de belastingplichtige of de inhoudingsplichtige de gemaakte fouten uit eigen
beweging herstelt, legt de Inspecteur ingeval van grove schuld dan wel opzet in plaats
van een vergrijpboete een verzuimboete op van 5% dan wel 10% van de grondslag
van de boete.
In afwijking van de vorige volzin legt de Inspecteur ingeval van ernstige en verhou-
dingsgewijs omvangrijke fraude dan wel van recidive als bedoeld in artikel 7, vierde
lid, laatste volzin, in plaats van een vergrijpboete een verzuimboete op van 15% van
de grondslag van de boete.

**2.** Van herstel uit eigen beweging van fouten als bedoeld in het eerste lid is geen
sprake, indien belanghebbende een boekenonderzoek is aangezegd of indien een
branche- of fraudeonderzoek aan de gang is, dan wel is aangekondigd en belangheb-
bende redelijkerwijs moet vermoeden dat de resultaten van een dergelijk onderzoek
hem zullen kunnen raken.

**15** art. 4.7 **Ministeriële regeling formeel belastingrecht**


'''
Hoofdstuk V
Uitstel uitspraak op bezwaarschrift
'''
'''
Art. 5.1
Termijn doen van uit-
spraak
'''
De Inspecteur kan de termijn voor het doen van een uitspraak, bedoeld in artikel 30,
tweede lid, van de Algemene landsverordening Landsbelastingen, verlengen met ten
hoogste negen maanden, indien:
_a._ de belanghebbende niet of niet volledig voldoet aan het verzoek van de Inspecteur,
gegevensdragers, of de inhoud daarvan, waarvan de inzage van belang kan zijn voor
de afhandeling van het bezwaarschrift, voor dit doel beschikbaar te stellen;
_b._ de belanghebbende niet of niet volledig voldoet aan het verzoek van de Inspecteur,
gegevens en inlichtingen te verstrekken welke voor de afhandeling van het bezwaar-
schrift van belang kunnen zijn;
_c._ de Inspecteur met betrekking tot het geschil waartegen het bezwaar is gericht, de
uitkomst van een vergelijkbare procedure voor de Raad van Beroep voor belastingza-
kenwil afwachten;
_d._ de Inspecteur een verzoek om inlichtingen, welke voor de afhandeling van het
bezwaarschrift van belang kan zijn, aan een bevoegde autoriteit van een andere staat
heeft gedaan;
_e._ een boekenonderzoek, ingesteld door de Inspecteur of door de Stichting Overheids
Belastingaccountantsbureau, welke voor de afhandeling van het bezwaarschrift van
belang kan zijn, nog niet is afgerond;
_f._ het bezwaarschrift niet is gemotiveerd en de belanghebbende het verzuim, binnen
twee maanden na het indienen van het bezwaarschrift, niet heeft hersteld.

'''
Hoofdstuk VI
Schadevergoeding bezwaarschrift
'''
**Art. 6.1**
Een vergoeding van de kosten, bedoeld in artikel 32a, eerste lid, van de Algemene **Vergoeding kosten**
landsverordening Landsbelastingen, kan uitsluitend betrekking hebben op kosten
van door een derde beroepsmatig verleende rechtsbijstand.

'''
Art. 6.2
'''
**1.** Het bedrag van de kosten, bedoeld in artikel 6.1, wordt in de uitspraak op bezwaar **Bedrag vergoeding kosten**
vastgesteld overeenkomstig de in artikel 6.4 opgenomen berekeningswijze.
**2.** Indien een partij gedeeltelijk in het gelijk is gesteld, kan het op grond van het
eerste lid vastgestelde bedrag worden verminderd.
**3.** In bijzondere omstandigheden kan van het eerste lid worden afgeweken.

'''
Art. 6.3
'''
**1.** Samenhangende zaken worden voor de toepassing van artikel 6.2, eerste lid, be- **Samenhangende zaken**
schouwd als één zaak.
**2.** Samenhangende zaken zijn: gelijktijdig of nagenoeg gelijktijdig door één of meer
belanghebbenden tegen nagenoeg identieke beschikkingen op vergelijkbare gronden
ingediende bezwaarschriften, waarin rechtsbijstand, bedoeld in artikel 6.1, is verleend
door één of meer personen die deel uitmaken van hetzelfde samenwerkingsverband
en van wie de werkzaamheden in elk van de zaken nagenoeg identiek konden zijn.

**Art. 6.4**
Het bedrag van de kosten van door een derde beroepsmatig verleende rechtsbijstand, **Berekeningswijze**
wordt vastgesteld door aan de verrichte proceshandelingen punten toe te kennen
overeenkomstig onderstaand overzicht (A) en die punten te vermenigvuldigen met
de waarde per punt (B) en met de toepasselijke wegingsfactor (C).

**Ministeriële regeling formeel belastingrecht 15** art. 6.4


'''
A. Punten per proceshandeling Punten
'''
1. Bezwaarschrift 1
2. Verschijnen ter hoorzitting 1

'''
B. Waarde per punt
1 punt = NAf 100,--
'''
'''
C. Gewicht van de zaak Wegingsfactor
De zaak als zodanig
'''
1. Zeer licht 0,25
2. Licht 0,5
3. Gemiddeld 1
4. Zwaar 1,5
5. Zeer zwaar 2

'''
Samenhangende zaken
'''
1. Minder dan vier zaken 1
2. Vier of meer zaken 1,5

'''
Hoofdstuk VII
Facturen en kassabonnen
'''
**Art. 7.1**^10
**Geen factuurplicht 1.** Onder de in het tweede en derde lid van dit artikel te stellen voorwaarden, hoeft
een administratieplichtige, gelet op het bepaalde in artikel 44, tiende lid, van de Al-
gemene landsverordening Landsbelastingen, ten aanzien van hierna genoemde leve-
ringen en diensten geen factuur uit te reiken:
_a._ openbaar personenvervoer over de weg;
_b._ gelegenheid geven tot parkeren van motorrijtuigen;
_c._ toegang verlenen tot culturele, sportieve of recreatieve activiteiten;
_d._ verhuur van strandbedden;
_e._ verkoop van nummers en loten voor loterijen.
**Bewijs van betaling 2.** De administratieplichtige die ten aanzien van de in het eerste lid genoemde leve-
ringen en diensten geen factuur uitreikt, dient ter zake een doorlopend genummerd
bewijs van betaling aan de afnemer te verstrekken. Op het bewijs van betaling dient
in ieder geval de naam of handelsnaam van de administratieplichtige, een omschrij-
ving van de levering of dienst, de vergoeding inclusief eventueel verschuldigde om-
zetbelasting en een dagtekening te worden vermeld.

**3.** De omzet die gerealiseerd wordt met de in het eerste lid genoemde leveringen en
diensten dient dagelijks, aan de hand van een kopie van de verstrekte bewijzen van
betaling of anderszins, in de administratie te worden vastgelegd. Indien betaling
middels een automaat plaatsvindt, dient de automaat de dagelijkse gerealiseerde
omzet vast te leggen.

**Art. 7.2**^11
**Verplichte uitreiking kas-
sabon**

**1.** Administratieplichtigen wiens activiteiten geheel of gedeeltelijk bestaan uit de
hierna genoemde leveringen of diensten, zijn op grond van artikel 44a, eerste lid, van
de Algemene landsverordening Landsbelastingen verplicht om ter zake van deze le-
veringen en diensten een kassabon uit te reiken:
_a._ verstrekken van spijzen en dranken;

'''
10 Gewijzigd bij P.B. 2014-81, met ingang van 01/10/14.
11 Gewijzigd bij P.B. 2014-81, met ingang van 01/10/14.
'''
**15** art. 7.1 **Ministeriële regeling formeel belastingrecht**


_b._ verkoop van consumentenartikelen;
_c._ reparatie van consumentenartikelen;
_d._ persoonlijke dienstverlening.

**2.** Op schriftelijk verzoek kan aan een administratieplichtige, wiens activiteiten geheel **Ontheffing**
of gedeeltelijk bestaan uit de in het eerste lid genoemde leveringen of diensten, doch
in wiens bedrijfsvoering het gebruikelijk is om ter zake een factuur uit te reiken, door
de Directeur van de Stichting Overheids Belastingaccountantsbureau een ontheffing
van de verplichting om een kassabon uit te reiken worden verleend. De administra-
tieplichtige aan wie een ontheffing van de verplichting om een kassabon uit te reiken
wordt verleend, is gehouden ter zake van zijn leveringen en diensten een factuur, als
bedoeld in artikel 44 van de Algemene landsverordening Landsbelastingen, uit te
reiken.
**3.** Onder de voorwaarde dat de dagelijkse verkopen middels een door de Directeur
van de Stichting Overheids Belastingaccountantsbureau vastgesteld overzicht worden
bijgehouden, hoeft ter zake van de verkoop van etenswaren en dagbladen door
straatventers en de verkoop van opwaardeerkaarten geen kassabon te worden uitge-
reikt.
**4.** Ter zake van het verstrekken van spijzen en dranken en de verkoop van consumen- **Verkoopautomaten**
tenartikelen vanuit verkoopautomaten hoeft geen kassabon te worden uitgereikt.
Dit onder de voorwaarde dat de verkoopautomaat de gerealiseerde omzet registreert
en dat de exploitant van een verkoopautomaat de gerealiseerde omzet in zijn admi-
nistratie vastlegt.

**Art. 7.3**^12
Het fiscaal logo, bedoeld in artikel 44a, vierde lid, onderdeel d, van de Algemene **Fiscaal logo**
landsverordening Landsbelastingen, heeft een afmeting van minimaal 128x128 pixels
en wordt als volgt vastgesteld:

12 Toegevoegd bij P.B. 2014-81, met ingang van 01/10/14.

**Ministeriële regeling formeel belastingrecht 15** art. 7.3


'''
Hoofdstuk VIII
Uiteindelijk gerechtigden
'''
**Art. 8.1
Ontheffing** Aan rechtspersonen die zijn aangesloten bij een effectenbeurs die lid is van de Fédé-
ration Internationale des Bourses de Valeurs en die niet gevestigd is in een land dat
niet voldoet aan ten minste 10 van de door de Financial Action Task Force (FATF)
voorgestelde kernaanbevelingen, wordt ontheffing verleend van het bepaalde bij
artikel 45, zesde lid, van de Algemene landsverordeningen Landsbelastingen.

'''
Hoofdstuk IX
Ontheffing geheimhouding
'''
'''
[Gereserveerd.]
'''
'''
Hoofdstuk X
Voorkoming dubbele belasting internationale organisaties
'''
'''
[Gereserveerd.]
'''
'''
Hoofdstuk XI
Internationale bijstandsverlening
'''
**Art. 11.1
Internationale bijstand** Onder dringende redenen, bedoeld in artikel 62, vijfde lid, van de Algemene landsver-
ordening Landsbelastingen, wordt verstaan:
_a._ een vermoeden van (internationale) belastingfraude;
_b._ het risico dat als gevolg van de kennisgeving bewijsmateriaal verloren zou kunnen
gaan;
_c._ het dreigende verstrijken van heffingstermijnen of andere termijnen in het (verzoe-
kende) land waarvoor de inlichtingen zijn bestemd; en
_d._ door betrokkene veroorzaakte onduidelijkheid met betrekking tot de vraag waar
de te onderzoeken boekhouding of administratie zich bevindt.

'''
Hoofdstuk XII
Slotbepalingen
'''
**Art. 12.1
Intrekking oude regelin-
gen**

'''
De Beschikking ontheffing factureringsplicht omzetbelasting^13 , de Ministeriële be-
schikking administratieve boeten^14 , de Beschikking uitstel uitspraak^15 en de Beschik-
king proceskostenvergoeding bezwaarfase belastingzaken^16 worden ingetrokken.
'''
**Art. 12.2
Citeertitel** Deze ministeriële regeling wordt aangehaald als Ministeriële regeling formeel belas-
tingrecht.

**Art. 12.3
Inwerkingtreding** Deze ministeriële regeling treedt in werking met ingang van de datum van bekend-
making en werkt terug tot en met 1 mei 2013, met uitzondering van Hoofdstuk I, dat
terugwerkt tot en met 1 januari 2012.

'''
13 P.B. 1999-97, zoals gewijzigd bij P.B. 1999-146.
14 P.B. 2001-148.
15 P.B. 2002-53.
16 P.B. 2010-65.
'''
**15** art. 8.1 **Ministeriële regeling formeel belastingrecht**


**Nota van Toelichting behorende bij de Ministeriële regeling formeel belastingrecht
17**

_§ 1. Algemeen_
Met de onderhavige ministeriële regeling wordt uitvoering gegeven aan de artikelen
3b, vijfde lid, 6, vijfde en zesde lid, 8, vierde lid, 14, derde lid, 30, derde lid, 32a, derde
lid, 39, eerste lid, onderdeel a, 44, tiende lid, 44a, eerste en zevende lid, 45, achtste
lid, 50, derde lid, 60 en 62, vijfde lid, van de Algemene landsverordening Landsbelas-
tingen.

_§ 2. Financiële paragraaf_
Aan deze ministeriële regeling zijn geen bijzondere financiële lasten verbonden. Deze
ministeriële regeling strekt slechts ter uitvoering van de in de Algemene landsveror-
dening Landsbelastingen neergelegde wettelijke bepalingen. Voor zover ter uitvoering
van deze bepalingen in het verleden al uitvoeringsbepalingen zijn opgesteld, worden
deze thans in deze ministeriële regeling gebundeld.

_§ 3. Artikelsgewijze toelichting
Hoofdstuk I_
In verband met het streven van de regering naar een grotere diversificatie en flexibi-
liteit van het belastingregime voor kapitaalvennootschappen in Curaçao, is besloten
om de transparante vennootschap in het Curaçaose belastingregime te introduceren.
Op deze manier wordt mede getracht om Curaçao aantrekkelijker te maken voor
buitenlandse investeerders.
Indien een naamloze vennootschap of een besloten vennootschap een beroep wenst
te doen op deze nieuwe regeling, die opgenomen is in Algemene landsverordening
Landsbelastingen, zal het bestuur - conform artikel 3b, eerste lid, van de Algemene
landsverordening Landsbelastingen - daartoe een verzoek moeten indienen bij de
Inspecteur. Het verzoek dient in ieder geval de in deze ministeriële regeling vermelde
gegevens te bevatten. Op deze manier moet worden bereikt dat er duidelijkheid be-
staat omtrent de identiteit van de deelgerechtigde(n).

_Artikel 1.1_
In dit artikel wordt een onderscheid gemaakt tussen personen die in Curaçao wonen
en lichamen die daar gevestigd zijn en natuurlijke personen en lichamen die elders
wonen dan wel gevestigd zijn.
Voor de tekst is aangesloten bij artikel 45, zevende lid, van de Algemene landsveror-
dening Landsbelastingen.
Voor de natuurlijk persoon die voor de belastingheffing geen inwoner is van Curaçao
kan ook een in het woonland van overheidswege afgegeven geldig identificatiemiddel
gebruikt worden.

_Artikel 1.2_
Het bestuur van een naamloze vennootschap, respectievelijk besloten vennootschap
is op basis van de artikelen 109 en 209 van Boek 2 van het Burgerlijk Wetboek verplicht
een register bij te houden, waarin de namen en adressen van alle houders van aandelen
zijn opgenomen. Het aan de Inspecteur overdragen van een bewerkt aandeelhouders-
register brengt dientengevolge geen extra kosten met zich mee voor de verzoekende
vennootschap.

_Artikel 1.3_

17 P.B. 2013-63. De Nota van Toelichting behorende bij de wijziging van de Ministeriële regeling formeel belasting-
recht (P.B. 2014-81) is hierna opgenomen.

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
In de praktijk kunnen anderen dan de aandeelhouders, uiteindelijk gerechtigd zijn
tot het vermogen van de vennootschap. Te denken valt bijvoorbeeld aan gecertifi-
ceerde aandelen.
'''
'''
Artikel 1.4
Indien geconstateerd wordt dat sprake is van een vaste inrichting, zijn hieraan belas-
tinggevolgen verbonden. Artikel 1.5 Deze gegevens worden gevraagd om de Inspecteur
tijdig in staat te stellen de belastingheffing te verzekeren.
'''
'''
Hoofdstuk II
Artikel 2.1
Op grond van artikel 6, vijfde lid, van de Algemene landsverordening Landsbelastingen
wordt het model van de aangiftebiljetten bij ministeriële regeling met algemene
werking vastgesteld. Tot op heden gebeurde dit voor elke aangifte bij een afzonderlijke
ministeriële regeling. Vanwege de wenselijkheid om alle uitvoeringsregelingen
aangaande het formele belastingrecht in een ministeriële regeling op te nemen,
worden de aangiften thans als bijlagen bij deze regeling opgenomen. Om praktische
redenen worden op dit moment alleen de aangiftebiljetten voor de loon- en omzet-
belasting opgenomen. Zodra de aangiftebiljetten 2013 voor de inkomsten- en winst-
belasting beschikbaar zijn, zal de ministeriële regeling op dit punt worden aangepast.
'''
'''
Artikel 2.2
Sinds september 2011 biedt de Inspectie der Belastingen aan belastingplichtigen en
inhoudingsplichtigen de mogelijkheid om elektronisch aangifte voor de loon- en/of
omzetbelasting te doen. De wettelijke basis voor deze mogelijkheid is neergelegd in
artikel 6, zesde lid, van de Algemene landsverordening Landsbelastingen. Uit dat ar-
tikel volgt, dat bij ministeriële regeling met algemene werking kan worden bepaald
dat en onder welke voorwaarden het toegelaten wordt om langs elektronische weg
aangifte te doen. Dit artikel strekt tot uitvoering van die bepaling.
In de huidige samenleving is het steeds meer vanzelfsprekend, dat het berichtenver-
keer tussen partijen via elektronische weg plaatsvindt. Dit geldt ook voor het verkeer
tussen burgers en overheid. Gelet op de vertrouwelijkheid van de informatie die tussen
burgers en overheid wordt uitgewisseld, is het daarbij echter van het grootste belang
dat de betrouwbaarheid en vertrouwelijkheid van die berichten maximaal gewaar-
borgd is.
Door de ontwikkelingen in de elektronische communicatietechnologie geldt dit thans
in voldoende mate voor het via een beveiligd webportaal indienen van belastingaan-
giften.
Het webportaal dat op het Internet aan belastingplichtigen en inhoudingsplichtigen
wordt aangeboden om de aangiften in te vullen en in te dienen, is op diverse manieren
beveiligd. Op deze wijze wordt gewaarborgd dat de aangifte via elektronische weg
voldoet aan de maximale vereisten van betrouwbaarheid en vertrouwelijkheid. Het
reikt uiteraard te ver om in deze toelichting de details op te nemen van de door de
Inspectie der Belastingen ondernomen stappen, aangezien een omschrijving van
deze details inzicht zou geven in de wijze waarop de veiligheid van het webportaal
wordt gewaarborgd. Dit is uiteraard niet de bedoeling.
In ieder geval kan worden opgemerkt, dat de door een belastingplichtige of inhou-
dingsplichtige verstrekte gegevens versleuteld naar de Inspecteur worden verstuurd.
Daarnaast zijn maatregelen getroffen, zodat de authenticiteit en integriteit van de
aangifte gewaarborgd is. Met authenticiteit wordt bedoeld, dat de oorsprong van de
aangifte duidelijk moet zijn. Met andere woorden, vast moet staan dat de aangifte
ook daadwerkelijk afkomstig van belastingplichtige of inhoudingsplichtige is. De
integriteit van een aangifte ziet op het feit, dat de aangifte alleen de Inspectie bereikt
en niet door een onbevoegde kan worden ingezien of gewijzigd.
'''
'''
Hoofdstuk III
Artikel 3.1
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


Uitgangspunt voor de omzetbelasting is dat een ondernemer maandelijks aangifte
doet.
Voor ondernemers die op grond van de zogenoemde kleine ondernemersregeling
ontheven zijn van de verplichting om de verschuldigde belasting te voldoen en onder-
nemers die geheel of nagenoeg geheel, dat wil zeggen voor meer dan 90 procent,
vrijgestelde prestaties verrichten, is het echter niet wenselijk om maandelijks een
(nihil)aangifte te doen. Deze aangifte zal immers niet dan wel tot een gering bedrag
aan verschuldigde betaling leiden, terwijl de maandelijkse aangifteplicht wel tot een
administratieve last voor zowel de ondernemer als de Inspecteur leidt. Om deze reden
wordt in artikel 3.1 de mogelijkheid geboden om op verzoek aan deze ondernemers
toe te staan om eenmaal per jaar een zogenoemde jaaraangifte te doen. Voor onder-
nemers die nagenoeg geheel vrijgestelde prestaties verrichten, mag de belaste omzet
maximaal NAf 30.000,-- op jaarbasis bedragen.

_Artikel 3.2_
Om de administratieve lasten voor ondernemers en de Inspecteur verder te vermin-
deren, is het wenselijk de mogelijkheid van een kwartaalaangifte te introduceren.
Ondernemers die niet in aanmerking komen voor een jaaraangifte, maar een omzet
genereren van maximaal NAf 10.000,-- per kwartaal, kunnen bij de Inspecteur een
verzoek indienen om als kwartaalaangever aangemerkt te worden. In plaats van een
maandelijkse aangifte, kunnen deze ondernemers met een aangifte per kalender-
kwartaal volstaan.

_Artikel 3.3_
Daarnaast is het wenselijk om voor bijzondere gevallen een afzonderlijke regeling
op te nemen. Indien de mogelijkheid van een jaar- of kwartaalaangifte niet aanwezig
is, maar een maandelijkse aangifteplicht niet wenselijk of onpraktisch is, kan de In-
specteur – al dan niet op verzoek van de ondernemer – een ander afwijkend aangifte-
tijdvak vaststellen. Hierbij kan gedacht worden aan ondernemers die slechts in een
bepaalde periode actief zijn, zoals met carnaval of andere evenementen.

_Artikel 3.4_
In artikel 3.4 is bepaald dat een verzoek voor een afwijkend aangiftetijdvak met ingang
van het eerstvolgende kalenderkwartaal of –jaar wordt ingewilligd. Een verzoek kan
derhalve niet tijdens een lopend tijdvak of met terugwerkende kracht worden inge-
willigd. Een verzoek wordt uiteraard alleen ingewilligd indien aan de gestelde voor-
waarden is voldaan, zulks ter beoordeling van de Inspecteur. Voor het in artikel 3.3
bedoelde afwijkende tijdvak, bepaalt de Inspecteur de ingangsdatum.

_Artikel 3.5_
Indien een verzoek om toepassing van een afwijkend tijdvak is ingewilligd, blijft dit
afwijkende tijdvak van toepassing zolang als de ondernemer aan de gestelde voor-
waarden voor toekenning van het afwijkende tijdvak voldoet. De ondernemer hoeft
derhalve niet periodiek, bijvoorbeeld jaarlijks, een hernieuwd verzoek bij de Inspecteur
in te dienen. Voldoet de ondernemer niet meer aan de gestelde voorwaarden, dan is
hij gehouden dit voor het eind van het tijdvak aan de Inspecteur te melden. Na afloop
van het afwijkende tijdvak dient de ondernemer dan weer maandelijks aangifte te
doen, tenzij tijdig een geldig verzoek voor een ander afwijkend tijdvak (bijvoorbeeld
voor kwartaalaangifte) is ingediend en dit verzoek is ingewilligd.

_Artikel 3.6_
Ter voorkoming van misverstanden is in artikel 3.6 expliciet bepaald dat het tijdvak
waarover de omzetbelasting moet worden betaald, gekoppeld is aan het aangiftetijd-
vak.
Indien aan een ondernemer wordt toegestaan om per kwartaal of jaar aangifte te
doen, dient ook de betaling – in afwijking van het bepaalde in artikel 14, tweede

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
lid,van de Algemene landsverordening Landsbelastingen, per kwartaal of jaar plaats
te vinden.
'''
'''
Hoofdstuk IV
In Hoofdstuk III van de Algemene landsverordening Landsbelasting zijn bepalingen
inzake de administratieve boete opgenomen; de maximaal op te leggen verzuim- en
vergrijpboetes zijn vermeld. De Inspecteur bepaalt de zwaarte van de boete.
Ter bevordering van de uniformiteit wordt het wenselijk geacht voor alle belastingen
waarop de Algemene landsverordening Landsbelastingen van toepassing is de
richtlijnen inzake de toepassing van boeten op overeenkomstige wijze vast te stellen.
Door de boeterichtlijnen wordt duidelijkheid omtrent het toegepaste beleid bevorderd.
Voor de duidelijkheid wordt opgemerkt dat de boete die overeenkomstig het bepaalde
in dit Hoofdstuk door de Inspecteur wordt opgelegd, niet in mindering op de opbrengst
uit arbeid, bedrijf en beroep, bedoeld in de Landsverordening op de inkomstenbelas-
ting 1943 , dan wel de winst van een lichaam als bedoeld in de Landsverordening op
de winstbelasting 1940 kan worden gebracht.
'''
'''
Artikel 4.1
De in dit Hoofdstuk vastgelegde regels inzake de toepassing van boetes hebben alleen
betrekking op niet-nakoming van verplichtingen met betrekking tot de belastingen
waarop de Algemene landsverordening Landsbelastingen van toepassing is. Artikel
1 van de genoemde landsverordening geeft een limitatieve opsomming van deze
belastingen.
'''
'''
Artikel 4.2
De Inspecteur mag bij het vaststellen van de boete niet afwijken van de percentages
en bedragen die in dit Hoofdstuk genoemd worden. De bepaling beoogt eenvormig-
heid te krijgen bij het opleggen van boeten. Het tweede lid geeft een basis op grond
waarvan de Inspecteur de boete kan matigen.
Tot de omstandigheden die kunnen leiden tot een matiging van de boete behoren
een wanverhouding tussen de ernst van het feit en de op te leggen of opgelegde boete,
als ook verzachtende omstandigheden. Bij een wanverhouding gaat het om het ant-
woord op de vraag hoe ernstig de schending van de norm in het concrete geval moet
worden opgevat. De afweging moet leiden tot een straf die in verhouding staat tot
de ernst van het feit (proportionaliteit).
Verzachtende omstandigheden hebben geleid tot het beboetbare feit, maar die liggen
buiten de directe invloedsfeer van de belastingplichtige. Een strafverzwarende om-
standigheid is volgens de jurisprudentie het openen van een bankrekening in een
land met een bankgeheim mede om de inkomsten daaruit op een listige wijze voor
de Inspecteur verborgen te houden.
Voor de beoordeling of verzachtende omstandigheden tot matiging van de boete
aanleiding kunnen geven, kan het van belang zijn of, en in hoeverre, de belastingplich-
tige maatregelen heeft getroffen en had kunnen treffen om het vergrijp te voorkomen
dan wel het vergrijp te herstellen. De stelplicht en bewijslast voor strafverzwarende
factoren rusten op de Inspecteur. Voor strafverminderende factoren rusten de stel-
plicht en bewijslast op belastingplichtige.
In verband met dit laatste, als ook om te bereiken dat de bepalingen omtrent de
strafvermindering door de Inspecteur terughoudend worden toegepast, is bepaald
dat de vermindering slechts kan worden verleend in het kader van de behandeling
van een tegen de boete ingediend bezwaarschrift.
'''
'''
Artikel 4.3
Bij het opleggen van een boete dient de Inspecteur rekening te houden met het aantal
verzuimen. Hierbij wordt aan de ene kant een onderscheid gemaakt tussen aanslag-
belastingen en de winstbelasting die op aangifte moet worden voldaan en aan de
andere kant de overige afdracht- en voldoeningsbelastingen. Voor de eerstgenoemde
belastingen kijkt de Inspecteur naar het aantal keren dat in de voorafgaande vier
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


belastingjaren een verzuim is geconstateerd. Voor de laatstgenoemde belastingen
dient de Inspecteur te kijken naar het aantal keren dat in de voorafgaande negen (9)
tijdvakken een verzuim is geconstateerd aangezien voor deze belastingen in de regel
de belasting verhoudingsgewijs meerdere keren in een relatief kortere periode (iedere
maand) op aangifte moet worden voldaan of afgedragen. De beoordeling van het
aantal verzuimen gedurende de hiervoor genoemde tijdvakken dient echter plaats
te vinden binnen een periode van 24 maanden.
In de gevallen waarbij alle schuld van de belastingplichtige of de inhoudingsplichtige
afwezig is (avas), kan een opgelegde boete worden kwijtgescholden. Hierbij moet
worden gedacht aan de situatie waarbij de belanghebbende in het ziekenhuis belandt
en hierdoor niet aan zijn fiscale verplichtingen kan voldoen of vanwege een brand de
administratie verloren is gegaan.
In het zevende lid wordt een uitzondering gemaakt op de verzuimenreeks voor de
afdracht- en voldoeningsbelasting, indien een jaaraangifte ingediend mag worden
(zie hiervoor HoofdstukIII). Een jaaraangifte voor deze belasting heeft een soortgelijke
positie als de aanslagbelastingen en de winstbelasting die op aangifte voldaan moet
worden. Een periode van 24 maanden zou tot maximaal 2 verzuimen kunnen luiden.
Voor kwartaalaangiften wordt geen afwijkende regeling voorgesteld, omdat in periode
van 24 maanden 8 verzuimen kunnen plaatsvinden. Het verschil met de verzuimen-
reeks van 9 is te gering om hiervoor een afzonderlijke regeling vast te stellen. Indien
de Inspecteur afwijkende aangiftetermijnen (anders dan maand, kwartaal of jaar)
vaststelt zal hij per geval regels voor de boete kunnen opnemen.

_Artikel 4.4_
Dit artikel geeft een nadere uitwerking van artikel 18, eerste lid, van de Algemene
landsverordening Landsbelastingen. Deze bepaling betreft het niet of niet tijdig in-
dienen van een aangifte voor de aanslagbelastingen. De hoogte van de boete is afhan-
kelijk van het aantal verzuimen en kan oplopen tot NAf 1.500,--. Ingeval een belas-
tingplichtige of inhoudingsplichtige stelselmatig niet aan zijn fiscale verplichtingen
voldoet, heeft de Inspecteur de bevoegdheid de maximale boete van NAf 2.500,-- op
te leggen.
In het derde lid wordt bepaald dat deze boeteregels ook van toepassing zijn op de
winstbelasting die op aangifte moet worden voldaan.
Het vierde lid bepaalt dat ingeval overeenkomstig artikel 41B van de Landsverordening
op de inkomstenbelasting 1943 geen aanslag wordt vastgesteld en de verrekening
van voorheffingen achterwege blijft, geen boete wordt opgelegd indien de belang-
hebbende geen aangifte heeft gedaan. Voor het geval de Inspecteur een beschikking
vaststelt dat geen aanslag wordt opgelegd, en dat is in de praktijk de regel als geen
belasting verschuldigd is of teruggegeven wordt, hoeft voor de boete niets geregeld
te worden. De boete kan op grond van artikel 18, tweede lid, van de Algemene
landsverordening Landsbelastingen immers alleen gelijktijdig met de aanslag vast-
gesteld worden.

_Artikel 4.5_
Dit artikel geeft een nadere uitwerking van artikel 18, tweede lid, van de Algemene
landsverordening Landsbelastingen. Deze bepaling betreft het niet of niet tijdig in-
dienen van een aangifte voor een belasting, niet zijnde de winstbelasting, die op
aangifte moet worden voldaan of afgedragen. Indien de belastingplichtige of inhou-
dingsplichtige de aangifte niet of niet tijdig indient, kan de Inspecteur hem een ver-
zuimboete opleggen.
De hoogte van de boete is afhankelijk van het aantal verzuimen.
De bedoeling van deze verzuimregeling is ervoor te zorgen dat de aangifte tijdig
wordt ingediend. Een te late indiening of achterwege blijven van de indiening van de
aangifte verstoort het administratieve proces. Het maakt hiervoor niet uit welk belas-
tingbedrag ermee gemoeid is. Een lichte bestraffing met een vast boetebedrag is
hiervoor op zijn plaats.

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
Artikel 4.6
Dit artikel geeft een nadere uitwerking van artikel 19, eerste lid, van de Algemene
landsverordening Landsbelastingen. Dit artikel ziet op het niet, dan wel niet tijdig
betalen van de belasting. Het mag duidelijk zijn dat, hoewel het doen van de vereiste
aangifte van belang is voor een juiste heffing, bij afdracht- en voldoeningsbelastingen
de juiste en tijdige betaling zeker zo belangrijk is. De boete voor het niet tijdig betalen
is daarom hoger dan die voor het niet tijdig doen van aangifte. De boete is een per-
centage van het bedrag van de naheffingsaanslag. Dit percentage loopt per verzuim
op (5%, 10% en 15%). De boete kent een minimum- en een maximumbedrag. De
hoogte van de boete kan oplopen tot maximaal NAf 10.000,--.
In het tweede lid is een regeling opgenomen voor de winstbelasting. De minimale
boete voor het niet, of niet tijdig betalen is gelijk aan de boete voor het niet of niet
tijdig aangifte doen.
'''
'''
Artikel 4.7
Voor gevallen waarin de Inspecteur niet in het kader van de periodieke betalingen,
maar pas naderhand constateert dat de belastingplichtige de belasting niet, of niet
tijdig heeft voldaan, ligt het hanteren van een verzuimenreeks niet voor de hand.
Voorbeelden zijn een boekenonderzoek of een controle van de verzamelloonstaat,
waarbij blijkt dat te weinig belasting is betaald. Er zal dan belasting worden nagehe-
ven. Daarbij past een volledige verzuimboete van 15%. Deze boete zal alleen achter-
wege blijven bij afwezigheid van alle schuld en een pleitbaar standpunt. Indien sprake
is van grove schuld of zwaardere schuldvormen kan de Inspecteur in plaats van een
verzuimboete een vergrijpboete opleggen.
Onder te weinig aangegeven belasting wordt in dit verband ook begrepen niet aan-
gegeven en niet betaalde belasting, indien de belastingplichtige ten onrechte niet of
te laat heeft verzocht om uitreiking van een aangifte.
'''
'''
Artikel 4.8
Dit artikel geeft een nadere uitwerking van de artikelen 20 en 21 van de Algemene
landsverordening Landsbelastingen. In dit artikel wordt vastgesteld wanneer de In-
specteur de volle 100% oplegt, en wanneer een lagere administratieve boete volstaat.
Ingeval van grove schuld wordt een vergrijpboete opgelegd van 25%. Grove schuld
is een in laakbaarheid aan opzet grenzende mate van verwijtbaarheid en omvat mede
grove onachtzaamheid. De boete wordt vastgesteld op 50% ingeval van opzettelijk
handelen (of nalaten van handelen) door de belastingplichtige of de inhoudingsplich-
tige, met het oogmerk een oneigenlijk belastingvoordeel te behalen.
Tot de strafvermeerderende factoren kunnen ook worden gerekend de omvang van
de belastingontduiking alsmede recidive. De recidivetermijn is vijf jaren en sluit aan
bij de (korte) termijnen waarbinnen naheffing en navordering kunnen plaatsvinden.
Van recidive is sprake indien voor hetzelfde belastingmiddel eerder een vergrijpboete
is opgelegd, dan wel een strafrechtelijke transactie is voldaan, dan wel een vorm van
strafoplegging heeft plaats gevonden.
In het vijfde lid wordt de zogenoemde pseudo-samenloop geregeld. In de praktijk
kan zich de situatie voordoen dat op basis van hetzelfde feitencomplex meerdere
aanslagen met boete worden vastgesteld die direct of indirect drukken op één belas-
tingplichtige.
Een voorbeeld hiervan is een omzetcorrectie die de grondslag vormt voor zowel een
aanslag omzetbelasting als een aanslag inkomstenbelasting. Als uit de verzwegen
omzet salarissen zijn betaald, zullen ook aanslagen loonbelasting en premies
AOV/AWW, AVBZ en Basisverzekering ziektekosten opgelegd worden. Als sprake is
van grove schuld of opzet zullen naast naheffings- en navorderingsaanslagen ook
boetbeschikkingen vastgesteld worden.
Van een meervoudige bestraffing van degene aan wie de boeten opgelegd worden
is in beginsel geen sprake. De verplichting om op aangifte de verschuldigde omzetbe-
lasting te voldoen staat los van de verplichting tot het aangeven van het juiste inkomen
voor de inkomstenbelasting. Dit geldt ook indien het niet nakomen van beide ver-
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


plichtingen zijn grond vindt in het hetzelfde feitencomplex: het verzwijgen van omzet.
Elk van deze vergrijpen leidt tot belastingnadeel. Er kan niet worden gezegd dat de
boeten leiden tot dubbele bestraffing, omdat de vergrijpboeten een percentage vor-
men van de na te heffen of na te vorderen belastingen.
Pseudo-samenloop kan zich ook in andere vormen voordoen. Indien een naamloze
of besloten vennootschap omzet verzwijgt, zal de verzwegen omzet leiden tot nahef-
fingsaanslagen omzetbelasting en winstbelasting. Aan de directeur grootaandeel-
houder (digra) zal een aanslag inkomstenbelasting opgelegd worden voor een
winstuitdeling. Strikt genomen is ook hier geen sprake van een dubbele bestraffing,
omdat de boeten betrekking hebben op twee verschillende belastingsubjecten. Uit-
eindelijk komen de boeten van de naamloze of besloten vennootschap natuurlijk ten
laste van het vermogen van de digra.
Uit Nederlandse jurisprudentie blijkt dat in gevallen van pseudo samenloop van
vergrijpboeten rekening wordt gehouden met andere vergrijpboeten die samenhangen
met hetzelfde feitencomplex. In verband hiermee wordt de Inspecteur in het vijfde
lid de mogelijkheid geboden de boeten te matigen wanneer zich pseudo-samenloop
van vergrijpboeten voordoet. De hoogste boete blijft gehandhaafd en de boeten voor
samenhangende aanslagen worden gehalveerd. Deze beoordeling dient per belas-
tingjaar plaats te vinden.

_Artikel 4.9_
Dit artikel geeft een nadere uitwerking van artikel 26 van de Algemene landsverorde-
ning Landsbelastingen. Indien een belastingplichtige of inhoudingsplichtige alsnog,
zij het te laat, zijn verplichtingen volledig nakomt (vrijwillige verbetering), bijvoorbeeld
door alsnog een juiste aangifte in te dienen voordat de Inspecteur kennis heeft geno-
men van de juiste feiten, wordt een lagere boete opgelegd. Er moet dan wel sprake
zijn van een vrijwillige verbetering. Het uit eigen beweging informeren van de Inspec-
teur zal de betrokkene niet baten indien hij wist of redelijkerwijs kon weten dat de
Inspecteur al op de hoogte is of zou komen van het beboetbare feit.

_Hoofdstuk V_
Ingevolge de Algemene landsverordening Landsbelastingen is de Inspecteur gehouden
binnen een redelijke termijn de ingediende bezwaarschriften af te doen. Teneinde
te voorkomen dat bezwaarschriften zonder enig gevolg kunnen blijven liggen, is de
termijn voor afdoening in artikel 30, tweede lid, van de Algemene landsverordening
Landsbelastingen in principe gesteld op negen maanden. Mogelijk is dat de proble-
matiek welke het onderwerp van het ingediende bezwaarschrift is, zodanig ingewik-
keld is of om andere reden veel tijd vergt dat van de Inspecteur in redelijkheid niet
kan worden gevergd dat hij binnen negen maanden na ontvangst van het bezwaar-
schrift uitspraak doet. Ingevolge artikel 30, derde lid, van de Algemene landsverorde-
ning Landsbelastingen kan slechts in de door de Minister bepaalde gevallen voor-
noemde termijn voor het doen van een uitspraak op het bezwaar door de Inspecteur
met ten hoogste negen maanden worden verlengd. Dit Hoofdstuk strekt ter uitvoering
van artikel 30, derde lid, van de Algemene landsverordening Landsbelastingen.
Als de belanghebbende de door de Inspecteur verzochte informatie ingevolge de
onderdelen a en b, niet verstrekt, dan wordt de beslistermijn van de Inspecteur, be-
doeld in artikel 30, tweede lid, van de Algemene landsverordening Landsbelastingen
verlengd, met dien verstande dat de beslistermijn met ten hoogste negen maanden
kan worden verlengd.
De overheid dient de algemene beginselen van behoorlijk bestuur, waaronder het
gelijkheidsbeginsel, in acht te nemen. Onderdeel c geeft de mogelijkheid om reke-
ninghoudende met de uitspraak van de Raad van Beroep voor belastingzaken gelijke
gevallen gelijk te behandelen.
Een boekenonderzoek of een verzoek om internationale inlichtingenuitwisseling
door de Inspecteur – dat voor de belastingheffing van belang kan zijn – kan ook leiden

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
tot een vertraagde afdoening van het bezwaarschrift. In onderdeel e is hiermee reke-
ning gehouden.
Zodra de Inspecteur de benodigde informatie heeft ontvangen, dient hij alsnog uit-
spraak te doen.
Onderdeel f heeft betrekking op een bezwaarschrift waaruit niet direct duidelijk blijkt
waarom belanghebbende zich niet met de beslissing kan verenigen (pro-forma be-
zwaarschriften). Indien de indiener het bezwaarschrift niet binnen twee maanden
na het indienen hiervan motiveert, wordt de beslistermijn van de Inspecteur verlengd.
'''
'''
Hoofdstuk VI
Artikel 6.1
Een vergoeding van de kosten als bedoeld in artikel 32a, eerste lid, van de Algemene
landsverordening Landsbelastingen kan uitsluitend betrekking hebben op kosten
van door een derde beroepsmatig verleende rechtsbijstand. Overige kosten komen
derhalve niet voor vergoeding in aanmerking. Om voor een kostenvergoeding in
aanmerking te komen, moet overigens zijn voldaan aan in artikel 32a, eerste en tweede
lid, gestelde strenge eisen. Zo moet de voor bezwaar vatbare beschikking door een
ernstige onzorgvuldigheid in strijd met het recht zijn genomen. Voorts dient de be-
lastingplichtige, conform het tweede lid, van genoemd artikel, zijn verzoek om kos-
tenvergoeding te hebben gedaan vóórdat de Inspecteur op het bezwaar heeft beslist.
De vergoeding van proceskosten wordt vanwege het stellen van strenge eisen beperkt.
'''
'''
Artikel 6.2
Dit artikel bepaalt de hoogte van de vergoeding. Het bedrag van de kosten wordt
vastgesteld overeenkomstig het in artikel 6.4 opgenomen tarief. Dat bedrag vermeldt
de Inspecteur in de uitspraak op bezwaar. Indien een partij slechts gedeeltelijk in het
gelijk is gesteld, kan de Inspecteur het bedrag verminderen. In bijzondere omstandig-
heden kan de Inspecteur van het in de bijlage genoemde tarief afwijken.
'''
'''
Artikel 6.3
De reden om samenhangende zaken als één zaak te beschouwen is dat het voor de
hoeveelheid werk van een rechtsbijstandverlener niet of nauwelijks uitmaakt of hij
een procedure over een of meer gelijksoortige zaken voert. Nagenoeg identieke be-
sluiten zijn besluiten met dezelfde rechtsgevolgen. Besluiten die gedeeltelijk op een
andere juridische grondslag berusten, zijn niet nagenoeg identiek.
'''
'''
Artikel 6.4
De wijze van berekenen van de vergoeding is gebaseerd op het systeem van het Besluit
proceskosten bestuursrecht^18. Het bedrag dat per punt vergoed wordt wijkt echter
af.
'''
'''
Hoofdstuk VII
Artikel 7.1
Artikel 44, tiende lid, van de Algemene landsverordening Landsbelastingen voorziet
in de mogelijkheid om bepaalde leveringen en diensten aan te wijzen ter zake waarvan
een ontheffing van de factureringsplicht kan worden verleend. Deze bepaling komt
overeen met het voormalige artikel 10, zevende lid, van de Landsverordening omzet-
belasting 1999. Bij de beschikkingontheffing factureringsplicht omzetbelasting zijn
de diensten van openbaar personenvervoer over de weg, schoolbusdiensten en
straatautowassers, alsmede de leveringen door marktkooplieden en straatventers
als zodanig aangewezen.
Een ontheffing wordt op dit moment alleen nog wenselijk geacht voor de diensten
bestaande uit openbaar personenvervoer over de weg. Voor de diensten bestaande
uit schoolbusdiensten is het uitreiken van een factuur niet bezwaarlijk, aangezien
deze factuur niet aan de passagiers (schoolkinderen) wordt uitgereikt. Voor straatau-
'''
'''
18 P.B. 2001-127
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


towassers, marktkooplieden en straatventers geldt de verplichting om op grond van
artikel 44a van de Algemene landsverordening Landsbelastingen een kassabon uit
te reiken. Een ontheffing van de factureringsplicht is daarom niet langer van toepas-
sing.

_Artikel 7.2_
Op grond van artikel 44a, eerste lid, van de Algemene landsverordening Landsbelas-
tingen kunnen bij ministeriële regeling met algemene werking groepen van admini-
stratieplichtigen worden aangewezen die, in afwijking van de algemene facturerings-
plicht, verplicht zijn om ter zake van hun leveringen en diensten een kassabon uit te
reiken. Deze afwijkingsbepaling komt overeen met de voormalige wettelijke bepaling
van artikel 44, zesde lid, van de Algemene landsverordening Landsbelastingen. Op
grond van deze bepaling waren de volgende administratieplichtigen aangewezen:
detailhandelaren, exploitanten van horecabedrijven en loterijverkopers. Daarnaast
bestond de mogelijkheid om bij ministeriële regeling andere categorieën administra-
tieplichtigen aan te wijzen. Thans is er voor gekozen om alle aangewezen groepen
administratieplichtigen bij ministeriële regeling vast te stellen en zijn de groepen
ingedeeld naar branche. Naast de reeds in het verleden aangewezen branches detail-
handel, horeca en nummerverkoopkantoren en loterijen, is ook de branche persoon-
lijke dienstverlening aangewezen. De reden hiervoor is, dat in deze branche het uit-
reiken van een kassabon eveneens gebruikelijk en wenselijk is.
Onder de branche detailhandel wordt de kleinhandel, zijnde het leveren van goederen
voor persoonlijk gebruik aan consumenten, verstaan. Hierbij kan gedacht worden
aan bijvoorbeeld supermarkten, minimarkets, toko’s, bakkerijen, slagerijen, groente-
, fruit- en visverkoop, tankstations, schoen- en kledingwinkels, botica’s, boekhandels,
dierenzaken, juweliers, kleinhandel in elektronische apparatuur, huishoudelijke arti-
kelen, lederwaren, ijzerwaren, verf, kantoorartikelen, sportartikelen en de verkoop
van souvenirs en handicraft. Niet van belang is of de verkoop vanuit een winkel of
ambulant, bijvoorbeeld vanuit een marktkraam, plaatsvindt. De branche persoonlijke
dienstverlening ligt in het verlengde van de branche detailhandel, maar ziet op het
verrichten van diensten in plaats van de levering van goederen. Gedacht kan worden
aan kappers, schoonheidsspecialisten, tatoeëerders, masseurs, manicures en pedicures,
schoenmakers en goud- en edelsmeden, maar ook bioscopen, videotheken, wasserijen
en stomerijen vallen onder deze branche. De branche horeca omvat alle eet- en
drinkgelegenheden, zoals restaurants, eetcafés, fastfood restaurants, snackbars,truk
di pans, koffiehuizen, batidoverkooppunten, lunchrooms, ijssalons, cafés, bars, snèks,
dancings en dicotheken. Ook hotels en casino’s vallen onder deze branche, voor zover
hun activiteiten uit het verstrekken van spijzen en dranken bestaat.
Nummerverkoopkantoren en loterijen vormen een afzonderlijke branche, waar ca-
sino’s geen deel van uitmaken.

_Hoofdstuk VIII_
Bij een vennootschap die aan een effectenbeurs genoteerd is, is de uiteindelijke ge-
rechtigde niet vast te stellen. Dit geldt uiteraard ook voor een vennootschap waarvan
de aandelen middellijk of onmiddellijk door een beursgenoteerde vennootschap
worden gehouden.Voor dit soort gevallen bestaat een disculpatiemogelijkheid in
artikel 45, achtste lid, van de Algemene landsverordening Landsbelastingen.
Op grond van artikel 7 van de ministeriële beschikking met algemene werking van 15
maart 2010 ter uitvoering van de Landsverordening identificatie bij dienstverlening
zijn natuurlijke personen en rechtspersonen die bij bepaalde effectenbeurzen zijn
aangesloten vrijgesteld van artikel 2, eerste lid van de Landsverordening identificatie
bij dienstverlening. De reden hiervoor is dat deze rechtspersonen reeds aan een vorm
van toezicht zijn onderworpen. Voor de toepassing artikel 45, achtste lid, van de Alge-
mene landsverordening Landsbelastingen wordt hierbij aangesloten. Natuurlijke
personen zijn hierbij niet opgenomen, omdat artikel 45, zesde lid, uitsluitend op li-
chamen betrekking heeft.

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
Hoofdstuk XI^19
Op grond van het bepaalde in artikel 62 van de Algemene landsverordening landsbe-
lastingen beslist de minister niet eerder dan na 15 dagen na de dagtekening van een
kennisgeving, om tot inwilliging van een verzoek om internationale inlichtingenver-
strekking over te gaan. Bij dringende redenen kan een kennisgeving echter achterwege
blijven en kan direct tot inlichtingenverstrekking worden overgegaan.
Overeenkomstig de aanbevelingen van de Organisatie voor Economische Samenwer-
king en Ontwikkeling (OESO) in de phase 1 Peer Review worden de dringende redenen
in deze ministeriële regeling genoemd. Als dringende redenen worden aangemerkt
het vermoeden van (internationale) belastingfraude, het risico dat, als gevolg van
een kennisgeving vooraf, bewijsmateriaal verloren zou kunnen gaan, de dreigende
verstrijking van heffingstermijnen of andere termijnen in het land waarvoor de inlich-
tingen zijn bestemd en door betrokkene veroorzaakte onduidelijkheid met betrekking
tot de vraag waar de te onderzoeken boekhouding of administratie zich bevindt. In
alle vier de genoemde gevallen zal de aanwezigheid van de dringende reden uit het
feitencomplex en de motivering van het inlichtingenverzoek, dan wel aanvullende
berichtgeving, van het verzoekende land dienen te blijken.
'''
'''
Hoofdstuk XII
Artikel 12.1
De beschikkingen die worden ingetrokken worden in dit artikel genoemd. Deze uit-
voeringsregeling heeft als bedoeling om de gedelegeerde wetgeving zoveel mogelijk
in één document op te nemen. Hierdoor wordt de toegang tot de wetgeving verbeterd.
'''
'''
Artikel 12.3
Deze ministeriële regeling treedt in werking op 1 mei 2013 tegelijk met een aantal
wijzigingen in de Algemene landsverordening Landsbelastingen. De ingetrokken
regelingen worden ongewijzigd overgenomen. Inhoudelijk wijzigt er niets voor deze
regelingen; ze worden alleen op een andere plaats vermeld. Nieuw zijn de bepalingen
met betrekking tot de aangifte (mogelijkheid voor kwartaal- of jaaraangifte en het
doen van een elektronische aangifte).
De regeling voor de transparante vennootschap werkt terug tot de datum van inwer-
kingtreding van de wettelijke regels voor de transparante vennootschap.
'''
'''
Nota van Toelichting behorende bij de wijziging van de Ministeriële regeling
formeel belastingrecht^20
'''
'''
§ 1. Algemeen
Ter zake van zijn leveringen van goederen en verrichtingen van diensten, als bedoeld
in de Landsverordening omzetbelasting 1999^21 , is een administratieplichtige gehouden
een factuur of kassabon uit te reiken. In de artikelen 44 en 44a van de Algemene
landsverordening Landsbelastingen^22 zijn de wettelijke bepalingen ten aanzien van
facturerings- en kassabonplicht opgenomen. Bij ministeriële regeling met algemene
werking kunnen leveringen en diensten worden aangewezen, ter zake waarvan, onder
voorwaarden, geen factuur hoeft te worden uitgereikt. Ook kunnen groepen van ad-
ministratieplichtigen worden aangewezen die, ter zake van hun leveringen en dien-
sten, geen factuur maar een kassabon behoren uit te reiken. In de artikelen 7.1. en 7.2
van deze ministeriële regeling is uitvoering gegeven aan de hiervoor genoemde dele-
gatiebepalingen. In de praktijk is echter gebleken, mede in verband met de verplichting
'''
'''
19 De hoofdstukken IX en X zijn gereserveerd in de Ministeriële regeling formeel belastingrecht en zijn niet opge-
nomen in de Nota van Toelichting.
20 P.B. 2014-81.
21 P.B. 2013-52.
22 P.B. 2013-53.
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


om een fiscaal kasregistratiesysteem te gebruiken, dat de huidige regeling een aan-
passing behoeft. Middels deze ministeriële regeling worden de artikel 7.1 en 7.2 aan-
gepast, zodat eventuele onduidelijkheden over de toepassing van beide bepalingen
worden weggenomen. Daarnaast dient op een kassabon een fiscaal logo te worden
vermeld. Dit fiscaal logo was tot op heden nog niet door de Minister vastgesteld. In
een nieuw in te voegen artikel 7.3 wordt thans het door de Minister vastgestelde fiscaal
logo opgenomen.

§ 2. Financiële paragraaf
Deze ministeriële regeling dient ter uitvoering van de in artikel 44 en 44a van de Al-
gemene landsverordening Landsbelastingen genoemde wettelijke verplichtingen.
In die zin zijn aan deze regeling geen bijzondere financiële lasten verbonden. Ter
zake van de in deze regeling opgenomen wijzigingen dient echter wel voorlichting
plaats te vinden. De kosten die hieraan zijn verbonden, zijn slechts marginaal en be-
horen tot de kosten in het kader van het project fiscale kasregistratiesystemen.

§ 3. Artikelsgewijze toelichting
_Artikel I_
Op grond van artikel 44, tiende lid, van de Algemene landsverordening Landsbelas-
tingen kunnen leveringen en diensten worden aangewezen ter zake waarvan geen
factuur hoeft te worden uitgereikt. Van deze mogelijkheid is gebruik gemaakt, door
in artikel 7.1 diensten die verricht worden in het kader van het openbaar personenver-
voer over de weg aan te wijzen. Ter zake van besloten personenvervoer – dit is veelal
vervoer per touringcar en taxivervoer – geldt de ontheffing niet en dient een factuur
te worden uitgereikt. Naast het openbaar personenvervoer over de weg, zijn er echter
nog andere leveringen en diensten ter zake waarvan het in de praktijk niet gebruikelijk
is dat een factuur wordt uitgereikt. Ook het verstrekken van een kassabon is in deze
situaties niet gangbaar, omdat aan de afnemer een bewijs van betaling wordt verstrekt.
Naast de diensten bestaande uit het openbaar personenvervoer over de weg, worden
thans ook de hierna genoemde leveringen en diensten vrijgesteld van de verplichting
om een factuur of kassabon uit te reiken:
− gelegenheid geven tot parkeren van motorrijtuigen. Indien de gelegenheid wordt
gegeven om tegen vergoeding een motorrijtuig te parkeren, bijvoorbeeld in een
parkeergarage, op een privéterrein of langs de openbare weg, wordt ter zake van deze
dienst meestal een parkeerticket verstrekt. Het daarnaast uitschrijven van een factuur
of kassabon is niet gebruikelijk en vaak ook niet mogelijk. Om deze reden wordt deze
dienst thans uitgezonderd van de factureringsplicht, onder de voorwaarden dat ter
zake een parkeerticket wordt verstrekt;
− toegang verlenen tot culturele, sportieve of recreatieve activiteiten. Bij het verlenen
van toegang wordt veelal een betalingsbewijs in de vorm van een entreebewijs ver-
strekt.
Het daarnaast uitreiken van een factuur of kassabon is dan ook niet noodzakelijk.
Om deze reden is het verlenen van toegang tot culturele, sportieve of recreatieve ac-
tiviteiten uitgezonderd van de verplichting om een factuur of kassabon uit te reiken.
Als voorbeelden kunnen worden genoemd: het verlenen van toegang tot bioscopen,
theaters, voorstellingen, concerten en optredens, exposities en tentoonstellingen,
musea, sportwedstrijden en sportaccommodaties, dierentuinen en kinderboerderijen,
natuurgebieden, stranden, speelhallen, discotheken en andere primair en permanent
voor vermaak en recreatie ingerichte voorzieningen;
− verhuur van strandbedden. Bij de verhuur van strandbedden is het eveneens gebrui-
kelijk om een bewijs van betaling te overhandigen. Het daarnaast uitreiken van een
factuur of kassabon is bij de verhuur van strandbedden dan ook niet noodzakelijk;
− verkoop van nummers en loten voor loterijen. Aan deelnemers van loterijen wordt
door of namens de organisator een bewijs van betaling, meestal in de vorm van een
lot, verstrekt. Met dit bewijs van betaling kan de afnemer ook aanspraak op een
eventuele prijs maken. Het daarnaast verstrekken van een factuur of kassabon, ter
zake de deelname aan een loterij, is niet gebruikelijk. Indien en voorzover op een

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
bewijs van betaling de noodzakelijke informatie wordt vermeld, kan het uitreiken
van een factuur of kassabon achterwege blijven.
Aan de ontheffing om ter zake van in het eerste lid genoemde leveringen en diensten
een factuur of kassabon uit te reiken, kunnen, op grond van artikel 44 van de Algemene
landsverordening Landsbelastingen, voorwaarden worden verbonden. In het tweede
en derde lid van artikel 7.1 zijn deze voorwaarden opgenomen. Nieuw is de voorwaarde,
dat ter zake van de genoemde leveringen en diensten een bewijs van betaling dient
te worden verstrekt. Een bewijs van betaling dient doorlopend genummerd te zijn
en bovendien de naam of handelsnaam van de administratieplichtige, een omschrij-
ving van de levering of de dienst, de vergoeding (inclusief eventueel verschuldigde
omzetbelasting) en een dagtekening te vermelden. Zoals hiervoor reeds aangegeven,
is het bij de genoemde leveringen en diensten vaak reeds gebruikelijk om een bewijs
van betaling, bijvoorbeeld in de vorm van een parkeer- of entreeticket of lot, te ver-
strekken. Voor deze administratieplichtigen wijzigt er dan ook niets ten aanzien van
de bestaande situatie. Bij de dienst bestaande uit het openbare personenvervoer over
de weg, wordt op dit moment niet altijd een bewijs van betaling uitgereikt. Admini-
stratieplichtigen die dit thans nog niet doen, dienen derhalve hun handelswijze aan
te passen.
De voorwaarde dat een administratieplichtige, ter zake van zijn leveringen en diensten,
waarvoor een ontheffing van de factureringsplicht geldt, zijn gerealiseerde omzet
dagelijks in zijn administratie dient vast te leggen, is niet nieuw. Wel is thans expliciet
opgenomen dat in ieder geval ook een kopie of ander bewijsstuk van een uitgeschreven
bewijs van betaling in de administratie moet worden opgenomen. Aan de hand van
dit stuk moet het orginele bewijs van betaling zijn te identificeren. Als voorbeeld van
een ander bewijsstuk kan een controlestrook van een toegangsbewijs worden ge-
noemd. Indien de betaling voor een in het eerste lid genoemde levering of dienst via
een automaat plaatsvindt, dient die automaat de dagelijkse gerealiseerde omzet
eveneens te registreren.
'''
'''
Artikel II
Op grond van artikel 44a, eerste lid, van de Algemene landsverordening Landsbelas-
tingen kunnen bij ministeriële regeling met algemene werking groepen van admini-
stratieplichtigen worden aangewezen die, in afwijking van de algemene facturerings-
plicht, verplicht zijn om ter zake van hun leveringen van goederen en verrichtingen
van diensten een kassabon uit te reiken. Bij de aanwijzing van deze groepen admini-
stratieplichtigen was in artikel 7.2 aansluiting gezocht bij de indeling in branches.
In de praktijk bleek deze indeling echter voor onduidelijkheden te zorgen, omdat
administratieplichtigen vaak meerdere activiteiten verrichten die in verschillende
branches kunnen worden ondergebracht. Als voorbeeld kan worden genoemd een
duikschool, die naast het aanbieden van duikcursussen ook dranken verkoopt. Ondui-
delijkheid kan dan bestaan over de vraag of een administratieplichtige tot een van
de benoemde branches behoort en zo ja, of dan ter zake van alle activiteiten een
kassabon moet worden uitgereikt.
Om op dit punt duidelijkheid te scheppen, is er thans voor gekozen om groepen ad-
ministratieplichtigen aan te wijzen wiens activiteiten geheel of gedeeltelijk bestaan
uit leveringen of diensten ter zake waarvan het gebruikelijk is dat een kassabon wordt
uitgereikt. Voor deze administratieplichtigen geldt de verplichting om een kassabon
uit te reiken voor zover de benoemde leveringen of diensten worden verricht. In het
geval van de duikshop in het hiervoor genoemde voorbeeld, dient alleen ter zake van
de verkoop van dranken een kassabon te worden uitgereikt. Het aanbieden van
duikcursussen valt niet onder de aangewezen activiteiten, zodat ter zake een factuur
moet worden uitgereikt. Op deze wijze wordt meer aangesloten bij de gangbare
praktijk.
De verplichting om een kassabon, als bedoeld in artikel 44a van de Algemene lands-
verordening Landsbelasting, uit te reiken, geldt thans voor de in artikel 7.2 aangewezen
groepen administratieplichtigen wiens activiteiten geheel of gedeeltelijk bestaan uit
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


de hierna genoemde leveringen of diensten. De verplichting geldt slechts voor zover
de benoemde leveringen of diensten worden verricht.

- verstrekken van spijzen en dranken. Tot deze groep administratieplichtigen behoren
in de eerste plaats uiteraard administratieplichtigen actief in de horecabranche. Ge-
dacht kan worden aan eet- en drinkgelegenheden, zoals restaurants, eetcafés, fast-
foodrestaurants, snackbars, truk di pans, koffiehuizen, batidoverkooppunten,
lunchrooms, ijssalons, cafés, bars, snèks, dancings en discotheken. Maar ook andere
administratieplichtigen, wiens activiteiten mede uit het verstrekken van spijzen en
dranken bestaan, behoren tot deze categorie. Hierbij kan gedacht kan worden aan
hotels en casino’s, bioscopen, bibliotheken, duikscholen, musea, winkels, et cetera.
Voor zover administratieplichtigen spijzen en dranken verstrekken, zijn zij verplicht
ter zake een kassabon uit te reiken. Niet van belang is of de verstrekkingen vanuit
een bedrijfslocatie of ambulant, bijvoorbeeld vanuit een marktkraam, plaatsvinden.
- verkoop van consumentenartikelen. Bij deze categorie gaat het in de eerste plaats
om administratieplichtigen die behoren tot de branche detailhandel. Onder detail-
handel wordt immers de kleinhandel, zijnde het leveren van goederen voor persoonlijk
gebruik aan consumenten, verstaan. Hierbij kan gedacht worden aan bijvoorbeeld
supermarkten, minimarkets, toko’s, bakkerijen, slagerijen, groente-, fruit- en visver-
koop, tankstations, schoen- en kledingwinkels, botica’s, opticiëns, boekhandels, die-
renzaken, juweliers, kleinhandel in elektronische apparatuur, huishoudelijke artikelen,
lederwaren, ijzerwaren, verf, kantoorartikelen, sportartikelen en de verkoop van
souvenirs en handicraft. Maar ook administratieplichtigen wiens activiteiten primair
tot een andere branche behoren, zijn ter zake van de verkoop van consumentengoe-
deren verplicht een kassabon uit te reiken. Als voorbeeld kan wederom een duikschool
worden genoemd, maar ook organisaties van culturele, sportieve of recreatieve aard
kunnen hier onder vallen. Onder de verkoop van consumentenartikelen valt ook de
verkoop van artikelen die eet- of drinkbaar zijn (food). Niet van belang is of de verkoop
vanuit een winkel of ambulant, bijvoorbeeld vanuit een marktkraam, plaatsvindt.
- reparatie van consumentenartikelen. Tot deze groep behoren onder andere admini-
stratieplichtigen wiens activiteiten bestaan uit de reparatie van schoeisel en lederwa-
ren, elektrische en huishoudelijke apparaten, uurwerken en juweliersartikelen, et
cetera. Ook indien de activiteiten van een administratieplichtige slechts gedeeltelijk
bestaan uit reparatiewerkzaamheden, dient hij ter zake van deze werkzaamheden
een kassabon uit te reiken.
- persoonlijke dienstverlening. Tot de groep administratieplichtigen wiens activiteiten
bestaan uit persoonlijke dienstverlening worden onder andere kappers, schoonheids-
specialisten, spa’s, tatoeëerders, masseurs, manicures en pedicures verstaan.
Maar ook videotheken, wasserijen en stomerijen vallen onder deze groep administra-
tieplichtigen.
In het tweede lid van artikel 7.2 is de mogelijkheid voor administratieplichtigen opge-
nomen, om de Directeur van de Stichting Overheids Belastingaccountantsbureau te
verzoeken een ontheffing te verlenen van de verplichting om een kassabon uit te
reiken. Het gaat hierbij om administratieplichtigen die welliswaar behoren tot de in
het eerste lid genoemde categorieën, maar in wiens bedrijfsvoering het gebruikelijk
is dat ter zake van de betreffende leveringen of diensten een factuur wordt uitgereikt.
Hierbij kan bijvoorbeeld worden gedacht aan administratieplichtigen wiens activitei-
ten bestaan uit de verkoop of reparatie van motorrijtuigen en vaartuigen. Ter zake
van deze activiteiten is het immers gebruikelijk dat een factuur wordt uitgereikt. Een
verzoek om ontheffing dient schriftelijk te worden gedaan. Indien een ontheffing
wordt verleend, is de administratieplichtige uiteraard wel gehouden om ter zake van
zijn leveringen en diensten een factuur, conform de wettelijke eisen van artikel 44
van de Algemene landsverordening Landsbelastingen, uit te reiken.
Daarnaast zijn in het derde en vierde lid van artikel 7.2 ontheffingen voor bijzondere
situaties opgenomen. In het derde lid is een ontheffing opgenomen voor de verkoop
van etenswaren en dagbladen door straatventers en de verkoop van opwaardeerkaar-
ten. In beide gevallen is het bezwaarlijk om ter zake een kassabon te laten uitreiken.
Onder de voorwaarde dat de dagelijkse verkopen worden geregistreerd, geldt voor

**Ministeriële regeling formeel belastingrecht 15** bijlage


'''
deze leveringen een ontheffing. De dagelijkse verkopen dienen op een door de Direc-
teur van de Stichting Overheids Belastingaccountantsbureau vast te stellen overzicht
te worden geregistreerd. Onder opwaardeerkaarten worden bijvoorbeeld telefoon-
kaarten en Pagatinu-kaarten verstaan. In het vierde lid is een ontheffing voor verkopen
vanuit een verkoopautomaat opgenomen. In deze gevallen is het immers niet mogelijk
of gebruikelijk dat een kassabon wordt verstrekt. De gerealiseerde omzet dient door
de verkoopautomaat wel te worden geregistreerd, waarvan de exploitant gehouden
is dit in zijn administratie vast te leggen.
'''
'''
Artikel III
Op grond van artikel 44a, vierde lid, onderdeel c, van de Algemene landsverordening
Landsbelastingen dient op een kassabon een fiscaal logo te worden vermeld. Dit fiscaal
logo wordt door de Minister vastgesteld. De aanwezigheid van een fiscaal logo op
een kassabon is voor de afnemer een indicatie dat zijn leverancier of dienstverrichter
conform de wettelijke verplichtingen een kassabon uitreikt. Als fiscaal logo heeft de
Minister het logo van de campagne ‘Bo Faktura’ van de Stichting Overheids Belasting-
accountantsbureau vastgesteld, een logo waarmee de consument in Curaçao reeds
bekend is. Op een kassabon dient het fiscaal logo een (minimale) afmeting van 128x128
pixels te hebben.
'''
**15** bijlage **Ministeriële regeling formeel belastingrecht**


### Landsverordening vereffening

### belastingschulden bij vertrek 1977^1

**Art. 1**
Deze landsverordening verstaat onder: **Definities**
_a._ ,,belastingplichtige’’: degene die krachtens enige fiscale heffingslandsverordening,
zoals de Landsverordening op de Inkomstenbelasting 1943 en de Landsverordening
onroerendezaakbelasting 2014, als zodanig is aangewezen;
_b._ ,,eilandsontvanger’’: de ontvanger van het eilandgebied waar de belastingplichtige
zijn woonplaats heeft. Voor wat betreft het eilandgebied de Bovenwindse Eilanden
de ontvanger van het eiland waar de belastingplichtige zijn woonplaats heeft.

'''
Art. 2
Aanmelding Belasting-
dienst
'''
**1.** Iedere belastingplichtige, die de Nederlandse Antillen wenst te verlaten, dient
zich bij de belastingdienst in het eilandgebied waar hij woont aan te melden ter ver-
krijging van een verklaring inzake zijn belastingaanslagen.
**2.** De eilandsontvanger verstrekt na aanzuivering of zekerheidsstelling een verklaring
dat tegen het vertrek van de belastingplichtige op grond van deze landsverordening
geen bezwaar bestaat.
**3.** In afwijking van de leden 1 en 2 is de eilandsontvanger bevoegd in gevallen en
onder voorwaarden geregeld bij landsbesluit, houdende algemene maatregelen, een
verklaring af te geven welke in plaats treedt van de verklaring bedoeld in het vorige
lid.

'''
Art. 3
'''
**1.** De belastingplichtige is gehouden een der verklaringen als bedoeld in artikel 2 leden **Overleggen verklaringen**
twee en drie aan de bevoegde autoriteit over te leggen.
**2.** Door of namens de Minister van Justitie wordt het vertrek uit de Nederlandse
Antillen, desnoods met de sterke arm, verhinderd van een belastingplichtige die een
van deze verklaringen niet overlegt aan de bevoegde autoriteit.

'''
Art. 4
'''
**1.** Met het toezicht op de naleving van het bij of krachtens deze landsverordening **Toezicht op naleving**
bepaalde zijn belast de daartoe bij landsbesluit aangewezen ambtenaren van de
Belastingdienst. Een zodanige aanwijzing wordt bekendgemaakt in De Curaçaosche
Courant.
**2.** De krachtens het eerste lid aangewezen ambtenaren zijn, uitsluitend voor zover
dat voor de vervulling van hun taak redelijkerwijze noodzakelijk is, bevoegd:
_a._ alle inlichtingen te vragen;
_b._ inzage te verlangen van alle boeken, bescheiden en andere informatiedragers en
daarvan afschrift te nemen of deze daartoe tijdelijk mee te nemen.
**3.** Bij landsbesluit, houdende algemene maatregelen, kunnen regels worden gesteld
met betrekking tot de wijze van taakuitoefening van de krachtens het eerste lid aan-
gewezen ambtenaren.
**4.** Een ieder is verplicht aan de krachtens het eerste lid aangewezen ambtenaren alle
medewerking te verlenen die op grond van het tweede lid wordt gevorderd.

'''
Art. 5
Strafbaarstelling niet vol-
doen belastingschuld
'''
**1.** De belastingplichtige die de Nederlandse Antillen verlaat, wetende dat hij zijn
belastingschuld niet heeft voldaan of geen zekerheid ter zake heeft gesteld, wordt
gestraft met gevangenisstraf van ten hoogste vier jaren of geldboete van de vijfde
categorie.

1 P.B. 1977-127. Zoals deze luidt na wijzigingen, het laatst bij P.B. 2013-54.

**Landsverordening vereffening belastingschulden bij vertrek 16** art. 5


**2.** De belastingplichtige die de Nederlandse Antillen verlaat zonder zijn belasting-
schulden te voldoen, dan wel zekerheid ter zake te stellen, wordt gestraft met een
geldboete van de tweede categorie.
**3.** Het in het eerste lid strafbaar gestelde feit is een misdrijf.
**4.** Het in het tweede lid strafbaar gestelde feit is een overtreding.

**Art. 6
Uitvoering** De Ministers van Justitie en Financiën stellen instructies vast ter uitvoering van deze
landsverordening.

**Art. 7
Citeertitel 1.** Deze landsverordening kan worden aangehaald als ,,Landsverordening vereffening
belastingschulden bij vertrek” onder toevoeging van het jaartal van het publikatieblad
waarin zij is geplaatst.
**Inwerkingtreding 2.** Zij treedt in werking met ingang van de dag na die van haar afkondiging.

**16** art. 6 **Landsverordening vereffening belastingschulden bij vertrek**


### Landsverordening op het beroep in

### belastingzaken^1

'''
Hoofdstuk I
Beroep
'''
'''
§ 1
Inleidende bepalingen
'''
'''
Art. 1^2
'''
**1.** In deze landsverordening en de daarop berustende bepalingen wordt verstaan **Definities**
onder:
Gerecht: Gerecht in eerste aanleg van Curaçao;
Hof: Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba;
Inspecteur: Inspecteur der belastingen en de Inspecteur der invoerrechten en accijnzen.
**2.** Voor zover in enige landsverordening beroep bij de Raad van Beroep voor belas-
tingzaken is opengesteld, treedt het Gerecht voor de Raad van Beroep voor belasting-
zaken in de plaats en doet het uitspraak op dat beroep.
**3.** Op het instellen en behandelen van het beroep is het bepaalde bij of krachtens dit
hoofdstuk van toepassing.
**4.** Voor de toepassing van deze landsverordening worden bestuursorganen die be-
voegd zijn beschikkingen te geven waartegen beroep bij de Raad van Beroep voor
belastingzaken is opengesteld, gelijkgesteld met de Inspecteur.

'''
Art. 2^3
'''
**1.** Zaken die bij het Gerecht aanhangig worden gemaakt, worden in behandeling **Enkelvoudige kamer**
genomen door een enkelvoudige kamer.
**2.** De enkelvoudige kamer kan een zaak naar een meervoudige kamer verwijzen.
**3.** Verwijzing kan geschieden in elke stand van het geding. Een verwezen zaak wordt
voortgezet in de stand waarin zij zich bevindt.

'''
Art. 3^4
'''
**1.** De voorschriften omtrent de behandeling van het beroep zijn op de behandeling **Voorschriften**
zowel door een enkelvoudige als door een meervoudige kamer van toepassing.
**2.** In de artikelen 7, derde lid, 8, eerste en vierde lid, 9, tweede, derde en vierde lid,
10, 11, derde lid, 12 tweede lid, en 14, eerste en tweede lid, wordt met voorzitter bedoeld,
de voorzitter van de meervoudige kamer.
**3.** De rechter in een enkelvoudige kamer oefent de bevoegdheden en verplichtingen
uit toegekend aan de voorzitter van de meervoudige kamer.

1 P.B. 2014-11 zoals deze luidt na wijzigingen het laatst bij P.B. 2015-80. Artikel V van P.B. 2015-80 bevat de
volgende overgangsbepaling:

1. De behandeling van de zaken die op de dag voorafgaand aan de inwerkingtreding van deze landsverordening
in Curaçao aanhangig waren bij de Raad van Beroep voor belastingzaken, wordt met ingang van de inwerking-
treding van deze landsverordening voortgezet door een meervoudige kamer.
2. De meervoudige kamer past het op het moment van indiening van het verzoekschrift geldende recht toe,
tenzij toepassing van het recht zoals gewijzigd bij deze landsverordening, gunstiger is voor de appellant.
De geconsolideerde tekst van de Landsverordening op het beroep in belastingzaken is gepubliceerd bij P.B. 2014-11.
De oorspronkelijke tekst is gepubliceerd bij P.B. 1941-12.
2 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
3 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
4 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.

**Landsverordening op het beroep in belastingzaken 17** art. 3


'''
Art. 4
(vervallen)^5
'''
#### § 2

'''
Het instellen en de behandeling van het beroep
'''
**Art. 5**^6
**Indiening en inhoud be-
roepschrift**

**1.** Het beroep bij het Gerecht wordt ingesteld door persoonlijke indiening bij dan
wel toezending aan de griffier van een aan het Gerecht gericht beroepschrift.
**2.** Het beroepschrift moet met redenen zijn omkleed en voor zover niet wordt be-
weerd, dat geen aanslag had mogen zijn opgelegd, of geen belasting verschuldigd
is, zodanig zijn ingekleed, dat daaruit een gevolgtrekking kan worden gemaakt ten
aanzien van het bedrag, dat volgens de belanghebbende verschuldigd is.
**3.** Indien in beroep wordt gekomen van een beschikking moet bij het beroepschrift
het afschrift van die beschikking worden overgelegd.
**4.** De in de landsverordeningen, waarin beroep bij het Gerecht is toegelaten, voor
het instellen van dat beroep zijn bepaalde termijnen niet verbindend, indien ten ge-
noegen van het Gerecht wordt aangetoond, dat de inachtneming daarvan door bij-
zondere omstandigheden is verhinderd.

**Art. 6**^7
**Doorzending beroep-
schrift aan Inspecteur**

'''
Elk bij het Gerecht ingekomen beroepschrift wordt onverwijld na ontvangst, door de
griffier gezonden aan de Inspecteur tegen wiens beschikking, aanslag, beslissing,
uitspraak of vaststelling in beroep wordt gekomen.
'''
**Art. 7**^8
**Herstel vormverzuimen,
verweerschrift**

**1.** Indien de belanghebbende niet heeft voldaan aan het bepaalde in het tweede en
derde lid van artikel 5, stelt de griffier de belanghebbende in de gelegenheid binnen
een daarbij te stellen termijn het beroepschrift met het ontbrekende aan te vullen.
**2.** Betreft een beroepschrift meer dan een aanslag niet op hetzelfde aanslagbiljet
voorkomende, dan stelt de Inspecteur de belanghebbende in de gelegenheid het
beroepschrift binnen een daarbij te stellen termijn te vervangen door zoveel beroep-
schriften als er aanslagbiljetten zijn. Maakt de belanghebbende van deze gelegenheid
gebruik, dan worden de nieuwe beroepschriften geacht op dezelfde dag als het oor-
spronkelijke beroepschrift bij het Gerecht te zijn ingekomen en door de griffier te zijn
ontvangen.
**3.** De Inspecteur zendt het beroepschrift binnen twee maanden na ontvangst aan
het Gerecht terug. De Inspecteur kan daarbij een verweerschrift overleggen. De in dit
lid genoemde termijn van terugzending kan door de voorzitter worden verlengd.
**4.** Binnen een week nadat het verweerschrift bij het Gerecht is ingekomen, zendt de
griffier een door hem voor eensluidend getekend afschrift daarvan aan de belangheb-
bende, waarbij hij deze opmerkzaam maakt op de hem ingevolge het derde en vierde
lid van artikel 8 toekomende bevoegdheden.

**Art. 7a**^9
**Onmiddellijk uitspraak** Totdat partijen zijn uitgenodigd voor de behandeling van de zaak, kan het Gerecht
onmiddellijk uitspraak doen indien:
_a._ het Gerecht kennelijk onbevoegd is,
_b._ het beroep kennelijk niet-ontvankelijk is,
_c._ het beroep kennelijk ongegrond is, of
_d._ het beroep kennelijk gegrond is.

'''
5 Vervallen bij P.B. 2015-80 met ingang van 01/01/16.
6 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
7 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
8 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
9 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
'''
**17** art. 4 **Landsverordening op het beroep in belastingzaken**


'''
Art. 7b^10
'''
**1.** Tegen een uitspraak als bedoeld in artikel 7a kunnen partijen schriftelijk verzet **Schriftelijk verzet**
doen bij het Gerecht. Artikel 5 is van overeenkomstige toepassing.
**2.** De termijn voor het indienen van een verzetschrift bedraagt twee maanden. Deze
termijn vangt aan nadat de uitspraak aan de partijen is toegezonden.
**3.** Alvorens een uitspraak te doen op het verzet, kan het Gerecht de partij die het
verzet deed in de gelegenheid stellen te worden gehoord. Is het Gerecht van oordeel
dat het verzet ongegrond is, dan gaat het niet tot ongegrondverklaring over dan na
de indiener van het verzetschrift die daarom heeft gevraagd in de gelegenheid te
hebben gesteld te worden gehoord.
**4.** Indien de uitspraak waartegen verzet is gedaan, gedaan is door een meervoudige
kamer, wordt uitspraak op het verzet gedaan door een meervoudige kamer. Van de
kamer die uitspraak doet op het verzet, maakt geen deel uit degene die zitting heeft
gehad in de kamer die de uitspraak heeft gedaan waartegen verzet is gedaan.
**5.** Is het Gerecht van oordeel dat het verzet gegrond is, dan vervalt de uitspraak, be-
doeld in artikel 7a, en wordt de zaak alsnog in behandeling genomen.

**Art. 7c**^11
Het instellen van beroep of het doen van verzet schorst niet de werking van de beschik- **Geen schorsende werking**
king, aanslag, beslissing, uitspraak of vaststelling waartegen beroep is ingesteld of
uitspraak waartegen verzet is gedaan, tenzij bij landsverordening anders is bepaald.

'''
Art. 8^12
Vaststellen tijdstip behan-
deling zaak, mondelinge
toelichting verweerschrift
'''
**1.** Zodra de termijn voor het indienen van een verweerschrift is verstreken of, indien
binnen bekwame termijn een verweerschrift is ingediend, zodra een afschrift daarvan
volgens artikel 7 is verzonden en de belanghebbende geen gebruik heeft gemaakt
van de hem volgens het vierde lid van dit artikel toekomende bevoegdheid, draagt
de voorzitter zorg, dat de behandeling van de bij het beroepschrift aanhangig ge-
maakte zaak verder voortgang vindt en stelt, behoudens in geval van toepassing van
artikel 8b, zo spoedig mogelijk dag en uur vast voor de verdere behandeling door het
Gerecht.
**2.** De griffier roept de Inspecteur op om bij de behandeling van de zaak tegenwoordig
te zijn. De Inspecteur kan zich doen vertegenwoordigen door een door hem aan te
wijzen ambtenaar.
**3.** Indien het verlangen daartoe tijdig is te kennen gegeven of het Gerecht zulks nodig
acht, wordt de belanghebbende ter mondelinge toelichting van zijn beroepschrift
door de griffier tijdig opgeroepen.
**4.** Indien het beroepschrift door de belanghebbende niet mondeling wordt toegelicht,
kan deze na ontvangst van het in artikel 7, vierde lid, bedoeld afschrift binnen een
door de voorzitter van het Gerecht te bepalen termijn bij de griffier een schriftelijke
toelichting indienen. Deze zendt een door hem voor eensluidend getekend afschrift
daarvan onverwijld aan de Inspecteur.

'''
Art. 8a^13
'''
**1.** De zitting vindt plaats met gesloten deuren. **Zitting
2.** De zitting is evenwel openbaar, voor zover het beroep is gericht tegen een uitspraak
waarbij een boete geheel of gedeeltelijk is gehandhaafd dan wel tegen een beschikking
waarbij een boete is opgelegd.
**3.** Het Gerecht kan bepalen dat de zitting, bedoeld in het tweede lid, geheel of ge-
deeltelijk zal plaatshebben met gesloten deuren:
_a._ in het belang van de openbare orde of de goede zeden,
_b._ in het belang van de veiligheid van het Land,

10 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
11 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
12 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
13 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.

**Landsverordening op het beroep in belastingzaken 17** art. 8a


'''
c. indien de belangen van minderjarigen of de eerbiediging van de persoonlijke le-
venssfeer van partijen dit eisen, of
d. indien openbaarheid het belang van een goede rechtspleging zou schaden.
Van de toepassing hiervan wordt in de uitspraak melding gemaakt.
'''
**Art. 8b**^14
**Geen onderzoek ter zitting** Het Gerecht kan met schriftelijke toestemming van de belanghebbende en de Inspec-
teur zonder mondelinge behandeling uitspraak doen.

**Art. 9**^15
**Gemachtigde, deskundige 1.** De belanghebbende kan zich door een gemachtigde doen vertegenwoordigen.
Het Gerecht kan de vertegenwoordiging door een bepaalde gemachtigde weigeren.

**2.** De voorzitter heeft het recht te vorderen dat de belanghebbende zijn gemachtigde
vergezelt.
**3.** Zowel de belanghebbende en zijn gemachtigde als de Inspecteur of de door hem
aangewezen ambtenaar kan zich met toestemming van de voorzitter, door een of
meer deskundigen doen bijstaan.
**4.** De behandeling van de zaak wordt, zo nodig, door de voorzitter geschorst of ver-
daagd.

**Art. 10**^16
**Nadere inwinning van in-
formatie**

'''
Het Gerecht is bevoegd om, alvorens uitspraak te doen:
a. partijen nader tezamen op te roepen tot het verstrekken van inlichtingen;
b. bij de belanghebbende schriftelijke inlichtingen in te winnen;
van de gevoerde briefwisseling wordt alsdan afschrift toegezonden of inzage verstrekt
aan de Inspecteur die bovendien in de gelegenheid wordt gesteld om binnen een
door de voorzitter te bepalen termijn schriftelijk van zijn gevoelen te doen blijken.
Indien de Inspecteur van de hem geboden gelegenheid gebruikt maakt, wordt zijn
schriftelijke uiteenzetting in afschrift toegezonden aan de belanghebbende.
'''
**Art. 10a**^17
**Getuigen 1.** Het Gerecht kan getuigen oproepen.

**2.** De Inspecteur en de belanghebbende kunnen elk getuigen meebrengen, mits
daarvan uiterlijk een week voor de dag van de zitting aan het Gerecht mededeling is
gedaan, met vermelding van namen en woonplaatsen. Op deze bevoegdheid wordt
de Inspecteur onderscheidenlijk de belanghebbende gewezen in de oproeping, be-
doeld in artikel 8, tweede onderscheidenlijk derde lid.
**3.** Het Gerecht kan afzien van het horen van door de Inspecteur of de belanghebbende
meegebrachte getuigen, indien het van oordeel is dat dit redelijkerwijs niet kan bij-
dragen aan de beoordeling van de zaak.
**4.** In geval door een partij overeenkomstig het tweede lid een of meer getuigen zijn
aangemeld, stelt de griffier de andere partij onverwijld op de hoogte van naam of
namen van deze getuigen.

**Art. 11**^18
**Deskundigen, tolken 1.** Het Gerecht kan deskundigen en tolken raadplegen of hun de inzage van boeken
of andere bescheiden opdragen.

**2.** De aanwijzing van deskundigen en tolken geschiedt in het algemeen dan wel voor
een bepaald geval.
**3.** Alvorens zijn taak te aanvaarden legt de deskundige of tolk in handen van de
Voorzitter de eed of belofte af, dat hij de hem op te dragen werkzaamheden eerlijk,

'''
14 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
15 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
16 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
17 Ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
18 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
'''
**17** art. 8b **Landsverordening op het beroep in belastingzaken**


nauwgezet en naar beste weten zal verrichten en geheim zal houden, wat geheim
behoort te blijven.

**4.** Deskundigen en tolken, op last van het Gerecht opgeroepen, kunnen op hun verzoek
een vergoeding ten laste van het Land ontvangen. De tarieven voor het vaststellen
van een vergoeding worden bij landsbesluit, houdende algemene maatregelen,
vastgesteld.

'''
Art. 12^19
Schriftelijk verslag deskun-
digen
'''
**1.** De deskundigen brengen een schriftelijk verslag uit, dat door het Gerecht aan
beide partijen in afschrift toegezonden wordt.
**2.** Beide partijen worden in de gelegenheid gesteld, binnen een bepaalde, voor beide
gelijk, door de voorzitter te bepalen termijn van ten minste vijf dagen, schriftelijk en
in tweevoud van haar gevoelen te doen blijken.
**3.** Voor zover partijen van de geboden gelegenheid gebruik maken, wordt haar
schriftelijke uiteenzetting in afschrift toegezonden aan de wederpartij.

'''
Art. 13^20
Opnieuw mondelinge toe-
lichting
'''
**1.** Indien het Gerecht heeft gebruik gemaakt van de bevoegdheid, bedoeld in artikel
10, onderdeel b of in artikel 11, worden partijen, nadat zij van elkanders schrifturen
hebben kunnen kennis nemen, opnieuw in de gelegenheid gesteld haar standpunt
mondeling toe te lichten.
**2.** Zij worden daartoe, met overeenkomstige toepassing van artikel 8, door de griffier
in kennis gesteld met het voor de verdere behandeling bepaalde tijdstip.

'''
Art. 14^21
'''
**1.** De uitspraak van het Gerecht is met redenen omkleed en geschiedt in het openbaar. **Uitspraak**
Zij vermeldt wanneer en door wie zij is vastgesteld en wordt door de voorzitter en
door de griffier ondertekend. Het gerecht kan bepalen dat de hiervoor genoemde
uitspraak in een van de hierna te noemen gevallen met gesloten deuren zal plaats
hebben:
_a._ in het belang van de openbare orde of de goede zeden,
_b._ in het belang van de veiligheid van het Land,
_c._ indien de belangen van minderjarigen of de eerbiediging van de persoonlijke le-
venssfeer van partijen dit eisen, of
_d._ indien openbaarheid het belang van een goede rechtspleging zou schaden.
**2.** Indien de voorzitter zich in de onmogelijkheid bevindt om de uitspraak te onder-
tekenen, wordt zulks verricht door een van de leden, die over de zaak gezeten hebben.
Indien de griffier verhinderd is de uitspraak te ondertekenen, wordt daarvan op de
uitspraak melding gemaakt.
**3.** Afschrift van de uitspraak wordt door de griffier gelijktijdig aan de belanghebbende
en aan de Inspecteur gezonden. Tevens zendt de griffier de stukken aan de rechtheb-
bende terug.
**4.** Het Gerecht kan bepalen dat de uitspraak, bedoeld in het eerste lid, geheel gedeel-
telijk zal plaatshebben met gesloten deuren:
_a._ In het belang van de openbare orde of de goede zeden;
_b._ In het belang van de veiligheid van het Land;
_c._ Indien de belangen van minderjarigen of de eerbiediging van de persoonlijke le-
venssfeer van partijen dit eisen; of
_d._ Indien openbaarheid het belang van een goede rechtspleging zou schaden.

19 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
20 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
21 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.

**Landsverordening op het beroep in belastingzaken 17** art. 14


**Art. 15**^22
**Veroordeling in de kosten 1.** Het Gerecht is bij uitsluiting bevoegd een partij te veroordelen in de kosten die
een andere partij in verband met de behandeling van het beroep redelijkerwijs heeft
moeten maken. De belanghebbende kan slechts in de kosten worden veroordeeld in
geval van kennelijk onredelijk gebruik van het procesrecht.

**2.** Bij of krachtens landsbesluit, houdende algemene maatregelen, worden regels
gesteld over de kosten waarop de veroordeling, bedoeld in het eerste lid, uitsluitend
betrekking kan hebben en over de wijze waarop de hoogte van de kosten wordt
vastgesteld.
**3.** In geval van intrekking van het beroep, omdat de Inspecteur geheel of gedeeltelijk
aan de betreffende partij is tegemoet gekomen, kan de Inspecteur op verzoek van
die partij bij afzonderlijke uitspraak in de kosten, bedoeld in het eerste lid, worden
veroordeeld. Het verzoek wordt gedaan tegelijk met de intrekking van het beroep.
Indien aan dit vereiste niet is voldaan, wordt de belanghebbende niet-ontvankelijk
verklaard.
**4.** Het Gerecht stelt de partij, bedoeld in het derde lid, zo nodig in de gelegenheid
het verzoek schriftelijk toe te lichten en stelt de Inspecteur in de gelegenheid een
verweerschrift in te dienen. Het Gerecht stelt hiervoor termijnen vast.
**5.** Voor zover de uitspraak verplicht tot betaling van een geldbedrag, kan zij ten uitvoer
worden gelegd overeenkomstig het Wetboek van Burgerlijke Rechtsvordering. In
geval van een vergoeding van de kosten ten behoeve van een partij aan wie een toe-
voeging is verleend krachtens het Landsbesluit kosteloze rechtskundige bijstand^23 ,
wordt het bedrag van de kosten betaald aan de griffier.

'''
Art. 16
[Vervallen bij P.B. 2015-80 met ingang van 01/01/16.]
'''
**Art. 17**^24
**Wijziging door inspecteur 1.** Indien de uitspraak van het Gerecht een aanslag in de onroerendezaakbelasting,
bedoeld in artikel 7 van de Landsverordening onroerendezaakbelasting 2014, betreft
en die uitspraak een wijziging van de vastgestelde waarde, bedoeld in artikel 5 van
de Landsverordening onroerendezaakbelasting 2014 betreft, wordt die wijziging door
of vanwege de Inspecteur der Belastingen aangebracht.

**2.** Indien de uitspraak van het Gerecht een aanslag in de grondbelasting, bedoeld in
de ingetrokken Grondbelastingverordening 1908 als bedoeld in artikel 18 van de
Landsverordening onroerendezaakbelasting 2014 betreft en die uitspraak een wijziging
van aanslagen in de legger ten gevolge heeft, wordt die wijziging door of vanwege
de Inspecteur der Belastingen aangebracht.

'''
Hoofdstuk 2
Hoger beroep^25
'''
**Art. 17a
Appellant, verweerder 1.** Tegen een uitspraak van het Gerecht als bedoeld in artikel 14 kunnen partijen hoger
beroep in stellen bij het Hof.

**2.** De partij die hoger beroep instelt, wordt aangeduid als appellant in hoger beroep,
de wederpartij als verweerder in hoger beroep.
**3.** Op het instellen en behandelen van het hoger beroep is het bepaalde bij of
krachtens dit hoofdstuk van toepassing.

'''
22 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
23 P.B. 1959, no. 198.
24 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
25 Dit hoofdstuk is ingevoegd bij P.B. 2015-80 met ingang van 01/01/16.
'''
**17** art. 15 **Landsverordening op het beroep in belastingzaken**


'''
Art. 17b
'''
**1.** Het hoger beroep wordt ingesteld binnen twee maanden na de dag van de toezen- **Termijn**
ding van de uitspraak van het Gerecht overeenkomstig artikel 14, derde lid.
**2.** Het hoger beroep wordt ingesteld door persoonlijke indiening bij dan wel toezen-
ding aan de griffier van een aan het Hof gericht beroepschrift.
**3.** Artikel 5, vierde lid, is van overeenkomstige toepassing.

'''
Art. 17c
'''
**1.** Het beroepschrift in hoger beroep is met redenen omkleed. **Eisen aan beroepschrift
2.** Indien de appellant in hoger beroep niet heeft voldaan aan het eerste lid, stelt de
griffier hem in de gelegenheid binnen een daarbij te stellen termijn het beroepschrift
aan te vullen.
**3.** Indien binnen de gestelde termijn het beroepschrift in hoger beroep niet is aange-
vuld, kan het Hof het hoger beroep niet-ontvankelijk verklaren.

'''
Art. 17d
'''
**1.** De griffier zendt onverwijld een afschrift van het beroepschrift in hoger beroep en **Verweerschrift**
van de daarbij behorende bescheiden aan de verweerder in hoger beroep.
**2.** De verweerder in hoger beroep kan binnen twee maanden na de dag van verzending
van het beroepschrift een verweerschrift indienen. Deze termijn kan door het Hof op
een met redenen omkleed schriftelijk verzoek worden verlengd.

**Art. 17e**
De griffier zendt een afschrift van het verweerschrift onverwijld aan de appellant in **Afschrift verweerschrift**
hoger beroep.

**Art. 17f**
Op de behandeling van het hoger beroep zijn voorts de artikelen 7a tot en met 15 en **Schakelbepaling**
17 van overeenkomstige toepassing.

'''
Art. 17g
'''
**1.** Het Hof bevestigt de uitspraak, hetzij met overneming hetzij met verbetering van **Uitspraak Hof**
de gronden, of doet, met gehele of gedeeltelijke vernietiging van de uitspraak, hetgeen
het Gerecht had behoren te doen.
**2.** Wanneer het Gerecht de onbevoegdheid of niet-ontvankelijkheid heeft uitgespro-
ken en het Hof deze uitspraak vernietigt met bevoegd verklaring van het Gerecht
onderscheidenlijk ontvankelijk verklaring van het beroep, wordt de zaak terugverwe-
zen naar het Gerecht om te worden hervat in de stand waarin de behandeling zich
bevond. Tegen de nieuwe uitspraak van het Gerecht staat hoger beroep open over-
eenkomstig dit hoofdstuk.

'''
Hoofdstuk 3
Slotbepalingen
'''
'''
Art. 18^26
'''
**1.** Van de indiener van een beroepschrift als bedoeld in artikel 5, eerste lid, en artikel **Griffierecht**
17b, tweede lid, wordt ten behoeve van ‘'s Landskas een griffierecht geheven.
**2.** De hoogte van de griffierechten, bedoeld in het eerste lid, wordt bij landsbesluit,
houdende algemene maatregelen^27 vastgesteld.
**3.** De griffier wijst de indiener van het beroepschrift op de verschuldigdheid van het
griffierecht en deelt hem mee dat het griffierecht binnen zes weken na de verzending
van zijn mededeling dient te zijn betaald aan het Gerecht onderscheidenlijk het Hof.

26 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
27 Zie Landsbesluit griffierechten beroep in belastingzaken (PB 2016-6), hierna opgenomen.

**Landsverordening op het beroep in belastingzaken 17** art. 18


**4.** Indien het griffierecht niet tijdig is betaald, wordt het beroep onderscheidenlijk
hoger beroep niet-ontvankelijk verklaard, tenzij redelijkerwijs niet kan worden ge-
oordeeld dat de indiener van het beroepschrift in verzuim is geweest.
**5.** Indien het Gerecht onderscheidenlijk het Hof het beroep onderscheidenlijk het
hoger beroep van een belanghebbende onderscheidenlijk een appellant geheel of
gedeeltelijk gegrond verklaart, houdt de uitspraak tevens in dat de Inspecteur het
door de indiener van het beroepschrift betaalde griffierecht vergoedt.

**Art. 19**^28
**Vrijstelling zegelbelasting** Alle niet in artikel 18 genoemde geschriften voortvloeiende uit de toepassing van
deze landsverordening zijn vrijgesteld van zegelbelasting en worden, indien registratie
wordt verlangd, kosteloos geregistreerd.

**Art. 20**^29
**Overlijden appellant 1.** Bij overlijden van de belanghebbende dan wel de appellant treden zijn erfgenamen
in zijn plaats; wat oproepingen en toezending van stukken betreft, voor zover het
overlijden bekend is.

**2.** De in het eerste lid genoemde erfgenamen kunnen worden vertegenwoordigd
door hun executeur testamentair of de bewindvoerder over de nalatenschap.

**Art. 21**^30
**Citeertitel** Deze landsverordening wordt aangehaald als: Landsverordening op het beroep in
belastingzaken.

**Art. 22
Inwerkingtreding** (vervallen)^31

'''
28 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
29 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
30 Gewijzigd bij P.B. 2015-80 met ingang van 01/01/16.
31 De oorspronkelijke regeling is gepubliceerd in P.B. 1941-12 en in werking getreden op 1 mei 1940.
'''
**17** art. 19 **Landsverordening op het beroep in belastingzaken**


### Landsbesluit griffierechten beroep in

### belastingzaken

**Landsbesluit, houdende algemene maatregelen, van de 15de januari 2015 houdende
vaststelling van de hoogte van de griffierechten, als bedoeld in artikel 18, eerste en
tweede lid, van de Landsverordening op het beroep in belastingzaken (Landsbesluit
griffierechten beroep in belastingzaken)**^1

**Art. 1**
Het griffierecht voor de indiening van een beroepschrift als bedoeld in artikel 5, eerste **Griffierecht beroep**
lid, van de Landsverordening beroep in belastingzaken, wordt vastgesteld op:
_a._ NAf. 50 voor een natuurlijke persoon;
_b._ NAf. 150 voor personenvennootschappen en rechtspersonen.

**Art. 2**
Het griffierecht voor de indiening van een beroepschrift als bedoeld in artikel 17b, **Griffierecht hoger beroep**
eerste lid, van de Landsverordening beroep in belastingzaken, wordt vastgesteld op:
_a._ NAf. 200 voor een natuurlijke persoon;
_b._ NAf. 500 voor personenvennootschappen en rechtspersonen.

**Art. 3**
Dit landsbesluit treedt in werking met ingang van de dag na die waarop het is bekend- **Inwerkingtreding**
gemaakt en werkt terug tot en met 1 januari 2016.

**Art. 4**
Dit landsbesluit wordt aangehaald als: Landsbesluit griffierechten beroep in belas- **Citeertitel**
tingzaken.

1 P.B. 2016-6

**Landsbesluit griffierechten beroep in belastingzaken 18** art. 4


### Rijkswet rechtsmacht Hoge Raad voor Aruba,

### Curaçao, Sint Maarten en voor Bonaire, Sint

### Eustatius en Saba

**1**

'''
Rijkswet van 20 juli 1961, houdende de "Cassatieregeling voor de Nederlandse
Antillen"
'''
#### § 1

'''
Algemene bepaling
'''
'''
Art. 1
'''
**1.** De Hoge Raad der Nederlanden neemt ten aanzien van burgerlijke en strafzaken
in Aruba, Curaçao en Sint Maarten en in de openbare lichamen Bonaire, Sint Eustatius
en Saba, voor zover in deze Rijkswet niet anders is bepaald, in overeenkomstige ge-
vallen, op overeenkomstige wijze en met overeenkomstige rechtsgevolgen als ten
aanzien van burgerlijke en strafzaken in het Europese deel van het Koninkrijk, kennis
van een beroep in cassatie, ingesteld hetzij door partijen, hetzij «in het belang der
wet» door de procureur-generaal bij de Hoge Raad.
**2.** De rechtsstelsels van Aruba, Curaçao en Sint Maarten en van de openbare lichamen
Bonaire, Sint Eustatius en Saba gelden niet als rechtsstelsels van vreemde staten in
de zin van artikel 79, eerste lid, onderdeel b, van de Wet op de rechterlijke organisatie.

'''
Art. 1a
De Hoge Raad neemt in belastingzaken met betrekking tot Aruba, Curaçao, Sint
Maarten en de openbare lichamen Bonaire, Sint Eustatius en Saba kennis van een
beroep in cassatie, ingesteld hetzij door de belanghebbende of door Onze Minister
van Financiën van onderscheidenlijk Aruba, Curaçao, Sint Maarten of Nederland,
hetzij «in het belang der wet» door de procureur-generaal bij de Hoge Raad.
'''
**Art. 1b
Prejudiciële vragen burger-
lijke zaken**

'''
De Hoge Raad neemt ten aanzien van burgerlijke zaken in Aruba, Curaçao en Sint
Maarten en in de openbare lichamen Bonaire, Sint Eustatius en Saba, voor zover in
deze rijkswet niet anders is bepaald, in overeenkomstige gevallen, op overeenkomstige
wijze en met overeenkomstige rechtsgevolgen als ten aanzien van burgerlijke zaken
in het Europese deel van het Koninkrijk, kennis van een gestelde prejudiciële vraag.
'''
**Art. 1c
Prejudiciële vragen belas-
tingzaken**

'''
De Hoge Raad neemt ten aanzien van belastingzaken in Aruba, Curaçao en Sint
Maarten en in de openbare lichamen Bonaire, Sint Eustatius en Saba, voor zover in
deze rijkswet niet anders is bepaald, in overeenkomstige gevallen, op overeenkomstige
wijze en met overeenkomstige rechtsgevolgen als ten aanzien van belastingzaken in
het Europese deel van het Koninkrijk, kennis van een gestelde prejudiciële vraag.
'''
'''
§ 2
Cassatie in burgerlijke zaken ingesteld door partijen
'''
'''
Art. 2-3
[Vervallen]
'''
'''
1 Inwerkingtredingsdatum: 01-03-1965; zoals laatstelijk gewijzigd bij: Stb. 2016, 291.
'''
**19** art. 1 **Rijkswet rechtsmacht**


**Art. 4**
De termijn voor het beroep in cassatie is drie maanden. In de gevallen, waarin de
termijn voor het hoger beroep korter is dan één maand, is de termijn voor het beroep
in cassatie het drievoud van de voor het hoger beroep bepaalde termijn met een mi-
nimum van één maand.

'''
Art. 5
Termijnen van verschij-
ning
'''
**1.** De termijnen van verschijning in vorderingsprocedures worden bij algemene
maatregel van rijksbestuur vastgesteld.
**2.** Indien het beroep in cassatie aanhangig wordt gemaakt volgens de regels die
gelden voor de verzoekprocedure, bericht de griffier van de Hoge Raad de verweerder
of belanghebbende over de indiening van het cassatieberoep.

'''
Art. 6
Vonnis uitvoerbaar bij
voorraad
'''
Het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba kan, indien dit wordt gevorderd, niettegenstaande
daartegen aan te wenden rechtsmiddelen, verklaren dat zijn vonnis uitvoerbaar bij
voorraad zal zijn, tenzij uit de wet of uit de aard van de zaak anders voortvloeit.

**Art. 7**
Bij de overeenkomstige toepassing van artikel 22 van de wet van 4 juli 1957, _Stb._ 233,
treedt de president van de Hoge Raad in de plaats van de president van de rechtbank.

**Art. 8**
De zaak kan bij de Hoge Raad ook worden bepleit door advocaten, ingeschreven bij
het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba.

'''
Art. 9
'''
**1.** Indien verwijzing der zaak naar een andere rechter moet plaats hebben, geschiedt
deze verwijzing steeds naar het Gemeenschappelijk Hof van Justitie van Aruba, Cura-
çao, Sint Maarten en van Bonaire, Sint Eustatius en Saba.
**2.** Het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba is bij de behandeling van een zaak, als bedoeld in het
vorige lid, zoveel mogelijk samengesteld uit rechters die nog niet over de zaak hebben
geoordeeld.
**3.** Indien de Hoge Raad ten principale recht heeft gedaan, wordt deze beslissing ten
uitvoer gelegd als een uitspraak in Aruba, Curaçao en Sint Maarten en in de openbare
lichamen Bonaire, Sint Eustatius en Saba in hoger beroep gegeven.

'''
§ 3
Cassatie in strafzaken ingesteld door partijen
'''
'''
Art. 10
'''
**1.** Partijen kunnen in strafzaken geen beroep in cassatie instellen tegen beschikkingen.
**2.** De verdachte kan geen beroep in cassatie instellen tegen bij verstek gewezen
vonnissen.
**3.** Voor het openbaar ministerie wordt een beroep in cassatie ingesteld door een
procureur-generaal bij het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao,
Sint Maarten en van Bonaire, Sint Eustatius en Saba.

'''
Art. 11
'''
**1.** Voor het instellen van het beroep in cassatie staat de verdachte en een procureur-
generaal bij het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten
en van Bonaire, Sint Eustatius en Saba een termijn open van veertien vrije dagen. Bij
algemene maatregel van rijksbestuur kan een langere termijn worden vastgesteld

**Rijkswet rechtsmacht 19** art. 11


'''
voor de gevallen, waarin de verdachte geen woonplaats heeft op het eiland waar de
beslissing, waartegen beroep in cassatie wordt ingesteld, is uitgesproken.
'''
**2.** Alvorens de stukken van het geding aan de griffier van de Hoge Raad worden ge-
zonden, wordt aan de raadsman van de verdachte, indien hij dit verzoekt, gelegenheid
gegeven de stukken in te zien.
**3.** Aanzeggingen en kennisgevingen als voorgeschreven in titel III van het derde Boek
van het Wetboek van Strafvordering van het Europese deel van het Koninkrijk geschie-
den op de in Aruba, Curaçao en Sint Maarten en in de openbare lichamen Bonaire,
Sint Eustatius en Saba gebruikelijke wijze, en, voor zover zij moeten uitgaan van de
procureur-generaal bij de Hoge Raad, op diens uitnodiging door de zorg van een
procureur-generaal bij het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao,
Sint Maarten en van Bonaire, Sint Eustatius en Saba.

'''
Art. 12
[Vervallen]
'''
'''
Art. 13
Als raadsman van de verdachte kunnen bij de Hoge Raad ook optreden advocaten,
ingeschreven bij het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint
Maarten en van Bonaire, Sint Eustatius en Saba.
'''
'''
Art. 14
'''
**1.** Indien verwijzing van de zaak naar een andere rechter moet plaats hebben, ge-
schiedt deze steeds naar het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao,
Sint Maarten en van Bonaire, Sint Eustatius en Saba.
**2.** Indien de Hoge Raad de zaak ten principale kan afdoen, is de Hoge Raad bevoegd
het opleggen van straf geheel of ten dele over te laten aan het Gemeenschappelijk
Hof van Justitie van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en
Saba.
**3.** Het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba is in de gevallen in de beide voorgaande leden bedoeld,
zoveel mogelijk samengesteld uit rechters die nog niet over de zaak hebben geoor-
deeld.

**Art. 15
Toezending afschrift ar-
rest**

**1.** Een door de griffier van de Hoge Raad gewaarmerkt afschrift van het arrest van
de Hoge Raad wordt zo spoedig mogelijk door de procureur-generaal bij de Hoge
Raad gezonden aan de procureur-generaal bij het Gemeenschappelijk Hof van Justitie
van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius en Saba.
**2.** De procureur-generaal bij de Hoge Raad geeft tevens van de beslissing kennis aan
de verdachte en aan de benadeelde partij indien deze zich in het geding heeft gevoegd.
**3.** De procureur-generaal bij de Hoge Raad verstrekt desgevraagd een afschrift van
het arrest van de Hoge Raad aan de verdachte en de benadeelde partij, bedoeld in
het tweede lid.
**4.** Indien bij het arrest ten principale recht is gedaan, wordt deze beslissing, voor
zover geen termen zijn gevonden tot het verlenen van gratie, ten uitvoer gelegd als
een uitspraak in Aruba, Curaçao en Sint Maarten en in de openbare lichamen Bonaire,
Sint Eustatius en Saba in hoger beroep gegeven.

'''
§ 3a
Cassatie in belastingzaken ingesteld door de belanghebbende of de
minister
'''
'''
Art. 15a
'''
**1.** De belanghebbende die bevoegd was in belastingzaken hoger beroep in te stellen
bij het Gemeenschappelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van
Bonaire, Sint Eustatius en Saba en Onze Minister van Financiën van Aruba, Curaçao,

**19** art. 13 **Rijkswet rechtsmacht**


Sint Maarten of Nederland kunnen bij de Hoge Raad beroep in cassatie instellen tegen
uitspraken in belastingzaken van het Gemeenschappelijk Hof. Tegen andere beslis-
singen van het Gemeenschappelijk Hof kan slechts tegelijkertijd met het beroep in
cassatie tegen de uitspraak beroep in cassatie worden ingesteld.

**2.** Het beroep kan worden ingesteld binnen twee maanden na dagtekening van het
afschrift van de uitspraak van het Gemeenschappelijk Hof.
**3.** Afdeling 4 van hoofdstuk V, met uitzondering van artikel 28, van de Algemene wet
inzake rijksbelastingen is van overeenkomstige toepassing.
**4.** Indien verwijzing naar een andere rechter moet plaats hebben, geschiedt deze
steeds naar het Gemeenschappelijk Hof.
**5.** Het Gemeenschappelijk Hof is in het geval, bedoeld in het vierde lid, zoveel moge-
lijk samengesteld uit rechters die nog niet over de zaak hebben geoordeeld.

'''
§ 4
Cassatie in het belang der wet
'''
**Art. 16**
In het geval bedoeld in artikel 456, laatste lid, van het Wetboek van Strafvordering
van het Europese deel van het Koninkrijk zendt de procureur-generaal bij de Hoge
Raad het aldaar bedoelde afschrift aan een procureur-generaal bij het Gemeenschap-
pelijk Hof van Justitie van Aruba, Curaçao, Sint Maarten en van Bonaire, Sint Eustatius
en Saba.

'''
§ 5
Overgangs- en slotbepalingen
'''
**Art. 17**
De Hoge Raad neemt geen kennis van een beroep in cassatie ingesteld door partijen
tegen eindvonnissen of eindbeschikkingen, die in de Nederlandse Antillen en Aruba
gewezen zijn voordat deze rijkswet aldaar in werking is getreden.

**Art. 18**
[Bevat wijzigingen in andere regelgeving.]

**Art. 19**
Deze wet wordt aangehaald als: Rijkswet rechtsmacht Hoge Raad voor Aruba, Curaçao,
Sint Maarten en voor Bonaire, Sint Eustatius en Saba.

**Rijkswet rechtsmacht 19** art. 19


### Rijkswet goedkeuring Protocol nr. 16 EVRM

'''
Rijkswet van 5 december 2018, houdende goedkeuring van het op 2 oktober 2013
te Straatsburg tot stand gekomen Protocol nr. 16 bij het Verdrag tot bescherming
van de rechten van de mens en de fundamentele vrijheden (Trb. 2013, 241 en Trb.
2014, 74)^1
'''
'''
Art. 1
Het op 2 oktober 2013 te Straatsburg tot stand gekomen Protocol nr. 16 bij het Verdrag
tot bescherming van de rechten van de mens en de fundamentele vrijheden, waarvan
de Engelse en de Franse tekst, en de vertaling in het Nederlands zijn geplaatst in
Tractatenblad 2013, 241 en Tractatenblad 2014, 74, wordt goedgekeurd voor het gehele
Koninkrijk.
'''
'''
Art. 2
Deze rijkswet treedt in werking met ingang van de dag na de datum van uitgifte van
het Staatsblad waarin zij wordt geplaatst.
'''
'''
1 Inwerkingtredingsdatum: 19-01-2019. Het Protocol treedt voor het Koninkrijk der Nederlanden in
werking per 01-06-2019.
'''
**20** art. 1 **Rijkswet van 5 december 2018**


### Algemene wet inzake rijksbelastingen

**1**

**Wet van 2 juli 1959, houdende regelen, welke aan een aantal rijksbelastingen
gemeen zijn**

'''
Hoofdstuk V
Bezwaar en beroep
'''
'''
Afdeling 2
Beroep
'''
'''
Art. 27g
'''
**1.** In afwijking van artikel 8:79, tweede lid, van de Algemene wet bestuursrecht ge- **Afschriften aan anderen**
schiedt de verstrekking overeenkomstig die bepaling van afschriften of uittreksels
aan anderen dan partijen met machtiging van de rechtbank.
**2.** Met betrekking tot schriftelijke uitspraken blijft de machtiging, bedoeld in het
eerste lid, slechts achterwege indien op een voor de uitspraak gedaan verzoek van
een der partijen de rechtbank oordeelt dat ook na anonimisering de geheimhouding
van persoonlijke en financiële gegevens onvoldoende wordt beschermd en bovendien
het belang van de openbaarheid van de rechtspraak niet opweegt tegen dit belang.

'''
Afdeling 2a
Prejudiciële vragen aan de Hoge Raad
'''
'''
Art. 27ga
Prejudiciële vraag Rb aan
HR
'''
**1.** De rechtbank kan in de procedure op verzoek van een partij of ambtshalve de Hoge
Raad een rechtsvraag voorleggen ter beantwoording bij wijze van prejudiciële beslis-
sing, indien een antwoord op deze vraag nodig is om op het beroep te beslissen.
**2.** Alvorens de Hoge Raad een vraag voor te leggen, stelt de rechtbank partijen in de **Hoorplicht**
gelegenheid zich uit te laten over het voornemen om de Hoge Raad een vraag voor
te leggen, alsmede over de inhoud van de voor te leggen vraag.
**3.** De beslissing waarbij de Hoge Raad een vraag wordt voorgelegd, vermeldt het
onderwerp van geschil, de door de rechtbank vastgestelde feiten en de door partijen
ingenomen standpunten.
**4.** De griffier zendt onverwijld een afschrift van de beslissing aan de Hoge Raad. De
griffier zendt afschriften van de andere op de zaak betrekking hebbende stukken op
diens verzoek aan de griffier van de Hoge Raad.
**5.** De beslissing om een vraag ter beantwoording aan de Hoge Raad voor te leggen, **Schorsende werking**
schorst de behandeling van de zaak totdat een afschrift van de beslissing van de Hoge
Raad is ontvangen.
**6.** Indien in een andere lopende procedure het antwoord op een vraag rechtstreeks
van belang is om in die procedure te beslissen, kan de rechtbank op verzoek van een
partij of ambtshalve de behandeling van de zaak schorsen totdat de Hoge Raad uit-
spraak heeft gedaan. Alvorens te beslissen als bedoeld in de eerste volzin, stelt de
rechtbank partijen in de gelegenheid zich daarover uit te laten.

'''
Art. 27gb
Minister in plaats van in-
specteur
'''
In een procedure ter beantwoording van een rechtsvraag bij wijze van prejudiciële
beslissing, treedt bij de Hoge Raad Onze Minister op als partij in plaats van de inspec-
teur.

1 Inwerkingtredingsdatum: 01-11-1961; zoals laatstelijk gewijzigd bij: Stb. 2018, 507.

**Algemene wet inzake rijksbelastingen (uittreksel) 21** art. 27gb


**Art. 27gc
Behandeling door HR 1.** Tenzij de Hoge Raad, gehoord de procureur-generaal, aanstonds beslist overeen-
komstig het achtste lid, stelt hij partijen in de gelegenheid om binnen een door de
Hoge Raad te bepalen termijn schriftelijk opmerkingen te maken.

**2.** De Hoge Raad kan bepalen dat ook anderen dan partijen binnen een door de Hoge
Raad te bepalen termijn in de gelegenheid worden gesteld om schriftelijke opmer-
kingen als bedoeld in het eerste lid te maken. De aankondiging hiervan geschiedt op
een door de Hoge Raad te bepalen wijze.
**3.** Schriftelijke opmerkingen worden ter griffie van de Hoge Raad ingediend.
**4.** Indien het belang van de zaak dit geraden doet voorkomen, kan de Hoge Raad,
hetzij ambtshalve, hetzij op een daartoe strekkend verzoek, een termijn bepalen voor
mondelinge of schriftelijke toelichting door partijen. De Hoge Raad kan, indien hij
een mondelinge toelichting heeft bevolen, degenen die ingevolge het tweede lid
schriftelijke opmerkingen hebben gemaakt, uitnodigen ter zitting aanwezig te zijn
teneinde over hun opmerkingen te worden gehoord. Artikel 29c, eerste, derde en
vierde lid, is van overeenkomstige toepassing.
**5.** Een schriftelijke toelichting wordt door de partij getekend en ter griffie van de
Hoge Raad ingediend.
**Conclusie A-G 6.** Nadat de toelichtingen zijn gehouden of ontvangen of, indien deze niet zijn ver-
zocht, na het verstrijken van de termijn voor het maken van schriftelijke opmerkingen,
stelt de griffier, indien de procureur-generaal bij de Hoge Raad de wens te kennen
heeft gegeven om te worden gehoord, alle stukken in diens handen. De procureur-
generaal brengt zijn schriftelijke conclusie ter kennis van de Hoge Raad. Partijen
kunnen binnen twee weken na verzending van het afschrift van de conclusie hun
schriftelijk commentaar daarop doen toekomen aan de Hoge Raad.
**Uitspraak HR 7.** De uitspraak van de Hoge Raad wordt schriftelijk gedaan. De Hoge Raad kan de
vraag, bedoeld in artikel 27ga, herformuleren. Tenzij de herformulering van onderge-
schikte betekenis is, stelt de Hoge Raad partijen in de gelegenheid om binnen een
door de Hoge Raad te bepalen termijn schriftelijke opmerkingen te maken.
**8.** De Hoge Raad ziet af van beantwoording van de vraag, bedoeld in artikel 27ga,
indien hij, gehoord de procureur-generaal, oordeelt dat de vraag zich niet voor beant-
woording bij wijze van prejudiciële beslissing leent of dat de vraag van onvoldoende
gewicht is om beantwoording te rechtvaardigen. De Hoge Raad kan zich bij de ver-
melding van de gronden van zijn beslissing beperken tot dit oordeel.
**9.** Indien het antwoord op de vraag, bedoeld in artikel 27ga, nadat deze is gesteld,
niet meer nodig is om in de procedure, bedoeld in artikel 27ga, te beslissen, kan de
Hoge Raad, indien hem dat geraden voorkomt, de vraag desondanks beantwoorden.
**10.** De griffier zendt onverwijld een afschrift van de beslissing aan de rechtbank die
de vraag, bedoeld in artikel 27ga, heeft voorgelegd en aan partijen. De griffier zendt
daarbij aan de rechtbank die de vraag heeft voorgelegd tevens een afschrift van:
_a._ de schriftelijke opmerkingen, bedoeld in het derde lid;
_b._ de schriftelijke toelichtingen, bedoeld in het vierde lid;
_c._ de conclusie van de procureur-generaal, bedoeld in het zesde lid; en
_d._ het schriftelijke commentaar, bedoeld in het zesde lid.
Artikel 30 is van overeenkomstige toepassing.

**Art. 27gd
Overeenkomstige toepas-
sing Awb**

'''
Bij de beantwoording van de vraag, bedoeld in artikel 27ga, zijn de artikelen 8:14 tot
en met 8:25, 8:27 tot en met 8:29, 8:31 tot en met 8:40a, 8:41a , 8:44 , 8:45 , 8:60 , 8:71
en 8:77 tot en met 8:79 van de Algemene wet bestuursrecht van overeenkomstige
toepassing, voor zover in deze afdeling niet anders is bepaald.
'''
**Art. 27ge
Uitspraak door Rb** Behoudens indien het antwoord op de vraag, bedoeld in artikel 27ga, niet meer nodig
is om op het beroep te beslissen, beslist de rechtbank, nadat zij partijen de gelegenheid
heeft gegeven zich schriftelijk over de uitspraak van de Hoge Raad uit te laten, met
inachtneming van deze uitspraak.

**21** art. 27gc **Algemene wet inzake rijksbelastingen (uittreksel)**


'''
Afdeling 3
Hoger beroep
'''
'''
Art. 27h
'''
**1.** In afwijking van artikel 8:104, eerste lid, aanhef en onder a, van de Algemene wet **Hoger beroep**
bestuursrecht kunnen slechts de belanghebbende die bevoegd was beroep bij de
rechtbank in te stellen en de inspecteur hoger beroep instellen.
**2.** De artikelen 24a, tweede lid , 26a, derde lid , 26b, eerste lid , en 27c tot en met 27ge
zijn van overeenkomstige toepassing in hoger beroep.
**3.** De werking van de uitspraak van de rechtbank of van de voorzieningenrechter
wordt opgeschort totdat de termijn voor het instellen van hoger beroep is verstreken
of, indien hoger beroep is ingesteld, op het hoger beroep onherroepelijk is beslist. De
eerste volzin geldt niet indien de uitspraak een beroep tegen het niet tijdig nemen
van een besluit betreft.

'''
Afdeling 4
Beroep in cassatie bij de Hoge Raad
'''
**Art. 27i-27s**
[Vervallen]

'''
Art. 28
Cassatieberoep bij de
Hoge Raad
'''
**1.** De belanghebbende die bevoegd was om hoger beroep bij het gerechtshof in te
stellen en Onze Minister kunnen bij de Hoge Raad beroep in cassatie instellen tegen:
_a._ een uitspraak van het gerechtshof die overeenkomstig afdeling 8.2.6 of artikel
8:104, eerste lid, onderdeel c van de Algemene wet bestuursrecht is gedaan, en
_b._ een uitspraak van de voorzieningenrechter van het gerechtshof die overeenkomstig
artikel 8:86 van die wet is gedaan.
**2.** De belanghebbende en Onze Minister kunnen bij de Hoge Raad voorts beroep in **Uitspraak op verzet**
cassatie instellen tegen een uitspraak van de rechtbank als bedoeld in artikel 8:55,
zevende lid, onderdelen a en b, van die wet.
**3.** Indien de belanghebbenden en Onze Minister daarmee schriftelijk instemmen, **Sprongcassatie**
kan bij de Hoge Raad voorts beroep in cassatie worden ingesteld tegen een uitspraak
van de rechtbank als bedoeld in afdeling 8.2.6 of artikel 8:104, eerste lid, onderdeel
c van de Algemene wet bestuursrecht , alsmede tegen een uitspraak van de voorzie-
ningenrechter van de rechtbank als bedoeld in artikel 8:86 van die wet.
**4.** Geen beroep in cassatie kan worden ingesteld tegen:
_a._ een uitspraak van het gerechtshof of de rechtbank overeenkomstig artikel 8:54,
eerste lid, van de Algemene wet bestuursrecht ;
_b._ een uitspraak van de rechtbank overeenkomstig artikel 8:54a van die wet ;
_c._ een uitspraak van de voorzieningenrechter van het gerechtshof of de rechtbank
overeenkomstig artikel 8:84, tweede lid, van die wet , en
_d._ een uitspraak van de voorzieningenrechter van het gerechtshof of de rechtbank
overeenkomstig artikel 8:75a, eerste lid, van de Algemene wet bestuursrecht , in ver-
band met artikel 8:84, vijfde lid, van de Algemene wet bestuursrecht.
**5.** Tegen andere beslissingen van het gerechtshof, van de rechtbank of van de voor-
zieningenrechter kan slechts tegelijkertijd met het beroep in cassatie tegen de in het
eerste of het tweede lid bedoelde uitspraak beroep in cassatie worden ingesteld.
**6.** De artikelen 24a, tweede en vijfde lid^2 , 26a, derde lid , en 26b, eerste lid , zijn van
overeenkomstige toepassing.
**7.** De werking van de uitspraak van het gerechtshof, de rechtbank of de voorzienin-
genrechter wordt opgeschort totdat de termijn voor het instellen van beroep in cas-
satie is verstreken of, indien beroep in cassatie is ingesteld, op het beroep in cassatie
is beslist.

2 Gewijzigd bij Stb. 2019, nr. 512 (Overige fiscale maatregelen 2020).

**Algemene wet inzake rijksbelastingen (uittreksel) 21** art. 28


**Art. 28a
Verplichting griffier 1.** De griffier van de Hoge Raad doet van het ingestelde beroep in cassatie zo spoedig
mogelijk mededeling aan de griffier van het gerecht dat de aangevallen uitspraak
heeft gedaan.

**2.** De griffier van dit gerecht zendt een afschrift van de uitspraak en de op de uitspraak
betrekking hebbende gedingstukken die onder hem berusten, onverwijld aan de
griffier van de Hoge Raad.
**3.** De griffier maakt zo nodig onverwijld alsnog een proces-verbaal op van de zitting
en zendt dit aan de griffier van de Hoge Raad.

**Art. 28b
Vervanging mondelinge
uitspraak**

**1.** Indien beroep in cassatie is ingesteld tegen een mondelinge uitspraak, wordt de
mondelinge uitspraak vervangen door een schriftelijke uitspraak, tenzij het beroep
in cassatie kennelijk niet-ontvankelijk is of de Hoge Raad anders bepaalt. De vervan-
ging geschiedt binnen zes weken na de dag waarop de mededeling, bedoeld in artikel
28a, eerste lid , is gedaan. Het beroep in cassatie wordt geacht gericht te zijn tegen
de schriftelijke uitspraak.
**2.** Het gerecht dat de mondelinge uitspraak heeft gedaan, verzendt de vervangende
schriftelijke uitspraak gelijktijdig aan partijen en aan de griffier van de Hoge Raad.
**3.** In afwijking van artikel 6:5, eerste lid, onderdeel d, van de Algemene wet bestuurs-
recht kan de indiener van het beroepschrift de gronden van het beroep verstrekken
of aanvullen tot zes weken na de dag waarop de schriftelijke uitspraak aan hem is
verzonden.

**Art. 29
Schakelbepaling Awb** Op de behandeling van het beroep in cassatie zijn de artikelen 8:14 tot en met 8:25,
8:27 tot en met 8:29, 8:31 tot en met 8:40a , 8:41, met uitzondering van het tweede lid
, 8:41a , 8:43 tot en met 8:45 , 8:52 , 8:53 , 8:60 , 8:70 , 8:71 , 8:72a , 8:75 tot en met 8:79
, 8:109 , 8:110, derde en vijfde lid , 8:111 , 8:112 , 8:113, tweede lid , 8:114 en de titels 8.4
en 8.6 van de Algemene wet bestuursrecht van overeenkomstige toepassing, voor
zover in deze afdeling niet anders is bepaald.


`}
      </ReactMarkdown>
    </div>
  );
}
