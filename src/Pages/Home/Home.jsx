import EstateCards from "../../Components/Estate cards/EstateCards";
import Header from "../../Components/Header/Header";
import OurBestCollections from "../../Components/Our best Collection/OurBestCollections";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-10 p-5" >
        <Header></Header>
        <EstateCards></EstateCards>
        <OurBestCollections></OurBestCollections>
      </div>
    </div>
  );
};

export default Home;
