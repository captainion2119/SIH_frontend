
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChinMudra from '../assets/Chin-mudra.gif'
import ApanaMudra from '../assets/Apana-mudra.gif'
import PranaMudra from '../assets/Prana-mudra.gif'

import GetHospitle from '../components/GetHospitle';
const Anxietysol = ({ anxietyLevel }) => {
  const [mudra, setMudra] = useState(null);

  useEffect(() => {
    console.log(anxietyLevel)
    const fetchData = async () => {
      try {
        // Determine which mudra to show based on anxiety level
        if (anxietyLevel <= 40) {
          setMudra("ChinMudra");
        } else if ( anxietyLevel <= 60) {
          setMudra("ApanaMudra");
        } else if ( anxietyLevel < 90) {
          setMudra("PranaMudra");
        }

        // Rest of the code remains unchanged...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [anxietyLevel]);
  const mudraInstructions = {
    "ChinMudra": [
        "**->MILD ANXIETY**\n",
        "**CHIN  MUDRA INSTRUCTIONS**\n",
        "• Step 1: Sit comfortably with your back straight and your hands resting on your knees.\n",
        "• Step 2: Join the tip of your thumb with the tip of your index finger, forming a circle.\n",
        "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.\n",
        "• Practice this mudra for a minimum of 20 minutes.\n",
        " ",
        "    *Fact: Chin Mudra can help calm the mind and improve concentration.*",
        " "
    ],
    "ApanaMudra": [
        "**->MODERATE ANXIETY**\n",
        "**APANA MUDRA INSTRUCTIONS**\n",
        "• Step 1: Sit comfortably with your back straight.\n",
        "• Step 2: Join the tips of your middle finger and ring finger to the tip of your thumb, while keeping the other two fingers extended.\n",
        "• Step 3: Close your eyes and inhale and exhale slowly while holding this mudra.\n",
        "• Practice this mudra for a minimum of 20 minutes.\n",
        " ",
        "     *Fact: Apana Mudra can help alleviate anxiety and promote a sense of balance.*",
        " "
    ],
    "PranaMudra": [
        "**->SEVERE ANXIETY**\n",
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
      {mudra && (
        <div>
          <h5>You have {anxietyLevel} % of anxiety</h5>
          <img src={mudra == 'ChinMudra'? ChinMudra: mudra == 'ApanaMudra'? ApanaMudra: PranaMudra} alt="Mudra" />

          <ul>
            {mudraInstructions[mudra].map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      {anxietyLevel > 90 ? (
        <div>
        <p>
          <strong>EXTREME ANXIETY</strong>
        </p>
        <p>
          <strong>EMERGENCY HELPLINE:</strong> Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019
        </p>

        
      <GetHospitle/>
      </div>
      ) : (
        <p>No emergency at the moment.</p>
      )}
    </div>
  );
};

export default Anxietysol;
