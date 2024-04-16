import { useContext } from "react";
import { useForm,  } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext)
 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data);
        const {email, password} = data
        logIn(email, password)
        .then(result => console.log( "Login", result))
        .catch(error => console.log(error))
      }
    
      console.log(watch("example")) 
  return (
    <div>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content  flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
            >
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
                <p>{errors.email?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: "password is required", minLength: {
                    value: 6,
                    message: "password must be at least 6 characters"
                  } })}
                  placeholder="password"
                  className="input input-bordered"
                  type="password"
                />
                <p>{errors.password?.message}</p>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center" >Donot have any account?<Link to='/register' className="text-orange-600 font-bold"> Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
