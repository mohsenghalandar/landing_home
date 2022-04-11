import React from 'react';
import style from "./style/main.module.css"
import M1 from "./mainpart/m1"
import M2 from "./mainpart/m2"
const Main = () => {
    return (
        <div className={style.main}>
            <M1 />
            <M2 />
        </div>
    );
};

export default Main;