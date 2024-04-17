import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const OurBestCollection = ({ item }) => {
  console.log(item);
  const { image_url, description, estate_title, segment_name, price, status, area, location, facilities } = item;
  return (
    <div className='mx-auto' >
      
      <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
            className='w-full h-[250px] object-cover'
              src={image_url}
            />
          </figure>
          <div className="card-body justify-center items-start ">
            <h2 className="card-title">{estate_title}</h2>
            <p className='font-medium' > {segment_name} </p>
            <p className='text-start' >
              {description.length > 150 ? (
                <p>{description.slice(0, 150)}...</p>
              ) : (
                description
              )}
            </p>
            <p>Price: <span className="font-black text-slate-700" >{price}</span> </p>
            <p> Status:  {status}</p>
            <p> Area:  {area}</p>
            <p> Location:  {location}</p>
            <p className='text-start' > Facilities:  {facilities.map((item) => <li key={item} >{item}</li>)}</p>
            <div className="card-actions ">
             <Link to={`/estate_details/${item.id}`} > <button className="btn btn-primary">View Property</button></Link>
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
