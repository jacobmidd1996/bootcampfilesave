import projects from "../my-project-data";
import Project from "./Project";

function ProjectList() {
  console.log(projects);
  return(
    projects.map(p => <Project key={p.id} name={p.name} github={p.githubUrl} image={p.image} />
    )
  )
}

export default ProjectList;