import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFree = () => {
    navigate("/community/free");
  };
  const handlePartTime = () => {
    navigate("/community/parttime");
  };

  return (
    <nav className="flex mt-4">
      <li
        className={`px-4 py-1 text-white list-none cursor-pointer ${
          location.pathname === "/community/free" && "border-b-2 border-b-white"
        }`}
        onClick={handleFree}
      >
        자유게시판
      </li>
      <li
        className={`px-4 py-1 text-white list-none cursor-pointer ${
          location.pathname === "/community/parttime" &&
          "border-b-2 border-b-white"
        }`}
        onClick={handlePartTime}
      >
        아르바이트
      </li>
    </nav>
  );
}
