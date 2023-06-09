import styled from "@emotion/styled";
import { colors } from "../styles";
import { keyframes } from "@emotion/react"

const spin = keyframes`
  0% {

    transform: rotate(0deg);
  }
  50% {

    transform: rotate(360deg);
  }
  100% {

    transform: rotate(720deg);
  }
`;
const LoadingIcon = styled.div`
  border: 4px solid rgba(52, 152, 219, 0);
  border-radius: 50%;
  border-top: 4px solid ${colors.gray.medium};
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;
const LoadingContainer = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 15px;
  padding-top: 15px;
`

export default function Loading(){
  return(
    <LoadingContainer>
      <LoadingIcon/>
      <h2>Loading</h2>
    </LoadingContainer> 
  )
}