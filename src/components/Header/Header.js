import { useState } from "react";

import Logo from "./Logo";
import NavBar from "./NavBar";
import Container from "../Container";

import s from "./Header.module.css";

const Header = ({ isLogedIn, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (open) => {
    setIsOpen(open);

  };

  return (
    <header>
      <div className={s.logoWrapper}>
        <Container>
          <Logo onscroll={() => {return false}} isOpen={openHandler} open={isOpen} />
        </Container>
      </div>
      <div className={s.navBarWrapper}>
        <NavBar
          isOpen={openHandler}
          open={isOpen}
          isLogedIn={isLogedIn}
          user={user}
        />
      </div>
    </header>
  );
};

export default Header;
