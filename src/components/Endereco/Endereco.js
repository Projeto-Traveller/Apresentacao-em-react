import React, { useState } from "react";
import axios from "axios";

export function Endereco() {
    const [cep, setCep] = useState({ cep: '' });
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: ''
    });
    const getInformacoes = () => {
        axios.get('http://viacep.com.br/ws/' + cep + '/json/')
            .then(response => {
                setInformacoes(response.data);
            });
    }

    const handlingCep = (e) => {
        setCep(e.target.value);
    }


    return (
        <>
            <h1></h1>
            <input type="text" onChange={(e) => { handlingCep(e) }} placeholder="Digite o CEP" />
            <button onClick={getInformacoes}>Pesquisar</button>
            <ul>
                <li>CEP:         {informacoes['cep']}</li>
                <li>Logradouro:  {informacoes['logradouro']}</li>
                <li>Complemento: {informacoes['complemento']}</li>
                <li>Bairro:      {informacoes['bairro']}</li>
                <li>Localidade:  {informacoes['localidade']}</li>
                <li>UF:          {informacoes['uf']}</li>
                <li>IBGE:        {informacoes['ibge']}</li>
                <li>GIA:         {informacoes['gia']}</li>
            </ul>
        </>
    )
}