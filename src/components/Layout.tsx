import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="content">{children}</main>
      </div>
    </>
  );
}

export default Layout;