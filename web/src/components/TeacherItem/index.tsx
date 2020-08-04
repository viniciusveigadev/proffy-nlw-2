import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://img.icons8.com/plasticine/2x/walter-white.png" alt="Walter White" />
                <div>
                    <strong>Walter White</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias avançadas de Química.
            <br /><br />
            Apaixonado por ensinar pessoas a fazer dinheiro. Alguns me chamam por Heisenberg
        </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$: 800,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;