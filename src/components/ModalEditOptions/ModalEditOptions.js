import s from './ModalEditOptions.module.css';
import { ReactComponent as Close } from "../../img/header/closes.svg";
import {useEffect, useState} from "react";
import {MenuItem, Select} from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Loader from 'react-loader-spinner';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {categoriesApi, productsApi} from "../../services";
import * as React from "react";
import {UploadContentButton} from "../../Button";

toast.configure();

const ModalEditOptions = ({product, close, fetchProducts}) => {
    const [mounted, setMounted] = useState(true);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState(product.name);
    const [categoryName, setCategoryName] = useState(product.categoryName);
    const [purchasePrice, setPurchasePrice] = useState(product.price.purchasePrice);
    const [sellingPrice, setSellingPrice] = useState(product.price.sallingPrice? product.price.sallingPrice :'');
    const [purchaseDate, setPurchaseDate] = useState(product.transferDate.purchaseDate);
    const [saleDate, setSaleDate] = useState(product.transferDate.saleDate? product.transferDate.saleDate : '');

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchCategories();
        return ()=>{
            setMounted(false);
        }
    },[])

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

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onCategorySelect = (e) => {
        setCategoryName(e.target.value);
    }

    const onPurchasePriceChange = (e) => {
        if (Number(e.target.value)>-1){
            setPurchasePrice(Number(e.target.value));
        }
    }

    const onSellingPriceChange = (e) => {
        if (Number(e.target.value)>-1){
            setSellingPrice(Number(e.target.value));
        }
    }

    const disabledButton = () => {
        return !name || !categoryName || !purchaseDate || !purchasePrice;
    }

    const handleSaveClick = async () => {
        setLoading(true);
        try {
             await productsApi.changeProductName(product.id,name);
             await productsApi.changeProductCategory(product.id, categoryName);
            if (sellingPrice){
                await productsApi.changeSellingPrice(product.id, sellingPrice);
            }
            if (saleDate){
                await productsApi.addSellingDate(product.id, new Date(saleDate).toUTCString())
            }
            toast.success('Product successfully updated',{
                position:'top-center'
            })
            setLoading(false)
            close();
            fetchProducts();
        }catch (e) {
            toast.error(e.response.data.message,{
                position:'top-center'
            });
            setLoading(false);
        }
    }

    const handleClose = () => {
        close()
    }

    return (<div className={s.modalWrapper}>
        <div className={s.closeWrapper}>
            <Close className={s.svg} onClick={handleClose}/>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Name</label>
            <input  className={s.input} type='text' value={name} maxLength={50} onChange={onNameChange}/>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Category</label>
            <Select className={s.modalSelect} value={categoryName} onChange={onCategorySelect}>
                {
                    categories.map(el=>{
                        return <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
                    })
                }
            </Select>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Purchase price</label>
            <input className={s.input} type='number' value={purchasePrice} onChange={onPurchasePriceChange} disabled={true}/>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Selling price</label>
            <input className={s.input} type='number' value={sellingPrice} onChange={onSellingPriceChange}/>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Purchase date</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    disableFuture
                    label="Date"
                    openTo="day"
                    value={purchaseDate}
                    onChange={(newValue) => {
                        setPurchaseDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        <div className={s.blockInner}>
            <label className={s.label}>Date of sale</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    disableFuture
                    label="Date"
                    openTo="day"
                    value={saleDate}
                    onChange={(newValue) => {
                        setSaleDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        {
            loading ? <div className={s.loaderWrapper}>
                <Loader type="Circles" color="#ff8614" height={35} width={35}/>
            </div> : <UploadContentButton text='save' disabled={disabledButton()} onClick={handleSaveClick}/>
        }
    </div>)
}

export default ModalEditOptions;