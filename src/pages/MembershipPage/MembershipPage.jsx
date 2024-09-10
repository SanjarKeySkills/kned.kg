import React from "react";
import Members from "../../components/Widget/MembersBlock/Members/index.jsx";

const MembershipPage = () => {
    const membersData = [
        {
            name: "Арзыбек Кожошев",
            annotation:
                "Член Коллегии (министр) по энергетике и инфраструктуре Евразийской экономической комиссии",
            image: require("../../assets/kozhoshev.png"),
            id: 1,
        },
        {
            name: "Толкунбек Абдыгулов",
            annotation: "Консультант по стратегическому развитию",
            image: require("../../assets/abdygulov.png"),
            id: 2,
        },
        {
            name: "Улан Сарбанов",
            annotation:
                "Председатель Правления Венгерско-Кыргызского Фонда развития (с мая 2023 г. - по настоящее время)",
            image: require("../../assets/ulansarbanov.png"),
            id: 3,
        },
    ];

    return (
        <div>
            <Members membersData={membersData} />
        </div>
        /* <h1>ЧЛЕНЫ ПАЛАТЫ</h1>
            <p>
                Используя лучшие практики корпоративного управления, члены
                Палаты повышают эффективность деятельности предприятий, улучшают
                коммерческие, финансовые и производственные показатели компаний,
                способствуют росту их стоимости в целях привлечения инвесторов,
                а также защиты прав и интересов акционеров.
            </p>
            <br />
            <h1>ПОЧЕТНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1> */
        /* <h1>ДЕЙСТВИТЕЛЬНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1>
            <h1>АССОЦИАТИВНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1> */
    );
};

export default MembershipPage;
