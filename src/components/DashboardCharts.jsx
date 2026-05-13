export default function DashboardCharts({ users }) {
  const cityCounts = users.reduce((acc, user) => {
    const city = user.address.city
    acc[city] = (acc[city] || 0) + 1
    return acc
  }, {})

  const cityChartData = Object.entries(cityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const maxCityValue = Math.max(...Object.values(cityCounts), 1)

  return (
    <section className="card section-card shadow-sm h-100 border-0" id="analytics">
      <div className="card-header border-0 bg-white py-3 px-4">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <h3 className="mb-1">Analytics overview</h3>
            <p className="text-muted mb-0">Track city distribution and user data across the dashboard.</p>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="row gx-4 gy-4">
          <div className="col-12">
            <div className="chart-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-1">City distribution</h5>
                  <p className="text-muted small mb-0">Top cities by active users</p>
                </div>
              </div>
              <div className="bar-chart">
                {cityChartData.length === 0 ? (
                  <p className="text-center text-muted mb-0">No city distribution data available yet.</p>
                ) : (
                  cityChartData.map(([city, count]) => (
                    <div key={city} className="bar-row mb-3">
                      <div className="d-flex justify-content-between mb-1 small text-muted">
                        <span>{city}</span>
                        <span>{count}</span>
                      </div>
                      <div className="progress rounded-pill" style={{ height: '12px' }}>
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: `${(count / maxCityValue) * 100}%` }}
                          aria-valuenow={count}
                          aria-valuemin="0"
                          aria-valuemax={maxCityValue}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
