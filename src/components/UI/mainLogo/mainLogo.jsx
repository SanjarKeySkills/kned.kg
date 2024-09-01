import React from "react";
import logo from "../../../assets/logoKnedMain.svg";

const mainLogo = () => {
    return (
        <a href="https://www.youtube.com/watch?v=AO4rVAs0t7g">
            <img src={logo} alt="kned" />
        </a>
    );
};

export default mainLogo;

// ----------- Перебор ------------------------------
// import styles from "./logo.module.scss";
// const mainLogo = (props) => {
//     const { size = "m", option = "content" } = props;
//     return (
//         <div
//             className={`${styles.content1} ${styles[option]} ${styles[size]}`}
//         />
//     );
// };

// export default mainLogo;
