import React from "react";
function MemberCard(props) {
    const classess = props.className;
    return <div className={classess}>{props.children}</div>;
}
export default MemberCard;
