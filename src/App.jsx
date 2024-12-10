
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
