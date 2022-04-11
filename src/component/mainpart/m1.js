import React from 'react';
import style from "./m1.module.css"
import m1 from "../../resources/image/m1.jpg"

const M1 = () => {
    return (
        <div className={style.main} >
            <div className={style.picture}>
                <img src={m1} />
            </div>
            <div className={style.text}>
                <h2 className={style.title}>بهترین طراحی ممکن</h2>
                <p className={style.pp}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                 صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها 
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                 که لازم است و برای شرایط فعلی تکنولوژی مورد
                 نیاز و کاربردهای متنوع با هدف بهبود 
                ابزارهای کاربردی می باشد. 
                </p>
            </div>
        </div>
    );
};

export default M1;