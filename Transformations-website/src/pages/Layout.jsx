import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <>
      <h1>Pittsburgh Transformations</h1>
      <h2>Race, Migration, Education, and Healthcare</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/Timeline">Timeline</Link>
          </li>
          <li>
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
