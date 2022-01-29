import s from './AddCategory.module.css'
import { useNavigate} from 'react-router-dom';
import {categoriesApi} from "../../services";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../../components/Container";
import React, {useEffect, useState} from "react";
import {SubmitButton} from "../../Button";
import Loader from "react-loader-spinner";

toast.configure();

const AddCategory = ({isLoggedIn}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login')
        }
    },[])

    const initialValues={
        name:''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2,'At least two characters').max(50,'At least 50 characters').required('Required')
    })

    const onSubmit = async (values, onSubmitProps) => {
        try {
            setLoading(true)
            const response = await categoriesApi.addCategory(values.name)
            toast.success(response.message,{
                position:'top-center'
            })
            setLoading(false)
            onSubmitProps.resetForm();
            navigate('/categories');
        }catch (e) {
            setLoading(false)
            toast.error(e.message,{
                position:'top-center'
            })
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    return(
        <Container>
            <div className={s.loginContainer}>
                <form onSubmit={formik.handleSubmit}>
                   <div className={s.LoginInner}>
                       <h1 className={s.title}>New category</h1>
                       <label htmlFor="login" className={s.label}>
                           Category
                       </label>
                       <input
                           className={s.input}
                           id="name"
                           name="name"
                           type="text"
                           placeholder='name'
                           {...formik.getFieldProps("name")}
                       />
                       {formik.touched.name && formik.errors.name ? (
                           <p className={s.error}>{formik.errors.name}</p>
                       ) : null}
                   </div>
                    {
                        loading ? <div className={s.loaderWrapper}>
                            <Loader type="Circles" color="#ff8614" height={40} width={40} />
                        </div> :<SubmitButton
                            text='Add category'
                            disabled={!(formik.dirty && formik.isValid)}
                            className="submitButton"
                        />
                    }
                </form>
            </div>
        </Container>
    )
}

export default AddCategory;