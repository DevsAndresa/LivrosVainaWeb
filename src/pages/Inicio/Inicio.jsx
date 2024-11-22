import community from "../../assets/community.png";
import Livroaberto from "../../assets/Livroaberto.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

import s from "./inicio.module.scss";

export default function Inicio() {
    return (
        <main>
            <section className={s.primeirasessaoinicio}>
                <h2 className={s.textoSobreImagem}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.pqdoar}>
                <h2>Por que devo doar?</h2>
                <section className={s.sessaoInformativos}>
                 <section className={s.informativo}>
                    <img src={community}  alt="Ilustração de mãos segurando Livro"/>
                    <p className={s.textoretangulo1}>
                        Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
                    </p>
                 </section>
                 <section className={s.informativo}>
                    <img
                        src={Livroaberto}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem2"
                    />
                    <p className="retangulo-texto2">
                    Estimula o hábito da leitura e o aprendizado contínuo.                    </p>
                 </section>
                 <section className={s.informativo}>
                    <img
                        src={transform}
                        alt="Mãos segurando Livro"
                        className="retangulo-imagem3"
                    />
                    <p className="retangulo-texto3">
                    Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.                   </p>
                 </section>
                 <section className={s.informativo}>
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
