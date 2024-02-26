import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Menu from './Menu';
jest.mock('../../assets/img/logo.png', () => 'test-logo-path');

describe('Menu component', () => {
  beforeEach(() => {
    // Puedes configurar el estado inicial del store de Redux aquí si es necesario
  });

  test('renders without crashing', () => {
    render(<Menu />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  test('opens and closes the cart popup', () => {
    render(<Menu />);
    fireEvent.click(screen.getByRole('img', { name: /shopping cart/i }));
    expect(screen.getByText('Margarita')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove'));
    // Puedes realizar aserciones sobre el comportamiento esperado directamente
    expect(screen.queryByText('Margarita')).not.toBeInTheDocument();
  });

  test('creates an order', () => {
    render(<Menu />);
    fireEvent.click(screen.getByRole('img', { name: /shopping cart/i }));
    fireEvent.click(screen.getByText('Create Order'));
    // Puedes verificar si ciertas funciones son llamadas
    // Pero ten en cuenta que no estás probando la funcionalidad real de Redux aquí
  });

  test('shows an error message', () => {
    // Puedes ajustar el estado inicial del store de Redux aquí si es necesario
    render(<Menu />);
    fireEvent.click(screen.getByRole('img', { name: /shopping cart/i }));
    expect(screen.getByText('*Error: "An error occurred", try again later')).toBeInTheDocument();
  });
});