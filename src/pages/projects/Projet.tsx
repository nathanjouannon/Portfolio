import { Link, useParams } from 'react-router-dom'
import './style/projet.css'
import AdminHbond from './component/AdminHbond'
import Mpmt from './component/Mpmt'
import ShopWise from './component/ShopWise'
import OFit from './component/OFit'

const projectLinks = [
  { slug: 'admin-hbond', label: 'Admin hbond' },
  { slug: 'mpmt', label: 'MPMT' },
  { slug: 'shopwise', label: 'ShopWise' },
  { slug: 'o-fit', label: "O'Fit" },
  { slug: 'todo', label: 'TODO' },
]

export default function Projet() {
  const { slug } = useParams<string>()
  const normalizedSlug = (slug ?? '').toLowerCase()

  const renderProjectContent = () => {
    switch (normalizedSlug) {
      case 'admin-hbond':
        return <AdminHbond />
      case 'mpmt':
        return <Mpmt />
      case 'shopwise':
        return <ShopWise />
      case 'o-fit':
        return <OFit />
      // case 'todo':
      //   return <TODO />
      default:
        return (
          <section className="projet-not-found" aria-live="polite">
            <p className="projet-not-found-kicker">Erreur 404</p>
            <p>
              Ce projet n'as pas été trouvé. Tu peux revenir a la liste ou ouvrir un projet
              existant.
            </p>
            <div className="projet-not-found-links">
              {projectLinks.map((item) => (
                <Link key={item.slug} to={`/projet/${item.slug}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        )
    }
  }

  return (
    <div className="projet-container">
      <Link className="projet-back-button" to="/projets">
        <span className="projet-back-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </span>
        <span>Retour aux projets</span>
      </Link>
      {renderProjectContent()}
    </div>
  )
}
