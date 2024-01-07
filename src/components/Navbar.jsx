import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navBarContainer">
        <nav>
          <ul className="navBar">
            <span className="navbarLogo">
              <li>
                <img
                  src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&6f9ec7db"
                  alt=""
                />
              </li>
              <li>
                <p>More travel</p>
              </li>
            </span>

            <li>
              <p>Get the app</p>
            </li>
            <li>
              <p>English</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
