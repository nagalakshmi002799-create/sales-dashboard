
export default function FilterPanel({
  searchText,
  selectedCity,
  sortDirection,
  cityOptions,
  onSearchChange,
  onCityChange,
  onSortChange,
}) {
  return (
    <section className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row g-3 align-items-end">
          <div className="col-12 col-md-4">
            <label htmlFor="search" className="form-label">
              Search by name or email
            </label>
            <input
              id="search"
              type="search"
              className="form-control"
              placeholder="Search users..."
              value={searchText}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>

          <div className="col-12 col-md-4">
            <label htmlFor="city" className="form-label">
              Filter by city
            </label>
            <select
              id="city"
              className="form-select"
              value={selectedCity}
              onChange={(event) => onCityChange(event.target.value)}
            >
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label htmlFor="sort" className="form-label">
              Sort by name
            </label>
            <select
              id="sort"
              className="form-select"
              value={sortDirection}
              onChange={(event) => onSortChange(event.target.value)}
            >
              <option value="asc">Name A–Z</option>
              <option value="desc">Name Z–A</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
