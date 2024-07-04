import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/404";
import Profile from "@pages/Profile";
import Photo from "@pages/Photo";
import Document from "@pages/Document";
import Voice from "@pages/Voice";
import Community from "@pages/Community";
import Editform from "@pages/Editform";
import WritePost from "@pages/WritePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/document" element={<Document />} />
      <Route path="/voice" element={<Voice />} />
      <Route path="/editform/:id" element={<Editform />} />
      <Route path="/community/:type" element={<Community />} />
      <Route path="/writepost/:type" element={<WritePost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
