// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'murilopmachado', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['brasa-ai/spechammer', 'brasa-ai/spechammer'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'External Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CyclesMobile',
          description:
            'Participação na elicitação dos requisitos, análise, especificação diretamente como solicitando por compreender e conhecimento do produto a se elaborado.  ● Desenvolvendo os aplicativos com base nos requisitos elaborados e regras de negócio sobre mobile, Especificação de Requisitos, Casos de Uso. ● Desenvolvimento destes aplicativos para iOS, Android e Windows Phone com HTML5, CSS3, Javascript, Twitter Bootstrap e TopCoat. ● Na fase dos Testes, elaborando cenários de teste (para o ambiente móbile e o site da empresa),  criando na empresa um processo de teste com Cenários de Testes, reportes e controle dos Bugs e  auxilio na definição de ferramentas para acompanhamento destas tarefas. ● Testes de acelerômetro, geolocalização, lentidão e falta de conexão, layout, fraseologia e gramática. ● Elaboração da descrição dos processos da empresa de acordo com cada aplicativo  desenvolvido. ● Desenvolvimento e detalhando os projetos para cada aplicativo (jogos e utilitários),  inovando, implementando os novos módulos. Descrevendo e mapeando novas tendências e soluções de aplicativos para o mercado.',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Disputa',
          description:
            'Criação de workflow para tratamento de disputas.  Entre as minhas atividades destacam-se:  Gestão da equipe / projeto e especificação do produto',
          imageUrl:
            '',
          link: '',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Murilo Machado', description: 'Hello there!  My name is Murilo Machado, and I am an experienced IT professional with over 12 years of experience, serving as the a Head of Technology. I have a proven track record as a leader and have been instrumental in developing innovative tech strategies for businesses.  My approach combines my deep understanding of market dynamics with technical expertise, resulting in significant growth and client acquisition. As an executive, I have spearheaded pre-sales, managed key client relationships, and driven lead generation. I am passionate about creating value for clients, understanding their needs, and delivering tailored technological solutions, which has resulted in long-lasting client partnerships and business expansion.   I am committed to cybersecurity and aligning with the latest industry standards and innovations to safeguard digital assets. Additionally, my proficiency in process automation and test automation drives efficiency and security in tech operations.  I am also the founder of an educational venture that grew into a consultancy, where we educated over 2000 students about test automation, scrum, process automation, kanban.  I am passionate about leveraging my skills in executive roles to drive technological advancement and business growth. If you\'re interested in discussing collaboration or exploring new opportunities, I\'d be delighted to connect over coffee/beer or a chat.  Currently learning and exploring AI Engineering.  I\'m looking forward to talking with you!  Murilo Machado', imageURL: '' },
  social: {
    linkedin: 'murilopmachado',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+31 6 45276112',
    email: 'murilo.paula.machado@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Continuous Delivery (CD)',
    'Burp Suite',
    'IT Infrastructure Management',
    'Technology Management',
    'Google Cloud Platform (GCP)',
    'k6 Load Testing',
    'Project Management',
    'LangChain',
    'Web Accessibility Testing',
    'Performance Testing',
    'Sonarqube',
    'Istio',
    'Argo',
    'Node.js',
    'Large Language Model Operations (LLMOps)',
    'Cybersecurity',
    'Cucumber',
    'Docker Products',
    'IT Management',
    'Agile Application Development',
    'Jenkins',
    'Test Planning',
    'Software Testing',
    'Go (Programming Language)',
    'Docks',
    'Kubernetes',
    'Helm Charts',
    'Test Automation Frameworks',
    'Continuous Integration and Continuous Delivery (CI/CD)',
    'SCA',
    'Vulnerability Assessment',
    'Large Language Models (LLM)',
    'Cross-functional Team Leadership',
    'Software Development',
    'Software Quality Assurance',
    'Terraform',
    'Amazon Web Services (AWS)',
    'Azure DevOps Services',
    'Engineering',
    'Infrastructure as code (IaC)',
    'Engineering Management',
    'Entrepreneurship',
    'Business Development',
    'Technical Leadership',
    'DevSecOps',
    'Security Awareness',
    'Information Security',
    'Creative Problem Solving',
    'Organizational Vision',
    'Digital Transformation',
    'Client Delivery',
    'IT Service Management',
    'Technology Leadership',
    'Team Management',
    'Strategic Planning',
    'IT Operations',
    'Public Speaking',
    'Team Leadership',
    'Negotiation',
    'Stakeholder Management',
    'Stakeholder Engagement',
    'Computer Science',
    'Presales',
    'Decision-Making',
    'Communication',
    'Scrum',
    'Test Automation',
    'Quality Assurance',
    'Agile Methodologies',
    'E-commerce',
    'Agile Testing',
    'Continuous Integration',
    'SQL',
    'C#',
    'Java',
    'Ruby',
    'JavaScript',
    'Git',
    'Leadership',
    'Management',
    'Selenium Testing',
    'QA Automation',
    'API Testing',
    'DevOps',
    'Cloud Computing',
    'Start-up Environment',
    'Python (Programming Language)',
    'Mentoring',
    'Cloud Security'
  ],
  experiences: [
    {
      company: 'spriteCloud',
      position: 'Senior Platform Engineer @ NN',
      from: 'January 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'spriteCloud',
      position: 'Engineer Manager',
      from: 'January 2023',
      to: 'February 2024',
      companyLink: '',
    },
    {
      company: 'spriteCloud',
      position: 'DevSecOps Architect @ Ahold Delhaize',
      from: 'September 2021',
      to: 'January 2023',
      companyLink: '',
    },
    {
      company: 'spriteCloud',
      position: 'Automation Test Lead | Test automation Instructor',
      from: 'April 2021',
      to: 'September 2021',
      companyLink: '',
    },
    {
      company: 'Chama',
      position: 'Quality Assurance Automation Engineer',
      from: 'April 2020',
      to: 'April 2021',
      companyLink: '',
    },
    {
      company: 'QWIC',
      position: 'Quality Assurance Automation Engineer',
      from: 'January 2020',
      to: 'April 2020',
      companyLink: '',
    },
    {
      company: 'Pi investimentos',
      position: 'Software Developer Engineer In Test | DevOps',
      from: 'January 2019',
      to: 'December 2019',
      companyLink: '',
    },
    {
      company: 'Gupy',
      position: 'Head Of Quality Assurance',
      from: 'January 2018',
      to: 'December 2018',
      companyLink: '',
    },
    {
      company: 'Vilas Boas IT',
      position: 'Co-Founder | Test Automation Teacher',
      from: 'January 2016',
      to: 'April 2018',
      companyLink: '',
    },
    {
      company: 'Anheuser-Busch InBev',
      position: 'Consultant QA Engineer',
      from: 'February 2016',
      to: 'January 2017',
      companyLink: '',
    },
    {
      company: 'Dafiti',
      position: 'Freelancer Senior Quality Assurance Analyst',
      from: 'June 2015',
      to: 'October 2015',
      companyLink: '',
    },
    {
      company: 'Walmart eCommerce',
      position: 'Sr. Software Quality Assurance Engineer',
      from: 'August 2014',
      to: 'July 2015',
      companyLink: '',
    },
    {
      company: 'Akatus',
      position: 'Software Quality Assurance Analyst',
      from: 'November 2013',
      to: 'July 2014',
      companyLink: '',
    },
    {
      company: 'Liberty Seguros',
      position: 'Software Quality Assurance Analyst',
      from: 'April 2013',
      to: 'July 2013',
      companyLink: '',
    },
    {
      company: 'IBM',
      position: 'Software Quality Assurance Analyst',
      from: 'February 2013',
      to: 'April 2013',
      companyLink: '',
    },
    {
      company: 'Instituto Atlântico',
      position: 'Junior Quality Assurance Analyst',
      from: 'November 2012',
      to: 'March 2013',
      companyLink: '',
    },
    {
      company: 'Shoes4you',
      position: 'Junior Software Quality Assurance Analyst',
      from: 'September 2012',
      to: 'November 2012',
      companyLink: '',
    },
    {
      company: 'Inmetrics',
      position: 'Junior Test Analyst',
      from: 'September 2011',
      to: 'October 2012',
      companyLink: '',
    }
  ],
  certifications: [
    {
      name: 'Bootcamp em Ruby on Rails',
      body: 'Campus Code',
      year: '2015',
      link: 'https://www.linkedin.com/company/5894869?trk=prof-certification-org_name',
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      body: 'EXIN',
      year: '',
      link: '',
    },
    {
      name: 'Exam Certificate: EXIN Ethical Hacking Foundation (EHF)',
      body: 'EXIN',
      year: '2022',
      link: 'https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=613CE7FF-F528-4FB4-A3AD-5E4D5C28BF7F&ts=1775044031',
    }
  ],
  educations: [
    {
      institution: 'ITIL V3 Foundations',
      degree: 'Trainning',
      from: '',
      to: '',
    },
    {
      institution: 'SAP ABAP',
      degree: 'Trainning',
      from: '',
      to: '',
    },
    {
      institution: 'UML',
      degree: 'Impacta',
      from: '',
      to: '',
    },
    {
      institution: 'Visual C#',
      degree: 'Impacta',
      from: '',
      to: '',
    },
    {
      institution: 'Business Analyst with Babok 2.0',
      degree: 'Trainning',
      from: '',
      to: '',
    },
    {
      institution: 'BPMN - Business Process Analyst',
      degree: 'Trainning',
      from: '',
      to: '',
    },
    {
      institution: 'iOS Mobile Development with ObjectiveC',
      degree: 'Caelum',
      from: '',
      to: '',
    },
    {
      institution: 'EHPX - Ethical Hacking Post Exploitation',
      degree: '',
      from: '',
      to: '',
    }
  ],
  // publications: [
  //   // Publications section is empty as there was no corresponding data in profile.json
  // ],
  // // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'business'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  enablePWA: true,
};

export default CONFIG;