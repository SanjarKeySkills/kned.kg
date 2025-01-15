import mockBulletines from "./mock";

const getBulletineList = (ids) => {
    console.log(
        mockBulletines.filter((bulletine) => {
            return ids.includes(bulletine.id);
        })
    );

    return mockBulletines.filter((bulletine) => {
        return ids.includes(bulletine.id);
    });
};

export { getBulletineList };
// потому что может быть несколько реализаций по какому списку
