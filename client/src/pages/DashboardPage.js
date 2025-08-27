import React, { useState, useEffect } from 'react';
import { checkPasswordStrength } from '../services/api';
import {
  Typography,
  Box,
  TextField,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// Helper to determine progress bar color
const getStrengthColor = (strength) => {
  switch (strength) {
    case 'Weak':
      return 'error';
    case 'Medium':
      return 'warning';
    case 'Strong':
    case 'Very Strong':
      return 'success';
    default:
      return 'grey';
  }
};

const DashboardPage = () => {
  const [password, setPassword] = useState('');
  const [strengthResult, setStrengthResult] = useState(null);

  useEffect(() => {
    if (password) {
      const analyzePassword = async () => {
        try {
          const response = await checkPasswordStrength(password);
          setStrengthResult(response.data);
        } catch (error) {
          console.error('Error analyzing password:', error);
          setStrengthResult(null);
        }
      };
      analyzePassword();
    } else {
      setStrengthResult(null);
    }
  }, [password]);

  const score = strengthResult ? strengthResult.score : 0;
  const strength = strengthResult ? strengthResult.strength : '';
  const crackTime = strengthResult ? strengthResult.crackTime : '';

  return (
    <Box sx={{ mt: 4, py: 4, px: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Password Strength Analyzer
      </Typography>
      <TextField
        fullWidth
        type="password"
        label="Enter a password to analyze"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />
      
      {strengthResult && (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={score * 10}
                        color={getStrengthColor(strength)}
                        sx={{ height: 10, borderRadius: 5 }}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${score}/10`}</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" color={`${getStrengthColor(strength)}.main`}>
                    {strength}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Time to crack: <strong>{crackTime}</strong>
                </Typography>
            </Box>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>Feedback:</Typography>
          <List dense>
            {strength === 'Weak' || strength === 'Medium' ? (
              strengthResult.feedback.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CancelIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={strengthResult.feedback[0] || "Your password looks great!"} />
              </ListItem>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default DashboardPage;