"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });
    setStatusMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: false });
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, error: true });
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text={"Get in touch"} />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>
          <button
            type="submit"
            disabled={status.loading}
            className={`w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer ${
              status.loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
          {statusMessage && (
            <p
              className={`text-sm text-center ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
