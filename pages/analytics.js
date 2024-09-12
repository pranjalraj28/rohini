import { useState } from 'react';

const locations = [
  { id: 'loc1', name: 'Meena' },
  { id: 'loc2', name: 'Rishaan' },
  { id: 'loc3', name: 'Pranjal' },
  { id: 'loc4', name: 'Amruth' },
];

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div>
        <label htmlFor="location"> {`Patient Analysis for Meena:`}</label>
        <select id="location" onChange={handleLocationChange} value={selectedLocation} style={{ marginLeft: '10px' }}>
          <option value="">--Select--</option>
          {locations.map(location => (
            <option key={location.id} value={location.id}>{location.name}</option>
          ))}
        </select>
      </div>
      {selectedLocation && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <p>{"Patient Progress Summary:\n *Haemoglobin:* \n --> Significant improvement observed in haemoglobin levels. \n --> This indicates positive response to treatment, potentially reducing fatigue and improving overall health.\n *Plaque:* Plaque remains a concern.\n --> Further investigation and potential interventions are necessary to address this issue. *Next Steps:*\n * Review recent lab results and imaging studies to assess the current state of plaque accumulation.\n * Discuss potential treatment options with the patient, including lifestyle modifications and/or medication.\n * Schedule a follow-up appointment to monitor progress and adjust treatment as needed. "}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
