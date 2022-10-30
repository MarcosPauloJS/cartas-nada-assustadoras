import styled from "styled-components";


export const Frame = styled.div`
  width: 100%;
  max-width: 219px;
  height: 320px;
  padding: 0 10px 10px 10px;
  border: 1px solid #000000;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

export const Description = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  padding: 10px;
  border: 1px solid #000000;
  color: ${({theme}) => theme.colors.textLight};
`

export const Image = styled.img`
  width: 100%;
  height: 140px;
  border: 1px solid #000000;
  margin-bottom: 10px;
`

export const Pointers = styled.div`
  border-radius: 100%;
  background-color:  ${({theme}) => theme.colors.secondary};
  color:  ${({theme}) => theme.colors.light};
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-size: 24px;
  text-shadow: -1px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px #000, -1px -1px #000;
`

export const DisplayName = styled.div`
  color:  ${({theme}) => theme.colors.secondary};
  display: flex;
  margin: 5px;

  >h1 {
    font-size: ${({theme}) => theme.fontSize.big};
    text-shadow: -1px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000;
  }
`