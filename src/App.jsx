import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import DashboardCharts from './components/DashboardCharts'
import FilterPanel from './components/FilterPanel'
import Sidebar from './components/Sidebar'
import SummaryCards from './components/SummaryCards'
import Topbar from './components/Topbar'
import UserTableSection from './components/UserTableSection'
import DashboardMain from './components/DashboardMain'
import {
  fetchUsers,
  selectCityOptions,
  selectError,
  selectFilteredUsers,
  selectLoading,
  selectSearchText,
  selectSelectedCity,
  selectSortDirection,
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

  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const filteredUsers = useSelector(selectFilteredUsers)
  const users = useSelector(selectUsers)
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
    }

    sectionMap[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
    // Auto-close sidebar on mobile after navigation
    if (window.innerWidth <= 991) {
      setSidebarCollapsed(false)
    }
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
          <Topbar onRefresh={handleRefresh} onToggleSidebar={handleToggleSidebar} />
          <SummaryCards />

          <div ref={customersRef} className="row gx-4 gy-4 mb-4" id="customers">
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

          <div ref={overviewRef} className="row gx-4 gy-4 mb-4" id="overview">
            <div className="col-12">
              <DashboardMain />
            </div>
          </div>

          <div ref={analyticsRef} className="row gx-4 gy-4 mt-4" id="analytics">
            <div className="col-12">
              <DashboardCharts users={users} />
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
