import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estate = useLoaderData();
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const { image_url, description, estate_title, segment_name, price, status, area, location, facilities } = data;

  useEffect(() => {
    const matchedData = estate.find((item) => item.id == id);
    setdata(matchedData);
  }, [estate, id]);

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200 my-14 p-6">
        <div className="grid grid-cols-1  justify-center items-center gap-6 w-full h-full">
          <div className=" w-full h-full">
            <img
              src={image_url}
              className="rounded-lg shadow-2xl w-full h-full "
            />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">{estate_title}</h1>
            <p className="py-6">{segment_name}</p>
            <p className="py-6 text-xl ">
              {description}
            </p>
            <p className="py-6 text-lg font-medium">Price: {price}</p>
            <p className="py-6 font-light text-lg">Status: {status}</p>
            <p className="py-6">Area: {area}</p>
            <p className="py-6">Location: {location}</p>
            <Link to={`/estate_location/${id}`} ><button className="btn btn-primary" >Watch Location</button></Link>
            <p className="py-6">Facilities: {facilities}</p>
            <Link to={"/"} ><button className="btn btn-primary">More Properties?</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
