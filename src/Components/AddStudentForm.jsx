import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudentForm.css";

const FormInput = ({ label, placeholder, type = "text" }) => (
  <div className="form-field">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

function AddStudentForm() {
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState("Day Scholler");
  const [transport, setTransport] = useState("Transport");

  const handleCancel = () => {
    navigate("/students");
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving new student...");
    navigate("/students");
  };
  
  const handleReset = () => {
      console.log("Form reset.");
  }

  return (
    <div className="add-student-container">
      <div className="add-student-header">
        <h1>Add New Student</h1>
        <div className="header-actions">
          <button className="cancel-btn" onClick={handleCancel}>cancel</button>
          <button className="reset-btn" onClick={handleReset}>reset</button>
          <button className="save-btn" onClick={handleSave}>save</button>
        </div>
      </div>

      <form onSubmit={handleSave} className="add-student-grid">
        <div className="form-column-left">
          <div className="form-card">
            <h3>Basic Information</h3>
            <div className="form-row">
              <FormInput label="First Name" placeholder="First Name" />
              <FormInput label="Last Name" placeholder="Last Name" />
            </div>
            <div className="form-row" style={{ alignItems: "center" }}>
              <div className="form-field" style={{ flex: 1 }}>
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" defaultChecked /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" /> female
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row">
              <FormInput label="Date of Birth" placeholder="dd/mm/yyyy" />
              <div className="form-field" style={{ flex: 1, flexDirection: 'row', gap: '5px' }}>
                <div className="form-field" style={{ flex: 1 }}>
                    <label>Class</label>
                    <select><option>Class</option></select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                    <label>Section</label>
                    <select><option>Section</option></select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Parent Details */}
          <div className="form-card">
            <h3>Parent Details</h3>
            <div className="form-row">
              <FormInput label="Father Name" placeholder="First Name" />
              <FormInput label="Mother Name" placeholder="First Name" />
            </div>
            <div className="form-row">
              <FormInput label="Father Contact" placeholder="Contact" />
              <FormInput label="Mother Contact" placeholder="Contact" />
            </div>
            <div className="form-row">
              <FormInput label="Father Occupation" placeholder="Ex: Business" />
              <FormInput label="Annual Income" placeholder="1,00,000" />
            </div>
          </div>
        </div>

        <div className="form-column-right">
            <div className="form-card">
                <h3>Login/Account Details</h3>
                <div className="form-row">
                    <FormInput label="User Name" placeholder="User Name" />
                    <FormInput label="Password" placeholder="Password" type="password" />
                </div>
                <div className="file-upload-box">
                    <div className="file-icon">📄</div>
                    <span>Drop your files to upload</span>
                    <button type="button">Select files</button>
                </div>
            </div>

            <div className="form-card">
                <h3>Contact Information</h3>
                <div className="form-row">
                    <FormInput label="Phone" placeholder="Contact number" />
                    <FormInput label="Email" placeholder="example@gmail.com" type="email" />
                </div>
                <div className="form-field">
                    <label>Address</label>
                    <input placeholder="Area and Street" />
                </div>
                <div className="form-row" style={{ marginTop: '15px' }}>
                    <FormInput label="Location" placeholder="Location" />
                    <FormInput label="District" placeholder="District" />
                </div>
                <div className="form-row">
                    <FormInput label="Pincode" placeholder="Pincode" />
                    <FormInput label="State" placeholder="State" />
                </div>
            </div>

            <div className="form-card">
                <h3>Additional Information</h3>
                <div className="info-chips">
                    {["Day Scholler", "Hosteller"].map((item) => (
                        <div
                            key={item}
                            className={`info-chip ${accommodation === item ? "active" : ""}`}
                            onClick={() => setAccommodation(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="info-chips" style={{ marginTop: '10px' }}>
                    {["Transport", "Non Transport"].map((item) => (
                        <div
                            key={item}
                            className={`info-chip ${transport === item ? "active" : ""}`}
                            onClick={() => setTransport(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;