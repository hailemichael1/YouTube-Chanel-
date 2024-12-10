
import React from "react";
import "./NotFound.css"; 
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        You can go back to the <a href="/">Home Page</a>.
      </p>
    </div>
  );
};

export default NotFound;
