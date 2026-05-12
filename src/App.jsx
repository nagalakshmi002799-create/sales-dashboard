import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import DashboardHeader from './components/DashboardHeader'
import DashboardCharts from './components/DashboardCharts'
import FilterPanel from './components/FilterPanel'
import PerformancePanel from './components/PerformancePanel'
import ReportsPanel from './components/ReportsPanel'
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
  selectUsers,
  setSearchText,
  setSelectedCity,
  setSortDirection,
} from './store/usersSlice'

function App() {
  const dispatch = useDispatch()
  const [activeSection, setActiveSection] = useState('overview')
  const overviewRef = useRef(null)
  const customersRef = useRef(null)
  const analyticsRef = useRef(null)
  const reportsRef = useRef(null)

  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const filteredUsers = useSelector(selectFilteredUsers)
  const users = useSelector(selectUsers)
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

  const handleNavigate = (section) => {
    setActiveSection(section)
    const sectionMap = {
      overview: overviewRef,
      customers: customersRef,
      analytics: analyticsRef,
      reports: reportsRef,
    }

    sectionMap[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="main-content">
        <div className="container-fluid px-0">
          <Topbar onRefresh={handleRefresh} />

          <div ref={overviewRef} className="dashboard-hero row gx-4 gy-4 mb-4" id="overview">
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
                    <div className="small-panel p-3 rounded-3 bg-light w-100">
                      <p className="text-muted small mb-2">New users</p>
                      <strong>32</strong>
                    </div>
                    <div className="small-panel p-3 rounded-3 bg-light w-100">
                      <p className="text-muted small mb-2">Open orders</p>
                      <strong>18</strong>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <SummaryCards summary={summary} />

          <div ref={customersRef} className="row gx-4 gy-4" id="customers">
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
            <div className="col-12">
              <UserTableSection loading={loading} error={error} users={filteredUsers} />
            </div>
          </div>

          <div ref={analyticsRef} className="row gx-4 gy-4 mt-4" id="analytics">
            <div className="col-12 col-xl-8">
              <DashboardCharts users={users} />
            </div>
            <div className="col-12 col-xl-4">
              <PerformancePanel />
            </div>
          </div>

          <div ref={reportsRef} className="row gx-4 gy-4 mt-4" id="reports">
            <div className="col-12">
              <ReportsPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
