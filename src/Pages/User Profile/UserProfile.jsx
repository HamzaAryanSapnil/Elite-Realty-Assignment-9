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
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4 ">
              {user?.displayName ? user?.displayName : "User"}
            </h1>
            <p className="py-6">Here is Your Profile Info</p>

            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={
                                  user.photoURL
                                    ? user.photoURL
                                    : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                                }
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{user.displayName}</div>
                            <div className="text-sm opacity-50">Bangladesh</div>
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          
                          <div>
                            <div className="font-bold">Your PhotoUrl</div>
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          
                          <div>
                            <div className="font-bold">{user.photoURL? user.photoURL : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"}</div>
                          </div>
                        </div>
                      </td>
                     
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">Your Email</div>
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
            <p className="text-sm mb-4" >Do you want to update your profile, please click here</p>
            <Link to="/update_profile">

              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
