
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import PropertyDetailsData from './PropertyDetailsData';

const PropertyDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
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