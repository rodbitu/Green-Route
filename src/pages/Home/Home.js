import React from "react";
import { Link } from "react-router-dom";
import apresentacaoTema from "../../img/apresentacao_tema.png";
import iconColetor from "../../img/icon_coletor.png";
import iconAmbiente from "../../img/icon_ambiente.png";
import iconOperacional from "../../img/icon_operacional.png";
import logo_site from "../../img/logo_site.png";
import "../../css/main_style.css";
import "../../css/menu.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo_site} width="70px" alt="logo do site" />
          Green Route
        </div>
        <div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
            <div className="menu">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/map">Maps</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <section className="w-full pb-5">
        <div className="bg-teal-800 w-3/4 my-0 mx-auto p-3 rounded-md">
          <h1 className="text-4xl mt-6 font-bold pb-3 border-b-2 border-solid border-white">
            Navegando pelo Futuro: Inovação em Gestão de Resíduos
          </h1>
          <div className="flex mt-6">
            <p className="text-justify">
              A otimização de rotas para a coleta de resíduos recicláveis
              oferece benefícios significativos para os coletores, bem como para
              o meio ambiente e a economia.
              <br />
              <b>Coletores</b>: rotas otimizadas significam jornadas de trabalho
              mais eficientes e menos exaustivas. Com trajetos mais curtos e
              melhor planejados, os coletores passam menos tempo no trânsito,
              enfrentam menos congestionamentos e têm uma carga de trabalho mais
              equilibrada. <br />
              <b>Ambientalmente</b>: a otimização das rotas leva à redução das
              emissões de gases poluentes, já que os veículos percorrem
              distâncias menores e consomem menos combustível. <br />
              <b>Operacionalmente</b>: a implementação de tecnologias como
              Sistemas de Informação Geográfica (SIG), softwares de otimização
              de rotas e monitoramento em tempo real permite um planejamento
              mais eficaz.
            </p>
            <img
              className="w-72 h-72 ml-5 rounded-full"
              src={apresentacaoTema}
              alt="imagem tema"
            />
          </div>
        </div>
      </section>
      <section className="bg-white w-full">
        <h1 className="text-4xl text-[#008080] text-center pt-4 font-bold pb-3">
          Benefícios e Impactos da Otimização da Gestão de Resíduos
        </h1>
        <ul className="grid grid-cols-3 gap-5 p-10 text-center">
          <li className="text-[#008080] font-bold bg-slate-300 p-2 rounded-md">
            <img
              className="block w-20 mx-auto my-0"
              src={iconColetor}
              alt="icone de coletor"
            />
            Jornadas mais Eficientes Proporcionam Redução de Fadiga Física
          </li>
          <li className="text-[#008080] font-bold bg-slate-300 p-2 rounded-md">
            <img
              className="block w-20 mx-auto my-0"
              src={iconAmbiente}
              alt="icone de ambiente"
            />
            Melhor Qualidade do Ar
          </li>
          <li className="text-[#008080] font-bold bg-slate-300 p-2 rounded-md">
            <img
              className="block w-20 mx-auto my-0"
              src={iconOperacional}
              alt="icone de engrenagem"
            />
            Operações Realizadas de Forma Regular e Pontual
          </li>
        </ul>
      </section>
      <footer className="py-2.5 text-center border-t border-solid">
        <p className="my-1 mx-0">
          Autores: Diogo Dias Mello, Luciano Silva Alves Junior, Rodrigo Bitu de
          Moraes e Yan Matheus Pinheiro Cezario
        </p>
      </footer>
    </div>
  );
};

export default Home;
