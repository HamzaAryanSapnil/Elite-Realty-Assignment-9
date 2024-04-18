import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import updateVideo from "../../assets/updateGif.gif";
import updateBg from '../../assets/cool-background.png'

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    
  } = useForm({
    defaultValues: {
      name: user?.displayName,
      photoUrl: user?.photoURL,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const { name, photoUrl } = data;
    updateUserProfile(name, user?.photoURL || photoUrl)
      .then((result) => {
        console.log("user profile updated", result);
        navigate("/user_profile");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
</svg> */}
      <div className="hero min-h-screen bg-base-200" 
       style={{backgroundImage: `url(${updateBg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute w-full h-full top-20 left-0 bg-black opacity-35" ></div>
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 rounded-xl" 
       
        >
        <img src={updateVideo} className="max-w-sm rounded-lg shadow-2xl" />
  
          <div>
            <h1 className="text-5xl font-bold">Hello {user.displayName}</h1>
            <p className="py-6">You can just update your name and photourl</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name field is required",
                    }
                  })}
                  
                />
                {errors.name && <p className="text-red-600" >{errors.name?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  {...register("photoUrl", {
                    required: {
                      value: true,
                      message: "photoUrl field is required",
                    }
                  })}
                  placeholder="photoUrl"
                  className="input input-bordered"
                  type="text"
                />
                {errors.photoUrl && <p className="text-red-600" >{errors.photoUrl?.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary animate__pulse">Update Profile</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
