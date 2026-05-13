export default function DashboardMain() {
  // Sample data for charts
  const visitorData = [
    { week: 'Week 1', newCustomers: 60, oldCustomers: 50, goldCustomers: 45 },
    { week: 'Week 2', newCustomers: 65, oldCustomers: 55, goldCustomers: 50 },
    { week: 'Week 3', newCustomers: 58, oldCustomers: 52, goldCustomers: 48 },
    { week: 'Week 4', newCustomers: 70, oldCustomers: 60, goldCustomers: 55 },
  ]

  const revenueData = [
    { day: 'January', offline: 40, online: 50 },
    { day: 'February', offline: 45, online: 55 },
    { day: 'March', offline: 50, online: 60 },
    { day: 'April', offline: 55, online: 65 },
    { day: 'May', offline: 60, online: 70 },
    { day: 'June', offline: 65, online: 75 },
    { day: 'July', offline: 70, online: 80 },
  ]

  const topProducts = [
    { name: 'Home Decor Range', percentage: 65 },
    { name: 'Disney Wireless Acc..', percentage: 72 },
    { name: 'SAMSUNG..', percentage: 71 },
  ]

  return (
    <div className="dashboard-main">
      <div className="row gx-4 gy-4 mt-3">
        {/* Total Revenue */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-header border-0 py-3 px-4 bg-white">
              <h5 className="mb-0 fw-bold">Total Revenue</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex gap-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-pill" style={{ background: '#00B4D8', width: '12px', height: '12px' }}></span>
                    <small className="text-muted">Offline Sales</small>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-pill" style={{ background: '#FFB703', width: '12px', height: '12px' }}></span>
                    <small className="text-muted">Online Sales</small>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 400 200" className="w-100" style={{ height: '200px' }}>
                {/* Offline bars */}
                {revenueData.map((item, i) => (
                  <g key={`offline-${i}`}>
                    <rect x={20 + i * 50} y={150 - (item.offline * 1.5)} width="18" height={item.offline * 1.5} fill="#00B4D8" />
                  </g>
                ))}
                {/* Online bars */}
                {revenueData.map((item, i) => (
                  <g key={`online-${i}`}>
                    <rect x={40 + i * 50} y={150 - (item.online * 1.5)} width="18" height={item.online * 1.5} fill="#FFB703" />
                  </g>
                ))}
                {/* X axis labels */}
                {revenueData.map((item, i) => (
                  <text key={`label-${i}`} x={35 + i * 50} y="170" fontSize="10" fill="#999" textAnchor="middle">
                    {item.day.slice(0, 3)}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Visitor Insights */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-header border-0 py-3 px-4 bg-white">
              <h5 className="mb-0 fw-bold">Visitor Insights</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-2 mb-3 small">
                <div className="d-flex align-items-center gap-1">
                  <span className="badge rounded-pill" style={{ background: '#00B4D8', width: '10px', height: '10px' }}></span>
                  <span className="text-muted">New Customers</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span className="badge rounded-pill" style={{ background: '#FF006E', width: '10px', height: '10px' }}></span>
                  <span className="text-muted">Old Customers</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span className="badge rounded-pill" style={{ background: '#8B5CF6', width: '10px', height: '10px' }}></span>
                  <span className="text-muted">Gold Customers</span>
                </div>
              </div>
              <svg viewBox="0 0 300 150" className="w-100" style={{ height: '120px' }}>
                {/* Line 1 - New Customers (Blue) */}
                <polyline fill="none" stroke="#00B4D8" strokeWidth="2" 
                  points="30,80 100,60 170,70 240,40" />
                {/* Line 2 - Old Customers (Pink) */}
                <polyline fill="none" stroke="#FF006E" strokeWidth="2" 
                  points="30,90 100,75 170,80 240,65" />
                {/* Line 3 - Gold Customers (Purple) */}
                <polyline fill="none" stroke="#8B5CF6" strokeWidth="2" 
                  points="30,100 100,85 170,90 240,75" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-4 gy-4 mt-2">
        {/* Customer Satisfaction */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-header border-0 py-3 px-4 bg-white">
              <h5 className="mb-0 fw-bold">Customer Satisfaction</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between text-center mb-3">
                <div>
                  <small className="text-muted d-block">Last Month</small>
                  <h5>$1,904</h5>
                </div>
                <div>
                  <small className="text-muted d-block">This Month</small>
                  <h5>$4,504</h5>
                </div>
              </div>
              <svg viewBox="0 0 300 120" className="w-100" style={{ height: '100px' }}>
                <polyline fill="none" stroke="#00D4FF" strokeWidth="2" 
                  points="20,80 60,50 100,65 140,45 180,60 220,40 260,70" />
              </svg>
            </div>
          </div>
        </div>

        {/* Target vs Reality */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-header border-0 py-3 px-4 bg-white">
              <h5 className="mb-0 fw-bold">Target vs Reality</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-3 mb-3 small">
                <div className="d-flex align-items-center gap-1">
                  <span className="badge rounded-pill" style={{ background: '#10B981', width: '10px', height: '10px' }}></span>
                  <span className="text-muted">Target</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span className="badge rounded-pill" style={{ background: '#FFB703', width: '10px', height: '10px' }}></span>
                  <span className="text-muted">Reality</span>
                </div>
              </div>
              <svg viewBox="0 0 300 120" className="w-100" style={{ height: '100px' }}>
                {/* Green bars */}
                {[30, 45, 35, 50, 40, 55, 50].map((h, i) => (
                  <rect key={`green-${i}`} x={20 + i * 38} y={100 - h} width="12" height={h} fill="#10B981" />
                ))}
                {/* Yellow bars */}
                {[25, 50, 30, 45, 35, 50, 45].map((h, i) => (
                  <rect key={`yellow-${i}`} x={33 + i * 38} y={100 - h} width="12" height={h} fill="#FFB703" />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-header border-0 py-3 px-4 bg-white">
              <h5 className="mb-0 fw-bold">Top Products</h5>
            </div>
            <div className="card-body">
              {topProducts.map((product, i) => (
                <div key={i} className="mb-3">
                  <div className="d-flex justify-content-between mb-1 small">
                    <span className="text-muted">{product.name}</span>
                    <span className="fw-semibold">{product.percentage}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar" style={{ width: `${product.percentage}%`, background: '#6366F1' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
