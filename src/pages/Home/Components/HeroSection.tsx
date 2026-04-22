import { useRef } from 'react'
import type { MouseEvent } from 'react'
import '../style/heroSection.css'

type HeroSectionProps = {
  onSectionRedirect: (targetId: string) => void
}

const redirectionLinks = [
  { label: 'Présentation', targetId: 'home-presentation' },
  { label: 'Compétences', targetId: 'home-skills' },
  { label: 'Réalisations', targetId: 'home-projects' },
  { label: 'Contact', targetId: 'home-contact' },
]

const pixelCells = Array.from({ length: 288 })

export default function HeroSection({ onSectionRedirect }: HeroSectionProps) {
  const backgroundRef = useRef<HTMLDivElement | null>(null)
  const lastLitIndexRef = useRef<number | null>(null)

  const relightPixel = (pixelIndex: number) => {
    const background = backgroundRef.current

    if (!background || pixelIndex < 0 || pixelIndex >= background.children.length) {
      return
    }

    const cell = background.children[pixelIndex] as HTMLElement
    cell.classList.remove('is-lit')
    void cell.offsetWidth
    cell.classList.add('is-lit')
  }

  const getColumnCount = (background: HTMLDivElement) => {
    const computedColumns = window.getComputedStyle(background).gridTemplateColumns
    return computedColumns.split(' ').filter(Boolean).length
  }

  const pickRandomNeighbor = (index: number, total: number, columns: number) => {
    const row = Math.floor(index / columns)
    const column = index % columns
    const rowCount = Math.ceil(total / columns)
    const candidates: number[] = []

    if (column > 0) candidates.push(index - 1)
    if (column < columns - 1) candidates.push(index + 1)
    if (row > 0) candidates.push(index - columns)
    if (row < rowCount - 1) candidates.push(index + columns)
    if (row > 0 && column > 0) candidates.push(index - columns - 1)
    if (row > 0 && column < columns - 1) candidates.push(index - columns + 1)
    if (row < rowCount - 1 && column > 0) candidates.push(index + columns - 1)
    if (row < rowCount - 1 && column < columns - 1) candidates.push(index + columns + 1)

    const validCandidates = candidates.filter((candidate) => candidate >= 0 && candidate < total)

    if (validCandidates.length === 0) {
      return null
    }

    const randomIndex = Math.floor(Math.random() * validCandidates.length)
    return validCandidates[randomIndex]
  }

  const handlePixelHover = (event: MouseEvent<HTMLElement>) => {
    const background = backgroundRef.current

    if (!background) {
      return
    }

    const rect = background.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      return
    }

    const columns = getColumnCount(background)
    const totalCells = background.children.length

    if (columns <= 0 || totalCells === 0) {
      return
    }

    const rows = Math.ceil(totalCells / columns)
    const cellWidth = rect.width / columns
    const cellHeight = rect.height / rows
    const column = Math.min(columns - 1, Math.floor(x / cellWidth))
    const row = Math.min(rows - 1, Math.floor(y / cellHeight))
    const hoveredIndex = row * columns + column

    if (hoveredIndex >= totalCells || hoveredIndex === lastLitIndexRef.current) {
      return
    }

    lastLitIndexRef.current = hoveredIndex
    relightPixel(hoveredIndex)

    const neighbor = pickRandomNeighbor(hoveredIndex, totalCells, columns)
    if (neighbor !== null) {
      window.setTimeout(() => relightPixel(neighbor), 80)
    }
  }

  return (
    <section
      className="home-section-redirection"
      onMouseMove={handlePixelHover}
      onMouseLeave={() => {
        lastLitIndexRef.current = null
      }}
    >
      <div className="home-redirection-background" aria-hidden="true" ref={backgroundRef}>
        {pixelCells.map((_, index) => (
          <span className="pixel-cell" key={index} />
        ))}
      </div>

      <div className="home-redirection-content">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Découvrez mes projets et compétences en développement web.</p>

        <div className="home-redirection-actions">
          {redirectionLinks.map((link) => (
            <button
              key={link.targetId}
              type="button"
              className="home-redirection-button"
              onClick={() => onSectionRedirect(link.targetId)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
