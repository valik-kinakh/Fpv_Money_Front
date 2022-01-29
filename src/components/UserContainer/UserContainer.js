import s from './UserContainer.module.css';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";
import moment from "moment/moment";

toast.configure();

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const UserContainer = ({login, money}) => {
    const arr = money.map(el=>el.count);
    const [sum, setSum] =useState(arr.length > 0 ? arr.reduce(reducer) : 0)

    const onSelectChange = (e) => {
        setSum(e.target.value);
    }
    return (<>
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div>{login}</div>
            </div>
            <div className={s.innerContainer}>
                {sum}
            </div>
            <div className={s.innerContainer}>
               <Select className={s.modalSelect} value={sum || ''} onChange={onSelectChange}>
                   <MenuItem key={moment().toISOString()} value={arr.length > 0 ? arr.reduce(reducer) : 0}>
                       All
                   </MenuItem>
                   {
                       money.map(el=>{
                           return <MenuItem key={el.time} value={el.count}>
                               {moment(el.time).format('DD MMMM YYYY')}
                           </MenuItem>
                       })
                   }
               </Select>
            </div>
        </div>
    </>)
}

export default UserContainer;