import styled, { keyframes, css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

interface ButtonProps {
  loading: boolean;
  hasError: boolean;
}

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div``;

export const SectionSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #242424;

    margin-top: 30px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 30px;
  width: 100%;
  padding: 0 5px;
  display: flex;
  & + input {
    padding-right: 16px;
  }
  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 1px solid #fff;
    border-right: 0;
    transition: border-color 1s;

    ${props =>
      props.hasError &&
      css`
        border-color: #d9534f;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const ButtonSubmit = styled.button<ButtonProps>`
  align-items: center;
  width: 60px;
  height: 50px;
  background: #04d361;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: color 0.2s;
  transition: background 1s;
  cursor: pointer;

  > svg {
    color: #3a3a3a;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  ${props =>
    props.hasError &&
    css`
      background: #d9534f;
    `}
`;

export const Error = styled.span`
  margin-top: 8px;
  display: flex;
  align-items: center;

  font-size: 12px;
  font-family: 'Roboto Slab', serif;
  color: #d9534f;
`;

export const Jobs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 20px;

  a {
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    margin: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;

    transition: 0.5s;

    svg {
      margin-left: auto;
      color: #2b7fc3;

      &:hover {
        color: ${shade(0.2, '#2b7fc3')};
      }
    }

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 20%;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export const JobDetails = styled.div`
  margin: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  strong {
    font-size: 11px;
    font-family: 'Roboto Slab', serif;
    color: #3d3d4d;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    font-family: 'Roboto Slab', serif;
    color: #a8a8b3;
    padding-left: 6px;
  }
`;
