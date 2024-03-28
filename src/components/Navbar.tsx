import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">My Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};
