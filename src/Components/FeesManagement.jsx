import React from 'react';
import './FeesManagement.css'; 
import { useNavigate } from 'react-router-dom'; 

const feeData = [
    { id: '01', name: 'Sophia Wilson', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Pending' },
    { id: '02', name: 'James Carter', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '0', status: 'Paid' },
    { id: '03', name: 'Olivia Smith', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Overdue' },
    { id: '04', name: 'Ethan Hunt', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '0', status: 'Paid' },
    // Repeat for table length
    { id: '05', name: 'Marcus Lee', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Pending' },
    { id: '06', name: 'Ava Brown', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Pending' },
    { id: '07', name: 'Chloe Davis', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Pending' },
    { id: '08', name: 'Noah Evans', class: '12-A', tuition: '80,000', hostel: '15,000', transport: '15,000', dayBoarding: '20,000', total: '1,15,000', pending: '85,000', status: 'Pending' },
];


const monthlyCollection = [
    5000, 3500, 4200, 5500, 6800, 7500, 7000, 8500, 9200, 7800, 6500, 5800 
];
const maxCollection = 10000;


const FeeOverviewCard = ({ title, amount, percent }) => (
    <div className="overview-card">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="overview-title">{title}</span>
            <span style={{ fontSize: '10px', color: '#10b981' }}>▲ {percent}</span>
        </div>
        <strong>₹{amount}</strong>
        <div className="overview-progress">
            <div className="overview-progress-fill" style={{ width: percent, background: title.includes('Total') ? 'var(--accent)' : '#10b981' }} />
        </div>
    </div>
);


const renderFeesLineChart = () => {
    const width = 1000;
    const height = 200;
    const padding = 10;
    const chartHeight = height - 2 * padding;
    const linePoints = monthlyCollection.map((value, index) => {
        const x = (index / (monthlyCollection.length - 1)) * (width - 2 * padding) + padding;
        const y = height - ((value / maxCollection) * chartHeight + padding);
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
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="fees-chart-svg">

            {gridLines}
            
            <polyline
                fill="none"
                stroke="var(--accent)" 
                strokeWidth="4"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                points={linePoints}
            />
        </svg>
    );
};

function FeesManagement() {
    const navigate = useNavigate();

    const handleAction = (action, studentId) => {
        console.log(`${action} action triggered for student ID: ${studentId}`);
    }

    return (
        <div className="fees-management-container">
            <div className="page-header">
                <h1>Fees Management</h1>
            </div>

            <div className="fees-dashboard-grid">
                
                {/* LEFT COLUMN: Fees Collection Chart */}
                <div className="fees-collection-card">
                    <h2>Fees Collection</h2>
                    <div className="chart-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
                        <span>7,500</span>
                        <span>$152,827</span>
                    </div>
                
                    <div className="chart-area-wrapper">
                        {renderFeesLineChart()}
                        <div className="chart-x-labels">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                                <span key={m}>{m}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Fee Status & Fee Overview */}
                <div className="fees-summary-section">
                    
                    {/* Fee Status Card */}
                    <div className="fee-status-card">
                        <h3>
                            Fee Status
                            <select style={{fontSize: '11px', border: 'none', background: 'transparent', color: 'var(--text-muted)'}}>
                                <option>Monthly</option>
                            </select>
                        </h3>
                        <div className="status-list">
                            <div className="status-item paid">
                                <span>Paid</span>
                                <span>1,335</span>
                            </div>
                            <div className="status-item pending">
                                <span>Pending</span>
                                <span>4,366</span>
                            </div>
                            <div className="status-item overdue">
                                <span>Overdue</span>
                                <span>208</span>
                            </div>
                        </div>
                    </div>

                    {/* Fee Overview Cards */}
                    <div className="fee-overview-card">
                        <h3>Fee Overview</h3>
                        <div className="fee-overview-grid">
                            <FeeOverviewCard title="Total Amount" amount="3,500,000" percent="62%" />
                            <FeeOverviewCard title="Total Hostel" amount="1,200,000" percent="12%" />
                            <FeeOverviewCard title="Total Tuition" amount="2,000,000" percent="32%" />
                            <FeeOverviewCard title="Total Day-Boarding" amount="300,000" percent="4%" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Fees Collection Table */}
            <div className="fees-table-card">
                <h2>Fees Collection Table</h2>
                <div className="table-controls">
                    <div className="search-filter-group">
                        <span className="search-icon">🔍</span>
                        <input placeholder="Search by Subject" />
                    </div>
                    <div className="search-filter-group">
                        <select><option>Today</option></select>
                        <select><option>All Classes</option></select>
                        <select><option>All Status</option></select>
                    </div>
                </div>
                
                <div className="fees-table-wrapper">
                    <table className="fees-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Students</th>
                                <th>Class</th>
                                <th>Tution</th>
                                <th>Hostel</th>
                                <th>Transport</th>
                                <th>Day-Boarding</th>
                                <th>Total</th>
                                <th>Pending</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((f) => (
                                <tr key={f.id}>
                                    <td>{f.id}</td>
                                    <td className="student-name-cell">
                                        <div className="student-avatar">S</div>
                                        <span>{f.name}</span>
                                    </td>
                                    <td>{f.class}</td>
                                    <td>₹{f.tuition}</td>
                                    <td>₹{f.hostel}</td>
                                    <td>₹{f.transport}</td>
                                    <td>₹{f.dayBoarding}</td>
                                    <td>₹{f.total}</td>
                                    <td>₹{f.pending}</td>
                                    <td>
                                        <span className={`fee-status-pill ${f.status.toLowerCase()}`}>
                                            {f.status}
                                        </span>
                                    </td>
                                    <td className="action-btns">
                                        <button onClick={() => handleAction('Edit', f.id)}>✏️</button>
                                        <button onClick={() => handleAction('Delete', f.id)}>🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="fees-table-footer">
                    <span>Previous</span>
                    <span>Page 1 of 12</span>
                    <span>Next</span>
                </div>
            </div>
        </div>
    );
}

export default FeesManagement;