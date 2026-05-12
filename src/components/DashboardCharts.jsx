export default function DashboardCharts({ users }) {
  const cityCounts = users.reduce((acc, user) => {
    const city = user.address.city
    acc[city] = (acc[city] || 0) + 1
    return acc
  }, {})

  const cityChartData = Object.entries(cityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const growthPoints = [5, 6, 7, 9, 9, 11, 13, 12, 14, 16]
  const maxValue = Math.max(...growthPoints, 1)
  const maxCityValue = Math.max(...Object.values(cityCounts), 1)

  return (
    <section className="card section-card shadow-sm h-100" id="analytics">
      <div className="card-header border-0 bg-white py-3">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <h3 className="mb-1">Analytics overview</h3>
            <p className="text-muted mb-0">Track user activity, city distribution, and growth trends across the dashboard.</p>
          </div>
          <span className="badge bg-primary bg-opacity-10 text-primary py-2 px-3 rounded-pill">Data refreshed live</span>
        </div>
      </div>

      <div className="card-body">
        <div className="row gx-4 gy-4">
          <div className="col-12 col-lg-7">
            <div className="chart-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-1">User growth</h5>
                  <p className="text-muted small mb-0">Weekly active users trend</p>
                </div>
                <span className="text-success fw-semibold">+24% this month</span>
              </div>
              <div className="growth-chart">
                <svg viewBox="0 0 220 100" preserveAspectRatio="none" className="chart-line">
                  <polyline
                    fill="none"
                    stroke="#5f74ff"
                    strokeWidth="3"
                    points={growthPoints
                      .map((value, index) => `${(index / (growthPoints.length - 1)) * 220},${100 - (value / maxValue) * 90}`)
                      .join(' ')}
                  />
                </svg>
                <div className="chart-labels d-flex justify-content-between text-muted small mt-2">
                  {growthPoints.map((_, index) => (
                    <span key={index}>W{index + 1}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
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
