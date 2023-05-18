import { icons } from "../assets/icons/Menu";
import { countryFlags, countryPics } from "../assets/countries";
export const menuContent = {
  title: {
    title: {
      enUS: "ABOUT",
      ptBR: "SOBRE",
      esES: "SOBRE",
    },
  },

  items: [
    {
      aboutItem: false,
      icon: icons.feather,
      title: {
        enUS: "Home",
        ptBR: "Página Inicial",
        esES: "Página Inicial",
      },
      path: "/",
      infoContainer: {
        technologies: {
          code: [],
          design: [],
          others: [],
        },
        challenges: {
          enUS: "Challenges",
          ptBR: "Desafios",
          esES: "Desafios",
        },
      },
    },
    {
      aboutItem: false,
      icon: icons.country,
      title: {
        enUS: "Where r we going?",
        ptBR: "Para onde vamos?",
        esES: "Adónde nos vamos?",
      },
      path: "/countries",
      infoContainer: {
        technologies: {
          code: [],
          design: [],
          others: [],
        },
        challenges: {
          enUS: "Challenges",
          ptBR: "Desafios",
          esES: "Desafios",
        },
      },
    },
    // {
    //   aboutItem: false,
    //   icon: icons.trip,
    //   title: {
    //     enUS: "What kind of trip?",
    //     ptBR: "O que vamos fazer?",
    //     esES: "Qué buscamos?",
    //   },
    //   path: "/trips",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.insurance,
    //   title: {
    //     enUS: "Be safe!",
    //     ptBR: "Segurança é tudo!",
    //     esES: "Estea seguro!",
    //   },
    //   path: "/insurance",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.applications,
    //   title: {
    //     enUS: "Your applications",
    //     ptBR: "Suas aplicações",
    //     esES: "Tus aplicaciones",
    //   },
    //   path: "/applications",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.support,
    //   title: {
    //     enUS: "Support",
    //     ptBR: "Suporte",
    //     esES: "Soporte",
    //   },
    //   path: "/support",
    // },
    {
      aboutItem: true,
      icon: icons.project,
      title: {
        enUS: "THIS PROJECT",
        ptBR: "ESTE PROJETO",
        esES: "ESTE PROYECTO",
      },
      path: "/project",
      infoContainer: {
        technologies: {
          code: [],
          design: [],
          others: [],
        },
        challenges: {
          enUS: "",
          ptBR: "",
          esES: "",
        },
      },
    },
    // {
    //   aboutItem: true,
    //   icon: icons.developer,
    //   title: {
    //     enUS: "THE DEVELOPER",
    //     ptBR: "O DESENVOLVEDOR",
    //     esES: "EL DESAROLLADOR",
    //   },
    //   path: "/developer",
    // },
  ],
};

export const components = {
  detailCard: {
    enUS: {
      titles: {
        mainCities: "Main Cities",
        currency: "Currency",
        visas: "Visas",
      },
    },
    ptBR: {
      titles: {
        mainCities: "Principais Cidades",
        currency: "Moeda",
        visas: "Vistos",
      },
    },
    esES: {
      titles: {
        mainCities: "Princ. Ciudades",
        currency: "Moneda",
        visas: "Visas",
      },
    },
  },

  homeCards: [
    {
      title: {
        enUS: { title: "Countries" },
        ptBR: { title: "Países" },
        esES: { title: "Países" },
      },
      color: "australia",
      path: "/countries",
    },
    // {
    //   language: {
    //     enUS: { title: "This project" },
    //     ptBR: { title: "Este projeto" },
    //     esES: { title: "Este proyecto" },
    //   },
    //   color: "south-africa",
    //   path: "/project",
    // },
  ],

  homeList: {
    latestFeatures: [
      {
        path: "/countries",
        enUS: {
          title: "Countries",
          briefDescription: "Look for destinations for your trip",
          date: "May/2023",
          type: "New page",
        },
        ptBR: {
          title: "Destinos",
          briefDescription: "Procure por destinos para sua viagem",
          date: "Maio/2023",
          type: "Nova página",
        },
        esES: {
          title: "Destinos",
          briefDescription: "Busca destinos para tu viaje",
          date: "Mayo/2023",
          type: "Nueva página",
        },
      },
      {
        path: "/",
        enUS: {
          title: "Menu",
          briefDescription: "Menu component",
          date: "May/2023",
          type: "Component, Design",
        },
        ptBR: {
          title: "Menu",
          briefDescription: "Componente de menu",
          date: "Maio/2023",
          type: "Componente, Design",
        },
        esES: {
          title: "Menu",
          briefDescription: "Componente de menu",
          date: "Mayo/2023",
          type: "Componente, Design",
        },
      },
      {
        path: "/",
        enUS: {
          title: "Home Page",
          briefDescription: "Home Page",
          date: "May/2023",
          type: "New page",
        },
        ptBR: {
          title: "Página inicial",
          briefDescription: "Página inicial",
          date: "Maio/2023",
          type: "Nova página",
        },
        esES: {
          title: "Página inicial",
          briefDescription: "Página inicial",
          date: "Mayo/2023",
          type: "Nueva página",
        },
      },
    ],

    nextFeatures: [
      // {
      //   enUS: {
      //     title: "Responsiveness",
      //     briefDescription: "Layout adaptation for different devices",
      //     date: "June/2023",
      //     type: "Design",
      //   },
      //   ptBR: {
      //     title: "Responsividade",
      //     briefDescription: "Adaptação do design a diferentes dispositivos",
      //     date: "Junho/2023",
      //     type: "Design",
      //   },
      //   esES: {
      //     title: "Responsividad",
      //     briefDescription: "Adaptación del design a diferentes dispositivos",
      //     date: "Junio",
      //     type: "Design",
      //   },
      // },
      {
        enUS: {
          title: "Info Container",
          briefDescription: "Explanatory section for each page",
          date: "June/2023",
          type: "Component, Design",
        },
        ptBR: {
          title: "Info Container",
          briefDescription: "Seção explicativa para cada página",
          date: "Junho/2023",
          type: "Component, Design",
        },
        esES: {
          title: "Info Container",
          briefDescription: "Sección explicativa para cada página",
          date: "Junio",
          type: "Component, Design",
        },
      },
      {
        enUS: {
          title: '"This Project" Page',
          briefDescription: "This Project Page",
          date: "June/2023",
          type: "Design",
        },
        ptBR: {
          title: 'Página "Este Projeto"',
          briefDescription: 'Página "Este Projeto"',
          date: "Junho/2023",
          type: "Design",
        },
        esES: {
          title: 'Página "Este Projeto"',
          briefDescription: 'Página "Este Proyecto"',
          date: "Junio",
          type: "Design",
        },
      },
    ],
  },

  homeText: {
    enUS: {
      headerTitle: "Welcome to Travel Up!",
      whereTo: "What would you like to do?",
      latestFeatures: "Latest features",
      nextFeatures: "Coming next",
    },
    ptBR: {
      headerTitle: "Bem-vindo ao Travel Up!",
      whereTo: "O que gostaria de fazer?",
      latestFeatures: "Últimas funcionalidades",
      nextFeatures: "Em breve",
    },
    esES: {
      headerTitle: "Bienvenido a Travel Up!",
      whereTo: "¿Qué te gustaría hacer?",
      latestFeatures: "Últimas funcionalidades",
      nextFeatures: "En breve",
    },
  },
  countryDetailsInfoContainer: {
    title: {
      enUS: "Country Details",
      ptBR: "Detalhes dos países",
      esES: "Detalles de los Países",
    },
    technologies: {
      code: [],
      design: [],
      others: [],
    },
    challenges: {
      enUS: "challenges",
      ptBR: "challenges",
      esES: "challenges",
    },
  },
};

export const countries = [
  {
    title: "australia",
    currency: ["AUD", "A$"],
    cost: "expensive",
    countryLanguages: [icons.english],
    flag: countryFlags.australia,
    picture: countryPics.picaustralia,
    textContent: {
      enUS: {
        countryName: "Australia",
        languages: ["English"],
        mainCities: ["Sidney", "Melbourne", "Perth"],
      },
      ptBR: {
        countryName: "Austrália",
        languages: ["Inglês"],
        mainCities: ["Sidney", "Melbourne", "Perth"],
      },
      esES: {
        countryName: "Australia",
        languages: ["Inglés"],
        mainCities: ["Sidney", "Melbourne", "Perth"],
      },
    },
    visas: [
      "ST01 - Student Visa",
      "WT09 - Work & Travel",
      "TOUR-23 - Tourist Visa",
    ],
  },
  {
    title: "canada",
    currency: ["CAD", "C$"],
    cost: "regular",
    countryLanguages: [icons.english, icons.french],
    flag: countryFlags.canada,
    picture: countryPics.piccanada,
    textContent: {
      enUS: {
        countryName: "Canada",
        languages: ["English", "French"],
        mainCities: ["Toronto", "Vancouver", "Montréal"],
      },
      ptBR: {
        countryName: "Canadá",
        languages: ["Inglês", "Francês"],
        mainCities: ["Toronto", "Vancouver", "Montréal"],
      },
      esES: {
        countryName: "Canadá",
        languages: ["Inglés", "Francés"],
        mainCities: ["Toronto", "Vancouver", "Montréal"],
      },
    },
    visas: [
      "ST01 - Student Visa",
      "WT09 - Work & Travel",
      "TOUR-23 - Tourist Visa",
    ],
  },
  {
    title: "ireland",
    currency: ["EUR", "\u20AC"],
    cost: "regular",
    countryLanguages: [icons.english],
    flag: countryFlags.ireland,
    picture: countryPics.picireland,
    textContent: {
      enUS: {
        countryName: "Ireland",
        languages: ["English"],
        mainCities: ["Cork", "Dublin", "Limerick"],
      },
      ptBR: {
        countryName: "Irlanda",
        languages: ["Inglês"],
        mainCities: ["Cork", "Dublin", "Limerick"],
      },
      esES: {
        countryName: "Irlanda",
        languages: ["Inglés"],
        mainCities: ["Cork", "Dublin", "Limerick"],
      },
    },
    visas: [
      "ST01 - Student Visa",
      "WT09 - Work & Travel",
      "TOUR-23 - Tourist Visa",
    ],
  },
  {
    title: "south-africa",
    currency: ["ZAR", "R"],
    cost: "low-cost",
    countryLanguages: [icons.english],
    flag: countryFlags.southafrica,
    picture: countryPics.picsouthafrica,
    textContent: {
      enUS: {
        countryName: "South Africa",
        languages: ["English"],
        mainCities: ["Johannesburg", "Cape Town", "Durban"],
      },
      ptBR: {
        countryName: "África do Sul",
        languages: ["Inglês"],
        mainCities: ["Johannesburg", "Cape Town", "Durban"],
      },
      esES: {
        countryName: "Sudáfrica",
        languages: ["Inglés"],
        mainCities: ["Johannesburg", "Cape Town", "Durban"],
      },
    },
    visas: [
      "ST01 - Student Visa",
      "WT09 - Work & Travel",
      "TOUR-23 - Tourist Visa",
    ],
  },
  {
    title: "usa",
    currency: ["USD", "US$"],
    cost: "regular",
    countryLanguages: [icons.english],
    flag: countryFlags.usa,
    picture: countryPics.picusa,
    textContent: {
      enUS: {
        countryName: "USA",
        languages: ["English"],
        mainCities: ["Washington D.C.", "NYC", "San Francisco"],
      },
      ptBR: {
        countryName: "EUA",
        languages: ["Inglês"],
        mainCities: ["Washington D.C.", "NYC", "San Francisco"],
      },
      esES: {
        countryName: "EEUU",
        languages: ["Inglés"],
        mainCities: ["Washington D.C.", "NYC", "San Francisco"],
      },
    },
    visas: [
      "ST01 - Student Visa",
      "WT09 - Work & Travel",
      "TOUR-23 - Tourist Visa",
    ],
  },
];
