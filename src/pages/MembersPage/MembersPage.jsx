import React from "react";
import MembersItem from "../../components/Widget/MembersBlock/MemberItem/memberItem.jsx";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
// import membersData from "./membersData.jsx";
// import Members from "../../components/Widget/MembersBlock/Members/members.jsx";

const MembersPage = () => {
    return (
        <>
            <HeroHeader />
            <MembersItem />
            {/* <Members membersData={membersData} /> */}
        </>
    );
};

export default MembersPage;
