import BottomNavigation from "@components/BottomNavigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
