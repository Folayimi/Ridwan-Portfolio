"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import emailjs from "emailjs-com";
import Loader from "@/atomic-componets/Loader/Loader";
import { notify, notifyError } from "@/atomic-componets/toastify";
import { about, about1, about2 } from "@/atomic-componets/AnimationOrder";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_o2ig5sh", // from EmailJS dashboard
        "template_r3fnghh", // from EmailJS dashboard
        formData,
        "5OYvpeiylaOMTUUDi" // EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          notify("Message sent!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (err) => {
          console.error("FAILED...", err);
          setLoading(false);
          notifyError("Something went wrong. Please try again later.");
        }
      );
  };

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const b1 = useRef(null);
  const b2 = useRef(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= b1.current.offsetTop - 600) {
      controls1.start("visible");
    }
    if (scrollY >= b2.current.offsetTop - 600) {
      controls2.start("visible");
    }
  };
  useEffect(() => {
    // const onScroll = () => {
    //   window.requestAnimationFrame(handleScroll);
    // };

    // window.addEventListener("scroll", onScroll);
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="w-full flexmm gap-[30px] mt-0 md:mt-[30px] md:border-l-[1px] md:border-r-[1px] rounded-[20px] md:px-[100px] lg:px-[150px]"
      id="contact"
    >
      <section className="py-[70px] md:py-[100px] px-[5%] text-black">
        <motion.h2
          // variants={about2}
          // initial="hidden"
          // animate={controls1}
          ref={b1}
          className="text-[25px] font-bold mb-[40px]"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          // variants={about}
          // initial="hidden"
          // animate={controls2}
          ref={b2}
          className="text-[#6E6E6E] leading-[2.0] md:leading-[1.6] text-[18px] text-justify max-w-xl mb-10"
        >
          I’m always open to new opportunities, creative collaborations, or
          simply exchanging ideas with like-minded people. Whether you’d like to
          discuss a project, request my portfolio, or just connect, feel free to
          reach out.
        </motion.p>

        <motion.form
          // variants={about1}
          // initial="hidden"
          // animate={controls2}
          ref={b2}
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
            {loading ? (
              <>
                <div className="flexmm gap-[10px]">
                  <Loader />
                  <p>Sending...</p>
                </div>
              </>
            ) : (
              <>
                <p>Send Message</p>
              </>
            )}
          </button>
        </motion.form>
      </section>
    </div>
  );
};

export default ContactForm;
