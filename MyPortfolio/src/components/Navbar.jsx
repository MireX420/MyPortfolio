import React from "react";

export default function Navbar({ onScroll }) {
    return(
        <>
            <section className="navbar-container">
                <h2>MIREK</h2>
                <ul className="navbar-ul">
                    <li onClick={() => onScroll("section1")} style={{ cursor: "pointer" }}>ERFARING</li>
                    <li onClick={() => onScroll("section2")} style={{ cursor: "pointer" }}>PROSJEKTER</li>
                </ul>
            </section>
        </>
    )
}
