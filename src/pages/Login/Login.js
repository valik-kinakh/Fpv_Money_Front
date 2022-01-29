import s from './Login.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {userApi} from "../../services";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../../components/Container";

import closeEye from "../../img/register/closeEye.svg";
import openEye from "../../img/register/openEye.svg";
import React, {useState} from "react";
import {SubmitButton, UploadContentButton} from "../../Button";
import routes from "../../config/routes";
import Loader from "react-loader-spinner";

toast.configure();

const Login = ({getTokenHandler, isLoggedIn, logoutHandler}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        login: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        login: Yup.string().min(2).required("Required"),
        password: Yup.string().required("Required"),
    })

    const [showPassword, setShowPassword] = useState(false);

    const showPas = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (values, onSubmitProps) => {
        try {
            setLoading(true);
            const response = await userApi.userLogin(values)
            getTokenHandler(response)
            localStorage.setItem('currentUser', JSON.stringify(response));
            toast.success('Login success', {
                position: 'top-center'
            });
            setLoading(false);
            onSubmitProps.resetForm();
            navigate('/')
        } catch (e) {
            setLoading(false);
            toast.error(e.response.data.message, {
                position: 'top-center'
            })
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <Container>
            <div className={s.loginContainer}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.LoginInner}>
                        <h1 className={s.title}>Login form</h1>
                        <label htmlFor="login" className={s.label}>
                            Login
                        </label>
                        <input
                            className={s.input}
                            id="login"
                            name="login"
                            type="text"
                            placeholder='Login'
                            {...formik.getFieldProps("login")}
                        />
                        {formik.touched.login && formik.errors.login ? (
                            <p className={s.error}>{formik.errors.login}</p>
                        ) : null}

                        <label htmlFor="password" className={s.label}>
                            Password
                        </label>
                        <div className={s.password}>
                            <input
                                className={s.input}
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                {...formik.getFieldProps("password")}
                            />
                            {showPassword ? (
                                <img
                                    src={openEye}
                                    style={{width: "16px", cursor: "pointer"}}
                                    onClick={showPas}
                                />
                            ) : (
                                <img
                                    src={closeEye}
                                    style={{width: "16px", cursor: "pointer"}}
                                    onClick={showPas}
                                />
                            )}
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <p className={s.error}>{formik.errors.password}</p>
                        ) : null}
                    </div>
                    {
                        loading ? <div className={s.loaderWrapper}>
                            <Loader type="Circles" color="#ff8614" height={40} width={40} />
                        </div> : <SubmitButton
                            text='Log in'
                            disabled={!(formik.dirty && formik.isValid)}
                            className="submitButton"
                        />
                    }
                </form>
                {
                    isLoggedIn && <UploadContentButton text='Logout' disabled={false} onClick={logoutHandler}/>
                }
                <Link to={routes.register} className={s.register}>
                    Go to register
                </Link>
            </div>
        </Container>)
}

export default Login;