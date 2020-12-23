import styled from 'styled-components';
import { shade } from 'polished';

interface MenuNavProps {
  select: boolean;
}

export const Container = styled.div`
  background: #f2f2fa;
  min-height: 100%;
  min-width: fit-content;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #2b7fc3;
  padding: 0 30px;

  h1 {
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-align: center;

    a {
      color: #eee;
      text-decoration: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const MenuNav = styled.li<MenuNavProps>`
  font-size: 12px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  padding: 0 20px;
  text-transform: uppercase;

  a {
    color: ${props => (props.select ? shade(0.2, '#eee') : '#eee')};
    text-decoration: none;
    transition: 0.4s color;

    &:hover {
      color: ${shade(0.2, '#eee')};
    }
  }
`;

export const Footer = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
  }

  strong {
    font-size: 11px;
    font-family: 'Nunito', sans-serif;
  }
`;
