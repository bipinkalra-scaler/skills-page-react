import React from "react";
import { Segment, Header } from 'semantic-ui-react';
import SkillsTable from "../components/my-skills/SkillsTable";
import SkillsForm from "../components/my-skills/SkillsForm";
import { SkillsContextProvider } from "../context/SkillsContext";

const SkillsView = () => {
  return (
    <SkillsContextProvider>
      <Segment basic>
        <Header as="h3">Skills</Header>
        <SkillsForm />
        <SkillsTable />
      </Segment>
    </SkillsContextProvider>
  )
}

export default SkillsView;