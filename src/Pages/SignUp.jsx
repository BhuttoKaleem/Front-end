import React from 'react'
import { useState } from 'react';
import Template from "../Components/Template";
export default function SignUp() {
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));      
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform signup logic here (e.g., API request to register user)
            console.log('SignUp form submitted:', formData);
            // Reset form fields after submission
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
          };

    return (
<React.Fragment>
          <Template>
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
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
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
                </main>
                </Template>
                </React.Fragment>
    )
    }
