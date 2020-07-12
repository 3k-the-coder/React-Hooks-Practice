import React, { useState, useEffect } from "react";
import axios from "axios";

let count = 0;
function DataFetching() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idFromButtonClick, setIdFromButtonClick] = useState(1) 

  // Fetch all the posts
  // useEffect(() => {
  //     const postsList = axios.get("https://jsonplaceholder.typicode.com/posts")
  //                             .then(response => setPosts(response.data))
  //                             .catch(error => console.log(error))

  // }, [])

  // Fetch single post on button click

  useEffect(() => {
    const postsList = axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  const handleClick = () => setIdFromButtonClick(id)

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick = {handleClick}> Fetch Post </button>
      <React.Fragment key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </React.Fragment>
      {/* {posts.map((post) => (
        <React.Fragment key={post.id}>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </React.Fragment>
      ))} */}
    </div>
  );
}

export default DataFetching;
