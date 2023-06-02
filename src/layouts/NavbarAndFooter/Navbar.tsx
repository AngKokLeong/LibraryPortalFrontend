import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, SEARCH_ROUTE } from './../../config/route-config';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'>Luv 2 Read</span>
                <button className='navbar-toggle' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to={HOME_ROUTE}>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to={SEARCH_ROUTE}>Search Books</NavLink>
                        </li>

                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#top'>Sign in</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}