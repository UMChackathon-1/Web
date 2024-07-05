import { Link } from "react-router-dom";
import Logo from "@assets/logo.svg";
import { useEffect, useState } from "react";
import { getProfile } from "@server/api/user";
import DefaultImage from "@assets/default_profile.jpeg";

export default function Header() {
  const [profileData, setProfileData] = useState({
    imageUrl: DefaultImage,
    nickname: "이면지",
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
          <img
            src={profileData.imageUrl}
            className="w-8 h-8 rounded-[32px] mr-2"
          />
          <div className="font-normal text-white">
            <span className="text-[#8248F5] font-semibold">
              {profileData.nickname}
            </span>
            님 반가워요!
          </div>
        </div>
      </Link>
    </header>
  );
}
