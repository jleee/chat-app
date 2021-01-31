import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('renders sign in text', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('Sign in to Slack Clone');
  });

  it('email input field should show error if value is empty', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText('Email'));
    expect(screen.getByText('Please enter an email address')).toBeInTheDocument();
  });

  it('email input field should show error if email is invalid', () => {
    render(<App />);
    userEvent.type(screen.getByLabelText('Email'), 'hello@pizzarules');
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('password input field should show error if value is empty', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText('Password'));
    expect(screen.getByText('Please enter a password')).toBeInTheDocument();
  });
});
