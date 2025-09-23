import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_API_URL, { name, email, message });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row gap-8">
    
    {/* Left Side - Map + Info */}
    <div className="lg:w-2/3 md:w-1/5 bg-gray-300 rounded-lg overflow-hidden p-4 flex items-end justify-start relative h-96">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Delhi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{}}
      ></iframe>
      {/* <h1>Use Location For Better..</h1> */}
    </div>

    {/* Right Side - React Contact Form */}
    <div className="lg:w-2/4 md:w-1/2 w-full bg-white flex flex-col items-center justify-center mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="text-gray-900 text-2xl mb-4 font-semibold text-center title-font">Contact</h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-600 mb-1">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm text-gray-600 mb-1">Message</label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-2 px-3 resize-none transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg py-2.5 w-full text-lg transition-all duration-200"
        >
          Submit
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
      </p>
    </div>

  </div>
</section>

  );
};

export default Contact;


