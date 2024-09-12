// pages/visit.js
import { useState, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as needed
import AddPatientForm from '../components/AddPatientForm'; // Import the AddPatientForm component
import PatientCard from '../components/PatientCard'; // Import the PatientCard component

export default function Visit() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationData, setLocationData] = useState([]); // Ensure it's initialized as an array
  const [loading, setLoading] = useState(false);
  const [expandedCardIndices, setExpandedCardIndices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailsRef = useRef(null);

  const items = [
    { name: 'Pochampally', id: 1 },
    { name: 'Palampeta', id: 2 },
    { name: 'Alampur', id: 3 },
    { name: 'Item 4', id: 4 },
  ];

  const fetchLocationData = async (locationId) => {
    setLoading(true);
    try {
      const q = query(collection(db, 'patient'), where('locationId', '==', locationId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      setLocationData(Array.isArray(data) ? data : []); // Ensure it's always an array
    } catch (error) {
      console.error('Error fetching location data:', error);
      setLocationData([]);
    }
    setLoading(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    fetchLocationData(location.id);
    
    // Close the dropdown
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  const handleCardClick = (index) => {
    setExpandedCardIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index); // Remove index if already present
      } else {
        return [...prevIndices, index]; // Add index if not present
      }
    });
  };

  const handleAddPatient = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentSave = (index, updatedComments) => {
    setLocationData(prevData => {
      const newData = [...prevData];
      newData[index].comments = updatedComments;
      return newData;
    });
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {!selectedLocation ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Visit Locations</h1>

          <details className="relative" ref={detailsRef}>
            <summary className="flex items-center justify-between bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300 w-48">
              <span>Locations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transform transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="dropdown-content bg-white text-gray-800 rounded-lg shadow-md mt-2 absolute left-0 z-10 w-48 p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 mb-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ul>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 rounded w-full text-left"
                        onClick={() => handleLocationClick(item)}
                      >
                        {item.name}
                      </button>
                      {item === selectedLocation && (
                        <ul className="pl-4 mt-2">
                          <li>Nearby Location 1</li>
                          <li>Nearby Location 2</li>
                        </ul>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No matching locations found</li>
                )}
              </ul>
            </div>
          </details>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">{selectedLocation.name} - Patient List</h1>
          <button
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300"
            onClick={() => setSelectedLocation(null)}
          >
            Back to Locations
          </button>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {locationData.map((patient, index) => (
                <PatientCard
                  key={index}
                  patient={patient}
                  index={index}
                  expandedCardIndices={expandedCardIndices}
                  handleCardClick={handleCardClick}
                  handleCommentSave={handleCommentSave}
                />
              ))}
            </div>
          )}

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 mt-6"
            onClick={handleAddPatient}
          >
            Add Patient
          </button>
          {isModalOpen && <AddPatientForm onClose={handleCloseModal} />}
        </>
      )}
    </div>
  );
}
