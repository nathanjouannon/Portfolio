export default function OFit() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Projet O'Fit</h1>
      <section className="competence-sub-item">
        <h2>Introduction</h2>
        <p>
          Cette réalisation s'inscrit dans le cadre de mon master "Expert en ingénierie du logiciel"
          au sein de l'ISCOD, préparant un RNCP de niveau 7. Il s'agit d'un projet d'étude mené en
          autonomie et en solitaire, sans équipe réelle. Dans ce scénario fictif, je suis chef de
          projet de la start-up O'Fit, spécialisée dans le développement d'applications de santé
          connectée. À ce titre, je suis responsable de la coordination de toutes les phases du
          projet, de la communication avec les parties prenantes et de la gestion de l'équipe. Mon
          rôle est exclusivement orienté pilotage : je ne touche pas directement au code.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les objectifs</h2>
        <p>
          Le projet O'Fit poursuit des objectifs à la fois humains et techniques. Sur le plan
          humain, l'enjeu est de concevoir une application capable de répondre aux besoins d'un
          public varié, allant des jeunes adultes aux seniors en passant par les professionnels
          actifs. L'interface doit être suffisamment intuitive pour être prise en main sans
          friction, tout en restant engageante sur la durée pour favoriser l'adhésion des
          utilisateurs.
          <br />
          <br />
          Sur le plan technique, le projet vise à mettre à disposition une application mobile
          complète, sécurisée et conforme au RGPD, garantissant la protection des données
          personnelles de santé. Elle doit également proposer des fonctionnalités de
          personnalisation avancées, s'appuyant sur l'analyse des données utilisateurs pour délivrer
          des conseils de santé adaptés à chaque profil.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Contexte</h2>
        <p>
          O'Fit est une start-up en croissance, portée par une culture agile mais encore peu
          formalisée. Le budget alloué au projet est conséquent, avec une carte blanche accordée par
          le CEO, mais des attentes élevées en termes de résultats et une pression forte pour livrer
          rapidement.
          <br />
          <br />
          L'équipe est composée de six personnes : un chef de projet, trois développeurs juniors
          dont un spécialisé mobile Android/iOS et deux full-stack, un designer UX/UI en alternance,
          et un responsable marketing junior. L'équipe est donc majoritairement junior, sans
          développeur senior pour assurer un encadrement technique. Le designer manque d'autonomie,
          notamment sur les tests utilisateurs, et certains membres s'impliquent peu dans les
          discussions collectives.
          <br />
          <br />
          Le mode de travail est principalement en télétravail, avec des réunions hebdomadaires en
          ligne. La communication repose sur les emails et les chats, sans outils collaboratifs
          structurés, ce qui génère des malentendus fréquents sur les spécifications, des retards et
          des révisions constantes des exigences. Le périmètre du projet reste instable, avec un
          risque réel de dette technique si la cadence de livraison prime sur la qualité.
          <br />
          <br />
          Sur le plan technique, tout est à construire. Aucune base de code n'existe encore. Une
          liste de fonctionnalités a néanmoins déjà été établie à l'issue d'un brainstorming
          initial, ce qui constitue le point de départ du projet.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les enjeux</h2>
        <p>
          L'enjeu principal du projet est de livrer une application mobile qui soit réellement
          utilisée au quotidien. Pour cela, elle doit être simple à prendre en main, quel que soit
          le profil de l'utilisateur, qu'il soit jeune adulte, professionnel actif ou senior. Une
          interface mal conçue ou trop complexe suffirait à décourager l'adoption, peu importe la
          qualité des fonctionnalités proposées.
          <br />
          <br />
          Au-delà de l'expérience utilisateur, le projet soulève un enjeu de sécurité non
          négligeable. L'application manipule des données de santé sensibles, ce qui impose une
          conformité stricte avec le RGPD dès les premières lignes de code. Une faille ou une
          non-conformité exposerait l'entreprise à des sanctions lourdes et briserait la confiance
          des utilisateurs avant même que le produit ne soit établi.
          <br />
          <br />
          Il y a également un enjeu organisationnel interne. L'équipe est jeune, distribuée, et les
          processus sont encore peu formalisés. Sans cadre de travail clair, le risque est de subir
          des retards à répétition, des révisions constantes des spécifications et une dette
          technique difficile à résorber. Structurer les méthodes de travail est donc aussi
          important que le développement lui-même.
          <br />
          <br />
          Enfin, l'intégration avec les wearables et services tiers représente un enjeu technique
          central. La valeur de l'application repose en grande partie sur sa capacité à centraliser
          les données de santé issues de plateformes externes comme Apple Health ou Google Fit.
          Cette synchronisation doit être fiable et transparente pour l'utilisateur.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les risques</h2>
        <p>
          Le premier risque est celui des retards de livraison. Avec une équipe majoritairement
          junior et un périmètre encore instable, les délais peuvent rapidement déraper.
          L'intégration des wearables est un exemple concret : plus complexe que prévu, elle
          pourrait à elle seule décaler le lancement de plusieurs mois, avec des conséquences
          directes sur le budget et les actions marketing planifiées.
          <br />
          <br />
          Le deuxième risque concerne la sécurité des données. L'application traite des informations
          de santé particulièrement sensibles. Sans expertise solide en chiffrement et en gestion
          des consentements, une faille est vite arrivée. Les conséquences seraient immédiates :
          plainte d'un utilisateur, enquête de la CNIL, et une image durablement abîmée auprès du
          grand public.
          <br />
          <br />
          Le troisième risque est celui d'une mauvaise adoption par les utilisateurs. Une interface
          mal pensée ou insuffisamment testée peut suffire à faire échouer le produit
          commercialement. Ce risque est particulièrement réel pour les personnes plus âgées, moins
          à l'aise avec les applications mobiles, qui n'hésiteront pas à désinstaller l'application
          au moindre blocage.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Travail réalisé</h2>
        <h3>Établir et prioriser les fonctionnalités</h3>
        <p>
          La première étape du travail a été de cadrer précisément ce que l'application devait
          faire. Un document de spécification détaillé a été construit, listant l'ensemble des
          fonctionnalités envisagées. Chaque fonctionnalité a ensuite été classée par ordre de
          priorité et associée à une version cible (V1, V2, etc.), permettant de distinguer ce qui
          était indispensable au lancement de ce qui pouvait être reporté sans compromettre la
          valeur du produit.
        </p>
        <h3>Suivi du projet</h3>
        <p>
          Pour assurer un suivi structuré du projet, un rapport d'analyse des risques a été rédigé,
          accompagné d'une matrice de risques permettant de visualiser et hiérarchiser les menaces
          identifiées selon leur probabilité et leur impact. En parallèle, une liste de KPI a été
          définie afin de disposer d'indicateurs concrets pour mesurer l'avancement du projet tout
          au long de son développement.
        </p>
        <h3>Amélioration de l'environnement de travail</h3>
        <p>
          La première étape a été de réaliser un audit de l'environnement de travail existant afin
          d'identifier les points bloquants. Cet audit a mis en évidence deux manques majeurs.
          <br />
          <br />
          L'absence de développeur senior exposait l'équipe à plusieurs risques : un manque
          d'encadrement technique, une absence d'expertise sur l'architecture mobile, ainsi que des
          lacunes en sécurité, conformité RGPD, architecture logicielle et DevOps. Par ailleurs,
          l'absence de CTO posait un problème de structure, l'équipe n'étant pas formée aux méthodes
          agiles et manquant donc d'un cadre de travail clair. Enfin, l'audit a révélé des
          difficultés dans la communication et la collaboration au sein de l'équipe, avec un nombre
          de réunions insuffisant.
          <br />
          <br />
          Face à ces constats, des solutions ont été proposées pour combler les manques identifiés.
          Sur le plan des compétences, le renforcement de l'équipe avec un développeur senior
          mobile, un expert en sécurité et RGPD, ainsi qu'un ingénieur logiciel chargé d'apporter de
          la structure et de mettre en place des tests a été retenu.
          <br />
          <br />
          Un plan d'action concret a ensuite été défini pour mettre en œuvre ces améliorations. Le
          premier mois serait consacré au recrutement des compétences manquantes et aux formations,
          notamment sur les méthodes agiles. Le deuxième mois verrait la mise en place des outils et
          processus, avec l'adoption de Slack pour la communication et l'implémentation de tests et
          d'une pipeline CI/CD. Les mois suivants, de trois à six, seraient dédiés à la montée en
          compétence et à l'optimisation continue.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Conclusion du projet</h2>
        <h3>Les résultats obtenus</h3>
        <p>
          Ce projet a permis d'aboutir à un plan clair articulé autour de deux aspects
          complémentaires. Sur le plan technique, les fonctionnalités ont été priorisées et
          ordonnées, offrant une vision claire de ce qui devait être développé en premier. Sur le
          plan humain, les points faibles de l'équipe ont été identifiés et un plan d'amélioration
          concret a été établi pour combler les lacunes de compétences et remédier aux
          dysfonctionnements de communication.
        </p>
        <h3>Les lendemains du projet</h3>
        <p>
          Concernant les lendemains du projet, celui-ci n'a pas eu de suite, s'agissant d'un projet
          fictif. Le plan préparé n'a donc pas pu être mis en application dans un contexte réel, ce
          qui ne permet pas d'évaluer concrètement son impact sur l'équipe et l'organisation.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Ce que je retiens</h2>
        <p>
          Ce projet représente pour moi une bonne expérience de pilotage, aussi bien sur le plan des
          fonctionnalités que sur celui de l'équipe. Il m'a permis de comprendre qu'il ne faut pas
          négliger le pilotage humain : gérer les compétences, les dynamiques d'équipe et les
          dysfonctionnements de communication est tout aussi important que de piloter les
          développements techniques.
          <br />
          <br />
          J'aurais cependant aimé pouvoir mettre en application le plan construit sur une vraie
          équipe, afin de mesurer concrètement son efficacité et d'en tirer davantage d'expérience.
        </p>
      </section>
    </article>
  )
}
