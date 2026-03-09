import { Language } from "../app/i18n";

export type ArtigoCardEntry = {
  id: number;
  title: string;
  subtitle?: string;
  preview: string;
  authors?: string[];
  body: string[];
  image?: string;
  sourceSiteLabel: string;
  sourceSiteUrl: string;
};

const articlesByLanguage: Record<Language, ArtigoCardEntry[]> = {
  "pt-BR": [
    {
      id: 1,
      title:
        "Brasil, de líder regional a pária internacional: uma história de derrubada",
      preview:
        "Análise sobre o papel do governo brasileiro no combate à COVID-19 e os impactos regionais e globais de ações ineficazes.",
      authors: [
        "Alice Carolline Costa Querino (University of Sussex)",
        "Júlia Portela Malta Brandão (UNILA)",
        "Lígia Maria Freitas Silveira (UNILA)",
      ],
      body: [
        "A pandemia de coronavírus levou governos ao redor do mundo a adotar medidas restritivas para ajudar a combater o vírus em seus respectivos países. Apesar disso, alguns governos adotaram uma postura negacionista em torno da COVID-19, dificultando a adoção de ações para conter a doença. Uma dessas posturas é a do presidente brasileiro, Jair Bolsonaro, que vem tentando minimizar a doença, chamando-a de \"gripezinha\", além de tomar ações (ou não) que vão contra a comunidade científica, incluindo o atraso brasileiro na obtenção da vacina. Essa postura levou o país a ser considerado o novo epicentro do vírus e até uma possível ameaça regional. Nesse sentido, este artigo busca analisar o papel do governo brasileiro no combate à pandemia de coronavírus, tentando compreender como suas ações ineficazes se tornaram uma ameaça regional (e possivelmente global) e quais são os impactos disso. Como resultado, concluímos que o discurso negacionista de Bolsonaro, aliado à sua falta de ação em torno da pandemia de coronavírus, é e continuará sendo um fator crucial para grandes perdas no Brasil, com seus impactos reverberando para além dos anos da pandemia.",
      ],
      image:
        "https://www.encontro2021.abri.org.br/resources/content/enabri2021/configuracao3_1619461096_1_8_abri21_identidade_site(2).jpg?1619461096",
      sourceSiteLabel: "Veja no site do artigo",
      sourceSiteUrl: "https://www.encontro2021.abri.org.br/trabalho/view?ID_TRABALHO=2673",
    },
    {
      id: 2,
      title: "PERSPECTIVAS DE GÊNERO E DESENVOLVIMENTO NO CONTINENTE AFRICANO:",
      subtitle:
        "UMA ANÁLISE DOS QUINZE ANOS DA RATIFICAÇÃO DO PROTOCOLO DE MAPUTO NA NAMÍBIA (2004-2019)",
      preview:
        "Análise sobre igualdade de gênero no continente africano a partir da ratificação do Protocolo de Maputo na Namíbia.",
      authors: [
        "Alice Carolline Costa Querino",
        "University of Sussex (US)",
        "Júlia Portela Malta Brandão",
        "PUC-RS",
        "Lígia Maria Freitas Silveira",
        "UNILA",
      ],
      body: [
        "A busca pela igualdade entre homens e mulheres não é atual, mas tem sido intensificada a cada ano na medida em que sociedade civil, organizações nacionais e internacionais e os Estados criam mecanismos que combatem a desigualdade de gênero. No contexto africano essa luta tem colocado o continente em posição de destaque no cenário internacional. Criado pela União Africana (UA), em 2003, o Protocolo de Maputo tem por objetivo garantir que os direitos das mulheres africanas sejam alcançados. Dessa forma, os quarenta países que, até hoje, ratificaram o Protocolo, se comprometeram a buscar a garantia de participação plena das mulheres no desenvolvimento africano, integrando perspectivas de gênero em suas decisões políticas e legislações de seus países. Nesse sentido, um dos seus principais aspectos é a implementação de políticas que visem a igualdade de gênero a partir da realidade das mulheres africanas. Dessa forma, o presente artigo busca analisar as perspectivas de gênero no continente africano por meio da ratificação do Protocolo de Maputo na Namíbia. Para isso, procura-se compreender primeiramente quais são as perspectivas de gênero e igualdade de gênero presentes (ou não) no continente africano, a partir de uma revisão bibliográfica desses conceitos com autoras que discorrem sobre essa temática desde a realidade africana. Posteriormente, será feita uma análise documental do Protocolo de Maputo, mostrando suas principais políticas para a promoção da igualdade de gênero. Por fim, será analisada a sua implementação no Estado africano da Namíbia, no período de 2004 a 2019, apresentando os principais dados sobre a...",
      ],
      image: "https://periodicos.uff.br/public/journals/105/cover_issue_2656_pt_BR.jpg",
      sourceSiteLabel: "Veja no site do artigo",
      sourceSiteUrl: "https://periodicos.uff.br/ocosmopolitico/article/view/54450",
    },
  ],
  en: [
    {
      id: 1,
      title:
        "Brazil, from a regional leader to international outcast: a history of an overthrow.",
      preview:
        "Analysis of the Brazilian government's role in combating COVID-19 and the regional and global impacts of ineffective actions.",
      authors: [
        "Alice Carolline Costa Querino (University of Sussex)",
        "Júlia Portela Malta Brandão (UNILA)",
        "Lígia Maria Freitas Silveira (UNILA)",
      ],
      body: [
        "The coronavirus pandemic has prompted governments around the world to take restrictive measures to help fight the virus in their respective countries. Despite this, some governments have adopted a denialist stance around COVID-19, making it difficult to take action to contain the disease. One of these attitudes is that of the Brazilian president, Jair Bolsonaro, who has been trying to minimize the disease, calling it a \"gripezinha\" in addition to taking actions (or not) that go against the scientific community, including the Brazilian delay in obtaining the vaccine. This attitude led the country to be considered the new epicenter of the virus and even a possible regional threat. In this sense, this paper seeks to analyze the role of the Brazilian government in combating the coronavirus pandemic, trying to understand how its ineffective actions have become a regional (and possibly global) threat and what are the impacts of this. As a result, we conclude that Bolsonaro's denialist speech coupled with his lack of action around the coronavirus pandemic is and will continue to be a crucial factor for major losses in Brazil, with its impacts reverberating beyond the pandemic years.",
      ],
      image:
        "https://www.encontro2021.abri.org.br/resources/content/enabri2021/configuracao3_1619461096_1_8_abri21_identidade_site(2).jpg?1619461096",
      sourceSiteLabel: "Veja no site do artigo",
      sourceSiteUrl: "https://www.encontro2021.abri.org.br/trabalho/view?ID_TRABALHO=2673",
    },
    {
      id: 2,
      title: "GENDER AND DEVELOPMENT PERSPECTIVES ON THE AFRICAN CONTINENT:",
      subtitle:
        "AN ANALYSIS OF THE FIFTEEN YEARS OF THE RATIFICATION OF THE MAPUTO PROTOCOL IN NAMIBIA (2004-2019)",
      preview:
        "Analysis of gender equality on the African continent through the ratification of the Maputo Protocol in Namibia.",
      authors: [
        "Alice Carolline Costa Querino",
        "University of Sussex (US)",
        "Júlia Portela Malta Brandão",
        "PUC-RS",
        "Lígia Maria Freitas Silveira",
        "UNILA",
      ],
      body: [
        "The search for equality between men and women is not current, but it has been intensified each year as civil society, national and international organizations, and States create mechanisms that combat gender inequality. In the African context, this struggle has placed the continent in a prominent position on the international stage. Created by the African Union (AU), in 2003, the Maputo Protocol aims to ensure that the rights of African women are achieved. In this way, the forty countries that, to this day, have ratified the Protocol, committed themselves to seeking the guarantee of full participation of women in African development, integrating gender perspectives into their political decisions and legislation of their countries. In this sense, one of its main aspects is the implementation of policies aimed at gender equality based on the reality of African women. Thus, this article seeks to analyze gender perspectives on the African continent through the ratification of the Maputo Protocol in Namibia. To do this, it seeks to first understand what gender and gender equality perspectives are present (or not) on the African continent, from a bibliographic review of these concepts with women authors who discuss this theme from the African reality. Subsequently, a documentary analysis of the Maputo Protocol will be carried out, showing its main policies for the promotion of gender equality. Finally, its implementation in the African State of Namibia will be analyzed, in the period from 2004 to 2019, presenting the main data on the...",
      ],
      image: "https://periodicos.uff.br/public/journals/105/cover_issue_2656_pt_BR.jpg",
      sourceSiteLabel: "See on the article website",
      sourceSiteUrl: "https://periodicos.uff.br/ocosmopolitico/article/view/54450",
    },
  ],
  es: [
    {
      id: 1,
      title:
        "Brasil, de líder regional a paria internacional: una historia de un derrocamiento",
      preview:
        "Análisis del papel del gobierno brasileño en el combate a la COVID-19 y los impactos regionales y globales de acciones ineficaces.",
      authors: [
        "Alice Carolline Costa Querino (University of Sussex)",
        "Júlia Portela Malta Brandão (UNILA)",
        "Lígia Maria Freitas Silveira (UNILA)",
      ],
      body: [
        "La pandemia del coronavirus llevó a gobiernos de todo el mundo a adoptar medidas restrictivas para ayudar a combatir el virus en sus respectivos países. A pesar de esto, algunos gobiernos han adoptado una postura negacionista en torno a la COVID-19, dificultando la adopción de acciones para contener la enfermedad. Una de estas posturas es la del presidente brasileño, Jair Bolsonaro, quien ha estado intentando minimizar la enfermedad, llamándola una \"gripecita\", además de tomar acciones (o no) que van en contra de la comunidad científica, incluido el retraso brasileño en obtener la vacuna. Esta postura llevó al país a ser considerado el nuevo epicentro del virus e incluso una posible amenaza regional. En este sentido, este artículo busca analizar el papel del gobierno brasileño en el combate a la pandemia del coronavirus, intentando comprender cómo sus acciones ineficaces se han convertido en una amenaza regional (y posiblemente global) y cuáles son los impactos de esto. Como resultado, concluimos que el discurso negacionista de Bolsonaro, junto con su falta de acción en torno a la pandemia del coronavirus, es y continuará siendo un factor crucial para grandes pérdidas en Brasil, con sus impactos reverberando más allá de los años de la pandemia.",
      ],
      image:
        "https://www.encontro2021.abri.org.br/resources/content/enabri2021/configuracao3_1619461096_1_8_abri21_identidade_site(2).jpg?1619461096",
      sourceSiteLabel: "Veja no site do artigo",
      sourceSiteUrl: "https://www.encontro2021.abri.org.br/trabalho/view?ID_TRABALHO=2673",
    },
    {
      id: 2,
      title: "PERSPECTIVAS DE GÉNERO Y DESARROLLO EN EL CONTINENTE AFRICANO:",
      subtitle:
        "UN ANÁLISIS DE LOS QUINCE AÑOS DE LA RATIFICACIÓN DEL PROTOCOLO DE MAPUTO EN NAMIBIA (2004-2019)",
      preview:
        "Análisis sobre igualdad de género en el continente africano a partir de la ratificación del Protocolo de Maputo en Namibia.",
      authors: [
        "Alice Carolline Costa Querino",
        "University of Sussex (US)",
        "Júlia Portela Malta Brandão",
        "PUC-RS",
        "Lígia Maria Freitas Silveira",
        "UNILA",
      ],
      body: [
        "La búsqueda de la igualdad entre hombres y mujeres no es actual, pero se ha intensificado cada año en la medida en que la sociedad civil, organizaciones nacionales e internacionales y los Estados crean mecanismos que combaten la desigualdad de género. En el contexto africano esta lucha ha colocado al continente en una posición destacada en el escenario internacional. Creado por la Unión Africana (UA), en 2003, el Protocolo de Maputo tiene como objetivo garantizar que se alcancen los derechos de las mujeres africanas. De esta forma, los cuarenta países que, hasta hoy, ratificaron el Protocolo, se comprometieron a buscar la garantía de la participación plena de las mujeres en el desarrollo africano, integrando perspectivas de género en sus decisiones políticas y legislaciones de sus países. En este sentido, uno de sus principales aspectos es la implementación de políticas que apunten a la igualdad de género a partir de la realidad de las mujeres africanas. De esta forma, el presente artículo busca analizar las perspectivas de género en el continente africano por medio de la ratificación del Protocolo de Maputo en Namibia. Para ello, se busca comprender primeramente cuáles son las perspectivas de género e igualdad de género presentes (o no) en el continente africano, a partir de una revisión bibliográfica de estos conceptos con autoras que discurren sobre esta temática desde la realidad africana. Posteriormente, se hará un análisis documental del Protocolo de Maputo, mostrando sus principales políticas para la promoción de la igualdad de género. Por fin, se analizará su implementación en el Estado africano de Namibia, en el período de 2004 a 2019, presentando los principales datos sobre la...",
      ],
      image: "https://periodicos.uff.br/public/journals/105/cover_issue_2656_pt_BR.jpg",
      sourceSiteLabel: "Ver en el sitio del artículo",
      sourceSiteUrl: "https://periodicos.uff.br/ocosmopolitico/article/view/54450",
    },
  ],
};

export function getArtigoCards(language: Language): ArtigoCardEntry[] {
  return articlesByLanguage[language];
}
