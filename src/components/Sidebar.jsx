export default function Sidebar({ activeSection = 'overview', collapsed = false, onNavigate, onToggle }) {
  const navItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'customers', label: 'Customers' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'reports', label: 'Reports' },
  ]

  return (
    <aside className={`sidebar d-flex flex-column p-4 text-white ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="mb-4 sidebar-brand">
        <button
          type="button"
          className="sidebar-logo-btn d-inline-flex align-items-center justify-content-center"
          onClick={onToggle}
          aria-label="Toggle sidebar"
          title="Click to collapse/expand"
        >
          AD
        </button>
        {!collapsed && (
          <div className="sidebar-brand-info">
            <h2 className="h5 text-white mb-1">Aforro</h2>
            <p className="text-white-50 small mb-0">Sales dashboard</p>
          </div>
        )}
      </div>

      <nav className="nav flex-column gap-2 mb-4">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`nav-link btn btn-link text-start d-flex align-items-center gap-3 ${activeSection === item.key ? 'active' : 'text-white-75'}`}
            onClick={() => onNavigate(item.key)}
            aria-label={item.label}
          >
            <span className="nav-icon">{item.label.charAt(0)}</span>
            <span className="nav-text">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer mt-auto pt-4 border-top border-white-10 text-white-50">
        {!collapsed && <p className="small mb-2">Need help with dashboard?</p>}
        <button type="button" className="btn btn-outline-light btn-sm">
          Support
        </button>
      </div>
    </aside>
  )
}
