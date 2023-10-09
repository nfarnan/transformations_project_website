import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <>

      <div className="header">
        <h1>Transformations</h1>
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

      <Outlet />

      <footer>Test footer</footer>
    </>
  );
}

export default Layout;
