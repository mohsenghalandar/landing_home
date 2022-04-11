import React , {Component, useState} from 'react';
import style from "./style/navbar.module.css";
import logo from "../resources/image/mamad-power.jpg";
import { BiUserCircle } from 'react-icons/bi';
import Menu from './menu';

const Navbar = () => {
    const [menu,setMenu] = useState(false)
    return (
        <div className={style.header}>
            <h2 className={style.symbol} >نام شرکت</h2>
            <div className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>صفحه اصلی</li>
                    <li className={style.item} onClick={()=>setMenu(prevCheck => !prevCheck)} >مقالات</li>
                    <li className={style.item}> درباره ما</li>
                    <li className={style.item}> ارتباط با ما</li>
                </ul>
            </div>
            <div className={style.logocon} >
                <BiUserCircle className={style.logo} src={logo} alt="our band name" title="Hi,there 😍👌">ورود</BiUserCircle>
                <p className={style.login}>ورود</p>
            </div>
            {
                menu && <Menu />
            }
        </div>
    );
};

export default Navbar;