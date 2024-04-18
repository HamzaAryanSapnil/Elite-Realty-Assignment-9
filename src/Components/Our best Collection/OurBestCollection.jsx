import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const OurBestCollection = ({ item }) => {
  const { image_url, description, estate_title, segment_name, price, status, area, location, facilities } = item;
  return (
    <div className='mx-auto' >
      
      <div className="">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
            className='w-full h-[250px] object-cover'
              src={image_url}
            />
          </figure>
          <div className="card-body justify-center items-start ">
            <h2 className="card-title font-mulish text-descolor font-extralight">{estate_title}</h2>
            <p className='font-bold text-start font-titillium text-signBtn' > {segment_name} </p>
            <p className=' text-start font-cabin text-cardDescolor' >
              {description.length > 150 ? (
                <p>{description.slice(0, 150)}...</p>
              ) : (
                description
              )}
            </p>
            <p>Price: <span className="text-priceCol font-medium font-mulis font-cabinh" >{price}</span> </p>
            <p> Status:  {status}</p>
            <p> Area:  {area}</p>
            <p> Location:  {location}</p>
            <p className='text-start font-cabin' > Facilities:  {facilities.map((item) => <li className='text-priceCol' key={item} > <span className='font-mulish text-black' >{item}</span> </li>)}</p>
            <div className="card-actions ">
             <Link to={`/estate_details/${item.id}`} > <button className="text-priceCol font-bold btn btn-outline btn-ghost">View Property</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OurBestCollection.propTypes = {
  item: PropTypes.object
}
export default OurBestCollection;
