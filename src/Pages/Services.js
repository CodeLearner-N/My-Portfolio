import { FaCode, FaMobileAlt, FaJava } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Build dynamic and scalable websites using React, Spring Boot, and MySQL.',
    icon: <FaCode className="text-4xl text-white" />,
    bgColor: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    title: 'Responsive Design',
    description: 'Create mobile-first, user-friendly interfaces with Tailwind CSS and modern design principles.',
    icon: <FaMobileAlt className="text-4xl text-white" />,
    bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
  },
  {
    title: 'Logic Implementation (Java)',
    description: 'Write efficient Java code for backend processes, algorithms, and server-side logic.',
    icon: <FaJava className="text-4xl text-white" />,
    bgColor: 'bg-gradient-to-r from-yellow-500 to-red-500',
  },
];

const Services = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6  text-gray-800 dark:text-white">My Services</h2>
      {/* text-3xl font-semibold mb-6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${service.bgColor}`}
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">{service.title}</h3>
            <p className="text-white text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
