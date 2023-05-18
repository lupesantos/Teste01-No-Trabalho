import React from "react";
import { useQuery } from "react-query"
import styled from 'styled-components';
import './Main.css';
import { Teste3} from './/StyledForms/Teste'
import { useState} from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {HiOutlineMinusCircle} from 'react-icons/hi';

const VALOR_INICIAL = 1;

function Main() {
  const [contador, setContador] = useState(VALOR_INICIAL);

  const { isLoading, error, data, isFetching } = useQuery('dados', () =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${contador}`).then((response) =>
      response.json()
    )
  );

  function addContador() {
    setContador(contador + 1);
  }

  function minusContador() {
    setContador(contador - 1);
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <TesteStyled>
          {isFetching && <div>Updating...</div>}
          <p>contador</p>
          <h2>{contador}</h2>
          <BoxBotoes>
            <Botoes onClick={addContador}><AiOutlinePlusCircle /></Botoes>
            <Botoes onClick={minusContador}><HiOutlineMinusCircle /></Botoes>
          </BoxBotoes>
          <Teste3>
            id: {data.id}
          </Teste3>
        </TesteStyled>
      )}
    </div>
  );
}

export default Main;

const TesteStyled = styled.div`
  width: 250px;
  height: 250px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Botoes = styled.div`
  width: 30px;
  height: 30px;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const BoxBotoes = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

