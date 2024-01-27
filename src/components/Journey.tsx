import { Header } from "./Header";
import { Years } from "./Years";
import journeyData from "../Utils/journey.json";
export function Journey(): JSX.Element {
  let name = "journey";
  return (
    <div>
      <Header selectedLink={name} />
      <p className="title">Journey</p>
      <p className="subheading">
        <i>Full-Stack Software Engineer [Under Development].</i>
      </p>

      {journeyData.map((e, index) => (
        <Years
          year={e.year}
          experiences={e.experiences}
          branches={e.branches}
        />
      ))}
    </div>
  );
}
