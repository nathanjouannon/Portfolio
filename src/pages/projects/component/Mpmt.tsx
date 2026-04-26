export default function Mpmt() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Projet MPMT</h1>
      <section className="competence-sub-item">
        <h2>Introduction</h2>
        <p>
          Le projet MPMT (Modern Project Management Tool) est un projet d'étude réalisé dans le
          cadre de mon Master "Expert en ingénierie du logiciel" à l'ISCOD, visant l'obtention d'un
          titre RNCP de niveau 7. Il a été conduit en totale autonomie, de la conception à
          l'industrialisation, sans collaboration externe.
          <br />
          <br />
          Dans le scénario proposé par l'énoncé, j'interviens en tant que développeur full stack au
          sein d'une entreprise fictive appelée Code Solutions. À ce titre, j'ai eu la
          responsabilité de concevoir et développer l'intégralité de la solution, aussi bien côté
          frontend que backend, en respectant un cahier des charges fonctionnel et des guidelines
          techniques imposés.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les objectifs</h2>
        <p>
          Ce projet sur lequel j’ai travaillé une semaine avait pour ambition de couvrir
          l'intégralité du cycle de développement logiciel, de la conception initiale jusqu'à
          l'industrialisation. Il poursuivait à la fois des objectifs techniques et pédagogiques.
          <br />
          <br />
          Sur le plan pédagogique, il s'agissait de démontrer ma capacité à mener seul un projet
          logiciel complet, en mobilisant l'ensemble des compétences attendues dans le cadre du
          titre RNCP de niveau 7 : modélisation d'un domaine métier, développement full stack, mise
          en place de tests automatisés et industrialisation via une chaîne CI/CD.
          <br />
          <br />
          Sur le plan technique, l'objectif était de concevoir et livrer un MVP fonctionnel d'une
          plateforme de gestion de projet collaboratif destinée aux équipes de développement
          logiciel. Cette plateforme devait permettre à ses utilisateurs de planifier, suivre et
          collaborer efficacement sur leurs projets. L'application devait être conçue de manière
          robuste et évolutive, avec une architecture claire séparant frontend et backend. La
          qualité du code devait être garantie par des tests automatisés atteignant au minimum 60 %
          de couverture en instructions et en branches. Enfin, le déploiement devait être fluide et
          reproductible grâce à la conteneurisation des services et à la mise en place d'une
          pipeline d'intégration et de déploiement continus.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Contexte</h2>
        <h3>Contexte humain</h3>
        <p>
          Le scénario du projet met en scène une équipe fictive de trois personnes gravitant autour
          de ma mission. John Doe, CEO de Code Solutions, est à l'origine de la commande : c'est lui
          qui m'affecte au projet et pose le cadre général de la mission. Nicolas, en tant que
          Product Owner, joue le rôle de porte-parole du besoin fonctionnel. C'est à travers lui que
          j'ai reçu la liste des fonctionnalités attendues, formalisées sous forme de users stories.
          Mariana, tech lead, est quant à elle garante des choix techniques : elle a défini les
          guidelines que je devais respecter tout au long du développement, aussi bien en termes
          d'architecture que de qualité de code et d'outillage.
          <br />
          <br />
          Dans ce scénario, j'interviens en tant que développeur full stack, seul responsable de la
          réalisation concrète du projet. Je prends en charge l'ensemble de la solution, du backend
          au frontend, en passant par les tests et le déploiement.
          <br />
          <br />
          Dans les faits, ce projet étant un exercice académique réalisé en totale autonomie, je
          suis le seul intervenant réel. Les acteurs du scénario ont néanmoins structuré mon
          approche : les users stories de Nicolas ont orienté ma conception fonctionnelle, et les
          directives de Mariana ont guidé mes décisions techniques. Ce cadre fictif m'a permis de
          travailler dans des conditions proches d'une situation professionnelle réelle.
        </p>
        <h3>Contexte technique</h3>
        <p>
          La stack technique de ce projet m'a été imposée par Mariana dans le cadre des guidelines
          du projet. Il ne s'agissait donc pas de faire des choix technologiques, mais bien de
          maîtriser et d'appliquer un ensemble d'outils définis à l'avance.
          <br />
          <br />
          L'application repose sur une architecture classique frontend, backen et base de données.
          Côté frontend, j'ai travaillé avec Angular, un framework JavaScript maintenu par Google,
          reconnu pour sa robustesse et sa structure adaptée aux applications web complexes. Le
          backend a été développé en Java avec Spring Boot, une combinaison très répandue dans le
          monde professionnel, qui facilite notamment la mise en place d'une API REST grâce à sa
          configuration rapide et sa polyvalence. Pour la persistance des données, j'ai opté pour
          MySQL comme base de données relationnelle.
          <br />
          <br />
          Le code source a été versionné avec Git sur un dépôt GitHub, ce qui permettait de suivre
          l'évolution du projet de manière propre et traçable. Pour l'environnement de
          développement, j'ai utilisé IntelliJ IDEA, un IDE que je maîtrise et qui offre un
          excellent support pour les projets Java Spring.
          <br />
          <br />
          Un point notable concernant le frontend : aucune maquette n'avait été fournie. J'ai donc
          eu toute liberté sur les choix de design et d'interface utilisateur, ce qui constituait à
          la fois une contrainte et une opportunité créative.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les enjeux</h2>
        <p>
          Les enjeux de ce projet s'articulent autour de plusieurs dimensions étroitement liées.
          <br />
          <br />
          Le premier enjeu est fonctionnel. L'application doit répondre à un besoin concret : offrir
          aux équipes de développement logiciel un outil leur permettant de planifier, suivre et
          collaborer sur leurs projets de manière efficace. Cela implique un suivi de l'avancement
          des tâches en temps réel, ainsi que des mécanismes de notification et d'historisation.
          <br />
          <br />
          Le second enjeu est technique. Il s'agit de concevoir une architecture robuste et
          évolutive, capable de supporter l'ensemble des fonctionnalités attendues tout en
          respectant les bonnes pratiques de développement. La qualité du code doit être garantie
          par des tests automatisés, avec une couverture minimale de 60% aussi bien côté frontend
          que backend.
          <br />
          <br />
          Enfin, le troisième enjeu est industriel. Au-delà du développement de l'application, le
          projet exige une mise en production maîtrisée. Cela passe par la conteneurisation de
          l'application avec Docker et la mise en place d'une pipeline CI/CD avec GitHub Actions,
          permettant d'automatiser les phases de build, de test et de déploiement. L'objectif est de
          livrer non pas seulement une application fonctionnelle, mais un produit industrialisé,
          documenté et déployable de manière fiable et reproductible.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les risques</h2>
        <p>
          Plusieurs risques ont pu être identifiés avant le démarrage du projet. Le premier concerne
          la couverture de tests. L'énoncé impose un seuil minimal de 60% de couverture de code,
          aussi bien côté frontend que backend. Atteindre ce niveau de couverture sur l'ensemble des
          fonctionnalités représente un effort significatif, et le risque était de sous-estimer le
          temps nécessaire à la rédaction des tests au profit du développement pur.
          <br />
          <br />
          Un second risque porte sur la complexité de la gestion des rôles. Le système de
          permissions à trois niveaux (administrateur, membre, observateur) implique une logique
          métier rigoureuse. Une mauvaise modélisation en amont aurait pu engendrer des incohérences
          fonctionnelles difficiles à corriger une fois le développement avancé.
          <br />
          <br />
          Enfin, la pipeline CI/CD représentait également un point de risque. La configuration de
          GitHub Actions, couplée à la conteneurisation Docker et au push automatique sur Docker
          Hub, est une chaîne avec de nombreux points de défaillance potentiels. Une mauvaise
          configuration aurait pu bloquer l'ensemble du processus de déploiement.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Travail réalisé</h2>
        <h3>Conception</h3>
        <p>
          La phase de conception a constitué le point de départ du projet. Avant d'écrire la moindre
          ligne de code, il était nécessaire d'identifier les entités clés du domaine métier et de
          modéliser leurs relations.
          <br />
          <br />
          Cette réflexion a abouti à la réalisation d'un schéma de base de données, représentant
          l'ensemble des entités de l'application ( utilisateurs, projets, tâches, rôles, historique
          des modifications ) ainsi que les relations entre elles. Ce schéma a servi de socle à
          toute la conception technique du projet.
          <br />
          <br />
          Sur la base de ce schéma, un script SQL a ensuite été produit, avec deux objectifs : la
          création de la structure de la base de données (tables, contraintes, relations) d'une
          part, et l'insertion de données de test d'autre part, permettant de disposer d'un
          environnement fonctionnel dès le début du développement.
        </p>
        <h3>Développement</h3>
        <p>
          Le développement s'est articulé en deux grandes parties : la mise en place de l'API REST
          côté backend, et la construction de l'interface utilisateur côté frontend.
          <br />
          Pour le backend, j'ai structuré l'application selon une architecture en couches. Chaque
          fonctionnalité repose sur un contrôleur, qui expose les endpoints de l'API, une interface
          de service et son implémentation, qui portent la logique métier, ainsi qu'un repository,
          qui assure l'accès aux données via Spring Data JPA. Cette organisation couvre l'ensemble
          du périmètre fonctionnel : gestion des utilisateurs, des projets, des tâches, ainsi que la
          gestion des rôles et permissions. J'ai également mis en place une gestion des erreurs
          centralisée, afin de retourner des réponses cohérentes et exploitables côté frontend. À
          noter que la sécurisation via Spring Security n'ayant pas été demandée, les mots de passe
          ne sont pas hashés, ce qui constitue une limite importante de ce projet.
          <br />
          <br />
          Pour le frontend, j'ai initialisé le projet Angular puis configuré un router afin de gérer
          la navigation entre les différentes vues. J'ai développé une page de login ainsi que
          l'ensemble des pages fonctionnelles: dashboard, projets, tâches, membres, profil et
          paramètres. Ainsi que des panneaux coulissants permettant d'afficher le détail d'un
          élément sans quitter la vue courante.
        </p>
        <h3>Ajout de tests</h3>
        <p>
          Les tests ont été mis en place des deux côtés de l'application, avec un objectif de
          couverture minimum de 60% sur les instructions et les branches.
          <br />
          <br />
          Côté frontend, j'ai utilisé Jest pour écrire les tests unitaires et d'intégration. Les
          tests couvrent les composants et services Angular, en vérifiant le comportement des
          différentes fonctionnalités de l'interface. Jest génère également le rapport de couverture
          de code, permettant de visualiser précisément les parties du code testées.
          <br />
          <br />
          Côté backend, j'ai utilisé Spring Boot Starter Test en combinaison avec Mockito, une
          dépendance qui regroupe l'ensemble des outils nécessaires aux tests, dont JUnit et
          Mockito. Mockito permet de simuler les dépendances, comme les repositories, afin de tester
          la logique métier de manière isolée. Le rapport de couverture est généré avec JaCoCo, qui
          produit un rapport détaillé indiquant le taux de couverture par classe, méthode,
          instruction et branche.
        </p>
        <h3>Industrialisation</h3>
        <p>
          Pour industrialiser le projet, j'ai conteneurisé chaque composant de l'application via un
          Dockerfile dédié. J'ai créé un Dockerfile pour le backend Spring Boot et un second pour le
          frontend Angular. J'ai ensuite mis en place un fichier docker-compose pour orchestrer
          l'ensemble des services : le backend, le frontend, ainsi que la base de données MySQL,
          pour laquelle j'ai utilisé l'image officielle. J'ai également configuré un volume Docker
          afin de persister les données de la base entre les redémarrages des containers.
          <br />
          <br />
          Pour automatiser le déploiement, j'ai configuré un pipeline GitHub Actions qui s'exécute à
          chaque push. Ce pipeline enchaîne trois étapes : la compilation et construction du projet,
          l'exécution des tests pour valider le bon fonctionnement, et enfin si tout les tests sont
          passés, la construction et la publication automatique d'une image Docker sur Docker Hub.
        </p>
        <h3>Documentation</h3>
        <p>
          Pour la documentation du code, j'ai adopté deux approches différentes selon la partie de
          l'application. Côté frontend, j'ai annoté le code avec des commentaires explicites
          directement dans les fichiers afin de faciliter la compréhension des composants et de la
          logique métier. Côté backend, j'ai intégré Swagger à l'API Spring Boot, ce qui m'a permis
          de générer automatiquement une documentation interactive. Cette interface permet de
          visualiser l'ensemble des endpoints disponibles, les paramètres attendus, ainsi que les
          réponses retournées, sans avoir à consulter le code source directement.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Conclusion du projet</h2>
        <h3>Les résultats obtenus</h3>
        <p>
          Le projet a abouti à une application fonctionnelle répondant à l'ensemble des demandes
          formulées dans le cahier des charges. Cependant, un point me tient à cœur : la
          sécurisation de l'application. L'utilisation d'une dépendance comme Spring Security ou
          OAuth2 n'était pas demandée, mais il s'agit selon moi d'un élément essentiel qui manque à
          ce projet. Pour une mise en production sérieuse, son intégration serait indispensable.
        </p>
        <h3>Les lendemains du projet</h3>
        <p>
          Concernant les lendemains du projet, celui-ci n'a pas eu de suite. La version livrée est
          un MVP, ce qui laisse imaginer de nombreuses améliorations possibles. La sécurité
          resterait la première priorité à adresser avant toute autre évolution.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Ce que je retiens</h2>
        <p>
          Ce projet m'a apporté une expérience concrète de la création d'une application web
          complète, de zéro jusqu'à une version prête à être livrée et déployée sur un VPS par
          exemple. Avoir traversé toutes les étapes, du développement à la conteneurisation en
          passant par les tests et la documentation, m'a permis d'avoir une vision globale du cycle
          de vie d'un projet.
          <br />
          <br />
          Si je devais identifier un regret, c'est de ne pas avoir réalisé la mise en production sur
          un vrai VPS. Je pense que cette étape m'aurait apporté une expérience supplémentaire
          précieuse, notamment sur la gestion d'un environnement de production réel.
        </p>
      </section>
    </article>
  )
}
