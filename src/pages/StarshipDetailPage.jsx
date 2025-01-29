import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Separator from "../components/Separator";
import StarshipDetails from "../components/StarshipDetails";

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
      <StarshipDetails />
    </div>
  );
}

export default StarshipDetailPage;
