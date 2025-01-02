import React from 'react';
import { Container, Row, Col, Image, Card, Carousel as BootstrapCarousel } from 'react-bootstrap'; // Import React Bootstrap's Carousel
import { FaRoad, FaPlug, FaBolt } from "react-icons/fa";
import { MdHomeWork } from 'react-icons/md';
import { GiBrickWall, GiDoubleStreetLights } from 'react-icons/gi';
import { motion } from 'framer-motion'; // Import Framer Motion
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Psa1 from '../../../assest/PB/Bloosom1.jpeg'
import Psa2 from '../../../assest/PB/Bloosom2.jpeg'
import Psa3 from '../../../assest/PB/Bloosom3.jpeg'
import school from '../../../assest/School/zion.png'
import college from '../../../assest/College/gkm.png'
import hospital from '../../../assest/Hospital/arokia.png'

import '../Facility.css';
const PraveenSudikshaGarden = () => {
  // Animation variants
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  const slideInLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 60 } }
  };

  const slideInRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 60 } }
  };

    // Animation variants for the words and the image
    const textAnimation = {
      hidden: { x: -200, opacity: 0 },  // Start from left with low opacity
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },  // Move to normal position with full opacity
    };
  
    const imageAnimation = {
      hidden: { x: 200, opacity: 0 },  // Start from right with low opacity
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },  // Move to normal position with full opacity
    };
  const items = [
    { id: 1, title: "Card 1", description: "This is card 1", image: Psa1 },
    { id: 2, title: "Card 2", description: "This is card 2", image: Psa2 },
    { id: 3, title: "Card 3", description: "This is card 3", image: Psa3 },
    // { id: 4, title: "Card 4", description: "This is card 4", image: Psa1 },
    // { id: 5, title: "Card 5", description: "This is card 5", image: Psa1 },
    // { id: 5, title: "Card 5", description: "This is card 6", image: "path/to/image5.jpg" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Container fluid>
      {/* Header with Background Image */}
      {/* <div style={{ 
        backgroundImage: 'url(https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg)', 
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h2 style={{
          position: 'absolute', 
          bottom: '10px',
          top:'50%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '10px 20px',
          borderRadius: '10px'
        }}>Ongoing Projects</h2>
      </div> */}

      {/* Project Name */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Row className="text-center my-4">
          <Col>
            <h1 style={{ fontFamily: 'Serif', color: '#4c1d1d'  ,  bottom: '10px',
          top:'50%', 
          left: '50%', 
          // transform: 'translateX(-50%)', 
          // backgroundColor: '#ff6600', 
          padding: '10px 20px',
          borderRadius: '10px'}}>Praveen Sudiksha Garden.</h1>
          </Col>
        </Row>
      </motion.div>

      {/* Project Image and Pricing */}
      
      <div className="carousel-wrapper">
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={1000} 
        centerMode={true} 
        showDots={false}
        draggable={true}  // Allows swipe interactions
      >
        {items.map(item => (
          <div key={item.id} className="cards">
            <img src={item.image} alt={item.title} className="cards-image" />
            {/* <h3>{item.title}</h3>
            <p>{item.description}</p> */}
          </div>
        ))}
       
      </Carousel> 
    </div>
    {/* price */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Row className="text-center mb-4">
        <Col>
          <p><strong>Price:</strong></p>
          <p><strong> Starting:</strong> 10,40,000  <strong>/ Ending:</strong>26,00,000  </p>
        </Col>
        </Row>
      </motion.div>

      {/* Map Section */}
      <Row className="justify-content-center mb-4">
        <Col md={12}>
          <Card className="text-center">
            <Card.Body>
              <div style={{ height: '350px', backgroundColor: '#d3d3d3',marginLeft:'20px', display: 'flex', justifyContent: 'center ', alignItems: 'center' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.16777134342!2d80.10506967507408!3d12.832432987470323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ5JzU2LjgiTiA4MMKwMDYnMjcuNSJF!5e0!3m2!1sen!2sin!4v1729676751212!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Location */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Row className="text-center mb-4">
        <Col>
          <p><strong>Location:</strong></p>
          <p> Urapakkam, Arungal.</p>
        </Col>
        </Row>
      </motion.div>

      {/* Specifications */}
      <Container className="d-flex justify-content-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
          <Row className="text-center mb-2 d-flex align-items-center justify-content-center">
            <Col>
              <p><strong>Specification:</strong></p>
              <Container className="text-center my-4">
                <Row className="justify-content-center mt-3 ">
                <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <FaRoad size={30} />
          <p>Road</p>
        </Col>
        
        
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <GiBrickWall size={30} />
          <p>Boundery</p>
        </Col>
        <Col xs={6} md={2} className="d-flex flex-column align-items-center mx-2">
          <GiDoubleStreetLights size={30} />
          <p className='Street'style={{width:'100px'}} > Street lights</p>
        </Col>
        
                </Row>
              </Container>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* school */}
      <div className="Specification" style={{ backgroundColor: '#FF6600' }}>
      <div className="container mt-2">
        <div className="row align-items-center">
          {/* Image - Sliding in from the right */}
          <motion.div
            className="col-md-7 text-center mb-1"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={imageAnimation}
            // Removed "once: true" to allow multiple animations
          >
            <img
              src={school}
              alt="Facility"
              width="500px"
              className="img-fluid facility-image"
            />
          </motion.div>

          {/* Text - Sliding in from the left */}
          <motion.div
            className="col-md-5"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={textAnimation}
            // Removed "once: true" to allow multiple animations
          >
            <div className="content-box reveal right">
              <h2>School</h2>
              <ul className="Specification">
              <li>Vivekananda Vidyalaya CBSC School</li>
                  <li>St. Joseph's Matric School</li>
                  <li>SCAD Kids School</li>
                  <li>CSI High School</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      {/* Specification Section */}
      {/* <motion.div initial="hidden" animate="visible" variants={slideInLeft} transition={{ duration: 0.5 }}>
      <div className="Specification" style={{backgroundColor:'#FF6600'}}>
        <div className="container mt-2">
          <div className="row align-items-center">
            <div className="col-md-7 text-center mb-1">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Yarn" 
                width="500px" 
                className="img-fluid facility-image" 
              />
            </div>
            <motion.div className="col-md-5" variants={slideInRight}>
            <div className="col-md-5">
              <div className="content-box">
            
                <h2>School</h2>
                <ul className="Specification">
                  <li>Zion international school</li>
                  <li>Kendriya vidyalaya</li>
                  <li>Shree niketan patasala</li>
                  <li>Global school</li>
                  <li>GKM Vidyasharam school</li>
                </ul>
                
              </div>
            </div></motion.div>
          </div>
        </div>
      </div>
           </motion.div> */}
  {/* College Section */}
<div className="School">
      <div className="container mt-2">
        <div className="row align-items-center flex-md-row-reverse">
          {/* Image - Slide in from the right */}
          <motion.div
            className="col-md-7 text-center mb-2"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={imageAnimation}
            // Removed "once: true" to allow multiple animations
          >
            <img 
              src={college} 
              alt="Yarn Dyeing" 
              className="img-fluid facility-image" 
            />
          </motion.div>

          {/* Text - Slide in from the left */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={textAnimation}
            // Removed "once: true" to allow multiple animations
          >
            <div className="content-box reveal right">
              <h2>Hospital:</h2>
              <ul className="Specification">
              <li> Krishna Hospital</li>
              <li>Gateway Dental Clinic  </li>
               <li>Madurantakam Govt Hospital</li>
               <li>Shri Maruthi Multi-speciality </li>
               
             
                </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

       {/* Hospital Section */}
      

    <div className="Hospital" style={{backgroundColor:'#FF6600'}}>
      <div className="container mt-1">
        <div className="row align-items-center">
          {/* Image - Slide in from the right */}
          <motion.div
            className="col-md-7 text-center mb-5"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={imageAnimation}
          >
            <img 
              src={hospital} 
              alt="Processing" 
              className="img-fluid facility-image" 
            />
          </motion.div>

          {/* Text - Slide in from the left */}
          <motion.div
            className="col-md-5"
            initial="hidden"
            whileInView="visible"  // Trigger animation when in the viewport
            variants={textAnimation}
          >
            <div className="content-box reveal left">
              <h2>Hospital</h2>
              <ul className="Specification">
              <li> Krishna Hospital</li>
              <li>Gateway Dental Clinic  </li>
               <li>Madurantakam Govt Hospital</li>
               <li>Shri Maruthi Multi-speciality </li>
               
                </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      
   
    </Container>
  );
};

export default PraveenSudikshaGarden;
