export default function DashboardHeader({ title, description }) {
  return (
    <section className="card hero-card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 text-uppercase">Sales Dashboard</span>
            <h1 className="fw-bold mb-3">{title}</h1>
            <p className="text-muted mb-0">{description}</p>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary">View insights</button>
            <button className="btn btn-outline-secondary">Export</button>
          </div>
        </div>
      </div>
    </section>
  )
}
