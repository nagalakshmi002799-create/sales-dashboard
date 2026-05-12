export default function PerformancePanel() {
  const stats = [
    { title: 'Revenue today', value: '$12.4K', trend: '+9.8%' },
    { title: 'New customers', value: '74', trend: '+4.1%' },
    { title: 'Open deals', value: '18', trend: '-2.9%' },
  ]

  return (
    <section className="card section-card shadow-sm h-100">
      <div className="card-header border-0 bg-white py-3">
        <h3 className="mb-1">Performance overview</h3>
        <p className="text-muted mb-0">Quick insights from the dashboard activity.</p>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          {stats.map((item) => (
            <div key={item.title} className="performance-item p-3 rounded-3 border">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0 text-muted">{item.title}</p>
                <span className="text-success">{item.trend}</span>
              </div>
              <h4 className="mb-0">{item.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
