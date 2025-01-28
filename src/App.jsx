import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="background">
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
