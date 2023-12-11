import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend when component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('/api/blog-posts'); // Replace with your backend API endpoint
      setBlogPosts(response.data); // Set fetched blog posts to state
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const deleteBlogPost = async (postId) => {
    try {
      await axios.delete(`/api/blog-posts/${postId}`); // Replace with your backend API endpoint for deleting blog posts
      fetchBlogPosts(); // Refresh blog posts after deletion
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="mb-4 text-2xl font-bold">Admin Dashboard - Blog Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Title</th>
              <th className="px-4 py-2 text-left border-b">Content</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post._id}>
                <td className="px-4 py-2 border-b">{post.title}</td>
                <td className="px-4 py-2 border-b">{post.content}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => deleteBlogPost(post._id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
