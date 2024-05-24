import React, { useState } from 'react';

const AdminLogin = () => {
  // State variables to store email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Dummy email and password for demonstration
    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password';

    // Check if email and password match the dummy values
    if (email === dummyEmail && password === dummyPassword) {
      // Successful login
      // Redirect to another page
      window.location.href = '/adminhome';
    } else {
      // Failed login attempt
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
