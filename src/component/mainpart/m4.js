import React,{useEffect, useState} from 'react';
import style from "./m4.module.css"
import customer from "../../resources/image/customer.svg"
import inbuilding from "../../resources/image/inbuilding.svg"
import staff from "../../resources/image/staff.svg"
import finish from "../../resources/image/finish.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CountUp from 'react-countup';
import handleViewport from 'react-in-viewport';

         


const M4 = () => {
    
    useEffect(()=>{
        AOS.init();

    },[])
    const [dd,setDd] = useState([
        {pic:customer,title:'مشتریان ما',num:1500},
        {pic:inbuilding,title:'پروژه های در دست اجرا',num:1750},
        {pic:finish,title:'پروژه های پایان یافته',num:1200},
        {pic:staff,title:'متخصصین مل',num:1420},
    ])

    return (
        <div className={style.main} data-aos="fade-down" data-aos-delay="550">
            {
                dd.map((item)=> 
                    <div className={style.container} key={item.title}>
                        <img src={item.pic} className={style.pic} />
                        <p className={style.title}>{item.title}</p>
                        <CountUp  end={item.num}  />    
                    </div>
                )
            }
        </div>
    );
};

export default M4;