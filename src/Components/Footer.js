import React from "react";
import './Style.css';

import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <p className="foot" onClick={() => navigate("/privacy")}>Privacy</p>

            <p className="foot" onClick={() => navigate("/termcond")}>Terms and conditions</p>
        </div>
    )
};

export default Footer;