import styled from "@emotion/styled";
import { HomeWorld, Person } from "../react-app-env";
import { useEffect, useState } from "react";
import { colors, typography } from "../styles";
import {FiChevronRight} from "react-icons/fi"
import Loading from "./loading";
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
          <Loading/>
        : 
        people.map((person, index) =>{
        return (
          <PersonContainer key={person.name} person={person} onItemClick={onItemClick} home={homeworld[index]}/>
        )
      })}
    </Wrapper>
  );
}