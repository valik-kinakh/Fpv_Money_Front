import s from './Users.module.css';
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Container from "../../components/Container";
import {userApi} from "../../services";
import UserContainer from "../../components/UserContainer";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";

toast.configure();

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const Users = ({isLoggedIn}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [mounted, setMounted] = useState(false);
    const [generalSum, setGeneralSum] = useState(0);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn])

    useEffect(() => {
        fetchUsers();
        return () => {
            setMounted(true);
        }
    }, [])

    useLayoutEffect(() => {
        if (users.length > 0) {
            users.forEach(el => {
                const arr = el.money.map(el => el.count);
                const sum = arr.length > 0 ? arr.reduce(reducer) : 0
                setGeneralSum(prevState => prevState + sum);
            })
        }
    }, [users])

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await userApi.getAllUsers();
            setUsers(response);
            setLoading(false)
        } catch (e) {
            setLoading(false)
            toast.error(e.message, {
                position: 'top-center'
            })
        }
    }

    return (<Container>
        {
            loading ? <div className={s.loaderWrapper}>
                <Loader type="Bars" color="#ff8614" height={200} width={200} />
            </div> : <>
                <div className={s.container}>
                    <div className={s.innerContainer}>
                        User name
                    </div>
                    <div className={s.innerContainer}>
                        Invested money
                    </div>
                    <div className={s.innerContainer}>
                        Range
                    </div>
                </div>
                {
                    users.length > 0 && users.map(({login, money}) => {
                        return <UserContainer login={login} money={money} key={login}/>
                    })
                }
                <div className={s.sum}>
                    <h2>General sum : {generalSum}</h2>
                </div>
            </>
        }
    </Container>)
}

export default Users;