"use client";

import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.service.trim()) newErrors.service = "Service is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", phone: "", service: "", message: "" });
      onClose();
      alert("Thank you for your message!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center" style={{ zIndex: 1000 }}>
      <div className="bg-black p-4 rounded-lg shadow-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-cards"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label htmlFor="name" className="block text-white font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>


          <div>
            <label htmlFor="phone" className="block text-white font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="service" className="block text-white font-medium">
              Email
            </label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-cards mb-4 text-black p-2 rounded-lg hover:bg-card1 hover:text-white"
          >
            Submit
          </button>
        </form>
        <p className="text-white w-full mt-4"><span className="text-cards pt-4">Disclaimer:</span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message . Message and data rates may apply. Reply STOP to opt out of further messaging. Visit <a href='/privacypolicy' className='text-cards underline'>Privacy Policy Page</a> for further knowledge.</p>
      </div>
    </div>
  );
};

export default ContactModal;
