import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/404";
import Community from "@pages/Community";
import Profile from "@pages/Profile";
import Layout from "@layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
