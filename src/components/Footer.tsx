import './style/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-dock" aria-label="Pied de page">
      <div className="footer-glass">
        <p className="footer-label">Portfolio</p>
        <p className="footer-copy">
          Copyright © {currentYear} Nathan Jouannon. Tous droits réservés.
        </p>
        <a className="footer-cta" href="#top" aria-label="Revenir en haut">
          Back to top
        </a>
      </div>
    </footer>
  )
}
