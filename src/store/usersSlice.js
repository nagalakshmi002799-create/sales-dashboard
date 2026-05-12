import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error(`Unable to load data (${response.status})`)
  }

  return response.json()
})

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchText: '',
  selectedCity: 'All',
  sortDirection: 'asc',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload
    },
    setSortDirection(state, action) {
      state.sortDirection = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Unable to load users'
      })
  },
})

export const { setSearchText, setSelectedCity, setSortDirection } = usersSlice.actions

const selectUsersState = (state) => state.users

export const selectUsers = createSelector([selectUsersState], (usersState) => usersState.users)
export const selectLoading = createSelector([selectUsersState], (usersState) => usersState.loading)
export const selectError = createSelector([selectUsersState], (usersState) => usersState.error)
export const selectSearchText = createSelector([selectUsersState], (usersState) => usersState.searchText)
export const selectSelectedCity = createSelector([selectUsersState], (usersState) => usersState.selectedCity)
export const selectSortDirection = createSelector([selectUsersState], (usersState) => usersState.sortDirection)

export const selectCityOptions = createSelector([selectUsers], (users) => {
  const cities = Array.from(new Set(users.map((user) => user.address.city))).sort()
  return ['All', ...cities]
})

export const selectFilteredUsers = createSelector(
  [selectUsers, selectSearchText, selectSelectedCity, selectSortDirection],
  (users, searchText, selectedCity, sortDirection) => {
    const query = searchText.trim().toLowerCase()

    return users
      .filter((user) => {
        const matchesSearch =
          query === '' ||
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        const matchesCity = selectedCity === 'All' || user.address.city === selectedCity
        return matchesSearch && matchesCity
      })
      .sort((a, b) => {
        if (a.name === b.name) return 0
        return sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      })
  },
)

export const selectSummary = createSelector([selectUsers, selectCityOptions], (users, cityOptions) => ({
  totalUsers: users.length,
  totalCities: cityOptions.length - 1,
  totalCompanies: new Set(users.map((user) => user.company.name)).size,
  activeUsers: users.length,
}))

export default usersSlice.reducer
