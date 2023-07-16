export interface ILinks {
  selectedLink: any;
}
export interface IProjectInfo {
  projectName: string;
  gitHubURL: string;
  gitHubBackendURL?: string;
  imageURL?: string;
  technologies: string[]; //can add images to the side (have url use technologies[2] for example)
  URL: string;
  description: string;
}
