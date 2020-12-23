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
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: none;
    text-decoration: none;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;

    margin-top: 30px;
  }

  p {
    margin-top: 14px;
    text-align: justify;
  }
`;

export const Header = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  > strong {
    font-size: 22px;
    font-family: 'Roboto Slab', serif;
    color: #3d3d4d;
    text-transform: uppercase;
    text-align: center;
  }

  > span {
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    color: #a8a8b3;

    margin-top: 5px;
  }
`;

export const Logotipo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const MoreDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      font-family: 'Roboto Slab', serif;
      color: #a8a8b3;
      text-align: center;
      font-size: 12px;
    }

    > svg {
      margin-bottom: 5px;
      color: #a8a8b3;
    }

    > a {
      color: #a8a8b3;
      text-transform: none;
      text-align: center;
      font-size: 12px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const BackScreen = styled(Link)`
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
  color: #fff;
  padding: 10px;
  width: 150px;
  text-align: center;
  background: #0275d8;

  &:hover {
    background: ${shade(0.2, '#0275d8')};
  }
`;
