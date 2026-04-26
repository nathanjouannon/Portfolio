export default function ApplicationHbond() {
  return (
    <article className="competence-detail" aria-labelledby="organisation-title">
      <h1 id="organisation-title">Application hbond</h1>
      <section className="competence-sub-item">
        <h2>Introduction</h2>
        <p>
          Cette réalisation s'inscrit dans le cadre de mon master "Expert en ingénierie du logiciel"
          au sein de l'ISCOD, effectué en alternance sur deux ans au sein de l'entreprise hbond.
          <br />
          <br />
          hbond est une start-up basée à Annecy, fondée il y a quatre ans. Elle occupe une position
          unique sur son marché : elle organise la vente de matériel sportif à tarif préférentiel
          pour les professionnels du sport, permettant à ces derniers de s'équiper à moindre coût,
          tandis que les marques partenaires bénéficient en retour de leur influence comme levier
          marketing. Pour garantir l'exclusivité de la plateforme, la création d'un compte est
          conditionnée à la possession d'un diplôme d'éducateur sportif reconnu par l'État.
          <br />
          <br />
          Mon poste est celui de développeur application mobile, disponible sur iOS et Android. J'ai
          été en charge de la modification des pages existantes, de la création des pages
          manquantes, de l'écriture des tests et de la mise en production de l'application.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les objectifs</h2>
        <p>
          Cette mission s'est étalée sur l'ensemble de mes deux ans d'alternance. Elle n'occupait
          pas la totalité de mon temps, mais revenait de manière régulière chaque semaine, avec
          plusieurs tâches réparties tout au long de la période.
          <br />
          <br />
          Ce projet impliquait une communication constante avec les différents acteurs de l'équipe.
          En début de semaine, des échanges avec le CEO permettaient de définir les fonctionnalités
          à développer ou les modifications à apporter. Je collaborais également étroitement avec le
          développeur back-end pour aligner nos échanges autour de l'API : définir les données à
          envoyer, celles retournées, et s'assurer de leur cohérence. Le designer UI/UX était aussi
          un interlocuteur régulier pour garantir la bonne intégration des maquettes. Enfin, je
          travaillais avec le second développeur de l'application, notamment pour les code reviews
          via GitHub.
          <br />
          <br />
          L'objectif principal était de maintenir et faire évoluer l'application mobile
          cross-plateforme, développée en React Native, pour qu'elle reste disponible et à jour sur
          iOS et Android. Cela impliquait de livrer une application sécurisée, intuitive et
          fonctionnelle, tout en minimisant les risques de bugs. Un enjeu clé était également de
          gérer des mises en production efficaces, permettant au plus grand nombre d'utilisateurs
          d'accéder à la dernière version.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Contexte</h2>
        <h3>Contexte humain</h3>
        <p>
          L'équipe est composée de six personnes : le CEO, qui assure l'expression des besoins et la
          prise de décision, un représentant commercial et marketing, un développeur back-end, un
          designer UI/UX, un développeur full-stack senior et moi-même, développeur full-stack en
          alternance, en charge du développement de l'application mobile sur ce projet.
          <br />
          <br />
          L'équipe fonctionne en mode hybride : certains membres sont en full télétravail, d'autres
          sont au bureau à temps plein, et certains alternent entre les deux.
          <br />
          <br />
          Mes interactions les plus régulières concernaient trois personnes. Avec le designer UI/UX,
          nous échangions sur les maquettes et les choix de design à intégrer. Avec le développeur
          back-end, les discussions portaient principalement sur la documentation de l'API, les
          données échangées, ainsi que les bugs ou incohérences que je pouvais identifier. Avec le
          second développeur full-stack, nous collaborions sur les code reviews et nous organisions
          pour travailler en parallèle sans nous bloquer mutuellement.
        </p>
        <h3>Contexte technique</h3>
        <p>
          L'application mobile existait avant le début de mon alternance. Ce projet s'inscrit donc
          dans une continuité de développement, avec pour objectif de la maintenir et de la faire
          évoluer.
          <br />
          <br />
          L'application est cross-plateforme, disponible sur iOS et Android. Elle a été initialement
          créée avec Create React App, puis migrée vers Expo, en utilisant non pas Expo Go mais
          l'Expo Development Server.
          <br />
          <br />
          Elle propose plusieurs fonctionnalités à ses utilisateurs : la création de compte avec
          toutes ses étapes (informations personnelles, vérification de l'email, upload des
          justificatifs de diplôme), la consultation d'un catalogue de marques partenaires avec
          accès aux coupons promotionnels, une page de notifications, un système de parrainage, et
          une page profil permettant de consulter ses diplômes validés ou en attente, ses
          organisations d'appartenance, de modifier son mot de passe, de contacter le support ou de
          supprimer son compte.
          <br />
          <br />
          Sur le plan technique, l'application est développée en React Native avec TypeScript. Elle
          s'appuie sur plusieurs librairies, notamment i18n pour la gestion des traductions et
          Zustand pour la gestion des états globaux, entre autres.
          <br />
          <br />
          L'architecture suit une organisation par feature. Chaque feature dispose de son propre
          dossier, contenant un fichier <code>.tsx</code> comme point d'entrée, ainsi que trois
          sous-dossiers : components pour les composants propres à la feature, hooks pour les hooks
          d'accès à l'API, et styles pour les styles. En parallèle, des dossiers globaux à
          l'application regroupent les composants et hooks réutilisables sur l'ensemble des
          features.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les enjeux</h2>
        <p>
          L'enjeu global de l'application est de permettre aux professionnels du sport de s'équiper
          à tarifs préférentiels auprès d'un large catalogue de marques partenaires. C'est la
          promesse centrale faite aux utilisateurs.
          <br />
          <br />
          Sur le plan technique, l'enjeu principal est de garantir que cette promesse soit tenue.
          Cela passe par deux points critiques : que les utilisateurs puissent créer leur compte
          sans friction, et qu'ils puissent récupérer des coupons de réduction fonctionnels,
          utilisables directement sur les e-commerces des marques partenaires.
          <br />
          <br />
          Ce second point est particulièrement sensible. Si un utilisateur copie son coupon depuis
          l'application et constate qu'il ne fonctionne pas sur le site de la marque, cela génère
          une frustration immédiate qui peut conduire à la désinstallation de l'application ou à un
          bouche-à-oreille négatif. La fiabilité des coupons est donc un enjeu de rétention et de
          réputation pour l'entreprise.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Les risques</h2>
        <p>
          Le risque global est de livrer une application en production comportant des bugs, quels
          qu'ils soient. Mais certains risques sont plus critiques que d'autres.
          <br />
          <br />
          Le risque le plus grave est qu'un utilisateur soit bloqué dès la création de compte. Si
          cette étape est défaillante, l'utilisateur ne pourra jamais accéder à l'application et il
          est peu probable qu'il y revienne.
          <br />
          <br />
          Une fois le compte créé, le risque suivant est que l'utilisateur n'ait pas accès à ses
          coupons de réduction. Sans coupons, l'application n'a plus d'intérêt et la promesse n'est
          pas tenue.
          <br />
          <br />
          Vient ensuite le risque de coupons non fonctionnels, déjà évoqué dans les enjeux. Un
          coupon qui ne fonctionne pas sur le site de la marque partenaire génère une forte
          frustration et peut conduire à la désinstallation de l'application ou à un avis négatif.
          <br />
          <br />
          Enfin, la cybersécurité représente un risque important. Les coupons offrent des avantages
          tarifaires significatifs, ce qui en fait des cibles potentielles. Pour limiter ce risque,
          plusieurs mécanismes ont été mis en place, notamment le fait qu'un coupon ne soit
          utilisable qu'une seule fois sur le e-commerce de la marque partenaire.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Travail réalisé</h2>
        <h3>Amélioration de la création de compte</h3>
        <p>
          La création de compte a fait l'objet d'une refonte complète, aussi bien côté design que
          côté fonctionnement, front-end et back-end.
          <br />
          <br />
          Avant cette refonte, l'utilisateur renseignait toutes ses informations (nom, prénom, date
          de naissance, vérification de l'email) avant même que son compte soit créé et qu'il
          dispose d'un identifiant utilisateur. Le problème majeur de cette approche était l'absence
          de traçabilité : en cas de bug ou de problème, il était impossible de savoir qui avait
          effectué quelle action, ce qui rendait le débogage très difficile.
          <br />
          <br />
          Pour résoudre ce problème, un objet de pré-account a été introduit. Dès le début du
          processus, un identifiant de pré-account est généré. Chaque étape franchie par
          l'utilisateur est mise à jour en base de données, ce qui permet de suivre précisément où
          il s'est arrêté, même sans identifiant utilisateur définitif. Cela offre également une
          valeur analytique : si un grand nombre d'utilisateurs abandonnent à la même étape, cela
          signale un problème potentiel à cet endroit.
          <br />
          <br />
          Le parcours de création de compte a également été restructuré. L'utilisateur commence par
          renseigner un code d'invitation, seul moyen d'accéder à la création de compte. Il
          renseigne ensuite son email et le vérifie via un code reçu par mail. Il saisit alors son
          prénom, nom et date de naissance, ce qui déclenche la création de son login et de son
          identifiant utilisateur définitif.
          <br />
          <br />
          Une fois connecté, l'utilisateur est redirigé vers l'étape de vérification des diplômes.
          Une recherche automatique est effectuée via l'API publique du ministère des Sports, en se
          basant sur son nom, prénom et date de naissance, afin de vérifier s'il possède une carte
          professionnelle d'éducateur sportif. Si la vérification aboutit, l'utilisateur est
          directement redirigé vers le catalogue des réductions. Dans le cas contraire, il est
          invité à importer manuellement un justificatif de diplôme, qui sera ensuite vérifié par un
          administrateur.
          <br />
          <br />
          Le fait que ces étapes interviennent après la création du login permet désormais de tracer
          chaque action avec un identifiant utilisateur, rendant le débogage nettement plus simple.
          <br />
          <br />
          Des animations ont également été ajoutées, et les timeouts liés à la vérification
          automatique via l'API du ministère ont été revus et corrigés, ce point ayant été identifié
          comme une source potentielle de problèmes.
        </p>
        <h3>Refonte complète du design et mise en place d'un design system</h3>
        <p>
          L'application a fait l'objet d'une refonte complète de son design afin de correspondre à
          la nouvelle charte graphique. Cette phase a également été l'occasion de mettre en place un
          design system, permettant d'uniformiser le style de l'application et de centraliser toutes
          les variables de style en un seul endroit. Ainsi, modifier une seule variable suffit à
          répercuter un changement sur l'ensemble de l'application, que ce soit pour les couleurs,
          les tailles de fonte ou d'autres propriétés visuelles.
          <br />
          <br />
          Un changement majeur a concerné le thème de l'application. L'application utilisait
          initialement un thème sombre, mais il a été constaté que les utilisateurs se servent de
          l'application principalement en extérieur, rendant ce thème peu adapté. L'application a
          donc été convertie vers un thème clair, avec un changement complet des couleurs, toutes
          désormais définies et gérées via le design system. L'uniformisation des fontes a également
          fait partie de ce chantier. Les tailles et styles de texte étaient auparavant définis de
          manière disparate à travers l'application. L'ensemble a été regroupé et standardisé via
          des variables communes, spécifiant pour chaque usage la taille et le style appropriés.
        </p>
        <h3>Passage à l'Europe</h3>
        <p>
          L'application disposait déjà de la librairie i18n installée avec l'ensemble des
          traductions organisées dans des fichiers JSON, un par langue. Les langues déjà présentes
          étaient le français, l'anglais, l'espagnol, l'italien et l'allemand, couvrant ainsi les
          principales langues européennes. Le passage à l'Europe n'a donc pas nécessité un travail
          considérable sur ce point, si ce n'est une vérification globale des traductions pour
          s'assurer de leur exactitude.
          <br />
          <br />
          Le travail principal a consisté à modifier le parcours de création de compte, notamment à
          l'étape d'import de diplôme, en ajoutant un champ permettant à l'utilisateur de renseigner
          le pays d'origine de son diplôme. Ce champ est ensuite utilisé par les administrateurs
          lors de la vérification manuelle du diplôme pour attribuer à l'utilisateur un tag pays. Ce
          système permet d'intégrer des utilisateurs européens dont les diplômes proviennent de
          différents pays.
          <br />
          <br />
          Un problème est rapidement apparu : certains utilisateurs possédaient des diplômes issus
          de plusieurs pays, se retrouvant ainsi avec plusieurs tags pays. Cela entraînait des
          duplications de marques dans leur catalogue de réductions, certaines marques apparaissant
          plusieurs fois avec des conditions différentes. Pour résoudre ce problème, un algorithme a
          été développé afin de sélectionner automatiquement la réduction la plus avantageuse pour
          chaque marque, garantissant ainsi un catalogue sans doublon.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Conclusion du projet</h2>
        <h3>Les résultats obtenus</h3>
        <p>
          L'application mobile livrée répond aux attentes des utilisateurs. Elle leur permet
          d'effectuer l'ensemble des actions souhaitées de manière fluide, dans un environnement
          sécurisé et fonctionnel.
          <br />
          <br />
          Sur le plan des chiffres, l'outil de suivi statistique PostHog a été intégré à
          l'application. Celui-ci permet notamment de mettre en place des funnels de création de
          compte, offrant une visibilité complète sur le parcours des utilisateurs et permettant
          d'identifier à quelle étape certains abandonnent. Grâce à cet outil, il a été constaté que
          98% des créations de compte se terminent désormais avec succès, contre 85% avant les
          modifications apportées. Les 2% restants correspondent principalement à des utilisateurs
          qui entament la création de compte avant de réaliser qu'ils ne sont pas éducateurs
          sportifs et n'ont donc pas accès à l'application, et non à des abandons liés à des
          problèmes techniques ou d'expérience utilisateur.
        </p>
        <h3>Les lendemains du projet</h3>
        <p>
          L'application continue d'être utilisée et d'évoluer au fil des nouvelles releases, avec de
          nombreuses fonctionnalités déjà planifiées. Elle connaît une croissance régulière de sa
          base d'utilisateurs, ayant dépassé le seuil des 500 connexions quotidiennes.
          <br />
          <br />
          Cette croissance soulève un enjeu technique important pour les prochaines releases :
          l'optimisation des performances. Avec un nombre d'utilisateurs en constante augmentation,
          des appels inutiles ou redondants à l'API peuvent rapidement devenir problématiques. Si le
          nombre d'utilisateurs venait à doubler, comme cela est anticipé, des lenteurs pourraient
          apparaître notamment lors des pics d'activité. Un travail d'audit et d'optimisation des
          performances est donc prévu afin d'anticiper cette montée en charge et de garantir une
          expérience utilisateur fluide quel que soit le volume de connexions simultanées.
        </p>
      </section>

      <section className="competence-sub-item">
        <h2>Ce que je retiens</h2>
        <p>
          Ce projet m'a permis de découvrir le développement mobile sous un angle que je n'avais pas
          encore pleinement exploré. Bien que React Native repose sur des technologies que je
          connaissais déjà, TypeScript et React, leur application dans un contexte mobile est
          sensiblement différente du développement web. De nombreux aspects spécifiques sont à
          prendre en compte, notamment le débogage, qui s'avère plus complexe, ou encore la gestion
          des releases, bien plus contraignante que sur le web. Même si des solutions comme
          l'hébergement d'Expo sur un VPS privé permettent de simplifier la distribution des mises à
          jour, cela reste un processus plus lourd qu'un simple déploiement web.
          <br />
          <br />
          Je retiens également que le parcours de création de compte est un élément central d'une
          application mobile. Les utilisateurs ont une patience de plus en plus limitée et le
          moindre frein dans ce parcours peut suffire à les faire abandonner. C'est une leçon
          concrète que les chiffres obtenus via PostHog ont permis de confirmer.
          <br />
          <br />
          Enfin, sur un plan plus personnel, il est prévu que je reste dans l'entreprise et j'espère
          sincèrement que cela se concrétisera. Ce projet m'a donné envie de voir la suite, de
          contribuer aux nouvelles fonctionnalités prévues et d'accompagner la croissance de cette
          application.
        </p>
      </section>
    </article>
  )
}
