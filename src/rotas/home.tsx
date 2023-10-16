import { Link } from "react-router-dom";
import Remote from "../assets/remote.png";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import { Animacao } from "../components/animacao";
export const Home = () => {
  return (
     
    <section className="home">
      <div>
      <Animacao>  
        <p>Olá,</p>
        <h1>
          Eu sou um <br /> Desenvolvedor web
        </h1>
        <p>Bem-vindo ao  meu portfólio.</p>
        <p className="homeMore">
          {" "}
          <Link to="/react-port/sobre" className="homeSobre">
          mais sobre mim
          </Link>{" "}
        </p>
        <ul>
          <li>
            <a href="https://github.com/car-lo-s" target="_blank">
              <img src={Github} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carlos-renato-54252819b/" target="_blank">
              <img src={Linkedin} alt="" />
            </a>
          </li>
        </ul>
        </Animacao>
      </div>
      <div className="homeImg">
        <img src={Remote} alt="" />
      </div>
    </section>
    
  );
};
