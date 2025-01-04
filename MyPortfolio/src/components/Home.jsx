import React from "react";
import Footer from "./Footer"
import Navbar from "./Navbar"

import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"
import email  from "../assets/email.png"
import download from "../assets/download.png"
import smartcoding from "../assets/smartcoding.png"
import bluealien from "../assets/blueAlien.png"
import square from "../assets/square.png"


export default function Home() {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(
        <>
            <main id="section3" className="main-container">
                <Navbar onScroll={handleScroll}/>
                <section className="main-content">
                    <section className="content-left">
                    <h1>
                        Adrian Mirek
                    </h1>
                    <p>
                        Jeg er en lidenskapelig designer/utvikler med fokus på å skape brukervennlige og visuelt tiltalende løsninger. 
                        Her kan du utforske mitt arbeid og se hvordan jeg kombinerer kreativitet med teknologi for å realisere innovative prosjekter. 
                        Jeg håper du finner inspirasjon og ser potensialet for samarbeid!
                    </p>
                    <ul className="socials-ul">
                        <a href="https://www.instagram.com/adrianmirek.03/"><li><img src={insta} alt="Instagram link" /></li></a>
                        <a href="https://www.facebook.com/profile.php?id=100011207858650"><li><img src={facebook} alt="Facebook link" /></li></a>
                        <a href="https://github.com/MireX420"><li><img src={github} alt="Github link" /></li></a>
                    </ul>
                    <section className="contact">
                       <a href="mailto:adrian_mirek@yahoo.no">Ta kontakt <img src={email} alt="Email link" /></a>
                        <a href="../assets/CV.docx"  download="CV.docx" >Last ned CV <img src={download} alt="CV download button" /></a>
                    </section>
                    </section>
                    <section className="content-right">
                    </section>
                </section>
                <section className="skills"> 
                    <h2 id="section1">ERFARING</h2>
                    <section className="skills-list">
                        <h3>html</h3>
                        <h3>css</h3>
                        <h3>javascript</h3>
                        <h3>react.js</h3>
                        <h3>figma</h3>
                        <h3>github</h3>
                    </section> 
                </section>
                <section className="projects">
                    <h2 id="section2">PROSJEKTER</h2>
                    <section className="projects-list">
                        <article>
                            <a href="https://mirex420.github.io/adrianmi.github.io/index.html" alt="Link to SmartCoding website" className="project-link">
                                <img src={smartcoding} alt="Smartcoding website" />
                                <section className="project-desc">
                                    <h2>SmartCoding</h2>
                                    <p>Nettside for webutviklings emnet</p>
                                </section>
                            </a>
                        </article>
                        <article>
                            <a href="" className="project-link">
                                <img src={smartcoding} alt="Smartcoding website" />
                                <section className="project-desc">
                                    <h2>Underveis...</h2>
                                    <p>Tekst her</p>
                                </section>
                            </a>
                        </article>
                        <article>
                        <a href="" className="project-link">
                            <img src={smartcoding} alt="Smartcoding website" />
                            <section className="project-desc">
                                <h2>Holder på!</h2>
                                <p>Tekst her</p>
                            </section>
                            </a>
                        </article>
                        <article>
                        <a href="" className="project-link">
                            <img src={smartcoding} alt="Smartcoding website" />
                            <section className="project-desc">
                                <h2>Snart ferdig!</h2>
                                <p>Tekst her</p>
                            </section>
                            </a>
                        </article>
                    </section>
                </section>
                <Footer onScroll={handleScroll}/>
            </main>  
            <div className="spinning-icons">
            <img src={square} alt="Square 1" class="spinning-square" />
            <img src={square} alt="Square 1" class="spinning-square" />
                <img src={bluealien} alt="Character 1" class="spinning-icon" />
                <img src={bluealien} alt="Character 2" class="spinning-icon" />
                <img src={bluealien}alt="Character 3" class="spinning-icon" />
                <img src={bluealien} alt="Character 3" class="spinning-icon" />
                <img src={bluealien} alt="Character 3" class="spinning-icon" />
            </div> 
        </>
    )
}