import React from "react";

import email  from "../assets/email.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"

export default function Footer({ onScroll }) {
    return(
        <>
            <main className="footer-container">
                <h2 onClick={() => onScroll("section3")} style={{ cursor: "pointer" }}>MIREK</h2>
                <section className="socials-footer">
                    <a href="https://www.instagram.com/adrianmirek.03/" className="footer-link"><img src={insta} alt="Instagram link" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100011207858650" className="footer-link"><img src={facebook} alt="Facebook link" /></a>
                    <a href="https://github.com/MireX420" className="footer-link"><img src={github} alt="Github link" /></a>
                    <a href="mailto:adrian_mirek@yahoo.no" className="footer-link"><img src={email} alt="Email link" /></a>
                </section>
            </main>
        </>
    )
}