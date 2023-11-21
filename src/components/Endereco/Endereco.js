import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { users } from "../../screens/Apresentacao";

export function Endereco() {
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
    const { userId } = useParams();

    useEffect(() => {
        const user = users.find(u => u.userId === parseInt(userId, 10));

        if (user) {
            const cep = user.cep;

            axios.get(`http://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    setInformacoes(response.data);
                })
                .catch(error => {
                    console.error('Error fetching address information:', error);
                });
        } else {
            console.error(`User not found for the given userId: ${userId}`);
        }
    }, [userId]);
    return (
        <>
            <h1>User's Address</h1>
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
    );
}