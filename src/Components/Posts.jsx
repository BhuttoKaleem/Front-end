import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
const Posts = ({posts}) => {
  const [message,setMessage] = useState();
  const [blogPosts, setBlogPosts] = useState(posts);
  if(!fetchBlogPosts){
    setMessage("Database is not connected. here is the demo of website")
  }

  useEffect(() => {
    // Fetch blog posts from the backend when component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blog-posts"); // Replace with your backend API endpoint
      setBlogPosts(response.data); // Set fetched blog posts to state
    } catch (error) {
      console.log("Connection failed, Check Your Internet Connection:", error);
    }
  };
  return (
    <section>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          {blogPosts?.map((post) => (
            <div
              key={post._id}
              className="max-w-sm rounded overflow-none shadow-lg m-2"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{post.title}</div>
                <span className="text-gray-700 text-base">{post.content}</span>
                <span>...</span><Link to={`/comments/${post._id}`}>Details</Link>
                <div className="flex flex-row gap-[20vh]">
                  <span className="text-white bg-indigo-700 text-base">
                    by: {post?.author.username}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     at:{" "}
                    {new Date(post?.date).toLocaleDateString() +
                      " " +
                      new Date(post?.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                  </span>
                </div>
              </div> 
            </div>
          ))}
        </div>
        <span>
        <p>{message}
        <Link to="https://www.loom.com/share/0e081b3fddab485ba354c1b9257f325b?sid=daa9fd03-75c0-42ae-88ae-7125a2b14dc2"> Click here
      </Link></p>
      </span>
      </div>
    </section>
  );
};

export default Posts;