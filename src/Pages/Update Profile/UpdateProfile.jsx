import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import updateVideo from "../../assets/updateGif.gif";
import updateBg from "../../assets/cool-background.png";
import videoUpdateGif from '../../assets/update page.gif'
import { Helmet } from "react-helmet";

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
      photoUrl: user?.photoURL
        ? user.photoURL
        : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
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
      <Helmet>
          <meta charSet="utf-8" />
          <title>Keep Your Details Fresh: Update Your Profile Here</title>
        </Helmet>
      <div
        className="hero flex justify-around items-center gap-4 p-4 min-h-screen bg-base-200 font-manrope"
        style={{
          backgroundImage: `url(${updateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full top-20 left-0 bg-black opacity-35"></div>
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 rounded-xl">
          <img src={updateVideo} className="max-w-sm rounded-lg shadow-2xl" />

          <div>
            <h1 className="text-5xl font-bold">Hello {user.displayName}</h1>
            <p className="py-6 text-descolor70">
              You can just update your name and photourl
            </p>
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
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
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
                  },
                })}
                placeholder="photoUrl"
                className="input input-bordered"
                type="text"
              />
              {errors.photoUrl && (
                <p className="text-red-600">{errors.photoUrl?.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-signBtn animate__pulse">
                Update Profile
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:card w-96 bg-base-100 shadow-xl">
          
          <div className="card-body">
          <figure>
            <img
              src={videoUpdateGif}
              alt="Shoes"
            />
          </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
