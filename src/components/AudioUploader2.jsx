import React, { useState } from 'react';
// import Recorder from 'recorder-js';


function AudioUploader() {
    const [file, setFile] = useState(null);
    const [predictions, setPredictions] = useState(null);
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState(0);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file && file.type === 'audio/wav') {
            setFile(e.target.files[0]);
            setKey((prevKey) => prevKey + 1)
        }
        else {
            alert("Please upload a WAV file")  
        }
      };

    // const handleFileChange = (event) => {
    //     console.log('Event target:', event.target);
    //     const file = event.target.files[0];
    //     if (file && file.type === 'audio/wav') {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             console.log('FileReader result:', e.target.result);
    //             setFile(e.target.result);
    //             setKey((prevKey) => prevKey + 1); // Update key to force re-render
    //         };
    //         reader.readAsDataURL(file);
    //     } else {
    //         alert('Please upload a WAV file.');
    //         event.target.value = null;
    //         setFile(null)
    //     }
    // };

    const handlePrediction = async () => {
    if (file) {
        setLoading(true);

        const formData = new FormData();
        formData.append('audio', file);
        console.log("Form Data: ", formData)

        try {
        const response = await fetch('http://127.0.0.1:5000/audio', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            setPredictions(result);
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
        <h2>Upload Audio File</h2>
        <input type="file" name='audio' accept=".wav" onChange={handleFileChange} />
        {file && (
            <div>
                <h3>Preview</h3>
                <audio key={key} controls>
                <source src={file} type="audio/wav" />
                Your browser does not support the audio element.
                </audio>
            </div>
        )}
        <button onClick={handlePrediction} disabled={loading}>
            {loading ? 'Predicting...' : 'Predict'}
        </button>
        {predictions && (
            <div className="Predictions">
                <h2>Predictions:</h2>
                <p>Prediction: {predictions.Prediction}</p>
            </div>
            )}
        </div>
    );
}

export default AudioUploader;


