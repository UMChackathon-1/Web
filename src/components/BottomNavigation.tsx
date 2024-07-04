import HomeSvg from "@assets/home.svg";
import CommunitySvg from "@assets/community.svg";
import ProfileSvg from "@assets/profile.svg";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "홈", icon: HomeSvg },
  { to: "/community", label: "커뮤니티", icon: CommunitySvg },
  { to: "/profile", label: "프로필", icon: ProfileSvg },
];

export default function BottomNavigation() {
  return (
    <nav className="border border-black flex justify-evenly fixed bottom-0 w-full max-w-[400px]">
      {navItems.map((item) => (
        <Link key={item.label} to={item.to} className="flex flex-col items-center">
          <item.icon />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
