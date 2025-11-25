import React from 'react';
import './SchoolExpenses.css'; 
import { useNavigate } from 'react-router-dom';


const monthlyExpenditure = [
    7500, 6800, 7200, 8000, 9500, 8800, 9000, 7900, 7000, 6500, 5800, 5000 
];
const maxExpenditure = 10000;

const expenseItems = [
    { id: '001', vendor: 'ABC Services', category: 'Maintenance', amount: '15,000', date: '2025-11-20', status: 'Paid', budget: '15,000' },
    { id: '002', vendor: 'Staff Payroll', category: 'Salaries', amount: '80,000', date: '2025-11-25', status: 'Pending Payment', budget: '80,000' },
    { id: '003', vendor: 'Electric Co.', category: 'Utilities', amount: '12,500', date: '2025-11-15', status: 'Over Budget', budget: '10,000' },
    { id: '004', vendor: 'Book Suppliers', category: 'Resources', amount: '5,000', date: '2025-11-01', status: 'Paid', budget: '6,000' },
];


const ExpenseOverviewCard = ({ title, amount, percent }) => (
    <div className="overview-card">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="overview-title">{title}</span>
            <span style={{ fontSize: '10px', color: '#dc2626' }}>▼ {percent}</span> 
        </div>
        <strong>₹{amount}</strong>
        <div className="overview-progress">
            <div className="overview-progress-fill" style={{ width: percent, background: title.includes('Total') ? 'var(--danger)' : '#dc2626' }} />
        </div>
    </div>
);


const renderExpensesLineChart = () => {
    const width = 1000;
    const height = 200;
    const padding = 10;
    const chartHeight = height - 2 * padding;

    const linePoints = monthlyExpenditure.map((value, index) => {
        const x = (index / (monthlyExpenditure.length - 1)) * (width - 2 * padding) + padding;
        const y = height - ((value / maxExpenditure) * chartHeight + padding);
        return `${x},${y}`;
    }).join(" ");

    const gridLines = [25, 50, 75].map((percent, index) => {
        const y = height - (percent / 100) * chartHeight - padding;
        return (
            <line 
                key={index} 
                x1="0" 
                y1={y} 
                x2={width} 
                y2={y} 
                stroke="#e3e5f0" 
                strokeWidth="1" 
                strokeDasharray="5,5" 
            />
        );
    });
    
    return (
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="expenses-chart-svg">
            {gridLines}
            <polyline
                fill="none"
                stroke="var(--danger)" 
                strokeWidth="4"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                points={linePoints}
            />
        </svg>
    );
};

function SchoolExpenses() {
    const navigate = useNavigate();

    const handleAction = (action, itemId) => {
        console.log(`${action} action triggered for expense ID: ${itemId}`);
    }

    const getStatusClass = (status) => {
        if (status === 'Paid') return 'paid';
        if (status === 'Pending Payment') return 'pending-payment';
        return 'overbudget';
    }

    return (
        <div className="expenses-management-container">
            <div className="page-header">
                <h1>School Expenses</h1>
            </div>

            <div className="expenses-dashboard-grid">
                
                {/* LEFT COLUMN: Expenses Collection Chart */}
                <div className="expenses-collection-card">
                    <h2>Monthly Expenditure</h2>
                    <div className="chart-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                        <span>Avg. ₹7,000</span>
                        <span>Total ₹18,500,000</span>
                    </div>
                    
                    <div className="chart-area-wrapper">
                        {renderExpensesLineChart()}
                        <div className="chart-x-labels">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                                <span key={m}>{m}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Expense Status & Expense Overview */}
                <div className="expenses-summary-section">
                    
                    {/* Expense Status Card */}
                    <div className="expense-status-card">
                        <h3>
                            Payment Status
                            <select style={{fontSize: '11px', border: 'none', background: 'transparent', color: 'var(--text-muted)'}}>
                                <option>Monthly</option>
                            </select>
                        </h3>
                        <div className="status-list">
                            <div className="status-item paid">
                                <span>Paid</span>
                                <span>158</span>
                            </div>
                            <div className="status-item pending-payment">
                                <span>Pending Payment</span>
                                <span>15</span>
                            </div>
                            <div className="status-item overbudget">
                                <span>Over Budget</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Expense Overview Cards */}
                    <div className="fee-overview-card">
                        <h3>Budget Overview</h3>
                        <div className="expense-overview-grid">
                            <ExpenseOverviewCard title="Total Spent" amount="3,500,000" percent="92%" />
                            <ExpenseOverviewCard title="Salaries" amount="2,000,000" percent="60%" />
                            <ExpenseOverviewCard title="Utilities" amount="500,000" percent="15%" />
                            <ExpenseOverviewCard title="Maintenance" amount="300,000" percent="10%" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Expenses Collection Table */}
            <div className="expenses-table-card">
                <h2>Recent Expenditures</h2>
                <div className="table-controls">
                    <div className="search-filter-group">
                        <span className="search-icon">🔍</span>
                        <input placeholder="Search by Vendor or Category" />
                    </div>
                    <div className="search-filter-group">
                        <select><option>This Month</option></select>
                        <select><option>All Categories</option></select>
                        <select><option>All Status</option></select>
                    </div>
                </div>
                
                <div className="expenses-table-wrapper">
                    <table className="expenses-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Vendor</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Budget</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseItems.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.vendor}</td>
                                    <td>{e.category}</td>
                                    <td>₹{e.amount}</td>
                                    <td>₹{e.budget}</td>
                                    <td>{e.date}</td>
                                    <td>
                                        <span className={`expenses-status-pill ${getStatusClass(e.status)}`}>
                                            {e.status}
                                        </span>
                                    </td>
                                    <td className="action-btns">
                                        <button onClick={() => handleAction('Edit', e.id)}>✏️</button>
                                        <button onClick={() => handleAction('Delete', e.id)}>🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="expenses-table-footer">
                    <span>Previous</span>
                    <span>Page 1 of 4</span>
                    <span>Next</span>
                </div>
            </div>
        </div>
    );
}

export default SchoolExpenses;