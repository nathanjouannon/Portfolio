import { Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Bienvenue sur mon portfolio</h1>} />
      <Route path="/about" element={<h1>À propos</h1>} />
    </Routes>
  )
}
