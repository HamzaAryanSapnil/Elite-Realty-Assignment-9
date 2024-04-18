import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EstateItems = ({ item }) => {
  console.log(item);
  const { id } = item;
  return (
    <div className="mx-auto">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={item.image_url}
            alt="Shoes"
            className="w-full h-[250px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-manrope text-descolor">
            {item.estate_title}
          </h2>
          <p className="text-start font-titillium text-cardDescolor" >
            {item.description.length > 150 ? (
              <p>{item.description.slice(0, 150)}...</p>
            ) : (
              item.description
            )}
          </p>
          <p>
            <span className=" font-titillium text-signBtn">Price:</span> <span className="text-priceCol font-medium font-mulish">  {item.price}</span>
          </p>

          <p>
            <span className="font-bold font-manrope">Location:</span> {item.location}
          </p>
          <p>
            <span className="font-bold font-manrope">Status:</span> {item.status}
          </p>
          <Link to={`/estate_details/${id}`}>
            <span className="text-priceCol font-bold btn btn-outline btn-ghost">
              View Property
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

EstateItems.propTypes = {
  item: PropTypes.object,
};
export default EstateItems;
