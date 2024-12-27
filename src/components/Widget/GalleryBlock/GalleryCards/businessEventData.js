import { getGalleryList } from "../../../../server/api/galleries";
import { getGalleryPathById } from "../../../../server/api/galleries/id";

const eventData = [
    {
        id: "5",
        name: "Тренинг для тренеров ПНД КР по программе IFC Корпоративный секретарь",
        annotation:
            "6 сентября 2024 года прошел второй этап тренингов по корпоративному управлению для тренеров ПНД КР по курсу IFC Корпоративный секретарь",
        calendar: "6 сентября 2024 года",
        image: getGalleryPathById(42),
        images: getGalleryList([42, 43, 44, 45, 46]),
    },
    {
        id: "4",
        name: "Выпускной слушателей первой сертификационной программы по КУ Корпоративный директор",
        annotation:
            "19 июля 2024 года прошел выпускной слушателей первой сертификационной программы по КУ Корпоративный директор",
        calendar: "19 июля 2024 года",
        image: getGalleryPathById(47),
        images: getGalleryList([47, 48, 49, 50, 51, 52]),
    },
    {
        id: "3",
        name: "Двух дневный ToT тренинг для тренеров ПНД КР по программе IFC",
        annotation:
            "21 мая 2024 года прошел двух дневный ToT тренинг для тренеров ПНД КР по программе IFC",
        calendar: "21 мая 2024 года",
        image: getGalleryPathById(59),
        images: getGalleryList([59, 60, 61, 62, 63, 64, 65, 66, 67, 68]),
    },
    {
        id: "2",
        name: "Тренинг по Программе: Независимый директор. Успешная карьера",
        annotation:
            "19 апреля 2024 года был проведен четвертый тренинг по программе Независимый директор. Успешная карьера",
        calendar: "19 апреля 2024 года",
        image: getGalleryPathById(69),
        images: getGalleryList([69, 70, 71, 72, 73, 74]),
    },
    {
        id: "1",
        name: "Встреча участников программы ТоТ от Палаты независимых директоров Кыргызской Республики с IFC",
        annotation:
            "4 марта 2024 года прошла встреча членов от ПНД КР участвующих в программе ТоТ с IFC",
        calendar: "4 марта 2024 года",
        image: getGalleryPathById(54),
        images: getGalleryList([54, 55, 56, 57, 58]),
    },
];
export default eventData;
