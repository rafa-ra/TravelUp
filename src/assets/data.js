import { icons } from "../assets/icons/Menu";
import { countryFlags, countryPics } from "../assets/countries";
export const menuContent = {
  title: {
    language: {
      enUS: "ABOUT",
      ptBR: "SOBRE",
      esES: "SOBRE",
    },
  },

  items: [
    {
      aboutItem: false,
      icon: icons.feather,
      language: {
        enUS: "Home",
        ptBR: "Página Inicial",
        esES: "Página Inicial?",
      },
      path: "/",
    },
    {
      aboutItem: false,
      icon: icons.country,
      language: {
        enUS: "Where r we going?",
        ptBR: "Para onde vamos?",
        esES: "Adónde nos vamos?",
      },
      path: "/countries",
    },
    {
      aboutItem: false,
      icon: icons.trip,
      language: {
        enUS: "What kind of trip?",
        ptBR: "O que vamos fazer?",
        esES: "Qué buscamos?",
      },
      path: "/trips",
    },
    {
      aboutItem: false,
      icon: icons.insurance,
      language: {
        enUS: "Be safe!",
        ptBR: "Segurança é tudo!",
        esES: "Estea seguro!",
      },
      path: "/insurance",
    },
    {
      aboutItem: false,
      icon: icons.applications,
      language: {
        enUS: "Your applications",
        ptBR: "Suas aplicações",
        esES: "Tus aplicaciones",
      },
      path: "/applications",
    },
    {
      aboutItem: false,
      icon: icons.support,
      language: {
        enUS: "Support",
        ptBR: "Suporte",
        esES: "Soporte",
      },
      path: "/support",
    },
    {
      aboutItem: true,
      icon: icons.project,
      language: {
        enUS: "THIS PROJECT",
        ptBR: "ESTE PROJETO",
        esES: "ESTE PROYECTO",
      },
      path: "/project",
    },
    {
      aboutItem: true,
      icon: icons.developer,
      language: {
        enUS: "THE DEVELOPER",
        ptBR: "O DESENVOLVEDOR",
        esES: "EL DESAROLLADOR",
      },
      path: "/developer",
    },
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
      language: {
        enUS: { title: "Countries" },
        ptBR: { title: "Países" },
        esES: { title: "Países" },
      },
      color: "australia",
      path: "/countries",
    },
    {
      language: {
        enUS: { title: "This project" },
        ptBR: { title: "Este projeto" },
        esES: { title: "Este proyecto" },
      },
      color: "south-africa",
      path: "/project",
    },
  ],

  homeList: {
    latestFeatures: [
      {
        enUS: {
          title: "Countries",
          briefDescription: "Look for destinations for your trip",
          date: "10/15/1991",
          type: "New page",
        },
        ptBR: {
          title: "Destinos",
          briefDescription: "Procure por destinos para sua viagem",
          date: "15/10/1991",
          type: "Nova página",
        },
        esES: {
          title: "Destinos",
          briefDescription: "Busca destinos para tu viaje",
          date: "15/10/1991",
          type: "Nueva página",
        },
      },
      {
        enUS: {
          title: "Countries",
          briefDescription: "Look for destinations for your trip",
          date: "10/15/1991",
          type: "New page",
        },
        ptBR: {
          title: "Destinos",
          briefDescription: "Procure por destinos para sua viagem",
          date: "15/10/1991",
          type: "Nova página",
        },
        esES: {
          title: "Destinos",
          briefDescription: "Busca destinos para tu viaje",
          date: "15/10/1991",
          type: "Nueva página",
        },
      },
      {
        enUS: {
          title: "Countries",
          briefDescription: "Look for destinations for your trip",
          date: "10/15/1991",
          type: "New page",
        },
        ptBR: {
          title: "Destinos",
          briefDescription: "Procure por destinos para sua viagem",
          date: "15/10/1991",
          type: "Nova página",
        },
        esES: {
          title: "Destinos",
          briefDescription: "Busca destinos para tu viaje",
          date: "15/10/1991",
          type: "Nueva página",
        },
      },
    ],

    nextFeatures: [
      {
        enUS: {
          title: "Countries",
          briefDescription: "Look for destinations for your trip",
          date: "10/15/1991",
          type: "New page",
        },
        ptBR: {
          title: "Next",
          briefDescription: "Procure por destinos para sua viagem",
          date: "15/10/1991",
          type: "Nova página",
        },
        esES: {
          title: "Destinos",
          briefDescription: "Busca destinos para tu viaje",
          date: "15/10/1991",
          type: "Nueva página",
        },
      },
    ],
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

export const accordionOptions = [
  { title: 0, description: "description 0" },
  { title: 1, description: "description 1" },
  { title: 2, description: "description 2" },
];
