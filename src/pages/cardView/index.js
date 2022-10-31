import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/styled";
import { Container, DisplayName, Header, Icon, WrapperButton, WrapperCards } from "./styled";
import ghost from '../../assets/svg/ghost.svg'
import { Card } from "../../components/card";
import  axios from 'axios'
import { getRandomNumber, shuffle } from "../../utils/random";

export const CardView = () => {
  const displayName = localStorage.getItem('displayName') || ''
  const [ allCards, setAllCards ] = useState([])
  const [ selectedCards, setSelectedCards ] = useState([])

  const getRandomCards = (cards, amount) => {
    const total = cards.length;
    let cardsRandom = []

    for(let i = 0; i < amount;  i++) {
      const randomNumber = getRandomNumber(0, total - 1)
      cardsRandom.push(cards[randomNumber])
    }

    return cardsRandom;
  }
  
  useEffect(() => {
    axios.get('https://cartasnadaassustadoras.free.mockoapp.net/cards')
      .then( response => {
        const dataCards = response.data.results.map( card => ({
          name: card.properties?.name.title?.[0].text?.content || '',
          description: card.properties?.description.rich_text?.[0]?.text?.content,
          imageUrl: card.properties?.imageUrl.rich_text?.[0]?.text?.content,
          point: getRandomNumber(0, 10)
        }))
        
        setAllCards(dataCards)
        setSelectedCards(getRandomCards(dataCards, 5))
      })
  }, [])
  
  const handleGetCard = () => {
    setSelectedCards( state => ([...state, ...getRandomCards(allCards, 1)]) )
  }

  const handleRandomizeCard = () => {
    let cardRandomized = selectedCards;
    cardRandomized = shuffle(cardRandomized);

    setSelectedCards([...cardRandomized])
  }

  return (
    <>
      <Header>
        <Icon src={ghost}/>
        <DisplayName>{displayName}</DisplayName>
      </Header>

      <Container>
        <WrapperCards>
          {selectedCards && selectedCards.map( card => (
            <Card {...card}/>
          ))}
        </WrapperCards>
        
        <WrapperButton>
          <Button onClick={handleGetCard} disabled={selectedCards.length >= 8}>
            NOVA CARTA
          </Button>
          <Button onClick={handleRandomizeCard}>
            EMBARALHAR
          </Button>
        </WrapperButton>
      </Container>
    </>
  )
}