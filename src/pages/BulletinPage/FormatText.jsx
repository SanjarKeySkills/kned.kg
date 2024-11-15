import React from "react";

const FormatText = ({ text }) => {
    return (
        <div>
            {text.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
            ))}
        </div>
    );
};

export default FormatText;
