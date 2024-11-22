import React from 'react';
import "./QueroDoar.css";
import Vector from "../../assets/Vector.png";

export default function QueroDoar() {
    return (
        <section className='QueroDoar'>
            <p className='chamada'>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <section className="borda">
                <div>
                    <img src={Vector} alt="" />
                    <p>Informações do Livro</p>
                </div>
                <input type="text" placeholder="Título" /><br />
                <input type="text" placeholder="Categoria" /><br />
                <input type="text" placeholder="Autor" /><br />
                <input type="url" placeholder="Link da Imagem" /><br />
                <button>Doar</button>
            </section>
        </section>
    );
}
