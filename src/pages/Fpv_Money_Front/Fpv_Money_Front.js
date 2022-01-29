import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Fpv_Money_Front = ({isLoggedIn}) => {
    const navigate = useNavigate();

    useEffect(()=>{
       if (!isLoggedIn){
           navigate('/login')
       } else {
           navigate('/')
       }
    },[isLoggedIn])
    return <div>

    </div>
}

export default Fpv_Money_Front;