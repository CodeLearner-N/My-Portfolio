const Experience = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">My Experience</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg border dark:border-gray-700bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-black-600">Web Development Intern – Edufy Tech Solutions</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Built responsive front-end components using React and Tailwind CSS. Collaborated with backend team to integrate RESTful APIs using Spring Boot.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Duration: Nov 2024 – Jan 2025</p>
        </div>
        {/* Add more internship experiences here */}
        <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg border dark:border-gray-700bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-black-600">Web Development Intern – Kits Warangal</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Built Full Stack Web Development using React, Tailwind CSS and JDBC and also Collaborated with team to integrate RESTful APIs using Spring Boot.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Duration: 3 Months</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
