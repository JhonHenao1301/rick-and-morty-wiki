
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const NavbarStyled = styled.nav`
    .active {
        border-bottom: 3px solid var(--primary);
        color: var(--primary) !important;
        font-weight: 700;
    }

    .collapse:not(.show) {
        display: block;
    }
`

function Navbar() {
    return (
        <NavbarStyled className="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <div className="container-fluid mx-4">
                <Link to="/" className="navbar-brand fs-3">
                Rick & Morty <span className="text-primary">WiKi</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars open text-dark"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav fs-5">
                        <NavLink activeclassname="active" to="/" className="nav-link">
                            Characters
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link">
                            Episode
                        </NavLink>
                        <NavLink className="nav-link" to="/location">
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>            
        </NavbarStyled>
    )
}

export default Navbar
