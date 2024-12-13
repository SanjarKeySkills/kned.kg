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
        image: require("../../../../assets/businessSaturdayData/bs_270424/hall_gradislav2.png"),
        images: [
            {
                url: require("../../../../assets/businessSaturdayData/bs_270424/hall_gradislav2.png"),
                title: "img1",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270424/hall_gradislav.png"),
                title: "img2",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270424/hall_gradislav3.png"),
                title: "img3",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270424/hall_gradislav4.png"),
                title: "img4",
            },
        ],
    },
    {
        id: "1",
        name: "Деловая суббота с Жардемом Курмангазиевым",
        annotation: "Тема: Корпоративная культура и корпоративное управление",
        calendar: "27 января 2024 года",
        image: require("../../../../assets/businessSaturdayData/bs_270124/bs_zhardem_2.png"),
        images: [
            {
                url: require("../../../../assets/businessSaturdayData/bs_270124/bs_zhardem_2.png"),
                title: "img1",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270124/bs_zhardem_1.png"),
                title: "img2",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270124/bs_zhardem_3.png"),
                title: "img3",
            },
            {
                url: require("../../../../assets/businessSaturdayData/bs_270124/bs_zhardem_4.png"),
                title: "img4",
            },
        ],
    },
];

export default businessSaturdayData;
