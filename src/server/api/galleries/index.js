import mockGalleries from "./mock";
const getGalleryList = (ids) => {
    return mockGalleries.filter((gallery) => {
        return ids.includes(gallery.id);
    });
};
export { getGalleryList };
// потому что может быть несколько реализаций по какому списку
