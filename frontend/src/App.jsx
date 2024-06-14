import VideoPlayer from "VideoPlayer";
import { useRef } from "react";
function App() {
  const playerRef = useRef(null);
  const videoLink = "it is the link or url which is on postman";

  const videoPlayerOptions = {
    constrols: true,
    responsive: true,
    fluid: true,
    sources: [{ src: videoLink, type: "application/x-mpegURL" }],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    //You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });
    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
