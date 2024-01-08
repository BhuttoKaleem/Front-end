import { useState } from 'react';
import  axios  from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
export default function CreatePost() {
  const userData = useSelector((state)=>state);
  const userId = userData.user?.userData._id;
    const navigate = useNavigate();
  const [message,setMessage] = useState();
        const [formData, setFormData] = useState({
          title: '',
          description: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));      
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              await axios.post('http://localhost:5000/blog-posts/createpost/', {
                  title: formData.title,
                  content: formData.description,
                  author: userId
              });
              Swal.fire({
                title: "Post Created!",
                text: "Your post has been created successfully!",
                icon: "success"
              });
              navigate('/');
              setTitle('');
              setDescription('');
            } catch (error) {
              // console.error('Failed to create post', error);
              // console.log(userId);
              // Swal.fire({
              //   title: "Blog publication failed!",
              //   text: "enter text carefully! ",
              //   icon: "error"
              // });
            }
          }          
    return (

            <main>
            <div className="max-w-md mx-auto mt-10 p-[10vh] bg-gray-200 rounded-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Publish Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
          <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Publish
        </button>
      </form>
    </div>
    {/* <div className='bg-red-400'> {message}</div>   */}
                </main>

    )
    }