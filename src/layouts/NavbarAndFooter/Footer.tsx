import { Link } from 'react-router-dom';
import { HOME_ROUTE, SEARCH_ROUTE } from '../../config/route-config';

export const Footer = () => {

    return (
        <div className='main-color'>
            <footer className='container d-flex flex-wrap justify-content-between align-items-center py-5 main-color'>
                <p className='col-md-4 mb-0 text-white'>Example Library App, Inc</p>
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <Link to={HOME_ROUTE} className='nav-link px-2 text-white'>
                            Home
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to={SEARCH_ROUTE} className='nav-link px-2 text-white'>
                            Search Books
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    )

}