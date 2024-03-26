import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="layout-Wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>©Refunction 2024</p>
      </footer>
    </div>
  );
};
