import s from './CategoryContainer.module.css';
import {UploadContentButton} from "../../Button";
import { ReactComponent as Edit } from "../../img/userProfile/edit.svg";
import React, {useEffect, useState} from "react";
import {categoriesApi} from "../../services";
import states from "../../config/states";
import ProductContainer from "../ProductContainer";


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MenuItem, Select} from "@mui/material";
import Loader from "react-loader-spinner";

toast.configure();

const CategoryContainer = ({id, categoryName, fetchCategories}) => {
    const [enableEdit, setEnableEdit] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState(categoryName);
    const [showProducts, setShowProducts] = useState(false);
    const [products, setProducts] = useState([]);
    const [state, setState] = useState(0);

    const [loading, setLoading] = useState(false);

    const handleEditChange = () => {
        setEnableEdit(!enableEdit);
    }
    const handleNameChange = (e) => {
        setNewCategoryName(e.target.value);
    }

    const handleSave = async () => {
        try {
            await categoriesApi.editCategory(newCategoryName,id);
            fetchCategories();
            setEnableEdit(false)
            toast.success('Category successfully updated',{
                position:'top-center'
            })
        }catch (e) {
            toast.error(e.response.data.message,{
                position:'top-center'
            })
        }
    }
    
    const handleDelete = async () => {
        try {
            await categoriesApi.removeCategory(id)
            fetchCategories();
        }catch (e) {
            toast.error(e.response.data.message,{
                position:'top-center'
            })
        }
    }

    const fetchProducts = async () => {
        setLoading(true);
        try {
           const response = await categoriesApi.getProductsByCategoryId(id,state);
           setProducts(response.products);
            setLoading(false);
        }catch (e) {
            setLoading(false);
            toast.error(e.response.data.message, {
                position:'top-center'
            })
        }
    }

    const onSelectChange = (e) => {
        setState(e.target.value);
    }

    useEffect(()=>{
        if (showProducts){
            fetchProducts();
        }
    },[showProducts,state])

    const handleShow = () => {
        setShowProducts(!showProducts);
    }
    return(<><div className={s.container}>
        <div className={s.innerContainer}>
            {
                enableEdit ? <input type='text' maxLength={50} value={newCategoryName || ''}
                                    className={s.editInput} placeholder='Category name' onChange={handleNameChange}/>:
                    <div>{categoryName}</div>
            }
        </div>
        <div className={s.innerContainer}>
            <button className={s.button} onClick={handleEditChange}>
                <Edit className= {enableEdit ? "editTrue" : 'editFalse'}/>
            </button>
            {
                enableEdit && <div>
                <UploadContentButton text='Save' disabled={!newCategoryName} onClick={handleSave}/>
                <UploadContentButton text='Delete category' disabled={false} onClick={handleDelete}/>
                </div>
            }
        </div>
        <div className={s.innerContainer}>
            <Select onChange={onSelectChange} value={state} className={s.select}>
                {
                    states.map(el => {
                        return <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
                    })
                }
            </Select>
        </div>
        <div className={s.innerContainer}>
            <UploadContentButton text={showProducts?'Hide products':'Show products'} disabled={false} onClick={handleShow}/>
        </div>
    </div>
        <div className={s.wrapper}>
        {
            products.length > 0 && !loading && showProducts && products.map(product => {
                return <ProductContainer key={product.id} product={product} fetchCategories={fetchProducts}/>
            })
        }
        </div>
        {
            showProducts && !loading && products.length === 0 && <p style={{textAlign:'center'}}>No products of this category found</p>
        }
        {
            loading && <div className={s.loaderWrapper}>
                <Loader type="Bars" color="#ff8614" height={100} width={100} />
            </div>
        }
    </>)
}

export default CategoryContainer;