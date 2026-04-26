import { Link } from 'react-router-dom'

export default function ShopWise() {
  return (
    <>
      <article className="competence-detail" aria-labelledby="organisation-title">
        <h1 id="organisation-title">Projet ShopWise</h1>
        <section className="competence-sub-item">
          <h2>Introduction</h2>
          <p>
            Ce projet a été réalisé dans le cadre de mon Master "Expert en Ingénierie Logicielle"
            préparé à l'ISCOD, une formation RNCP de niveau 7. Il s'agit d'un projet d'étude mené en
            autonomie, au sein duquel j'ai intégré l'équipe projet en tant que chargé de conception.
            À ce titre, j'étais responsable de la réflexion architecturale ainsi que de
            l'implémentation technique de la solution. Ce projet m'a permis de mobiliser l'ensemble
            des compétences acquises au cours de ma formation, en me confrontant à des
            problématiques concrètes de conception et de développement logiciel.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les objectifs</h2>
          <p>
            ShopWise est une plateforme SaaS, accessible depuis le web et le mobile, conçue pour
            répondre à un besoin concret : la digitalisation des commerces de proximité. Épiceries,
            librairies, salons de coiffure, ces petites structures n'ont bien souvent ni les moyens
            ni les ressources pour s'équiper d'outils de gestion performants. ShopWise ambitionne de
            combler ce manque en centralisant la gestion des stocks, des ventes et des rendez-vous
            au sein d'une solution simple et abordable.
            <br />
            <br />
            La mission qui m'a été confiée s'est étalée sur deux jours de travail intensif. Dans ce
            laps de temps, les objectifs étaient à la fois larges et exigeants : concevoir une
            architecture logicielle solide, faire évoluer le périmètre fonctionnel de l'application,
            renforcer la qualité du code existant et intégrer un module de recommandation basé sur
            l'apprentissage automatique.
            <br />
            <br />
            Ces ambitions ne sont pas sans défis. L'application souffrait déjà de problèmes concrets
            : un algorithme de recommandation trop gourmand en ressources et une logique métier
            difficile à faire évoluer en raison d'une dette technique accumulée. Ces constats
            illustraient un risque réel pour la maintenabilité et les performances du produit, et
            ont orienté l'ensemble des choix techniques réalisés au cours de cette mission.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Contexte</h2>
          <h3>Contexte humain</h3>
          <p>
            Le projet ShopWise gravite autour de plusieurs profils aux attentes bien distinctes. Du
            côté client, le produit s'adresse en premier lieu aux commerçants indépendants :
            épiciers, libraires, coiffeurs, et tous ceux qui gèrent leur activité sans véritable
            outil numérique. Pour incarner cet utilisateur cible, le projet s'appuie sur le profil
            fictif d'une propriétaire d'épicerie locale, représentative de cette clientèle. Ses
            besoins sont simples et concrets : gagner du temps, simplifier la gestion quotidienne de
            son commerce et accéder à une solution digitale sans que cela lui coûte une fortune.
            <br />
            <br />
            Du côté de l'équipe projet, la solution est portée par ShopWise SaaS, la startup
            éditrice de la plateforme. C'est elle qui exprime le besoin et définit la vision
            produit. En tant que membre de cette équipe, j'étais chargé de la conception avancée et
            de l'implémentation backend, avec la responsabilité de traduire les besoins métier en
            décisions techniques cohérentes et durables.
            <br />
            <br />
            Enfin, il convient de distinguer deux types d'utilisateurs finaux. Les commerçants
            constituent le cœur de cible de l'application : ce sont eux qui gèrent les stocks,
            enregistrent les ventes et administrent leur commerce au quotidien. Les clients de ces
            commerces, quant à eux, interagissent avec la plateforme de manière plus indirecte,
            notamment à travers des fonctionnalités comme le click & collect ou les programmes de
            fidélisation.
          </p>
          <h3>Contexte technique</h3>
          <p>
            La stack technique était imposée dans le cadre du projet. Le backend devait être
            développé en Java avec le framework Spring Boot, et s'appuyer sur une base de données
            relationnelle, PostgreSQL ou MySQL. Côté outillage, le projet devait être versionné sur
            un repository GitHub public respectant une structure imposée, conteneurisé via Docker,
            et couvert par des tests unitaires et d'intégration écrits avec JUnit, Mockito et Spring
            Test. La documentation technique était attendue en Markdown, accompagnée de diagrammes
            UML.
            <br />
            <br />
            Au-delà de la stack, plusieurs contraintes structurantes ont guidé l'ensemble des choix
            de conception. Le respect du RGPD imposait une gestion sécurisée des données
            personnelles des clients des commerces. L'architecture devait être pensée pour supporter
            plusieurs commerces et plusieurs utilisateurs simultanément, dans une logique de
            scalabilité. Bien que le frontend ne soit pas dans le périmètre du projet, l'interface
            devait être conçue pour être responsive. Enfin, la modularité était une exigence
            explicite, notamment pour isoler le module de recommandations et faciliter les
            évolutions futures.
            <br />
            <br />
            Le projet ne partait pas de zéro. Une base de code existante était fournie, implémentant
            uniquement la gestion de catalogue avec des opérations CRUD sur les produits. Ma mission
            consistait à faire évoluer cette base pour y ajouter trois grandes fonctionnalités : la
            gestion des ventes, la sécurisation de l'application et le module de recommandations.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les enjeux</h2>
          <p>
            Le premier défi de ShopWise est celui de l'adoption. Les commerçants indépendants sont
            souvent méfiants vis-à-vis de la digitalisation, par manque de temps, de compétences
            techniques ou tout simplement parce que les solutions existantes leur semblent trop
            complexes ou trop coûteuses. Pour convaincre ce public, la plateforme doit avant tout
            être simple à prendre en main et accessible financièrement. La valeur perçue est clé :
            si le commerçant ne ressent pas rapidement un gain de temps ou une amélioration de son
            quotidien, il abandonnera l'outil.
            <br />
            <br />
            L'autre enjeu business est celui de la différenciation. ShopWise évolue dans un marché
            où des acteurs comme Shopify ou des logiciels métiers spécialisés sont déjà bien
            implantés. Pour s'imposer, la plateforme mise sur un module de recommandations basé sur
            l'apprentissage automatique, capable de personnaliser l'offre en fonction des habitudes
            d'achat des clients. C'est sur ce point que ShopWise entend se démarquer.
            <br />
            <br />
            Sur le plan technique, l'évolutivité est une priorité. L'architecture doit être
            suffisamment modulaire pour accueillir de nouvelles fonctionnalités à l'avenir, qu'il
            s'agisse du paiement en ligne, d'un chatbot ou d'autres services encore non définis.
            Elle doit également tenir la charge dans un contexte multi-commerces et
            multi-utilisateurs.
            <br />
            <br />
            La sécurité est un autre enjeu majeur. Les données personnelles des clients sont
            soumises au RGPD, et les opérations sensibles comme les ventes ou les modifications de
            stock doivent être protégées. Cela passe par une authentification robuste, reposant sur
            des tokens et une gestion fine des rôles utilisateurs.
            <br />
            <br />
            Enfin, la qualité logicielle conditionne la pérennité du projet. Des tests automatisés
            permettent de garantir la non-régression au fil des évolutions, tandis qu'une
            documentation claire facilite la reprise du code par d'autres développeurs, un enjeu
            concret dans une startup en croissance.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Les risques</h2>
          <p>
            L'API manipule des données sensibles : ventes, stocks, informations clients. Une faille
            de sécurité, qu'il s'agisse d'une injection SQL, de tokens JWT mal configurés ou d'une
            gestion des rôles insuffisante, pourrait exposer l'ensemble de ces données à des acteurs
            malveillants. Un scénario concret serait celui d'un token JWT sans expiration permettant
            à un ancien employé de conserver un accès au système, ou d'un attaquant exploitant une
            faille pour consulter l'historique des ventes d'un commerce
            <br />
            <br />
            L'application doit supporter plusieurs commerces et utilisateurs en parallèle. Des
            requêtes SQL mal optimisées ou une architecture trop monolithique peuvent rapidement
            devenir un goulot d'étranglement. En cas de pic de trafic, par exemple lors de périodes
            de soldes, le service pourrait devenir lent voire indisponible. Pour un commerçant qui
            enregistre des ventes en temps réel, un temps de réponse trop long est directement
            préjudiciable à son activité. La saturation de la base de données lors de traitements
            simultanés est un risque concret qui doit être anticipé dès la conception.
            <br />
            <br />
            Le module de recommandations repose sur des algorithmes qui nécessitent des données de
            qualité et une implémentation soignée. Un modèle mal conçu pourrait produire des
            suggestions inutiles, comme recommander des produits en rupture de stock ou des articles
            qui ne sont jamais achetés ensemble. Dans ce cas, les commerçants ignoreraient
            simplement la fonctionnalité, annulant tout l'intérêt du module. À cela s'ajoute un
            risque de performance. Si le calcul des recommandations génère des temps de réponse trop
            longs, il peut impacter l'ensemble de l'API et introduire une dette technique difficile
            à résorber.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Travail réalisé</h2>
          <h3>Conception</h3>
          <p>
            La phase de conception a constitué le point de départ du projet. Avant d'écrire la
            moindre ligne de code, il était nécessaire de définir clairement les responsabilités de
            chaque module et la manière dont ils allaient interagir entre eux.
            <br />
            <br />
            Cette réflexion a abouti à la production d'un diagramme de composants UML, représentant
            l'ensemble des modules de l'application (catalogue, ventes, sécurité, recommandations)
            ainsi que leurs dépendances et les flux de données entre eux. Ce diagramme a servi de
            référence commune tout au long du développement.
            <br />
            <br />
            Sur la base de ce travail, les choix architecturaux ont été justifiés au regard de trois
            attributs de qualité : l'évolutivité, avec une structure modulaire facilitant l'ajout de
            nouvelles fonctionnalités ; la robustesse, en isolant les modules pour contenir les
            effets d'une éventuelle défaillance ; et la testabilité, chaque module pouvant être
            vérifié de manière indépendante.
          </p>
          <h3>Evolution du logicielle</h3>
          <p>
            La deuxième étape du projet consistait à faire évoluer la base de code existante pour y
            intégrer la gestion des ventes. Avant toute chose, une analyse du code existant a été
            réalisée afin de comprendre la structure en place, d'identifier les conventions
            utilisées et de s'assurer que les nouveaux développements s'y intégreraient de manière
            cohérente.
            <br />
            <br />
            Cette analyse a été suivie de la conception d'un schéma de base de données, modélisant
            les nouvelles entités nécessaires à la gestion des ventes (commandes, lignes de
            commande, clients) ainsi que leurs relations avec les entités déjà existantes, notamment
            les produits du catalogue.
            <br />
            <br />
            Sur la base de ce schéma, l'API de gestion des ventes a ensuite été implémentée. Le
            développement a été guidé par des user stories, permettant de rester centré sur les
            besoins concrets des utilisateurs et de livrer des fonctionnalités directement
            exploitables.
          </p>
          <h3>Amélioration de la qualité</h3>
          <p>
            La troisième étape du projet était consacrée à l'amélioration de la qualité de
            l'application, aussi bien en termes de sécurité que de fiabilité.
            <br />
            <br />
            Un système d'authentification par token JWT avec OAuth2 a d'abord été mis en place,
            permettant de sécuriser les accès à l'API. En complément, un système de rôles a été
            introduit, distinguant les profils <code>USER</code> et <code>ADMIN</code>, afin de
            protéger les routes sensibles selon le niveau de privilège de l'utilisateur connecté. La
            protection des endpoints a été définie en se basant sur des user stories, garantissant
            que les règles d'accès correspondent aux besoins réels du métier.
            <br />
            <br />
            Un effort a également été fait sur la normalisation des réponses d'erreur, en
            uniformisant les codes HTTP retournés et en adoptant un format JSON cohérent pour
            l'ensemble des erreurs de l'API. Cela facilite la gestion des erreurs côté client et
            améliore la lisibilité des échanges.
            <br />
            <br />
            Enfin, des tests à plusieurs niveaux ont été mis en place : des tests unitaires et
            d'intégration réalisés avec Spring Boot Starter Test et Mockito, ainsi que des tests
            d'API effectués avec Postman, couvrant les principaux scénarios d'utilisation.
          </p>
          <h3>Intégration d’un module de machine learning</h3>
          <p>
            La dernière étape du projet consistait à enrichir l'application d'un module de
            recommandations s'appuyant sur l'apprentissage automatique.
            <br />
            <br />
            La première phase a été de définir le périmètre fonctionnel du module. Il s'agissait de
            déterminer quelles données seraient exploitées, en l'occurrence les données de ventes et
            le catalogue produits, et quel type de recommandations serait produit, comme la
            suggestion de produits similaires ou la mise en avant des best-sellers.
            <br />
            <br />
            Sur la base de ce périmètre, un programme d'apprentissage automatique a été intégré au
            module, avec pour objectif d'améliorer la pertinence des recommandations en s'appuyant
            sur les tendances observées dans les données existantes plutôt que sur des règles
            définies manuellement. Un endpoint API à été mis en place pour récupérer les
            recommendations produites par le module.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Conclusion du projet</h2>
          <h3>Les résultats obtenus</h3>
          <p>
            Au terme du projet, l'application répond à l'ensemble des objectifs fixés en début de
            mission. Elle est fonctionnelle, sécurisée, et couvre les besoins exprimés par le client
            aussi bien sur la gestion du catalogue que sur la gestion des ventes. Des tests de
            non-régression ont été mis en place à plusieurs niveaux, garantissant la stabilité de
            l'application dans la durée et facilitant les évolutions futures sans risque de
            régressions silencieuses. Enfin, l'intégration d'un module de machine learning vient
            enrichir l'application d'une dimension plus intelligente, en proposant des
            recommandations produits basées sur les données réelles de ventes et de catalogue.
          </p>
          <h3>Les lendemains du projet</h3>
          <p>
            Le projet étant fictif, il n'a pas eu de suite concrète. Cependant, plusieurs pistes
            d'évolution ont été identifiées au cours du développement et pourraient constituer des
            axes de travail futurs. Parmi les fonctionnalités envisagées figurent la mise en place
            d'un modèle de fidélisation client, l'ajout d'un suivi des stocks avec système d'alertes
            pour prévenir les ruptures, ainsi qu'un service de gestion des rendez-vous qui viendrait
            compléter l'offre fonctionnelle de l'application.
          </p>
        </section>

        <section className="competence-sub-item">
          <h2>Ce que je retiens</h2>
          <p>
            Ce projet représente pour moi une expérience de conception complète, couvrant l'ensemble
            des étapes d'un développement logiciel : de la définition du périmètre fonctionnel
            jusqu'à l'intégration d'un module de machine learning, en passant par la sécurisation de
            l'API et la mise en place de tests. Il m'a également conforté dans ma volonté
            d'appliquer ces compétences dans un contexte réel, au sein d'une entreprise, où les
            contraintes métier, les exigences de qualité et les interactions humaines viennent
            donner une toute autre dimension aux choix techniques.
          </p>
        </section>
      </article>

      <section
        className="competence-sub-item project-skills project-skills-panel"
        aria-labelledby="admin-hbond-skills"
      >
        <h2 id="admin-hbond-skills">Compétences associées au projet</h2>

        <div className="project-skills-group" aria-labelledby="admin-hbond-human-skills">
          <h3 id="admin-hbond-human-skills">Compétences humaines</h3>
          <div className="project-skills-links">
            <Link
              className="project-skill-link project-skill-link-human"
              to="/competences/organisation"
            >
              Organisation
            </Link>
            <Link
              className="project-skill-link project-skill-link-human"
              to="/competences/autonomie"
            >
              Autonomie
            </Link>
            <span className="project-skill-link project-skill-link-human">Rigueur</span>
          </div>
        </div>

        <div className="project-skills-group" aria-labelledby="admin-hbond-tech-skills">
          <h3 id="admin-hbond-tech-skills">Compétences techniques</h3>
          <div className="project-skills-links">
            <Link
              className="project-skill-link project-skill-link-tech"
              to="/competences/conception-architecture-logicielle"
            >
              Conception d&apos;architecture logicielle
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
