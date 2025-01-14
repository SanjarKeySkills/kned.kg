import mockBulletines from "./mock";

const getBulletineById = (id) => {
    return mockBulletines.find((bulletine) => {
        return id === bulletine.id;
    });
};

const getBulletinePathById = (id) => {
    const foundedBulletine = getGalleryById(id);
    return foundedBulletine.path;
};

export { getBulletineById, getBulletinePathById };
