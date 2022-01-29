import s from './ProductContainer.module.css';
import moment from "moment/moment";
import {UploadContentButton} from "../../Button";
import {productsApi} from "../../services";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useModal } from "react-hooks-use-modal";
import {useState} from "react";
import ModalEditOptions from "../ModalEditOptions";

toast.configure();

const ProductContainer = ({product, fetchCategories}) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: true
    });

    const handleDelete = async () => {
        try {
            await productsApi.deleteProduct(product.id);
            toast.success('Product deleted successfully',{
                position:'top-center'
            })
            fetchCategories();
        }catch (e) {
            toast.error(e.message,{
                position:'top-center'
            })
        }
    }

    const handleOpen = () => {
        open();
    }

    return(<div className={s.wrapper}>
        <div className={s.textWrapper}>
            <p>Product name: {product.name}</p>
        </div>
        <div className={s.textWrapper}>
            <p>Category: {product.categoryName}</p>
        </div>
        <div className={s.textWrapper}>
           <p>Purchase price: {product.price.purchasePrice}</p>
        </div>
        <div className={s.textWrapper}>
            <p>Purchase date: {moment(product.transferDate.purchaseDate).format('DD/MM/YYYY')}</p>
        </div>
        <div className={s.textWrapper}>
            <p>{product.transferDate.arrivalDate? `Arrival date: ${moment(product.transferDate.arrivalDate).format('DD/MM/YYYY')}`:'No arrival date found'}</p>
        </div>
        <div className={s.textWrapper}>
            <p>{product.transferDate.saleDate? `Sell date: ${moment(product.transferDate.saleDate).format('DD/MM/YYYY')}`:'No selling date found'}</p>
        </div>
        <div className={s.buttonsWrapper}>
            <UploadContentButton text='Edit product' disabled={false} onClick={handleOpen}/>
            <UploadContentButton text='Delete product' disabled={false} onClick={handleDelete}/>
        </div>
        <Modal>
            <ModalEditOptions product={product} close={close} fetchProducts={fetchCategories}/>
        </Modal>
    </div>)
}

export default ProductContainer;