import React, { useEffect, useState } from 'react';
import PeopleList from './components/people-list';
import PersonDescription from './components/person-description';
import { Person } from './react-app-env';
import styled from '@emotion/styled';
import { colors, typography } from './styles';
import { getPeople } from './services/fetch-services';
import {AiOutlineArrowLeft} from 'react-icons/ai'
const Wrapper = styled.div`
  header{
    width:100%;
    text-align:start;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    background: ${colors.black};
    padding: 1rem 33px;
    h1{
      ${typography.h2.default}
      color: ${colors.white};
      grid-column: 2/3;
      width:100%;
      text-align:center;
    }
    @media(max-width:768px){
      
    }
  }
`
const Container = styled.div`
  display:flex;
`
const StyleArrow = styled(AiOutlineArrowLeft)`
  display:none;
  grid-column: 1;
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
  const [showList, setShowList] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  // Asigna un personaje en especifico y lo almacena en person
  function handleDescription(description: Person){
    setPerson(description)
    setShowList(false)
  }
  useEffect(() => {
    getPeople(people,numberPage, setPeople, setError)
    // setShowLoading(false)
  }, [numberPage])

  function handleArrow(){
    setShowList(!showList)
    // setPerson(undefined)
  }
  return (
    <Wrapper>
      <header>
        {!showList ? 

        <StyleArrow onClick={handleArrow}/>
        : null}
        
        { person ? (<h1>{person.name}</h1>) : (<h1>Ravn Star Wars Registry</h1>) }
        
      </header>
      <Container>
         
        <PeopleList showList={showList} 
                    showLoading={showLoading}
                    setShowLoading={setShowLoading}
                    numberPage={numberPage} 
                    setNumberPage={setNumberPage} 
                    people={people} 
                    onItemClick={handleDescription} 
                    error={error}/>
        
        {person === undefined ? null : 
          <PersonDescription showList={showList} description={person}/>
        }
      </Container>
    </Wrapper>
  );
}

export default App;
