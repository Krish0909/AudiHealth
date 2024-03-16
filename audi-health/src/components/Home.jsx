import "../styles/Home.css";
import Mac from "../assets/Mac.png"
import logo from "../assets/logo.png"
import health from "../assets/dihealth.png"

const Home = () => {
  return (
    <div className="macbook-pro-14-1">
      <img src="../assets/logo.png" alt="" />
      <div className="take-a-free-test-wrapper">
        <div className="take-a-free">Take a FREE TEST</div>
      </div>
      <img
        className="macbook-pro-14-1-child"
        alt=""
        src={Mac}
      />
      <div className="in-a-world-where-misinformatio-parent">
        <div className="in-a-world">
          In a world where misinformation spreads like wildfire, discerning fact
          from fiction has never been more crucial. In a world where
          misinformation spreads like wildfire, discerning to yht masses here at
          thr.
        </div>
        <div className="diagnose-health-through-container">
          <span className="diagnose-health-through">{`Diagnose health through `}<span className="audio">Audio</span> </span>
          
          <span className="diagnose-health-through">with</span>
          <span className="span1">{` `}</span>
        </div>
        <img className="logo-icon" alt="" src={logo} />
        <img className="" alt="" src={health} />
        {/* <div className="a-dihealth">a dihealth</div> */}
      </div>
      <div className="macbook-pro-14-1-item" />
      <div className="menu">
        <a href="/home" className="home">Home</a>
        <a href="/audichecker" className="audichecker">AudiChecker</a>
        <div className="audichecker-wrapper">
        </div>
      </div>
      <img className="logo-icon1" alt="" src={logo} />
      <div className="mention-features-and-refernces">
        <div className="mention-features-and-refernces-child" />
        <div className="mention-features-and-refernces-item" />
        <div className="mention-features-and-refernces-inner" />
        <div className="rectangle-div" />
        <div className="mention-features-and-refernces-child1" />
        <div className="mention-features-and-refernces-child2" />
        <div className="blah-blah-vary">
          Blah Blah Vary Hnnad bbfjekn of hasksk good
        </div>
        <div className="we-offer-the">
          We offer the best offer that yuve seen in your whole offerable life
          when it comes to us it rocks and rolls
        </div>
      </div>
      <div className="vocalcare">VocalCare</div>
      <div className="group-parent">
        <div className="factfinder-parent">
          <div className="factfinder">AudiHealth</div>
          <img className="vector-icon" alt="" src={logo} />
        </div>
        <div className="hackanova-hackathon-thakur-container">
          <p className="hackanova-hackathon-thakur">
            HackaNova Hackathon, Thakur College, Kandivali
          </p>
          <p className="hackanova-hackathon-thakur">16th Feb 2024</p>
        </div>
      </div>
      <div className="instagram-twitter-container">
        <span className="instagram">{`Instagram   `}</span>
        <span className="span2">{`|  `}</span>
        <span>Twitter</span>
        <span className="span2">{`  |  `}</span>
        <span>{`LinkedIn `}</span>
      </div>
    </div>
  );
};

export default Home;
