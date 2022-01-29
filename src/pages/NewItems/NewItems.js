import s from './NewItems.module.css';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Container from "../../components/Container";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {categoriesApi, productsApi} from "../../services";
import {Backdrop, MenuItem, Select} from "@mui/material";
import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {Button, SubmitButton, UploadContentButton} from "../../Button";
import Loader from "react-loader-spinner";

toast.configure();

const NewItems = ({isLoggedIn}) => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [purchaseDate, setPurchaseDate] = useState('');

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login');
        }
    },[isLoggedIn])

    useEffect(()=>{
        fetchCategories()

        return () => {
            setMounted(true);
        }
    },[])

    const initialValues = {
        name:'',
        purchasePrice: 0
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        purchasePrice: Yup.number().test((value)=>{
            return value >= 0;
        }).required('Required'),
    })

    const onSubmit = async (values, onSubmitProps) => {
       try {
           setLoading(true)
           const response = await productsApi.addProduct({
               name:values.name,
               categoryName:category,
               purchasePrice:values.purchasePrice,
               purchaseDate: new Date(purchaseDate).toISOString()
           })
           setLoading(false)
           toast.success(response.message,{
               position:'top-center'
           })
           onSubmitProps.resetForm();
           setCategory('');
           setPurchaseDate('')
       }catch (e) {
           setLoading(false)
          toast.error(e.response.data.message,{
              position:'top-center'
          })
       }
    }

    const fetchCategories = async () => {
        try {
            const response = await categoriesApi.getCategories();
            setCategories([...response].map(el=>({
                name:el.categoryName,
                id:el.id
            })))
        }catch (e) {
            toast.error(e.response.data.message,{
                position:'top-center'
            })
        }
    }

    const onCategorySelect = (e) => {
        setCategory(e.target.value);
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (<Container>
        <div className={s.loginContainer}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.LoginInner}>
                    <label className={s.label}>Name</label>
                    <input className={s.input}
                           id="name"
                           name="name" {...formik.getFieldProps("name")}/>
                    {formik.touched.name && formik.errors.name ? (
                        <p className={s.error}>{formik.errors.name}</p>
                    ) : null}
                </div>
                <div className={s.LoginInner}>
                    <label className={s.label}>Category</label>
                    <Select className={s.modalSelect} value={category || ''} onChange={onCategorySelect} style={{minWidth:'230px'}}>
                        {
                            categories.map(el=>{
                                return <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
                            })
                        }
                    </Select>
                </div>
                <div className={s.LoginInner}>
                    <label className={s.label}>Purchase price</label>
                    <input className={s.input}
                           type='number'
                           id="purchasePrice"
                           name="purchasePrice" {...formik.getFieldProps("purchasePrice")}/>
                    {formik.touched.purchasePrice && formik.errors.purchasePrice ? (
                        <p className={s.error}>{formik.errors.purchasePrice}</p>
                    ) : null}
                </div>

                <div className={s.LoginInner}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            disableFuture
                            label="Purchase date"
                            openTo="day"
                            value={purchaseDate}
                            onChange={(newValue) => {
                                setPurchaseDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                {
                    loading ? <div className={s.loaderWrapper}>
                        <Loader type="Circles" color="#ff8614" height={40} width={40} />
                    </div>: <SubmitButton text='Add product'/>
                }
            </form>
        </div>
    </Container>)
}

export default NewItems;