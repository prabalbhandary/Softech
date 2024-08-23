import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    category: "",
    message: "",
    name: "",
    email: "",
    isRobot: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
    // Reset form or show a success message as needed
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-teal-500 mb-4">
        What do you need help with?
      </h1>

      <form onSubmit={handleSubmit}>
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <option value="">Select a category...</option>
          <option value="a">I have a question before signing up...</option>
          <option value="b">I can't access my account...</option>
          <option value="c">Something might be broken...</option>
          <option value="d">I'd like to request a feature...</option>
          <option value="e">I have a billing question...</option>
          <option value="f">Other</option>
        </select>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="isRobot"
              checked={formData.isRobot}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="isRobot" className="text-sm text-gray-700">I am not a robot</label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
