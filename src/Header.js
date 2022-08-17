import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="header">
        <div>
          {" "}
          <button>
            {" "}
            <NavLink activeClassName="active" to="/popular">
              Popular
            </NavLink>{" "}
          </button>
          <button>
            {" "}
            <NavLink activeClassName="active" to="/Battle">
              Battle
            </NavLink>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
