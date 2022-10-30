import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/styled';
import { Star } from '../../components/star/styled';
import { Brand, Description, HighLight, Input, Title, Wrapper } from './styled';

export const Home = () => {
  const [ userName, setUserName ] = useState('')
  const navigate = useNavigate();

  const handleEnter = () => {
    localStorage.setItem('displayName', userName)
    navigate('cards')
  }

  const handleChangeName = (e) => {
    setUserName(e.target.value)
  }
  
  return (
    <Wrapper>
      <Brand>
        <Star/>
        <Title>Cartas nada <br/><HighLight>assustadoras</HighLight></Title>
        <Star/>
      </Brand>

      <Description>Diga-me o seu nome e entre no caminho sem volta de cartas que irão fazer qualquer coisa menos te assustar</Description>
      <Input type="text" placeholder='Seu nome vai aqui' onChange={handleChangeName}/>
      <Button onClick={handleEnter} disabled={userName.length < 1}>VER CARTAS</Button>
    </Wrapper>
  )
}