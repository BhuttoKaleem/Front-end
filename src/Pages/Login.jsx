import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import useAuth from '../Components/UseAuth';
import { LOGIN} from '../redux/actions';
import {Link} from 'react-router-dom'
import  axios  from 'axios';
import Swal from "sweetalert2";
export default function Login() {
          const state = useSelector(state=> state?.user);
          const dispatch = useDispatch();
          const authorized = useAuth();
          const globalState = useSelector((state)=>state)
          const navigate = useNavigate();
          const [userData,setUserData] = useState();
          const [formData, setFormData] = useState({
          // email: '',
          // password: '',
        });
        const handleChange = (e) => {
          e.preventDefault();
          const { name, value } = e.target; 
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
        const handleSubmit = async (e) => {
          e.preventDefault();
          // Perform login logic here (e.g., API request to authenticate user)
            try {
              const response = await axios.post('http://localhost:5000/user/login',{
                email: formData.email,
                password:formData.password
              }); 
              setUserData(response.data); // Set fetched user data to state
              dispatch({type:LOGIN,payload: response.data})
              // setIsLoggedIn(true)
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Logged in Successfully!",
                showConfirmButton: true,
                timer: 1000
              });
              navigate('/')
            } catch (error) {
              // setMessage("incorrect email or password");
              Swal.fire({
                title: "login failed",
                text: "incorrect email or password",
                icon: "error"
              });
            }
          console.log('Login form submitted:', formData);
          // Reset form fields after submission
          setFormData({
            email: '',
            password: '',
          });
        };
    return (
      <main>
      <div className="max-w-md mx-auto mt-10 p-[10vh] bg-gray-200 rounded-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-6">
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
          Login
        </button>
      </form>
      <div className='items-center'><span>Don't have an account? <Link to={"/SignUp"} className='font-bold'>Sign up</Link></span></div>
    </div>
    </main>
  )
}