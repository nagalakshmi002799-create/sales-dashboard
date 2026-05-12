export default function SummaryCards({ summary }) {
  const cards = [
    { label: 'Total Users', value: summary.totalUsers },
    { label: 'Cities', value: summary.totalCities },
    { label: 'Companies', value: summary.totalCompanies },
    { label: 'Active Users', value: summary.activeUsers },
  ]

  return (
    <section className="row gx-3 gy-3 mb-4 dashboard-summary">
      {cards.map((card) => (
        <div key={card.label} className="col-12 col-sm-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-uppercase text-muted small mb-2">{card.label}</p>
              <h2 className="mb-0">{card.value}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
