import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const Posts = () => {
  const userData = useSelector(state => state.userData);
    const [message,setMessage] = useState();
    const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend when component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blog-posts'); // Replace with your backend API endpoint
      setBlogPosts(response.data); // Set fetched blog posts to state
    } catch (error) {
      setMessage('Error fetching blog posts:', error);
    }
  };

  const deleteBlogPost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/blog-posts/deletepost/${postId}`); // Replace with your backend API endpoint for deleting blog posts
      fetchBlogPosts(); // Refresh blog posts after deletion
    } catch (error) {
      setMessage("can't delete this post");
    }
  };
  return (
    <section>
        <div className="container mx-auto mt-10">
      <div className="flex">
      {blogPosts.map((post) => (
  <div key={post._id} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{post.title}</div>
      <p className="text-gray-700 text-base">{post.content}</p>
      <p className="text-white bg-indigo-700 text-base">author:   {post?.author.username}</p>
    </div>
    {userData && userData.role === 'admin' && (
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
    <div>{message}</div>
    </section>
  )
}

export default Posts