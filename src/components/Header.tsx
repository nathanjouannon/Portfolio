import avatar from '../assets/avatar.jpeg'
import { Link } from 'react-router-dom'
import './style/header.css'

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-container">
        <p className="header-title">Nathan Jouannon</p>

        <nav className="header-nav" aria-label="Navigation principale">
          <ul className="header-nav-list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/competences">Competences</Link>
            </li>
            <li>
              <Link to="/projets">Projets</Link>
            </li>
            <li>
              <Link to="/parcours">Parcours</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {avatar && <img className="header-avatar" src={avatar} alt="Avatar de Nathan Jouannon" />}
      </div>
    </section>
  )
}
