import moment from "moment-timezone";
console.log(moment.tz.names());

function Clock(): JSX.Element {
  return <p>{moment().tz("Europe/London").format()}</p>;
}
