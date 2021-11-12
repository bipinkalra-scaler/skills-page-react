// import React, { useState, useContext } from "react";
import React, { useState } from "react";
import { Segment, Table, Button, Icon } from 'semantic-ui-react';
// import { SkillsContext } from "../../context/SkillsContext";
import { useDispatch, useSelector } from "react-redux";
import { delSkill } from "../../store/actions/skills";
import { listSkills } from "../../store/getters/skills";

const SkillsTable = () => {

  const skillsList = useSelector(listSkills());
  console.log(skillsList)

  const dispatch = useDispatch();
  
  // const [state, dispatch] = useContext(SkillsContext);
  const [selectedId, setSelectedId] = useState();

  // const deleteSkill = id => {
  //   dispatch({
  //     type: "DEL_SKILL",
  //     payload: id
  //   });
  // };

  const deleteSkill = id => {
    dispatch(delSkill(id));
  }

  const onRemoveSkill = () => {
    deleteSkill(selectedId);
    setSelectedId(null);
  }

  const rows = skillsList.skills.map(skill => (
    <Table.Row
      key={skill.id}
      onClick={() => setSelectedId(skill.id)}
      active={skill.id === selectedId}
    >
      <Table.Cell>{skill.id}</Table.Cell>
      <Table.Cell>{skill.name}</Table.Cell>
      <Table.Cell>{skill.level}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Skill</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={onRemoveSkill}
              >
                <Icon name="trash" />
                Remove Skill
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

export default SkillsTable;