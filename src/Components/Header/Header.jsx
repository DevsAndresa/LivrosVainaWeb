import s from"./header.module.scss";
import logoLivro from "../../assets/logoLivro.png";
import search from "../../assets/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivroDoado from "../../assets/LivroDoado.png";
import LivrosDoados from "../../pages/LivrosDoados/LivrosDoados";
import Inicio from "../../pages/Inicio/Inicio";
import QueroDoar from "../../pages/Quero Doar/QueroDoar";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.LogoLivro}>
          <img src={logoLivro} alt="Ilustração de livro aberto com capa aberta e páginas em branco" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.Navegacao}>
          <ul>
            <li><Link to="/">Início</Link></li>  {/* A rota inicial é "/" */}
            <li><Link to="/livros-doados">Livros Doados</Link></li>  {/* Rota para livros doados */}
            <li><Link to="/quero-doar">Quero Doar</Link></li>  {/* Rota para querer doar */}
          </ul>
        </nav>
        <section className={s.campoPesquisa}>
          <input type="search" placeholder="O que você procura?" />
          <button type="submit">
          <img src={search} alt="Icone de lupa branca" />
          </button>
        </section>

      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros-doados" element={<LivrosDoados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
