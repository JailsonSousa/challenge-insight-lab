import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 40px;

  h1 {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    color: #242424;
    margin-top: 20px;
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
  padding: 1em;
  border-radius: 1em;
  background: #eee;
  font-size: 13px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 13px;
`;
