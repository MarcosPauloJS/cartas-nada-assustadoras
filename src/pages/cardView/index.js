import React, { useEffect } from "react";
import { Button } from "../../components/Button/styled";
import { Container, DisplayName, Header, Icon, WrapperButton, WrapperCards } from "./styled";
import ghost from '../../assets/svg/ghost.svg'
import { Card } from "../../components/card";

export const CardView = () => {
  const displayName = localStorage.getItem('displayName') || ''

  return (
    <>
      <Header>
        <Icon src={ghost}/>
        <DisplayName>{displayName}</DisplayName>
      </Header>

      <Container>
        <WrapperCards>
        </WrapperCards>

        <WrapperButton>
          <Button>
            NOVA CARTA
          </Button>
          <Button>
            EMBARALHAR
          </Button>
        </WrapperButton>
      </Container>
    </>
  )
}