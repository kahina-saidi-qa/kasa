import "./home.scss";
import "../../components/Cadre/cadre.scss";
import Card from "../../components/Cadre/Card";
import logements from "../../data/logements.json";
import monImage from "./banner.png"
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div className="home-container">
   
      <Banner src={monImage } title="Chez vous, partout et ailleurs" />
      <div className="gallery-container">
        <div className="logements-gallery">
          {logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
   
    </div>
  );
}

export default Home;
