import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  width: 90%;

  h1 {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    color: #242424;
    margin-top: 20px;
  }

  hr {
    border: 0.5px solid #d9d9d9;
    width: 95%;
    margin-top: 5px;
  }

  div {
    margin: 10px;
    width: 100%;
    padding: 1em;

    a {
      color: blue;
    }
  }

  ul {
    width: 100%;
    padding: 1em;

    li {
      margin-top: 5px;
    }
  }
`;

export const Subtitle = styled.h3`
  margin-top: 20px;
  font-size: 14px;
`;

export const Route = styled.h2`
  margin: 20px 0px;
  width: 70%;
  padding: 1em;
  border-radius: 1em;
  background: #eee;
  font-size: 13px;
`;

export const Description = styled.p`
  width: 70%;
  margin-top: 10px;
  font-size: 13px;
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100%;
  width: 90%;
`;
