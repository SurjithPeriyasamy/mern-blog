import { Link, useLocation } from "react-router-dom";
import { navItems } from "../utils/constants";

const NavList = () => {
  const path = useLocation().pathname;

  return navItems.map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className={`${
          path === item.path ? " text-cyan-700" : "text-black"
        } capitalize font-medium `}
      >
        {item.name}
      </Link>
    </li>
  ));
};
export default NavList;
