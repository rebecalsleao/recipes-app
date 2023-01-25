import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

const EMAIL = 'email@email.com';
const PASSWORD = '1234567';
const PASSWORD_INPUT = 'password-input';

describe('1. Renderiza o Login e...', () => {
  it('verifica se existem inputs para email, senha e o botão Enter', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe('2. Renderiza o Login e...', () => {
  it('verifica se o botão Enter é habilitado ao colocar email e senha corretos', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    expect(button).toBeDisabled();

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);

    expect(button).toBeEnabled();
  });
});

describe('3. Renderiza o Login e...', () => {
  it('verifica se o botão Enter continua desabilitado ao colocar email e senha incorretos', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    expect(button).toBeDisabled();

    userEvent.type(emailInput, 'email_email.com');
    userEvent.type(passwordInput, '1234');

    expect(button).toBeDisabled();
  });
});

describe('4. Renderiza o Login e...', () => {
  it('verifica se ao clicar no botão ocorre o redirecionamento para a rota Meals', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);
    userEvent.click(button);

    expect(history.location.pathname).toBe('/meals');
  });
});
