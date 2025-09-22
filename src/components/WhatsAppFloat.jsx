import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '917305135893';
    const message = 'Hi! I would like to discuss a project with KS Business Solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <div className="whatsapp-icon">
        💬
      </div>
    </div>
  );
};

export default WhatsAppFloat;