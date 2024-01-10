import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useSelector} from "react-redux";
const Comments = () => {
  const userData = useSelector((state) => state);
  const userId = userData?.user?.userData?._id;
  // const isLoggedIn = !!userId;
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch post details and related comments for the postId
    const fetchPostDetails = async () => {
      // console.log(userId)
      try {
        const postResponse = await axios.get(`http://localhost:5000/blog-posts/getPost/${postId}`);
        const commentsResponse = await axios.get(`http://localhost:5000/comment/${postId}`);
        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = async () => {
    try {
      await axios.post(`http://localhost:5000/comment/createComment/${postId}`, { text: newComment, author: userId });
      // Refresh comments after adding a new comment
      const commentsResponse = await axios.get(`http://localhost:5000/comment/${postId}`);
      setComments(commentsResponse.data);
      setNewComment(''); // Clear the input field
    } catch (error) {
      Swal.fire({
        title: "You can't comment!",
        text: "Login first",
        icon: "error"
      });
    }
  };


  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/comment/deleteComment/${commentId}`);
      // Refresh comments after deleting a comment
      const commentsResponse = await axios.get(`http://localhost:5000/comment/${postId}`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };


  return (
    <div className="p-4">
      {post && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <div className="space-y-2">
            <textarea 
              value={newComment} 
              onChange={handleCommentChange} 
              className="w-[30%] p-2 border border-gray-300 rounded"
            />
            <div/>
            <button 
              onClick={addComment} 
              className="w-[10%] p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Comment
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold">Comments</h3>
            <ul className="space-y-2">
              {comments.map((comment) => (
                <li key={comment._id} className="p-2 border border-gray-300 rounded">
                  {comment.text}
                  <button 
                    onClick={() => deleteComment(comment._id)} 
                    className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
