import NavLinks from "./NavLinks";
import Container from "../../Container";

import s from "./NavBar.module.css";

const MobileNavigation = ({ isOpen, isLogedIn, user }) => {
  return (
    <div className={s.mobileNavigation}>
      <Container>
        <NavLinks close={isOpen} isLogedIn={isLogedIn} user={user} />
      </Container>
    </div>
  );
};

export default MobileNavigation;
