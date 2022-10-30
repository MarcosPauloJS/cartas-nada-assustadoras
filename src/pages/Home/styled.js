import styled from "styled-components";
import imageBG from "../../assets/img/ghosts.png"

export const Wrapper = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${imageBG});
  background-repeat: no-repeat;
  background-position-x: 95%;

  @media screen and (max-width: 940px) {
    background: none;
  }
`

export const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: ${({theme}) => theme.fontSize.bigest};
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};
  text-shadow: 2px 1px 1px ${({theme}) => theme.colors.primary}, 4px 4px 2px rgb(0 0 0);
  margin-bottom: 30px;
`

export const HighLight = styled.strong`
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-shadow: 2px 1px 1px ${({theme}) => theme.colors.secondary}, 4px 4px 2px rgb(0 0 0);
  color: ${({theme}) => theme.colors.primary};
`

export const Description = styled.p`
  max-width: 350px;
  width: 90%;
  font-size: ${({theme}) => theme.fontSize.medium};
  color: ${({theme}) => theme.colors.textLight};
  text-align: center;
  margin-bottom: 40px;
`

export const Input = styled.input`
  width: 270px;
  background: none;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.textLight};
  font-size: ${({theme}) => theme.fontSize.medium};
  padding: 12px 10px;
  color: ${({theme}) => theme.colors.textLight};
  margin-bottom: 20px;
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: -30px 20px 0 20px;
  }
`
