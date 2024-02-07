import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const tag = <strong>Olá REACT!</strong>
ReactDOM.render(
    <div id='app'>
        {/* {tag} */}
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Situação do Aluno"
        aluno="Pedro Silva" nota = {9.3}/> 
        <ComParametro 
        titulo="Situação do Aluno"
        aluno="Maria Joana"
        nota = {5.9}/> 
    </div>,
    document.getElementById('root')
)


