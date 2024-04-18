import { Helmet } from "react-helmet";
import EstateVideoSec from "../../Components/Estate Video/EstateVideoSec";
import EstateCards from "../../Components/Estate cards/EstateCards";
import Header from "../../Components/Header/Header";
import OurBestCollections from "../../Components/Our best Collection/OurBestCollections";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome Home: Your Gateway to Exceptional Real Estate</title>
        </Helmet>
      <div className="mx-auto mt-10 p-5">
        
        <Header></Header>
        <EstateCards></EstateCards>
        <OurBestCollections></OurBestCollections>
        <EstateVideoSec></EstateVideoSec>
      </div>
    </div>
  );
};

export default Home;
