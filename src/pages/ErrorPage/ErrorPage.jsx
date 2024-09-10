import React from "react";
import errorImage from "../../assets/404.png";

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImage} alt="errorImage" />
        </div>
    );
};

export default ErrorPage;
