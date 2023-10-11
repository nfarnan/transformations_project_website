import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <body className="Layout">

      <div className="header">
        <h1>Pittsburgh Transformations</h1>
        <h2></h2>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/map">Map</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Timeline">Timeline</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Media">Media</Link>
          </li>
        </ul>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
      <footer>Test footer</footer>
    </body>
  );
}

export default Layout;
