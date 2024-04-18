import EstateVideoSec from "../../Components/Estate Video/EstateVideoSec";
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
        <EstateVideoSec></EstateVideoSec>
      </div>
    </div>
  );
};

export default Home;
