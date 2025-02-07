import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Separator from "../components/Separator";
import StarshipDetails from "../components/StarshipDetails";
import Pilots from "../components/Pilots";
import Films from "../components/Films";

function StarshipDetailPage() {
  const { id } = useParams();

  const starship = useSelector((state) =>
    state.starships.items.find(
      (starship) => starship.name === decodeURIComponent(id)
    )
  );

  if (!starship) {
    return <div>Loading starship details...</div>;
  }

  return (
    <div className="p-3 text-center text-white row">
      <Separator name={starship.name.toUpperCase()} />
      <StarshipDetails starship={starship} />
      <Separator name="Pilots" />
      <Pilots starship={starship} />
      <Separator name="Films" />
      <Films starship={starship} />
    </div>
  );
}

export default StarshipDetailPage;
