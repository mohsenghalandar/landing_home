import React , {Component} from 'react';
import style from "./navbar.module.css";
import logo from "../resources/image/mamad-power.jpg";

const Navbar = () => {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>صفحه اصلی</li>
                    <li className={style.item}>نمونه کارها</li>
                    <li className={style.item}> رزومه</li>
                    <li className={style.item}> ارتباط با ما</li>
                </ul>
            </div>
            <div className={style.logocon} >
                <img className={style.logo} src={logo} alt="our band name" title="Hi,there 😍👌" />
            </div>
        </div>
    );
};

export default Navbar;