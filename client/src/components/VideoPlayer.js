import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, myVideo, stream } = useContext(SocketContext);

  return (
    <div className="">
      {stream && (
        <div className="">
          <h3>{name || 'Name'}</h3>
          <video playsInline muted ref={myVideo} autoPlay className="" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;