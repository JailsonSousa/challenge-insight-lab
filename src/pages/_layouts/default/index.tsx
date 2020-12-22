import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Nav, Content, Footer } from './styles';

export default function DefaultLayout({ children }: any) {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">GitHub Jobs</Link>
        </h1>
        <Nav>
          <li>
            <Link to="/">Vagas</Link>
          </li>
          <li>
            <Link to="/">Gráficos</Link>
          </li>
          <li>
            <Link to="/faq">Como funciona</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
        </Nav>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <span>Jailson de Sousa Bastos</span>
        <strong>Desafio Insight Lab</strong>
      </Footer>
    </Container>
  );
}
