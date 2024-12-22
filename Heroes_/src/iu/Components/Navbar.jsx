import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/Context/AuthContext';


export const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogout = () => {
        navigate('/login',{
            replace: true
        });
        logout();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= {({isActive}) =>`nav-item nav-link  ${isActive ? 'active':''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= {({isActive}) =>`nav-item nav-link  ${isActive ? 'active':''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className= {({isActive}) =>`nav-item nav-link  ${isActive ? 'active':''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-items nav-link text-primary'>
                        Yeison
                    </span>
                    <button className='nav-items nav-link btn' onClick={onLogout}>
                        Logout

                    </button>
                </ul>
            </div>
        </nav>
    )
}