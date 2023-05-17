import { Link } from "react-router-dom";
import { Animacao } from "../components/animacao";
import cinema from "../assets/cinema.png";
import dici from "../assets/dici.png";
import livro from "../assets/livro.png";
import idade from "../assets/idade.png";
import cep from "../assets/cep.png";
import lista from "../assets/lista.png";
import Github from "../assets/github.svg";
import arrow from "../assets/arrow.svg";

export const Projeto = () => {
  return (
    <Animacao>
      <section className="projeto">
        <h1>Meus projetos</h1>
        <div className="projetoCard">
          <div className="card">
            <img src={dici} alt="" />
            <div>
              <h2>Dici</h2>
              <p>
                Este projeto tem como objetivo ser um dicionário online, criado
                com o intuito de praticar o uso de API e de simular um efeito
                "dark" no site.
              </p>
              <p>TS | ReactJS | Dicio API | </p>
              <span className="cardLink">
                <a
                  href="https://github.com/car-lo-s/react-dicionario"
                  target="_blank"
                >
                  <img src={Github} alt="" />
                </a>
                <a
                  href="https://car-lo-s.github.io/react-dicionario/"
                  target="_blank"
                >
                  <img src={arrow} alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={livro} alt="" />
            <div>
              <h2>Livros</h2>
              <p>
                Projeto feito com objetivo de consultar publicações disponíveis
                pelo IBGE.{" "}
              </p>
              <p>TS | ReactJS | API Publicações | </p>
              <span className="cardLink">
                <a
                  href="https://github.com/car-lo-s/react-livro"
                  target="_blank"
                >
                  <img src={Github} alt="" />
                </a>
                <a
                  href="https://car-lo-s.github.io/react-livro/"
                  target="_blank"
                >
                  <img src={arrow} alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={cinema} alt="" />
            <div>
              <h2>Cinema-Cinema</h2>
              <p>
                Este projeto é inspirado em portais de notícias sobre filmes,
                séries e desenhos, e foi criado com o objetivo de reunir
                informações sobre esses conteúdos.
              </p>
              <p>HTML | CSS | JS | PHP | MySQL | </p>
              <span className="cardLink">
                <a
                  href="https://github.com/car-lo-s/Cinema-cinema"
                  target="_blank"
                >
                  <img src={Github} alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={lista} alt="" />
            <div>
              <h2>Lista de Tarefas</h2>
              <p>
                Este projeto foi criado com o objetivo de oferecer aos usuários
                uma lista de tarefas com um custo atrelado a cada uma delas.{" "}
              </p>
              <p>HTML | CSS | JS | PHP | MySQL |</p>
              <span className="cardLink">
                <a
                  href="https://github.com/car-lo-s/teste-tarefa"
                  target="_blank"
                >
                  <img src={Github} alt="" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Animacao>
  );
};
