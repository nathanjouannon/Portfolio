import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Communication() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Communication</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            La communication est la capacité à transmettre un <strong>message</strong> ou une{' '}
            <strong>information</strong> de manière <strong>claire</strong> et dans son{' '}
            <strong>intégralité</strong>. Elle doit être <strong>pertinente</strong> et{' '}
            <strong>adaptée en fonction du destinataire</strong>.
            <br />
            <br />
            L’art de la communication a une <strong>importance primordiale</strong> dans le monde du
            travail en informatique, mais pas seulement. Dans les entreprises tech, il est très
            fréquent d’avoir des collaborateurs qui sont à plein temps en{' '}
            <strong>télétravail</strong>. Dans ces situations, toutes les{' '}
            <strong>formes de communication</strong> sont importantes pour pouvoir{' '}
            <strong>collaborer efficacement</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            Lors de mon <strong>alternance avec l’entreprise hbond</strong>, j’ai pu mettre en œuvre
            mes compétences de communication. En effet, l’entreprise a dans ses valeurs et méthodes
            de <strong>communiquer intensément</strong>, que ce soit sous forme de{' '}
            <strong>messages</strong> ou de <strong>documentation du travail</strong>. Ce choix
            s’explique en partie par la présence de collaborateurs en télétravail à temps plein, et
            d’autre part par la volonté de <strong>garder une trace du travail</strong> et des
            réflexions réalisées. Ainsi, une personne nouvelle dans l’équipe peut lire les
            différents documents et mieux comprendre les sujets en cours. Pour cela, nous utilisons
            trois outils : <strong>Slack, Notion et Linear</strong>. Slack fait office de{' '}
            <strong>messagerie professionnelle</strong>, Notion permet de stocker les documentations
            et Linear sert à <strong>consigner les réflexions</strong> ainsi que l’
            <strong>avancement des projets</strong>.
            <br />
            <br />
            J’ai également mis en pratique ma communication lors de notre « point tech »
            <strong>hebdomadaire</strong>. Cette réunion a pour objectif de communiquer au reste de
            l’équipe nos <strong>avancées</strong>, mais aussi nos{' '}
            <strong>points de blocage</strong> ou encore les questions que l’on pourrait avoir.
            L’ensemble des développeurs est présent, ainsi que le CEO et l’UX/UI designer. La
            diversité des profils fait que la communication doit être{' '}
            <strong>adaptée en fonction de l’interlocuteur et de son niveau technique</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            Je pense être à l’aise pour communiquer. Je n’ai pas de difficulté avec les
            présentations orales. Les <strong>communications écrites</strong> ne me bloquent pas non
            plus et je m’attache même à contrôler les détails de ce type de communication. En effet,
            le <strong>ton de la voix</strong> n’étant pas présent, un message qui n’est pas bien
            formulé pourrait être <strong>mal perçu</strong> ou <strong>mal interprété</strong>.
            J’aime également rédiger des <strong>documentations techniques bien structurées</strong>
            .
            <br />
            <br />
            Néanmoins, je ne suis pas complètement à l’aise avec les présentations orales
            improvisées. J’ai besoin que ma communication soit <strong>préparée</strong>, même s’il
            ne s’agit que de quelques minutes. De plus, j’éprouve des difficultés avec l’
            <strong>orthographe</strong> dans mes communications écrites.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            La communication, quelle que soit sa forme, n’a pas été quelque chose d’inné chez moi.
            Néanmoins, j’ai appris à la <strong>structurer</strong> et à préparer mes{' '}
            <strong>interventions orales</strong>.
            <br />
            Aujourd’hui, je communique bien, même si l’aide d’un relecteur ou d’un correcteur
            d’orthographe est nécessaire pour mes communications écrites. J’ai pour objectif d’
            <strong>améliorer mon orthographe</strong> pour pouvoir{' '}
            <strong>communiquer plus rapidement à l’écrit</strong> sans avoir besoin de passer
            systématiquement par un correcteur.
          </p>
        </section>
      </article>
      <section
        className="competence-sub-item project-skills project-skills-panel"
        aria-labelledby="admin-hbond-skills"
      >
        <h2 id="admin-hbond-skills">Projets associés à la compétence</h2>

        <div className="project-skills-group" aria-labelledby="organisation-projects-links">
          <div className="project-skills-links">
            <Link className="project-skill-link project-skill-link-tech" to="/projet/admin-hbond">
              Admin hbond
            </Link>
            <Link
              className="project-skill-link project-skill-link-tech"
              to="/projet/application-hbond"
            >
              Application hbond
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
