import { FaGithub, FaLinkedin, FaCode, FaTwitter   } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-10">
      <h1 className="text-5xl font-bold">Hi, I'm Nithin Gummadi</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Full Stack Developer | React & Spring Boot Enthusiast
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/CodeLearner-N"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-black dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gummadi-nithin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700  hover:text-black dark:hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/21nithin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700  hover:text-black dark:hover:text-white"
        >
          <FaCode />
        </a>
        <a
          href="https://x.com/gummadi_21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-black dark:hover:text-white"
        >
          <FaTwitter />
        </a>
        
      </div>
    </div>
  );
};

export default Hero;
