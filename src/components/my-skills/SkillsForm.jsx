// import React, { useState, useContext } from "react";
import React, { useState } from "react";
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';
// import { SkillsContext } from "../../context/SkillsContext";
import SearchableDropDown from "../dropdown/SearchableDropDown";
import { skillsList } from "../../constants/skills";
import { addSkill } from "../../store/actions/skills";
import { useDispatch } from "react-redux";

const SkillsForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState()
  const level = useFormInput("");

  // const [state, dispatch] = useContext(SkillsContext);

  const onSubmit = () => {
    dispatch(addSkill({ id: _.uniqueId(10), name: name, level: level.entry }))

    level.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3" style={{alignItems: 'center'}}>
          <Form.Field width={6}>
            {/* <Input placeholder="Enter Name" {...name} required /> */}
            <SearchableDropDown
              list={skillsList}
              // handleOnChange = {value => name = value}
              handleOnChange = {value => setName(value)}
            />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Level" {...level} required />
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

const useFormInput = (initialEntry) => {
  const [entry, setEntry] = useState(initialEntry);

  const handleChange = e => {
    setEntry(e.target.value);
  };

  const handleReset = () => {
    setEntry("");
  };

  return {
    entry,
    onChange: handleChange,
    onReset: handleReset
  };
}

export default SkillsForm;