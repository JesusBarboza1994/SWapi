import { HomeWorld, Person } from "../../react-app-env";
import { useEffect, useState } from "react";
import Loading from "../loading/loading";
import * as Styled from "./styles";
import { getHomes } from "../../services/fetch-services";

interface MainProps{
  people: Person[],
  onItemClick: (person: Person) => void,
  error: string,
  numberPage: number,
  setNumberPage: React.Dispatch<React.SetStateAction<number>>
}
interface Home{
  name: string
}
interface TextNameProps {
  person: Person;
}
interface TextDetailsProps {
  person: Person,
  home: Home
}
interface MainPerson{
  person : Person,
  onItemClick: (person: Person) => void,
  home: Home, 
  
}

// Atom: Nombre del personaje en la lista
const TextName = ({person}: TextNameProps) =>(<Styled.Name key={person.name}>{person.name}</Styled.Name>)

// Atom: Descripción del personaje en la lista
function TextDetails({person, home}: TextDetailsProps) {
  return(
    <>
      {home ? 
        <Styled.Details>
          {person.gender === "n/a" ? "Droid" : "Human"} { ` from ${home.name}` }
        </Styled.Details>
        : null
      }
    </>
  )
}


const PersonCell = ({person, onItemClick, home}: MainPerson) =>(
  <Styled.PersonCell onClick={()=>onItemClick(person)}>
    <div>
      <TextName person={person}/>
      <TextDetails person={person} home={home}/>
    </div>
    <Styled.Chevron/>
  </Styled.PersonCell>
)



export default function PeopleList({people, onItemClick, error, numberPage, setNumberPage}: MainProps) {
  const [homeworld, setHomeworld] = useState<HomeWorld[]>([])
  
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      // El scroll ha llegado al final de la lista
      console.log('Se ha llegado al final de la lista');
      setNumberPage(numberPage + 1)
    }
  };


  useEffect(() => {
    getHomes(people).then((homes) => setHomeworld([...homeworld, ...homes]));
  }, [people])


  return (
    <Styled.Wrapper onScroll={handleScroll}>
      {error !== "" ? <Styled.NoticeCell>{error}</Styled.NoticeCell> : (people.length === 0 || homeworld.length === 0) ?  
        <Loading/> : 
        people.map((person, index) =>{
        return (
          <PersonCell key={person.name} person={person} onItemClick={onItemClick} home={homeworld[index]}/>
        )
      })}
    </Styled.Wrapper>
  );
}