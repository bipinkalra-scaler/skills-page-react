import { ADD_SKILL, DEL_SKILL } from "../action-types/skills";

const initialState = {
  skills: []
}

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SKILL:
      return {
        skills: [...state.skills, action.payload]
      };

    case DEL_SKILL:
      return {
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };

    default:
      return state;
  }
};

export default skillsReducer;