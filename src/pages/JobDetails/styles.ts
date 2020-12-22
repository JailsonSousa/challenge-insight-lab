import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

interface LoadingProps {
  loading: boolean;
}

export const Loading = styled.div<LoadingProps>`
  margin-top: 60px;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Container = styled.div`
  width: 70%;

  a {
    color: none;
    text-decoration: none;
  }

  h2 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    color: #848484;
    margin-top: 30px;
  }

  p {
    text-align: justify;
    text-indent: 50px;

    margin-top: 10px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: left;

    padding-left: 30px;
  }

  strong {
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    color: #3d3d4d;
    text-transform: uppercase;
  }

  span {
    margin-top: 10px;

    font-size: 15px;
    font-family: 'Roboto Slab', serif;
    color: #a8a8b3;
  }
`;

export const Logotipo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 10%;

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 20px;
  }
`;

export const MoreDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 120px;


  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px
    font-size: 20px;
    font-family: 'Roboto Slab', serif;
    color: #a8a8b3;

    padding-left: 40px;
  }

  svg {
    margin-bottom: 5px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 40vh;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;

  a {
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    color: #fff;
    background: #5cb85c;
    padding: 10px;
    width: 150px;
    text-align: center;

    &:hover {
      background: ${shade(0.2, '#5cb85c')};
    }
  }
`;

export const BackScreen = styled(Link)`
  background: #0275d8 !important;

  &:hover {
    background: ${shade(0.2, '#0275d8')} !important;
  }
`;
