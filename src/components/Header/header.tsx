import "./header.scss"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        <section className="header">
            <h1 className="header_title">BMR CALCULATOR</h1>

            <GiHamburgerMenu size={35} className="hamburger"/>
            <div className="navigation">
                <a href="">Contact</a>
                <a href="">Help</a>
            </div>
        </section>
    )
}