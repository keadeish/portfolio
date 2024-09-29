import { IProjectInfo } from "../Utils/Interfaces";
export function ProjectCard(props: IProjectInfo): JSX.Element {
  return (
    <div className="projectCard">
      <b>
        <span id="projectCardTitle">{props.projectName}</span>
      </b>
      <a href={props.URL}>
        <img id="projectImage" alt="" src={props.imageURL}></img>
      </a>
      <div id="projectDescription">{props.description}</div>
      <div id="technologyBox">
        {props.technologies.map((e, index) => (
          <div id="technologyButton">
            <b>{props.technologies[index]}</b>
          </div>
        ))}
      </div>
      <br></br>
      <a href={props.URL}>
        <img
          id="projectsLinkButton"
          src="/images/box-arrow-up-right.svg"
          alt=""
        ></img>
      </a>
      <a href={props.gitHubURL}>
        <img id="githubLinkButton" src="/images/githubLinked.svg" alt=""></img>
      </a>
    </div>
  );
}
