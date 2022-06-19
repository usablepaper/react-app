import React from "react";
// import styled from "styled-components";
import "../../styles/css/button.css";

function Button(title, onClick) {
    return <Button onClick={onClick}>{title || "button"}</Button>;
}

export default Button;
