import { LoadingContainer, LoadingIcon } from "./styles";

export default function Loading(){
  return(
    <LoadingContainer data-testid="loading-spinner">
      <LoadingIcon/>
      <h2>Loading</h2>
    </LoadingContainer> 
  )
}