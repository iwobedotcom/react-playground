import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          gap: "10px",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/super-heroes">Super Heroes</NavLink>
        </li>
        <li>
          <NavLink to="/parallel-query">Parallel Queries</NavLink>
        </li>
      </nav>
    </header>
  );
}

export default Header;
