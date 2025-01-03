import email  from "../assets/email.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"

export default function Footer() {
    return(
        <>
            <main className="footer-container">
                <h2>MIREK</h2>
                <section className="socials-footer">
                    <img src={insta} alt="Instagram link" />
                    <img src={facebook} alt="Facebook link" />
                    <img src={github} alt="Github link" />
                    <img src={email} alt="Email link" />
                </section>
            </main>
        </>
    )
}