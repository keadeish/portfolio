import { Header } from "./Header";

export function Experience(): JSX.Element {
  let name = "experience";
  return (
    <div>
      <Header selectedLink={name} />
      <p className="title">Experience</p>
      <p className="subheading">
        {/* <i>Full-Stack Software Engineer [Under Development].</i> */}
      </p>
    </div>
  );
}
