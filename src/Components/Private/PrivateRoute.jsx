
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if (!user){
        return <Navigate to="/login" state={location.pathname}  />
        
    }
    if (loading) {
      return <div className="flex justify-center items-center h-screen" >
        <span className="loading loading-spinner loading-lg flex justify-center items-center"></span>
      </div> 
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