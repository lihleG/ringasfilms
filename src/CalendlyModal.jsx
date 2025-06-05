import { PopupModal } from 'react-calendly';
import { useState } from 'react';

const CalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="calendly-button">
        Schedule a Call
      </button>

      {isOpen && (
        <PopupModal
          url="https://calendly.com/ringafilms/30min" // Replace with your actual Calendly URL
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById('root')} // Ensure this is valid
          pageSettings={{
            backgroundColor: '#ffffff',
            hideEventTypeDetails: false,
            primaryColor: '#ff6b00',
            textColor: '#000000',
          }}
        />
      )}
    </>
  );
};

export default CalendlyModal;

