import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../index.js";

const DashboardLayout = () => {
  return (
    <div className="flex pt-[64px]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
