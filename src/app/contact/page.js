'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log('Submitting Form:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed to send message: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Client Error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-animated pt-24 pb-12">
      <div className="container mx-auto p-6 max-w-lg">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/50 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-green-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-green-500 focus:outline-none focus:border-green-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-green-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-green-500 focus:outline-none focus:border-green-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-green-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-green-500 focus:outline-none focus:border-green-400"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-6 text-center text-gray-200">{status}</p>}
      </div>
    </div>
  );
}