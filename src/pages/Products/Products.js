import s from './Products.module.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {productsApi} from "../../services";
import ProductContainer from "../../components/ProductContainer";
import states from "../../config/states";
import Loader from "react-loader-spinner";
import {MenuItem, Select} from "@mui/material";

toast.configure();

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const Products = ({isLoggedIn}) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [earnedMoney, setEarnedMoney] = useState([]);
    const [spendMoney, setSpendMoney] = useState([]);
    const [loading, setLoading] = useState(false)
    const [mounted, setMounted] = useState(false);
    const [state, setState] = useState(0);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [isLoggedIn])

    useEffect(() => {
        setLoading(true)
        fetchProducts().then(() => {
            setLoading(false)
        });
        return () => {
            setMounted(true);
        }
    }, [state])

    const fetchProducts = async () => {
        try {
            const response = await productsApi.getProducts(state);
            setProducts(response);
            const sumSpendArr = [...response].map(el => el.price.purchasePrice);
            const sumEarnedArr = [...response].map(el=>{
                if (el.price.sallingPrice){
                    return el.price.sallingPrice - el.price.purchasePrice
                }
                return 0;
            });
            setEarnedMoney(sumEarnedArr);
            setSpendMoney(sumSpendArr);
        } catch (e) {
            toast.error(e.response.data.message, {
                position: 'top-center'
            })
        }
    }

    const onSelectChange = (e) => {
        setState(e.target.value);
    }

    return (<Container>
        {
            loading ? <div className={s.loaderWrapper}>
                <Loader type="Bars" color="#ff8614" height={200} width={200}/>
            </div> : <>
                <div className={s.optionsWrapper}>
                    <div className={s.selectWrapper}>
                        <p>Filter: </p>
                        <Select onChange={onSelectChange} value={state} className={s.select}>
                            {
                                states.map(el => {
                                    return <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
                                })
                            }
                        </Select>
                    </div>
                    <div className={s.selectWrapper}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disableFuture
                                label="Start date"
                                openTo="day"
                                value={null}
                                onChange={(newValue) => {
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={s.selectWrapper}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disableFuture
                                label="End date"
                                openTo="day"
                                value={null}
                                onChange={(newValue) => {
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className={s.moneyInfo}>
                    <h2>Money spend: {spendMoney.length > 0 ? Math.round(spendMoney.reduce(reducer)): 0}</h2>
                    <h2>Money earned: {earnedMoney.length > 0 ? Math.round(earnedMoney.reduce(reducer)): 0}</h2>
                </div>
                <div className={s.wrapper}>
                    {
                        products.length > 0 && products.map((product) => {
                            return <ProductContainer key={product.id} product={product} fetchCategories={fetchProducts}/>
                        })
                    }
                </div>

                {
                    !loading && products.length === 0 && <div className={s.warning}>
                        <p>No items found</p>
                    </div>
                }
            </>
        }
    </Container>)
}

export default Products;