import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex w-fit">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
