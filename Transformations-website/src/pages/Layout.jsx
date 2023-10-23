import { Outlet, Link, useLocation } from "react-router-dom"

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
          <Link to={link}>{dict[link]}</Link>
        </li>
      );
    } else {
      return (
        <li key={i}>
          <Link to={link}>{dict[link]}</Link>
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
  return (
    <body className="Layout">
      <div className="header">
        <h1>Pittsburgh Transformations</h1>
        <h2></h2>
      </div>
      <nav className="navbar">
        <List />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
      <footer>Test footer</footer>
    </body>
  );
}

export default Layout;
