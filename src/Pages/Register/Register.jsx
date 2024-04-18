import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import regGif from "../../assets/reggif.gif";
import regBg from '../../assets/Humaaans - Ui Sketch.png'
import 'animate.css';

const Register = () => {
  const [regError, setRegError] = useState("");
  const [showPass, setShowPass] = useState(false)
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  if (errors?.email) {
    toast.error(errors.email?.message);
  }
  if (errors?.password) {
    toast.error(errors.password?.message);
  }
  if (errors?.firstName) {
    toast.error(errors.firstName?.message);
  }
  if (errors?.lastName) {
    toast.error(errors.lastName?.message);
  }

  const onSubmit = (data) => {
    setRegError("");
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result);

        resetField("email");
        resetField("password");
        toast.success("Registration Successful");
        const name = `${data.firstName} ${data.lastName}`;
        const photoUrl = `${data.photoUrl}`;
        updateUserProfile(name, photoUrl)
          .then((result) => {
            console.log("user profile", result);
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setRegError(error.message);
        resetField("email");
        resetField("password");
        toast.error(error.message);
        console.log(error);
      });
  };

  console.log(watch("example"));
  return (
    <div className="font-cabin " >
      <div className="hero flex min-h-screen bg-base-200 p-4 bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${regBg})`,
      }}
      >
        <div className="hero-content w-full flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-signBtn">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cardDescolor text-lg">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  className="input input-bordered"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First Name field is required",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cardDescolor text-lg">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  className="input input-bordered"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last Name field is required",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cardDescolor text-lg">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Photo Url"
                  className="input input-bordered"
                  {...register("photoUrl")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cardDescolor text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email field is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cardDescolor text-lg">Password</span>
                </label>
                
                <div className="relative ">
                  {/**
                   * set icon here 
                   *  */ }
                  <span className="absolute inset-y-0 right-4 flex items-center pl-2 ">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      {
                        showPass ? (
                          <IoEye
                          className="text-signBtn"
                            onClick={() => setShowPass(!showPass)}
                          />
                        ) : (
                          <IoEyeOff
                            onClick={() => setShowPass(!showPass)}
                          />
                        )
                      }
                    </button>
                  </span>
                  <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full py-2 pl-10 text-sm rounded-md  focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password field is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                      message:
                        "invalid password, you must use 1 uppercase letter and 1 lowercase letter",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-signBtn animate__animated animate__bounce">Register</button>
              </div>
            </form>
            <p className="text-cardDescolor text-lg ml-5" >
              Already have an account?{" "}
              <Link className="text-priceCol font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
            {regError && <p className="text-red-500">{regError}</p>}
          </div>
        </div>
        <div className="md:block hidden" >
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <figure><img src={regGif} alt="Shoes" /></figure>
 
  </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default Register;
