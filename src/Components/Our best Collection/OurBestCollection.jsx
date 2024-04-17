import PropTypes from 'prop-types'
const OurBestCollection = ({ item }) => {
  console.log(item);
  const { image_url, description, estate_title, segment_name, price, status, area, location, facilities } = item;
  return (
    <div className='mx-auto' >
      
      <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image_url}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{estate_title}</h2>
            <p> {segment_name} </p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
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
