import React, { useEffect, useState } from 'react';
import PeopleList from './components/people-list';
import PersonDescription from './components/person-description';
import { Person } from './react-app-env';
import styled from '@emotion/styled';
import { colors, typography } from './styles';

const Wrapper = styled.div`
  h1{
    width:100%;
    text-align:start;
    background: ${colors.black};
    padding: 1rem 33px;
    color: ${colors.white};
    ${typography.head.md};
  }
`
const Container = styled.div`
  display:flex;

`
function App() {
  const [people, setPeople] = useState<Person []>([])
  const [error, setError] = useState<String>("")
  const [person, setPerson] = useState<Person>()
  function handleDescription(description: Person){
    setPerson(description)
  }
  useEffect(() => {
    fetch(`https://swapi.dev/api/people`)
      .then(response => response.json())
      .then(data =>{ 
        if (data.results) {
          setPeople(data.results);
        } else {
          setError('Error: No se pudo obtener la lista de personas');
        }
      })
      .catch(error => {
        setError('Error: ' + error.message);
      });
  }, [])

  return (
    <Wrapper>
      <h1>Ravn Star Wars Registry</h1> 
      <Container>
        {error !== "" ? <h1>{error}</h1> : 
          <PeopleList people={people} onItemClick={handleDescription}/>
        }
        {person === undefined ? null : 
          <PersonDescription description={person}/>
        }
      </Container>
    </Wrapper>
  );
}

export default App;
