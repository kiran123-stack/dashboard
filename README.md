#  Finance Tracker Dashboard (React + Vite)

This project is a modern **Finance Tracking Dashboard** built using **React, Vite, Tailwind CSS, Context API, and Recharts**.

It allows users to:

* Track income and expenses
* Visualize financial data using charts
* Filter and manage transactions
* Use role-based access (Admin / Viewer)

---

#  Why This Project?

Managing money manually is difficult.

This app solves that by:

* Showing clear financial summaries
* Providing visual insights (charts)
* Allowing easy add/edit/delete of transactions

---

#  Concept (Simple Explanation)

Think of this app like a **smart city**:

*  Data is stored in a warehouse
*  A central brain controls everything
*  Different buildings show different information
*  Accountants calculate totals
*  Designers format everything nicely

---

#  Project Structure

```bash
src/
│
├── data/                  #  Warehouse (initial data)
│   └── mockData.js
│
├── context/               # Global state (brain)
│   └── AppContext.jsx
│
├── utils/                 #  Logic layer
│   ├── calculations.js
│   └── formatters.js
│
├── components/            #  UI Modules
│   ├── dashboard/
│   │   ├── SummaryCards.jsx
│   │   ├── BalanceChart.jsx
│   │   ├── BarChartBox.jsx
│   │   └── PieChartBox.jsx
│   │
│   └── transactions/
│       ├── TransactionList.jsx
│       ├── TransactionFilters.jsx
│       └── AddTransactionModal.jsx
│
├── layout/
│   └── Layout.jsx
│
├── App.jsx
├── main.jsx
```

---

#  How Each Part Works

---

## 1. `mockData.js` (Data Layer)

### What it does:

Stores initial transaction data (income, expense, rent, etc.)

### Why used:

* Simulates a database
* Helps build UI before backend

---

##  2. `AppContext.jsx` (Global State)

### What it does:

* Stores transactions
* Handles add, edit, delete
* Manages user roles (Admin / Viewer)

### Why used:

* Avoids passing data manually (prop drilling)
* Enables real-time updates

---

##  3. `main.jsx` (App Entry)

### What it does:

Wraps entire app inside Context Provider

### Why used:

* Gives access to global data everywhere

---

##  4. `utils/` (Logic Layer)

---

### `calculations.js`

* Calculates total income
* Calculates total expense
* Calculates balance

 Keeps logic separate from UI

---

### `formatters.js`

* Converts numbers → ₹ currency
* Formats date

 Improves readability for users

---

## 5. `Layout.jsx` (UI Structure)

### What it does:

* Sidebar navigation
* Mobile responsive menu
* Topbar with role switch

### Why used:

* Provides consistent layout
* Improves user experience

---

# Dashboard Module

---

## `SummaryCards.jsx`

### Shows:

* Total Income
* Total Expense
* Balance
* Savings

### Why:

Gives quick overview of financial status

---

##  `BalanceChart.jsx`

### Shows:

* Income vs expense trend over time

### Why:

Helps analyze financial growth

---

##  `BarChartBox.jsx`

### Shows:

* Total income vs expense

### Why:

Quick comparison

---

##  `PieChartBox.jsx`

### Shows:

* Expense distribution by category

### Why:

Identifies spending habits

---

#  Transactions Module

---

##  `TransactionList.jsx`

### What it does:

* Displays all transactions
* Shows date, category, amount

### Why:

Core functionality of the app

---

##  `TransactionFilters.jsx`

### What it does:

* Search transactions
* Filter by type and category

### Why:

Improves usability

---

##  `AddTransactionModal.jsx`

### What it does:

* Add new transactions
* Edit existing ones

### Why:

Main interaction feature (CRUD)

---

#  Role-Based Access

###  Admin:

* Add transactions
* Edit transactions
* Delete transactions

### Viewer:

* Only view data

### Why:

* Simulates real-world permission systems
* Improves security

---

#  Data Flow (Very Important)

```bash
User Action → Component → Context → State Update → UI Update
```

Example:

* User adds transaction
* Context updates data
* UI updates automatically

---

#  UI/UX Design

* Mobile-first design
* Clean dashboard layout
* Color system:

  * 🟢 Income = Green
  * 🔴 Expense = Red
* Responsive grid system
* Modern card-based UI

---

# 📦 Technologies Used

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| React        | Frontend library            |
| Vite         | Fast development build tool |
| Tailwind CSS | Styling                     |
| Context API  | State management            |
| Recharts     | Data visualization          |

---

#  Features

* ✅ Add / Edit / Delete transactions
* ✅ Role-based access (Admin / Viewer)
* ✅ Real-time updates
* ✅ Charts (Line, Bar, Pie)
* ✅ Filters and search
* ✅ Responsive UI

---

#  Future Improvements

* Firebase backend integration
* Authentication system
* Dark mode
* Export reports (PDF/Excel)
* Notifications

---

# Conclusion

This project demonstrates:

* Clean and scalable architecture
* Separation of concerns
* Real-world dashboard functionality
* Modern frontend development practices

---

#  Author

**kiran **

---
