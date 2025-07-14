import React from 'react';

const skills = [
  { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
  { name: 'React' }, { name: 'Tailwind CSS' }, { name: 'Spring Boot' },
  { name: 'MySQL' }, { name: 'Git' }, { name: 'Postman' }
];

const Skills = () => {
  return (
    <section className="py-10 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
