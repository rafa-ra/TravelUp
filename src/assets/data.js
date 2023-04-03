import { icons } from "../assets/icons/Menu";
import { countryFlags, countryPics } from "../assets/countries";

export const textContent = {
  pages: {},
  containers: {},
  components: {
    menu: {
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
    },
  },
};

export const countries = [
  {
    country: "Australia",
    flag: countryFlags.australia,
    picture: countryPics.picaustralia,
    classname: "australia",
  },
  {
    country: "Canada",
    flag: countryFlags.canada,
    picture: countryPics.piccanada,
    classname: "canada",
  },
  {
    country: "Ireland",
    flag: countryFlags.ireland,
    picture: countryPics.picireland,
    classname: "ireland",
  },
  {
    country: "South Africa",
    flag: countryFlags.southafrica,
    picture: countryPics.picsouthafrica,
    classname: "south-africa",
  },
  {
    country: "USA",
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
