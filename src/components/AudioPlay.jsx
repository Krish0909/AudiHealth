import React, { useState, useEffect } from 'react';

const AudioPlay = () => {
 const [buttonName, setButtonName] = useState('Play');
 const [audio, setAudio] = useState();
 const [errorMessage, setErrorMessage] = useState('');

 useEffect(() => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.onended = () => {
        setButtonName('Play');
      };
      return () => {
        audioElement.pause();
      };
    }
 }, [audio]);

 const handleClick = () => {
    if (buttonName === 'Play') {
      const audioElement = new Audio(audio);
      audioElement.play();
      setButtonName('Pause');
    } else {
      const audioElement = new Audio(audio);
      audioElement.pause();
      setButtonName('Play');
    }
 };

 const addFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'audio/wav') {
      setAudio(URL.createObjectURL(file));
      setErrorMessage('');
    } else {
      setErrorMessage('Please upload a .wav file.');
    }
 };

 return (
    <div>
      <button onClick={handleClick}>{buttonName}</button>
      <input type="file" onChange={addFile} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
 );
};

export default AudioPlay;
