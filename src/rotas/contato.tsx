import { Link } from "react-router-dom";
import { Animacao } from "../components/animacao";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Email from "../assets/envelope.svg";
import Whatsapp from "../assets/whatsapp.svg";
export const Contato = () => {
  return (
    <div>
      <Animacao>
        <section className="contato">
          <h2>Acesse</h2>
          <div>
            <a href="https://github.com/car-lo-s" target="_blank">
              <p>
                {" "}
                <img src={Github} alt="" /> Github
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/carlos-renato-54252819b/"
              target="_blank"
            >
              <p>
                {" "}
                <img src={Linkedin} alt="" /> LinkedIn
              </p>
            </a>
          </div>
          <div>
            <a href="mailto:carlosrenato-24@hotmail.com" target="_blank">
              <p>
                {" "}
                <img src={Email} alt="" /> E-mail
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5527999451049"
              target="_blank"
            >
              <p>
                {" "}
                <img src={Whatsapp} alt="" /> Whatsapp
              </p>
            </a>
          </div>
        </section>
      </Animacao>
      <footer>Carlos R.</footer>
    </div>
  );
};
