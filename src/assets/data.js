import { icons } from "../assets/icons/Menu";
import { countryFlags, countryPics } from "../assets/countries";

export const menuContent = {
  title: {
    language: {
      usEN: "ABOUT",
      ptBR: "SOBRE",
      esES: "SOBRE",
    },
  },

  items: [
    {
      aboutItem: false,
      icon: icons.country,
      language: {
        usEN: "Where r we going?",
        ptBR: "Para onde vamos?",
        esES: "Adónde nos vamos?",
      },
      path: "/countries",
    },
    {
      aboutItem: false,
      icon: icons.trip,
      language: {
        usEN: "What kind of trip?",
        ptBR: "O que vamos fazer?",
        esES: "Qué buscamos?",
      },
      path: "/trips",
    },
    {
      aboutItem: false,
      icon: icons.insurance,
      language: {
        usEN: "Be safe!",
        ptBR: "Segurança é tudo!",
        esES: "Estea seguro!",
      },
      path: "/insurance",
    },
    {
      aboutItem: false,
      icon: icons.applications,
      language: {
        usEN: "Your applications",
        ptBR: "Suas aplicações",
        esES: "Tus aplicaciones",
      },
      path: "/applications",
    },
    {
      aboutItem: false,
      icon: icons.support,
      language: {
        usEN: "Support",
        ptBR: "Suporte",
        esES: "Soporte",
      },
      path: "/support",
    },
    {
      aboutItem: true,
      icon: icons.project,
      language: {
        usEN: "THIS PROJECT",
        ptBR: "ESTE PROJETO",
        esES: "ESTE PROYECTO",
      },
      path: "/project",
    },
    {
      aboutItem: true,
      icon: icons.developer,
      language: {
        usEN: "THE DEVELOPER",
        ptBR: "O DESENVOLVEDOR",
        esES: "EL DESAROLLADOR",
      },
      path: "/developer",
    },
  ],
};

export const countries = [
  {
    classname: "australia",
    currency: "AUD",
    country: { usEN: "Australia", ptBR: "Austrália", esES: "Australia" },
    flag: countryFlags.australia,
    picture: countryPics.picaustralia,
    textContent: {
      usEn: {
        countryName: "Australia",
        languages: ["English"],
        mainCities: ["Sidney", "Melbourne", "Perth"],
      },
      ptBR: {},
      esES: {},
    },
  },
  {
    classname: "canada",
    country: { usEN: "Canada", ptBR: "Canadá", esES: "Canadá" },
    flag: countryFlags.canada,
    picture: countryPics.piccanada,
  },
  {
    classname: "ireland",
    country: { usEN: "Ireland", ptBR: "Irlanda", esES: "Irlanda" },
    flag: countryFlags.ireland,
    picture: countryPics.picireland,
  },
  {
    classname: "south-africa",
    country: { usEN: "South Africa", ptBR: "África do Sul", esES: "Sudáfrica" },
    flag: countryFlags.southafrica,
    picture: countryPics.picsouthafrica,
  },
  {
    classname: "usa",
    country: { usEN: "USA", ptBR: "EUA", esES: "EEUU" },
    flag: countryFlags.usa,
    picture: countryPics.picusa,
  },
];

export const accordionOptions = [
  { title: 0, description: "description 0" },
  { title: 1, description: "description 1" },
  { title: 2, description: "description 2" },
];
