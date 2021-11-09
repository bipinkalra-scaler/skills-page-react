import React from 'react';
import './App.css';
import SearchableDropDown from './components/dropdown/SearchableDropdown';

const list = [
  {'id': 1, 'data': 'Python'},
  {'id': 2, 'data': 'JS'},
  {'id': 3, 'data': 'C++'},
  {'id': 4, 'data': 'CSS'},
  {'id': 5, 'data': 'RoR'},
]

const App = () => {
  return (
    <div className="App">
      <SearchableDropDown list={list} />
    </div>
  )
}

export default App;
