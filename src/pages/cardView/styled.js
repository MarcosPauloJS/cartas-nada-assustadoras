import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperButton = styled.div`
  width: 90%;
  max-width:  360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 400px){
    flex-direction: column;
    
    >button:first-child {
      margin-bottom: 15px;
    }
  }
`

export const Header = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 80px;
`

export const Icon = styled.img`
  margin-right: 15px;
`

export const DisplayName = styled.span`
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  color: ${({theme}) => theme.colors.secondary};
  margin-top: 5px;
`

export const WrapperCards = styled.span`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  >div {
    margin: 20px;
  }
`
