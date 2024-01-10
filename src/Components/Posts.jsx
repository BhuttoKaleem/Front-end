import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const Posts = ({posts}) => {
  const userData = useSelector((state) => state.userData);
  const [message, setMessage] = useState();
  const [blogPosts, setBlogPosts] = useState([]);
  if (!blogPosts) {
    setMessage("no post has been published yet");
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
      setMessage("Connection failed, Check Your Internet Connection:", error);
    }
  };

  const deleteBlogPost = async (postId) => {
    try {
      await axios.delete(
        `http://localhost:5000/blog-posts/deletepost/${postId}`
      ); 
      fetchBlogPosts(); 
        
    } catch (error) {
    
    }
  };
  return (
    <section>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          {blogPosts.map((post) => (
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
              {userData && userData.role === "admin" && (
                <div className="px-6 pt-4 pb-2">
                  <button
                    onClick={() => deleteBlogPost(post._id)}
                    className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => updateBlogPost(post._id)}
                    className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 focus:outline-none"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;