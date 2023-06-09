import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"
import { HomeWorld, Person } from "../react-app-env";
import { useEffect, useState } from "react";
import { colors, typography } from "../styles";
import {FiChevronRight} from "react-icons/fi"
const Wrapper = styled.div`
  width:375px;
  padding-left:15px;
  border-right: 1px solid ${colors.gray.light};
  min-height:100vh;
`
const Container = styled.div`
  cursor:pointer;
  border-bottom: 1px solid ${colors.gray.light};
  display: flex;
  justify-content: space-between;
  align-items:center;
  &:hover{
    p{
      scale:1.05;
    }
  }

`
const Name = styled.p`
  ${typography.head.xxs};
  color:${colors.black};
`
const Description = styled.p`
  ${typography.text.sm};
  color:${colors.gray.medium};
`
const StyledChevron = styled(FiChevronRight)`
  color:${colors.black};
  font-size:24px;
  margin-right:30px;
`
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
const Loading = styled.div`
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

interface MainProps{
  people: Person[],
  onItemClick: (person: Person) => void
}
interface Home{
  name: string
}
interface TextNameProps {
  person: Person;
}
interface TextDescriptionProps {
  person: Person,
  home: Home
}
interface MainPerson{
  person : Person,
  onItemClick: (person: Person) => void,
  home: Home
}

const TextName = ({person}: TextNameProps) =>(<Name key={person.name}>{person.name}</Name>)
const TextDescription = ({person, home}: TextDescriptionProps) =>(
  <Description>{person.gender === "n/a" ? "Droid" : "Human"} { ` from ${home.name}` }</Description>
)
const PersonContainer = ({person, onItemClick, home}: MainPerson) =>(
  <Container onClick={()=>onItemClick(person)}>
    <div style={{paddingTop:"16px", paddingBottom:"16px"}}>
      <TextName person={person}/>
      <TextDescription person={person} home={home}/>
    </div>
    <StyledChevron/>
  </Container>
)

export default function PeopleList({people, onItemClick}: MainProps) {
  const [homeworld, setHomeworld] = useState<HomeWorld[]>([])
  useEffect(() => {
    const fetchHomes = async () => {
      const homeWorldPromises = people.map((person) =>
        fetch(person.homeworld).then((response) => response.json())
      )

      const homeWorldData = await Promise.all(homeWorldPromises)
      const homeWorldObjects = homeWorldData.map((data: any) => (
        {name: data.name} as Home) 
      )
      
      setHomeworld([ ...homeWorldObjects])
    }
    fetchHomes();
    
  }, [people])
  return (
    <Wrapper> 
      {(people.length === 0 || homeworld.length === 0)?  
        <LoadingContainer>
          <Loading/>
          <h2>Loading</h2>
        </LoadingContainer> 
        : 
        people.map((person, index) =>{
        return (
          <PersonContainer key={person.name} person={person} onItemClick={onItemClick} home={homeworld[index]}/>
        )
      })}
    </Wrapper>
  );
}