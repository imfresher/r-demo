import enFlag from 'assets/images/flags/en.svg';

function Header() {
  return (
    <header className="app__header">
      <div className="container-fluid">
        <div className="row">
          <div className="header__left col-6">
            <div className="page__title">
              <h1>Users</h1>
            </div>
          </div>
          <div className="header__right col-6">
            <div className="header__actions">
              <div className="header__actions__item action__lang">
                <a className="nav__link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
                  <img
                    src={enFlag}
                    alt="user"
                    height="20"
                  />
                </a>
              </div>

              <div className="header__actions__item action__chat">
                <a href="/" className="position-relative"><i className="bi bi-chat-left"></i>
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </a>
              </div>

              <div className="header__actions__item action__notification">
                <a href="/" className="position-relative"><i className="bi bi-bell"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </div>

              <div className="header__actions__item action__account">
                <div className="dropdown">
                  <span className="action__account__title dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="action__account__img">
                      <img src="https://cdn.dribbble.com/users/9619488/avatars/mini/c093d73057616c648d06e456acacabab.jpg?1635306360" alt="account" />
                    </span>
                  </span>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
