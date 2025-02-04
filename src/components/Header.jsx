import { NavLink } from "react-router-dom";

function AppHeader() {
    const navLinks = [
        {
            path: "/",
            title: "Home page"
        },
        {
            path: "/travel/1",
            title: "Dettagli viaggio"
        }
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-color-nav" >
                <div className="container d-flex justify-content-between align-items-center">
                    
                    {/* LOGO E BRAND */}
                        <div className="d-flex align-items-center">
                            <NavLink className="nav-link active" to={`/`}>
                            <img src="images/logoBoo.png" alt="" style={{ width: "7%", backgroundColor: "none" }} />
                            <span className="fs-4 text-light">Boolroad</span>
                            </NavLink>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end flex-nowrap" id="navbarNav">
                            <ul className="navbar-nav text-nowrap" style={{gap: "50px"}}>
                                {navLinks.map((curLink, index) => (
                                    <li key={index} className="nav-item fs-5">
                                        <NavLink className="nav-link-elem" aria-current="page" to={curLink.path}>{curLink.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
            </nav>
            
        </>
    );
};

export default AppHeader;