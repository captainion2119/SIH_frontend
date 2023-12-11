import React, { useState, useEffect } from 'react';

function Diagnosis() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Diagnosis</h2>
      {loading && <p>Loading...</p>}
      {apiData && (
       <p>${apiData}</p>
      )}
    </div>
  );
}

export default Diagnosis;
