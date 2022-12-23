import Navigation from './Navigation';

import logo from 'logo.svg';

function Sidebar() {
  return (
    <aside className="app__sidebar mini__layout">
      <div className="sidebar__brand">
        <div className="app__logo">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="d-none">Application</h1>
        </div>
      </div>

      <div className="sidebar__main">
        <div className="side__nav">
          <Navigation />
        </div>
        <div className="sidebar__bottom mt-auto">
          <div className="dropdown">
            <span className="action__account__title dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="action__account__img">
                <img src="https://cdn.dribbble.com/users/9619488/avatars/mini/c093d73057616c648d06e456acacabab.jpg?1635306360" alt="" />
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
    </aside>
  );
}

export default Sidebar;
