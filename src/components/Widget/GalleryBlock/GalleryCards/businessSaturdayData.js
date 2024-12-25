import { getGalleryList } from "../../../../server/api/galleries";
import { getGalleryPathById } from "../../../../server/api/galleries/id";

const businessSaturdayData = [
    {
        id: "3",
        name: "Деловая суббота с Алексеем Волонец",
        annotation:
            "Тема: Управление конфликтами и спорами в советах директоров",
        calendar: "28 сентября 2024 года",
        image: getGalleryPathById(5),
        images: getGalleryList([1, 2, 3, 4, 5, 7, 9, 10, 11, 12]),
    },
    {
        id: "2",
        name: "Деловая суббота с Градиславой Ахметовой",
        annotation:
            "Тема: Формирование и развитие института корпоративных секретарей: международная практика",
        calendar: "27 апреля 2024 года",
        image: getGalleryPathById(13),
        images: getGalleryList([13, 14, 15, 16, 17]),
    },
    {
        id: "1",
        name: "Деловая суббота с Жардемом Курмангазиевым",
        annotation: "Тема: Корпоративная культура и корпоративное управление",
        calendar: "27 января 2024 года",
        image: getGalleryPathById(19),
        images: getGalleryList([18, 19, 20, 21]),
    },
];

export default businessSaturdayData;
