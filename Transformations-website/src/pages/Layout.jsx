import { Outlet, Link, useLocation } from "react-router-dom"
import logo from '../assets/University_of_Pittsburgh_Logo_CMYK_Secondary_Reverse_2-Color.png'

// return list for navbar with correct classnames
function List() {
  const location = useLocation();
  const links = ["/", "/map", "/Timeline", "/Media"];
  const names = ["Home", "Map", "Timeline", "Media"];
  let dict = {};

  for (let i = 0; i < links.length; i += 1) {
    dict[links[i]] = names[i];
  }

  const listItems = links.map((link, i) => {
    if (link == location.pathname) {
      return (
        <li key={i} className="navbar-item">
          <div className="outer-link-div">
            <Link to={link}>
              <div className="inner-link-div">{dict[link]}</div>
            </Link>
          </div>
        </li>
      );
    } else {
      return (
        <li key={i}>
          <div className="outer-link-div">
            <Link to={link}>
              <div className="inner-link-div">{dict[link]}</div>
            </Link>
          </div>
        </li>
      );
    }
  });

  return (
    <ul className="navbar-list">
      {listItems}
    </ul>
  );
}

function Layout() {
  const logoAlt = "University of Pittsburgh Shield and Signature";

  return (
    <body className="Layout">
      <div className="header">
        <div className="header-seal">
          <img src={logo} alt={logoAlt}></img>
        </div>
        <h1>Pittsburgh Transformations</h1>
      </div>
      <nav className="navbar">
        <List />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer-seal">
          <img src={logo} alt={logoAlt}></img>
        </div>
        <h1>Test footer</h1>
      </footer>
    </body>
  );
}

export default Layout;
