import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EstateItems = ({ item }) => {
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
          <h2 className="card-title">{item.estate_title}</h2>
          <p>{item.description.length > 150 ? <p>{item.description.slice(0, 150)}...<Link to={`/estate_details/${item.id}`} ><span className="text-blue-600 font-bold" >Read More</span></Link></p>  : item.description}</p>
          
        </div>
      </div>
    </div>
  );
};

EstateItems.propTypes = {
  item: PropTypes.object,
};
export default EstateItems;
