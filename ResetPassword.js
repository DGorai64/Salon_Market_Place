import React, { useState } from 'react';
import './ResetPass.css';
import barberToolsImg from './barber-tools.jpg';
import lockIconImg from './lock-icon.png';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Password reset successfully!');
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <div className="left-side">
        <img className="left-side-img" src={barberToolsImg} alt="Barber Tools" />
      </div>
      <div className="right-side">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="lock-icon">
          <img className="lock-icon-img" src={lockIconImg} alt="Lock Icon" />
        </div>
        <h1>Reset Password</h1>
        <p className="para">Your new password must be different from the previous password.</p>
        <form id="reset-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="Set new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
