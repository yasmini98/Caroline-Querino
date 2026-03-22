import { Language } from "../app/i18n";
import opiniao1Imagem from "../assets/images/opiniao1.jpeg";
import opiniao2Imagem from "../assets/images/opiniao2.jpeg";
import opiniao3Imagem from "../assets/images/opiniao3.jpeg";
import opiniao4Imagem from "../assets/images/opiniao4.jpeg";
import opiniao5Imagem from "../assets/images/opiniao5.png";
import opiniao7Imagem from "../assets/images/opiniao7.jpeg";
import imagemFallback from "../assets/images/iconesite.avif";

export type OpinionEntry = {
  id: number | string;
  title: string;
  body: string[];
  image: string;
};

const opinionsByLanguage: Record<Language, OpinionEntry[]> = {
  "pt-BR": [
    {
      id: 1,
      title: "A inteligência artificial está ajudando ou atrapalhando?",
      body: [
        "A inteligência artificial já faz parte da nossa rotina. Ela está nos filtros das redes sociais, nas buscas que fazemos, nos conteúdos que aparecem no nosso feed e até nos textos que lemos. Mas será que essas tecnologias estão sendo usadas para reforçar violências contra meninas e mulheres?",
        "Esta pesquisa busca entender como a IA pode acabar espalhando ideias erradas ou reforçando preconceitos. Nosso foco está em como isso afeta especialmente meninas e mulheres, considerando também raça, classe social, território e identidade de gênero.",
        "📢 Queremos ouvir todas as vozes das diversas mulheridades brasileiras, mas, neste momento, estamos priorizando ouvir também:\n ✨ Mulheres trans\n ✨ Mulheres do Norte e Nordeste do Brasil\n ✨ Meninas de 14 a 17 anos (com autorização dos responsáveis)",
        "A participação desses grupos é fundamental para que o relatório final seja verdadeiramente representativo da diversidade de experiências das mulheres brasileiras.",
        "💬 Quem pode participar:\n 👧 Meninas de 14 a 17 anos (com autorização dos responsáveis)\n 👩 Mulheres de 18 a 80+ anos (cis ou trans)",
        "⚠️ Meninas de 14 a 17 anos podem responder à primeira etapa da pesquisa. Para participar da segunda etapa, uma conversa em grupo online, será necessário apresentar autorização do responsável. O formulário de consentimento será enviado por e-mail após o registro de interesse.",
        "Se você tem algo a dizer sobre como a IA impacta (ou não) a sua vida, este espaço é seu. Ouvir você é essencial para construir políticas públicas que protejam e respeitem todas as mulheres diante dos desafios trazidos pelas novas tecnologias de inteligência artificial generativa.",
        "🔗 Para participar, clique aqui: https://lnkd.in/dXUt8dmM\n 📩 Dúvidas: alice.chq@bolsista.itaipuparquetec.org.br",
        "📚 Esta pesquisa é financiada pelo Itaipu Parquetec, em parceria com o Itaipu Binacional.",
      ],
      image: opiniao1Imagem,
    },
    {
      id: 2,
      title: "Onde está o apoio para mulheres trabalhadoras?",
      body: [
        "Uma decisão recente do Ministro Toffoli, no Supremo Tribunal Federal (STF), derrubou a exigência de que um shopping center oferecesse salas de amamentação para funcionárias das lojas locatárias. Embora o Ministério Público do Trabalho tenha entrado com ação para defender esse espaço essencial para mães trabalhadoras e seus bebês, o tribunal manteve o entendimento de que o shopping não tem vínculo empregatício com essas trabalhadoras.",
        "Essa decisão levanta uma questão crítica: por que direitos essenciais de mulheres e famílias são tão frequentemente os primeiros a serem comprometidos em debates sobre interesses empresariais e legislação?",
        "A narrativa judicial fala em “preservar a ordem constitucional” e “limitar o ativismo judicial”. Mas e as trabalhadoras que agora enfrentam mais barreiras para amamentar no trabalho? O custo social é evidente: no fim, são essas mulheres e crianças que pagam o preço desse retrocesso de direitos e ficam sem apoio em uma área tão fundamental como a amamentação. Mais um exemplo da violência estrutural que mulheres enfrentam no nosso país.",
        "📢 Vamos fortalecer as narrativas que realmente merecem atenção!",
      ],
      image: opiniao2Imagem,
    },
    {
      id: 3,
      title:
        "Mais de 6 anos de luto e perseverança: a condenação dos assassinos de Marielle é um passo em direção à justiça",
      body: [
        "Hoje, depois de mais de seis anos, a justiça deu um passo decisivo ao condenar os assassinos de Marielle Franco. Já se passaram mais de seis anos desde que esse ato de feminicídio político e racismo tirou Marielle de seus familiares e interrompeu sua luta incansável por direitos e justiça social. Nos anos que se seguiram, seu nome e sua família foram cruelmente expostos e escrutinados numa tentativa de justificar o que jamais pode ser justificado.",
        "Esses anos foram marcados por uma busca incansável por justiça e por um luto contínuo. Finalmente, há um vislumbre de responsabilização, embora o caminho ainda esteja inacabado. Espero sinceramente que a família de Marielle encontre algum alívio e conforto neste momento e que os próximos passos para levar os mandantes desse crime à justiça não demorem tanto quanto demorou o processo de condenação de seus assassinos.\nQue a justiça siga seu curso - sem novos atrasos e com todo o rigor necessário. ✊🏾",
        "📸 Tomaz Silva / Agência Brasil",
      ],
      image: opiniao3Imagem,
    },
    {
      id: 4,
      title: "O que você pensa quando ouve o termo Decolonialidade?",
      body: [
        "Nos últimos dias, o Brasil testemunhou mais um exemplo alarmante de racismo estrutural. A influenciadora Mari Saad lançou sua marca de maquiagem, Mascavo, e rapidamente recebeu fortes críticas pela falta de diversidade nos tons de pele dos produtos. Toda a linha de bases e produtos para o rosto atende exclusivamente a tons de pele mais claros, com a justificativa de que desenvolver uma cartela mais inclusiva teria alto custo. No entanto, a marca não economiza quando o assunto é embalagem luxuosa, o que levanta uma pergunta importante: para Mari Saad, investir em embalagem é prioridade maior do que promover diversidade e inclusão?",
        "Esse lançamento gerou uma onda de debate online, com muitas pessoas expressando indignação pela exclusão de peles mais escuras. O ponto principal que mais repercutiu foi que, em um país onde mais de 56% da população se declara negra, a ausência de diversidade em uma nova linha de maquiagem é ao mesmo tempo ofensiva e comercialmente equivocada. Mulheres, homens e pessoas não binárias de pele escura são grandes consumidores de cosméticos, e a indústria precisa atendê-los de forma justa.",
        "Mas, para nós da Caju, a questão vai além de um erro comercial. Em 2017, a Fenty Beauty revolucionou a indústria ao lançar uma linha com 50 tons de base, provando que inclusão não apenas vende, mas abre caminhos em todo o espectro de produtos, de cosméticos à moda. Então por que, em 2024, ainda vemos marcas cometendo os mesmos erros?",
        "A resposta está nas estruturas coloniais e racistas que continuam moldando nossa sociedade e, por extensão, nossas indústrias. Quando um produto é desenhado para um público específico, ele reflete até que ponto esse público é realmente visto como parte da sociedade. No caso de Mari Saad, seu “pedido de desculpas” soou superficial e sem compromisso real com mudança. Não houve sinal de intenção de incluir profissionais negros nos processos de desenvolvimento e validação dos produtos - uma postura que parece movida mais pelo medo da reação pública do que por um desejo genuíno de promover inclusão.",
        "Com isso, convidamos você a refletir: por que não focar primeiro no racismo enraizado nessas estratégias de negócio, em vez de justificar inclusão apenas com base no potencial de consumo? Embora o argumento de mercado seja poderoso, ele não enfrenta o racismo estrutural profundo que influencia essas decisões corporativas no longo prazo.",
        "É crucial trazer o racismo estrutural para essa discussão. Embora o caminho possa ser desafiador, esse é um passo necessário para romper o ciclo de cumplicidade que sustenta essas estruturas. Vamos trabalhar por uma nova lógica de produção em que inclusão seja pré-requisito, não apenas estratégia de marketing. E que consumidores, especialmente consumidores brancos, reconheçam a necessidade de exigir mudança real e inclusiva das marcas que escolhem apoiar, rejeitando marcas que não estejam genuinamente comprometidas com equidade e inclusão",
      ],
      image: opiniao4Imagem,
    },
    {
      id: 5,
      title: "Inclusão não é apenas uma tendência de mercado: lições do lançamento da Mascavo",
      body: [
        "A discussão sobre decolonialidade frequentemente se vê envolta em desinformação e resistência. Infelizmente, isso leva ao esvaziamento de práticas significativas que realmente podem transformar nossa sociedade. É essencial trazer as comunidades para o centro das ações, não apenas como alvos de projetos sociais, mas como protagonistas na criação e implementação desses projetos.",
        'O medo do mainstream em perder espaço e poder resulta em ações que, embora inspiradas por uma base decolonial, muitas vezes falham em ser verdadeiramente transformadoras. Frases como "da base pro topo" ou "abordagens comunitárias" são frequentemente utilizadas, mas ainda assim, enfrentamos a dificuldade de conseguir empregos ou projetos de consultoria aprovados em uma estrutura genuinamente decolonial. Isso nos leva a buscar estratégias de adaptação que podem, paradoxalmente, perpetuar as dinâmicas de poder existentes.',
        "Convido vocês a refletirem: o que a decolonialidade significa para você? Como você atua (ou não) com essa abordagem em seu trabalho? Compartilhe suas experiências e pensamentos nos comentários!",
      ],
      image: opiniao5Imagem,
    },
    {
      id: 6,
      title: "Inclusão não é ciência espacial!",
      body: [
        "Hoje, quero compartilhar uma reflexão sobre minha experiência como profissional de DE&I navegando o processo de reposicionamento internacional.",
        "Em casa, minha esposa e eu ficamos tentando adivinhar o leque de etnias que empresas estrangeiras listam em seus formulários de “análise de diversidade”. A conclusão? Até agora, encontrei apenas uma empresa que inclui “Latino” como opção! E, mesmo dentro dessa definição, não havia espaço para especificar a identidade racial da pessoa candidata.",
        "Há dois anos, venho marcando “Other” em toda submissão de artigo, candidatura de emprego, perfil profissional ou avaliação de filiação. Então eu pergunto: 𝘲𝘶𝘢𝘭 é 𝘰 𝘤𝘶𝘴𝘵𝘰 𝘥𝘦 𝘢𝘥𝘪𝘤𝘪𝘰𝘯𝘢𝘳 “𝗟𝗮𝘁𝗶𝗻𝗼/𝗮/𝗲” 𝘤𝘰𝘮 𝘥𝘪𝘴𝘵𝘪𝘯çõ𝘦𝘴 𝘳𝘢𝘤𝘪𝘢𝘪𝘴 𝘤𝘰𝘮𝘰 𝘰𝘱çã𝘰 𝘦𝘮 𝘶𝘮 𝘧𝘰𝘳𝘮𝘶𝘭á𝘳𝘪𝘰?",
        "Na minha visão, esse custo é significativo! E não estou falando de custos financeiros, mas do trabalho de reconhecer latinos, especialmente latinos negros e indígenas, como qualificados para ocupar cargos de gestão ou assumir posições de consultoria sênior. É o custo de desmontar preconceitos e aceitar latinos como Heads, Líderes, Consultores, Mentores, CEOs e mais.",
        "Para muitos recrutadores e gestores de contratação, aceitar como iguais (ou até superiores) aqueles que historicamente foram vistos em papéis subservientes ainda é impensável. Reverter essa lógica é desafiador, mas necessário! Isso é especialmente verdadeiro para latinos racializados, gêneros marginalizados e pessoas com trajetórias majoritariamente baseadas na América Latina. Parece que, sob uma perspectiva do Norte Global, nossas experiências de alguma forma “não contam” ou têm menos valor.",
        "Aqui vai uma reflexão para recrutadores e gestores que querem tornar seus negócios mais inclusivos! 𝗩𝗼𝗰ê 𝗳𝗲𝘇 𝗼 𝗯á𝘀𝗶𝗰𝗼 𝗵𝗼𝗷𝗲? 𝗖𝗼𝗺𝗼 𝗲𝘀𝘁ã𝗼 𝘀𝗲𝘂𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗼𝘀 𝗶𝗻𝘁𝗲𝗿𝗻𝗼𝘀 𝗱𝗲 𝗰𝗼𝗻𝘀𝗰𝗶𝗲𝗻𝘁𝗶𝘇𝗮çã𝗼 𝗲 𝗿𝗲𝗱𝘂çã𝗼 𝗱𝗲 𝘃𝗶é𝘀?",
      ],
      image: imagemFallback,
    },
    {
      id: 7,
      title: "O que acontece quando o discurso de ódio não é - verdadeiramente - combatido?",
      body: [
        'Hoje, quero convidar minha rede a refletir sobre um assunto incômodo e, por isso, muitas vezes "varrido para debaixo do tapete". Como sociedade, estamos cada vez mais adotando o modelo "Twitter" para resolver problemas sociais e estruturais. Não me entendam mal: vejo totalmente o valor das redes sociais, especialmente na disseminação de pautas da extrema direita nas telinhas de nossas tias, mães, avós, primos e afins. No entanto, a questão aqui é: onde estão as políticas de regulação de \n𝘧𝘢𝘬𝘦 𝘯𝘦𝘸𝘴, 𝘥𝘦𝘦𝘱 𝘧𝘢𝘬𝘦𝘴 e do uso de Inteligência Artificial? \nPois é, não temos.',
        'Enquanto nós, alinhados com pautas sociais, seguimos em nossas "torres do conhecimento" pedindo que pessoas sem acesso ao ensino médio ou fundamental “vão estudar”, aqueles que querem privatizar serviços públicos e secar os fundos da educação estão nas ruas, nos WhatsApps, nos grupos de Telegram e Discord.',
        "Que o resultado das eleições dos EUA seja um alerta para nós, no Brasil! Precisamos desenvolver programas de educação social DE BASE! Precisamos sim, regular o uso de IA, especialmente aquelas que geram imagens e vídeos a partir de bancos de dados das redes sociais. E precisamos que essas infrações tenham CONSEQUÊNCIAS REAIS.",
        "Hoje é um dia triste para quem trabalha com pautas sociais, para quem acredita em Direitos Humanos e para quem, em geral, tem algum senso de empatia. Fica aqui o meu chamado para que a nossa federação possa atuar mais diretamente sobre essa pauta e que contratem profissionais que estão na linha de frente, lidando com os impactos reais desse problema.",
      ],
      image: opiniao7Imagem,
    },
  ],
  en: [
    {
      id: 1,
      title: "Is artificial intelligence helping or hindering?",
      body: [
        "Artificial intelligence is already part of our daily lives. It is in social media filters, in the searches we make, in the content that appears in our feeds, and even in the texts we read. But are these technologies being used to reinforce violence against girls and women?",
        "This research seeks to understand how AI can end up spreading misinformation or reinforcing prejudice. Our focus is on how this especially affects girls and women, also considering race, social class, territory, and gender identity.",
        "📢 We want to hear all voices from the diverse Brazilian womanhood, but at this moment, we are prioritizing listening to:\n✨ Trans women\n✨ Women from the North and Northeast of Brazil\n✨ Girls aged 14 to 17 (with parental authorization)",
        "The participation of these groups is essential so that the final report truly represents the diversity of experiences of Brazilian women.",
        "💬 Who can participate:\n👧 Girls aged 14 to 17 (with parental authorization)\n👩 Women aged 18 to 80+ (cis or trans)",
        "⚠️ Girls aged 14 to 17 can respond to the first stage of the research. To participate in the second stage, an online group conversation, it will be necessary to present parental authorization. The consent form will be sent by email after registration of interest.",
        "If you have something to say about how AI impacts (or not) your life, this space is yours. Listening to you is essential to building public policies that protect and respect all women in the face of the challenges brought by new generative artificial intelligence technologies.",
        "🔗 To participate, click here: https://lnkd.in/dXUt8dmM\n📩 Questions: alice.chq@bolsista.itaipuparquetec.org.br",
        "📚 This research is funded by Itaipu Parquetec, in partnership with Itaipu Binacional",
      ],
      image: opiniao1Imagem,
    },
    {
      id: 2,
      title: "Where is the support for working women?",
      body: [
        "A recent decision by Minister Toffoli in Brazil’s Supreme Court (STF) overturned the requirement for a shopping centre to provide breastfeeding rooms for employees of tenant stores. Although the Labor Prosecutor’s Office filed to defend this essential space for working mothers and their children, the court upheld the argument that the shopping centre does not have an employment relationship with these workers.",
        "This decision raises a critical question: 𝘄𝗵𝘆 𝗮𝗿𝗲 𝗲𝘀𝘀𝗲𝗻𝘁𝗶𝗮𝗹 𝗿𝗶𝗴𝗵𝘁𝘀 𝗳𝗼𝗿 𝘄𝗼𝗺𝗲𝗻 𝗮𝗻𝗱 𝗳𝗮𝗺𝗶𝗹𝗶𝗲𝘀 𝘀𝗼 𝗼𝗳𝘁𝗲𝗻 𝘁𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝘁𝗼 𝗯𝗲 𝗰𝗼𝗺𝗽𝗿𝗼𝗺𝗶𝘀𝗲𝗱 𝗶𝗻 𝗱𝗲𝗯𝗮𝘁𝗲𝘀 𝗼𝘃𝗲𝗿 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝘀 𝗮𝗻𝗱 𝗹𝗲𝗴𝗶𝘀𝗹𝗮𝘁𝗶𝗼𝗻?",
        "The judicial narrative cites “preserving constitutional order” and “limiting judicial activism.” But what about the workers now facing additional hurdles to breastfeed at work? The social cost is clear: ultimately, it’s these women and children who pay the price for this rights rollback and are left without support in such a fundamental area as breastfeeding. Another example of the structural violence women face in our country.",
        "📢 Let’s boost the narratives that truly deserve attention!",
      ],
      image: opiniao2Imagem,
    },
    {
      id: 3,
      title:
        "Over 6 years of grieving and perseverance: the conviction of Marielle’s killers is a step towards justice",
      body: [
        "Today, after more than six years, justice has taken a decisive step by convicting Marielle Franco’s killers. It has been over six years since this act of political femicide and racism tore Marielle away from her loved ones and halted her tireless fight for rights and social justice. In the years that followed, her name and family were cruelly exposed and scrutinized in an attempt to justify what can never be justified.",
        "These years have been marked by an unyielding quest for justice and an ongoing sense of grief. Finally, there is a glimpse of accountability, though the path remains unfinished. I sincerely hope Marielle’s family finds some relief and comfort in this moment and that the next steps to bring the masterminds behind this crime to justice will not take as long as the process of convicting her killers did.\nMay justice continue its course - without further delays and with all the rigour required. ✊🏾",
        "📸 Tomaz Silva / Agência Brasil",
      ],
      image: opiniao3Imagem,
    },
    {
      id: 4,
      title: "What do you think when you hear the term Decoloniality?",
      body: [
        "In recent days, Brazil has witnessed yet another alarming example of structural racism. Influencer Mari Saad launched her makeup brand, Mascavo, and was quickly met with heavy criticism for a lack of diversity in her skin-tone products. The entire line of foundations and face products caters exclusively to lighter skin tones, with the explanation being the high cost of developing a more inclusive range. However, the brand spares no expenses when it comes to luxurious packaging, which raises an important question: for Mari Saad, is investing in packaging a higher priority than promoting diversity and inclusion?",
        "This launch sparked a wave of online debate, with many voicing outrage over the exclusion of darker skin tones. The main point that resonated was that in a country where over 56% of the population identifies as Black, the absence of diversity in a new makeup line is both offensive and commercially misguided. Dark-skinned women, men, and non-binary people are major consumers of cosmetics, and the industry needs to cater to them fairly.",
        "But for us at Caju, the issue goes beyond a commercial misstep. In 2017, Fenty Beauty revolutionized the industry by launching a line with 50 shades of foundation, proving that inclusivity doesn’t just sell but opens doors across the entire spectrum of products, from cosmetics to fashion. So why, in 2024, are we still seeing brands make the same mistakes?",
        "The answer lies in colonial and racist structures that continue to shape our society and, by extension, our industries. When a product is designed for a specific audience, it reflects the extent to which that audience is truly seen as part of society. In Mari Saad’s case, her “apology” felt shallow and lacked any real commitment to change. There was no sign of an intent to include Black professionals in the product development and validation processes-a stance that seems driven more by fear of public backlash than by a genuine desire to promote inclusivity.",
        "With that, we invite you to reflect: why not focus first on the ingrained racism within these business strategies, rather than justifying inclusion solely based on consumer potential? While the market argument is powerful, it doesn’t challenge the deep-seated racism that influences these corporate decisions in the long run.",
        "It’s crucial to bring structural racism into this discussion. Though the path may be challenging, it’s a necessary step toward breaking the cycle of complicity that sustains these structures. Let’s work toward a new production logic where inclusion is a prerequisite, not just a marketing angle. And may consumers, especially white consumers, recognize the need to demand true, inclusive change from the brands they choose to support, rejecting brands that aren’t genuinely committed to equity and inclusion",
      ],
      image: opiniao4Imagem,
    },
    {
      id: 5,
      title: "Inclusion Isn’t Just a Market Trend: Lessons from Mascavo’s Launch",
      body: [
        "The discussion on decoloniality is often surrounded by disinformation and resistance. Unfortunately, this leads to the emptying of meaningful practices that can truly transform our society. It is essential to bring communities to the center of actions, not only as targets of social projects, but as protagonists in creating and implementing those projects.",
        "The mainstream’s fear of losing space and power results in actions that, although inspired by a decolonial foundation, often fail to be truly transformative. Phrases such as “from the ground up” or “community-based approaches” are frequently used, yet we still face the difficulty of getting jobs or consulting projects approved within a genuinely decolonial structure. This leads us to seek adaptation strategies that, paradoxically, may perpetuate existing power dynamics.",
        "I invite you to reflect: what does decoloniality mean to you? How do you act (or not) with this approach in your work? Share your experiences and thoughts in the comments!",
      ],
      image: opiniao5Imagem,
    },
    {
      id: 6,
      title: "Inclusion isn’t rocket science!",
      body: [
        "Today, I want to share a reflection on my experience as a DE&I professional navigating the process of international repositioning.",
        "At home, my wife and I make guesses about the range of ethnicities that foreign companies list on their “diversity analysis” forms. The conclusion? So far, I’ve only encountered one company that includes “Latin” as an option! And even within that definition, there was no space to specify the candidate’s racial identity.",
        "For two years now, I’ve been marking “Other” in every article submission, job application, professional profile, or membership assessment. So, I ask: 𝘄𝗵𝗮𝘁’𝘀 𝘁𝗵𝗲 𝗰𝗼𝘀𝘁 𝗼𝗳 𝗮𝗱𝗱𝗶𝗻𝗴 “𝗟𝗮𝘁𝗶𝗻𝗼/𝗮/𝗲” 𝘄𝗶𝘁𝗵 𝗿𝗮𝗰𝗶𝗮𝗹 𝗱𝗶𝘀𝘁𝗶𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗮𝘀 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻 𝗼𝗻 𝗮 𝗳𝗼𝗿𝗺?",
        "In my view, that cost is significant! And I’m not talking about financial costs but the work of recognizing Latinos, especially Black and Indigenous Latinos, as qualified to hold management roles or assume senior consultancy positions. It’s the cost of dismantling prejudice and accepting Latinos as Heads, Leaders, Consultants, Mentors, CEOs, and more.",
        "For many recruiters and hiring managers, accepting as equals (or even as superiors) those who have historically been seen in subservient roles is still unthinkable. Reversing this logic is challenging but necessary! This is especially true for racialized Latinos, marginalized genders, and those with primarily Latin-based careers. It seems that, from a Northern perspective, our experiences somehow “don’t count” or hold less value.",
        "Here’s some food for thought for recruiters and hiring managers who want to make their businesses more inclusive! 𝗛𝗮𝘃𝗲 𝘆𝗼𝘂 𝗱𝗼𝗻𝗲 𝘁𝗵𝗲 𝗯𝗮𝘀𝗶𝗰𝘀 𝘁𝗼𝗱𝗮𝘆? 𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂𝗿 𝗶𝗻𝘁𝗲𝗿𝗻𝗮𝗹 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗲𝘀 𝗳𝗼𝗿 𝗮𝘄𝗮𝗿𝗲𝗻𝗲𝘀𝘀 𝗮𝗻𝗱 𝗯𝗶𝗮𝘀 𝗿𝗲𝗱𝘂𝗰𝘁𝗶𝗼𝗻?",
      ],
      image: imagemFallback,
    },
    {
      id: 7,
      title: "What happens when hate speech is not - truly - confronted?",
      body: [
        "Today, I want to invite my network to reflect on an uncomfortable topic and, for that reason, one that is often “swept under the rug.” As a society, we are increasingly adopting the “Twitter model” to solve social and structural problems. Don’t get me wrong: I fully recognize the value of social media, especially in spreading far-right agendas on the screens of our aunts, mothers, grandmothers, cousins, and so on. However, the question here is: where are the policies to regulate \n𝘧𝘢𝘬𝘦 𝘯𝘦𝘸𝘴, 𝘥𝘦𝘦𝘱 𝘧𝘢𝘬𝘦𝘴, and the use of Artificial Intelligence? \nWell, we don’t have them.",
        "While those of us aligned with social agendas remain in our “towers of knowledge” telling people without access to high school or even basic education to “go study,” those who want to privatize public services and dry up education funds are in the streets, on WhatsApp, and in Telegram and Discord groups.",
        "May the result of the U.S. elections serve as a warning for us in Brazil! We need to develop grassroots social education programs! We do need to regulate the use of AI, especially tools that generate images and videos from social media databases. And we need these violations to have REAL CONSEQUENCES.",
        "Today is a sad day for those who work on social agendas, for those who believe in Human Rights, and for anyone who has some sense of empathy. I leave here my call for our federation to act more directly on this agenda and to hire professionals who are on the front lines, dealing with the real impacts of this problem.",
      ],
      image: opiniao7Imagem,
    },
  ],
  es: [
    {
      id: 1,
      title: "¿La inteligencia artificial está ayudando o perjudicando?",
      body: [
        "La inteligencia artificial ya forma parte de nuestra rutina. Está en los filtros de las redes sociales, en las búsquedas que hacemos, en los contenidos que aparecen en nuestro feed e incluso en los textos que leemos. Pero, ¿se están utilizando estas tecnologías para reforzar violencias contra niñas y mujeres?",
        "Esta investigación busca entender cómo la IA puede terminar difundiendo ideas equivocadas o reforzando prejuicios. Nuestro enfoque está en cómo esto afecta especialmente a niñas y mujeres, considerando también la raza, la clase social, el territorio y la identidad de género.",
        "📢 Queremos escuchar todas las voces de las diversas feminidades brasileñas, pero en este momento estamos priorizando escuchar también a:\n✨ Mujeres trans\n✨ Mujeres del Norte y Nordeste de Brasil\n✨ Niñas de 14 a 17 años (con autorización de sus responsables)",
        "La participación de estos grupos es fundamental para que el informe final sea verdaderamente representativo de la diversidad de experiencias de las mujeres brasileñas.",
        "💬 Quién puede participar:\n👧 Niñas de 14 a 17 años (con autorización de sus responsables)\n👩 Mujeres de 18 a 80+ años (cis o trans)",
        "⚠️ Las niñas de 14 a 17 años pueden responder a la primera etapa de la investigación. Para participar en la segunda etapa, una conversación grupal en línea, será necesario presentar la autorización de sus responsables. El formulario de consentimiento será enviado por correo electrónico después del registro de interés.",
        "Si tienes algo que decir sobre cómo la IA impacta (o no) tu vida, este espacio es tuyo. Escucharte es esencial para construir políticas públicas que protejan y respeten a todas las mujeres frente a los desafíos que traen las nuevas tecnologías de inteligencia artificial generativa.",
        "🔗 Para participar, haz clic aquí: https://lnkd.in/dXUt8dmM\n📩 Dudas: alice.chq@bolsista.itaipuparquetec.org.br",
        "📚 Esta investigación está financiada por Itaipu Parquetec, en colaboración con Itaipu Binacional.",
      ],
      image: opiniao1Imagem,
    },
    {
      id: 2,
      title: "¿Dónde está el apoyo para las mujeres que trabajan?",
      body: [
        "Una decisión reciente del ministro Toffoli, en el Supremo Tribunal Federal (STF) de Brasil, anuló la exigencia de que un centro comercial ofreciera salas de lactancia para las empleadas de las tiendas arrendatarias. Aunque la Fiscalía Laboral presentó una acción para defender este espacio esencial para madres trabajadoras y sus bebés, el tribunal mantuvo el argumento de que el centro comercial no tiene vínculo laboral con estas trabajadoras.",
        "Esta decisión plantea una pregunta crítica: ¿por qué los derechos esenciales de mujeres y familias son tan a menudo los primeros en ser comprometidos en debates sobre intereses empresariales y legislación?",
        "La narrativa judicial habla de “preservar el orden constitucional” y “limitar el activismo judicial”. Pero ¿qué pasa con las trabajadoras que ahora enfrentan más barreras para amamantar en el trabajo? El costo social es evidente: al final, son estas mujeres y niños quienes pagan el precio de este retroceso de derechos y quedan sin apoyo en un área tan fundamental como la lactancia. Otro ejemplo de la violencia estructural que enfrentan las mujeres en nuestro país.",
        "📢 ¡Impulsemos las narrativas que realmente merecen atención!",
      ],
      image: opiniao2Imagem,
    },
    {
      id: 3,
      title:
        "Más de 6 años de duelo y perseverancia: la condena de los asesinos de Marielle es un paso hacia la justicia",
      body: [
        "Hoy, después de más de seis años, la justicia dio un paso decisivo al condenar a los asesinos de Marielle Franco. Han pasado más de seis años desde que este acto de feminicidio político y racismo le arrebató Marielle a sus seres queridos e interrumpió su lucha incansable por derechos y justicia social. En los años siguientes, su nombre y su familia fueron cruelmente expuestos y escrutados en un intento de justificar lo que jamás puede ser justificado.",
        "Estos años han estado marcados por una búsqueda incansable de justicia y un duelo continuo. Finalmente, hay un indicio de rendición de cuentas, aunque el camino sigue inconcluso. Espero sinceramente que la familia de Marielle encuentre algo de alivio y consuelo en este momento y que los próximos pasos para llevar a los autores intelectuales de este crimen ante la justicia no tarden tanto como tardó el proceso para condenar a sus asesinos.\nQue la justicia siga su curso - sin más demoras y con todo el rigor necesario. ✊🏾",
        "📸 Tomaz Silva / Agência Brasil",
      ],
      image: opiniao3Imagem,
    },
    {
      id: 4,
      title: "¿Qué piensas cuando escuchas el término Decolonialidad?",
      body: [
        "En los últimos días, Brasil ha sido testigo de otro ejemplo alarmante de racismo estructural. La influencer Mari Saad lanzó su marca de maquillaje, Mascavo, y rápidamente recibió fuertes críticas por la falta de diversidad en los tonos de piel de sus productos. Toda la línea de bases y productos para el rostro atiende exclusivamente a tonos de piel más claros, con la explicación de que desarrollar una gama más inclusiva tiene un costo elevado. Sin embargo, la marca no escatima gastos cuando se trata de empaques lujosos, lo que plantea una pregunta importante: para Mari Saad, ¿invertir en empaque es una prioridad mayor que promover diversidad e inclusión?",
        "Este lanzamiento generó una ola de debate en línea, con muchas personas expresando indignación por la exclusión de tonos de piel más oscuros. El punto principal que más resonó fue que, en un país donde más del 56% de la población se identifica como negra, la ausencia de diversidad en una nueva línea de maquillaje es tanto ofensiva como comercialmente equivocada. Mujeres, hombres y personas no binarias de piel oscura son grandes consumidores de cosméticos, y la industria necesita atenderles de forma justa.",
        "Pero para nosotras en Caju, el tema va más allá de un error comercial. En 2017, Fenty Beauty revolucionó la industria al lanzar una línea con 50 tonos de base, demostrando que la inclusión no solo vende, sino que abre puertas en todo el espectro de productos, desde cosméticos hasta moda. Entonces, ¿por qué en 2024 seguimos viendo marcas cometer los mismos errores?",
        "La respuesta está en estructuras coloniales y racistas que siguen moldeando nuestra sociedad y, por extensión, nuestras industrias. Cuando un producto se diseña para un público específico, refleja hasta qué punto ese público es realmente visto como parte de la sociedad. En el caso de Mari Saad, su “disculpa” sonó superficial y sin compromiso real de cambio. No hubo señales de intención de incluir profesionales negros en los procesos de desarrollo y validación de producto, una postura que parece impulsada más por el miedo a la reacción pública que por un deseo genuino de promover inclusión.",
        "Con eso, te invitamos a reflexionar: ¿por qué no centrarnos primero en el racismo arraigado en estas estrategias empresariales, en lugar de justificar la inclusión únicamente por el potencial de consumo? Aunque el argumento de mercado es poderoso, no desafía el racismo estructural profundo que influye en estas decisiones corporativas a largo plazo.",
        "Es crucial llevar el racismo estructural a esta discusión. Aunque el camino pueda ser desafiante, es un paso necesario para romper el ciclo de complicidad que sostiene estas estructuras. Trabajemos por una nueva lógica de producción donde la inclusión sea un requisito, no solo un ángulo de marketing. Y que los consumidores, especialmente los consumidores blancos, reconozcan la necesidad de exigir un cambio real e inclusivo de las marcas que eligen apoyar, rechazando marcas que no estén genuinamente comprometidas con la equidad y la inclusión",
      ],
      image: opiniao4Imagem,
    },
    {
      id: 5,
      title:
        "La inclusión no es solo una tendencia de mercado: lecciones del lanzamiento de Mascavo",
      body: [
        "El debate sobre la decolonialidad suele estar rodeado de desinformación y resistencia. Lamentablemente, esto lleva al vaciamiento de prácticas significativas que realmente pueden transformar nuestra sociedad. Es esencial llevar a las comunidades al centro de las acciones, no solo como destinatarias de proyectos sociales, sino como protagonistas en la creación e implementación de esos proyectos.",
        'El miedo del mainstream a perder espacio y poder genera acciones que, aunque inspiradas en una base decolonial, muchas veces no logran ser verdaderamente transformadoras. Frases como "de abajo hacia arriba" o "enfoques comunitarios" se utilizan con frecuencia, pero aun así enfrentamos la dificultad de conseguir empleos o proyectos de consultoría aprobados dentro de una estructura genuinamente decolonial. Esto nos lleva a buscar estrategias de adaptación que, paradójicamente, pueden perpetuar las dinámicas de poder existentes.',
        "Les invito a reflexionar: ¿qué significa la decolonialidad para ti? ¿Cómo actúas (o no) con este enfoque en tu trabajo? ¡Comparte tus experiencias y pensamientos en los comentarios!",
      ],
      image: opiniao5Imagem,
    },
    {
      id: 6,
      title: "¡La inclusión no es ciencia espacial!",
      body: [
        "Hoy quiero compartir una reflexión sobre mi experiencia como profesional de DE&I navegando el proceso de reposicionamiento internacional.",
        "En casa, mi esposa y yo hacemos suposiciones sobre la variedad de etnias que las empresas extranjeras incluyen en sus formularios de “análisis de diversidad”. ¿La conclusión? Hasta ahora, solo encontré una empresa que incluye “Latino” como opción. Y aun dentro de esa definición, no había espacio para especificar la identidad racial de la persona candidata.",
        "Desde hace dos años, marco “Other” en cada envío de artículo, postulación laboral, perfil profesional o evaluación de membresía. Entonces pregunto: 𝘤𝘶á𝘭 𝘦𝘴 𝘦𝘭 𝘤𝘰𝘴𝘵𝘰 𝘥𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘳 “𝗟𝗮𝘁𝗶𝗻𝗼/𝗮/𝗲” 𝘤𝘰𝘯 𝘥𝘪𝘴𝘵𝘪𝘯𝘤𝘪𝘰𝘯𝘦𝘴 𝘳𝘢𝘤𝘪𝘢𝘭𝘦𝘴 𝘤𝘰𝘮𝘰 𝘰𝘱𝘤𝘪ó𝘯 𝘦𝘯 𝘶𝘯 𝘧𝘰𝘳𝘮𝘶𝘭𝘢𝘳𝘪𝘰?",
        "Desde mi perspectiva, ese costo es significativo. Y no hablo de costos financieros, sino del trabajo de reconocer a las personas latinas, especialmente latinas negras e indígenas, como calificadas para ocupar cargos de gestión o asumir posiciones de consultoría sénior. Es el costo de desmontar prejuicios y aceptar a personas latinas como Heads, Líderes, Consultoras/es, Mentoras/es, CEOs y más.",
        "Para muchas personas reclutadoras y responsables de contratación, aceptar como iguales (o incluso superiores) a quienes históricamente han sido vistos en roles subalternos sigue siendo impensable. Revertir esta lógica es desafiante, pero necesario. Esto es especialmente cierto para latinas/os racializadas/os, géneros marginados y personas con trayectorias principalmente latinoamericanas. Parece que, desde una perspectiva del Norte Global, nuestras experiencias de algún modo “no cuentan” o tienen menos valor.",
        "Aquí va una reflexión para reclutadores y responsables de contratación que quieren hacer sus empresas más inclusivas: 𝗛𝗮𝗰𝗲𝘀 𝗵𝗼𝘆 𝗹𝗼 𝗯á𝘀𝗶𝗰𝗼? ¿𝗖ó𝗺𝗼 𝘀𝗼𝗻 𝘁𝘂𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝗼𝘀 𝗶𝗻𝘁𝗲𝗿𝗻𝗼𝘀 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗰𝗼𝗻𝗰𝗶𝗲𝗻𝘁𝗶𝘇𝗮𝗰𝗶ó𝗻 𝘆 𝗹𝗮 𝗿𝗲𝗱𝘂𝗰𝗰𝗶ó𝗻 𝗱𝗲 𝘀𝗲𝘀𝗴𝗼𝘀?",
      ],
      image: imagemFallback,
    },
    {
      id: 7,
      title: "¿Qué pasa cuando el discurso de odio no es - verdaderamente - combatido?",
      body: [
        "Hoy quiero invitar a mi red a reflexionar sobre un tema incómodo y, por eso mismo, muchas veces “barrido debajo de la alfombra”. Como sociedad, cada vez adoptamos más el modelo “Twitter” para resolver problemas sociales y estructurales. No me malinterpreten: reconozco totalmente el valor de las redes sociales, especialmente en la difusión de agendas de extrema derecha en las pantallas de nuestras tías, madres, abuelas, primos y demás. Sin embargo, la pregunta aquí es: ¿dónde están las políticas de regulación de \n𝘧𝘢𝘬𝘦 𝘯𝘦𝘸𝘴, 𝘥𝘦𝘦𝘱 𝘧𝘢𝘬𝘦𝘴 y del uso de Inteligencia Artificial? \nPues sí, no las tenemos.",
        "Mientras nosotras y nosotros, alineados con agendas sociales, seguimos en nuestras “torres del conocimiento” pidiendo que personas sin acceso a la educación secundaria o básica “vayan a estudiar”, quienes quieren privatizar servicios públicos y secar los fondos de la educación están en las calles, en WhatsApp y en grupos de Telegram y Discord.",
        "¡Que el resultado de las elecciones en EE. UU. sea una alerta para nosotras y nosotros, en Brasil! ¡Necesitamos desarrollar programas de educación social DE BASE! Sí, necesitamos regular el uso de IA, especialmente aquellas que generan imágenes y videos a partir de bancos de datos de las redes sociales. Y necesitamos que estas infracciones tengan CONSECUENCIAS REALES.",
        "Hoy es un día triste para quienes trabajan con agendas sociales, para quienes creen en los Derechos Humanos y para quienes, en general, tienen algún sentido de empatía. Dejo aquí mi llamado para que nuestra federación pueda actuar más directamente sobre esta agenda y contratar a profesionales que están en la primera línea, lidiando con los impactos reales de este problema.",
      ],
      image: opiniao7Imagem,
    },
  ],
};

export function getOpinions(language: Language): OpinionEntry[] {
  return opinionsByLanguage[language] ?? opinionsByLanguage["pt-BR"];
}

export function getOpinionById(language: Language, id: number): OpinionEntry | undefined {
  return getOpinions(language).find((opinion) => opinion.id === id);
}
