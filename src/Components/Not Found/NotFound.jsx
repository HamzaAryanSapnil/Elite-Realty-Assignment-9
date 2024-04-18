import { Link, useRouteError } from 'react-router-dom';
import notFoundImg from '../../assets/404gif.gif'

const NotFound = () => {
    const errorData = useRouteError();
    return (
        <div className="" >
            <div className="card  bg-base-100 shadow-xl w-full h-full">
  <figure><img src={notFoundImg} className='w-40 h-40' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{ errorData.statusText || errorData.message }</h2>
    <p>Lost your way?</p>
    <div className="card-actions justify-start">
        <Link to='/' >
      <button className="btn btn-outline text-signBtn">Way to home</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default NotFound;