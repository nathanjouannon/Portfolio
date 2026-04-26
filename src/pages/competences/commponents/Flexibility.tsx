import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Flexibility() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Flexibilité</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            La flexibilité est selon moi la capacité à s’adapter. Une personne flexible est une
            personne qui est capable de changer rapidement de tâches quelle que soit la situation,
            autrement dit basculer rapidement d’un contexte à un autre. Il peut s’agir de la gestion
            d’un incident tel qu’un bug important détecté en production ou d’un changement des
            priorités. Quelqu’un de flexible est quelqu’un qui peut adapter son emploi du temps pour
            gérer au mieux un projet ou des délais de livraison. Cette compétence est très
            importante dans la vie d’un expert en ingénierie du logiciel pour les raisons
            précédentes.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            Lors de mon alternance dans l’entreprise hbond, j’ai eu plusieurs situations où ma
            flexibilité a été mise à profit. Je pense notamment à deux situations : la première est
            la détection d’un bug en production, et la deuxième est un changement brutal de
            priorité.
            <br />
            <br />
            La première situation intervient dans une phase calme du développement de l’interface
            admin de l’entreprise. Nous avancions par itérations courtes et constantes. Je
            travaillais sur la réalisation d’une page permettant la visualisation de statistiques.
            Mon collaborateur, utilisateur de l’admin hbond, m’a fait part d’un problème qu’il a
            rencontré en production sur la fonctionnalité de création d’une discount temporaire.
            Dans le cas où la discount est temporaire, le formulaire change et affiche deux champs
            supplémentaires permettant de choisir une date de début et une date de fin. Cette
            fonctionnalité n’était plus disponible. Il a alors fallu immédiatement changer de tâche
            pour réparer cette fonctionnalité au plus vite car elle bloquait l’équipe marketing.
            <br />
            <br />
            La deuxième situation est lors du déploiement de l’application sur l’Europe. Nous avions
            commencé certaines réflexions sur les différentes tâches à réaliser pour rendre notre
            application disponible dans plusieurs pays européens. Mais aucune de ces tâches n’était
            commencée. L’équipe commerciale de l’entreprise étant en difficulté pour signer des
            contrats hors France, ce projet était en suspens. Après la signature de 6 contrats dans
            la même semaine, ce projet Europe est devenu la priorité numéro 1 de toute l’équipe de
            développement. Nous avons alors remanié notre emploi du temps et mis en pause nos
            développements en cours afin de livrer un MVP (Minimum Viable Product) pour le marché
            européen. Les modifications sont assez conséquentes. Il a fallu avoir une traduction
            complète de l’application (i18n) en anglais dans un premier temps, mais aussi adapter le
            backend et l’admin pour pouvoir traiter des utilisateurs européens.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            La flexibilité n’a pas toujours été mon point fort, notamment au cours de ma formation
            universitaire où j’avais beaucoup de mal avec la gestion des priorités. J’avais et j’ai
            toujours tendance à avoir du mal à modifier mon emploi du temps pour m’adapter à un
            changement.
            <br />
            <br />
            J’ai également du mal au moment de passer d’un sujet très complexe à un autre. Mon plus
            gros frein est le temps que je mets à rentrer dans le sujet. En effet, il me faut un
            temps trop grand pour réussir à me concentrer sur un sujet spécifique, d’autant plus
            s’il est complexe. Je compte environ 15 minutes. Je pense que ce temps devrait être
            réduit à moins de 5 minutes.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            L’objectif d’évolution est de continuer à progresser sur la rapidité de passage d’un
            sujet à l’autre, d’autant plus sur les tâches avec une grande complexité. L’idée est de
            mettre moins de temps pour rentrer dans le sujet. Je pense discuter avec mes pairs, mes
            collaborateurs et les seniors qui m’entourent pour trouver des pistes de travail sur ce
            sujet et essayer de les mettre en place.
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
