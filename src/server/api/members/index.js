import mockMembers from "./mock";

const getMemberList = (ids) => {
    // console.log(
    //     mockMembers.filter((member) => {
    //         return ids.includes(member.id);
    //     })
    // );

    return mockMembers.filter((member) => {
        return ids.includes(member.id);
    });
};

export { getMemberList };
// потому что может быть несколько реализаций по какому списку
