export default function DashboardHeader({ title, subtitle, description }) {
  return (
    <header className="dashboard-header mb-4">
      <div>
        <span className="badge bg-primary mb-2 text-uppercase">Sales Dashboard</span>
        <h1 className="fw-bold mb-2">{title}</h1>
        <p className="text-secondary mb-0">{description}</p>
      </div>
    </header>
  )
}
