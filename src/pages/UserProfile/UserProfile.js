import s from './UserProfile.module.css';
import Container from "../../components/Container";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {userApi} from "../../services";
import routes from "../../config/routes";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UploadContentButton} from "../../Button";
import Loader from "react-loader-spinner";

toast.configure();

const UserProfile = ({isLoggedIn, id, login,logoutHandler}) => {
    const navigate = useNavigate();
    const [enableEdit, setEnableEdit] = useState(false);
    const [name, setName] = useState(login ? login:'');
    const [amountOfMoney, setAmountOfMoney] = useState(0);
    const [loading, setLoading] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login')
        }
    },[isLoggedIn])

    useEffect(()=>{
       if (login && id){
           fetchUserMoney()
       }
       return () => {
           setMounted(true);
       }
    },[login, id])

    const fetchUserMoney = async () => {
        try {
            setLoading(true)
            const response = await userApi.getAllUserMoney(id);
            setAmountOfMoney(response)
            setLoading(false)
        }catch (e) {
            setLoading(false);
            toast.error(e.response.data.message,{
                position:'top-center'
            })
        }
    }

    const editMode = () => {
        setEnableEdit(!enableEdit);
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    const updateUser = async () => {
        try {
            setEditLoading(true)
            await userApi.editLogin(id,name);
            toast.success('User successfully updated',{
                position:'top-center'
            });
            setEnableEdit(!enableEdit);
            setEditLoading(false)
        }catch (e) {
            setEditLoading(false)
            toast.error(e.message,{
                position:'top-center'
            })
        }
    }

    const handleDelete = async () => {
        try {
            await userApi.deleteUser(id);
            toast.success('Account successfully deleted',{
                position:'top-center'
            })
            logoutHandler();
        }catch (e) {
            toast.error(e.message,{
                position:'top-center'
            })
        }
    }

    return(<Container>
        {
            loading ? <div className={s.loaderWrapper}>
                <Loader type="Bars" color="#ff8614" height={200} width={200} />
            </div> : <>
                <h1 className={s.header}>User Profile</h1>
                { id && login && <div className={s.container}>
                    {
                        enableEdit ? <div className={s.divInput}>
                                <input type='text' className={s.editInput} value={name} onChange={onChange} maxLength={20}/>
                                <div className={s.save}>
                                    {
                                        editLoading ? <div className={s.editWrapper}>
                                            <Loader type="Circles" color="#ff8614" height={30} width={30} />
                                        </div> : <UploadContentButton text='Save' disabled={!name} onClick={updateUser}/>
                                    }
                                </div>
                            </div>:
                            <h2 className={s.header}>{name}</h2>
                    }
                    <p className={s.header}>Invested money: {amountOfMoney.contributionCount}</p>
                    {
                        enableEdit?<div className={s.buttons2}>
                            <div>
                                <UploadContentButton text={enableEdit ? 'Cancel':'Edit profile'} disabled={false} onClick={editMode}/>
                            </div>
                            <div>
                                <UploadContentButton text='Delete account' disabled={false} onClick={handleDelete}/>
                            </div>
                        </div> :<div className={s.buttons}>
                            <div>
                                <UploadContentButton text={enableEdit ? 'Cancel':'Edit profile'} disabled={false} onClick={editMode}/>
                            </div>
                            <div>
                                <UploadContentButton text='Logout' disabled={false} onClick={logoutHandler}/>
                            </div>
                            <div>
                                <NavLink to={routes.moneyReport}><UploadContentButton text='Add report'/></NavLink>
                            </div>
                        </div>
                    }

                </div>}
            </>
        }
    </Container>)
}

export default UserProfile;