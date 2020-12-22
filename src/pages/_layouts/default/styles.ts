import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #f2f2fa;
`;

export const Header = styled.div`
  width: 100%;
  height: 8vh;

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

    a {
      color: #eee;
      text-decoration: none;
    }
  }
`;

export const Content = styled.div`
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
  border-radius: 5px;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  li {
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    padding: 0 20px;

    a {
      color: #eee;
      text-decoration: none;
      transition: 0.4s color;

      &:hover {
        color: #242424;
      }
    }
  }
`;

export const Footer = styled.div`
  height: 8vh;
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
