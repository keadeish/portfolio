import { IJourney } from "../Utils/Interfaces";
export function Years(props: IJourney): JSX.Element {
  const isFirstYear = props.year === 2024;
  return (
    <div id="yearCard">
      <div id="year" style={{ marginTop: isFirstYear ? "0vh" : "25vh" }}>
        <p>
          <b>{props.year}</b>
        </p>
      </div>
    </div>
  );
}
//find a way to make the first year not move. whereas the subsequent years can be a lot lower depending on branches
