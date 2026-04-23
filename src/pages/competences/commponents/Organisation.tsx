import '../style/competenceItem.css'

export default function Organisation() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Organisation</h1>
      <section className="competence-sub-item">
        <h2>Ma définition</h2>
        <p>
          Être organisé signifie avoir la capacité de planifier, de structurer et de gérer
          efficacement ses ressources et ses priorités.
          <br />
          <br />
          De mon point de vue, un expert en ingénierie du logiciel organisé est quelqu’un qui est
          capable de gérer un grand nombre de tâches en parallèle avec une hiérarchisation des
          priorités. C’est également quelqu’un qui est capable de prendre des notes efficacement
          dans le but de s’enlever de la charge mentale, sans pour autant perdre l’information. De
          plus, c’est aussi quelqu’un qui est prévoyant. Il connaît, ou est capable de consulter
          rapidement son emploi du temps dans le but de ne pas rater ou oublier des rendez-vous.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mes éléments de preuve</h2>
        <p>
          J’ai appris à être organisé quand j’ai commencé à avoir un double projet sport de haut
          niveau et études. Je mets à profit cette organisation dans tous les projets que je
          réalise. Notamment lors de mon alternance dans l’entreprise hbond.
          <br />
          <br />
          Tout d’abord dans le projet de création, maintien et évolution de la page web admin de
          l’entreprise hbond. Cette page a pour but de permettre la gestion des différentes
          fonctionnalités telles que la gestion des planifications et l'envoi des communications à
          l’aide d’un outil réalisé en interne. Ou la visualisation de statistiques diverses, la
          visualisation des tâches backend planifiées avec hangfire ou encore la gestion des
          discounts. Pour ce projet particulièrement (mais aussi pour tous les projets d’hbond),
          nous avons utilisé Linear afin de permettre une bonne organisation du travail. J’ai été
          nommé comme leader de ce projet, ainsi, j’ai réalisé les tâches d’organisation du travail
          entre mes collaborateurs, avec par exemple la création et la gestion des “issues” (unité
          de travail correspondant à une tâche à réaliser).
          <br />
          <br />
          Au sein de l’entreprise, mon organisation est aussi mise à profit en dehors des projets
          spécifiques. Je suis chargé de la prise de notes sur nos réunions hebdomadaires pour le
          suivi de l’avancement des tâches. J’ai organisé ces comptes rendus sous forme d’un
          calendrier dans notre espace sur l’outil Notion dans le but de pouvoir consulter
          rapidement les notes des réunions passées. Toujours sur cet outil Notion, j’ai organisé
          les différentes pages et sous-pages pour pouvoir rapidement retrouver les informations que
          l’on cherche comme par exemple les documentations techniques de certaines fonctionnalités
          possibles via API mais qui ne disposent pas d’interface visuelle.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mon autocritique</h2>
        <p>
          Comme dit précédemment, j’ai appris à être organisé avec le début de mon double projet :
          sport semi-professionnel et études supérieures. La gestion des emplois du temps où doivent
          cohabiter les séances d’entraînement avec les heures de cours et les heures de travail ne
          laisse pas d'autre choix que d’avoir une bonne organisation.
          <br />
          J’ai développé des techniques pour me permettre d’être organisé et de maintenir mon niveau
          d’organisation dans le temps. J’ai par exemple pris l’habitude de noter les tâches que je
          dois faire sous forme de check-list. Je pense qu’il s’agit d’une bonne pratique.
          Néanmoins, avec cette habitude, si l’on oublie de noter une tâche, alors on oublie
          complètement de la réaliser. Un travail mental pour mieux retenir les différentes tâches
          sans pour autant les noter peut être quelque chose à faire.
        </p>
      </section>
      <section className="competence-sub-item">
        <h2>Mon évolution dans cette compétence</h2>
        <p>
          J’ai depuis toujours eu une tendance à être bien organisé, quel que soit le domaine.
          Néanmoins, l’organisation a pris une autre dimension dans le cadre de la gestion de projet
          depuis que j’utilise Linear.
          <br />
          J’ai pris l’habitude de m’organiser une fois en début de semaine pour le reste de la
          semaine. Une évolution pourrait être d’ajouter à cela une vérification du calendrier et
          des tâches tous les matins afin d’être sûr de rester à jour.
        </p>
      </section>
    </article>
  )
}
