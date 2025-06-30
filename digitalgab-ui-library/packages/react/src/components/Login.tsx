import React from 'react';

export const Login = () => {
  return (
    <form
      style={{
        maxWidth: 300,
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h2>Login</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  );
};
