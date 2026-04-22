import '../style/presensationSection.css'
import type { RefObject } from 'react'

type PresentationSectionProps = {
  titleRef: RefObject<HTMLHeadingElement | null>
}

export default function PresentationSection({ titleRef }: PresentationSectionProps) {
  return (
    <section className="home-section-présentation">
      <h1 id="home-presentation" ref={titleRef}>
        Présentation
      </h1>
      <div>
        <div>
          <h2>Mes valeurs</h2>
          <p>
            Je suis convaincu que la réussite d’un projet complexe, quel que soit le domaine, est en
            grande partie permise par la cohésion des équipes et le respect que les uns ont envers
            les autres. Considérer chaque collaborateur d’égal à égal est pour moi indispensable.
            Cette approche permet à chacun d’écouter et de prendre en compte les avis des autres
            collaborateurs. C’est ainsi que l’on tire profit de l’intelligence collective.
            <br />
            <br />
            Mon tempérament perfectionniste me pousse à livrer un travail de qualité, optimisé et
            pérenne. La rigueur et la persévérance sont deux qualités que j’ai acquises, comme les
            autres, tout au long de mon parcours de sportif de haut niveau. La concurrence oblige à
            transformer l’exigence en habitude et à maintenir une résilience constante face aux
            différents défis techniques auxquels nous pouvons faire face.
          </p>
        </div>
        <div>
          <h2>Mes principales qualités humaines</h2>
          <p>
            Mon parcours est marqué par une capacité d’adaptation et une autonomie éprouvées au sein
            d’environnements exigeants. Mon expérience en alternance, au sein d’une start-up
            comptant 5 personnes, m’a permis d’évoluer grâce à des échanges directs avec la
            direction technique et stratégique. Cette proximité avec le CEO a affiné mon sens de
            l’écoute active, me permettant de traduire des besoins métier en spécifications
            techniques claires.
            <br />
            <br />
            Dans ce contexte de start-up, j’ai su faire preuve d’une grande autonomie. Le nombre
            réduit de personnes dans l’équipe de développement m’a permis de prendre des initiatives
            structurées et d'assurer une gestion proactive des priorités. Ce sens de l’organisation
            est le prolongement naturel de mon double projet :
            <br />
            la conciliation entre le projet de sport de haut niveau et un cursus de Mastère Expert
            en ingénierie logicielle exige une discipline et une hiérarchisation des tâches. C’est
            cette expertise dans la gestion du temps et des responsabilités que j’investis
            aujourd’hui dans le pilotage de projets techniques complexes.
          </p>
        </div>
        <div>
          <h2>Mes principaux centres d’intérêt</h2>
          <p>
            Mes centres d’intérêts sont très tournés vers le sport. J’ai depuis le plus jeune âge
            évolué dans un environnement sportif et montagnard. Originaire des Hautes-Alpes, j’ai
            dès l’âge de 2 ans chaussé mes premiers skis. Ce n’était que le début d’un ensemble de
            découvertes sportives.
            <br />
            Aujourd’hui, je pratique quotidiennement tout un ensemble de sports tels que le vélo, le
            trail et le ski. La pratique de ces différents sports et mon inscription dans un club de
            ski m’ont donné goût à la compétition. Dans un premier temps en ski alpin, puis plus
            tard et encore aujourd’hui en ski de fond. Je pratique cette discipline à haut niveau
            depuis maintenant plus de 10 ans, dont les 3 dernières années en tant que
            semi-professionnel.
            <br />
            <br />
            L’innovation, qu’elle soit dans le domaine technologique et informatique ou qu’elle soit
            dans le domaine des équipements sportifs, suscite un fort intérêt de ma part. Je suis
            particulièrement intéressé par les projets où l’ingénierie se met au service de
            l’efficacité pure et de l’optimisation des performances, particulièrement lorsque ces
            avancées s'appuient sur des principes physiques concrets. Par exemple, nous pouvons voir
            dernièrement des évolutions majeures sur les largeurs de pneumatiques utilisés dans les
            pelotons professionnels en cyclisme. Ces évolutions résultent directement d'études de
            rendement menées par les équipes professionnelles. Ce croisement entre innovation
            technologique et matérielle mêlé à la physique et la mécanique est l’un de mes
            principaux intérêts.
          </p>
        </div>
        <div>
          <h2>Mon projet professionnel</h2>
          <p>
            Suite à mon expérience acquise au sein d’équipes réduites comme celles que l’on peut
            trouver en start-up, j’envisage mon parcours professionnel selon deux axes. Tous deux
            portés par une volonté de montée en compétence et d’accumuler les expériences.
            <br />
            <br />À court terme, je souhaite intégrer des équipes d’ingénierie logicielle plus
            grandes dans des entreprises plus évoluées. En effet, après mon expérience en alternance
            dans une start-up, je suis convaincu que l’immersion au sein d’une plus grande
            organisation me permettra d’acquérir une expérience sur des problématiques de passage à
            l’échelle, des architectures plus complexes et des méthodologies de travail adaptées à
            la collaboration à grande échelle.
            <br />
            <br />
            Par ailleurs, mon attrait pour l’entrepreneuriat me fait envisager, si l’opportunité se
            présente, de co-fonder une entreprise tech. Si un projet suscite une forte adhésion et
            s'aligne avec mes ambitions, j’apporterais mon expertise technique et opérationnelle, en
            synergie avec des partenaires experts dans leurs domaines respectifs.
          </p>
        </div>
      </div>
    </section>
  )
}
