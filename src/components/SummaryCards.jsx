export default function SummaryCards() {
  const cards = [
    { label: 'Total Sales', value: '$1k', trend: '-1%', bg: '#E0F2FE', text: '#0369A1', badgeBg: '#bae6fd', badgeText: '#075985' },
    { label: 'Total Orders', value: '300', trend: '-1%', bg: '#FEF3C7', text: '#92400E', badgeBg: '#fde68a', badgeText: '#92400e' },
    { label: 'Products Sold', value: '5', trend: '+2%', bg: '#DCFCE7', text: '#047857', badgeBg: '#bbf7d0', badgeText: '#14532d' },
    { label: 'New Customers', value: '0', trend: '0%', bg: '#EDE9FE', text: '#5B21B6', badgeBg: '#ddd6fe', badgeText: '#5b21b6' },
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
            <div className="card shadow-sm summary-card h-100 border-0" style={{ background: card.bg, color: card.text }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="small mb-2" style={{ color: card.text, opacity: 0.9 }}>{card.label}</p>
                    <h3 className="mb-2 fw-bold" style={{ color: card.text }}>{card.value}</h3>
                  </div>
                  <span className="badge" style={{ background: card.badgeBg, color: card.badgeText }}>
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

