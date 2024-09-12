// components/Dashboard.js

import { useState } from 'react';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fetchLocations = async () => {
    try {
      const response = await axios.get('/api/locations'); // Your API endpoint
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchLocationDetails = async (locationId) => {
    try {
      const response = await axios.get(`/api/locations/${locationId}`); // Your API endpoint for location details
      setSelectedLocation(response.data);
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchLocations} className={styles.visitButton}>Visit</button>
      <div className={styles.locationList}>
        {locations.map((location) => (
          <div key={location.id} className={styles.locationItem}>
            <h3>{location.name}</h3>
            <p>Patient Percentage: {location.patientPercentage}%</p>
            <button onClick={() => fetchLocationDetails(location.id)} className={styles.detailsButton}>View Details</button>
          </div>
        ))}
      </div>
      {selectedLocation && (
        <LocationDetails location={selectedLocation} />
      )}
    </div>
  );
}
