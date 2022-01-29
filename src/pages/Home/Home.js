import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import Loader from "react-loader-spinner";
import s from './Home.module.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {userApi, commonApi} from "../../services";
import moment from "moment/moment";

toast.configure();

const Home = ({isLoggedIn}) => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState('uah');
    const [output, setOutput] = useState(0);
    const [dollars, setDollars] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login')
        }
    },[isLoggedIn]);

    useEffect(()=>{
        fetchUsers();
        return () => {
            setMounted(true);
        }
    },[])


    useEffect(()=>{
        if (dollars > 0){
            fetchMoney();
        }
    },[dollars])
    const fetchMoney = async () => {
        try {
            const money = await commonApi.convertMoney(from);
            const rate = money.usd[to];
            setOutput(Math.round(dollars * rate));
        }catch (e) {
            toast.error('Convert service does not respond', {
                position:'top-center'
            })
        }
    }
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await userApi.getAllUsers();
            const usd = await commonApi.getCashFlow();
            setDollars(Math.round(usd));
            setLineChartData([...response].map(el=>{
                return{
                    name:el.login,
                    data:[...el.money].map(pr=>{
                        return {
                            y:pr.count,
                            date: moment(pr.time).format('DD-MM-YYYY')
                        }
                    })
                }
            }))
            setData([...response].map(el=>{
                const arr = el.money.map(el=>el.count);
                const sum = arr.length > 0 ? arr.reduce(reducer): 0;
                return {
                   name:el.login,
                    y: sum
                }
            }))
            setLoading(false);
        }catch (e) {
            setLoading(false);
            toast.error(e.response.data.message, {
                position:'top-center'
            })
        }
    }

    return(
        <div>
            <div className={s.moneyWrapper}>
                <h2>Money USD:{dollars}</h2>
                <h2>Money UAN: {output}</h2>
            </div>
            {
                data.length > 0 && !loading && <PieChart data={data}/>
            }
            {
                data.length > 0 && !loading && <LineChart data={lineChartData}/>
            }
            {
                loading && <div className={s.loaderWrapper}>
                    <Loader type="Bars" color="#ff8614" height={200} width={200} />
                </div>
            }
        </div>
    )
}

export default Home;