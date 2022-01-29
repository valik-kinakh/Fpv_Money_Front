import {Link} from "react-router-dom";
import s from './NotFound.module.css';
import routes from "../../config/routes";
import Container from "../../components/Container";

const NotFound = () => {

    return (
        <Container>
            <div className={s.Container}>
                <h1 className={s.notFoundTitle}>404</h1>
                <div className={s.subtitleWrapper}>
                    <h3 className={s.notFoundSubtitle}>Page not found</h3>
                    <h4 className={s.subtitleDescription}>The page you requested was not found</h4>
                    <Link to={routes.home} className={s.homeTitle}>
                        Go to home page
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
