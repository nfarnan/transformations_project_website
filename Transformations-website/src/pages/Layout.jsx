import { Outlet, Link, useLocation } from 'react-router-dom'
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
// import logo from '../assets/University_of_Pittsburgh_Logo_CMYK_Secondary_Reverse_2-Color.png'
import logo from '../assets/CESR logo horizontal white copy.png';

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
  const logoAlt = "Center for Ethnic Studies Research logo";

  return (
    <body className="Layout">
      <div className="header">
        <div className="header-seal">
          <img src={logo} alt={logoAlt}></img>
        </div>
        <h1>The Pittsburgh Transformations Project</h1>
      </div>
      <nav className="navbar">
        <List />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
      <footer className="footer">
        <div className="contacts">
          <h3>Contact Us</h3>
          <p>
            <strong>
              Center for Ethnic<br></br>
              Studies Research<br></br>
            </strong>
            4212 Posvar Hall<br></br>
            University of Pittsburgh<br></br>
            Pittsburgh, PA 15260
          </p>
          <p>
            <strong>General Inquiries: </strong> 
            <a className="email-link" href="mailto:cesr@pitt.edu">cesr@pitt.edu</a>
          </p>
        </div>
        <div className="follows">
          <h3>Follow Us</h3>
          <a className="social-media" href="https://www.facebook.com/cesrpitt">
            <FaSquareFacebook></FaSquareFacebook>
          </a>
          <a className="social-media" href="https://www.instagram.com/cesr_pitt/">
            <FaSquareInstagram></FaSquareInstagram>
          </a>
          <a className="social-media" href="https://twitter.com/cesr_pitt">
            <FaSquareXTwitter></FaSquareXTwitter>
          </a>
        </div>
      </footer>
    </body>
  );
}

export default Layout;
