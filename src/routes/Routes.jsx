import { Route, Routes } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import StarshipDetailPage from "../pages/StarshipDetailPage";
import StarshipsPage from "../pages/StarshipsPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/starships" element={<StarshipsPage />} />
      <Route path="/starship/:id" element={<StarshipDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
