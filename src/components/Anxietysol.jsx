
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChinMudra from '../assets/Chin-mudra.gif'
import ApanaMudra from '../assets/Apana-mudra.gif'
import PranaMudra from '../assets/Prana-mudra.gif'
const Anxietysol = ({ anxietyLevel }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [healthcareCenters, setHealthcareCenters] = useState([]);
  const [mudra, setMudra] = useState(null);

  useEffect(() => {
    console.log(anxietyLevel)
    const fetchData = async () => {
      try {
        // Determine which mudra to show based on anxiety level
        if (anxietyLevel <= 0.4) {
          setMudra("ChinMudra");
        } else if (0.4 < anxietyLevel <= 0.6) {
          setMudra("ApanaMudra");
        } else if (0.6 < anxietyLevel < 0.9) {
          setMudra("PranaMudra");
        }

        // Rest of the code remains unchanged...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [anxietyLevel, userLocation]);
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
          <p>
            <strong>Mudra for Anxiety:</strong>
          </p>
          <img src={mudra == 'ChinMudra'? ChinMudra: mudra == 'ApanaMudra'? ApanaMudra: PranaMudra} alt="Mudra" />

          <p>
            <strong>Mudra Instructions:</strong>
          </p>
          <ul>
            {mudraInstructions[mudra].map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      {anxietyLevel > 0.9 ? (
        <div>
        <p>
          <strong>EXTREME ANXIETY</strong>
        </p>
        <p>
          <strong>EMERGENCY HELPLINE:</strong> Toll-Free Mental Health Rehabilitation Helpline Kiran: 1800-599-0019
        </p>

        {healthcareCenters.length > 0 ? (
          <div>
            <p>Finding nearby mental healthcare centers and clinics...</p>
            <ul>
              {healthcareCenters.map((center, idx) => (
                <li key={idx}>
                  {center.title} - Contact Numbers: {center.contacts?.[0]?.phone?.[0]?.value || 'N/A'}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No nearby mental healthcare centers and clinics found.</p>
        )}
      </div>
      ) : (
        <p>No emergency at the moment.</p>
      )}
    </div>
  );
};

export default Anxietysol;
