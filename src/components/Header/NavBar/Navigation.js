import NavLinks from "./NavLinks";
import Container from "../../Container";

import s from "./NavBar.module.css";

const Navigation = ({ isOpen, isLogedIn, user }) => {
  return (
    <div className={s.navigation}>
      <Container>
        <NavLinks close={isOpen} isLogedIn={isLogedIn} user={user} />
      </Container>
    </div>
  );
};

export default Navigation;
