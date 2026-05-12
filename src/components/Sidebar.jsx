export default function Sidebar() {
  const navItems = ['Overview', 'Customers', 'Analytics', 'Reports', 'Settings']

  return (
    <aside className="sidebar d-flex flex-column p-4 text-white">
      <div className="sidebar-brand mb-4">
        <div className="sidebar-logo d-inline-flex align-items-center justify-content-center mb-3">AD</div>
        <div>
          <h2 className="h5 text-white mb-1">Aforro</h2>
          <p className="text-white-50 small mb-0">Sales dashboard</p>
        </div>
      </div>

      <nav className="nav flex-column gap-2 mb-4">
        {navItems.map((item) => (
          <button key={item} type="button" className="nav-link btn btn-link text-start text-white fw-semibold">
            {item}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer mt-auto pt-4 border-top border-white-10 text-white-50">
        <p className="small mb-2">Need help with dashboard?</p>
        <button type="button" className="btn btn-outline-light btn-sm">
          Support
        </button>
      </div>
    </aside>
  )
}
