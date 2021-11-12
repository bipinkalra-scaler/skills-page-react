import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import SkillsView from './views/SkillsView';

// Create global state

const App = () => {

  return (
    <Container>
      <h1>Add Skills to your profile</h1>
      <SkillsView />
    </Container>
  )
}

export default App;
