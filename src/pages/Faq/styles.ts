import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  color: #242424;
  margin-top: 30px;
`;

export const Subtitle = styled.span`
  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  text-align: center;

  margin: 5px;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px 0px;
  padding: 20px;
  border: 0.5px solid #d2d2d2;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 10px;

  img {
    width: 250px;
    height: 177px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  strong {
    font-size: 14px;
    text-align: center;
  }

  p {
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
  }
`;

export const Questions = styled.span`
  font-family: 'Nunito', sans-serif;
  color: #242424;
  text-align: center;

  a {
    margin: 0 3px;
    text-decoration: none;
    color: blue;
  }
`;
