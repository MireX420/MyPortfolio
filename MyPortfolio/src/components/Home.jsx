import Footer from "./Footer"
import Navbar from "./Navbar"

import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"
import email  from "../assets/email.png"
import download from "../assets/download.png"
import smartcoding from "../assets/smartcoding.png"
import bluealien from "../assets/blueAlien.png"

export default function Home() {
    return(
        <>
            <main className="main-container">
                <Navbar />
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
                        <li><img src={insta} alt="Instagram link" /></li>
                        <li><img src={facebook} alt="Facebook link" /></li>
                        <li><img src={github} alt="Github link" /></li>
                    </ul>
                    <section className="contact">
                        <h3>Ta kontakt <img src={email} alt="Email link" /></h3>
                        <h3>Last ned CV <img src={download} alt="CV download button" /></h3>
                    </section>
                    </section>
                    <section className="content-right">
                    </section>
                </section>
                <section className="skills"> 
                    <h2>ERFARING</h2>
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
                    <h2>PROSJEKTER</h2>
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
                <Footer />
            </main>  
            <div className="spinning-icons">
                <img src={bluealien} alt="Character 1" class="spinning-icon" />
                <img src={bluealien} alt="Character 2" class="spinning-icon" />
                <img src={bluealien}alt="Character 3" class="spinning-icon" />
                <img src={bluealien} alt="Character 3" class="spinning-icon" />
                <img src={bluealien} alt="Character 3" class="spinning-icon" />
            </div> 
        </>
    )
}