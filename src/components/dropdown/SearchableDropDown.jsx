import { useState } from 'react';
import ConditionalRenderList from './ConditionalRenderList';
import SearchableInput from './SearchableInput';

const SearchableDropDown = ({list, handleOnChange}) => {

  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
        <SearchableInput 
          onChange = {(inputValue) => {
            setValue(inputValue);
            setToggle(true);
            handleOnChange(inputValue);
          }}
          value = {value}
        />
        <ConditionalRenderList
          value = {value}
          list = {list}
          setValue = {(value) => { setValue(value); handleOnChange(value); }}
          toggle = {toggle}
          setToggle = {setToggle}
        />
      </div>
    </>
  )
}

export default SearchableDropDown;