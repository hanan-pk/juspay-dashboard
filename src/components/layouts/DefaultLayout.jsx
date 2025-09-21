import ActivityTab from "../ActivityTab/ActivityTab";
import Header from "../Header/Header";
import Sidebar from "../SideBar/SideBar";

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="pt-[75px]">{children}</main>
      </div>
      <div className="fixed top-[60px] right-0 w-[300px] h-[calc(100vh-60px)] overflow-y-auto">
        <ActivityTab />
      </div>
    </div>
  );
}
