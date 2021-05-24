import React, { useState, useContext } from 'react';

import { SocketContext } from '../SocketContext';

const ConnectCall = ({children}) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="">
      <h4>Account Info</h4>
      <input placeholder="Name" id="id" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" />
      
      <button onClick={()=>{
        navigator.clipboard.writeText(me);
      }}>
          Copy Your ID
      </button>
      
      <h4>Make call</h4>
      <input placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} autoComplete="off" />
      
      {callAccepted && !callEnded ? (
        <button onClick={leaveCall} className="">
          Hang Up
        </button>
      ) : (
        <button onClick={() => callUser(idToCall)} className="">
          Call
        </button>
      )}

      {children}
      
    </div>
  );
};

export default ConnectCall;