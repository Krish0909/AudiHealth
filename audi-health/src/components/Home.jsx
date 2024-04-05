import "../styles/Home.css";
import Mac from "../assets/Mac.png"
import undraw from "../assets/undraw_Recording_re_5xyq.png"
import logo from "../assets/logo.png"
import health from "../assets/dihealth.png"
import footimp from "../assets/footimp.png"
import india from "../assets/india.png"

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
        src={undraw}
      />
      <div className="in-a-world-where-misinformatio-parent">
        <div className="in-a-world">
          Welcome to AudiHealth, where your voice meets innovation! Whether you're a professional or value your voice, AudiHealth offers peace of mind and proactive care. Safeguard the beauty and resilience of your voice with us today!
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
        <div className="mention-features-and-refernces-child" >
          <p className="fact1">Did you know that approximately 7.5 million people in India suffer from voice disorders at any given time? That's roughly 1 in every 63 people!</p>
        </div>
        <div className="mention-features-and-refernces-item" >
          <p className="fact2">Studies have shown that people with untreated voice disorders are often perceived as less competent, less trustworthy, and less hireable than those with healthy voices.</p>
        </div>
        <div className="mention-features-and-refernces-inner" >
          <p className="fact3">AudiHealth enables early detection of voice disorders, improving treatment outcomes and quality of life through timely intervention.</p>
        </div>
        <div className="rectangle-div" >
          <p className="fact4">
Thanks to breakthroughs in technology such as machine learning and artificial intelligence, the diagnosis of voice disorders has reached unprecedented levels of accuracy and efficiency. AudiHealth harnesses these advancements, employing state-of-the-art techniques to offer users dependable and prompt insights into their vocal health. This innovative approach ensures that individuals can access reliable assessments of their voice health, facilitating early detection and proactive management of potential disorders for enhanced well-being.</p>
        </div>
        <div className="mention-features-and-refernces-child1" >
          <p className="fact5">Voice disorders can have a significant psychological impact, leading to feelings of frustration, embarrassment, and social isolation.</p>
        </div>
        <div className="mention-features-and-refernces-child2" >
          <p className="fact6">Our voice is not just a means of communication but also a reflection of our identity and personality. By prioritizing vocal health and seeking timely intervention when needed, individuals can preserve their voice and continue to express themselves confidently and effectively.</p>
        </div>
        <div className="blah-blah-vary">
        Proudly developed in India  <img className="india" src={ india } alt="" width={30}/>
        </div>
        <div className="we-offer-the">
        AudiHealth revolutionizes vocal care globally, reflecting the nation's spirit of innovation and excellence.
        </div>
      </div>
      <div className="footimp-div">
        <img className="footimp" src={ footimp } alt="" width={1530} />
      </div>
      <div className="vocalcare">AudiHealth</div>
      <div className="group-parent">
        <div className="factfinder-parent">
          <div className="factfinder">AudiHealth</div>
          <img className="vector-icon" alt="" src={logo} />
        </div>
        <div className="hackanova-hackathon-thakur-container">
          <p className="hackanova-hackathon-thakur">
            DevsHouse Hackathon<br></br> VIT, Chennai
          </p>
          <p className="hackanova-hackathon-thakur">15th Mar 2024</p>
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
