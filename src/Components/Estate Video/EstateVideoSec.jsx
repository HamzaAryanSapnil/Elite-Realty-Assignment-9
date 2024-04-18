import { Link } from 'react-router-dom';
import estateVideo from '../../assets/estate video.mp4'
const EstateVideoSec = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row justify-around items-center gap-5 p-4">
      <div className="flex-1" >
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-descolor font-cabin">Explore Our Properties Through Captivating Videos</h2>
            <p className="font-mulish text-cardDescolor" >Step into your future home before you even visit it in person. Dive into our curated collection of immersive video tours, providing a comprehensive view of each property is unique charm and features. From spacious interiors to breathtaking views, experience the essence of each listing from the comfort of your screen. Let our videos guide you through your real estate journey, offering a glimpse into the extraordinary possibilities awaiting you.</p>
            <div className="card-actions justify-start">
                <Link to={"/property_details"} >
              <button className="btn text-white bg-signBtn font-extrabold text-xl font-manrope"> See All Our Properties</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1" >
        <div className="card h-[450px] bg-base-100 shadow-xl ">
          <div className="card-body">
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source src={estateVideo} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateVideoSec;
