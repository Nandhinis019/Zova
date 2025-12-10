import React, { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [location, setLocation] = useState({ city: '', state: '', loading: false });

  const fetchLocation = async () => {
    setLocation(prev => ({ ...prev, loading: true }));
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`
            );
            
            if (response.ok) {
              const data = await response.json();
              const result = data.results[0];
              setLocation({
                city: result.components.city || result.components.town || 'Unknown',
                state: result.components.state || 'Unknown',
                loading: false
              });
            } else {
              // Fallback to IP-based location
              const ipResponse = await fetch('https://ipapi.co/json/');
              const ipData = await ipResponse.json();
              setLocation({
                city: ipData.city || 'Unknown',
                state: ipData.region || 'Unknown',
                loading: false
              });
            }
          } catch (error) {
            setLocation({ city: 'Unknown', state: 'Unknown', loading: false });
          }
        },
        () => {
          // Fallback to IP-based location if geolocation is denied
          fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
              setLocation({
                city: data.city || 'Unknown',
                state: data.region || 'Unknown',
                loading: false
              });
            })
            .catch(() => {
              setLocation({ city: 'Unknown', state: 'Unknown', loading: false });
            });
        }
      );
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="location-tracker">
      <button className="location-btn" onClick={fetchLocation} disabled={location.loading}>
        <span className="location-text">
          📍 {location.loading ? 'Locating...' : `${location.city} ${location.state}`}
        </span>
      </button>
    </div>
  );
};

export default LocationTracker;