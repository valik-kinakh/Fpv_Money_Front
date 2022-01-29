import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = ({ isOpen, open, isLogedIn, user }) => {
  const nodeRef = useRef(null);

  return (
    <>
      <Navigation isOpen={isOpen} isLogedIn={isLogedIn} user={user} />
      <CSSTransition
        in={open}
        nodeRef={nodeRef}
        classNames="mobileNavAnimation"
        timeout={100}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <MobileNavigation isOpen={isOpen} isLogedIn={isLogedIn} user={user} />
        </div>
      </CSSTransition>
    </>
  );
};

export default NavBar;
