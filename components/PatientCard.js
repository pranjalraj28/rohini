import React, { useState } from 'react';
import VoiceAssistant from './VoiceAssistant';
import styles from '../styles/PatientCard.module.css';

const PatientCard = ({ patient, index, expandedCardIndices, handleCardClick, handleCommentSave }) => {
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  const [comments, setComments] = useState('');

  const handleFollowUpClick = (e) => {
    e.stopPropagation();
    setShowVoiceAssistant(!showVoiceAssistant);
  };

  const saveComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    handleCommentSave(index, updatedComments);
    setShowVoiceAssistant(false);
  };

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer relative"
      onClick={() => handleCardClick(index)}
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{patient.name}</h2>
      <p className="text-gray-600"><span className="font-semibold">Age:</span> {patient.age}</p>
      <p className="text-gray-600"><span className="font-semibold">Gender:</span> {patient.gender}</p>
      {expandedCardIndices.includes(index) && (
        <div className="mt-2">
          <p className="text-gray-600"><span className="font-semibold">Dosage:</span> {patient.dosage}</p>
          <p className="text-gray-600"><span className="font-semibold">Follow-up Duration:</span> {patient.followUpDuration}</p>
          <p className="text-gray-600"><span className="font-semibold">Comments:</span> {(comments) ? comments: 'No comments'}</p>
          <p className="text-gray-600"><span className="font-semibold">Diagnosis:</span> {patient.diagnosis}</p>
        </div>
      )}
      <div className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${expandedCardIndices.includes(index) ? 'text-gray-700 rotate-180' : 'text-gray-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </div>
      <button
        onClick={handleFollowUpClick}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Follow Up
      </button>
      {showVoiceAssistant && <VoiceAssistant onCommentSave={saveComment} />}
    </div>
  );
};

export default PatientCard;
