
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if (loading) {
      return <div className="flex justify-center items-center h-screen" >
        <span className="loading loading-spinner loading-lg flex justify-center items-center"></span>
      </div> 
    }
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