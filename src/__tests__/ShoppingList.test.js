import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingList from '../components/ShoppingList'; // Update the import path as needed

describe('ShoppingList Component', () => {
  test('renders Shopping List header', () => {
    render(<ShoppingList />);
    expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
  });

  test('adds a new item to the list', () => {
    render(<ShoppingList />);
    const input = screen.getByPlaceholderText(/Add new item/i);
    const button = screen.getByText(/Add Item/i);

    fireEvent.change(input, { target: { value: 'Milk' } });
    fireEvent.click(button);

    expect(screen.getByText(/Milk/i)).toBeInTheDocument();
  });

  test('removes an item from the list', () => {
    render(<ShoppingList />);
    const input = screen.getByPlaceholderText(/Add new item/i);
    const addButton = screen.getByText(/Add Item/i);

    fireEvent.change(input, { target: { value: 'Bread' } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);

    expect(screen.queryByText(/Bread/i)).not.toBeInTheDocument();
  });
});

