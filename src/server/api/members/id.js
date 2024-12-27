import mockGalleries from "./mock";

const getGalleryById = (id) => {
    return mockGalleries.find((gallery) => {
        return id === gallery.id;
    });
};

const getGalleryPathById = (id) => {
    const foundedGallery = getGalleryById(id);
    return foundedGallery.path;
};

export { getGalleryById, getGalleryPathById };
