import { NavLink } from "react-router-dom";

import routes from "../../../config/routes";
import s from "./NavBar.module.css";
import { ReactComponent as Home } from "../../../img/header/navBar/homeIcon.svg";
import { ReactComponent as About } from "../../../img/header/navBar/aboutIcon.svg";
import { ReactComponent as Socialize } from "../../../img/header/navBar/socializeIcon.svg";
import { ReactComponent as News } from "../../../img/header/navBar/newsIcon.svg";
import { ReactComponent as Health } from "../../../img/header/navBar/healthIcon.svg";
import { ReactComponent as Book } from "../../../img/header/navBar/bookIcon.svg";
import { ReactComponent as LogIn } from "../../../img/header/navBar/loginIcon.svg";

const NavLinks = ({ close, isLogedIn, user }) => {

  const clickHandler = () => {
    close(false);
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.home} end className={s.navLink}>
            <Home className={s.svg} />
            Home
          </NavLink>
        </li>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.categories} className={s.navLink}>
            <About className={s.svg} />
            Categories
          </NavLink>
        </li>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.users} className={s.navLink}>
            <Socialize className={s.svg} />
            Users
          </NavLink>
        </li>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.moneyReport} end className={s.navLink}>
            <News className={s.svg} />
            Money report
          </NavLink>
        </li>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.products} className={s.navLink}>
            <Book className={s.svg} />
            Products
          </NavLink>
        </li>
        <li className={s.item} onClick={clickHandler}>
          <NavLink to={routes.newItems} className={s.navLink}>
            <Health className={s.svg} />
            New items
          </NavLink>
        </li>
      </ul>
      {isLogedIn ? (
          <NavLink to={routes.userProfile} className={s.login}>
              <LogIn className={s.loginSvg} />
              {user.login}
          </NavLink>
      ) : (
        <NavLink to={routes.login} className={s.login} onClick={clickHandler}>
          <LogIn className={s.loginSvg} />
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default NavLinks;
