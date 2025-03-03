export default function Header() {
    return (
        <>
            <header className="smv-header">
                <nav className="navbar navbar-expand smv-nav">
                    <div className="container">
                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">

                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-bs-auto-close="outside"
                                       aria-haspopup="true" aria-expanded="false">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-bs-auto-close="outside"
                                       aria-haspopup="true" aria-expanded="false">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-bs-auto-close="outside"
                                       aria-haspopup="true" aria-expanded="false">SKILLS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-bs-auto-close="outside"
                                       aria-haspopup="true" aria-expanded="false">PROJECTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}