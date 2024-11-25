import LivroDoado from "../../assets/LivroDoado.png";
import "./LivrosDoados.css";

export default function LivrosDoados() {
    return (
        <section className="LivrosDoados">
            <h1 className="titulo">Livros Doados</h1>
            <section className="Borda">
            <img className="imagem" src={LivroDoado} alt="Imagem da capa do Livro O Protagonista" />
            <p>O protagonista <br />
            Susanne Andrade <br />
            Ficção</p>
            </section>
        </section>
    );
}
