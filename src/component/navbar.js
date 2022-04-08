import React , {Component} from 'react';
import style from "./navbar.module.css";
import logo from "../resources/image/mamad-power.jpg";
import { BiUserCircle } from 'react-icons/bi';


const Navbar = () => {
    return (
        <div className={style.header}>
            <h2 className={style.symbol} >نام شرکت</h2>
            <div className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>صفحه اصلی</li>
                    <li className={style.item}>مقالات</li>
                    <li className={style.item}> درباره ما</li>
                    <li className={style.item}> ارتباط با ما</li>
                </ul>
            </div>
            <div className={style.logocon} >
                <BiUserCircle className={style.logo} src={logo} alt="our band name" title="Hi,there 😍👌">ورود</BiUserCircle>
                <p className={style.login}>ورود</p>
            </div>
        </div>
    );
};

export default Navbar;