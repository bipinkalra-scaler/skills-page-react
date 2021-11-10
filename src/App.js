import React, { useState } from 'react';
import './App.css';
import SearchableDropDown from './components/dropdown/SearchableDropDown';
import { Container } from 'semantic-ui-react';
import SkillsView from './views/SkillsView';

// Create global state

const App = () => {

  return (
    <>
      {/* <SearchableDropDown
        list={list}
        handleOnChange = {value => console.log(value)}
        value={value}
        setValue={setValue}
        toggle={toggle}
        setToggle={setToggle}
      /> */}

    <Container>
      <h1>Add Skills to your profile</h1>
      <SkillsView />
    </Container>

    {/* Skill section which uses the global state */}
    </>
  )
}

export default App;
