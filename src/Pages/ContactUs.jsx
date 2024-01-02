import React from 'react'
import { useState } from 'react';
import Template from "../Components/Template";
export default function ContactUs() {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Here you can perform actions like sending the form data to a backend server
          // For example: using fetch or Axios to make a POST request to a backend API
          console.log('Form submitted:', formData);
          // Reset form fields after submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        };
      
      
    return (
            <React.Fragment>
          <Template>
            <main>
            <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl mb-4 text-center font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>     
                </main>
                </Template>
                </React.Fragment>
  )
}