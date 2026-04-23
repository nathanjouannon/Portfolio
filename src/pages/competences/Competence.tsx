import { useParams } from 'react-router-dom'
import Organisation from './commponents/Organisation'

export default function Competence() {
  // récupère la copétence à afficher à partir de l'url
  const { competence } = useParams<string>()

  const renderCompetenceContent = () => {
    switch (competence) {
      case 'organisation':
        return <Organisation />
      // Ajouter d'autres cas pour les autres compétences
      default:
        return <p>Compétence "{competence}" non trouvée.</p>
    }
  }

  return <div className="competence-container">{renderCompetenceContent()}</div>
}
