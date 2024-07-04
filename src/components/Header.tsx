import { Link } from "react-router-dom";
import ProfileSvg from "@assets/profile.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 mb-9">
      <Link to="/">
        <h1 className="text-[#6B6AFF] text-xl font-semibold">Party Tonight</h1>
      </Link>
      <Link to="/profile">
        <ProfileSvg color="#6B6AFF" />
      </Link>
    </header>
  );
}
