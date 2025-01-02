import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+919884961853'; // Your WhatsApp number with country code
  const message = 'Welcome To Praveen Property Developers'; // Default message (optional)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <FaWhatsappSquare className="whatsapp-icon" size={60} color="#25D366" onClick={handleWhatsAppClick} />
    </div>
  );
};

export default WhatsAppButton;
