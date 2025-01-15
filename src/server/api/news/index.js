import mockNews from "./mock";

const getNewsList = (ids) => {
    console.log(
        mockNews.filter((bulletine) => {
            return ids.includes(bulletine.id);
        })
    );

    return mockNews.filter((bulletine) => {
        return ids.includes(bulletine.id);
    });
};

export { getNewsList };
// потому что может быть несколько реализаций по какому списку
