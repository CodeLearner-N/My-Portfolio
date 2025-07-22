import React from 'react';
const About = () => {
  const skills = [
  { name: 'Java' }, {name: 'JDBC'},  { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
  { name: 'React' }, { name: 'Tailwind CSS' }, { name: 'Spring Boot' },
  { name: 'MySQL' }, { name: 'Git' }, { name: 'Postman' }
];
const colors = [
  'bg-gradient-to-r from-indigo-400 to-purple-500',
  'bg-gradient-to-r from-green-400 to-blue-500',
  'bg-gradient-to-r from-yellow-400 to-red-500',
  'bg-gradient-to-r from-pink-400 to-purple-500',
  'bg-gradient-to-r from-teal-400 to-blue-500',
  'bg-gradient-to-r from-blue-400 to-indigo-500',
  'bg-gradient-to-r from-red-400 to-yellow-500',
  // 'bg-blue-100 dark:bg-blue-900',
  // 'bg-green-100 dark:bg-green-900',
  // 'bg-yellow-100 dark:bg-yellow-900',
  // 'bg-pink-100 dark:bg-pink-900',
  // 'bg-purple-100 dark:bg-purple-900',
  // 'bg-teal-100 dark:bg-teal-900',
];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* p-10 max-w-6xl mx-auto */}
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-3xl w-full border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          About Me
        </h2>
         <p className="text-gray-700 dark:text-gray-300 mb-4">
          Hello! I'm <strong>Nithin Gummadi</strong>, a Web Developer and UI/UX Designer with a deep passion for building modern, creative, and user-friendly digital experiences.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I studied at <strong>Kakatiya Institute of Technology and Science</strong> in Warangal, where I completed my graduation in Software Development (IT stream).
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Fast-forward to today, and it’s been a beautiful journey of learning and growing as a developer. My current focus is on expanding my portfolio by building impactful projects and seeking exciting collaborations with companies that value innovation and teamwork.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Here are a few technologies I’ve been working with recently:
        </p>

        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`text-sm font-medium px-4 py-2 rounded-full shadow ${colors[index % colors.length]} text-gray-800 dark:text-white`}
          >
            {skill.name}
          </span>
        ))}<br/>
        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/file/d/1YgSENZpXNHbyMsF5y6vymfwQOSK4inyX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
          >
            My Resume
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
