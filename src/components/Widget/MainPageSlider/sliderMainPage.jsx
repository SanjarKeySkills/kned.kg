import React from "react";
import style from "./sliderMainPage.module.scss";
import image1 from "../../../assets/grantTorthon.svg";
import image2 from "../../../assets/ibc.svg";
import image3 from "../../../assets/ifc.svg";
import Button from "../../Widget/Button/Button.jsx";

const sliderMainPage = () => {
    return (
        <div className={style.container}>
            <div className={style.sliderTitle}>
                <h2 className={style.sliderTitle}>ПАРТНЕРЫ ПАЛАТЫ</h2>
            </div>
            <div className={style.sliderContent}>
                <Button size="arrowLeftSlider" variant="arrowOutlined" />
                <div className={style.imgSlider}>
                    <img src={image1} alt="sliderImg1" />
                    <img src={image2} alt="sliderImg2" />
                    <img src={image3} alt="sliderImg3" />
                </div>
                <Button size="arrowRightSlider" variant="arrowOutlined" />
            </div>
        </div>
    );
};

export default sliderMainPage;
