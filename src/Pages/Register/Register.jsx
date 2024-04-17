import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
        .then(result => {
          console.log("user profile", result);
          navigate("/user_profile");
        })
        .catch((error) => console.log(error));
        
      })
      .catch((error) => {
        resetField("email");
        resetField("password");
        toast.error(error.message);
        console.log(error)
      });
  };

  console.log(watch("example"));
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  className="input input-bordered"
                  {...register("firstName", { required: {
                    value: true,
                    message: "First Name field is required"
                  } })}
                />
                {errors.firstName && (
                  
                  toast.error(errors.firstName?.message)
                  
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  className="input input-bordered"
                  {...register("lastName", { required: {
                    value: true,
                    message: "Last Name field is required"
                  } })}
                />
                {errors.lastName && (
                  toast.error(errors.lastName?.message)
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
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
                  <span className="label-text">Email</span>
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
                  <p className="text-red-500" >{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
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
                  <p className="text-red-500" >{errors.password.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
