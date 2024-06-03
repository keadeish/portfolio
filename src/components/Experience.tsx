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
        Greetings. I'm London-based full-stack software engineer that has
        graduated from{" "}
        <a id="htmlLink" href="https://academy.tech/">
          Academy's software development program.
        </a>{" "}
        <br />I have experience with both JavaScript & TypeScript and I'm
        an avid user of libraries commonly used for testing & automation, such
        as Puppeteer.js.
      </p>
      <div id="cvBox" onClick={handleButtonClick}>
        CV
      </div>
    </div>
  );
}
