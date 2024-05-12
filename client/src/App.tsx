import { useState } from 'react';
import './App.css'
import VideoPlayer from './VideoPlayer';

function App() {
  const [url, setUrl] = useState("");
  const [renderVideo, setRenderVideo] = useState(false);

  function handleButtonClick(): void {
    setRenderVideo(prevState => !prevState);
    const videoElement : any = document.getElementById("video-source");
    if(videoElement && videoElement.load) {
      videoElement.load();
    }
  }

  return (
    <>
      <div>
        <input value={url} onChange={e => setUrl(e.currentTarget.value)}/>
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <div>
        {
          renderVideo && (
            <VideoPlayer url={url}/>
          )
        }
      </div>
    </>
  )
}

export default App
