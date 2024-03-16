// import React, { useState } from 'react';

// function AudioUploader() {
//   const [audioFile, setAudioFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.type === "audio/wav") {
//         setAudioFile(file);
//       } else {
//         // File type is not supported
//         alert("Please upload a WAV audio file.");
//         // Clear the input field
//         event.target.value = null;
//         // Reset audioFile state
//         setAudioFile(null);
//       }
//     } else {
//       // No file selected, reset audioFile state
//       setAudioFile(null);
//     }
//   };

//   const handleUpload = () => {
//     // You can perform further processing here, such as uploading the file to a server
//     console.log("Uploaded file:", audioFile.name);
//   };

//   const renderPreview = () => {
//     if (audioFile) {
//       return (
//         <div>
//           <h3>Preview</h3>
//           <audio controls>
//             <source src={URL.createObjectURL(audioFile)} type="audio/wav" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <h2>Upload Audio File</h2>
//       <input type="file" accept="audio/wav" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {renderPreview()}
//     </div>
//   );
// }

// export default AudioUploader;

import React, { useState } from 'react';

function AudioPlayer() {
  const [audioSrc, setAudioSrc] = useState(null);
  const [key, setKey] = useState(0);

  const handleUpload = () => {
        // You can perform further processing here, such as uploading the file to a server
        console.log("Uploaded file:", audioFile.name);
      };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/wav') {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAudioSrc(e.target.result);
        setKey((prevKey) => prevKey + 1); // Update key to force re-render
      };
      reader.readAsDataURL(file);
    } else {
        alert('Please upload a WAV file.');
        event.target.value = null;
        setAudioSrc(null)
    }
  };

  return (
    <div>
      <h2>Upload Audio File</h2>
      <input type="file" accept=".wav" onChange={handleFileChange} />
      {audioSrc && (
        <div>
            <h3>Preview</h3>
            <audio key={key} controls>
            <source src={audioSrc} type="audio/wav" />
            Your browser does not support the audio element.
            </audio>
        </div>
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default AudioPlayer;


