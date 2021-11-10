import React, { useReducer, createContext } from 'react';

export const SkillsContext = createContext();

const initialState = {
  skills: [
    // {
    //   id: 10,
    //   name: "Something"
    // },
    // {
    //   id: 11,
    //   name: "Something2"
    // }
  ],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return {
        skills: [...state.skills, action.payload]
      };

    case "DEL_SKILL":
      return {
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };

    case "START":
      return {
        loading: true
      };

    case "COMPLETE":
      return {
        loading: false
      };

    default:
      throw new Error();
  }
};

export const SkillsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SkillsContext.Provider value={[state, dispatch]}>
      {props.children}
    </SkillsContext.Provider>
  )
}