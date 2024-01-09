import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Posts = () => {
  const userData = useSelector((state) => state);
  const userId = userData?.user?.userData?._id;
  const [blogPosts, setBlogPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    if (userId) {
      fetchBlogPosts(userId);
    }
  }, [userId]);

  const fetchBlogPosts = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/blog-posts/getPostsByUser/${userId}`);
      setBlogPosts(response.data);
    } catch (error) {
      // Handle error
    }
  };

  const deleteBlogPost = async (postId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this post?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success"
          });
          await axios.delete(`http://localhost:5000/blog-posts/deletepost/${postId}`);
          fetchBlogPosts(userId);
        }
      });
    } catch (error) {
        Swal.fire({
        title: "Deletion failed!",
        text: "Can't delete this!",
        icon: "error"
      });
    }
  };

  const updateBlogPost = async (postId) => {
    try {
      const updatedPost = {
        title: editedTitle,
        content: editedContent,
      };
      await axios.patch(`http://localhost:5000/blog-posts/updatePost/${postId}`, updatedPost);
      setEditPostId(null);
      fetchBlogPosts(userId);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your post has been Updated!",
        showConfirmButton: true,
        timer: 5000
      });
    } catch (error) {
      Swal.fire({
            title: "failed to update!",
            text: "can not edit this post",
            icon: "error"
          });
    }
  };

  const handleEdit = (postId, title, content) => {
    setEditPostId(postId);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const cancelEdit = () => {
    setEditPostId(null);
    setEditedTitle('');
    setEditedContent('');
  };

  return (
    <section>
      <div className="container mx-auto mt-2">
        <div className="flex">
          {blogPosts.map((post) => (
            <div key={post._id} className="max-w-sm rounded shadow-lg m-2">
              {editPostId === post._id ? (
                <div className="px-6 py-4">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="mb-2 px-3 py-2 border rounded"
                    placeholder="Title"
                  />
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="mb-2 px-3 py-2 border rounded"
                    placeholder="Content"
                  ></textarea>
                  <div className="flex">
                    <button
                      onClick={() => updateBlogPost(post._id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button onClick={cancelEdit} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.content}</p>
                  <div className="flex flex-row gap-[20vh]">
                    <p className="text-white bg-indigo-700 text-base">
                      by: {post?.author.username}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; at:{' '}
                      {new Date(post?.date).toLocaleDateString() +
                        ' ' +
                        new Date(post?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <button
                      onClick={() => deleteBlogPost(post._id)}
                      className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(post._id, post.title, post.content)}
                      className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 focus:outline-none"
                    >
                      Edit
                    </button>
                  </div>
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
