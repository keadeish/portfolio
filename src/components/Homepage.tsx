import { Header } from "./Header"

export function Homepage(): JSX.Element {
    let name = 'about'
    return (
        <div>
            <Header selectedLink={name} />
            <p className="title">KEADEISH MORRISON</p>
            <p className="subheading">
                <i>Full-Stack Software Engineer [Under Development].</i>
            </p>
        </div>

    )
}