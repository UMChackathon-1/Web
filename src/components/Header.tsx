import { Link } from "react-router-dom";
import ProfileSvg from "@assets/profile.svg";
import Logo from "@assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 pt-4 mb-5">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/profile">
        <ProfileSvg color="#6B6AFF" />
      </Link>
    </header>
  );
}
