import { useState } from 'react';
import ConditionRenderList from './ConditionRenderList';
import Input from './Input';

const SearchableDropDown = ({list}) => {

  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h2>Select Skills - </h2>
      <Input 
        onChange = {(inputValue) => {
          setValue(inputValue);
          setToggle(true)
        }}
        value = {value}
      />
      <ConditionalRenderList
        value = {value}
        list = {list}
        setValue = {setValue}
        toggle = {toggle}
        setToggle = {setToggle}
      />
    </>
  )
}