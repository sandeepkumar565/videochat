import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import ConnectCall from './components/ConnectCall';
import Notifications from './components/Notifications';

function App() {
  return (
    <div>
      <h1>Video Chat</h1>
      <VideoPlayer />
      <ConnectCall>
        <Notifications />
      </ConnectCall>
    </div>
  );
}

export default App;
