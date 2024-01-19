import React, { useEffect, useState } from 'react';
// import "./new.css"

function CardPopup({ title, content, onClick }) {
  // State to manage the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling when the CardPopup is mounted
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the CardPopup is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); // Run this effect only once, when the component mounts

  const handleClose = () => {
    // Update the state to hide the popup
    setPopupVisible(false);
    // You can also call the provided onClick function here
    // to handle any additional actions when the close button is clicked
    if (onClick) {
      onClick();
    }
  };

  // Render the popup only if isPopupVisible is true
  return isPopupVisible ? (
    <div className="fixed top-0 left-0 w-full h-full overflow-auto flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 bg-white p-6 rounded-lg shadow-md max-h-[90vh] overflow-auto">
        <h1 className="text-xl font-semibold mb-4">{title}</h1>
        <p>{content}</p>
        <button onClick={handleClose} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default CardPopup;
