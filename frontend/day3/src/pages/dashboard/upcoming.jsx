import React from 'react';

function UpcomingEvent(props) {
  const { eventName, eventDate, eventLocation } = props;

  return (
    <div className="upcoming-event">
      <h2>{eventName}</h2>
      <p>Date: {eventDate}</p>
      <p>Location: {eventLocation}</p>
    </div>
  );
}

export default UpcomingEvent;
