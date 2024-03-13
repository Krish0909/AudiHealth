import "../styles/Audichecker.css";
import logo from "../assets/logo.png";
import upload from "../assets/upload.png";
import record from "../assets/record.png";
import AudioLogo from "../assets/AudioLogo.png";


const Audichecker = () => {
  return (
    <div className="macbook-pro-14-2">
      <div className="macbook-pro-14-2-child" />
      <div className="menu1">
        <a href="/home" className="home1">Home</a>
        <a href="/audichecker" className="audichecker1">AudiChecker</a>
        
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
                  <img className="upload-icon" alt="" src={record} />
                  <div className="record-audio">Record Audio</div>
                </div>
              </div>
              <div className="group-frame">
                <div className="group-frame">
                  <div className="group-frame">
                    <div className="group-inner" />
                  </div>
                </div>
                <div className="upload-parent">
                  <img className="upload-icon1" alt="" src={upload} />
                  <div className="record-audio">Upload Audio</div>
                </div>
              </div>
              <div className="or">or</div>
            </div>
          </div>
          <div className="group-child2" />
        </div>
        <div className="rectangle-group">
          <div className="group-child3" />
          <div className="local-hospital-parent">
            <img
              className="local-hospital-icon"
              alt=""
              src="/local-hospital.svg"
            />
            <div className="diagnose">Diagnose</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audichecker;
