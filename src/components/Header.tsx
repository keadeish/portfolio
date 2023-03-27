import { Link } from "react-router-dom";
import { ILinks } from "../Utils/Interfaces";
export function Header({ selectedLink }: ILinks): JSX.Element {
  //fix hyperlink colour and underline
  let pages = ["about", "projects", "experience", "journey"];
  return (
    <>
      <div id="headerContainer">
        {pages.map((page, i) => {
          if (selectedLink === page) {
            return (
              <Link id={`${selectedLink}Selected`} to={`/${page}`} key={i}>
                {page.toLocaleUpperCase()}
              </Link>
            );
          }
          return (
            <Link id={`${page}`} to={`/${page}`} key={i}>
              {page.toLocaleUpperCase()}
            </Link>
          );
        })}
      </div>
    </>
  );
}
//figure how to remove "/about"
