import projects from '../Data/Projects';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;