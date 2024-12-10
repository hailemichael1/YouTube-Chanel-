import VideoCard from './vidioCard/VideoCard'; 
import "./main.css"

const Main = ({ videos }) => {
    return (
      <div className="feed">
        {videos?.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    );
};

export default Main;