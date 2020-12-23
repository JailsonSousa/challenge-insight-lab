import styled, { keyframes, css } from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  > h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    color: #242424;
    margin-top: 30px;
  }

  > h3 {
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    color: #848484;
    margin-top: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #242424;
    margin-top: 30px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    color: #848484;
    margin-top: 10px;
  }
`;

export const WrapperCharts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  .columnChart {
    margin-top: 40px;
  }
`;
