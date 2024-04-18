import { useLoaderData } from "react-router-dom";
import EstateItems from "./Items/EstateItems";

const EstateCards = () => {
  const data = useLoaderData();
  return (
    <div className="w-full">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-center font-mulish ">Our Properties</h1>
        <p className="text-center my-4 text-descolor70 " >
          Welcome to <span className="text-lg font-medium">Elite Realty</span>,
          your premier destination for finding your dream property. Whether
          you are searching for your next home, an investment opportunity, or a
          commercial space, we have got you covered. Our user-friendly platform
          showcases a wide range of properties, from cozy apartments to
          sprawling estates, in prime locations across [Your Area/City/Region].
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-3 ">
        {data.map((item) => (
          <EstateItems key={item.id} item={item}></EstateItems>
        ))}
      </div>
    </div>
  );
};

export default EstateCards;
