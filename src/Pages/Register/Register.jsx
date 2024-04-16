import { useForm } from "react-hook-form"


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example"))
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  {...register("name", { required: true })} 
                  />
                  {errors.name && <span className="text-red-600 mt-1" >Name field is required</span>}
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
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-600 mt-1" >email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-600 mt-1" >password field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
