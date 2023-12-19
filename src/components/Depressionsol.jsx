import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GetHospitle from '../components/GetHospitle';
import ChinMudra from '../assets/Chin-mudra.gif';
import AnjaliMudra from '../assets/Anjali-mudra.gif';
import PranaMudra from '../assets/Prana-mudra.gif';

const Depressionsol = ({ depressionLevel }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [healthcareCenters, setHealthcareCenters] = useState([]);
  const [mudra, setMudra] = useState(null);
  depressionLevel = parseFloat(depressionLevel);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Determine which mudra to show based on depression level
        if (depressionLevel <= 40) {
          setMudra('ChinMudra');
        } else if (depressionLevel <= 60) {
          setMudra('AnjaliMudra');
        } else if (depressionLevel < 90) {
          setMudra('PranaMudra');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [depressionLevel, userLocation]);

  const mudraInstructions = {
    ChinMudra: [
      "->MILD DEPRESSION",
      "CHIN MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight and your hands resting on your knees.",
      "• Step 2: Join the tip of your thumb with the tip of your index finger, forming a circle.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      "Fact: Chin Mudra can help calm the mind and improve concentration.",
    ],
    AnjaliMudra: [
      "->MODERATE DEPRESSION",
      "ANJALI MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight.",
      "• Step 2: Bring your palms together in front of your chest, fingers pointing upward.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      "Fact: Anjali Mudra represents gratitude and balance.",
    ],
    PranaMudra: [
      "->SEVERE DEPRESSION",
      "PRANA MUDRA INSTRUCTIONS",
      "• Step 1: Sit comfortably with your back straight.",
      "• Step 2: Touch the tips of your ring finger and little finger to the tip of your thumb, while keeping the other two fingers extended.",
      "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.",
      "• Practice this mudra for a minimum of 20 minutes.",
      "Fact: Prana Mudra is associated with vital life force energy.",
    ],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
    >
      <Paper elevation={3} p={4} mb={4}>
        <Typography variant="h5">You have {depressionLevel}% of depression</Typography>
        {mudra && (
          <Box mt={2}>
            <img src={mudra === 'ChinMudra' ? ChinMudra : mudra === 'AnjaliMudra' ? AnjaliMudra : PranaMudra} alt="Mudra" />
            <ul>
              {mudraInstructions[mudra].map((instruction, idx) => (
                <Typography key={idx} component="li">
                  {instruction}
                </Typography>
              ))}
            </ul>
          </Box>
        )}
        {depressionLevel > 90 ? (
          <Box mt={2}>
            <Typography variant="subtitle1">
              <strong>EXTREME DEPRESSION</strong>
            </Typography>
            <Typography variant="subtitle1">
              <strong>EMERGENCY HELPLINE:</strong> Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019
            </Typography>
            <GetHospitle keywords="mental healthcare,depression" />
          </Box>
        ) : (
          <Typography>No emergency at the moment.</Typography>
        )}
        {!mudra && <Typography>You don't have depression</Typography>}
      </Paper>
    </Box>
  );
};

export default Depressionsol;
