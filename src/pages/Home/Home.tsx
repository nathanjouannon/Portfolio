import { useRef } from 'react'
import './home.css'
import HeroSection from './Components/HeroSection'
import PresentationSection from './Components/PresentationSection'
import CompetencesSection from './Components/CompetencesSection'
import ProjectsSection from './Components/ProjectsSection'

export default function Home() {
  const presentationTitleRef = useRef<HTMLHeadingElement | null>(null)
  const scrollTopOffset = 110

  const scrollToElementWithOffset = (element: HTMLElement) => {
    const top = element.getBoundingClientRect().top + window.scrollY - scrollTopOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleSectionRedirect = (targetId: string) => {
    if (targetId === 'home-presentation' && presentationTitleRef.current) {
      scrollToElementWithOffset(presentationTitleRef.current)
      return
    }

    const nextSection = document.getElementById(targetId)
    if (nextSection) {
      scrollToElementWithOffset(nextSection)
    }
  }

  // Contruction de la page d'accueil du portfolio
  // - (DONE) Section avec des boutons qui rediriges vers les différentes sections de la page d'acceuil basé sur le useRef qui prend 90% de viewHeight
  // - (DONE) Présentation générale.
  // - Preview des compétences avec des liens vers les sections compétences.
  // - Preview des réalisation avec des liens vers les réalisations.

  return (
    <div className="home-sections-container">
      <HeroSection onSectionRedirect={handleSectionRedirect} />

      <PresentationSection titleRef={presentationTitleRef} />

      <CompetencesSection />

      <ProjectsSection />
    </div>
  )
}
