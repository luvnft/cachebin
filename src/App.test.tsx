import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App Component: renders correct header and description', () => {
  const { getByText, container } = render(<App />);
  const titleElement = getByText('Cachebin');
  const descriptionElement = getByText(
    'Cachebin is a safe and decentralized service to share code snippets, notes and many more. Paste anything and share with your friends',
  );
  const firstChild = container.firstChild as HTMLElement;

  expect(firstChild).toHaveClass('page--header');
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
