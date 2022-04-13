import React from 'react';
import style from "./style/footer.module.css"

const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.item}>
                <h3>ساختمان سازی</h3>
                <ul>
                    <li>طراحی واجرا</li>
                    <li>مشاوره فنی</li>
                    <li>مشاوره حقوقی</li>
                </ul>
            </div>
            <div className={style.item}>
                <h3>خدمات ما</h3>
                <ul>
                    <li>سرمایه گزاری</li>
                    <li>مشارکت در ساخت</li>
                    <li>نمنونه کارها</li>
                </ul>
            </div>            
            <div className={style.item} >
                <h3 className={style.hh}>درباره ما</h3>
                <ul>
                    <li>ارتباط مستقیم</li>
                    <li>سیاسیت کاری</li>
                    <li>هیت مدیره</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;