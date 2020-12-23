import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Header, Nav, MenuNav, Content, Footer } from './styles';

export default function DefaultLayout({ children }: any) {
  const { pathname } = useLocation();
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">GitHub Jobs</Link>
        </h1>
        <Nav>
          <MenuNav select={pathname === '/'}>
            <Link to="/">Vagas</Link>
          </MenuNav>
          <MenuNav select={pathname === '/charts'}>
            <Link to="/charts">Gráficos</Link>
          </MenuNav>
          <MenuNav select={pathname === '/faq'}>
            <Link to="/faq">FAQ</Link>
          </MenuNav>
          <MenuNav select={pathname === '/api'}>
            <Link to="/api">API</Link>
          </MenuNav>
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
