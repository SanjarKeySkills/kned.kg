import React from "react";
import style from "./infoTableBlock.module.scss";

const infoTableBlock = () => {
    return (
        <div className={style.container}>
            <div className={style.infoList}>
                <div>
                    <h3 className={style.headList}>ИНДУСТРИИ</h3>
                    <div className={style.industryBlock}>
                        <ul>
                            <li>Финансовый сектор</li>
                            <li>Транспорт и логистика</li>
                            <li>Юриспруденция</li>
                            <li>СМИ и медиа</li>
                            <li>Стротельство</li>
                            <li>IT сектор</li>
                            <li>Здравоохранение</li>
                            <li>Строительство</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={style.headList}>КОМПЕТЕНЦИИ</h3>
                    <div className={style.competenceBlock}>
                        <ul>
                            <li>Корпоративное управление</li>
                            <li>Финансы и инвестиции</li>
                            <li>Продажи</li>
                            <li>Аудит</li>
                            <li>Коммуникации и PR</li>
                            <li>HR</li>
                            <li>Бухгалтерский учет</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className={style.headList}>
                        ВЫПУСКНИКИ СЕРТИФИКАЦИОННЫХ ПРОГРАММ
                    </h3>
                    <div className={style.alumnyBlock}>
                        <ul>
                            <li>
                                Программа "Независимый директор. Успешная
                                карьера."
                            </li>
                            <li>
                                Сертификационный курс программы ПНД и IFC
                                "Корпоративный директор."
                            </li>
                            <li>
                                Сертификационный курс программы ПНД и IFC
                                "Корпоративный секретарь."
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default infoTableBlock;
