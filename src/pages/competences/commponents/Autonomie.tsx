import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Autonomie() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Autonomie</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            L’autonomie signifie être en capacité de <strong>réaliser des tâches seul</strong>,
            autrement dit sans avoir besoin de <strong>supervision constante</strong>. Je pense
            qu’être <strong>proactif</strong> fait partie de cette notion d’autonomie, car il s’agit
            de <strong>prendre des décisions par soi-même</strong>.
            <br />
            <br />
            Dans le monde du travail, l’autonomie est une <strong>compétence primordiale</strong>.
            Mais attention, même si l’autonomie est une <strong>qualité indispensable</strong>, il
            ne faut pas pour autant oublier <strong>l'importance du travail en équipe</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            J’ai commencé à développer mon autonomie dans le monde de l’informatique quand j’ai
            commencé à apprendre à coder. En effet, le début de mon parcours dans ce domaine s’est
            fait en <strong>complète autonomie</strong> car j’ai réalisé mes premiers cours et
            projets à l’aide du site <strong>OpenClassrooms</strong>. J’y ai appris les bases du web
            telles que <strong>HTML</strong> et <strong>CSS</strong>, puis comment développer en{' '}
            <strong>JavaScript</strong> ; j’ai également réalisé des cours sur l’utilisation du
            terminal mais aussi sur <strong>Git</strong> et <strong>GitHub</strong>. J’ai débuté en
            <strong>React</strong> grâce aux cours d’OpenClassrooms, mais j’y ai aussi appris à
            implémenter une base de données avec <strong>SQL</strong> et comment appréhender l’
            <strong>architecture full stack</strong> avec <strong>Node</strong>,{' '}
            <strong>Express</strong> et <strong>MongoDB</strong>. Toutes ces notions ont été
            acquises sans <strong>aucune supervision</strong>.
            <br />
            <br />
            J’ai eu l’occasion d’utiliser cette compétence lors de la réalisation du projet « MPMT
            ». Il s’agit d’un projet web <strong>full stack</strong> avec une API en{' '}
            <strong>Java Spring Boot</strong> et un frontend en <strong>Angular</strong>. Le but du
            projet est de créer une interface web qui permet de gérer les tâches et les projets
            d’une entreprise. J’ai réalisé ce projet de <strong>manière autonome</strong> avec pour
            seul support un <strong>cahier des charges</strong>.
            <br />
            <br />
            J’ai également eu l’occasion d’utiliser cette compétence tout au long de mon alternance
            avec l’entreprise <strong>hbond</strong>. L’entreprise étant une{' '}
            <strong>start-up de petite taille</strong>, l’équipe ne contient pas de{' '}
            <strong>CTO ou lead dev</strong>. J’ai ainsi réalisé mes différentes tâches en
            autonomie. Cela m’a également permis d’être <strong>proactif</strong> sur mes tâches et
            leur <strong>priorisation</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            Je pense avoir une <strong>bonne autonomie</strong>. Néanmoins, j’ai remarqué avoir
            besoin d’aide pour résoudre certains{' '}
            <strong>problèmes complexes de configuration</strong> dans le code. J’ai conscience que
            l’ingénieur logiciel doit être capable de réaliser ces tâches en autonomie, c’est
            pourquoi je dois continuer à <strong>monter en compétences</strong> et{' '}
            <strong>prendre de l’expérience</strong> sur les sujets qui me bloquent.
            <br />
            <br />
            Dans une volonté d’être un maximum autonome, avant de demander conseil à un développeur
            plus senior, je n’hésite pas à utiliser <strong>
              l’intelligence artificielle
            </strong>{' '}
            dans le but qu’elle m’apprenne ou m’explique les <strong>points clés</strong> de mon
            blocage. J’utilise cet outil en étant conscient qu’il ne faut pas lui{' '}
            <strong>déléguer la réflexion</strong>, mais plutôt qu’il faut formuler des{' '}
            <strong>requêtes précises (prompt engineering)</strong> pour accompagner le
            raisonnement.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            Aujourd’hui, avec l’intelligence artificielle, je pense qu’il est très facile d’être
            autonome. Néanmoins, je souhaite continuer à <strong>monter en compétences</strong> avec
            comme objectif de <strong>prendre de l’expérience</strong> dans les domaines où je n’en
            ai pas assez. Il y a certains domaines comme la <strong>configuration</strong> ou la{' '}
            <strong>résolution de bugs</strong> où l’expérience est le{' '}
            <strong>meilleur atout</strong> pour trouver une{' '}
            <strong>solution rapide en autonomie</strong>. C’est pourquoi je souhaite acquérir cette
            expérience.
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
            <Link className="project-skill-link project-skill-link-tech" to="/projet/mpmt">
              MPMT
            </Link>
            <Link className="project-skill-link project-skill-link-tech" to="/projet/shopwise">
              ShopWise
            </Link>
            <Link className="project-skill-link project-skill-link-tech" to="/projet/o-fit">
              O&apos;Fit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
