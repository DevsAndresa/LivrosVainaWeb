import LivrosNasmaos from "../../assets/LivrosNasmaos.png";
import community from "../../assets/community.png";
import Livroaberto from "../../assets/Livroaberto.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

import "./Inicio.css";

export default function Inicio() {
    return (
        <main>
            <section className="inicio-section">
                <img src={LivrosNasmaos} alt="Mãos segurando Livro" className="livro-imagem" />
                <p className="texto-sobre-imagem">VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
            </section>
            <section className="pqdoar">
                <h2>Por que devo doar?</h2>
                <section className="retangulos">
                <section className="retangulo1">
                    <img
                        src={community}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem1"
                    />
                    <p className="retangulo-texto1">
                        Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
                    </p>
                </section>
                <section className="retangulo2">
                    <img
                        src={Livroaberto}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem2"
                    />
                    <p className="retangulo-texto2">
                    Estimula o hábito da leitura e o aprendizado contínuo.                    </p>
                </section>
                <section className="retangulo3">
                    <img
                        src={transform}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem3"
                    />
                    <p className="retangulo-texto3">
                    Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.                   </p>
                </section>
                <section className="retangulo4">
                    <img
                        src={balance}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem4"
                    />
                    <p className="retangulo-texto4">
                    Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>                </section>
                </section>
            </section>
        </main>
           )}
