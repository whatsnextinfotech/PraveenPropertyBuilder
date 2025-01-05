import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import { useParams } from 'react-router-dom';

import { FaRoad, FaPlug, FaWater } from "react-icons/fa";
import { GiCctvCamera, GiBrickWall, GiDoubleStreetLights } from "react-icons/gi";
import { MdHomeWork } from 'react-icons/md';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import './ProductDetail.css';

const ProductDetail = () => {
  const { loading, product } = useSelector(state => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const items = [
    { id: 1, image: product?.image1 },
    { id: 2, image: product?.image2 },
    { id: 3, image: product?.image3 },
  ];



const handleDownload = () => {
  if (product.pdf) {
    const link = document.createElement('a');
    link.href = product.pdf;  // URL to the PDF file
    link.download = 'brochure.pdf';  // Optional: specify the filename for the download
    link.click();
  } else {
    alert('No PDF file found!');
  }
};


  const Specification = ({ icons }) => (
    <Row className="text-center mb-2 rowcontent">
      {icons.map(({ Icon, label }, index) => (
        <Col key={index} xs={6} md={2} className="d-flex flex-column align-items-center">
          <Icon size={30} />
          <p>{label}</p>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container fluid>
      {/* Title Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Row className="text-center my-4">
          <Col>
            <h1 className="project-title">{product.name}</h1>
          </Col>
        </Row>
      </motion.div>

      {/* Image Carousel */}
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1000}
          centerMode
          showDots={false}
          draggable
        >
          {items.map((item) => (
            <div key={item.id} className="cards">
              <img src={item.image} alt={`Slide ${item.id}`} className="cards-image" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Price Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Row className="text-center mb-4">
          <Col>
            <p><strong>Price:</strong></p>
            <p><strong>Starting:</strong> ₹{product.start_price} <strong>Ending:</strong> ₹{product.end_price}</p>
          </Col>
        </Row>
      </motion.div>

      {/* PDF Download Button */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Row className="text-center mb-4 pdf">
          <Col>
            <button onClick={handleDownload}>Download Broucher</button>
          </Col>
        </Row>
      </motion.div>

      {/* Location Map Section */}
      <Row className="justify-content-center mb-4">
        <Col md={12}>
          <Card className="text-center">
            <Card.Body>
              <div className="map-container">
                <iframe
                  src={product.map}
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
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Row className="text-center mb-4">
          <Col>
            <p><strong>Location:</strong> {product.location}</p>
          </Col>
        </Row>
      </motion.div>

      {/* Specification Icons */}
      <Container className="d-flex justify-content-center specification">
        <h3>Specification:</h3>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Specification
            icons={[
              { Icon: FaRoad, label: 'Road' },
              { Icon: GiBrickWall, label: 'Boundary' },
              { Icon: GiDoubleStreetLights, label: 'Street Lights' },
              { Icon: FaPlug, label: 'EB' },
              { Icon: MdHomeWork, label: 'Residential' },
              { Icon: FaWater, label: 'Ground water' },
              { Icon: GiCctvCamera, label: 'CCTV' },
            ]}
          />
        </motion.div>
      </Container>

      {/* School Section */}
      <div className="Specification" style={{ backgroundColor: '#FF6600' }}>
        <div className="container mt-2">
          <div className="row align-items-center">
            <motion.div className="col-md-7 text-center mb-1" initial="hidden" whileInView="visible" variants={imageAnimation}>
              <img src={product.schoolimage} className="img-fluid facility-image" />
            </motion.div>
            <motion.div className="col-md-5" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2>School:</h2>
              <ul className="product-distribution-list">
                {product.school_list && product.school_list.split('|').filter(point => point.trim()).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* College Section */}
      <div className="Specification">
        <div className="container mt-2">
          <div className="row align-items-center">
            <motion.div className="col-md-5" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2>College:</h2>
              <ul className="product-distribution-list">
                {product.college_list && product.college_list.split('|').filter(point => point.trim()).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="col-md-7 text-center mb-1" initial="hidden" whileInView="visible" variants={imageAnimation}>
              <img src={product.collegeimage} className="img-fluid facility-image" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hospital Section */}
      <div className="Specification" style={{ backgroundColor: '#FF6600' }}>
        <div className="container mt-2">
          <div className="row align-items-center">
            <motion.div className="col-md-7 text-center mb-1" initial="hidden" whileInView="visible" variants={imageAnimation}>
              <img src={product.hospitalimage} className="img-fluid facility-image" />
            </motion.div>
            <motion.div className="col-md-5" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h2>Hospital:</h2>
              <ul className="product-distribution-list">
                {product.hospital_list && product.hospital_list.split('|').filter(point => point.trim()).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
