import { useLoaderData } from "react-router-dom";
import EstateItems from "./Items/EstateItems";

const EstateCards = () => {
  const data = useLoaderData();
  return (
    <div className="w-full" >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5" >
        {data.map((item) => (
          <EstateItems key={item.id} item={item}></EstateItems>
        ))}
      </div>
    </div>
  );
};

export default EstateCards;
