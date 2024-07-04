import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/404";
import Community from "@pages/Community";
import Profile from "@pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
