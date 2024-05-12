import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);

  const handleProgress = (state: { playedSeconds: number }) => {
    // Update playedSeconds when video is playing
    if (!seeking) {
      setPlayedSeconds(state.playedSeconds);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayedSeconds(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    playerRef.current?.seekTo(playedSeconds);
  };

  const handleRewind = () => {
    setPlayedSeconds(playedSeconds - 10);
    playerRef.current?.seekTo(playedSeconds - 10);
  };

  const handleForward = () => {
    setPlayedSeconds(playedSeconds + 10);
    playerRef.current?.seekTo(playedSeconds + 10);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        onProgress={handleProgress}
      />
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={playedSeconds}
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
        />
      </div>
      <div>
        <button onClick={handleRewind}>Rewind 10s</button>
        <button onClick={handleForward}>Forward 10s</button>
      </div>
    </div>
  );
};

export default VideoPlayer;