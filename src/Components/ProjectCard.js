const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white dark:bg-gray-800 p-5">
      <img src={project.image} alt={project.title} className="rounded-md h-48 w-full object-cover mb-4" />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{project.description}</p>
      <div className="flex mt-3 gap-2 flex-wrap">
        {project.techStack.map((tech, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;