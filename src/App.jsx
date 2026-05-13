import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRefresh = () => {
    dispatch(fetchUsers())
  }

  const handleToggleSidebar = () => {
    setSidebarCollapsed((current) => !current)
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
      <Sidebar
        activeSection={activeSection}
        collapsed={sidebarCollapsed}
        onNavigate={handleNavigate}
        onToggle={handleToggleSidebar}
      />
      <main className="main-content">
        <div className="container-fluid px-0">
          <Topbar onRefresh={handleRefresh} />



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

        {showBackToTop && (
          <button
            type="button"
            className="back-to-top btn btn-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </button>
        )}
      </main>
    </div>
  )
}

export default App
