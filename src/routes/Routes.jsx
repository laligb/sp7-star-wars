import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import StarshipDetails from "../components/StarshipDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/starship/:id" element={<StarshipDetails />} />
    </Routes>
  );
};

export default AppRoutes;
