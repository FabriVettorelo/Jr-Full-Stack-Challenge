import { render, fireEvent, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Menu from './Menu';
import { createOrder } from '../../redux/Actions/createOrder';
import { removeFromCart } from '../../redux/Actions/removeFromCart';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('../../redux/Actions/createOrder', () => ({
  createOrder: jest.fn(),
}));
jest.mock('../../redux/Actions/removeFromCart', () => ({
    removeFromCart: jest.fn(),
  }));
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));
describe('Menu component', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      cart: [{ pizza: 'Margarita', price: 10, quantity: 2 }],
      error: null,
      orderCreated: false,
    }));
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
    expect(removeFromCart).toHaveBeenCalledWith({ pizza: 'Margarita', price: 10, quantity: 2 });
  });
  test('creates an order', () => {
    render(<Menu />);
    fireEvent.click(screen.getByRole('img', { name: /shopping cart/i }));
    fireEvent.click(screen.getByText('Create Order'));
    expect(createOrder).toHaveBeenCalledWith([{ pizza: 'Margarita', price: 10, quantity: 2 }]);
  });
  test('shows an error message', () => {
    useSelector.mockImplementation((selector) => selector({
      cart: [{ pizza: 'Margarita', price: 10, quantity: 2 }],
      error: 'An error occurred',
      orderCreated: false,
    }));
    render(<Menu />);
    fireEvent.click(screen.getByRole('img', { name: /shopping cart/i }));
    expect(screen.getByText('*Error: "An error occurred", try again later')).toBeInTheDocument();
  });
});