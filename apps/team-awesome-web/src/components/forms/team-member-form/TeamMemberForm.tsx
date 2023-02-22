import { ChangeEvent, RefObject } from "react";

import { Button } from "../../button";
import { Input } from "../input";
import * as Styled from "./TeamMemberForm.styled";
import * as Types from "../../../types";

interface FormProps {
  // handleSubmit: () => void;
  // handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleClose: () => void;
  // formRef: RefObject<HTMLFormElement>;
}

export const TeamMemberForm = ({}: // handleSubmit,
// handleChange,
// handleClose,
// formRef,
FormProps) => {
  return (
    <Styled.TeamMemberForm>
      <Styled.Avatar src="img/avatars/amijs.png" />
      <Input
        errorMessage="Please fill in a valid name"
        label="First name"
        minLength={2}
        name="firstName"
        onChange={false}
        placeholder="First name"
        required
        type="text"
        value={false}
      />
      <Input
        errorMessage="Please fill in a valid name"
        label="Last name"
        minLength={2}
        name="lastName"
        onChange={false}
        placeholder="Last name"
        required
        type="text"
        value={false}
      />
      <Input
        column="full"
        errorMessage="Please fill in a valid email address"
        label="Email address"
        minLength={6}
        name="emailAddress"
        onChange={false}
        placeholder="Email address"
        required
        type="email"
        value={false}
      />
      <Input
        column="full"
        label="Short description"
        name="description"
        onChange={false}
        placeholder="Enter a short description (optional)"
        type="textarea"
        value={false}
      />
      <Input
        column="full"
        errorMessage="Please fill in a valid name"
        label="Current client"
        minLength={2}
        name="client"
        onChange={false}
        placeholder="Current client"
        required
        type="text"
        value={false}
      />
      <Styled.FormActions>
        <Button variant="secondary">Cancel</Button>
        <Button type="submit">Add Humanoid</Button>
      </Styled.FormActions>
    </Styled.TeamMemberForm>
  );
};
