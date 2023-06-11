import React from 'react';
import { render, screen } from '@testing-library/react';
import PeopleList from './people-list';
import { act } from 'react-dom/test-utils';

describe('PersonList', () => {
  const people = [{
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    vehicles: [
      "https://swapi.dev/api/vehicles/1/",
      "https://swapi.dev/api/vehicles/2/",
      "https://swapi.dev/api/vehicles/3/",
      "https://swapi.dev/api/vehicles/4/",],
    films: [],
    species: [],
    starships: [],
    created: "",
    edited: "",
    url: ""
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/2/",
    vehicles: [],
    films: [],
    species: [],
    starships: [],
    created: "",
    edited: "",
    url: ""
  },
]

  test('renders person information and vehicles', async () => {
    render(<PeopleList 
      showList={true}
      people={people}
      onItemClick={jest.fn()}
      showLoading={false}
      setShowLoading={jest.fn()}
      error=""
      numberPage={1}
      setNumberPage={jest.fn()}
    />);

    // Esperar a que se resuelvan todas las solicitudes de fetch
   await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    }); 

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});