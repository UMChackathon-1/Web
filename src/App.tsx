import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/404";
import Profile from "@pages/Profile";
import { Photo } from "@pages/Photo";
import { Voice } from "@pages/Voice";
import Photolist from "@components/Lists/Photolist";
import Documentlist from "@components/Lists/Documentlist";
import Voicelist from "@components/Lists/Voicelist";
import Community from "@pages/Community";
import Editform from "@pages/Editform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/photo" element={<Photolist />} />
      <Route path="/document" element={<Documentlist />} />
      <Route path="/voice" element={<Voicelist />} />
      <Route path="/photo/:id" element={<Photo />} />
      <Route path="/voice/:id" element={<Voice />} />
      <Route path="/community" element={<Community />} />
      <Route path="/editform/:id" element={<Editform />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
