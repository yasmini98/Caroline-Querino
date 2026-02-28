import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'pt-BR' | 'es';

const STORAGE_KEY = 'site-language';

const translations = {
  'pt-BR': {
    common: {
      languages: {
        en: 'English',
        'pt-BR': 'Português (Brasil)',
        es: 'Español',
      },
      seeMore: 'Ver mais',
      readMore: 'Ler mais →',
    },
    app: {
      brandLine1: 'Caroline Querino',
      brandLine2: 'Consultoria ESG & Tech',
      nav: {
        home: 'Home',
        areas: 'Áreas de Atuação',
        about: 'Sobre',
        articles: 'Artigos e Publicações',
        contact: 'Contato',
      },
      footer: {
        rights: '© 2026 Caroline Querino Consultoria ESG & Tech. Todos os direitos reservados.',
        developedBy: 'Desenvolvido por',
      },
    },
    home: {
      badge: 'Consultoria Especializada',
      title: 'Consultoria e Pesquisa em Gênero, Tecnologia e ESG',
      description:
        'Soluções estratégicas para transformar organizações através da diversidade, inovação tecnológica e sustentabilidade ambiental',
      cta: 'Entre em Contato',
    },
    about: {
      badge: 'Sobre Mim',
      title: 'Transformando Desafios em Oportunidades',
      p1: 'Com expertise em pesquisa e consultoria, atuo na intersecção entre gênero, tecnologia e sustentabilidade ambiental, oferecendo soluções inovadoras e baseadas em evidências científicas.',
      p2: 'Minha abordagem combina rigor acadêmico com aplicação prática, ajudando organizações a implementar políticas de diversidade, equidade e inclusão, além de estratégias ESG efetivas.',
      p3: 'Através de diagnósticos aprofundados e metodologias participativas, transformo desafios complexos em oportunidades de mudança sustentável.',
      stats: {
        years: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        publications: 'Publicações',
      },
      imageAlt: 'Consultora profissional',
    },
    contact: {
      title: 'Vamos Trabalhar Juntos?',
      description:
        'Entre em contato para discutir como posso contribuir com seus projetos de diversidade, tecnologia e sustentabilidade.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    areas: {
      title: 'Áreas de Atuação',
      cards: {
        gender: {
          title: 'Gênero',
          description: 'Consultoria especializada em equidade de gênero, diversidade e inclusão nas organizações.',
          bullets: [
            'Diagnóstico de equidade de gênero',
            'Políticas de diversidade e inclusão',
            'Programas de liderança feminina',
            'Pesquisa em gênero e trabalho',
          ],
        },
        technology: {
          title: 'Tecnologia',
          description: 'Pesquisa e consultoria na intersecção entre tecnologia, sociedade e inclusão digital.',
          bullets: [
            'Diversidade em tecnologia',
            'Inclusão digital e acessibilidade',
            'Ética em IA e algoritmos',
            'Mulheres em STEM',
          ],
        },
        environmental: {
          title: 'Ambiental & ESG',
          description: 'Estratégias de sustentabilidade ambiental e implementação de práticas ESG.',
          bullets: [
            'Diagnóstico ESG',
            'Estratégias de sustentabilidade',
            'Relatórios e compliance',
            'Justiça climática e gênero',
          ],
        },
      },
      casesTitle: 'Cases e Projetos',
      topics: {
        genero: {
          label: 'Gênero',
          cases: [
            {
              subtitle: 'Versão standard',
              title: 'Pesquisa em Equidade de Gênero',
              description: 'Estudo sobre representatividade feminina em cargos de liderança no setor tecnológico.',
            },
            {
              subtitle: 'Case 2',
              title: 'Programa de Liderança Feminina',
              description: 'Desenvolvimento de trilhas de capacitação e mentoria para ampliação da liderança de mulheres.',
            },
            {
              subtitle: 'Case 3',
              title: 'Diagnóstico de Inclusão Organizacional',
              description: 'Mapeamento de indicadores de diversidade e proposta de plano de ação para inclusão.',
            },
          ],
        },
        tecnologia: {
          label: 'Tecnologia',
          cases: [
            {
              subtitle: 'Versão standard',
              title: 'IA e Viés Algorítmico',
              description: 'Consultoria sobre ética em inteligência artificial e impactos sociais de algoritmos.',
            },
            {
              subtitle: 'Case 2',
              title: 'Inclusão Digital Estratégica',
              description: 'Estruturação de iniciativas de acesso, formação e permanência em ambientes digitais.',
            },
            {
              subtitle: 'Case 3',
              title: 'Governança de Dados Responsável',
              description: 'Implantação de práticas de governança para uso ético e transparente de dados.',
            },
          ],
        },
        ambiental: {
          label: 'Ambiental',
          cases: [
            {
              subtitle: 'Versão standard',
              title: 'Estratégias ESG Integradas',
              description: 'Implementação de políticas ESG com perspectiva de gênero e justiça climática.',
            },
            {
              subtitle: 'Case 2',
              title: 'Plano de Sustentabilidade Corporativa',
              description: 'Definição de metas ambientais e indicadores de acompanhamento para longo prazo.',
            },
            {
              subtitle: 'Case 3',
              title: 'Projeto de Justiça Climática',
              description: 'Iniciativas para mitigação de impactos climáticos em comunidades mais vulneráveis.',
            },
          ],
        },
      },
    },
    articles: {
      title: 'Artigos e Publicações',
      articleTitlePrefix: 'Título do Artigo',
      articleDescriptionPrefix: 'Breve descrição do artigo número',
      opinionsTitle: 'Opiniões',
      opinionPrefix: 'Opinião',
      opinionDescription:
        'Texto de opinião sobre um tema relevante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      latestTitle: 'Últimas publicações',
      boardTitle: 'Quadro "Café com a internacionalista"',
      tiktokLabel: 'TikTok',
      instagramLabel: 'Instagram',
      instagramProfile: 'Ver perfil no Instagram',
      articleAltPrefix: 'Artigo',
    },
  },
  en: {
    common: {
      languages: {
        en: 'English',
        'pt-BR': 'Português (Brasil)',
        es: 'Español',
      },
      seeMore: 'See more',
      readMore: 'Read more →',
    },
    app: {
      brandLine1: 'Caroline Querino',
      brandLine2: 'ESG & Tech Consulting',
      nav: {
        home: 'Home',
        areas: 'Practice Areas',
        about: 'About',
        articles: 'Articles & Publications',
        contact: 'Contact',
      },
      footer: {
        rights: '© 2026 Caroline Querino ESG & Tech Consulting. All rights reserved.',
        developedBy: 'Developed by',
      },
    },
    home: {
      badge: 'Specialized Consulting',
      title: 'Consulting and Research in Gender, Technology, and ESG',
      description:
        'Strategic solutions to transform organizations through diversity, technological innovation, and environmental sustainability',
      cta: 'Get in Touch',
    },
    about: {
      badge: 'About Me',
      title: 'Turning Challenges into Opportunities',
      p1: 'With expertise in research and consulting, I work at the intersection of gender, technology, and environmental sustainability, delivering innovative solutions grounded in scientific evidence.',
      p2: 'My approach combines academic rigor with practical implementation, helping organizations apply diversity, equity, and inclusion policies along with effective ESG strategies.',
      p3: 'Through in-depth diagnostics and participatory methodologies, I turn complex challenges into opportunities for sustainable change.',
      stats: {
        years: 'Years of Experience',
        projects: 'Completed Projects',
        publications: 'Publications',
      },
      imageAlt: 'Professional consultant',
    },
    contact: {
      title: 'Shall We Work Together?',
      description:
        'Get in touch to discuss how I can contribute to your diversity, technology, and sustainability projects.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    areas: {
      title: 'Practice Areas',
      cards: {
        gender: {
          title: 'Gender',
          description: 'Specialized consulting in gender equity, diversity, and inclusion in organizations.',
          bullets: [
            'Gender equity diagnostics',
            'Diversity and inclusion policies',
            'Women leadership programs',
            'Gender and labor research',
          ],
        },
        technology: {
          title: 'Technology',
          description: 'Research and consulting at the intersection of technology, society, and digital inclusion.',
          bullets: [
            'Diversity in technology',
            'Digital inclusion and accessibility',
            'AI and algorithm ethics',
            'Women in STEM',
          ],
        },
        environmental: {
          title: 'Environmental & ESG',
          description: 'Environmental sustainability strategies and implementation of ESG practices.',
          bullets: [
            'ESG diagnostics',
            'Sustainability strategies',
            'Reporting and compliance',
            'Climate justice and gender',
          ],
        },
      },
      casesTitle: 'Cases & Projects',
      topics: {
        genero: {
          label: 'Gender',
          cases: [
            {
              subtitle: 'Standard version',
              title: 'Gender Equity Research',
              description: 'Study on women representation in leadership roles within the tech sector.',
            },
            {
              subtitle: 'Case 2',
              title: 'Women Leadership Program',
              description: 'Development of training tracks and mentoring to strengthen women leadership.',
            },
            {
              subtitle: 'Case 3',
              title: 'Inclusion Diagnostics',
              description: 'Mapping diversity indicators and proposing an action plan for inclusion.',
            },
          ],
        },
        tecnologia: {
          label: 'Technology',
          cases: [
            {
              subtitle: 'Standard version',
              title: 'AI and Algorithmic Bias',
              description: 'Consulting on ethics in AI and social impacts of algorithms.',
            },
            {
              subtitle: 'Case 2',
              title: 'Strategic Digital Inclusion',
              description: 'Structuring access, training, and retention initiatives in digital environments.',
            },
            {
              subtitle: 'Case 3',
              title: 'Responsible Data Governance',
              description: 'Implementation of governance practices for ethical and transparent data use.',
            },
          ],
        },
        ambiental: {
          label: 'Environmental',
          cases: [
            {
              subtitle: 'Standard version',
              title: 'Integrated ESG Strategies',
              description: 'Implementation of ESG policies with a gender and climate justice perspective.',
            },
            {
              subtitle: 'Case 2',
              title: 'Corporate Sustainability Plan',
              description: 'Definition of environmental goals and monitoring indicators for long-term impact.',
            },
            {
              subtitle: 'Case 3',
              title: 'Climate Justice Project',
              description: 'Initiatives to mitigate climate impacts in more vulnerable communities.',
            },
          ],
        },
      },
    },
    articles: {
      title: 'Articles & Publications',
      articleTitlePrefix: 'Article Title',
      articleDescriptionPrefix: 'Brief description of article',
      opinionsTitle: 'Opinions',
      opinionPrefix: 'Opinion',
      opinionDescription: 'Opinion text about a relevant topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      latestTitle: 'Latest publications',
      boardTitle: 'Series "Coffee with the Internationalist"',
      tiktokLabel: 'TikTok',
      instagramLabel: 'Instagram',
      instagramProfile: 'View Instagram profile',
      articleAltPrefix: 'Article',
    },
  },
  es: {
    common: {
      languages: {
        en: 'English',
        'pt-BR': 'Português (Brasil)',
        es: 'Español',
      },
      seeMore: 'Ver más',
      readMore: 'Leer más →',
    },
    app: {
      brandLine1: 'Caroline Querino',
      brandLine2: 'Consultoría ESG & Tech',
      nav: {
        home: 'Inicio',
        areas: 'Áreas de Actuación',
        about: 'Sobre mí',
        articles: 'Artículos y Publicaciones',
        contact: 'Contacto',
      },
      footer: {
        rights: '© 2026 Caroline Querino Consultoría ESG & Tech. Todos los derechos reservados.',
        developedBy: 'Desarrollado por',
      },
    },
    home: {
      badge: 'Consultoría Especializada',
      title: 'Consultoría e Investigación en Género, Tecnología y ESG',
      description:
        'Soluciones estratégicas para transformar organizaciones a través de la diversidad, la innovación tecnológica y la sostenibilidad ambiental',
      cta: 'Ponte en contacto',
    },
    about: {
      badge: 'Sobre mí',
      title: 'Transformando Desafíos en Oportunidades',
      p1: 'Con experiencia en investigación y consultoría, trabajo en la intersección entre género, tecnología y sostenibilidad ambiental, ofreciendo soluciones innovadoras basadas en evidencia científica.',
      p2: 'Mi enfoque combina rigor académico con aplicación práctica, ayudando a organizaciones a implementar políticas de diversidad, equidad e inclusión, además de estrategias ESG efectivas.',
      p3: 'A través de diagnósticos profundos y metodologías participativas, transformo desafíos complejos en oportunidades de cambio sostenible.',
      stats: {
        years: 'Años de Experiencia',
        projects: 'Proyectos Finalizados',
        publications: 'Publicaciones',
      },
      imageAlt: 'Consultora profesional',
    },
    contact: {
      title: '¿Trabajamos juntos?',
      description:
        'Ponte en contacto para conversar sobre cómo puedo contribuir a tus proyectos de diversidad, tecnología y sostenibilidad.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    areas: {
      title: 'Áreas de Actuación',
      cards: {
        gender: {
          title: 'Género',
          description: 'Consultoría especializada en equidad de género, diversidad e inclusión en organizaciones.',
          bullets: [
            'Diagnóstico de equidad de género',
            'Políticas de diversidad e inclusión',
            'Programas de liderazgo femenino',
            'Investigación en género y trabajo',
          ],
        },
        technology: {
          title: 'Tecnología',
          description: 'Investigación y consultoría en la intersección entre tecnología, sociedad e inclusión digital.',
          bullets: [
            'Diversidad en tecnología',
            'Inclusión digital y accesibilidad',
            'Ética en IA y algoritmos',
            'Mujeres en STEM',
          ],
        },
        environmental: {
          title: 'Ambiental y ESG',
          description: 'Estrategias de sostenibilidad ambiental e implementación de prácticas ESG.',
          bullets: [
            'Diagnóstico ESG',
            'Estrategias de sostenibilidad',
            'Informes y compliance',
            'Justicia climática y género',
          ],
        },
      },
      casesTitle: 'Casos y Proyectos',
      topics: {
        genero: {
          label: 'Género',
          cases: [
            {
              subtitle: 'Versión estándar',
              title: 'Investigación en Equidad de Género',
              description: 'Estudio sobre la representación femenina en cargos de liderazgo en el sector tecnológico.',
            },
            {
              subtitle: 'Caso 2',
              title: 'Programa de Liderazgo Femenino',
              description: 'Desarrollo de rutas de capacitación y mentoría para ampliar el liderazgo de mujeres.',
            },
            {
              subtitle: 'Caso 3',
              title: 'Diagnóstico de Inclusión Organizacional',
              description: 'Mapeo de indicadores de diversidad y propuesta de plan de acción para inclusión.',
            },
          ],
        },
        tecnologia: {
          label: 'Tecnología',
          cases: [
            {
              subtitle: 'Versión estándar',
              title: 'IA y Sesgo Algorítmico',
              description: 'Consultoría sobre ética en inteligencia artificial e impactos sociales de algoritmos.',
            },
            {
              subtitle: 'Caso 2',
              title: 'Inclusión Digital Estratégica',
              description: 'Estructuración de iniciativas de acceso, formación y permanencia en entornos digitales.',
            },
            {
              subtitle: 'Caso 3',
              title: 'Gobernanza Responsable de Datos',
              description: 'Implementación de prácticas de gobernanza para uso ético y transparente de datos.',
            },
          ],
        },
        ambiental: {
          label: 'Ambiental',
          cases: [
            {
              subtitle: 'Versión estándar',
              title: 'Estrategias ESG Integradas',
              description: 'Implementación de políticas ESG con perspectiva de género y justicia climática.',
            },
            {
              subtitle: 'Caso 2',
              title: 'Plan de Sostenibilidad Corporativa',
              description: 'Definición de metas ambientales e indicadores de seguimiento a largo plazo.',
            },
            {
              subtitle: 'Caso 3',
              title: 'Proyecto de Justicia Climática',
              description: 'Iniciativas para mitigar impactos climáticos en comunidades más vulnerables.',
            },
          ],
        },
      },
    },
    articles: {
      title: 'Artículos y Publicaciones',
      articleTitlePrefix: 'Título del Artículo',
      articleDescriptionPrefix: 'Breve descripción del artículo',
      opinionsTitle: 'Opiniones',
      opinionPrefix: 'Opinión',
      opinionDescription: 'Texto de opinión sobre un tema relevante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      latestTitle: 'Últimas publicaciones',
      boardTitle: 'Sección "Café con la internacionalista"',
      tiktokLabel: 'TikTok',
      instagramLabel: 'Instagram',
      instagramProfile: 'Ver perfil en Instagram',
      articleAltPrefix: 'Artículo',
    },
  },
} as const;

type Translations = typeof translations['pt-BR'];

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt-BR';
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved ?? 'pt-BR';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: translations[language],
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
