import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estate = useLoaderData();
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const { image_url, description, estate_title } = data;

  useEffect(() => {
    const matchedData = estate.find((item) => item.id == id);
    setdata(matchedData);
  }, [estate, id]);

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200 my-14 p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-6 w-full h-full">
          <div className="md:col-span-7 w-full h-full">
            <img
              src={image_url}
              className="rounded-lg shadow-2xl w-full h-full "
            />
          </div>
          <div className="md:col-span-5">
            <h1 className="text-5xl font-bold">{estate_title}</h1>
            <p className="py-6">
              {description}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
