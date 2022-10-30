import React from 'react';
import { Button } from '../../components/Button/styled';
import { Star } from '../../components/star/styled';
import { Brand, Description, HighLight, Input, Title, Wrapper } from './styled';

export const Home = props => {
  return (
    <Wrapper>
      <Brand>
        <Star/>
        <Title>Cartas nada <br/><HighLight>assustadoras</HighLight></Title>
        <Star/>
      </Brand>

      <Description>Diga-me o seu nome e entre no caminho sem volta de cartas que irão fazer qualquer coisa menos te assustar</Description>
      <Input type="text" placeholder='Diga o seu nome'/>
      <Button>VER CARTAS</Button>
    </Wrapper>
  )
}