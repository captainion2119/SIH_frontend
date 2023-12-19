import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ChinMudra from '../assets/Chin-mudra.gif';
import ApanaMudra from '../assets/Apana-mudra.gif';
import PranaMudra from '../assets/Prana-mudra.gif';

import GetHospitle from '../components/GetHospitle';

const Anxietysol = ({ anxietyLevel }) => {
  const [mudra, setMudra] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Determine which mudra to show based on anxiety level
        if (anxietyLevel <= 40) {
          setMudra('ChinMudra');
        } else if (anxietyLevel <= 60) {
          setMudra('ApanaMudra');
        } else if (anxietyLevel < 90) {
          setMudra('PranaMudra');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [anxietyLevel]);

  const mudraInstructions = {
    ChinMudra: [
      "->MILD ANXIETY",
      "CHIN MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight and your hands resting on your knees.",
      "• Step 2: Join the tip of your thumb with the tip of your index finger, forming a circle.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      " ",
      "Fact: Chin Mudra can help calm the mind and improve concentration.",
      " ",
    ],
    ApanaMudra: [
      "->MODERATE ANXIETY",
      "APANA MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight.",
      "• Step 2: Join the tips of your middle finger and ring finger to the tip of your thumb, while keeping the other two fingers extended.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      " ",
      "Fact: Apana Mudra can help alleviate anxiety and promote a sense of balance.",
      " ",
    ],
    PranaMudra: [
      "->SEVERE ANXIETY",
      "PRANA MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight.",
      "• Step 2: Touch the tips of your ring finger and little finger to the tip of your thumb, while keeping the other two fingers extended.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      " ",
      "Fact: Prana Mudra is associated with vital life force energy.",
      " ",
    ],
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '2rem',
      }}
    >
      {mudra && (
        <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h5">You have {anxietyLevel}% of anxiety</Typography>
          <img
            src={mudra === 'ChinMudra' ? ChinMudra : mudra === 'ApanaMudra' ? ApanaMudra : PranaMudra}
            alt="Mudra"
          />

          <Typography component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
            {mudraInstructions[mudra].map((instruction, idx) => (
              <li key={idx}>
                <Typography component="span">{instruction}</Typography>
              </li>
            ))}
          </Typography>
        </Paper>
      )}

      {anxietyLevel > 90 ? (
        <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h6" color="error">
            EXTREME ANXIETY
          </Typography>
          <Typography>
            <strong>EMERGENCY HELPLINE:</strong> Toll-Free Mental Health Rehabilitation Helpline Kiran:
            1800-599-0019
          </Typography>

          <GetHospitle keywords={'mental healthcare,anxiety'} />
        </Paper>
      ) : (
        <Typography>No emergency at the moment.</Typography>
      )}
    </Box>
  );
};

export default Anxietysol;
