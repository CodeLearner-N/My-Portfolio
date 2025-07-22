import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-5">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-md h-48 w-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{project.description}</p>

      {/* Tech stack and GitHub icon in one line */}
      <div className="flex justify-between items-center mt-3 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            // className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-xl ml-2"
            className="text-blue-700 hover:text-blue-500 dark:hover:text-blue text-xl ml-5"
            title="View Code on GitHub"
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
