import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
    const linkElement = screen.getByText(/Ravn Star Wars Registry/i);
    expect(linkElement).toBeInTheDocument()

    // Esperar a que se resuelvan todas las solicitudes de fetch
   await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    }); 
    
  });
});
