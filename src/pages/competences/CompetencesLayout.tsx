import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './style/competenceLayout.css'

type CompetenceItem = {
  to: string
  label: string
  icon: ReactNode
}

type CompetenceGroup = {
  id: string
  title: string
  items: CompetenceItem[]
}

const competenceGroups: CompetenceGroup[] = [
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
            <path d="M4 6h16v9H9l-5 4V6z" />
            <path d="M8 10h8M8 13h5" />
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
            <path d="M6 8a4 4 0 0 1 8 0v1a4 4 0 1 1 0 8H9" />
            <path d="M9 7l-3 3 3 3" />
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
            <path d="M11 8h2v7M11 15h2" />
          </>
        ),
      },
      {
        to: '/competences/pilotage-projet-ingenierie-logicielle',
        label: "Pilotage de projet d'ingénieurie logicielle",
        icon: (
          <>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 10h8M8 14h5" />
            <circle cx="17" cy="8" r="2" />
          </>
        ),
      },
      {
        to: '/competences/gestion-relation-client-ingenierie-logicielle',
        label: 'Gestion de la relation client en ingénierie logicielle.',
        icon: (
          <>
            <circle cx="9" cy="9" r="3" />
            <circle cx="15" cy="14" r="3" />
            <path d="M11.5 10.5l1 1" />
            <path d="M6 18c.8-1.6 2.2-2.5 4-2.5M13 18c.7-.9 1.6-1.5 3-1.8" />
          </>
        ),
      },
      {
        to: '/competences/developpement-mobile-react-native',
        label: 'Développement mobile en React-native',
        icon: (
          <>
            <circle cx="9" cy="9" r="3" />
            <circle cx="15" cy="14" r="3" />
            <path d="M11.5 10.5l1 1" />
            <path d="M6 18c.8-1.6 2.2-2.5 4-2.5M13 18c.7-.9 1.6-1.5 3-1.8" />
          </>
        ),
      },
    ],
  },
]

export default function CompetencesLayout() {
  return (
    <section className="competences-page" aria-labelledby="competences-title">
      <div className="competences-shell">
        <h1 id="competences-title" className="competences-title">
          Compétence
        </h1>

        <div className="competences-grid">
          {competenceGroups.map((group) => (
            <div key={group.id} className="competence-block">
              <h2 id={group.id} className="competence-block-title">
                {group.title}
              </h2>

              <ul aria-labelledby={group.id} className="competence-list">
                {group.items.map((item) => (
                  <li key={item.to} className="competence-item">
                    <Link className="competence-link" to={item.to}>
                      <span className="competence-logo" aria-hidden="true">
                        <svg className="competence-icon" viewBox="0 0 24 24" fill="none">
                          {item.icon}
                        </svg>
                      </span>
                      <span className="competence-label">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
