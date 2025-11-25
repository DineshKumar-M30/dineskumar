// src/Components/StudentsList.jsx
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './StudentsList.css';

const initialStudents = [
  { id: '1', name: 'Sophia Wilson', roll: '522bcs009', class: '12-A', accom: 'Hosteller', transport: 'No', location: 'Singanallur', contact: '82486 69086', points: '28800' },
  { id: '2', name: 'James Carter', roll: '522bcs010', class: '12-A', accom: 'Day Scholar', transport: 'Yes', location: 'Gandhipuram', contact: '98765 43210', points: '25000' },
  { id: '3', name: 'Olivia Smith', roll: '522bcs011', class: '11-B', accom: 'Hosteller', transport: 'No', location: 'Ramanathapuram', contact: '90000 11111', points: '31000' },

];

function StudentsList() {
  const [students, setStudents] = useState(initialStudents);
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/students/add');
  };

  const handleEdit = (studentId) => {
    console.log(`Edit student with ID: ${studentId}`);

  };

  const handleDelete = (studentId) => {
    if(window.confirm(`Are you sure you want to delete student with ID ${studentId}?`)) {
        setStudents(prevStudents => prevStudents.filter(s => s.id !== studentId));
    }
  };

  return (
    <div className="students-list-container">
      <div className="list-header">
        <h2>Students</h2>
        <button className="add-new-btn" onClick={handleAddNew}>+ Add New</button>
      </div>

      <div className="all-students-list-card">
        <div className="list-controls">
          <span className="list-title">All Students List</span>
          <div className="search-and-filter">
            <div className="search-box-sm">
              <span className="search-icon">🔍</span>
              <input placeholder="Search by Name or Roll" />
            </div>
            <select>
              <option>All Classes</option>
            </select>
          </div>
        </div>

        <div className="students-table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Students</th>
                <th>Roll num</th>
                <th>Class</th>
                <th>Accom_Type</th>
                <th>Transport</th>
                <th>Location</th>
                <th>Contact</th>
                <th>Rank</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={index}>
                  <td>{s.id}</td>
                  <td className="student-name-cell">
                    <div className="student-avatar">S</div>
                    <span>{s.name}</span>
                  </td>
                  <td>{s.roll}</td>
                  <td>{s.class}</td>
                  <td>{s.accom}</td>
                  <td>{s.transport}</td>
                  <td>{s.location}</td>
                  <td>{s.contact}</td>
                  <td>-</td> 
                  <td>{s.points}</td>
                  <td className="actions-cell">
                    <button className="table-icon-btn" onClick={() => handleEdit(s.id)}>📝</button>
                    <button className="table-icon-btn" onClick={() => handleDelete(s.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="list-footer">
            <span>Previous</span>
            <span>Page 1 of 12</span>
            <span>Next</span>
        </div>
      </div>
    </div>
  );
}

export default StudentsList;