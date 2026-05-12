import UserTable from './UserTable'

export default function UserTableSection({ loading, error, users }) {
  return (
    <section className="card section-card shadow-sm h-100">
      <div className="card-header border-0 bg-white py-3">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <h3 className="mb-1">User table</h3>
            <p className="text-muted mb-0">Users loaded from the public API with search, sort, and filtering.</p>
          </div>
          <span className="badge bg-primary bg-opacity-10 text-primary py-2 px-3 rounded-pill">
            Live data
          </span>
        </div>
      </div>
      <div className="card-body p-0">
        <UserTable loading={loading} error={error} users={users} />
      </div>
    </section>
  )
}
