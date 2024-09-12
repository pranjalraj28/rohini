import React, { useState } from 'react';
import { db } from '../firebase'; // Ensure this path is correct
import { collection, addDoc } from 'firebase/firestore';

const AddPatientForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dentalPain: '',
    bleedingGums: '',
    medicalConditions: '',
    medications: '',
    brushing: '',
    colorChange: '',
    analysis: '',
    comments: '',
    locationId: 1, // Example value
    prompt1: '',
    prompt2: '',
    prompt3: '',
    prompt4: '',
    prompt5: '',
    prompt6: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: id === 'age' ? Number(value) : value, // Convert age to a number
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData); // Log form data to verify

    try {
      await addDoc(collection(db, 'patient'), formData); // Add form data to Firestore
      console.log('Form submitted successfully'); // Log success message
      onClose(); // Close modal after submission
    } catch (error) {
      console.error('Error submitting form:', error); // Log any errors
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add Patient</h2>
          {/* Render fields here as shown previously */}
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Patient's Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Patient's Age"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Do you currently have any dental pain or discomfort?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="dentalPain"
                  value="Yes"
                  checked={formData.dentalPain === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="dentalPain"
                  value="No"
                  checked={formData.dentalPain === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Have you noticed any bleeding from your gums when brushing or flossing?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="bleedingGums"
                  value="Yes"
                  checked={formData.bleedingGums === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="bleedingGums"
                  value="No"
                  checked={formData.bleedingGums === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Do you have any medical conditions that could affect your oral health?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="medicalConditions"
                  value="Yes"
                  checked={formData.medicalConditions === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="medicalConditions"
                  value="No"
                  checked={formData.medicalConditions === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Are you currently taking any medications that could impact your teeth or gums?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="medications"
                  value="Yes"
                  checked={formData.medications === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="medications"
                  value="No"
                  checked={formData.medications === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Do you brush your teeth at least twice a day?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="brushing"
                  value="Yes"
                  checked={formData.brushing === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="brushing"
                  value="No"
                  checked={formData.brushing === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-bold mb-2">Have you experienced any recent changes in the color or texture of your teeth or gums?</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="colorChange"
                  value="Yes"
                  checked={formData.colorChange === 'Yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="colorChange"
                  value="No"
                  checked={formData.colorChange === 'No'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          

          

          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
