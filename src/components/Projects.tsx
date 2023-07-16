import { Header } from "./Header";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../Utils/projects.json";
export function Projects(): JSX.Element {
  let name = "projects";
  return (
    <div>
      <Header selectedLink={name} />
      <p className="title">PROJECTS</p>
      <p className="subheading">
        {/* <i>Full-Stack Software Engineer [Under Development].</i> */}
      </p>

      <div className="projectsBox">
        {projectsData.map((e, index) => (
          <ProjectCard
            projectName={projectsData[index].projectName}
            gitHubURL={projectsData[index].gitHubURL}
            imageURL={projectsData[index].Image}
            technologies={projectsData[index].technologies}
            URL={projectsData[index].URL}
            description={projectsData[index].description}
          />
        ))}
      </div>
    </div>
  );
}
