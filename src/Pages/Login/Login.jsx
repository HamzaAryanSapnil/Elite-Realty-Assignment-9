import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  console.log(errors);
  if (errors?.email) {
    toast.error(errors.email?.message)
  }
  if (errors?.password) {
    toast.error(errors.password?.message)
  }
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    logIn(email, password)
      .then((result) => {
        setLoginError("");
        console.log("Login", result);
        navigate(location?.state ? location.state : "/user_profile");
        resetField("email");
        resetField("password");
      })
      .catch((error) => {
        setLoginError(error.message);
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google Login", result);
        navigate(location?.state ? location.state : "/user_profile");
        toast.success("Login Successful");
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
                {errors.email && <p className="text-red-600" >{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password field is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  type="password"
                />
                {errors.password && <p className="text-red-600" >{errors.password?.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {loginError && <p className="text-red-600">{loginError}</p>}
            <div className="text-center">
              <p className="text-center ">Or Login with</p>
              <div className="flex justify-center items-center mt-2 gap-x-2">
                <button onClick={handleGoogleLogin} className="btn btn-primary">
                  Google
                </button>

                <button onClick={handleGithubLogin} className="btn btn-primary">
                  Github
                </button>
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
