import type { ReactNode } from 'react'

export type CompetenceItem = {
  to: string
  label: string
  icon: ReactNode
}

export type CompetenceGroup = {
  id: string
  title: string
  items: CompetenceItem[]
}

export const competenceGroups: CompetenceGroup[] = [
  {
    id: 'human-skills-title',
    title: 'Compétences humaines',
    items: [
      {
        to: '/competences/organisation',
        label: 'Organisation',
        icon: (
          <>
            <rect x="6" y="5" width="12" height="14" rx="2" />
            <path d="M9 3v4M15 3v4M9 11h6M9 15h6" />
          </>
        ),
      },
      {
        to: '/competences/communication',
        label: 'Communication',
        icon: (
          <>
            <path d="M4 5h16v11H9l-5 4V5z" />
            <path d="M8 9.5h8M8 13h5" />
          </>
        ),
      },
      {
        to: '/competences/autonomie',
        label: 'Autonomie',
        icon: (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="M12 8v8M8 12h8" />
          </>
        ),
      },
      {
        to: '/competences/flexibilite',
        label: 'Flexibilité',
        icon: (
          <>
            <path d="M12 20v-4c0-2-2-2.4-2-4s2-2.2 2-4V4" />
            <path d="M12 12L6.5 9.5" />
            <path d="M12 12L17.5 9.5" />
            <path d="M12 4l-1.6 2" />
            <path d="M12 4l1.6 2" />
            <path d="M6.5 9.5l2.1-.6" />
            <path d="M6.5 9.5l1.1 1.9" />
            <path d="M17.5 9.5l-2.1-.6" />
            <path d="M17.5 9.5l-1.1 1.9" />
          </>
        ),
      },
    ],
  },
  {
    id: 'technical-skills-title',
    title: 'Compétences techniques',
    items: [
      {
        to: '/competences/conception-architecture-logicielle',
        label: "Conception d'architecture logicielle",
        icon: (
          <>
            <path d="M4 10l8-6 8 6" />
            <path d="M6 9v9h12V9" />
            <path d="M9 18v-4h6v4" />
          </>
        ),
      },
      {
        to: '/competences/integration-industrialisation-deploiement-logicielle',
        label: 'Intégration, industrialisatien et déploiement de logicielle',
        icon: (
          <>
            <rect x="4" y="6" width="7" height="5" rx="1" />
            <rect x="13" y="13" width="7" height="5" rx="1" />
            <path d="M11 8h5v4" />
            <path d="M14.8 11.8L16 13l1.2-1.2" />
          </>
        ),
      },
      {
        to: '/competences/pilotage-projet-ingenierie-logicielle',
        label: "Pilotage de projet d'ingénieurie logicielle",
        icon: (
          <>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 9h5" />
            <path d="M8.2 13l1.7 1.7 3-3" />
            <path d="M15.5 14h2.5" />
          </>
        ),
      },
      {
        to: '/competences/gestion-relation-client-ingenierie-logicielle',
        label: 'Gestion de la relation client en ingénierie logicielle.',
        icon: (
          <>
            <circle cx="12" cy="8" r="3" />
            <path d="M6.5 18c.9-2.2 2.9-3.5 5.5-3.5s4.6 1.3 5.5 3.5" />
          </>
        ),
      },
      {
        to: '/competences/developpement-mobile-react-native',
        label: 'Développement mobile en React-native',
        icon: (
          <>
            <rect x="7" y="3.5" width="10" height="17" rx="2" />
            <path d="M9.5 6h5" />
            <path d="M9.5 8.5h5" />
            <circle cx="12" cy="17" r="1" />
          </>
        ),
      },
    ],
  },
]
