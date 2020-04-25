//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import Data from "../../dummy-data";


const PostsPage = () => {
  // set up state for your data
  const [state] = useState(Data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
    {state.map((item)=>{
      return (
        <Post post={item} key={item.id} />
      );
    })}

    </div>
  );
};

export default PostsPage;
