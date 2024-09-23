import React, { useState } from "react";
import styles from "./criteriaMembers.module.scss";

const AccordionItem = ({ title, text, isOpen, onToggle }) => {
    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionTitle} onClick={onToggle}>
                {title}
                <span className={styles.arrowAccordeon}>
                    {isOpen ? "➖" : "➕"}
                </span>
            </div>
            {isOpen &&
                text.map((item, index) => (
                    <div key={index} className={styles.accordionContent}>
                        {item}
                    </div>
                ))}
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const items = [
        {
            title: "ДЛЯ ДЕЙСТВИТЕЛЬНЫХ ЧЛЕНОВ ПАЛАТЫ:",
            text: [
                "Наличие высшего образования в области финансов/ экономики/менеджмента/ бизнес-администрирование (мба) / права, либо иное высшее образование;",
                "Опыт предпринимательской деятельности более 5 лет;",
                "Опыт работы в советах директоров, наблюдательных советах или на руководящих позициях национальных или международных компаний не менее 3 лет;",
                "Наличие положительной профессиональной репутации.",
            ],
        },
        {
            title: " ДЛЯ АССОЦИИРОВАННЫХ ЧЛЕНОВ ПАЛАТЫ:",
            text: [
                "Наличие высшего образования в области финансов/ экономики/ менеджмента/ права либо высшее техническое образование;",
                "Опыт работы на руководящих позициях среднего звена (менеджер/начальник отдела/дирекция/управление/департамента национальных или международных компаний) не менее 2 лет;",
                "Наличие положительной профессиональной репутации;",
                "Желание расширить свои знания и навыки в области корпоративного управления в кыргызской республике.",
                "❗️Ассоциированный член палаты имеет право после трехлетнего членства в палате подать заявку совету палаты с просьбой о пересмотре статуса члена палаты.",
            ],
        },
        {
            title: "ДЛЯ ПОЧЕТНЫХ ЧЛЕНОВ ПАЛАТЫ:",
            text: [
                "Присваивается за существенный вклад в развитие корпоративного управления.",
            ],
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordionWrapper}>
            <div className={styles.accordion}>
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        text={item.text}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
