
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    if (!user){
        return <Navigate to="/" state={{from: location}} replace />
        
    }
    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;