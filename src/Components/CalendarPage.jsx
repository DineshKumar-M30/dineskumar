import React, { useState, useMemo } from 'react';
import './CalendarPage.css';


const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

const markedDates = [
    { date: new Date(2025, 10, 20).toDateString(), type: 'event' },
    { date: new Date(2025, 11, 5).toDateString(), type: 'holiday' },
    { date: new Date(2025, 11, 25).toDateString(), type: 'event' },
];

function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 25)); 
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); 
    const monthName = currentDate.toLocaleString('default', { month: 'long' });

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getTime());
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getTime());
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const daysGrid = useMemo(() => {
        const totalDays = daysInMonth(year, month);
        const firstDay = firstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
        }

        // Add actual days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayDate = new Date(year, month, day);
            const today = new Date();
            today.setHours(0, 0, 0, 0); 
            dayDate.setHours(0, 0, 0, 0);

            const isToday = dayDate.getTime() === today.getTime();
            const dateKey = dayDate.toDateString();
            const markedDay = markedDates.find(d => d.date === dateKey);

            let dayClass = 'calendar-day';
            if (isToday) dayClass += ' is-today';
            if (markedDay) dayClass += ` marked ${markedDay.type}`;

            days.push(
                <button 
                    key={day} 
                    className={dayClass}
                    onClick={() => console.log(`Selected: ${dateKey}`)}
                >
                    {day}
                </button>
            );
        }

        return days;
    }, [year, month]);

    return (
        <div className="calendar-page-container">
            <div className="page-header">
                <h1>Calendar</h1>
            </div>

            <div className="calendar-full-card">
                <div className="calendar-controls-lg">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <h2 className="calendar-title-lg">
                        {monthName} {year}
                    </h2>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
                
                <div className="calendar-grid-lg">
                    {/* Day Names */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <span key={d} className="calendar-day-name-lg">{d}</span>
                    ))}
                    {/* Days Grid */}
                    {daysGrid}
                </div>

                <div className="calendar-legend-lg">
                    <h3>Key</h3>
                    <div className="legend-items">
                        <span className="legend-item event">School Event</span>
                        <span className="legend-item holiday">Holiday</span>
                        <span className="legend-item is-today">Today</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;