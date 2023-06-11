import React, { useEffect, useState } from 'react';
import PeopleList from './components/people-list';
import PersonDescription from './components/person-description';
import { Person } from './react-app-env';
import styled from '@emotion/styled';
import { colors, typography } from './styles';
import { getPeople } from './services/fetch-services';
import {GiHamburgerMenu} from 'react-icons/gi'
const Wrapper = styled.div`
  header{
    width:100%;
    text-align:start;
    display:flex;
    justify-content:space-between;
    background: ${colors.black};
    padding: 1rem 33px;
    h1{
      color: ${colors.white};
    }
  }
`
const Container = styled.div`
  display:flex;
`
const StyleHamburguer = styled(GiHamburgerMenu)`
  display:none;
  color: ${colors.white};
  font-size:24px;
  @media(max-width:768px){
    display:block;
  }
`

function App() {
  const [people, setPeople] = useState<Person []>([])
  const [error, setError] = useState<string>("")
  const [person, setPerson] = useState<Person>()
  const [numberPage, setNumberPage] = useState<number>(1)
  const [hamburguer, setHamburguer] = useState<boolean>(false)

  // Asigna un personaje en especifico y lo almacena en person
  function handleDescription(description: Person){
    setPerson(description)
  }
  useEffect(() => {
    getPeople(people,numberPage, setPeople, setError)
  }, [numberPage])

  return (
    <Wrapper>
      <header>
        <h1>Ravn Star Wars Registry</h1> 
        <StyleHamburguer/>
      </header>
      <Container>
         
        <PeopleList numberPage={numberPage} setNumberPage={setNumberPage} people={people} onItemClick={handleDescription} error={error}/>
        
        {person === undefined ? null : 
          <PersonDescription description={person}/>
        }
      </Container>
    </Wrapper>
  );
}

export default App;
