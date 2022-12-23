function Navigation() {
  return (
    <nav className="app__navigation">
      <ul className="nav">
        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="bi bi-house"></i>
            <span className="nav__text">Dashboard</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="bi bi-list"></i>
            <span className="nav__text">Menus</span>
          </a>
        </li>

        <li className="nav__item active">
          <a href="/" className="nav__link">
            <i className="bi bi-people"></i>
            <span className="nav__text">Users</span>
          </a>

          <ul className="nav__sub">
            <li className="nav__item">
              <a href="/" className="nav__link">
                <span className="nav__text">Users</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="/" className="nav__link">
                <span className="nav__text">Create Users</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="/" className="nav__link">
                <span className="nav__text">Permissions</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="/" className="nav__link">
                <span className="nav__text">Roles</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="bi bi-file-earmark-text"></i>
            <span className="nav__text">Blog</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="bi bi-shop"></i>
            <span className="nav__text">Products</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <i className="bi bi-gear"></i>
            <span className="nav__text">Settings</span>
          </a>
        </li>
    </ul>
    </nav>
  );
}

export default Navigation;
