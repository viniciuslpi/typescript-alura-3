import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from './../interfaces/negociacaoDoDia.js';

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados') // async
                .then(res => res.json())
                .then((dados: NegociacoesDoDia[]) => {
                    return dados.map(dadoDeHoje => {
                        return new Negociacao(
                            new Date,
                            dadoDeHoje.vezes,
                            dadoDeHoje.montante
                        )
                    })
                })
    }
}