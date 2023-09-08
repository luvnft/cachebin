import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Tabs from './Tabs'; // Import your Tabs component

describe('Tabs Component', () => {
  let createTab: HTMLElement;
  let fetchTab: HTMLElement;
  let createBinComponent: HTMLElement;
  beforeEach(() => {
    render(<Tabs />);
    createTab = screen.getByTestId('create-bin-tab');
    fetchTab = screen.getByTestId('fetch-bin-tab');
    createBinComponent = screen.getByTestId('create-bin-component');
  });

  it('renders the Tabs component with tabs and titles', () => {
    expect(createTab).toBeInTheDocument();
    expect(fetchTab).toBeInTheDocument();
    expect(createBinComponent).toBeInTheDocument();
  });

  it('allows switching between tabs', () => {
    expect(createTab).toHaveAttribute('aria-selected', 'true');
    expect(createBinComponent).toBeInTheDocument();
    expect(fetchTab).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(fetchTab);

    expect(createTab).toHaveAttribute('aria-selected', 'false');
    expect(createBinComponent).not.toBeInTheDocument();
    expect(fetchTab).toHaveAttribute('aria-selected', 'true');
  });
});
