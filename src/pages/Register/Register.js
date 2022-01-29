import s from './Register.module.css'
import {useNavigate} from 'react-router-dom';
import {userApi} from "../../services";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../../components/Container";
import openEye from "../../img/register/openEye.svg";
import closeEye from "../../img/register/closeEye.svg";
import {SubmitButton} from "../../Button";
import React, {useState} from "react";
import Loader from "react-loader-spinner";

toast.configure()

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const initialValues = {
        login:'',
        password:'',
        confirmPassword:''
    }

    const validationSchema = Yup.object().shape({
        login: Yup.string().min(2).required("Required"),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const onSubmit = async (values, onSubmitProps) => {
        try{
            setLoading(true);
           const response = await userApi.userRegister({
               login: values.login,
               password: values.password
           });
            setLoading(false);
            toast.success('Registration success',{
                position:'top-center'
            });
            onSubmitProps.resetForm();
            navigate('/login');
        }catch (e) {
            setLoading(false);
            toast.error(e.response.data.message, {
                position:'top-center'
            })
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const showPas = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnMount:false
    })
    return(<Container>
        <div className={s.loginContainer}>
       <form onSubmit={formik.handleSubmit} className={s.formStyle}>
               <div className={s.LoginInner}>
                   <h1 className={s.title}>Register form</h1>
                   <label htmlFor="login" className={s.label}>
                       Register
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
                               style={{ width: "16px", cursor: "pointer" }}
                               onClick={showPas}
                           />
                       ) : (
                           <img
                               src={closeEye}
                               style={{ width: "16px", cursor: "pointer" }}
                               onClick={showPas}
                           />
                       )}
                   </div>
                   {formik.touched.password && formik.errors.password ? (
                       <p className={s.error}>{formik.errors.password}</p>
                   ) : null}

                   <label htmlFor="confirmPassword" className={s.label}>
                       Confirm password
                   </label>
                   <div className={s.password}>
                       <input
                           className={s.input}
                           id="confirmPassword"
                           name="confirmPassword"
                           type={showPassword ? "text" : "password"}
                           placeholder='Confirm password'
                           {...formik.getFieldProps("confirmPassword")}
                       />
                       {showPassword ? (
                           <img
                               src={openEye}
                               style={{ width: "16px", cursor: "pointer" }}
                               onClick={showPas}
                           />
                       ) : (
                           <img
                               src={closeEye}
                               style={{ width: "16px", cursor: "pointer" }}
                               onClick={showPas}
                           />
                       )}
                   </div>
                   {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                       <p className={s.error}>{formik.errors.confirmPassword}</p>
                   ) : null}
               </div>
           {
               loading ? <div className={s.loaderWrapper}>
                   <Loader type="Circles" color="#ff8614" height={40} width={40} />
               </div> : <SubmitButton
                   text='Finish register'
                   disabled={!(formik.dirty && formik.isValid)}
                   className="submitButton"
               />
           }
           </form>
        </div>
    </Container>)
}

export default Register;