import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

import Video from './componentes/Video';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Video />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/EXPLORE/i);
  expect(linkElement).toBeInTheDocument();
});