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
      icon: icons.country,
      language: {
        enUS: "Where r we going?",
        ptBR: "Para onde vamos?",
        esES: "Adónde nos vamos?",
      },
      path: "/countries",
    },
    // {
    //   aboutItem: false,
    //   icon: icons.trip,
    //   language: {
    //     enUS: "What kind of trip?",
    //     ptBR: "O que vamos fazer?",
    //     esES: "Qué buscamos?",
    //   },
    //   path: "/trips",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.insurance,
    //   language: {
    //     enUS: "Be safe!",
    //     ptBR: "Segurança é tudo!",
    //     esES: "Estea seguro!",
    //   },
    //   path: "/insurance",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.applications,
    //   language: {
    //     enUS: "Your applications",
    //     ptBR: "Suas aplicações",
    //     esES: "Tus aplicaciones",
    //   },
    //   path: "/applications",
    // },
    // {
    //   aboutItem: false,
    //   icon: icons.support,
    //   language: {
    //     enUS: "Support",
    //     ptBR: "Suporte",
    //     esES: "Soporte",
    //   },
    //   path: "/support",
    // },
    // {
    //   aboutItem: true,
    //   icon: icons.project,
    //   language: {
    //     enUS: "THIS PROJECT",
    //     ptBR: "ESTE PROJETO",
    //     esES: "ESTE PROYECTO",
    //   },
    //   path: "/project",
    // },
    // {
    //   aboutItem: true,
    //   icon: icons.developer,
    //   language: {
    //     enUS: "THE DEVELOPER",
    //     ptBR: "O DESENVOLVEDOR",
    //     esES: "EL DESAROLLADOR",
    //   },
    //   path: "/developer",
    // },
  ],
};

export const countries = [
  {
    classname: "australia",
    currency: "AUD",
    country: { enUS: "Australia", ptBR: "Austrália", esES: "Australia" },
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
    visas: ["one", "two", "three"],
  },
  {
    classname: "canada",
    country: { enUS: "Canada", ptBR: "Canadá", esES: "Canadá" },
    flag: countryFlags.canada,
    picture: countryPics.piccanada,
  },
  {
    classname: "ireland",
    country: { enUS: "Ireland", ptBR: "Irlanda", esES: "Irlanda" },
    flag: countryFlags.ireland,
    picture: countryPics.picireland,
  },
  {
    classname: "south-africa",
    country: { enUS: "South Africa", ptBR: "África do Sul", esES: "Sudáfrica" },
    flag: countryFlags.southafrica,
    picture: countryPics.picsouthafrica,
  },
  {
    classname: "usa",
    country: { enUS: "USA", ptBR: "EUA", esES: "EEUU" },
    flag: countryFlags.usa,
    picture: countryPics.picusa,
  },
];

export const accordionOptions = [
  { title: 0, description: "description 0" },
  { title: 1, description: "description 1" },
  { title: 2, description: "description 2" },
];
