import React, { FormEvent, useEffect, useRef, useContext, useState } from "react";

import { Select } from "apps/team-awesome-web/src/components/forms/select";
import { Modal } from "../../src/components/modal";
import { Header } from "../../src/components/header";
import { SubHeader } from "../../src/components/sub-header";
import { TeamMembers } from "../../src/components/team-members";
import { Button } from "../../src/components/button";
import { ReactComponent as PlusIcon } from "../../public/icons/plus-icon.svg";
import { TeamMemberForm } from "../../src/components/forms/team-member-form";
import { getTeamMembers } from "../../src/services";
import * as Styled from "./TeamMembers.styled";

import Types from "../../src/types";

const pageTitle = "Team members";

interface TeamMembersProps {
  errorMessage?: string;
  teamMembers: Types.TeamMember[];
}

export const getServerSideProps = async () => {
  const response = await getTeamMembers();

  if (response instanceof Error) {
    return {
      props: {
        errorMessage: "There was an error fetching entries",
        teamMembers: [],
      },
    };
  }
  return {
    props: {
      teamMembers: response,
    },
  };
};

const TeamMembersPage = ({ errorMessage, teamMembers }: TeamMembersProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const subheaderCount = `${teamMembers.length} Humanoid${teamMembers.length > 1 && "s"}`;

  return (
    <>
      <Header />
      <SubHeader title={pageTitle} count={subheaderCount}>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New Humanoid
        </Button>
      </SubHeader>
      <TeamMembers errorMessage={errorMessage} teamMembers={teamMembers} />
      <Modal
        isActive={isModalActive}
        onClose={() => {
          setIsModalActive(false);
        }}
        title="New Humanoid"
      >
        <TeamMemberForm
          handleClose={() => {
            setIsModalActive(false);
          }}
        />
      </Modal>
    </>
  );
};

export default TeamMembersPage;
