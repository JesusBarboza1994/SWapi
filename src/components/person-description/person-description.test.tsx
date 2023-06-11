import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonDescription from './person-description';
describe('PersonDescription', () => {
  const person = {
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
  }

  test('renders person information and vehicles', async () => {
    render(<PersonDescription description={person} />);
    const titleElement = screen.getByText(/general information/i);
    expect(titleElement).toBeInTheDocument();

    const eyeColorElement = screen.getByText(/blue/i);
    expect(eyeColorElement).toBeInTheDocument();

    const skinColorElement = screen.getByText(/fair/i);
    expect(skinColorElement).toBeInTheDocument();

    const birthYearElement = screen.getByText(/19BBY/i);
    expect(birthYearElement).toBeInTheDocument();

  });
});