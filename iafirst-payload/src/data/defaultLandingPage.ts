export type LandingPageData = {
  title: string
  slug: string
  hero: {
    badge: string
    headline: string
    highlightedHeadline: string
    description: string
    primaryCTA: string
    secondaryCTA: string
  }
  diagnosis: {
    eyebrow: string
    headline: string
    description: string
    stats: Array<{
      value: string
      headline: string
      source: string
    }>
  }
  outcomes: {
    eyebrow: string
    headline: string
    description: string
    items: Array<{
      title: string
      description: string
      bullets: Array<{ item: string }>
    }>
  }
  program: {
    eyebrow: string
    headline: string
    description: string
    modules: Array<{
      month: string
      title: string
      description: string
    }>
  }
  tools: {
    eyebrow: string
    headline: string
    description: string
    note: string
    items: Array<{ name: string }>
  }
  mentors: {
    eyebrow: string
    headline: string
    description: string
    items: Array<{
      name: string
      role: string
      bio: string
      photoPath: string
      photo?: { url?: string | null } | number | null
    }>
  }
  offer: {
    eyebrow: string
    headline: string
    description: string
    price: string
    pricePeriod: string
    priceDetails: string
    highlights: Array<{
      title: string
      description: string
    }>
    submitLabel: string
    successTitle: string
    successMessage: string
  }
  faq: {
    eyebrow: string
    headline: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  finalCTA: {
    headline: string
    description: string
    buttonLabel: string
  }
  contact: {
    tagline: string
    address: string
    email: string
    whatsappURL: string
    linkedinURL: string
    instagramURL: string
    privacyURL: string
  }
  seo: {
    title: string
    description: string
  }
}

export const defaultLandingPage: LandingPageData = {
  title: 'Mentoria AI FIRST',
  slug: 'home',
  hero: {
    badge: 'Mentoria 1:1 para líderes · Vagas limitadas',
    headline: 'Seu time já usa IA. Você ainda está',
    highlightedHeadline: 'no comando?',
    description:
      'Mentoria individual de 4 meses para VPs, C-levels e fundadores que não querem apenas aprovar a IA dos outros, e sim dominar a própria. Você sai com fluxos, copilotos e agentes rodando na sua rotina.',
    primaryCTA: 'Quero aplicar para a mentoria',
    secondaryCTA: 'Conhecer o programa',
  },
  diagnosis: {
    eyebrow: '01 · Diagnóstico',
    headline: 'A janela está fechando. E ela é menor do que parece.',
    description:
      'Em 24 meses, a diferença entre empresas que dominaram IA e as que “ainda estão estudando” será irreversível em P&L, talento e múltiplo de mercado.',
    stats: [
      {
        value: '73%',
        headline: 'dos executivos ainda dependem inteiramente da própria agenda para operar',
        source: 'Pesquisa interna 3ADS · 412 executivos · 2026',
      },
      {
        value: '8×',
        headline: 'é o múltiplo de produtividade entre líderes AI First e líderes tradicionais',
        source: 'Análise comparativa em 3 setores · 2025–2026',
      },
      {
        value: '92%',
        headline: 'dos cursos de IA terminam sem nenhuma ferramenta aplicada à rotina real',
        source: 'Benchmark de programas executivos · 2025',
      },
      {
        value: '12h',
        headline: 'é quanto um executivo AI First recupera por semana, no médio prazo',
        source: 'Telemetria de alunos 3ADS · médias do mês 03',
      },
    ],
  },
  outcomes: {
    eyebrow: '02 · O que você constrói',
    headline: 'Você não aprende sobre IA. Você sai com a sua.',
    description:
      'Em 4 meses você constrói, lado a lado com o mentor, uma arquitetura executiva de IA pronta para uso: agente próprio, stack pessoal e fluxos operacionais aplicados à sua rotina.',
    items: [
      {
        title: 'Mentalidade AI First',
        description:
          'O sistema de pensamento por trás de executivos exponenciais. Decidir com IA sem virar refém dela.',
        bullets: [
          { item: 'Frames mentais do executivo AI First' },
          { item: 'Engenharia de prompts executivos' },
          { item: 'Stack essencial, escolhida com você' },
        ],
      },
      {
        title: 'Executive Builder',
        description:
          'Vibe Coding aplicado: você constrói ferramentas, dashboards e assistentes sem depender de um time técnico.',
        bullets: [
          { item: 'Soluções sem código complexo' },
          { item: 'Dashboards e assistentes inteligentes' },
          { item: 'Automações leves para a rotina executiva' },
        ],
      },
      {
        title: 'Executive AI OS',
        description:
          'Tudo conectado em um sistema operacional executivo, com contexto, memória e fluxos orquestrados.',
        bullets: [
          { item: 'Executive Copilot personalizado' },
          { item: 'Relatórios e insights automatizados' },
          { item: 'Governança, segurança e privacidade' },
        ],
      },
    ],
  },
  program: {
    eyebrow: '03 · Módulos',
    headline: 'Quatro módulos. Quatro meses. Um sistema executivo pronto.',
    description:
      'Cada módulo é um mês de trabalho 1:1, com encontros semanais de 1h30. Você sai de cada um com algo aplicado, não com slides para revisar depois.',
    modules: [
      {
        month: 'Mês 01',
        title: 'A mentalidade do executivo AI First',
        description:
          'Tomada de decisão, produtividade, delegação cognitiva, engenharia de prompts executivos e definição da sua stack essencial.',
      },
      {
        month: 'Mês 02',
        title: 'Construir soluções sem depender de técnico',
        description:
          'Vibe Coding para criar ferramentas rápidas, dashboards, assistentes, automações leves, fluxos e integrações simples.',
      },
      {
        month: 'Mês 03',
        title: 'Construa seu próprio Executive Copilot',
        description:
          'Arquitetura, contexto e memória personalizada para agentes de análise, comunicação e operação integrados às suas ferramentas.',
      },
      {
        month: 'Mês 04',
        title: 'Sua IA como sistema operacional executivo',
        description:
          'Dashboards, relatórios, insights automatizados, governança, segurança e deployment do seu Executive AI OS.',
      },
    ],
  },
  tools: {
    eyebrow: '04 · Ferramentas & Stack',
    headline: 'As ferramentas que você vai dominar na prática.',
    description:
      'Não é uma lista para decorar. É a stack que você aprende a operar e combinar conforme o seu contexto.',
    note:
      'As ferramentas evoluem a cada mês — e tudo bem. Você leva o critério para escolher, combinar e substituir qualquer stack conforme o mercado muda.',
    items: [
      'Claude',
      'Gemini',
      'ChatGPT',
      'Copilot',
      'Perplexity',
      'Claude Code',
      'Lovable',
      'Cursor',
      'Codex',
      'Antigravity',
      'Vertex AI',
      'Notion',
      'Obsidian',
      'GitHub',
      'Supabase',
      'BigQuery',
    ].map((name) => ({ name })),
  },
  mentors: {
    eyebrow: '05 · Quem conduz',
    headline: 'Quatro mentores. Quatro meses. Você, no centro.',
    description:
      'Mentoria 1:1 conduzida por quem implementa. Estratégia, engenharia de IA aplicada, performance e experiência, cobrindo do MBA ao código, do agente à métrica de negócio.',
    items: [
      {
        name: 'Carlos Costa',
        role: 'Sócio Fundador 3ADS · Diretor de Marketing Efetiva',
        bio: 'Facilitador em programas de MBA e palestrante nas áreas de Tecnologia, Marketing e Vendas. Já treinou mais de 15.000 alunos e atuou como consultor em mais de 300 organizações. Bacharel em Sistemas de Informação pela UFG, com MBA em Marketing, Vendas e Liderança.',
        photoPath: '/mentores/carlos-costa.jpg',
      },
      {
        name: 'Geovany Correia',
        role: 'Fundador da Autimize · IA & Automação',
        bio: 'Especialista e entusiasta nas áreas de Inteligência Artificial, Automações de Processos e Comercial. Parte de um grupo de empresas com quase 40 anos de mercado e mais de 25 empresas próprias nos mais diversos segmentos.',
        photoPath: '/mentores/geovany-correia.png',
      },
      {
        name: 'Guilherme Medeiros',
        role: 'Sócio Fundador 3ADS · Diretor de Performance',
        bio: 'Estratégia digital, mídia paga, análise de dados e IA aplicada ao marketing. Atuou em mais de 250 projetos e treinou mais de 500 alunos em Google Ads, Meta Ads, automação e crescimento.',
        photoPath: '/mentores/guilherme-medeiros.png',
      },
      {
        name: 'Nathália Machado',
        role: 'Sócia Fundadora 3ADS · Diretora de UX/UI e Conteúdo',
        bio: 'Publicitária e líder de projetos de otimização de processos. Une estratégia, UX/UI e inteligência artificial para criar experiências digitais mais eficientes e orientadas a resultados.',
        photoPath: '/mentores/nathalia-machado.png',
      },
    ],
  },
  offer: {
    eyebrow: '06 · Próxima vaga',
    headline: 'Aplique para a mentoria AI FIRST.',
    description:
      'Formato 1:1 com vagas limitadas. A aplicação leva 3 minutos. Retorno em até 48h úteis com convite para conversa.',
    price: 'R$ 7.470',
    pricePeriod: '/mês',
    priceDetails: '4 meses · 16 encontros 1:1 ao vivo · 4 mentores',
    highlights: [
      {
        title: 'Início em até 7 dias',
        description: '4 meses · 1 encontro semanal de 1h30 ao vivo',
      },
      {
        title: 'Online ou presencial',
        description: 'Encontros remotos ou presenciais em Goiânia · você escolhe',
      },
      {
        title: 'Sai com sistema funcionando',
        description: 'Agente executivo, stack pessoal, fluxos e biblioteca de prompts',
      },
    ],
    submitLabel: 'Enviar aplicação',
    successTitle: 'Aplicação recebida.',
    successMessage: 'Retornaremos em até 48h úteis.',
  },
  faq: {
    eyebrow: '07 · Perguntas comuns',
    headline: 'Antes de aplicar.',
    items: [
      {
        question: 'Quanto custa o programa?',
        answer:
          'R$ 7.470 por mês, durante os 4 meses de mentoria. Inclui os 16 encontros 1:1 ao vivo com os mentores, materiais e biblioteca de prompts.',
      },
      {
        question: 'Preciso ter background técnico?',
        answer:
          'Não. A mentoria foi desenhada para executivos generalistas. Você aprende Vibe Coding: construir soluções sem código complexo, com IA como parceira de criação.',
      },
      {
        question: 'Como funcionam as sessões 1:1?',
        answer:
          'Você tem 1 encontro semanal de 1h30 ao vivo, durante 4 meses, online ou presencial em Goiânia. A pauta é focada no que você precisa construir, com confidencialidade sob NDA.',
      },
      {
        question: 'É presencial ou remoto?',
        answer:
          'Você escolhe: online, com encontros ao vivo e material de apoio, ou presencial em Goiânia. Em ambos os formatos, você executa a construção entre as sessões com suporte assíncrono.',
      },
      {
        question: 'Recebo certificado?',
        answer:
          'Sim, mas o principal resultado é o seu agente executivo rodando, sua biblioteca de prompts e seus fluxos automatizados. O certificado existe para fins formais; o ROI está no que você constrói.',
      },
      {
        question: 'Quem não é fit para o programa?',
        answer:
          'Quem busca apenas teoria geral sobre IA, não tem autonomia para aplicar no próprio trabalho ou espera fórmulas mágicas. O AI FIRST exige que você construa, não apenas absorva.',
      },
    ],
  },
  finalCTA: {
    headline: 'As vagas fecham quando os mentores fecham agenda.',
    description:
      'Mentoria 1:1 com quatro mentores tem limite natural. Aplicar agora garante sua janela.',
    buttonLabel: 'Quero aplicar para a mentoria',
  },
  contact: {
    tagline: 'Mentoria executiva em IA · by 3ADS. Goiânia · Remoto.',
    address:
      'Essenciale Premier, Rua Teresina, Qd. 05, R. L-5, nº 9, Salas 1604 e 1605 · Ed. Alto da Glória · Goiânia/GO · 74815-715',
    email: 'comercial@3ads.com.br',
    whatsappURL:
      'https://wa.me/556282005986?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20da%20Mentoria%20AI%20FIRST%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria.',
    linkedinURL: 'https://www.linkedin.com/company/3ads/',
    instagramURL: 'https://www.instagram.com/3adsdigital/',
    privacyURL: 'https://3ads.com.br/politica-de-privacidade-e-termos-de-uso/',
  },
  seo: {
    title: 'Mentoria AI FIRST para Executivos · 3ADS',
    description:
      'Mentoria individual de 4 meses para líderes que querem construir sua própria arquitetura executiva de IA, com fluxos, copilotos e agentes aplicados à rotina real.',
  },
}
