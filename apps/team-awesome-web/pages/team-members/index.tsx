import React, { FormEvent, useEffect, useRef, useContext, useState } from "react";
import { Modal } from "../../src/components/modal";
import { Header } from "../../src/components/header";
import { SubHeader } from "../../src/components/sub-header";
import { TeamMembers } from "../../src/components/team-members";
import { Button } from "../../src/components/button";
import { ReactComponent as PlusIcon } from "../../public/icons/plus-icon.svg";
import { TeamMemberForm } from "../../src/components/forms/team-member-form";

import Types from "../../src/types";

const pageTitle = "Team members";

const TeamMembersPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      <Header />
      <SubHeader title={pageTitle} count="22 Humanoids">
        <Button>
          <PlusIcon />
          New Humanoid
        </Button>
      </SubHeader>
      <TeamMembers />
      <Modal
        isActive={isModalActive}
        onClose={() => {
          setIsModalActive(false);
          setNewTimeEntry(defaultEntry);
        }}
        title="New time entry"
      >
        <TeamMemberForm />
      </Modal>
    </>
  );
};

export default TeamMembersPage;
