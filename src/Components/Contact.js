const Contact = () => {
  return (
    <div id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Got a project, question, or just want to say hi? Text me through mail!
        </p>
        <form
          action="https://formspree.io/f/xjkobabj"
          method="POST"
          className="grid gap-6 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-full border border-gray-500 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-full"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          ></textarea>
          <div className="text-left">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
