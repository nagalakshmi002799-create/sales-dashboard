export default function SummaryCards() {
  const cards = [
    { label: 'Total Sales', value: '$1k', trend: '-1%', color: 'danger', icon: '📊' },
    { label: 'Total Order', value: '300', trend: '-1%', color: 'warning', icon: '🛒' },
    { label: 'Product Sold', value: '5', trend: '+2%', color: 'success', icon: '✅' },
    { label: 'New Customers', value: '0', trend: '0%', color: 'info', icon: '👥' },
  ]

  return (
    <section className="mb-4">
      <div className="mb-3">
        <h4 className="fw-bold mb-1">Today's Sales</h4>
        <p className="text-muted small mb-0">Sales summary</p>
      </div>
      <div className="row gx-3 gy-3 dashboard-summary">
        {cards.map((card) => (
          <div key={card.label} className="col-12 col-sm-6 col-lg-3">
            <div className={`card shadow-sm summary-card h-100 border-0`} style={{ background: '#f8f9fa' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-2">{card.label}</p>
                    <h3 className="mb-2 fw-bold">{card.value}</h3>
                  </div>
                  <span className={`badge bg-${card.color} bg-opacity-10 text-${card.color}`}>
                    {card.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

