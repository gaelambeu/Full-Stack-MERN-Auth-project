import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (   
    <div className="video-background">
      <video autoPlay muted loop id="myVideo">
        <source src={videoURL} type="video/mp4" />
      </video>
    </div>
      
  );
}
