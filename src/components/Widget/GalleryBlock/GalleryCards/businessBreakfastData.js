import { getGalleryList } from "../../../../server/api/galleries";
import { getGalleryPathById } from "../../../../server/api/galleries/id";

const businessBreakfastData = [
    // {
    //     id: "4",
    //     name: "Тема: SG отчетность как инструмент стратегического анализа компании",
    //     annotation:
    //         "Спикер: Ирина Иванова, эксперт по устойчивым инструментам финансирования и нефинансовой отчётности в Кыргызской Республике",
    //     calendar: "2 октября 2024 года",

    // },
    {
        id: "3",
        name: "Тема: ESG в структуре и функциях Совета директоров. Оценка готовности СД к ESG",
        annotation:
            "Спикер: Гульнара Арымкулова, Учредитель и руководитель консультационной компании FNT Consultants",
        calendar: "18 сентября 2024 года",
        image: getGalleryPathById(30),
        images: getGalleryList([30, 31, 32, 33, 34]),
    },
    {
        id: "2",
        name: "Тема: Интеграция аналитики и управления большими данными для улучшения бизнеса",
        annotation:
            "Спикер: Бешимкулов Чынгыз, генеральный директорв ОсОО Capstone Consulting",
        calendar: "12 апреля 2024 года",
        image: getGalleryPathById(36),
        images: getGalleryList([35, 36]),
    },
    {
        id: "1",
        name: "Тема: Итоги участия в Национальном форуме по корпоративному управлению в городе Астана",
        annotation:
            "Спикеры: Кубаныч Абдраимов действительный член Палаты, Аманат Молдокеева ассоциированный член Палаты",
        calendar: "2 февраля 2024 года",
        image: getGalleryPathById(24),
        images: getGalleryList([22, 23, 24, 25, 26, 27, 28, 29]),
    },
];

export default businessBreakfastData;
