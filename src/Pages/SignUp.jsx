import { useState } from 'react';
import  axios  from 'axios';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
export default function SignUp() {
  const navigate = useNavigate();
  const [message,setMessage] = useState();
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));      
        }
        const handleSubmit = async(e) => {
            e.preventDefault();
            // Perform signup logic here (e.g., API request to register user)
            try {
              const response = await axios.post('http://localhost:5000/user/signup',{
                username: formData.username,
                email: formData.email,
                password:formData.password
              });
              Swal.fire({
                title: "Registered!",
                text: "Registered Successfully!",
                icon: "success"
              });
              navigate('/login')
              // setIsLoggedIn(true)          
            } catch (error) {
              // setMessage("user already registered please login");
              Swal.fire({
                title: "Registration failed!",
                text: "you are already registered please login!",
                icon: "error"
              });
              navigate('/login')
            }
            // console.log('SignUp form submitted:', formData);
            // Reset form fields after submission
            setFormData({
              username: '',
              email: '',
              password: '',
            });
          };
    return (

            <main>
            <div className="max-w-md mx-auto mt-10 p-[10vh] bg-gray-200 rounded-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
          <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
    <div className='bg-red-400'> {message}</div>  
                </main>

    )
    }