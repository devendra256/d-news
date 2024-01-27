export const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">DNews</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link active" aria-current="page">Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('general')} aria-current="page">General</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('entertainment')} aria-current="page">Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('business')} aria-current="page">Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('sports')} aria-current="page">Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('technology')} aria-current="page">Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('health')} aria-current="page">Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" onClick={() => props.setCategory('science')} aria-current="page">Science</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
