import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import DashboardHeader from './components/DashboardHeader'
import FilterPanel from './components/FilterPanel'
import PerformancePanel from './components/PerformancePanel'
import Sidebar from './components/Sidebar'
import SummaryCards from './components/SummaryCards'
import Topbar from './components/Topbar'
import UserTableSection from './components/UserTableSection'
import {
  fetchUsers,
  selectCityOptions,
  selectError,
  selectFilteredUsers,
  selectLoading,
  selectSearchText,
  selectSelectedCity,
  selectSortDirection,
  selectSummary,
  setSearchText,
  setSelectedCity,
  setSortDirection,
} from './store/usersSlice'

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const filteredUsers = useSelector(selectFilteredUsers)
  const summary = useSelector(selectSummary)
  const cityOptions = useSelector(selectCityOptions)
  const searchText = useSelector(selectSearchText)
  const selectedCity = useSelector(selectSelectedCity)
  const sortDirection = useSelector(selectSortDirection)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleRefresh = () => {
    dispatch(fetchUsers())
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <div className="container-fluid px-0">
          <Topbar onRefresh={handleRefresh} />

          <div className="dashboard-hero row gx-4 gy-4 mb-4">
            <div className="col-12 col-xl-7">
              <DashboardHeader
                title="Sales Dashboard"
                description="Monitor user growth, city filters, and customer performance with Redux-managed data."
              />
            </div>
            <div className="col-12 col-xl-5">
              <section className="card banner-card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <p className="text-uppercase text-muted mb-1 small">Revenue</p>
                      <h3 className="mb-0">$34,500</h3>
                    </div>
                    <span className="badge bg-success bg-opacity-10 text-success py-2 px-3 rounded-pill">
                      +12.4%
                    </span>
                  </div>
                  <p className="text-muted mb-4">
                    Revenue performance this week across all active user accounts and customer segments.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <div className="small-panel p-3 rounded-3 bg-light">
                      <p className="text-muted small mb-2">New users</p>
                      <strong>32</strong>
                    </div>
                    <div className="small-panel p-3 rounded-3 bg-light">
                      <p className="text-muted small mb-2">Open orders</p>
                      <strong>18</strong>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <SummaryCards summary={summary} />

          <div className="row gx-4 gy-4">
            <div className="col-12">
              <FilterPanel
                searchText={searchText}
                selectedCity={selectedCity}
                sortDirection={sortDirection}
                cityOptions={cityOptions}
                onSearchChange={(value) => dispatch(setSearchText(value))}
                onCityChange={(value) => dispatch(setSelectedCity(value))}
                onSortChange={(value) => dispatch(setSortDirection(value))}
              />
            </div>

            <div className="col-xl-8">
              <UserTableSection loading={loading} error={error} users={filteredUsers} />
            </div>
            <div className="col-xl-4">
              <PerformancePanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
