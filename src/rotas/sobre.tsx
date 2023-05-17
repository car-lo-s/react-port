import { Link } from "react-router-dom";
import css from "../assets/css.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import php from "../assets/php.png"
import mysql from "../assets/mysql.png"
import react from "../assets/iconreact.svg"
import { Animacao } from "../components/animacao";
import { render } from "react-dom";
import { motion } from "framer-motion";
export const Sobre = () => {
  return (
    <Animacao>
    <section className="sobre">
      <h1>Carlos Renato G. Filho</h1>
      <p>
        Olá, meu nome é Carlos Renato, estudante do curso de engenharia da
        computação na Faesa, sou um desenvolvedor web iniciante. Tenho como
        objetivo ingressar na area de desenvolvimento e se manter sempre
        atualizado no mundo da tecnologia. Atualmente faço estágio na área de
        suporte e estudo nas horas vagas.
      </p>
      <h1>Conhecimento</h1>
      <div>
        <motion.img src={html} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <motion.img src={css} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <motion.img src={js} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <motion.img src={react} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <motion.img src={php} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <motion.img src={mysql} alt="" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div>
    </section>
    </Animacao>
  );
};
