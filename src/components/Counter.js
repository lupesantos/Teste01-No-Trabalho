import React from 'react';
import { useMutation } from "@tanstack/react-query";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {HiOutlineMinusCircle} from 'react-icons/hi';
 
export default function Counter() {
    // Definindo a função de mutação para incrementar o contador
    const incrementMutation = useMutation((currentCount) => currentCount + 1); 
    // Definindo a função de mutação para decrementar o contador
    const decrementMutation = useMutation((currentCount) => currentCount - 1);
    // Estado inicial do contador
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        // Chamar a função de mutação para incrementar o contador
        incrementMutation.mutate(count, {
          onSuccess: (newCount) => {
            // Atualizar o estado com o novo valor do contador
            setCount(newCount);
          },
        });
      };

    const handleDecrement = () => {
        // Chamar a função de mutação para decrementar o contador
        decrementMutation.mutate(count, {
          onSuccess: (newCount) => {
            // Atualizar o estado com o novo valor do contador
            setCount(newCount);
          },
        });
      };

      return (
        <>
        <Container>
          <Link to='/'>
					  <Voltar>Voltar para a outra pagina!</Voltar>
				  </Link>
          <h1>Contador: {count}</h1>
          <BoxBotoes>
            <Botoes onClick={handleIncrement}><AiOutlinePlusCircle color="#1d7874"/></Botoes>
            <Botoes onClick={handleDecrement}><HiOutlineMinusCircle color="#1d7874"/></Botoes>
          </BoxBotoes>
        </Container>
        </>
        
      );
    }

    const Voltar = styled.div`
	  width: 120px;
    height: 40px;
    background-color: #1d7874;
    font-weight: 400;
    color: white;
    display: flex;
    font-size:12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
`;
const Botoes = styled.div`
	  width: 30px;
    height: 30px;
    background-color: #679289;
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
    height: 100px;
    background-color: #1d7874;
    display: flex;
    border-radius: 10px; 
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const Container = styled.div`
	  width: 150px;
    height: 200px;
    background-color: #071e22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    h1{
      font-size: 12px;
      color: white;
    }

    margin: 5px 5px;
`;