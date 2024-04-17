import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {user, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        const {name, photoUrl} = data;
        updateUserProfile(name, user?.photoURL || photoUrl)
          .then((result) => {
            console.log("user profile updated", result);
            navigate("/user_profile");
          })
          .catch((error) => console.log(error));
        
      };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there! <span>{user?.displayName ? user?.displayName : "User"}</span> </h1>
            <div className="  ">
        <div className="hero-content  flex-col ">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: "name is required" })}
                  placeholder="Change your name"
                  className="input input-bordered text-black"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-600 mt-1">
                    name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photoUrl")}
                  placeholder="Change your photo"
                  className="input input-bordered text-black"
                  type="text"
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Your Profile</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
