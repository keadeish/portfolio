import { Header } from "./Header";

export function Homepage(): JSX.Element {
  let name = "about";
  return (
    <div>
      <Header selectedLink={name} />
      <p className="title">KEADEISH MORRISON</p>
      <p className="subheading">
        <i>Full-Stack Software Engineer.</i>
      </p>
      <div id="icons">
        <a href="https://www.linkedin.com/in/keadeish-morrison/">
          <img id="socialMediaIcons" src="/images/linkedin.svg" alt=""></img>
        </a>

        <a href="https://github.com/keadeish">
          <img id="socialMediaIcons" src="/images/github.svg" alt=""></img>
        </a>
      </div>
    </div>
  );
}
