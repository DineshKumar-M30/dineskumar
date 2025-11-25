// src/Components/TeachersList.jsx
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './TeachersList.css';

const initialTeachers = [
  { id: '101', name: 'Dr. Evelyn Reed', subject: 'Physics', classes: '11-B, 12-A', email: 'evelyn@smansys.edu', status: 'Active', contact: '99912 34567' },
  { id: '102', name: 'Mr. David Chen', subject: 'Maths', classes: '10-C, 12-B', email: 'david@smansys.edu', status: 'Active', contact: '98765 43210' },
  { id: '103', name: 'Ms. Sarah Ali', subject: 'English', classes: '9-A, 11-B', email: 'sarah@smansys.edu', status: 'On Leave', contact: '90000 11111' },
  { id: '104', name: 'Dr. John Smith', subject: 'Chemistry', classes: '12-A, 11-A', email: 'john@smansys.edu', status: 'Active', contact: '80000 22222' },
  // Add more entries as needed
];

function TeachersList() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const navigate = useNavigate();


  const handleAddNew = () => {
    console.log("Navigate to Add New Teacher form");

  };

  const handleEdit = (teacherId) => {
    console.log(`Edit teacher with ID: ${teacherId}`);
  };

  const handleDelete = (teacherId) => {
    if(window.confirm(`Are you sure you want to delete teacher with ID ${teacherId}?`)) {
        setTeachers(prevTeachers => prevTeachers.filter(t => t.id !== teacherId));
    }
  };
  
  return (
    <div className="teachers-list-container">
      <div className="list-header">
        <h2>Teachers</h2>
        <button className="add-new-btn" onClick={handleAddNew}>+ Add New</button>
      </div>

      <div className="all-teachers-list-card">
        <div className="list-controls">
          <span className="list-title">All Teachers List</span>
          <div className="search-and-filter">
            <div className="search-box-sm">
              <span className="search-icon">🔍</span>
              <input placeholder="Search by Name or Subject" />
            </div>
            <select>
              <option>All Subjects</option>
            </select>
          </div>
        </div>

        <div className="teachers-table-wrapper">
          <table className="teachers-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Teacher</th>
                <th>Subject</th>
                <th>Classes</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td className="teacher-name-cell">
                    <div className="teacher-avatar">{t.name[0]}</div>
                    <span>{t.name}</span>
                  </td>
                  <td>{t.subject}</td>
                  <td>{t.classes}</td>
                  <td>{t.email}</td>
                  <td>{t.contact}</td>
                  <td>{t.status}</td>
                  <td className="actions-cell">
                    <button className="table-icon-btn" onClick={() => handleEdit(t.id)}>📝</button>
                    <button className="table-icon-btn" onClick={() => handleDelete(t.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="list-footer">
            <span>Previous</span>
            <span>Page 1 of {Math.ceil(teachers.length / 10) || 1}</span>
            <span>Next</span>
        </div>
      </div>
    </div>
  );
}

export default TeachersList;