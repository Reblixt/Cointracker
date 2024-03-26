import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/coins">Carls Favorite</NavLink>
        </li>
      </ul>
    </nav>
  );
};
