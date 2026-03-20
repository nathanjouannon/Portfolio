import avatar from '../assets/avatar.jpeg'
import './style/header.css'

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-container">
        <p className="header-title">Nathan Jouannon</p>

        <nav className="header-nav" aria-label="Navigation principale">
          <ul className="header-nav-list">
            <li>
              <a>Accueil</a>
            </li>
            <li>
              <a>Competences</a>
            </li>
            <li>
              <a>Projets</a>
            </li>
            <li>
              <a>Parcours</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>

        {avatar && <img className="header-avatar" src={avatar} alt="Avatar de Nathan Jouannon" />}
      </div>
    </section>
  )
}
