import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className=" py-4 px-6 flex gap-10 justify-between h-20 items-center">
      <a href="/">
        <p>Smart Vaccum Cleaner</p>
      </a>
      <nav>
        <ul className="flex gap-5 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn("", isActive ? "font-bold text-red-500" : "")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Vehicle-design"
              className={({ isActive }) =>
                cn("", isActive ? "font-bold text-red-500" : "")
              }
            >
              Vehicle Design
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Circuit-design"
              className={({ isActive }) =>
                cn("", isActive ? "font-bold text-red-500" : "")
              }
            >
              Circuit Design
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/code"
              className={({ isActive }) =>
                cn("", isActive ? "font-bold text-red-500" : "")
              }
            >
              Code
            </NavLink>
          </li>
        </ul>
      </nav>

      <div></div>
    </header>
  );
}
