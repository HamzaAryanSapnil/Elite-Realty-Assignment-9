import EstateCards from "../../Components/Estate cards/EstateCards";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-10 p-5" >
        <Header></Header>
        <EstateCards></EstateCards>
      </div>
    </div>
  );
};

export default Home;
