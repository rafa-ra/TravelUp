import { icons } from "../assets/icons/Menu";

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
  { country: "country" },
  { country: "country" },
  { country: "country" },
  { country: "country" },
  { country: "country" },
];

export const shortStringOptions = [
  "Mouse",
  "Keyboard",
  "Monitor",
  "Laptop",
  "Desktop",
];

export const accordionOptions = [
  { title: 0, description: "description 0" },
  { title: 1, description: "description 1" },
  { title: 2, description: "description 2" },
];
