import { ADD_SKILL, DEL_SKILL } from "../action-types/skills";

export const addSkill = (skill) => {
  return {
    type: ADD_SKILL,
    payload: skill
  };
};

export const delSkill = (skillId) => {
  return {
    type: DEL_SKILL,
    payload: skillId
  };
};