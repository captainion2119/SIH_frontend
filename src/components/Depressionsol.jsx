
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChinMudra from '../assets/Chin-mudra.gif'
import AnjaliMudra from '../assets/Anjali-mudra.gif'
import PranaMudra from '../assets/Prana-mudra.gif'

import GetHospitle from '../components/GetHospitle';
const Depressionsol = ({ depressionLevel }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [healthcareCenters, setHealthcareCenters] = useState([]);
  const [mudra, setMudra] = useState(null);
  depressionLevel = parseFloat(depressionLevel);
  useEffect(() => {
    console.log(depressionLevel)
    const fetchData = async () => {
      try {
        // Determine which mudra to show based on anxiety level
         if (depressionLevel <= 40) {
          setMudra("ChinMudra");
        } else if (depressionLevel <= 60) {
          setMudra("AnjaliMudra");
        } else if (depressionLevel < 90) {
          setMudra("PranaMudra");
        }

        // Rest of the code remains unchanged...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [depressionLevel, userLocation]);
  const mudraInstructions = {
    "ChinMudra": [
        "**->MILD DEPRESSION**\n",
        "**CHIN  MUDRA INSTRUCTIONS**\n",
        "• Step 1: Sit comfortably with your back straight and your hands resting on your knees.\n",
        "• Step 2: Join the tip of your thumb with the tip of your index finger, forming a circle.\n",
        "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.\n",
        "• Practice this mudra for a minimum of 20 minutes.\n",
        " ",
        "    *Fact: Chin Mudra can help calm the mind and improve concentration.*",
        " "
    ],
    "AnjaliMudra": [
        "**->MODERATE DEPRESSION**\n",
        "**ANJALI MUDRA INSTRUCTIONS**\n",
        "• Step 1: Sit comfortably with your back straight.\n",
        "• Step 2: Bring your palms together in front of your chest, fingers pointing upward.\n",
        "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.\n",
        "• Practice this mudra for a minimum of 20 minutes.\n",
        " ",
        "     *Fact: Anjali Mudra represents gratitude and balance.*",
        " "
    ],
    "PranaMudra": [
        "**->SEVERE DEPRESSION**\n",
        "**PRANA MUDRA INSTRUCTIONS**\n",
        "• Step 1: Sit comfortably with your back straight.\n",
        "• Step 2: Touch the tips of your ring finger and little finger to the tip of your thumb, while keeping the other two fingers extended.\n",
        "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.\n",
        "• Practice this mudra for a minimum of 20 minutes.\n",
        " ",
        "    *Fact: Prana Mudra is associated with vital life force energy.*",
        " "

    ],
}
  return (
    <div>
      <h5>You have {depressionLevel}% of depression</h5>
      {mudra && (
        <div>
          
          <img src={mudra == 'ChinMudra'? ChinMudra: mudra == 'AnjaliMudra'? AnjaliMudra: PranaMudra} alt="Mudra" />

          <ul>
            {mudraInstructions[mudra].map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      {depressionLevel > 90 ? (
        <div>
        <p>
          <strong>EXTREME ANXIETY</strong>
        </p>
        <p>
          <strong>EMERGENCY HELPLINE:</strong> Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019
        </p>

        
      <GetHospitle keywords={'mental healthcare,depression'}/>
      </div>
      ) : (
        <p>No emergency at the moment.</p>
      )}
      {!mudra && <p>You dont have depression</p>}
    </div>
  );
};

export default Depressionsol;
