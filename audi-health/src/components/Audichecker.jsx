// // import "../styles/Audichecker.css";
// // import { useState, useEffect } from "react";

// // import logo from "../assets/logo.png";
// // import upload from "../assets/upload.png";
// // import record from "../assets/record.png";
// // import AudioLogo from "../assets/AudioLogo.png";
// // import LH from "../assets/local_hospital.png";

// // const MacBookPro141 = () => {

// //     // const uploadForm = document.querySelector('.InputMP3')
// //     // uploadForm.addEventListener('submit', function(e) {
// //     //     e.preventDefault()
// //     //     let file = e.target.uploadFile.files[0]
// //     // })
// //     // useEffect(() => {

// //     //  }, []);

// //   return (
// //     // <form action="/upload">
// //     <div className="macbook-pro-14-2">
// //       <div className="macbook-pro-14-2-child" />
// //       <div className="menu1">
// //       <a href="/home" className="home1">Home</a>
// //         <a href="/audichecker" className="audichecker1">AudiChecker</a>
// //       </div>
// //       <img className="logo-icon2" alt="" src={logo} />
// //       <div className="audihealth">AudiHealth</div>
// //       <div className="frame-parent">
// //         <div className="group-container">
// //           <div className="rectangle-parent">
// //             <div className="group-child" />
// //             <img className="logo-icon3" alt="" src={AudioLogo} />
// //           </div>
// //           <div className="audichecker2">AudiChecker</div>
// //         </div>
// //         <div className="group-div">
// //           <div className="group-wrapper">
// //             <div className="group-wrapper">
// //               <div className="group-wrapper">
// //                 <div className="group-item" />
// //               </div>
// //             </div>
// //             <div className="group-parent2">
// //               <div className="group-parent3" >
// //                 <div className="group-frame">
// //                   <div className="group-frame">
// //                     <div className="group-inner" />
// //                   </div>
// //                 </div>
// //                 <div className="upload-parent">
// //                   <img className="upload-icon" alt="" src={record} />
// //                   <div className="record-audio">Record Audio</div>
// //                 </div>
// //               </div>
// //               <div className="group-frame">
// //                 <div className="group-frame">
// //                   <div className="group-frame">

// //                     <div className="group-inner" />

// //                         <input type="file" accept="audio/*"  className="InputMP3" required/>

// //                   </div>
// //                 </div>
// //                 <div className="upload-parent">
// //                   <img className="upload-icon1" alt="" src={upload} />
// //                   <div className="record-audio">Upload Audio</div>
// //                 </div>
// //               </div>
// //               <div className="or">or</div>
// //             </div>
// //           </div>
// //           <div className="group-child2" />
// //         </div>
// //         <div className="rectangle-group">
// //           <div className="group-child3" />
// //           <div className="local-hospital-parent">
// //             <img
// //               className="local-hospital-icon"
// //               alt=""
// //               src={LH}
// //             />
// //             <div className="diagnose">Diagnose</div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     // </form>
// //   );
// // };

// // export default MacBookPro141;

// // import React, { useState } from "react";
// // import "../styles/Audichecker.css";

// // import logo from "../assets/logo.png";
// // import upload from "../assets/upload.png";
// // import record from "../assets/record.png";
// // import AudioLogo from "../assets/AudioLogo.png";
// // import LH from "../assets/local_hospital.png";

// // const MacBookPro141 = () => {
// //   const [audioFile, setAudioFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     setAudioFile(file);
// //   };

// //   return (
// //     <div className="macbook-pro-14-2">
// //       <div className="macbook-pro-14-2-child" />
// //       <div className="menu1">
// //         <a href="/home" className="home1">
// //           Home
// //         </a>
// //         <a href="/audichecker" className="audichecker1">
// //           AudiChecker
// //         </a>
// //       </div>
// //       <img className="logo-icon2" alt="" src={logo} />
// //       <div className="audihealth">AudiHealth</div>
// //       <div className="frame-parent">
// //         <div className="group-container">
// //           <div className="rectangle-parent">
// //             <div className="group-child" />
// //             <img className="logo-icon3" alt="" src={AudioLogo} />
// //           </div>
// //           <div className="audichecker2">AudiChecker</div>
// //         </div>
// //         <div className="group-div">
// //           <div className="group-wrapper">
// //             <div className="group-wrapper">
// //               <div className="group-wrapper">
// //                 <div className="group-item" />
// //               </div>
// //             </div>
// //             <div className="group-parent2">
// //               <div className="group-parent3">
// //                 <div className="group-frame">
// //                   <div className="group-frame">
// //                     <div className="group-inner" />
// //                   </div>
// //                 </div>
// //                 <div className="upload-parent">
// //                   <img className="upload-icon" alt="" src={record} />
// //                   <div className="record-audio">Record Audio</div>
// //                 </div>
// //               </div>
// //               <div className="group-frame">
// //                 <div className="group-frame">
// //                   <div className="group-frame">
// //                     <div className="group-inner" />
// //                     <input
// //                       type="file"
// //                       accept="audio/*"
// //                       className="InputMP3"
// //                       onChange={handleFileChange}
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="upload-parent">
// //                   <img className="upload-icon1" alt="" src={upload} />
// //                   <div className="record-audio">Upload Audio</div>
// //                 </div>
// //               </div>
// //               <div className="or">or</div>
// //             </div>
// //           </div>
// //           <div className="group-child2" />
// //         </div>
// //         <div className="rectangle-group">
// //           <div className="group-child3" />
// //           <div className="local-hospital-parent">
// //             <img className="local-hospital-icon" alt="" src={LH} />
// //             <div className="diagnose">Diagnose</div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Display uploaded file name and provide playback options */}
// //       {audioFile && (
// //         <div className="audio-player">
// //           <p>Uploaded audio file: {audioFile.name}</p>
// //           <audio controls>
// //             <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
// //             Your browser does not support the audio element.
// //           </audio>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MacBookPro141;

// import React, { useState } from 'react';
// import '../styles/Audichecker.css';

// import logo from '../assets/logo.png';
// import upload from '../assets/upload.png';
// import record from '../assets/record.png';
// import AudioLogo from '../assets/AudioLogo.png';
// import LH from '../assets/local_hospital.png';

// const MacBookPro141 = () => {
//   const [audioFile, setAudioFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setAudioFile(file);
//   };

//   return (
//     <div className="macbook-pro-14-2">
//       <div className="macbook-pro-14-2-child" />
//       <div className="menu1">
//         <a href="/home" className="home1">
//           Home
//         </a>
//         <a href="/audichecker" className="audichecker1">
//           AudiChecker
//         </a>
//       </div>
//       <img className="logo-icon2" alt="" src={logo} />
//       <div className="audihealth">AudiHealth</div>
//       <div className="frame-parent">
//         <div className="group-container">
//           <div className="rectangle-parent">
//             <div className="group-child" />
//             <img className="logo-icon3" alt="" src={AudioLogo} />
//           </div>
//           <div className="audichecker2">AudiChecker</div>
//         </div>
//         <div className="group-div">
//           <div className="group-wrapper">
//             <div className="group-wrapper">
//               <div className="group-wrapper">
//                 <div className="group-item" />
//               </div>
//             </div>
//             <div className="group-parent2">
//               <div className="group-parent3">
//                 <div className="group-frame">
//                   <div className="group-frame">
//                     <div className="group-inner" />
//                   </div>
//                 </div>
//                 <div className="upload-parent">
//                   <img className="upload-icon" alt="" src={record} />
//                   <div className="record-audio">Record Audio</div>
//                 </div>
//               </div>
//               <div className="group-frame">
//                 <div className="group-frame">
//                   <div className="group-frame">
//                     <div className="group-inner" />
//                     <input
//                       type="file"
//                       accept="audio/*"
//                       className="InputMP3"
//                       onChange={handleFileChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="upload-parent">
//                   <img className="upload-icon1" alt="" src={upload} />
//                   <div className="record-audio">
//                     {`
//                     ${audioFile ? audioFile.name : 'Upload Audio'}
//                     `}
//                   </div>
//                 </div>
//               </div>
//               <div className="or">or</div>
//             </div>
//           </div>
//           <div className="group-child2" />
//         </div>
//         <div className="rectangle-group">
//           <div className="group-child3" />
//           <div className="local-hospital-parent">
//             <img className="local-hospital-icon" alt="" src={LH} />
//             <div className={`diagnose${audioFile ? ' diagnose-active' : ''}`}>
//               Diagnose
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Display uploaded file name and provide playback options */}
//       {audioFile && (
//         <div className="audio-player">
//           <p>Uploaded audio file: {audioFile.name}</p>
//           <audio controls>
//             <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MacBookPro141;
import React, { useState, useRef } from 'react';
import '../styles/Audichecker.css';

import logo from '../assets/logo.png';
import upload from '../assets/upload.png';
import record from '../assets/record.png';
import AudioLogo from '../assets/AudioLogo.png';
import uploadicon from '../assets/uploadicon.jpg';
import LH from '../assets/local_hospital.png';

const MacBookPro141 = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      const chunks = [];
      mediaRecorder.current.ondataavailable = (e) => {
        chunks.push(e.data);
      };
      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioFile(blob);
      };
      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="macbook-pro-14-2">
      <div className="macbook-pro-14-2-child" />
      <div className="menu1">
        <a href="/home" className="home1">
          Home
        </a>
        <a href="/audichecker" className="audichecker1">
          AudiChecker
        </a>
      </div>
      <img className="logo-icon2" alt="" src={logo} />
      <div className="audihealth">AudiHealth</div>
      <div className="frame-parent">
        <div className="group-container">
          <div className="rectangle-parent">
            <div className="group-child" />
            <img className="logo-icon3" alt="" src={AudioLogo} />
          </div>
          <div className="audichecker2">AudiChecker</div>
        </div>
        <div className="group-div">
          <div className="group-wrapper">
            <div className="group-wrapper">
              <div className="group-wrapper">
                <div className="group-item" />
              </div>
            </div>
            <div className="group-parent2">
              <div className="group-parent3">
                <div className="group-frame">
                  <div className="group-frame">
                    <div className="group-inner" />
                  </div>
                </div>
                <div className="upload-parent">
                  {/* <button className="upload-icon" onClick={startRecording}> */}
                  <img className="upload-icon" src={record} alt="Record" />
                  {/* </button> */}
                  <div className="record-audio" onClick={startRecording}>
                    Record Audio
                  </div>
                </div>
              </div>
              <div className="group-frame">
                <div className="group-frame">
                  <div className="group-frame">
                    <div className="group-inner" />
                    <input
                      type="file"
                      accept="audio/*"
                      className="InputMP3"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <div className="upload-parent">
                  <img className="upload-icon1" alt="" src={upload} />
                  <div className="record-audio">
                    {`
                    ${audioFile ? audioFile.name : 'Upload Audio'}
                    `}
                  </div>
                </div>
              </div>
              <div className="or">or</div>
            </div>
          </div>
          <div className="group-child2" />
        </div>
        <div className="rectangle-group">
          <div className="group-child3" />
          <div
            className={`diagnose${isRecording ? ' diagnose-active' : ''}`}
            onClick={isRecording ? stopRecording : null}
          >
            {isRecording ? 'Stop Recording' : 'Diagnose'}
          </div>
        </div>
      </div>

      {/* Display uploaded file name and provide playback options */}
      {audioFile && (
        <div className="audio-player">
          <p>Uploaded audio file: {audioFile.name}</p>
          <audio controls>
            <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MacBookPro141;
