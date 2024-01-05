import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const Posts = () => {
  const userData = useSelector((state) => state);
  // const userId = userData.user?.userData._id;
  const userId = userData?.user?.userData?._id;
    // const [message,setMessage] = useState();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
      if (userId) {
        fetchBlogPosts(userId);
      }
    }, [userId]); 
      const fetchBlogPosts = async (userId) => {
        try {
        const response = await axios.get(`http://localhost:5000/blog-posts/`);
        // const userBlogPosts = response.data.map(post => post._id === userId, post.title, post.content);
        // console.log(response.data);
        // setBlogPosts(userBlogPosts);        
        setBlogPosts(response.data);
        } catch (error) {
          // setMessage('Error fetching blog posts:', error);
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

  const updateBlogPost = async(postId)=>{

  }
    return (
      <section>
        <div className="container mx-auto mt-2 ">
          <div className="flex">
            {blogPosts.map((post) => {
              // console.log(blogPosts)
              // Check if the post's _id matches the userId before rendering
              // if (`${post._id}` === `${userId}`) {
                return (
                  <div key={post._id} className="max-w-sm rounded shadow-lg m-2">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{post.title}</div>
                      <p className="text-gray-700 text-base">{post.content}</p>
                    </div>
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
                  </div>
                );
              // } else {
              //   return null; // If the post doesn't match the userId, don't render it
              // }
            })}
          </div>
        </div>
      </section>
    );
  };  
export default Posts