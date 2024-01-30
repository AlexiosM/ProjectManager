import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  projects,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-6 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "w-full text-left rounded-sm my-1 ";

          if (project.id === selectedProjectId) {
            cssClasses = "text-stone-800 bg-stone-400";
          } else {
            cssClasses =
              "text-stone-400 hover:text-stone-800 hover:bg-stone-400 py-1 px-3 rounded";
          }

          return (
            <li key={project.id} className="mt-6">
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
