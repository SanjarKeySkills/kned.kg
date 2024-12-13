import mockNews from "./mock";

const getNewsById = (id) => {
    return mockNews.find((news) => {
        return id === news.id;
    });
};

export { getNewsById };
