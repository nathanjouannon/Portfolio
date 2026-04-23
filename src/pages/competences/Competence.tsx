import { Link, useParams } from 'react-router-dom'
import Organisation from './commponents/Organisation'
import Communication from './commponents/Communication'
import './style/competenceItem.css'
import Autonomie from './commponents/Autonomie'
import Flexibility from './commponents/Flexibility'

export default function Competence() {
  const { competence } = useParams<string>()

  const competenceLinks = [
    { slug: 'organisation', label: 'Organisation' },
    { slug: 'communication', label: 'Communication' },
    { slug: 'autonomie', label: 'Autonomie' },
    { slug: 'flexibilite', label: 'Flexibilite' },
  ]

  const normalizedCompetence = (competence ?? '').toLowerCase()

  const renderCompetenceContent = () => {
    switch (normalizedCompetence) {
      case 'organisation':
        return <Organisation />
      case 'communication':
        return <Communication />
      case 'autonomie':
        return <Autonomie />
      case 'flexibilite':
        return <Flexibility />
      default:
        return (
          <section className="competence-not-found" aria-live="polite">
            <p className="competence-not-found-kicker">Erreur 404</p>
            <h1>Cette competence n&apos;as pas été détaillée</h1>
            <p>
              Nous n&apos;avons pas trouvé de page pour la compétence
              <strong> {competence || 'cette competence'} </strong>. Tu peux revenir a la liste ou
              ouvrir une competence détailée.
            </p>
            <p>
              La compétence n'est pas détaillés mais cela ne veut pas dire que je ne la possède pas
              😉.
            </p>
            <div className="competence-not-found-links">
              {competenceLinks.map((item) => (
                <Link key={item.slug} to={`/competences/${item.slug}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        )
    }
  }

  return (
    <div className="competence-container">
      <Link className="competence-back-button" to="/competences">
        <span className="competence-back-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </span>
        <span>Retour aux compétences</span>
      </Link>
      {renderCompetenceContent()}
    </div>
  )
}
