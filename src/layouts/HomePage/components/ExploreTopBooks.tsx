import { Link } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../../config/route-config';

export const ExploreTopBooks = () => {
    return (
        <div className='p-4 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex flex-column align-items-center'>
                <div className='display-5 fw-bold'>
                    Find your next adventure
                </div>
                <p className='fs-4'>Where would you like to go next?</p>
                <Link type='button' className='btn main-color btn-lg text-white' to={SEARCH_ROUTE}>
                    Explore Top Books
                </Link>
            </div>
        </div>
    )
}