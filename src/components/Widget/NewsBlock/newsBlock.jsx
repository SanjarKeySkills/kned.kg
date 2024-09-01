import React from "react";
import style from "./newsBlock.module.scss";
import Button from "../Button/Button.jsx";
import image from "../../../assets/imgNews.svg";

const newsBlock = () => {
    return (
        <div className={style.container}>
            <div className={style.newsWrapper}>
                <h2 className={style.newsTitle}>Статьи и новости</h2>
                <div className={style.newsLinkContainer}>
                    <div className={style.newsContent}>
                        <img
                            src={image}
                            className={style.imgNews}
                            alt="imgNews"
                        />
                        <p className={style.newsText}>
                            Размышления о корпоративном секретаре. Градислава
                            Ахметова, МА, MBA, к. э. н. Генеральный директор
                            Governance & Management Consulting. Казахстан.
                        </p>
                        <Button
                            size="s"
                            variant="outlined"
                            children="Читать дальше"
                        />
                    </div>
                    <div className={style.newsContent2}></div>
                    <div className={style.newsContent2}></div>
                </div>
            </div>
            <Button
                size="m"
                variant="mOutlined"
                children="ПЕРЕЙТИ К НОВОСТЯМ"
            />
        </div>
    );
};

export default newsBlock;
