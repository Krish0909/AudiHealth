import React, { useState } from 'react';
import Recorder from 'recorder-js';

function AudioRecorder() {
  const [recorder, setRecorder] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);

  const startRecording = async () => {
    const audioContext = new AudioContext();
    const recorder = new Recorder(audioContext, { numChannels: 1 });
    await recorder.init();
    recorder.start();
    setRecorder(recorder);
  };

  const stopRecording = async () => {
    if (recorder) {
        setLoading(true);

        const formData = new FormData();
        formData.append('audio', recorder);

        try {
            const response = await fetch('http://127.0.0.1:5000/audio', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setPredictions(result)
                console.log(result); // Handle prediction results
            } else {
                console.error('Prediction failed');
            }
        } catch (error) {
            console.error('Error during prediction:', error);
        } finally {
            setLoading(false);
        }
    }
};


  return (
    <div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
};

export default AudioRecorder;
