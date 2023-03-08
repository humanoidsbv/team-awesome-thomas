import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_TEAM_MEMBER } from "../../../graphql/team-members/mutations";
import { Button } from "../../button";
import { Input } from "../input";
import * as Styled from "./TeamMemberForm.styled";
import * as Types from "../../../types";

interface FormProps {
  handleClose: () => void;
}

export const TeamMemberForm = ({ handleClose }: FormProps) => {
  const defaultMember: Types.TeamMember = {
    avatar: "",
    client: "",
    emailAddress: "",
    firstName: "",
    id: 0,
    lastName: "",
    role: "",
    startTimestamp: "1970-01-01T00:00:00.000Z",
  };

  const [newTeamMember, setNewTeamMember] = useState<Types.TeamMember>(defaultMember);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const [addNewTeamMember] = useMutation(ADD_TEAM_MEMBER);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addNewTeamMember({ variables: { ...newTeamMember } });
    handleClose();
  };

  return (
    <Styled.TeamMemberForm ref={formRef} onSubmit={handleSubmit}>
      <Styled.Avatar src="img/avatars/amijs.png" />
      <Input
        errorMessage="Please fill in a valid name"
        label="First name"
        minLength={2}
        name="firstName"
        onChange={handleChange}
        placeholder="First name"
        required
        type="text"
        value={newTeamMember.firstName ?? ""}
      />
      <Input
        errorMessage="Please fill in a valid name"
        label="Last name"
        minLength={2}
        name="lastName"
        onChange={handleChange}
        placeholder="Last name"
        required
        type="text"
        value={newTeamMember.lastName ?? ""}
      />
      <Input
        column="full"
        errorMessage="Please fill in a valid email address"
        label="Email address"
        minLength={6}
        name="emailAddress"
        onChange={handleChange}
        placeholder="Email address"
        required
        type="email"
        value={newTeamMember.emailAddress ?? ""}
      />
      <Input
        column="full"
        label="Short description"
        name="description"
        onChange={handleChange}
        placeholder="Enter a short description (optional)"
        type="textarea"
        value={newTeamMember.description ?? ""}
      />
      <Input
        column="full"
        errorMessage="Please fill in a valid name"
        label="Current client"
        minLength={2}
        name="client"
        onChange={handleChange}
        placeholder="Current client"
        required
        type="text"
        value={newTeamMember.client ?? ""}
      />
      <Styled.FormActions>
        <Button onClick={handleClose} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={!formRef.current?.checkValidity()}>
          Add Humanoid
        </Button>
      </Styled.FormActions>
    </Styled.TeamMemberForm>
  );
};
