import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home Page</p>
      <button onClick={getPosts}>Get Posts</button>
      <ul>
        {posts.map((post) => (
          <div>
            < li key={post.id}>{post.title}
            <br></br>
          <br></br>
            {post.body}
            </li>
            
          </div>

        ))}
      </ul>
        <p>Here  </p>
    </div>
  );
}

