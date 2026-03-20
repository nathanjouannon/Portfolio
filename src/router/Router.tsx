import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>À propos</h1>} />
    </Routes>
  )
}
