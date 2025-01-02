import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './Facility.css';

const Facility = () => {
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const images = document.querySelectorAll('.facility-image');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });

      images.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < windowHeight - 100) {
          img.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
       
    


    <div>
       
       {/* <div className="about-us-section">
      <Container fluid className="text-center py-5">
        <h1 className="about-us-title">ABOUT US</h1>
      </Container>
    </div> */}

      {/* Specification Section */}
      <div className="Specification">
        <div className="container mt-2">
          <div className="row align-items-center">
            <div className="col-md-7  text-center mb-1">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Yarn" 
                width="500px" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-5">
              <div className="content-box reveal right">
              <h2>School</h2>
                <ul className="Specification">
                  <li>Zion international school</li>
                  <li>Kendriya vidyalaya</li>
                  <li>Shree niketan patasala</li>
                  <li>Global school</li>
                  <li>GKM Vidyasharam school</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Section */}
      <div className="School">
        <div className="container mt-2">
          <div className="row align-items-center flex-md-row-reverse ">
            <div className="col-md-7 text-center mb-2">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Yarn Dyeing" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-3">
              <div className="content-box reveal right">
                <h2>College :</h2>
                <ul className="Specification">
              <li>  Sri Balaji Arts & science college  </li>
               <li> GKM engineering college  </li>
               <li> Bharath institute of Law  </li>
               <li> Madras Christian College  </li>
               <li> Tagore Engineering </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Section */}
      <div className="Hospital">
        <div className="container mt-1">
          <div className="row align-items-center">
            <div className="col-md-7 text-center mb-5">
              <img 
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
                alt="Processing" 
                className="img-fluid facility-image" 
              />
            </div>
            <div className="col-md-5">
              <div className="content-box reveal left">
                <h2>Hospital</h2>
                <ul className="Specification">
                  <li>Sri Balaji Arts & science college</li>
                  <li>GKM engineering college</li>
                  <li>Bharath institute of Law</li>
                  <li>Madras Christian College</li>
                  <li>Tagore Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
