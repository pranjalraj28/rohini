import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceAssistant = ({ onCommentSave }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isRecording, setIsRecording] = useState(false);

  const handleRecord = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition software! Please use Chrome desktop.");
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
    setIsRecording(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    onCommentSave(transcript);
    setIsRecording(false);
  };

  return (
    <div>
      <button 
        onClick={handleRecord} 
        style={{ 
          backgroundColor: '#4caf50', /* Green background */
          color: 'white', /* White text */
          border: 'none', /* No border */
          borderRadius: '4px', /* Rounded corners */
          padding: '8px 16px', /* Padding inside the button */
          cursor: 'pointer', /* Pointer cursor on hover */
          transition: 'background-color 0.3s' /* Animation for background color change */
        }}
        disabled={isRecording}
      >
        Start Recording
      </button>
      <button 
        onClick={handleStop} 
        style={{ 
          backgroundColor: '#4caf50', /* Green background */
          color: 'white', /* White text */
          border: 'none', /* No border */
          borderRadius: '4px', /* Rounded corners */
          padding: '8px 16px', /* Padding inside the button */
          cursor: 'pointer', /* Pointer cursor on hover */
          transition: 'background-color 0.3s' /* Animation for background color change */
        }}
        disabled={!isRecording}
      >
        Stop Recording
      </button>
      <p>Transcribed Comment: {transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
