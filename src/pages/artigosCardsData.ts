import { Language } from "../app/i18n";

export type ArtigoCardEntry = {
  id: number;
  title: string;
  preview: string;
  body: string[];
  sourceSiteLabel: string;
  sourceSiteUrl: string;
};

const articlesByLanguage: Record<Language, ArtigoCardEntry[]> = {
  "pt-BR": [
    {
      id: 1,
      title: "Título do Artigo 1",
      preview: "Breve descrição do artigo número 1.",
      body: [
        "Este artigo discute como estratégias de inclusão podem ser incorporadas desde o planejamento inicial de projetos institucionais, evitando ações superficiais e fortalecendo impacto de longo prazo.",
        "A análise também apresenta exemplos práticos de implementação, com foco em monitoramento contínuo, participação social e definição de indicadores de resultados alinhados à realidade do território.",
      ],
      sourceSiteLabel: "Site oficial do Artigo 1",
      sourceSiteUrl: "https://example.com/artigo-1",
    },
    {
      id: 2,
      title: "Título do Artigo 2",
      preview: "Breve descrição do artigo número 2.",
      body: [
        "O conteúdo aborda os principais desafios para integrar diversidade e inovação no setor público e privado, destacando a importância de processos decisórios participativos.",
        "Também são apresentados caminhos para transformar diagnósticos em planos de ação concretos, com governança clara, transparência e responsabilização institucional.",
      ],
      sourceSiteLabel: "Site oficial do Artigo 2",
      sourceSiteUrl: "https://example.com/artigo-2",
    },
    {
      id: 3,
      title: "Título do Artigo 3",
      preview: "Breve descrição do artigo número 3.",
      body: [
        "Este artigo apresenta uma reflexão sobre o uso ético de tecnologias emergentes e os riscos de reprodução de vieses quando equipes e bases de dados não são diversas.",
        "Ao final, propõe recomendações objetivas para desenho de políticas e práticas com centralidade em direitos humanos e mitigação de danos.",
      ],
      sourceSiteLabel: "Site oficial do Artigo 3",
      sourceSiteUrl: "https://example.com/artigo-3",
    },
    {
      id: 4,
      title: "Título do Artigo 4",
      preview: "Breve descrição do artigo número 4.",
      body: [
        "A publicação reúne aprendizados sobre sustentabilidade aplicada, destacando como metas ambientais, sociais e de governança podem sair do discurso e gerar resultados verificáveis.",
        "Com base em experiências recentes, o texto reforça que impacto consistente depende de continuidade, escuta ativa e compromisso institucional com mudanças estruturais.",
      ],
      sourceSiteLabel: "Site oficial do Artigo 4",
      sourceSiteUrl: "https://example.com/artigo-4",
    },
  ],
  en: [
    {
      id: 1,
      title: "Article Title 1",
      preview: "Brief description of article number 1.",
      body: [
        "This article discusses how inclusion strategies can be embedded from the initial planning stage of institutional projects, avoiding superficial actions and strengthening long-term impact.",
        "It also presents practical implementation examples focused on continuous monitoring, social participation, and result indicators aligned with local realities.",
      ],
      sourceSiteLabel: "Official website of Article 1",
      sourceSiteUrl: "https://example.com/en/article-1",
    },
    {
      id: 2,
      title: "Article Title 2",
      preview: "Brief description of article number 2.",
      body: [
        "The content addresses key challenges for integrating diversity and innovation across public and private sectors, highlighting the value of participatory decision-making.",
        "It also outlines ways to turn diagnostics into concrete action plans with clear governance, transparency, and institutional accountability.",
      ],
      sourceSiteLabel: "Official website of Article 2",
      sourceSiteUrl: "https://example.com/en/article-2",
    },
    {
      id: 3,
      title: "Article Title 3",
      preview: "Brief description of article number 3.",
      body: [
        "This article reflects on the ethical use of emerging technologies and the risks of reproducing bias when teams and datasets are not diverse.",
        "It concludes with practical recommendations for policy and practice design centered on human rights and harm mitigation.",
      ],
      sourceSiteLabel: "Official website of Article 3",
      sourceSiteUrl: "https://example.com/en/article-3",
    },
    {
      id: 4,
      title: "Article Title 4",
      preview: "Brief description of article number 4.",
      body: [
        "The publication compiles lessons on applied sustainability, showing how environmental, social, and governance goals can move beyond statements into measurable results.",
        "Based on recent experiences, the text reinforces that consistent impact depends on continuity, active listening, and institutional commitment to structural change.",
      ],
      sourceSiteLabel: "Official website of Article 4",
      sourceSiteUrl: "https://example.com/en/article-4",
    },
  ],
  es: [
    {
      id: 1,
      title: "Título del Artículo 1",
      preview: "Breve descripción del artículo número 1.",
      body: [
        "Este artículo analiza cómo incorporar estrategias de inclusión desde la planificación inicial de proyectos institucionales, evitando acciones superficiales y fortaleciendo el impacto a largo plazo.",
        "También presenta ejemplos prácticos de implementación con foco en monitoreo continuo, participación social e indicadores de resultados alineados al territorio.",
      ],
      sourceSiteLabel: "Sitio oficial del Artículo 1",
      sourceSiteUrl: "https://example.com/es/articulo-1",
    },
    {
      id: 2,
      title: "Título del Artículo 2",
      preview: "Breve descripción del artículo número 2.",
      body: [
        "El contenido aborda los principales desafíos para integrar diversidad e innovación en los sectores público y privado, destacando la importancia de decisiones participativas.",
        "Además, presenta caminos para transformar diagnósticos en planes de acción concretos, con gobernanza clara, transparencia y responsabilidad institucional.",
      ],
      sourceSiteLabel: "Sitio oficial del Artículo 2",
      sourceSiteUrl: "https://example.com/es/articulo-2",
    },
    {
      id: 3,
      title: "Título del Artículo 3",
      preview: "Breve descripción del artículo número 3.",
      body: [
        "Este artículo propone una reflexión sobre el uso ético de tecnologías emergentes y los riesgos de reproducir sesgos cuando los equipos y los datos no son diversos.",
        "Al final, presenta recomendaciones prácticas para diseñar políticas y acciones centradas en derechos humanos y mitigación de daños.",
      ],
      sourceSiteLabel: "Sitio oficial del Artículo 3",
      sourceSiteUrl: "https://example.com/es/articulo-3",
    },
    {
      id: 4,
      title: "Título del Artículo 4",
      preview: "Breve descripción del artículo número 4.",
      body: [
        "La publicación reúne aprendizajes sobre sostenibilidad aplicada, mostrando cómo metas ambientales, sociales y de gobernanza pueden traducirse en resultados medibles.",
        "Con base en experiencias recientes, el texto refuerza que el impacto consistente depende de continuidad, escucha activa y compromiso institucional con cambios estructurales.",
      ],
      sourceSiteLabel: "Sitio oficial del Artículo 4",
      sourceSiteUrl: "https://example.com/es/articulo-4",
    },
  ],
};

export function getArtigoCards(language: Language): ArtigoCardEntry[] {
  return articlesByLanguage[language];
}
