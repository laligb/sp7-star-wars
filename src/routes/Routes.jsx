import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import WelcomePage from "../pages/WelcomePage";
import StarshipDetailPage from "../pages/StarshipDetailPage";
import StarshipsPage from "../pages/StarshipsPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route
        path="/starships"
        element={
          <ProtectedRoute>
            <StarshipsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/starship/:id"
        element={
          <ProtectedRoute>
            <StarshipDetailPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
