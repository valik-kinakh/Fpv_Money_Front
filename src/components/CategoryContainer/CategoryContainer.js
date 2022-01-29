import s from './CategoryContainer.module.css';
import {UploadContentButton} from "../../Button";
import { ReactComponent as Edit } from "../../img/userProfile/edit.svg";
import {useState} from "react";
import {categoriesApi} from "../../services";
import ProductContainer from "../ProductContainer";


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const CategoryContainer = ({id, categoryName, products, fetchCategories}) => {
    const [enableEdit, setEnableEdit] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState(categoryName);
    const [showProducts, setShowProducts] = useState(false);

    const handleEditChange = () => {
        setEnableEdit(!enableEdit);
    }
    const handleNameChange = (e) => {
        setNewCategoryName(e.target.value);
    }

    const handleSave = async () => {
        try {
            const response = await categoriesApi.editCategory(newCategoryName,id);
            fetchCategories();
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
            <UploadContentButton text={showProducts?'Hide products':'Show products'} disabled={false} onClick={handleShow}/>
        </div>
    </div>
        <div className={s.wrapper}>
        {
            products.length > 0 && showProducts && products.map(product => {
                return <ProductContainer key={product.id} product={product} fetchCategories={fetchCategories}/>
            })
        }
        </div>
        {
            showProducts && products.length === 0 && <p style={{textAlign:'center'}}>No products of this category found</p>
        }
    </>)
}

export default CategoryContainer;