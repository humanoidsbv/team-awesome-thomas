import { ChangeEvent, FormEvent, RefObject, useContext, useRef, useState } from "react";

import { Button } from "../../button";
import { Input } from "../input";
import * as Types from "../../../types";
import { postTeamMember } from "../../../services/post-team-member";
import { StoreContext } from "../../store-context";
import * as Styled from "./TeamMemberForm.styled";

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

  const { teamMembers, setTeamMembers } = useContext(StoreContext);

  const [newTeamMember, setNewTeamMember] = useState<Types.TeamMember>(defaultMember);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current?.checkValidity()) {
      const response = await postTeamMember(JSON.stringify(newTeamMember));

      if (response instanceof Error) {
        console.error("Something went wrong.");
        return;
      }
      setTeamMembers([...teamMembers, response]);
      handleClose();
    }
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
