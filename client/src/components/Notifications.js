import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { call, answerCall, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling...</h1>
          <button onClick={answerCall}>
            Accept
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;