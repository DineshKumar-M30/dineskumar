// src/Components/TimeTablePage.jsx
import React from 'react';
import './TimeTablePage.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const periods = [
    { time: '09:30 - 10:30', name: 'P1' },
    { time: '10:30 - 11:30', name: 'P2' },
    { time: '11:30 - 12:45', name: 'Break' }, // Break period
    { time: '12:45 - 01:45', name: 'P3' },
    { time: '01:45 - 02:45', name: 'P4' },
    { time: '02:45 - 03:30', name: 'Lunch' }, // Lunch break
    { time: '03:30 - 04:30', name: 'P5' },
    { time: '04:30 - 05:30', name: 'P6' },
];

// Placeholder timetable data for Class 12-A
const timetableData = {
    'Monday': ['Maths', 'Physics', 'Break', 'Chemistry', 'English', 'Lunch', 'Maths Lab', 'Library'],
    'Tuesday': ['English', 'Tamil', 'Break', 'Maths', 'Physics', 'Lunch', 'CS', 'Chemistry'],
    'Wednesday': ['Physics', 'Chemistry', 'Break', 'Maths', 'English', 'Lunch', 'Tamil', 'CS Lab'],
    'Thursday': ['Tamil', 'English', 'Break', 'CS', 'Physics', 'Lunch', 'Maths', 'English'],
    'Friday': ['Maths', 'Physics', 'Break', 'Chemistry', 'Tamil', 'Lunch', 'P.E.', 'P.E.'],
    'Saturday': ['Maths', 'English', 'Break', 'Activity', 'Activity', 'Lunch', 'Self Study', 'Self Study'],
};


const teacherMapping = {
    'Maths': 'Mr. David Chen',
    'Physics': 'Dr. Evelyn Reed',
    'Chemistry': 'Dr. John Smith',
    'English': 'Ms. Sarah Ali',
    'Tamil': 'Mr. Kumar',
    'CS': 'Ms. Priya',
    'P.E.': 'Mr. Alex',
    'Library': 'Ms. Sarah Ali',
    'Maths Lab': 'Mr. David Chen',
    'CS Lab': 'Ms. Priya',
    'Activity': 'Ms. Chloe',
    'Self Study': '',
};


function TimeTablePage() {

    const renderCellContent = (subject) => {
        if (subject === 'Break' || subject === 'Lunch') {
            return <span>{subject}</span>;
        }
        
        const teacher = teacherMapping[subject] || 'N/A';
        
        return (
            <div className="class-period">
                <span className="class-subject">{subject}</span>
                <span className="class-teacher">{teacher}</span>
            </div>
        );
    }
    
    return (
        <div className="timetable-page-container">
            <div className="page-header">
                <h1>Time Table</h1>
            </div>

            <div className="timetable-card">
                <div className="timetable-controls">
                    <div className="filter-group">
                        <select defaultValue="12-A">
                            <option value="all">All Classes</option>
                            <option value="12-A">Class 12-A</option>
                            <option value="12-B">Class 12-B</option>
                            <option value="11-A">Class 11-A</option>
                            <option value="10-A">Class 10-A</option>
                        </select>
                        <select defaultValue="all">
                            <option value="all">All Teachers</option>
                            <option value="reed">Dr. Evelyn Reed</option>
                            <option value="chen">Mr. David Chen</option>
                        </select>
                    </div>
                    <button className="add-new-btn">Export Timetable</button>
                </div>

                <div className="timetable-table-wrapper">
                    <table className="timetable-table">
                        <thead>
                            <tr>
                                <th>Period / Time</th>
                                {periods.map((p, index) => (
                                    <th key={index}>{p.name} <br/> ({p.time.split(' - ')[0]})</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {days.map(day => (
                                <tr key={day}>
                                    <th>{day}</th>
                                    {timetableData[day].map((subject, index) => {
                                        const isBreak = subject === 'Break' || subject === 'Lunch';
                                        return (
                                            <td 
                                                key={`${day}-${index}`} 
                                                className={isBreak ? 'break-period' : ''}
                                                colSpan={subject === 'Lunch' ? 1: 1} 
                                            >
                                                {renderCellContent(subject)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TimeTablePage;