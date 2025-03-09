import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Eventreg from "./pages/Eventreg";
import ScrollToTop from "./components/ScrollToTop";
import Team from "./pages/Team";
import Broucher from "./pages/Broucher";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scrolling to the top on navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:events" element={<Events />} />
        <Route path="/:events/:eventName" element={<Eventreg />} />
        <Route path="/team" element={<Team />} />
        <Route path="/broucher" element={<Broucher />} />
      </Routes>
    </Router>
  );
}

export default App;
