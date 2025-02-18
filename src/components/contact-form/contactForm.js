import React, { useState } from "react";
import ContactFormStyles from "./contactForm.styles";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    // Submit to Netlify Forms
    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <ContactFormStyles>
      
    <section id="contact" className="h-screen form-wrapper flex justify-center items-center" >
    <h2>Get in Touch with The Overwhelmed Gamer!</h2>
    <p>Have a question about our content, want to submit a game for review, or just have something on your mind? Use the form below to reach out! We’re always happy to hear from fellow gamers, developers, and retro gaming enthusiasts.</p>
    <div className="max-w-md mx-auto">
      {submitted ? (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>

          <div className="mb-4">
            <input
              type="file"
              name="attachment"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
    </section>
    </ContactFormStyles>
  );
};

export default ContactForm;
