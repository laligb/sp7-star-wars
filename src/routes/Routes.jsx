import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";

import WelcomePage from "../pages/WelcomePage";
import StarshipDetailPage from "../pages/StarshipDetailPage";
import StarshipsPage from "../pages/StarshipsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/starships" element={<StarshipsPage />} />
      <Route path="/starship/:id" element={<StarshipDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
