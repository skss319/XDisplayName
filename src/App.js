import React, { useState } from 'react';
import './App.css';

const DisplayNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`Full Name: ${firstName} ${lastName}`);
      setFormError('');
    } else {
      setFullName('');
      setFormError('Please fill out both fields.');
    }
  };

  return (
    <div className="centered-form">
      <h2>Full Name Display</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Submit
        </button>

        {formError && <div className="error">{formError}</div>}
      </form>

      {fullName && (
        <div className="full-name">{fullName}</div>
      )}
    </div>
  );
};

export default DisplayNameForm;



