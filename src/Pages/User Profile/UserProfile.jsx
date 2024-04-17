import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4 ">{user?.displayName ? user?.displayName : "User" }</h1>
            <Link to="/update_profile" >
            <button className="btn btn-primary">Update Your Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
