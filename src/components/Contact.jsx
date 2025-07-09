// components/ContactForm.jsx
"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API or email logic
    alert("Message sent! (Form functionality can be added here)");
  };

  return (
    <div
      className="w-full flexmm gap-[30px] mt-[30px] border-l-[1px] border-r-[1px] rounded-[20px] px-[150px]"
      id="contact"
    >
      <section className="py-[100px] px-[5%] bg-white text-black">
        <h2 className="text-[30px] font-bold mb-[40px]">Let's Connect</h2>
        <p className="text-[#6E6E6E] text-[18px] text-justify max-w-xl mb-10">
          I’m always open to new opportunities, creative collaborations, or
          simply exchanging ideas with like-minded people. Whether you’d like to
          discuss a project, request my portfolio, or just connect, feel free to
          reach out.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-1 p-4 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-1 p-4 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            name="message"
            placeholder="Write your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="col-span-1 sm:col-span-2 p-4 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-black text-white py-3 rounded-xl hover:scale-103 transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
