import React from "react";
import axios from "axios";
import styled from 'styled-components';
import './Main.css';
import { Teste3} from './/StyledForms/Teste'
import { useState, useEffect } from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {HiOutlineMinusCircle} from 'react-icons/hi';
import {Comment} from 'react-loader-spinner'
import Swal from 'sweetalert2'
import {Link}  from 'react-router-dom'

 function Main() {  
    const [dados, setDados] = useState();
    const [contador, setContador] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("Ta errado isso ai!");
    const [enable, setEnable] = useState(true);

    const VALOR_INICIAL = 1;
    

    useEffect(()=>{
        if(contador > 0){
            setLoading(true)
            const teste2 = axios.get(`https://jsonplaceholder.typicode.com/todos/${contador}`)
            teste2.then(result => 
                {
                    setDados(result.data)
                    setTimeout(()=>{setLoading(false)},400)
                }).catch((err) => 
                {
                    setError(err);
                    setTimeout(()=>{setLoading(false)},400)
              });
        }
    },[contador])

    function addContador(){
        if(contador === 20){
            Swal.fire('contador vale 21')
        }
        setEnable(!enable)
        setContador(contador+1)
        console.log("2: contador é: ", contador)
    }
    function minusContador(){
        setContador(contador-1)
    }
    if(contador === VALOR_INICIAL){
        console.log("1: Vou criar o contador e o set contador")
    }
    else{
        console.log("3: Já existe um contador com valor: ", contador)
    }
    
    return(
          <>
                <TesteStyled>
                    <Link to='/logintest'className="link">
                        <Counter>Login Teste!</Counter> 
                    </Link>
                    <Link to='/counter'className="link">
                        <Counter>counter!</Counter> 
                    </Link>
                    <p>contador</p>
                    <p>{contador}</p>
                    <BoxBotoes tabIndex="0">
                        <Botoes onClick={addContador} habilitado={enable}><AiOutlinePlusCircle color="#1d7874"/></Botoes>
                        <Botoes onClick={minusContador}habilitado={!enable}><HiOutlineMinusCircle color="#1d7874"/></Botoes>
                    </BoxBotoes>
                    <Teste3> 
                        {loading ? 
                        (<Comment
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass="comment-wrapper"
                            color="#fff"
                            backgroundColor="#1d7874"
                          />)
                        : 
                        (<>id: {dados.id}</>)}
                    </Teste3>
                </TesteStyled>
        </>
    );
    }
    export default Main;

const TesteStyled = styled.div`
	width: 250px;
    height: 400px;
    background-color: #071e22;    
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Botoes = styled.div`
	width: 30px;
    height: 30px;
    background-color: ${props => props.habilitado ? "#679289" : "white"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 5px;
    cursor:pointer;
    
    &:hover { 
        outline: none !important;
        box-shadow: 0 0 8px #719ECE;
     }
`;
const BoxBotoes = styled.div`
	width: 100px;
    height: 50px;
    background-color: #1d7874;
    display: flex;
    border-radius: 10px; 
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    
`;
const Counter = styled.div`
    width: 120px;
    height: 40px;
    background-color: #1d7874;
    color: white;
    display: flex;
    font-size:12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
`;
