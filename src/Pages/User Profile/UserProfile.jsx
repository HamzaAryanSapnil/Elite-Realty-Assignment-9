import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import uesrbg from "../../assets/userbg.mp4";
import { Helmet } from "react-helmet";
const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Home Hub: Personalize Your Real Estate Experience</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 font-cabin">
        <div className="absolute w-full h-full top-20 left-0 bg-black opacity-60"></div>
        <video
          src={uesrbg}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>

        <div className="hero-content flex-col lg:flex-row bg-base-200">
          <img
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-signBtn">Elite Realty</h1>
            <p className="py-6 ">
              Hello {user?.displayName}. Here&apos;s your user profile info. You
              can modify your name and your photourl if you want
            </p>
          </div>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-cardDescolor">Profile</p>
              <p className="text-2xl font-bold font-titillium text-descolor">
                {user.displayName}
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 card bg-white p-4">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm text-descolor70">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  value={user.displayName}
                  disabled
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm text-descolor70">
                  User Email
                </label>
                <input
                  id="useremail"
                  type="text"
                  placeholder="Useremail"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm text-descolor70">
                  Your Photo Url
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  value={user?.photoURL}
                  disabled
                />
              </div>

              <div className="col-span-full font-manrope text-cardDescolor">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://source.unsplash.com/30x30/?random"
                    }
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <Link to="/update_profile">
                    <button
                      type="button"
                      className=" btn btn-info btn-outline px-4 py-2 border rounded-md dark:border-gray-800"
                    >
                      Edit Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
