export default function Topbar({ onRefresh, onToggleSidebar }) {
  return (
    <div className="topbar d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4">
      <div className="d-flex align-items-center gap-3">
        <button
          type="button"
          className="btn btn-link sidebar-toggle-btn d-none"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar menu"
          title="Toggle menu"
        >
          ☰
        </button>
        <div>
          <p className="text-uppercase text-muted mb-1 small">Dashboard</p>
          <h2 className="mb-0">Sales overview</h2>
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onRefresh}>
          Refresh data
        </button>
        <div className="profile-box d-flex align-items-center gap-2 px-3 py-2 rounded-3 border">
          <div className="profile-avatar rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
            A
          </div>
          <div>
            <div className="fw-semibold">Admin</div>
            <small className="text-muted">Sales manager</small>
          </div>
        </div>
      </div>
    </div>
  )
}
