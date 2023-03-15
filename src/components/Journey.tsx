import { Header } from "./Header"
export function Journey(): JSX.Element {
    let name = 'journey'
    return (
        <div>
            <Header selectedLink={name} />
            <p className="title">Journey</p>
            <p className="subheading">
                {/* <i>Full-Stack Software Engineer [Under Development].</i> */}
            </p>
        </div>

    )
}