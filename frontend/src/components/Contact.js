import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body1" paragraph>
        Let's connect on LinkedIn:
      </Typography>
      <a
        href="https://www.linkedin.com/in/umesh-chandra-37219828b/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <LinkedInIcon fontSize="large" color="primary" style={{ margin: '0 10px' }} />
      </a>

      <Typography variant="body1" paragraph style={{ marginTop: '20px' }}>
        Reach out via email:
      </Typography>
      <a href="mailto:your.email@example.com" style={{ textDecoration: 'none' }}>
        <EmailIcon fontSize="large" color="secondary" style={{ margin: '0 10px' }} />
      </a>
    </div>
  );
};

export default Contact;
