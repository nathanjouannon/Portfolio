type CompetenceGaugeProps = {
  note: number // niveau de maîtrise, de 1 à 10
}

export default function CompetenceGauge({ note }: CompetenceGaugeProps) {
  const percent = `${note * 10}%`

  return (
    <div className="competence-gauge" role="img" aria-label={`Niveau de maîtrise : ${note} sur 10`}>
      <div className="competence-gauge-track">
        <div
          className="competence-gauge-fill competence-gauge-fill-animated"
          style={{ '--gauge-target': percent } as React.CSSProperties}
        />
      </div>
      <span className="competence-gauge-value">{note}/10</span>
    </div>
  )
}
