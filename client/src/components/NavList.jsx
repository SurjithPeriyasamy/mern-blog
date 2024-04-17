import { Link, useLocation } from "react-router-dom";

const NavList = () => {
  const path = useLocation().pathname;
  // const path = location.pathname === "/" ? "home" : location.pathname;

  console.log(path);

  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
  ];
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
