import * as React from "react"
import { render, screen } from '@testing-library/react';
import App from './components/App';
import PlayerInfo from './components/PlayerInfo';


test('renders player info form', () => {
  const { getByText } = render(<PlayerInfo />);

  getByText("Player Info")
});
