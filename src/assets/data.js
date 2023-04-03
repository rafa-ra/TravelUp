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
    },
    {
      aboutItem: false,
      icon: icons.trip,
      language: {
        usEN: "What kind of trip?",
        ptBR: "O que vamos fazer?",
        esES: "Qué buscamos?",
      },
    },
    {
      aboutItem: false,
      icon: icons.insurance,
      language: {
        usEN: "Be safe!",
        ptBR: "Segurança é tudo!",
        esES: "Estea seguro!",
      },
    },
    {
      aboutItem: false,
      icon: icons.applications,
      language: {
        usEN: "Your applications",
        ptBR: "Suas aplicações",
        esES: "Tus aplicaciones",
      },
    },
    {
      aboutItem: false,
      icon: icons.support,
      language: {
        usEN: "Support",
        ptBR: "Suporte",
        esES: "Soporte",
      },
    },
    {
      aboutItem: true,
      icon: icons.project,
      language: {
        usEN: "THIS PROJECT",
        ptBR: "ESTE PROJETO",
        esES: "ESTE PROYECTO",
      },
    },
    {
      aboutItem: true,
      icon: icons.developer,
      language: {
        usEN: "THE DEVELOPER",
        ptBR: "O DESENVOLVEDOR",
        esES: "EL DESAROLLADOR",
      },
    },
  ],
};

export const countries = [
  {
    country: { usEN: "Australia", ptBR: "Austrália", esES: "Australia" },
    flag: countryFlags.australia,
    picture: countryPics.picaustralia,
    classname: "australia",
  },
  {
    country: { usEN: "Canada", ptBR: "Canadá", esES: "Canadá" },
    flag: countryFlags.canada,
    picture: countryPics.piccanada,
    classname: "canada",
  },
  {
    country: { usEN: "Ireland", ptBR: "Irlanda", esES: "Irlanda" },
    flag: countryFlags.ireland,
    picture: countryPics.picireland,
    classname: "ireland",
  },
  {
    country: { usEN: "South Africa", ptBR: "África do Sul", esES: "Sudáfrica" },
    flag: countryFlags.southafrica,
    picture: countryPics.picsouthafrica,
    classname: "south-africa",
  },
  {
    country: { usEN: "USA", ptBR: "EUA", esES: "EEUU" },
    flag: countryFlags.usa,
    picture: countryPics.picusa,
    classname: "usa",
  },
];

export const accordionOptions = [
  { title: 0, description: "description 0" },
  { title: 1, description: "description 1" },
  { title: 2, description: "description 2" },
];
