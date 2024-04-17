import { useEffect, useState } from "react";
import OurBestCollection from "./OurBestCollection";

const OurBestCollections = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div className="my-10 text-center" >
      <div className="my-10 text-center">
        <h1 className="text-5xl font-bold">Our Best Collections</h1>
        <p className="text-lg font-light my-5">
          These items are our best Collections
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
        {data.slice(0, 2).map((item) => (
          <OurBestCollection key={item.id} item={item}></OurBestCollection>
        ))}
      </div>
    </div>
  );
};

export default OurBestCollections;
