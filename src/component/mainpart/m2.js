import React, { useState } from 'react';
import wave from "../../resources/image/wave.svg"
import design from "../../resources/image/design.svg"
import building from "../../resources/image/building.svg"
import trendy from "../../resources/image/trendy.svg"
import low from "../../resources/image/low-price.svg"
import quality from "../../resources/image/quality.svg"
import 'hover.css'

import style from './m2.module.css'

const M2 = () => {
    const data = [
        {pic:design,name:'design',title:"طراحی و مشاوره",text:' مشاوره در زمینه طراحی انواع سازه'},
        {pic:building,name:'building',title:"نظارت و اجرا",text:'اجرا و نظارت سازه های سبک و شنکین'},
        {pic:trendy,name:'trendy',title:"ترند و طرح های بروز",text:'استفاده از طرح ها مطرح بین الملی وبروز با تکنولوژی'},
        {pic:low,name:'quality',title:"بهترین متریال",text:'تهیه و استفاده از یهترین برندهای داخلی و خارجی'},
        {pic:quality,name:'low-price',title:"پایین ترین قیمت",text:'ما می توانیم پایین ترین قیمت بازار را برای خرید داشته باشیم'},
    ];

    return (
        <div className={style.main}>
            {
                data.map((item)=> <div key={item.name} className={`${style.item} hvr-underline-from-center`}>

                    <img className={style.icon} src={item.pic} />
                    <h4 className={style.title} >{item.title}</h4>
                    <p className={style.text} >{item.text}</p>
                </div>)
            }
        </div>
    );
};

export default M2;