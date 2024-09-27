import React, { Children } from "react";
import './styles.css'

interface Props {
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <button className="custom-button">{children}</button>
    )
}

export default Button;
