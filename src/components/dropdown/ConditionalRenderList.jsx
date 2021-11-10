import React from "react";
import styled from 'styled-components';

const StyledList = styled.div`
  position: absolute;
  margin: 0.15rem;
  top: 3.75rem;
  width: 12rem;
  border: 1px solid #232323;
  background: #232323;
  border-radius: 5px;
`;

const StyledItem = styled.div`
  padding: 0.5rem;
  color: ${({missing}) => missing || '#fff'};
  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;

  &:hover {
    background: ${({missing}) => missing ? 'transparent' : '#1b953'};
    cursor: ${({missing}) => missing ? 'initial' : 'pointer'};
  }
`;

const ConditionalRenderList = ({value, list, setValue, toggle, setToggle}) => {

  if(value) {
    const filteredList = list.filter(item => item.data.toString().toLowerCase().startsWith(value.toLowerCase()))

    if(filteredList.length) {
      return (
        toggle && (
          <StyledList>
            {
              filteredList.map((item) => {
                return <StyledItem onClick={() => { setToggle(false); setValue(item.data); }}>{item.data}</StyledItem>
              })
            }
          </StyledList>
        )
      )
    }

    return (
      <StyledList>
        <StyledItem missing="red">Not Found</StyledItem>
      </StyledList>
    )
  }

  return null;
}

export default ConditionalRenderList;