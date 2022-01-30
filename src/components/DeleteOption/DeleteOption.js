import React, {useState} from 'react';
import {CancelButton, UploadContentButton} from "../../Button";
import Loader from 'react-loader-spinner';
import s from './DeleteOption.module.css';

function DeleteOption({deleteFunc, close, id=undefined, message}) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true)
        if (id)
        {
            await deleteFunc(id)
        }else {
            await deleteFunc()
        }
        setLoading(false);

        close();
    }
    return(
        <div className={s.wrapper}>
            <p className={s.message}>
                {message}
            </p>
            <div className={s.buttons}>
                <CancelButton text='Cancel' onClick={close} disabled={loading}/>
                {
                    loading ? <div className={s.loaderWrapper}>
                        <Loader type="Circles" color="#ff8614" height={35} width={35} />
                    </div> : <UploadContentButton text='Confirm' onClick={handleClick} disabled={false}/>
                }
            </div>
        </div>
    )
}

export default DeleteOption;