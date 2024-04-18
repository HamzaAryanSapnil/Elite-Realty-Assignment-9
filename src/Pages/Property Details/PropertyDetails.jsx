
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import PropertyDetailsData from './PropertyDetailsData';
import bgImg from '../../assets/Humaaans - Research.png'

const PropertyDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div 
        style={
            {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
            
        >
           
            {
                data.map((item) => <PropertyDetailsData key={item.id} item={item}></PropertyDetailsData>)
            }
        </div>
    );
};

PropertyDetails.propTypes = {
    data: PropTypes.object
};

export default PropertyDetails;