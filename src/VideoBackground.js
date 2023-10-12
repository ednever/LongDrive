import React, { useEffect, useRef } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });

    return () => {
      video.removeEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted>
        <source src="w211.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      </div>
    </div>
  );
};

export default VideoBackground;
