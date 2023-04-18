
//Importando o react, os hooks e o axios, esse último para fazer requisições externas
//E que foi instalado previamente através do npm

import React, {useState, useEffect} from "react";
import Axios from "axios";

//Componente funcional principal
const Search = () => {
    
    //useState's para permitir o controle do react sobre o termo de busca
    //e para armazenar e atualizar os resultados obtidos nas requisições e re-renderizar sempre que atualizados
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([])

    //useEffect hook que executa código na primeira vez e em todas
    //as vezes seguinte em que o componente é re-renderizado e o estado "term" é alterado
    useEffect( () => {        
        
        //Função de requisição para a API da wikipedia, utilizando assincronicidade
        //como melhor prática em requisições externas
        const wikiSearch = async () => {
            
            //Atribuição dos resultados obtidos na requisição utilizando o "term"
            //a uma variável
            const wikiResult = await Axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: term
            }
            })
            
            //Atualização do estado com os resultados obtidos na requisição
            setResults(wikiResult.data.query.search)            
        }

        //Atribuição do id do timeout à uma variável.
        //Timeout para atrasar em 1000 milisegundos a invocação da função de requisição
        //Condicional para invocar a função de requisição caso exista um termo de busca 
        const timeoutId = setTimeout(() => {
            if(term){
                wikiSearch();
            }
        }, 1000)
        

        //Cleanup function, que é retornada ao final de cada execução do código neste useEffect
        //e que é invocada somente quando o código é executado novamente
        return () => {
            clearTimeout(timeoutId)
        }
    //Termo de configuração da execução do useEffect  
    }, [term])