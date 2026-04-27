import { Link } from 'react-router-dom'
import '../style/competenceItem.css'

export default function Organisation() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Organisation</h1>
        <section className="competence-sub-item">
          <h2>Ma définition</h2>
          <p>
            Être organisé signifie avoir la capacité de <strong>planifier</strong>, de{' '}
            <strong>structurer</strong> et de <strong>gérer efficacement</strong> ses{' '}
            <strong>ressources</strong> et ses <strong>priorités</strong>.
            <br />
            <br />
            De mon point de vue, un expert en ingénierie du logiciel organisé est quelqu’un qui est
            capable de gérer un grand nombre de tâches en parallèle avec une{' '}
            <strong>hiérarchisation des priorités</strong>. C’est également quelqu’un qui est
            capable de <strong>prendre des notes efficacement</strong> dans le but de s’enlever de
            la <strong>charge mentale</strong>, sans pour autant perdre l’information. De plus,
            c’est aussi quelqu’un qui est <strong>prévoyant</strong>. Il connaît, ou est capable de
            consulter rapidement son <strong>emploi du temps</strong> dans le but de ne pas rater ou
            oublier des <strong>rendez-vous</strong>.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mes éléments de preuve</h2>
          <p>
            J’ai appris à être organisé quand j’ai commencé à avoir un{' '}
            <strong>double projet sport de haut niveau et études</strong>. Je mets à profit cette
            organisation dans tous les projets que je réalise. Notamment lors de mon{' '}
            <strong>alternance dans l’entreprise hbond</strong>.
            <br />
            <br />
            Tout d’abord dans le projet de création, maintien et évolution de la page web admin de
            l’entreprise hbond. Cette page a pour but de permettre la gestion des différentes
            fonctionnalités telles que la gestion des planifications et l'envoi des communications à
            l’aide d’un outil réalisé en interne. Ou la visualisation de statistiques diverses, la
            visualisation des tâches backend planifiées avec hangfire ou encore la gestion des{' '}
            discounts. Pour ce projet particulièrement (mais aussi pour tous les projets d’hbond),
            nous avons utilisé Linear afin de permettre une bonne organisation du travail. J’ai été
            nommé comme <strong>leader</strong> de ce projet, ainsi, j’ai réalisé les tâches d’
            <strong>organisation du travail</strong> entre mes collaborateurs, avec par exemple la
            création et la gestion des <strong>“issues”</strong> (unité de travail correspondant à
            une tâche à réaliser).
            <br />
            <br />
            Au sein de l’entreprise, mon organisation est aussi mise à profit en dehors des projets
            spécifiques. Je suis chargé de la <strong>prise de notes</strong> sur nos{' '}
            <strong>réunions hebdomadaires</strong> pour le suivi de l’avancement des tâches. J’ai
            organisé ces comptes rendus sous forme d’un <strong>calendrier</strong> dans notre
            espace sur l’outil <strong>Notion</strong> dans le but de pouvoir consulter rapidement
            les notes des réunions passées. Toujours sur cet outil Notion, j’ai organisé les
            différentes pages et sous-pages pour pouvoir rapidement retrouver les informations que
            l’on cherche comme par exemple les <strong>documentations techniques</strong> de
            certaines fonctionnalités possibles via API mais qui ne disposent pas d’interface
            visuelle.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon autocritique</h2>
          <p>
            Comme dit précédemment, j’ai appris à être organisé avec le début de mon double projet :
            <strong>sport semi-professionnel et études supérieures</strong>. La{' '}
            <strong>gestion des emplois du temps</strong> où doivent cohabiter les séances
            d’entraînement avec les heures de cours et les heures de travail ne laisse pas d'autre
            choix que d’avoir une bonne organisation.
            <br />
            J’ai développé des techniques pour me permettre d’être organisé et de maintenir mon
            niveau d’organisation dans le temps. J’ai par exemple pris l’habitude de noter les
            tâches que je dois faire sous forme de <strong>check-list</strong>. Je pense qu’il
            s’agit d’une <strong>bonne pratique</strong>. Néanmoins, avec cette habitude, si l’on
            oublie de noter une tâche, alors on oublie complètement de la réaliser. Un travail
            mental pour mieux retenir les différentes tâches sans pour autant les noter peut être
            quelque chose à faire.
          </p>
        </section>
        <section className="competence-sub-item">
          <h2>Mon évolution dans cette compétence</h2>
          <p>
            J’ai depuis toujours eu une tendance à être bien organisé, quel que soit le domaine.
            Néanmoins, l’organisation a pris une autre dimension dans le cadre de la{' '}
            <strong>gestion de projet</strong> depuis que j’utilise <strong>Linear</strong>.
            <br />
            J’ai pris l’habitude de m’organiser une fois en début de semaine pour le reste de la
            semaine. Une évolution pourrait être d’ajouter à cela une{' '}
            <strong>vérification du calendrier</strong> et des{' '}
            <strong>tâches tous les matins</strong> afin d’être sûr de rester à jour.
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
            <Link className="project-skill-link project-skill-link-tech" to="/projet/o-fit">
              O&apos;Fit
            </Link>
            <Link className="project-skill-link project-skill-link-tech" to="/projet/shopwise">
              ShopWise
            </Link>
            <Link className="project-skill-link project-skill-link-tech" to="/projet/mpmt">
              MPMT
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
