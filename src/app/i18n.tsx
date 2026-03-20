import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pt-BR" | "es";

const STORAGE_KEY = "site-language";

const translations = {
  "pt-BR": {
    common: {
      languages: {
        en: "English",
        "pt-BR": "Português (Brasil)",
        es: "Español",
      },
      seeMore: "Ver mais",
      readMore: "Ler mais →",
    },
    app: {
      brandLine1: "Caroline Querino",
      brandLine2: "Consultoria ESG & Tech",
      nav: {
        home: "Home",
        areas: "Serviços",
        about: "Sobre",
        media: "Mídias",
        articles: "Conteúdos",
        contact: "Contato",
      },
      footer: {
        rights: "© 2026 Caroline Querino Consultoria ESG & Tech. Todos os direitos reservados.",
        developedBy: "Desenvolvido por",
      },
    },
    home: {
      badge: "Consultoria Especializada",
      title: "Consultoria e Pesquisa em Gênero, Tecnologia e ESG",
      description:
        "Soluções estratégicas para transformar organizações através da diversidade, inovação tecnológica e sustentabilidade ambiental",
      cta: "Conheça meu trabalho",
      trustTitle: "Veja quem confia no meu trabalho",
    },
    about: {
      badge: "Sobre a consultora",
      title: "Transformando Desafios em Oportunidades",
      p1: "Alice Carolline Costa Hassan Querino, conhecida como Carol, é uma pesquisadora paraibana dedicada a construir conexões entre realidades diversas, com foco em inovação social e acadêmica. Sua trajetória é marcada pela vivência no Nordeste brasileiro, onde desenvolveu valores de resiliência, força coletiva e consciência crítica diante das desigualdades sociais.",
      p2: "Atualmente, Carol lidera uma pesquisa em Direitos Humanos, Gênero e Inteligência Artificial, financiada pelo ParqueTec Itaipu e realizada em colaboração com docentes do Stirlab da Universidade de Stirling, na Escócia. Seu trabalho concentra-se na análise dos vieses políticos em modelos de linguagem, contribuindo para o avanço de debates éticos e científicos sobre tecnologia e sociedade.",
      p3: "Além da atuação acadêmica, Carol é cofundadora da Caju Consultoria Nordestina e idealizadora do projeto Café com a Internacionalista, iniciativas que integram ciência, prática e engajamento social, promovendo diálogos entre comunidades, empresas e instituições acadêmicas.",
      p4: "Sua experiência inclui participação em organizações da sociedade civil, projetos internacionais e espaços de advocacy, sempre orientada pela convicção de que a transformação social ocorre quando vozes historicamente marginalizadas assumem protagonismo.",
      stats: {
        years: "Anos de Experiência",
        projects: "Projetos Concluídos",
        publications: "Publicações",
      },
      imageAlt: "Consultora profissional",
    },
    contact: {
      title: "Vamos Trabalhar Juntos?",
      description:
        "Entre em contato para discutir como posso contribuir com seus projetos de diversidade, tecnologia e sustentabilidade.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    areas: {
      title: "Áreas de Atuação",
      servicesTitle: "Serviços Oferecidos",
      servicesExamples: [
        "Palestras e treinamentos",
        "Pesquisas aplicadas",
        "Consultoria em gênero e inclusão",
        "Estratégias ESG e sustentabilidade",
        "Diagnósticos e indicadores (KPI/MEAL)",
        "Relatórios e recomendações para políticas públicas",
      ],
      cards: {
        gender: {
          title: "Gênero",
          description:
            "Consultoria especializada em equidade de gênero, diversidade e inclusão nas organizações.",
          bullets: [
            "Diagnóstico de equidade de gênero",
            "Políticas de diversidade e inclusão",
            "Programas de liderança feminina",
            "Pesquisa em gênero e trabalho",
          ],
        },
        technology: {
          title: "Tecnologia",
          description:
            "Pesquisa e consultoria na intersecção entre tecnologia, sociedade e inclusão digital.",
          bullets: [
            "Diversidade em tecnologia",
            "Inclusão digital e acessibilidade",
            "Ética em IA e algoritmos",
            "Mulheres em STEM",
          ],
        },
        environmental: {
          title: "Ambiental & ESG",
          description: "Estratégias de sustentabilidade ambiental e implementação de práticas ESG.",
          bullets: [
            "Diagnóstico ESG",
            "Estratégias de sustentabilidade",
            "Relatórios e compliance",
            "Justiça climática e gênero",
          ],
        },
      },
      casesTitle: "Cases e Projetos",
      researchTitle: "Pesquisas em desenvolvimento",
      researchIntro:
        "A capacidade de desenvolver pesquisas multidisciplinares, ancoradas nas diversas realidades que moldam a sociedade, é um pilar essencial no trabalho de consultoras e analistas políticas. Essa abordagem permite o desenho de soluções horizontais, construídas em parceria com as pessoas diretamente afetadas pelos problemas, tornando-as mais completas, contextualizadas e orientadas para o impacto.",
      researchItems: [
        {
          title:
            "Democratização da informação ou Multiplicador de Desinformação? Como a inteligência artificial se tornou uma ferramenta para reprodução de violências de raça, classe e gênero em espaços digitais.",
          subtitle: "Afinal, a inteligência artificial está ajudando ou atrapalhando?",
          description:
            "A IA (inteligência artificial) está cada vez mais presente na nossa vida: nas redes sociais, nas pesquisas do dia a dia, nos filtros de imagem, nos textos que aparecem pra gente. Mas será que ela está sendo usada de um jeito justo com todo mundo? Essa pesquisa quer entender como essas tecnologias podem acabar exponenciando violências de gênero no âmbito digital, contra mulheres e meninas, especialmente quando pensamos em raça e classe social.",
          partnerText: "Essa pesquisa é desenvolvida em parceria com:",
          showLogoPlaceholder: true,
          logo: "itaipu",
        },
        {
          title:
            "Vozes da (R)existência: Mulheres Indígenas, Instagram e a Luta Contra o (Fem)genocídio no Brasil",
          subtitle: "",
          description:
            "Esta pesquisa investiga como mulheres indígenas brasileiras usam o Instagram como ferramenta de advocacy, confrontando a violência estatal e influenciando processos jurídicos e políticas públicas. O estudo analisa (Fem)genocídio e epistemocídio e mostra como líderes como Sônia Guajajara, Joênia Wapichana e Célia Xacriabá transformam visibilidade digital em poder institucional, promovendo mudanças políticas e fortalecendo a produção de conhecimento liderada por indígenas. Este trabalho será publicado na edição de março da revista Gender and Development pela Oxfam e Routledge.",
          partnerText: "Essa pesquisa é desenvolvida em parceria com:",
          showLogoPlaceholder: true,
          logo: "oxfam",
        },
      ],
      contactLead:
        "A ajuda para a mudança que você precisa pode estar a apenas um clique de distância.",
      contactCta: "Entrar em contato com a consultora",
      topics: {
        genero: {
          label: "Gênero",
          cases: [
            {
              subtitle: "",
              title: "Pesquisa em Equidade de Gênero",
              description:
                "Estudo sobre representatividade feminina em cargos de liderança no setor tecnológico.",
            },
            {
              subtitle: "06/2016 – atualmente",
              title: "Palestrante e facilitadora",
              description:
                "Desde 2016, atuo ministrando palestras e treinamentos nas áreas de gênero, feminismo, direitos humanos e gestão de projetos, com abordagens comunitárias que conectam teoria e prática, capacitando participantes e fortalecendo iniciativas locais.\n- Mais de 350 palestras ministradas.\n- Cerca de 6.000 pessoas impactadas diretamente.",
            },
            {
              subtitle: "08/2025 – Atualmente",
              title: "Gerson Lehrman Group, Inc. |  Consultora",
              description:
                "Consultoria remota em gênero e inclusão para projetos agrícolas e rurais na América Latina.\n- Design de KPI para participação econômica feminina\n- Recomendações para MEAL com perspectiva de gênero",
            },
          ],
        },
        tecnologia: {
          label: "Tecnologia",
          cases: [
            {
              subtitle: "",
              title: "IA e Viés Algorítmico",
              description:
                "Consultoria sobre ética em inteligência artificial e impactos sociais de algoritmos.",
            },
            {
              subtitle: "02/2025 – 02/2026",
              title: "Itaipu Parquetec | Consultora",
              description:
                "Pesquisa sobre IA, desigualdade e recomendações para política pública.\n- Indicadores de política para tecnologias inclusivas.\n- Relatórios para ministério e orientação regulatória.",
            },
            {
              subtitle: "Case 3",
              title: "Governança de Dados Responsável",
              description:
                "Implantação de práticas de governança para uso ético e transparente de dados.",
            },
          ],
        },
        ambiental: {
          label: "Ambiental",
          cases: [
            {
              subtitle: "",
              title: "Estratégias ESG Integradas",
              description:
                "Implementação de políticas ESG com perspectiva de gênero e justiça climática.",
            },
            {
              subtitle: "02/2023 – 04/2025",
              title: "Caju Consultoria Nordestina | Cofundadora & Consultora",
              description:
                "Implementação de programas de impacto social (BR & UK) com foco em gênero e ambiente.\n- Capacitação de 500+ líderes comunitários\n- Estratégias de sustentabilidade e financiamento\n- Mudança Socioambiental",
            },
            {
              subtitle: "08/2023 – 10/2024",
              title: "PSOL | Chefe de Campanha",
              description:
                "Liderança de campanha com estratégia digital e engajamento comunitário.\n- Gestão de presença online e engajamento juvenil\n- Desenvolvimento de mensagens e plataformas digitais",
            },
          ],
        },
      },
    },
    articles: {
      title: "Artigos e Publicações",
      articleTitlePrefix: "Título do Artigo",
      articleDescriptionPrefix: "Breve descrição do artigo número",
      opinionsTitle: "Opiniões",
      opinionPrefix: "Opinião",
      opinionDescription:
        "Texto de opinião sobre um tema relevante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latestTitle: "Últimas publicações",
      boardTitle: 'Quadro "Café com a internacionalista"',
      tiktokLabel: "TikTok",
      instagramLabel: "Instagram",
      instagramProfile: "Ver perfil no Instagram",
      articleAltPrefix: "Artigo",
    },
    midias: {
      latestEventsTitle: "Últimos eventos",
      latestEventsPhotoAltPrefix: "Foto de evento",
      latestEventFeaturedTitle:
        "AI & Gender evento: Unhyped AI - Sociotechnical & Responsible AI Seminars",
      latestEventFeaturedDate: "29 de agosto de 2025",
      latestEventFeaturedLocation: "United Kingdom",
      latestEventSecondTitle:
        "Amazônia: construindo uma economia para a floresta e para as pessoas",
      latestEventSecondDate: "26 de jun. de 2022",
      latestEventThirdTitle: "Lançamento chatbot Maria Valente",
      latestEventThirdDate: "09/12/2025",
      latestEventThirdLocation: "São Paulo, Brasil",
      interviewsTitle: "Entrevistas",
      interviewsPhotoAltPrefix: "Foto de entrevista",
      interviewFeaturedTitle:
        "Convidado #5 - Leonardo Bezerra - Edição de aniversário com apresentação de Carolline Querino",
      interviewSecondTitle: "Inter Bio - #InterBio - 28/10/2023 - Bloco 01",
      agendaTitle: "Próximos eventos",
      upcomingEvents: [
        {
          date: "27–30 April 2026",
          title: "Mídia escolar no evento Women Deliver na Austrália",
          location: "em Narrm (Melbourne), Austrália",
          image: "eventWd2026",
          href: "https://womendeliver.org/wd2026/",
          sortDate: "2026-04-30",
        },
        {
          date: "18–19 de maio de 2026",
          title: "Estudos de Gênero e Sexualidade 2026",
          location: "Amsterdã, Países Baixos",
          image: "genderStudy2026",
          href: "https://genderstudycongress.com/program-details.php?id=186",
          sortDate: "2026-05-19",
        },
      ],
      scheduleLead: "Quer agendar uma participação em evento, entrevista ou palestra?",
      scheduleButton: "Agendar com a consultora",
    },
  },
  en: {
    common: {
      languages: {
        en: "English",
        "pt-BR": "Português (Brasil)",
        es: "Español",
      },
      seeMore: "See more",
      readMore: "Read more →",
    },
    app: {
      brandLine1: "Caroline Querino",
      brandLine2: "ESG & Tech Consulting",
      nav: {
        home: "Home",
        areas: "Practice Areas",
        about: "About",
        media: "Media",
        articles: "Contents",
        contact: "Contact",
      },
      footer: {
        rights: "© 2026 Caroline Querino ESG & Tech Consulting. All rights reserved.",
        developedBy: "Developed by",
      },
    },
    home: {
      badge: "Specialized Consulting",
      title: "Consulting and Research in Gender, Technology, and ESG",
      description:
        "Strategic solutions to transform organizations through diversity, technological innovation, and environmental sustainability",
      cta: "Discover my work",
      trustTitle: "See who trusts my work",
    },
    about: {
      badge: "About Me",
      title: "Turning Challenges into Opportunities",
      p1: "Alice Carolline Costa Hassan Querino, known as Carol, is a researcher from Paraíba dedicated to building connections between diverse realities, with a focus on social and academic innovation. Her trajectory is marked by her experience in the Brazilian Northeast, where she developed values of resilience, collective strength, and critical awareness in the face of social inequalities.",
      p2: "Currently, Carol leads a research project in Human Rights, Gender, and Artificial Intelligence, funded by ParqueTec Itaipu and carried out in collaboration with professors from Stirlab at the University of Stirling, in Scotland. Her work focuses on the analysis of political biases in language models, contributing to the advancement of ethical and scientific debates on technology and society.",
      p3: "In addition to her academic work, Carol is co-founder of Caju Consultoria Nordestina and creator of the project Café com a Internacionalista, initiatives that integrate science, practice, and social engagement, promoting dialogues between communities, companies, and academic institutions.",
      p4: "Her experience includes participation in civil society organizations, international projects, and advocacy spaces, always guided by the conviction that social transformation occurs when historically marginalized voices take the lead.",
      stats: {
        years: "Years of Experience",
        projects: "Completed Projects",
        publications: "Publications",
      },
      imageAlt: "Professional consultant",
    },
    contact: {
      title: "Shall We Work Together?",
      description:
        "Get in touch to discuss how I can contribute to your diversity, technology, and sustainability projects.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    areas: {
      title: "Practice Areas",
      servicesTitle: "Services Offered",
      servicesExamples: [
        "Talks and training sessions",
        "Applied research",
        "Gender and inclusion consulting",
        "ESG and sustainability strategies",
        "Diagnostics and indicators (KPI/MEAL)",
        "Reports and public policy recommendations",
      ],
      cards: {
        gender: {
          title: "Gender",
          description:
            "Specialized consulting in gender equity, diversity, and inclusion in organizations.",
          bullets: [
            "Gender equity diagnostics",
            "Diversity and inclusion policies",
            "Women leadership programs",
            "Gender and labor research",
          ],
        },
        technology: {
          title: "Technology",
          description:
            "Research and consulting at the intersection of technology, society, and digital inclusion.",
          bullets: [
            "Diversity in technology",
            "Digital inclusion and accessibility",
            "AI and algorithm ethics",
            "Women in STEM",
          ],
        },
        environmental: {
          title: "Environmental & ESG",
          description:
            "Environmental sustainability strategies and implementation of ESG practices.",
          bullets: [
            "ESG diagnostics",
            "Sustainability strategies",
            "Reporting and compliance",
            "Climate justice and gender",
          ],
        },
      },
      casesTitle: "Cases & Projects",
      researchTitle: "Research in progress",
      researchIntro:
        "The ability to develop multidisciplinary research, grounded in the diverse realities that shape society, is an essential pillar in the work of consultants and policy analysts. This approach enables the design of horizontal solutions, built in partnership with people directly affected by problems, making them more comprehensive, contextualized, and impact-oriented.",
      researchItems: [
        {
          title:
            "Democratization of Information or Multiplier of Disinformation? How artificial intelligence has become a tool for reproducing race, class, and gender-based violence in digital spaces.",
          subtitle: "After all, is artificial intelligence helping or harming?",
          description:
            "AI (artificial intelligence) is increasingly present in our lives: on social media, in everyday searches, in image filters, and in the texts that appear to us. But is it being used fairly for everyone? This research seeks to understand how these technologies can end up amplifying gender-based violence in digital environments against women and girls, especially when we consider race and social class.",
          partnerText: "This research is developed in partnership with:",
          showLogoPlaceholder: true,
          logo: "itaipu",
        },
        {
          title:
            "Voices of (R)existence: Indigenous Women, Instagram, and the Struggle Against (Fem)genocide in Brazil",
          description:
            "This research investigates how Brazilian Indigenous women use Instagram as an advocacy tool, confronting state violence and influencing legal processes and public policies. The study analyzes (fem)genocide and epistemicide and shows how leaders such as Sônia Guajajara, Joênia Wapichana, and Célia Xacriabá transform digital visibility into institutional power, promoting political change and strengthening Indigenous-led knowledge production. This work will be published in the March issue of the journal Gender and Development by Oxfam and Routledge.",
          subtitle: "",
          partnerText: "This research is developed in partnership with:",
          showLogoPlaceholder: true,
          logo: "oxfam",
        },
      ],
      contactLead: "The support for the change you need may be just one click away.",
      contactCta: "Get in touch with the consultant",
      topics: {
        genero: {
          label: "Gender",
          cases: [
            {
              subtitle: "",
              title: "Gender Equity Research",
              description:
                "Study on women representation in leadership roles within the tech sector.",
            },
            {
              subtitle: "06/2016 – present",
              title: "Speaker and facilitator",
              description:
                "Since 2016, I have been delivering talks and training in gender, feminism, human rights, and project management, with community-based approaches that connect theory and practice, empowering participants and strengthening local initiatives.\n- More than 350 talks delivered.\n- Around 6,000 people directly impacted.",
            },
            {
              subtitle: "08/2025 – Present",
              title: "Gerson Lehrman Group, Inc. | Consultant",
              description:
                "Remote consulting on gender and inclusion for agricultural and rural projects in Latin America.\n- KPI design for women’s economic participation\n- Recommendations for MEAL with a gender perspective",
            },
          ],
        },
        tecnologia: {
          label: "Technology",
          cases: [
            {
              subtitle: "",
              title: "AI and Algorithmic Bias",
              description: "Consulting on ethics in AI and social impacts of algorithms.",
            },
            {
              subtitle: "02/2025 – 02/2026",
              title: "Itaipu Parquetec | Consultant",
              description:
                "Research on AI, inequality, and recommendations for public policy.\n- Policy indicators for inclusive technologies.\n- Reports for ministries and regulatory guidance.",
            },
            {
              subtitle: "",
              title: "Responsible Data Governance",
              description:
                "Implementation of governance practices for ethical and transparent data use.",
            },
          ],
        },
        ambiental: {
          label: "Environmental",
          cases: [
            {
              subtitle: "",
              title: "Integrated ESG Strategies",
              description:
                "Implementation of ESG policies with a gender and climate justice perspective.",
            },
            {
              subtitle: "02/2023 – 04/2025",
              title: "Caju Consultoria Nordestina | Co-founder & Consultant",
              description:
                "Implementation of social impact programs (BR & UK) focused on gender and environment.\n- Training for 500+ community leaders\n- Sustainability and funding strategies\n- Socio-environmental change",
            },
            {
              subtitle: "08/2023 – 10/2024",
              title: "PSOL | Head of Campaign",
              description:
                "Campaign leadership with digital strategy and community engagement.\n- Online presence management and youth engagement\n- Development of messaging and digital platforms",
            },
          ],
        },
      },
    },
    articles: {
      title: "Articles & Publications",
      articleTitlePrefix: "Article Title",
      articleDescriptionPrefix: "Brief description of article",
      opinionsTitle: "Opinions",
      opinionPrefix: "Opinion",
      opinionDescription:
        "Opinion text about a relevant topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latestTitle: "Latest publications",
      boardTitle: 'Series "Coffee with the Internationalist"',
      tiktokLabel: "TikTok",
      instagramLabel: "Instagram",
      instagramProfile: "View Instagram profile",
      articleAltPrefix: "Article",
    },
    midias: {
      latestEventsTitle: "Latest events",
      latestEventsPhotoAltPrefix: "Event photo",
      latestEventFeaturedTitle:
        "AI & Gender event: Unhyped AI - Sociotechnical & Responsible AI Seminars",
      latestEventFeaturedDate: "August 29, 2025",
      latestEventFeaturedLocation: "United Kingdom",
      latestEventSecondTitle:
        "Amazon: building an economy for the forest and for the people",
      latestEventSecondDate: "June 26, 2022",
      latestEventThirdTitle: "Maria Valente chatbot launch",
      latestEventThirdDate: "12/09/2025",
      latestEventThirdLocation: "São Paulo, Brazil",
      interviewsTitle: "Interviews",
      interviewsPhotoAltPrefix: "Interview photo",
      interviewFeaturedTitle:
        "Guest #5 - Leonardo Bezerra - Birthday Edition hosted by Carolline Querino",
      interviewSecondTitle: "Inter Bio - #InterBio - 10/28/2023 - Block 01",
      agendaTitle: "Upcoming events",
      upcomingEvents: [
        {
          date: "27–30 April 2026",
          title: "Media Schoolar at Women Delivery event in Australia",
          location: "in Narrm (Melbourne), Australia",
          image: "eventWd2026",
          href: "https://womendeliver.org/wd2026/",
          sortDate: "2026-04-30",
        },
        {
          date: "May 18–19, 2026",
          title: "Gender & Sexuality Studies 2026",
          location: "Amsterdam, Netherlands",
          image: "genderStudy2026",
          href: "https://genderstudycongress.com/program-details.php?id=186",
          sortDate: "2026-05-19",
        },
      ],
      scheduleLead: "Would you like to schedule a participation in an event, interview, or talk?",
      scheduleButton: "Schedule with the consultant",
    },
  },
  es: {
    common: {
      languages: {
        en: "English",
        "pt-BR": "Português (Brasil)",
        es: "Español",
      },
      seeMore: "Ver más",
      readMore: "Leer más →",
    },
    app: {
      brandLine1: "Caroline Querino",
      brandLine2: "Consultoría ESG & Tech",
      nav: {
        home: "Inicio",
        areas: "Áreas de Actuación",
        about: "Sobre mí",
        media: "Medios",
        articles: "Contenidos",
        contact: "Contacto",
      },
      footer: {
        rights: "© 2026 Caroline Querino Consultoría ESG & Tech. Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
    },
    home: {
      badge: "Consultoría Especializada",
      title: "Consultoría e Investigación en Género, Tecnología y ESG",
      description:
        "Soluciones estratégicas para transformar organizaciones a través de la diversidad, la innovación tecnológica y la sostenibilidad ambiental",
      cta: "Conoce mi trabajo",
      trustTitle: "Mira quién confía en mi trabajo",
    },
    about: {
      badge: "Sobre mí",
      title: "Transformando Desafíos en Oportunidades",
      p1: "Alice Carolline Costa Hassan Querino, conocida como Carol, es una investigadora paraibana dedicada a construir conexiones entre realidades diversas, con enfoque en innovación social y académica. Su trayectoria está marcada por la vivencia en el Nordeste brasileño, donde desarrolló valores de resiliencia, fuerza colectiva y conciencia crítica frente a las desigualdades sociales.",
      p2: "Actualmente, Carol lidera una investigación en Derechos Humanos, Género e Inteligencia Artificial, financiada por el ParqueTec Itaipu y realizada en colaboración con docentes del Stirlab de la Universidad de Stirling, en Escocia. Su trabajo se concentra en el análisis de los sesgos políticos en modelos de lenguaje, contribuyendo al avance de debates éticos y científicos sobre tecnología y sociedad.",
      p3: "Además de su actuación académica, Carol es cofundadora de Caju Consultoria Nordestina e idealizadora del proyecto Café com a Internacionalista, iniciativas que integran ciencia, práctica y compromiso social, promoviendo diálogos entre comunidades, empresas e instituciones académicas.",
      p4: "Su experiencia incluye participación en organizaciones de la sociedad civil, proyectos internacionales y espacios de advocacy, siempre orientada por la convicción de que la transformación social ocurre cuando voces históricamente marginadas asumen protagonismo.",
      stats: {
        years: "Años de Experiencia",
        projects: "Proyectos Finalizados",
        publications: "Publicaciones",
      },
      imageAlt: "Consultora profesional",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      description:
        "Ponte en contacto para conversar sobre cómo puedo contribuir a tus proyectos de diversidad, tecnología y sostenibilidad.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    areas: {
      title: "Áreas de Actuación",
      servicesTitle: "Servicios Ofrecidos",
      servicesExamples: [
        "Charlas y capacitaciones",
        "Investigaciones aplicadas",
        "Consultoría en género e inclusión",
        "Estrategias ESG y sostenibilidad",
        "Diagnósticos e indicadores (KPI/MEAL)",
        "Informes y recomendaciones para políticas públicas",
      ],
      cards: {
        gender: {
          title: "Género",
          description:
            "Consultoría especializada en equidad de género, diversidad e inclusión en organizaciones.",
          bullets: [
            "Diagnóstico de equidad de género",
            "Políticas de diversidad e inclusión",
            "Programas de liderazgo femenino",
            "Investigación en género y trabajo",
          ],
        },
        technology: {
          title: "Tecnología",
          description:
            "Investigación y consultoría en la intersección entre tecnología, sociedad e inclusión digital.",
          bullets: [
            "Diversidad en tecnología",
            "Inclusión digital y accesibilidad",
            "Ética en IA y algoritmos",
            "Mujeres en STEM",
          ],
        },
        environmental: {
          title: "Ambiental y ESG",
          description: "Estrategias de sostenibilidad ambiental e implementación de prácticas ESG.",
          bullets: [
            "Diagnóstico ESG",
            "Estrategias de sostenibilidad",
            "Informes y compliance",
            "Justicia climática y género",
          ],
        },
      },
      casesTitle: "Casos y Proyectos",
      researchTitle: "Investigaciones en desarrollo",
      researchIntro:
        "La capacidad de desarrollar investigaciones multidisciplinarias, ancladas en las diversas realidades que moldean la sociedad, es un pilar esencial en el trabajo de consultoras y analistas políticas. Este enfoque permite diseñar soluciones horizontales, construidas en alianza con las personas directamente afectadas por los problemas, haciéndolas más completas, contextualizadas y orientadas al impacto.",
      researchItems: [
        {
          title:
            "¿Democratización de la información o multiplicador de desinformación? Cómo la inteligencia artificial se convirtió en una herramienta para reproducir violencias de raza, clase y género en espacios digitales.",
          subtitle: "Después de todo, ¿la inteligencia artificial está ayudando o perjudicando?",
          description:
            "La IA (inteligencia artificial) está cada vez más presente en nuestra vida: en redes sociales, en búsquedas cotidianas, en filtros de imagen y en los textos que nos aparecen. Pero ¿se está usando de manera justa para todas las personas? Esta investigación busca entender cómo estas tecnologías pueden terminar amplificando violencias de género en el ámbito digital contra mujeres y niñas, especialmente cuando pensamos en raza y clase social.",
          partnerText: "Esta investigación se desarrolla en colaboración con:",
          showLogoPlaceholder: true,
          logo: "itaipu",
        },
        {
          title:
            "Voces de la (R)existencia: Mujeres indígenas, Instagram y la lucha contra el (fem)genocidio en Brasil",
          description:
            "Esta investigación analiza cómo mujeres indígenas brasileñas usan Instagram como herramienta de advocacy, confrontando la violencia estatal e influyendo en procesos jurídicos y políticas públicas. El estudio examina el (fem)genocidio y el epistemicidio, y muestra cómo líderes como Sônia Guajajara, Joênia Wapichana y Célia Xacriabá transforman la visibilidad digital en poder institucional, promoviendo cambios políticos y fortaleciendo la producción de conocimiento liderada por pueblos indígenas. Este trabajo será publicado en la edición de marzo de la revista Gender and Development de Oxfam y Routledge.",
          subtitle: "",
          partnerText: "Esta investigación se desarrolla en colaboración con:",
          showLogoPlaceholder: true,
          logo: "oxfam",
        },
      ],
      contactLead: "La ayuda para el cambio que necesitas puede estar a solo un clic de distancia.",
      contactCta: "Contactar con la consultora",
      topics: {
        genero: {
          label: "Género",
          cases: [
            {
              subtitle: "",
              title: "Investigación en Equidad de Género",
              description:
                "Estudio sobre la representación femenina en cargos de liderazgo en el sector tecnológico.",
            },
            {
              subtitle: "06/2016 – actualidad",
              title: "Ponente y facilitadora",
              description:
                "Desde 2016, imparto charlas y capacitaciones en género, feminismo, derechos humanos y gestión de proyectos, con enfoques comunitarios que conectan teoría y práctica, fortaleciendo capacidades y promoviendo iniciativas locales.\n- Más de 350 charlas impartidas.\n- Cerca de 6.000 personas impactadas directamente.",
            },
            {
              subtitle: "08/2025 – Actualidad",
              title: "Gerson Lehrman Group, Inc. | Consultora",
              description:
                "Consultoría remota en género e inclusión para proyectos agrícolas y rurales en América Latina.\n- Diseño de KPI para la participación económica de las mujeres\n- Recomendaciones para MEAL con enfoque de género",
            },
          ],
        },
        tecnologia: {
          label: "Tecnología",
          cases: [
            {
              subtitle: "",
              title: "IA y Sesgo Algorítmico",
              description:
                "Consultoría sobre ética en inteligencia artificial e impactos sociales de algoritmos.",
            },
            {
              subtitle: "02/2025 – 02/2026",
              title: "Itaipu Parquetec | Consultora",
              description:
                "Investigación sobre IA, desigualdad y recomendaciones para políticas públicas.\n- Indicadores de política para tecnologías inclusivas.\n- Informes para ministerios y orientación regulatoria.",
            },
            {
              subtitle: "",
              title: "Gobernanza Responsable de Datos",
              description:
                "Implementación de prácticas de gobernanza para uso ético y transparente de datos.",
            },
          ],
        },
        ambiental: {
          label: "Ambiental",
          cases: [
            {
              subtitle: "",
              title: "Estrategias ESG Integradas",
              description:
                "Implementación de políticas ESG con perspectiva de género y justicia climática.",
            },
            {
              subtitle: "02/2023 – 04/2025",
              title: "Caju Consultoria Nordestina | Cofundadora y Consultora",
              description:
                "Implementación de programas de impacto social (BR y UK) con foco en género y ambiente.\n- Capacitación de más de 500 líderes comunitarios\n- Estrategias de sostenibilidad y financiamiento\n- Cambio socioambiental",
            },
            {
              subtitle: "08/2023 – 10/2024",
              title: "PSOL | Jefa de Campaña",
              description:
                "Liderazgo de campaña con estrategia digital y participación comunitaria.\n- Gestión de presencia online y participación juvenil\n- Desarrollo de mensajes y plataformas digitales",
            },
          ],
        },
      },
    },
    articles: {
      title: "Artículos y Publicaciones",
      articleTitlePrefix: "Título del Artículo",
      articleDescriptionPrefix: "Breve descripción del artículo",
      opinionsTitle: "Opiniones",
      opinionPrefix: "Opinión",
      opinionDescription:
        "Texto de opinión sobre un tema relevante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latestTitle: "Últimas publicaciones",
      boardTitle: 'Sección "Café con la internacionalista"',
      tiktokLabel: "TikTok",
      instagramLabel: "Instagram",
      instagramProfile: "Ver perfil en Instagram",
      articleAltPrefix: "Artículo",
    },
    midias: {
      latestEventsTitle: "Últimos eventos",
      latestEventsPhotoAltPrefix: "Foto de evento",
      latestEventFeaturedTitle:
        "Evento AI & Gender: Unhyped AI - Sociotechnical & Responsible AI Seminars",
      latestEventFeaturedDate: "29 de agosto de 2025",
      latestEventFeaturedLocation: "Reino Unido",
      latestEventSecondTitle:
        "Amazonía: construyendo una economía para el bosque y para las personas",
      latestEventSecondDate: "26 de jun. de 2022",
      latestEventThirdTitle: "Lanzamiento del chatbot Maria Valente",
      latestEventThirdDate: "09/12/2025",
      latestEventThirdLocation: "São Paulo, Brasil",
      interviewsTitle: "Entrevistas",
      interviewsPhotoAltPrefix: "Foto de entrevista",
      interviewFeaturedTitle:
        "Invitado #5 - Leonardo Bezerra - Edición de cumpleaños conducida por Carolline Querino",
      interviewSecondTitle: "Inter Bio - #InterBio - 28/10/2023 - Bloque 01",
      agendaTitle: "Próximos eventos",
      upcomingEvents: [
        {
          date: "27–30 April 2026",
          title: "Medio escolar en el evento Women Deliver en Australia",
          location: "en Narrm (Melbourne), Australia",
          image: "eventWd2026",
          href: "https://womendeliver.org/wd2026/",
          sortDate: "2026-04-30",
        },
        {
          date: "18–19 de mayo de 2026",
          title: "Estudios de Género y Sexualidad 2026",
          location: "Ámsterdam, Países Bajos",
          image: "genderStudy2026",
          href: "https://genderstudycongress.com/program-details.php?id=186",
          sortDate: "2026-05-19",
        },
      ],
      scheduleLead: "¿Quieres agendar una participación en evento, entrevista o charla?",
      scheduleButton: "Agendar con la consultora",
    },
  },
} as const;

type Translations = (typeof translations)[Language];

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt-BR";
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved ?? "pt-BR";
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
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
