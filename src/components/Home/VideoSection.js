import React, { useRef, useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPauseIcon, setShowPauseIcon] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hoverTime, setHoverTime] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressBarClick = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      const clickPercentage = Math.max(0, Math.min(1, clickX / progressBarWidth));
      const newTime = clickPercentage * duration;
      
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleProgressBarHover = (e) => {
    if (progressBarRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const hoverX = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      const hoverPercentage = Math.max(0, Math.min(1, hoverX / progressBarWidth));
      const hoverTimeValue = hoverPercentage * duration;
      
      setHoverTime(hoverTimeValue);
      setShowTooltip(true);
    }
  };

  const handleProgressBarLeave = () => {
    setShowTooltip(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const hoverPercentage = duration > 0 ? (hoverTime / duration) * 100 : 0;

  return (
    <section className="video-section section">
      <div className="container">
        <h2>Team Trailer</h2>
        <div className="video-container">
          <div className="custom-video-player">
            <video 
              ref={videoRef}
              className="trailer-video"
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={handlePlayPause}
              onMouseEnter={() => setShowPauseIcon(true)}
              onMouseLeave={() => setShowPauseIcon(false)}
              preload="metadata"
            >
              <source src="/videos/trailer_mid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="play-overlay" onClick={handlePlayPause}>
                <div className="play-button">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
                    <polygon points="32,25 32,55 58,40" fill="var(--primary-purple)" />
                  </svg>
                </div>
              </div>
            )}
            {isPlaying && showPauseIcon && (
              <div className="pause-overlay">
                <div className="pause-button">
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.8)" />
                    <rect x="22" y="18" width="6" height="24" fill="var(--primary-purple)" />
                    <rect x="32" y="18" width="6" height="24" fill="var(--primary-purple)" />
                  </svg>
                </div>
              </div>
            )}
            <div className="video-controls">
              <div className="progress-container">
                <div 
                  ref={progressBarRef}
                  className="progress-bar"
                  onClick={handleProgressBarClick}
                  onMouseMove={handleProgressBarHover}
                  onMouseLeave={handleProgressBarLeave}
                >
                  <div 
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  <div 
                    className="progress-handle"
                    style={{ left: `${progressPercentage}%` }}
                  ></div>
                  {showTooltip && (
                    <div 
                      className="time-tooltip"
                      style={{ left: `${hoverPercentage}%` }}
                    >
                      {formatTime(hoverTime)}
                    </div>
                  )}
                </div>
                <div className="time-display">
                  <span className="current-time">{formatTime(currentTime)}</span>
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 