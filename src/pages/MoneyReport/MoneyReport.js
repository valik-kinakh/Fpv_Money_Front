import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Container from "../../components/Container";
import s from './MoneyReport.module.css';
import {useEffect, useState} from "react";
import {UploadContentButton} from "../../Button";
import {useNavigate} from "react-router-dom";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {userApi} from "../../services";
import moment from "moment/moment";
import Loader from "react-loader-spinner";

const MoneyReport = ({isLoggedIn, id}) => {
    const navigate = useNavigate()

    const [value, setValue] = useState(new Date());
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login');
        }
    },[])

    const handleSave = async () => {
        try {
            setLoading(true)
            const response = await userApi.addUserCash({
                time: moment(value).toISOString(),
                count:Number(count)
            },id);
            setLoading(false)
            toast.success(response.message,{
                position:'top-center'
            })
        }catch (e) {
            setLoading(false)
            toast.error(e.response.data.message, {
                position:'top-center'
            })
        }
    }

    return (
        <Container>
            <div className={s.container}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <h1 className={s.title}>Money report</h1>
            <label htmlFor="login" className={s.label}>
                Report
            </label>
                <DatePicker
                    disableFuture
                    label="Date"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
        </LocalizationProvider>
                <div style={{marginTop:'30px'}}>
                    <label htmlFor='count'>Money</label>
                </div>
                <input type='number' value={count} onChange={e=>setCount(e.target.value)} className={s.changeNameInput}/>

                {
                    loading ? <div className={s.loaderWrapper}>
                        <Loader type="Circles" color="#ff8614" height={40} width={40} />
                    </div> : <div style={{marginTop:'30px'}}>
                        <UploadContentButton text='Add report' disabled={!count || !value || count < 0} onClick={handleSave}/>
                    </div>
                }
            </div>
        </Container>
    );
}

export default MoneyReport;
