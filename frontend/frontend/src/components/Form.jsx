import React, { useState } from 'react';

const Form = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goals, setGoals] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ age, weight, height, goals });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#333', // Dark background
        color: '#f9f9f9', // Light text
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#bdc3c7' }}>
          Age:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #bdc3c7',
            borderRadius: '4px',
            fontSize: '1rem',
            color: '#f9f9f9',
            backgroundColor: '#444', // Dark input background
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#bdc3c7' }}>
          Weight (kg):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #bdc3c7',
            borderRadius: '4px',
            fontSize: '1rem',
            color: '#f9f9f9',
            backgroundColor: '#444', // Dark input background
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#bdc3c7' }}>
          Height (cm):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #bdc3c7',
            borderRadius: '4px',
            fontSize: '1rem',
            color: '#f9f9f9',
            backgroundColor: '#444', // Dark input background
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#bdc3c7' }}>
          Fitness Goals:
        </label>
        <textarea
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #bdc3c7',
            borderRadius: '4px',
            fontSize: '1rem',
            color: '#f9f9f9',
            backgroundColor: '#444', // Dark input background
            minHeight: '100px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#3498db',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#3498db')}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;