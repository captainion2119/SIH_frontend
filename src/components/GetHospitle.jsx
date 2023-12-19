
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetHospitle() {
    
  const [userLocation, setUserLocation] = useState({'latitude':26.839615479820807,'longitude': 75.56448077513275});
  const [healthcareCenters, setHealthcareCenters] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch user location
            // const userLocationResponse = await axios.get('https://ipinfo.io');
            // const userData = userLocationResponse.data;
            // if ('loc' in userData) {
            //   const [latitude, longitude] = userData.loc.split(',');
            //   setUserLocation({ latitude, longitude });
            //   console.log('User Location:', { latitude, longitude });
            // } else {
            //   console.error('Unable to fetch user location.');
            // }
            // Fetch nearby healthcare centers
            if (userLocation) {
              const hereApiKey = 'rgnKMs99zei9oKTYtYo0KSiEsomx2TUF88XMO12VP0c';
              const hereApiUrl = 'https://discover.search.hereapi.com/v1/discover';
              const params = {
                at: `${userLocation.latitude},${userLocation.longitude}`,
                q: 'mental healthcare, eating disorder, hospital',
                apiKey: hereApiKey,
              };
              const healthcareCentersResponse = await axios.get(hereApiUrl, { params });
              const data = healthcareCentersResponse.data;
    
              if ('items' in data) {
                setHealthcareCenters(data.items);
              } else {
                console.error('No nearby mental healthcare centers and clinics found.');
              }
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [userLocation]);
  return (
    <>
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
    </>
  )
}

export default GetHospitle