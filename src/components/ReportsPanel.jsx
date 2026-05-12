export default function ReportsPanel() {
  const reports = [
    { title: 'Monthly sales', subtitle: 'Ready to download', badge: 'Ready' },
    { title: 'Customer activity', subtitle: 'Updated 3 hours ago', badge: 'New' },
    { title: 'Performance review', subtitle: 'Draft report', badge: 'Draft' },
  ]

  return (
    <section className="card section-card shadow-sm h-100" id="reports">
      <div className="card-header border-0 bg-white py-3">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <h3 className="mb-1">Reports</h3>
            <p className="text-muted mb-0">Export summaries and insights for customers, sales, and growth.</p>
          </div>
          <button type="button" className="btn btn-outline-primary btn-sm">
            Create report
          </button>
        </div>
      </div>

      <div className="card-body">
        <div className="list-group">
          {reports.map((report) => (
            <div key={report.title} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-3 mb-3 shadow-sm">
              <div>
                <h5 className="mb-1">{report.title}</h5>
                <p className="mb-0 text-muted">{report.subtitle}</p>
              </div>
              <span className="badge rounded-pill bg-secondary bg-opacity-10 text-secondary">{report.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
