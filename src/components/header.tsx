import { Link } from "react-router-dom";
import Logo from "../assets/icon-port.png"
import { motion } from 'framer-motion';

export const Header=()=>{
    return(
        <header>
            
            <div>
                <img src={Logo} alt="" />
                <p>Carlos R.</p></div>
            <ul>
                <li>
                    <Link to="/react-port" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/react-port/sobre" className="link">Sobre</Link>
                </li>
                <li>
                    <Link to="/react-port/projeto" className="link">Projetos</Link>
                </li>
                <li>
                    <Link to="/react-port/contato" className="link">Contato</Link>
                </li>
            </ul>
        </header>
    )
}