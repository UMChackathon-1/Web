import { Link } from "react-router-dom";
import Logo from "@assets/logo.svg";
import { useEffect, useState } from "react";
import { getProfile } from "@server/api/user";

export default function Header() {
  const [profileData, setProfileData] = useState({
    imageUrl: "",
    nickname: "",
  });

  useEffect(() => {
    getProfile().then((res) => setProfileData(res));
  }, []);

  return (
    <header className="flex items-center justify-between px-4 pt-4 mb-5">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/profile">
        <div className="flex items-center">
          <img src={profileData.imageUrl} />
          <div className="text-white">
            <span className="text-[#8248F5]">{profileData.nickname}</span>님
            반가워요!
          </div>
        </div>
      </Link>
    </header>
  );
}
