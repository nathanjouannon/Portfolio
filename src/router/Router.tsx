import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Career from '../pages/Career/Career'
import CompetencesLayout from '../pages/competences/CompetencesLayout'
import Competence from '../pages/competences/Competence'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
      <Route path="/competences" element={<CompetencesLayout />} />
      <Route path="/competences/:competence" element={<Competence />} />
    </Routes>
  )
}
