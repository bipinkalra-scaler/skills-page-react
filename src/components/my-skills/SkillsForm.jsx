import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { SkillsContext } from "../../context/SkillsContext";
import SearchableDropDown from "../dropdown/SearchableDropDown";
import { skillsList } from "../../constants/skills";

const SkillsForm = () => {
  // let name = useFormInput("");
  // let name = null;
  const [name, setName] = useState()

  const [state, dispatch] = useContext(SkillsContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_SKILL",
      payload: { id: _.uniqueId(10), name: name }
    });

    // name.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="2" style={{alignItems: 'center'}}>
          <Form.Field width={12}>
            {/* <Input placeholder="Enter Name" {...name} required /> */}
            <SearchableDropDown
              list={skillsList}
              // handleOnChange = {value => name = value}
              handleOnChange = {value => setName(value)}
            />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Skill
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  )
}

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   };

//   const handleReset = () => {
//     setValue("");
//   };

//   return {
//     value,
//     onChange: handleChange,
//     onReset: handleReset
//   };
// }

export default SkillsForm;