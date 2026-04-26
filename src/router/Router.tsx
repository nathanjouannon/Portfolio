import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Career from '../pages/Career/Career'
import CompetencesLayout from '../pages/competences/CompetencesLayout'
import Competence from '../pages/competences/Competence'
import ProjectLayout from '../pages/projects/ProjectLayout'
import Projet from '../pages/projects/Projet'

function ScrollToTopOnTargetPages() {
  const { pathname } = useLocation()

  useEffect(() => {
    const shouldScrollToTop =
      pathname.startsWith('/competences') ||
      pathname === '/projets' ||
      pathname.startsWith('/projet/')

    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}

export default function Router() {
  return (
    <>
      <ScrollToTopOnTargetPages />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/competences" element={<CompetencesLayout />} />
        <Route path="/competences/:competence" element={<Competence />} />
        <Route path="/projets" element={<ProjectLayout />} />
        <Route path="/projet/:slug" element={<Projet />} />
      </Routes>
    </>
  )
}
