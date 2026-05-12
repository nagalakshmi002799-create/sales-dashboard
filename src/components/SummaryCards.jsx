export default function SummaryCards({ summary }) {
  const cards = [
    { label: 'Total Users', value: summary.totalUsers, theme: 'primary', subtitle: 'Active accounts' },
    { label: 'Cities', value: summary.totalCities, theme: 'info', subtitle: 'Supported regions' },
    { label: 'Companies', value: summary.totalCompanies, theme: 'warning', subtitle: 'Partner firms' },
    { label: 'Active Users', value: summary.activeUsers, theme: 'success', subtitle: 'Online today' },
  ]

  return (
    <section className="row gx-3 gy-3 mb-4 dashboard-summary">
      {cards.map((card) => (
        <div key={card.label} className="col-12 col-sm-6 col-xl-3">
          <div className={`card shadow-sm summary-card theme-${card.theme} h-100`}>
            <div className="card-body">
              <p className="summary-label mb-2">{card.label}</p>
              <h2 className="mb-2">{card.value}</h2>
              <p className="summary-subtitle text-white-75 mb-0">{card.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
