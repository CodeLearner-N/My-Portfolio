// src/components/Contact.js

const Contact = () => {
  return (
    <div id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Got a project, question, or just want to say hi? Fill in the form below!
        </p>
        <form
          action="https://formspree.io/f/xjkobabj" // Replace with your Formspree or other endpoint
          method="POST"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
