export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Doxi',
  description:
    'Doxi révolutionne la gestion médicale : simplifiez vos consultations, améliorez la prise en charge des patients et optimisez votre pratique grâce à une plateforme innovante et sécurisée.',
  url: 'https://www.doxi.ma',
  mainNav: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Features',
      href: '/'
    }
  ],
  links: {
    home: '/',
    signup: '/signup',
    signin: '/signin',
    dashboard: '/profile',
    download: '/download'
  }
}

export const siteSolvionConfig = {
  name: 'Solvion',
  description: 'Welcome to Solvion',
  mainNav: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Features',
      href: '/'
    }
  ]
}

export const infoTabs = [
  {
    title: 'Auth',
    code: 'auth',
    info: [
      {
        id: '1',
        title: 'Doxi medecin',
        info: "Une application destiné au medecin pour l'accompagner durant ses consultations",
        description:
          'Create, resume and retry file uploads to the cloud with ease Create, resume and retry file uploads to the cloud with ease'
      },
      {
        id: '2',
        title: 'Doxi assistante',
        info: "Une application destiné a l'assitante pour lui facilité ses taches journalieres",
        description:
          'This is some placeholder content the Profile tab´s associated content.Clicking another tab will toggle the visibility of this one for the next.The tab JavaScript swaps classNamees to control the content visibility and styling.This is some placeholder content the Profile tab´s associated content.Clicking another tab will toggle the visibility of this one for the next.The tab JavaScript swaps classNamees to control the content visibility and styling.'
      }
    ]
  }
]
