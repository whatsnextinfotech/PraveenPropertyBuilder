// import React from 'react';
import React, { useEffect,useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import video from '../assest/videos/about.mp4'
import blueprint from '../assest/videos/blueprint2.mp4'
import CountUp from 'react-countup';

const PropertyDevelopers = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [showAboutTitle, setShowAboutTitle] = useState(false);

  // Handler to display the title after the video ends
   // Delay the reveal of the title while the video is playing
   useEffect(() => {
    const timer = setTimeout(() => {
      setShowAboutTitle(true);
    }, 3000); // 3 seconds delay (adjust the timing as needed)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      const stickyPosition = 580; // Position to start sticky
      const stopPosition = document.documentElement.scrollHeight - window.innerHeight - 1000; // 500px from the bottom
  
      if (window.scrollY > stickyPosition && window.scrollY < stopPosition) {
        setIsSticky(true);
         // This flag can be used to control styles at the stopping point
      } else if (window.scrollY >= stopPosition) {
        setIsSticky(false);
         // Apply non-sticky styles without hiding
      } else {
        setIsSticky(false);
       
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // In your component, use the `isSticky` and `reachedEnd` states to apply styles
  const videoStyles = {
    position: 'sticky',
    top: reachedEnd ? 'unset' : '0', // Keeps it in the current position
    bottom: reachedEnd ? '1000px' : 'unset', // Stop sticking 500px from the bottom
  };
  

  const impactData = [
    { count: 600, label: "Happy Customer" },
    { count: 300, label: "Projects" },
    { count: 150000, label: "Completed SQ.FT." }
  ];
  // video
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback speed of the video (e.g., 0.5 for half speed)
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <Container fluid className="property-developers py-5">
      
      <div className="about-us-section">
      <video
     
        autoPlay
        muted
        playsInline
        className="background-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Conditionally render the title with a slow reveal effect */}
      <Container
        fluid
        className={`text-center py-5 about-us-title-container ${showAboutTitle ? 'reveal' : ''}`}
      >
        <h1 className="about-us-title">ABOUT US</h1>
      </Container>
    </div>
<Container >
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="text-uppercase">
              Welcome to <span className="text-warning">Praveen</span> Property Developers
            </h1>
            <p className="lead">
              M/s Praveen property developers has started in the year 2008 by lion Mr. B. Udayakumar...
            </p>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="mb-5 Services">
          <Col md={7}>
            <p>
            M/s Praveen property developers has started in the year 2008 by lion Mr. B. Udayakumar Managing director in the name of “Praveen property developers builders and promoters” with the motive to evolved in to the construction of residential, commercial industrial services, all across Chennai. With our experience in the building Design and construction across several years.
            </p>
            <p>We can help with all your building construction, interiors, and renovation Needs no matter how big for small industry everything from planing designing and building your new home are with continued support once your home or project is complete.
            </p>
            <p>
            We are passionate about Building & Latest to establish Building lasting and latest trends and technology relationship with our customers by Exceeding their Expectations and gaining their trust through
            Exceptional performance by Every member of the construction team.
            </p>
            <p>The core Management has Extensive experience in construction & real estate industries.</p>

            <h2 className="text-uppercase">Services Offered at Praveen Property Developers</h2>
            <p>
            Praveen Property Developers in Chennai has delivered a large number of projects in the past that have received rave reviews and appreciation from numerous prestigious builders and other organizations associated with the real estate business. The team comprises of real estate professionals having vast experience and knowledge about properties. Each of the project of this company exhibits avant-garde interior designs – absolutely lavish, ostentatious and one-of-its-kinds. It has pioneered newer technologies and modern engineering that has helped it to create landmark residential townships as well as commercial establishments. Quality, on-time delivery and trust stand at the core of the business of this real estate organization. By giving wings to the dreams of millions of people, it is truly making a mark in the field. The office remains fully-operational between 00:00 – 23:59. To book appointments with one of the executives of the company, people can use the phone numbers mentioned above.
              {/* Shortened for brevity */}
            </p>
          </Col>
  {/* Sticky Video Section */}
      {/* Sticky Video Column */}
      <Col md={5} className={`sticky-col ${isSticky ? 'is-sticky' : ''}`}>
            <video  ref={videoRef} 
             src={blueprint} className="video-content"  autoPlay loop muted playsInline />
          </Col>
        </Row>

        {/* Mission & Vision Section */}
        <Row className="mission-vision">
          <Col md={6} className="text-center">
            <h3>Our Mission</h3>
            <p>
            Our mission is to provide a best service to the clients based on their requirements at all needs. We are concerned with the service and the safety that we provide to our clients.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <h3>Our Vision</h3>
            <p>
            Our vision is to prove our best service in the construction and improve our relationship with the customers which are enable us to grow further and improve our services.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="impact-section">
      <h2> <span className="highlight">Our Achievements</span></h2>
      <div className="impact-stats">
        {impactData.map((item, index) => (
          <div key={index} className="impact-item">
            <div className="impact-value">
              <CountUp className="count" end={item.count} duration={2} enableScrollSpy />
              <span className="plus">+</span>
            </div>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </div>

     
    </div>
    </Container>
  );
};

export default PropertyDevelopers;