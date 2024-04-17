import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    logIn(email, password)
      .then((result) => {
        console.log("Login", result);
        navigate(location?.state ? location.state : "/user_profile");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google Login", result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log("Github Login", result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  console.log(watch("example"));
  return (
    <div>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content  flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: "email is required" })}
                  placeholder="email"
                  className="input input-bordered"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-600 mt-1">
                    email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  type="password"
                />
                {errors.password && (
                  <span className="text-red-600 mt-1">
                    password field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center" > 
              <p className="text-center " >Or Login with</p>
              <div className="flex justify-center items-center mt-2 gap-x-2" >
                <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
                
                <button onClick={handleGithubLogin} className="btn btn-primary">Github</button>
              </div>
            </div>

            <p className="text-center">
              Donot have any account?
              <Link to="/register" className="text-orange-600 font-bold">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
