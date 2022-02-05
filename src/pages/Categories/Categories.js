import s from './Categories.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {categoriesApi} from "../../services";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryContainer from "../../components/CategoryContainer";
import {UploadContentButton} from "../../Button";
import routes from "../../config/routes";
import {BsTable} from "react-icons/bs";
import Loader from "react-loader-spinner";

toast.configure();

const Categories = ({isLoggedIn}) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login');
        }
    },[isLoggedIn])

    useEffect(()=>{
        setLoading(true)
        fetchCategories().then(()=>{
            setLoading(false)
        })
        return () => {
            setMounted(true);
        }
    },[])

    const fetchCategories = async () => {
        try {
            const response = await categoriesApi.getCategories();
            setCategories(response);
        }catch (e) {
            toast.error(e.response.data.message, {
                position:'top-center'
            })
        }
    }

    return(<Container>
        {
            loading ? <div className={s.loaderWrapper}>
                <Loader type="Bars" color="#ff8614" height={200} width={200} />
            </div> : <>
                {
                    categories.length > 0 && categories.map(category=>{
                        return <CategoryContainer key={category.id} id={category.id} categoryName={category.categoryName}
                                                   fetchCategories={fetchCategories}
                        />
                    })
                }
                <NavLink to={routes.addCategory}><UploadContentButton text='Add category'/></NavLink>
                <div className={s.buttonWrapper}><a className={s.button32} href='https://fpvworldmoneyapi.azurewebsites.net/Common/generateExcel'><BsTable/><br/>Generate exel</a></div>
            </>
        }
    </Container>)
}

export default Categories;