import { Link } from "react-router-dom";

import s from "./Logo.module.css";
import { ReactComponent as HeaderLogo } from "../../../img/fpvLogo/Знімок-екрана-2021-11-12-о-11.16.18.svg";
import { ReactComponent as Burger } from "../../../img/header/burger.svg";
import { ReactComponent as Close } from "../../../img/header/closes.svg";

const Logo = ({ isOpen, open }) => {
  const handleClick = () => {
    isOpen(!open);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Link to="/" className={s.logoWrapper}>
          <HeaderLogo className={s.logo} />
          <h2 className={s.header}>
            Fpv World
          </h2>
        </Link>
      </div>
      <div className={s.localesContainer}>
      </div>
      <button type="button" className={s.button} onClick={handleClick}>
        {open ? <Close className={s.svg} /> : <Burger className={s.svg} />}
      </button>
    </div>
  );
};

export default Logo;
