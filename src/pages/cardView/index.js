import React from "react";
import { Button } from "../../components/Button/styled";
import { Container, DisplayName, Header, Icon, WrapperButton, WrapperCards } from "./styled";
import ghost from '../../assets/svg/ghost.svg'
import { Card } from "../../components/card";

export const CardView = () => {

  return (
    <>
      <Header>
        <Icon src={ghost}/>
        <DisplayName>Marcos</DisplayName>
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