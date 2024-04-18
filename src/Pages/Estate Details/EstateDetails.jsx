import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
    <div className="container mx-auto ">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Property Features: Dive into Product Details</title>
        </Helmet>
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
            <p className="py-6 text-lg font-bold font-mulish">Price: <span className="text-success" >{price}</span></p>
            <p className="py-6 text-cardDescolor text-lg font-medium">Status: {status}</p>
            <p className="py-6 text-cardDescolor text-lg">Area: {area}</p>
            <p className="py-6 text-cardDescolor text-lg">Location: {location}</p>
            <Link to={`/estate_location/${id}`} ><button className="btn btn-success  text-white text-lg " >Watch Location</button></Link>
            <p className="py-6 text-cardDescolor text-xl text-descolor70">Facilities: {facilities}</p>
            <Link to={"/property_details"} ><button className="btn btn-success text-white  text-lg  ">More Properties?</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
