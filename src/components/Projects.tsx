import { Header } from "./Header";

export function Projects(): JSX.Element {
    let name = 'projects'
    return (
        <div>
            <Header selectedLink={name} />
            <p className="title">PROJECTS</p>
            <p className="subheading">
                {/* <i>Full-Stack Software Engineer [Under Development].</i> */}
            </p>
        </div>
    )
}