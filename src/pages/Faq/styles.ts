import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 25px;
  font-family: 'Nunito', sans-serif;
  color: #242424;
  margin-top: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  color: #242424;

  width: 60%;
  text-align: center;

  margin: 5px;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 0.5px solid #d2d2d2;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  img {
    width: 250px;
    height: 177px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  strong {
    width: 60%;
    font-size: 16px;
    text-align: center;
  }

  p {
    width: 80%;
    margin-top: 5px;
    text-align: center;
    font-size: 15px;
  }
`;

export const Questions = styled.h3`
  margin-top: 50px;
  font-family: 'Nunito', sans-serif;
  color: #242424;

  a {
    margin: 0 3px;
    text-decoration: none;
    color: blue;
  }
`;
