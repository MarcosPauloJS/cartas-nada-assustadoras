import React from 'react'
import { Description, Frame, Image, Pointers, DisplayName } from './styled'

export const Card = ({point, name, description, imageUrl}) => {
  return <>
    <Frame>
      <Pointers>
        {point}
      </Pointers>
      <DisplayName>
        <h1>{name}</h1>
      </DisplayName>
      <Image src={imageUrl} />
      <Description>
        {description}
      </Description>
    </Frame>
  </>
}
