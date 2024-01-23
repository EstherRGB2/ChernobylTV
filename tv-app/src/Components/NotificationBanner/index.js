import React, { useState } from 'react';

const NotificationBanner = () => {
  // Always set isVisible to true initially to show the banner on page load
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    // Use sessionStorage to persist the dismissal state only during the session
    sessionStorage.setItem('notificationBannerDismissed', 'true');
  };

  // Check sessionStorage to see if the banner was dismissed during the session
  const isDismissed = sessionStorage.getItem('notificationBannerDismissed') === 'true';

  return (
    !isDismissed && isVisible && (
      <div className="notification-banner">
        <p>
          <strong>TODAY ONLY:</strong> Celebrate National Popcorn Day with a free box of popcorn at your local Wal-Mart.
        </p>
        <button className="dismiss-button" onClick={handleDismiss}>
          Dismiss Notifications
        </button>
      </div>
    )
  );
};

export default NotificationBanner;



