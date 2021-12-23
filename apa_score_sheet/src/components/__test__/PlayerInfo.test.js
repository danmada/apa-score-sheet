import React from "react"
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import PlayerInfo from '../PlayerInfo';
import App from '../App'


test('renders player info form header', () => {
  const { getByTestId } = render(<PlayerInfo />);
  const header = getByTestId("header");

  expect(header.textContent).toBe("Player Info")
  
});

test('player one input change works correctly', () => {
  const { getByTestId } = render(<PlayerInfo />);
  const plOneInput = getByTestId("input")

  fireEvent.change(plOneInput, {
    target: {
      value: "Dan"
    }
  });

  expect(plOneInput.value).toBe("Dan")
});