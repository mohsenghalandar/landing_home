import React from 'react';
import style from "./style/main.module.css"
import M1 from "./mainpart/m1"
import M3 from "./mainpart/m3"
import M2 from "./mainpart/m2"
import M4 from "./mainpart/m4"
const Main = () => {
    return (
        <div className={style.main}>
            <M1 />
            <M2 />
            <M3 />
            <M4 />
        </div>
    );
};

export default Main;