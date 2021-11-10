import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 2rem;
  width: 12rem;
  border-radius: 5px;
  border: 1px solid #232323;
  position: relative;
  margin: 0.5rem;
  padding-left: 0.25rem;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const Input = ({onChange, value, style}) => {
  return (
    <StyledInput 
      onChange = {(e) => onChange(e.target.value)}
      value = {value}
    />

    // <input 
    //   onChange = {(e) => onChange(e.target.value)}
    //   value = {value}
    // />
  )
}

export default Input;