import type { ReactNode } from 'react'

export type CompetenceItem = {
  to: string
  label: string
  icon: ReactNode
  note: number // niveau de maîtrise, de 1 à 10
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
        note: 9,
        icon: (
          <>
            <rect x="5" y="4" width="14" height="16" rx="2" />
            <path d="M8 9l1.3 1.3L12 7.8" />
            <path d="M14 9h3" />
            <path d="M8 15l1.3 1.3L12 13.8" />
            <path d="M14 15h3" />
          </>
        ),
      },
      {
        to: '/competences/communication',
        label: 'Communication',
        note: 9,
        icon: (
          <>
            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6z" />
            <circle cx="9" cy="10" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="15" cy="10" r="0.75" fill="currentColor" stroke="none" />
          </>
        ),
      },
      {
        to: '/competences/autonomie',
        label: 'Autonomie',
        note: 10,
        icon: (
          <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M15.2 8.8l-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1z" />
            <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
          </>
        ),
      },
      {
        to: '/competences/flexibilite',
        label: 'Flexibilité',
        note: 8,
        icon: (
          <>
            <path d="M6.5 15c-2 0-3-1.6-3-3.2s1-3.2 3-3.2c2.6 0 3.9 2.2 5.5 3.9 1.6 1.7 2.9 2.5 5 2.5 2 0 3-1.6 3-3.2s-1-3.2-3-3.2c-2.6 0-3.9 2.2-5.5 3.9C9.9 14.3 8.6 15 6.5 15z" />
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
        note: 8,
        icon: (
          <>
            <path d="M4 20L11 4h2l7 16" />
            <path d="M8 14h8" />
            <path d="M6 20h12" />
            <circle cx="12" cy="4" r="1.3" />
          </>
        ),
      },
      {
        to: '/competences/integration-industrialisation-deploiement-logicielle',
        label: 'Intégration, industrialisatien et déploiement de logicielle',
        note: 10,
        icon: (
          <>
            <path d="M12 3c2.4 2 3.8 5 3.8 8.3 0 2-0.6 3.8-1.6 5.2L12 19l-2.2-2.5C8.8 15.1 8.2 13.3 8.2 11.3 8.2 8 9.6 5 12 3z" />
            <circle cx="12" cy="10" r="1.4" />
            <path d="M9 16.5l-1.8 3.8 3.3-1.6M15 16.5l1.8 3.8-3.3-1.6" />
          </>
        ),
      },
      {
        to: '/competences/pilotage-projet-ingenierie-logicielle',
        label: "Pilotage de projet d'ingénieurie logicielle",
        note: 6,
        icon: (
          <>
            <circle cx="12" cy="13" r="7.5" />
            <path d="M12 13l3.2-3.8" />
            <path d="M12 6v1M6.6 8.6l0.9 0.7M17.4 8.6l-0.9 0.7" />
            <circle cx="12" cy="13" r="0.7" fill="currentColor" stroke="none" />
          </>
        ),
      },
      {
        to: '/competences/gestion-relation-client-ingenierie-logicielle',
        label: 'Gestion de la relation client en ingénierie logicielle.',
        note: 7,
        icon: (
          <>
            <circle cx="9" cy="8" r="2.6" />
            <circle cx="16.5" cy="9.5" r="2" />
            <path d="M4 19c0.5-3.2 2.4-4.9 5-4.9s4.4 1.6 5 4.7" />
            <path d="M14.3 19c0.4-2.3 1.7-3.7 3.4-3.7 1.6 0 2.8 1.2 3.3 3.1" />
          </>
        ),
      },
      {
        to: '/competences/developpement-mobile-react-native',
        label: 'Développement mobile en React-native',
        note: 9,
        icon: (
          <>
            <rect x="7.5" y="3" width="9" height="18" rx="2" />
            <path d="M10 9l-1.8 1.8L10 12.6" />
            <path d="M14 9l1.8 1.8L14 12.6" />
            <circle cx="12" cy="17.5" r="0.7" fill="currentColor" stroke="none" />
          </>
        ),
      },
    ],
  },
]
