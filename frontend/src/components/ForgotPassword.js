import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:9000/forgot-password', { email });
      setOtpSent(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to send OTP');
    }
  };

  return (
    <div>
      {otpSent ? (
        <Typography variant="body2" color="primary">An OTP has been sent to your email.</Typography>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="forgot-password-email"
            label="Email Address"
            name="forgotPasswordEmail"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Send OTP
          </Button>
        </form>
      )}
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </div>
  );
};

export default ForgotPassword;
