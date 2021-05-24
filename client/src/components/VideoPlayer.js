import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="">
      {stream && (
        <div className="">
          <h3>{name || 'Name'}</h3>
          <video playsInline muted ref={myVideo} autoPlay className="" />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="">
          <h3>{call.name || 'Name'}</h3>
          <video playsInline ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;