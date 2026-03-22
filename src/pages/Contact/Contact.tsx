import './contact.css'

export default function Contact() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-shell">
        <p className="contact-kicker">Restons en lien</p>
        <h1 id="contact-title" className="contact-title">
          Contact
        </h1>
        <p className="contact-intro">
          Deux canaux directs pour me joindre rapidement selon votre besoin.
        </p>

        <div className="contact-grid" role="list" aria-label="Moyens de contact">
          <article className="contact-card" role="listitem">
            <p className="contact-label">Mail</p>
            <a className="contact-link" href="mailto:nathan.jouannon@gmail.com">
              nathan.jouannon@gmail.com
            </a>
            <p className="contact-help">Pour un échange projet, mission ou collaboration.</p>
          </article>

          <article className="contact-card contact-card-offset" role="listitem">
            <p className="contact-label">LinkedIn</p>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/nathan-jouannon-90aa07216/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <p className="contact-help">
              Pour suivre mon parcours et me contacter professionnellement.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
