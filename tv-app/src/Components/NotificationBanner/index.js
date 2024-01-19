import React, { useState } from 'react';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(
    localStorage.getItem('notificationBannerVisible') !== 'true'
  );

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('notificationBannerVisible', 'true');
  };

  return (
    isVisible && (
      <div className="notification-banner">
        <p>
          <strong>TODAY ONLY:</strong> Celebrate National Popcorn Day with unlimited free
          refills on any size popcorn.
        </p>
        <button className="dismiss-button" onClick={handleDismiss}>
          Dismiss Notifications
        </button>
      </div>
    )
  );
};

export default NotificationBanner;


