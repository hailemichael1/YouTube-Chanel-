
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h4>{video.snippet.title}</h4>
      </Link>
    </div>
  );
};

export default VideoCard;
