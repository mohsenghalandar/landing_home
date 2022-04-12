import React, { useEffect } from 'react';
import style from './m3.module.css'
import build1 from "../../resources/image/build1.png"
import build2 from "../../resources/image/build2.png"
import build3 from "../../resources/image/build3.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const M3 = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className={style.main}>
            <div className={`${style.container}`} data-aos="fade-right" data-aos-delay="250">
                <img src={build1} />
                <div className={style.tt}>
                    <h2>اجرا و نظارت</h2>
                    <p>بررسی فاز ب فاز مطابق نقشه</p>
                    <p>رعایت ضوابط حقوقی و قانونی</p>
                    <p>مشاهده مراحل اجرا بصورت لایو</p>
                </div>
            </div>
            <div className={`${style.container}`} data-aos="fade-left" data-aos-delay="1050">
                <img src={build2} />
                <div className={style.tt}>
                    <h2>طراحی و برنامه ریزی</h2>
                    <p style={{color:"#0553ac"}}> طراحی و بازبینی دقیق قبل از اجرا</p>
                    <p style={{color:"#0553ac"}}>متره و برآورد پروژه</p>
                    <p style={{color:"#0553ac"}}>مشورت وبررسی طرح نهایی با کارفرما</p>
                </div>
            </div>
            <div className={`${style.container}`} data-aos="zoom-in-right" data-aos-delay="1000">
                <img src={build3} />
                <div className={style.tt}>
                    <h2>اجرای گروهی و دقیق</h2>
                    <p style={{color:"#0553ac"}}>استافده از نیروهای متخصص</p>
                    <p style={{color:"#0553ac"}}>سرعت و دقت بالا در انجام امور</p>
                    <p style={{color:"#0553ac"}}>استفاده از متریال با کیفیت</p>
                </div>
            </div>
        </div>
    );
};

export default M3;