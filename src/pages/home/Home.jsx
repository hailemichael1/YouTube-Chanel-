import React, { useEffect, useState } from "react";
import "./home.css";
import Main from "../../components/Main/Main";
import { API_KEY, CHANNEL_ID } from "../../components/servises/data";

const Home = () => {
 const [videos, setVideos] = useState([]);
 const [loading, setLoading] = useState(true);

const fetchChannelVideos = async () => {
  const response = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=38`
 
   await fetch(response)
     .then((response) => response.json())
     .then((data) => setVideos(data.items));
};


 useEffect(() => {
  setLoading(false);
   fetchChannelVideos();
 }, []);

  return (
    <>
      <div className="Home-page">
        {loading ? <p>Loading videos...</p> : <Main videos={videos} />}
      </div>
    </>
  );
};

export default Home;
