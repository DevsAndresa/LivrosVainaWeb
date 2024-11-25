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
                    <img src={community}  alt="Ilustração de figuras representando pessoas conectadas entre si representando inclusão"/>
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                 </section>

                 <section className={s.informativo}>
                    <img src={Livroaberto} alt="Ilustração de uma figura representando uma pessoa com o livro aberto demonstrando estar lendo"/>
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                 </section>

                 <section className={s.informativo}>
                    <img src={transform} alt="Ilustração de um punho cerrado dentro de um círculo, simbolizando união e força, conectado a uma fileira de figuras humanas representando pessoas"/>
                    <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas. </p>
                 </section>

                 <section className={s.informativo}>
                    <img src={balance} alt="Ilustração de balança, símbolo da justiça."/>
                    <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>                
                 </section>
                </section>

            </section>

        </main>
           )}
