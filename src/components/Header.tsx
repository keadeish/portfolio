import { Link } from "react-router-dom";
import { ILinks } from "../Utils/Interfaces";
export function Header({ selectedLink }: ILinks): JSX.Element {
  //fix hyperlink colour and underline
  let pages = ["about", "projects", "experience", "journey"];
  return (
    <>
      <div id="headerContainer">
        {pages.map((page, i) => {
          if (page === 'about') {
            return (
              <Link id={`${page}`} to={`/`} key={i}>
                {page.toLocaleUpperCase()}
              </Link>
            );
          }
          else
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
