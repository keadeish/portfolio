import { Header } from "./Header";

export function Experience(): JSX.Element {
  let name = "experience";
  const handleButtonClick = (): void => {
    window.open("../../images/CV.pdf");
  };
  return (
    <div>
      <Header selectedLink={name} />
      <p className="title">Experience</p>
      <p className="subheading">
        Greetings. I'm London-based <b>full-stack software engineer</b> that has
        graduated from{" "}
        <a id="htmlLink" href="https://academy.tech/">
          <b>Academy's software development program.</b>
        </a>{" "}
        <br />I have experience with both <b>JavaScript & TypeScript</b> and I'm
        an avid user of libraries commonly used for testing & automation, such
        as <b>Puppeteer.js</b>.
      </p>
      <div id="cvBox" onClick={handleButtonClick}>
        CV
      </div>
    </div>
  );
}
