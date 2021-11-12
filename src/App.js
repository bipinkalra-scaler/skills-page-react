import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import { Container } from 'semantic-ui-react';
import SkillsView from './views/SkillsView';

// Create global state

const App = () => {

  return (
    <Provider store={store}>
      <Container>
        <h1>Add Skills to your profile</h1>
        <SkillsView />
      </Container>
    </Provider>
  )
}

export default App;
