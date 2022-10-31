import styled, { keyframes } from "styled-components";
import imageBG from "../../assets/img/stars.png"


const stars = keyframes`
  0% { background-position: 0  0% }
  100% { background-position: 1% 0% }
`
export const StarsBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageBG});
  background-repeat: repeat-x;
  background-position-x: 95%;
  animation-name: ${stars};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`
