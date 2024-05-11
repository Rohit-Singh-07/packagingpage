import { NavLink } from "react-router-dom";

function ProductNav() {
  return (
    <div className="flex gap-[4vw] lg:text-[1.8vw] md:text-[2.2vw] text-[2.4vw] text-zinc-400 pt-16">
      <NavLink
        to="/basic"
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Basic Design
      </NavLink>
      <NavLink
      to='/layouts'
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Layouts
      </NavLink>
      <NavLink
      to='/titles'
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Titles
      </NavLink>
      <NavLink
      to='pricing'
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/insights"
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Insights
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }
      >
        Packaging
      </NavLink>
    </div>
  );
}

export default ProductNav;
