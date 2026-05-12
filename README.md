# Sales Dashboard

A React dashboard implemented with Bootstrap using data from the JSONPlaceholder API.

## Features

- Responsive dashboard layout built with Bootstrap
- User table with columns: Name, Email, Company, City
- Search by name or email
- Sort users by name A–Z or Z–A
- Filter users by city
- Loading and error states handled gracefully

## Setup

1. Install packages:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Notes

- Data is fetched from `https://jsonplaceholder.typicode.com/users`
- The project uses React functional components, Redux state management, and Bootstrap styling
- The app is organized with reusable components, a Redux store, and a sidebar dashboard layout
- The UI is designed to reflect the dashboard structure requested in the assignment
