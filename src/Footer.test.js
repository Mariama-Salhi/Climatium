import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './componentes/Footer';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Talent/i);
  expect(linkElement).toBeInTheDocument();
});