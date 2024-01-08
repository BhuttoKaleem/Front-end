import React, { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {UPDATE_USER} from '../redux/actions'
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios'
const Profile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  // const userId = userData?._id;
  const [username, setUsername] = useState(userData.username); 
  const [email, setEmail] = useState(userData.email); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


     
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const updatedUser = {
          username: username,
          email:email,
        };
        const userId =  userData._id;
        console.log(userId)
        await axios.patch(`http://localhost:5000/user/updateUser/${userId}`, updatedUser);
        // dispatch(UPDATE_USER(updatedUser));
        dispatch({type:UPDATE_USER,payload: updatedUser})
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User data has been Updated!",
          showConfirmButton: true,
          timer: 5000
        });
        // Navigate('/')
      } catch (error) {
        Swal.fire({
              title: "failed to update!",
              text: "can not edit this profile",
              icon: "error"
            });
        // console.log(updatedUser)
      }
    };  
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;