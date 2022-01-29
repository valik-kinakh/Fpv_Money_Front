import React, {Suspense, lazy, useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";

import routes from "./config/routes";
import Header from "./components/Header";
import { useToken } from "./helpers";
import './app.css';

const Home = lazy(()=>
  import("./pages/Home" /* webpackChunkName: "HomePage" */)
);

const Login = lazy( () =>
   import("./pages/Login" /* webpackChunkName: "Login" */)
);

const Register = lazy( () =>
  import("./pages/Register" /* webpackChunkName: "Register" */)
);

const Categories = lazy( () =>
   import("./pages/Categories" /* webpackChunkName: "Categories" */)
);

const AddCategory = lazy( () =>
  import("./pages/AddCategory" /* webpackChunkName: "AddCategory" */)
)

const Users = lazy( () =>
  import("./pages/Users" /* webpackChunkName: "Users" */)
)

const UserProfile = lazy( () =>
  import("./pages/UserProfile" /* webpackChunkName: "UserProfile" */)
)

const MoneyReport = lazy( () =>
  import("./pages/MoneyReport" /* webpackChunkName: "MoneyReport" */)
);

const NewItems = lazy( () =>
  import("./pages/NewItems" /* webpackChunkName: "NewItems" */)
);

const Products = lazy( () =>
  import("./pages/Products" /* webpackChunkName: "Products" */)
);

const Fpv_Money_Front = lazy( () =>
  import("./pages/Fpv_Money_Front" /* webpackChunkName: "Fpv_Money_Front" */)
)

const NotFound = lazy( () =>
  import("./pages/NotFound" /* webpackChunkName: "NotFound" */)
)


function App() {
    const {token, setToken} = useToken()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
    const navigate = useNavigate();

    const getTokenHandler = (res) => {
        setCurrentUser(res);
        setToken(res.token);
        setIsLoggedIn(true);
    };

    useEffect(()=>{
        if (token && currentUser){
            setIsLoggedIn(true)
        }
    },[])

    const logoutHandler = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setToken('');
        navigate(routes.login);
    }

  return (
    <div className='App'>
        <Header isLogedIn={isLoggedIn} user={currentUser}/>
        <Suspense
            fallback={
                <div className="lazyLoaderWrapper">
                    <Loader type="Bars" color="#ff8614" height={200} width={200} />
                </div>
            }
        >
        <Routes>
            <Route path={routes.home} element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.login} element={<Login getTokenHandler={getTokenHandler} isLoggedIn={isLoggedIn} logoutHandler={logoutHandler}/>}/>
            <Route path={routes.register} element={<Register/>}/>
            <Route path={routes.categories} element={<Categories isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.addCategory} element={<AddCategory isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.users} element={<Users isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.moneyReport} element={<MoneyReport isLoggedIn={isLoggedIn} id={currentUser? currentUser.id: null}/>}/>
            <Route path={routes.newItems} element={<NewItems isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.products} element={<Products isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.userProfile} element={(<UserProfile isLoggedIn={isLoggedIn} login={currentUser? currentUser.login :''} id={currentUser? currentUser.id: null}
            logoutHandler={logoutHandler}
            />)}/>
            <Route path={routes.fpvMoneyFront} element={<Fpv_Money_Front isLoggedIn={isLoggedIn}/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
