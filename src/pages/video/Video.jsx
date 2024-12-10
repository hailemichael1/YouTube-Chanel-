import React, { useEffect, useState } from "react";
import PlayVideo from "../../components/Play-video/PlayVideo";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [videoId]);

  return (
    <div className="play-container">
      {loading ? (
        <p>Loading video...</p>
      ) : (
        <>
          <PlayVideo videoId={videoId} />
        </>
      )}
    </div>
  );
};

export default Video;
