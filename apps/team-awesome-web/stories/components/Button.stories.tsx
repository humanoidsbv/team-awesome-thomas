import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../../src/components/button";
import { ReactComponent as PlusIcon } from "../../public/icons/plus-icon.svg";
import { ReactComponent as CrossIcon } from "../../public/icons/close.svg";

export const Primary = ({ icon, label, variant, onClick }) => (
  <Button onClick={onClick} variant={!variant ? "primary" : variant}>
    {icon === "Plus" ? <PlusIcon /> : null}
    {!label ? "Primary button" : label}
  </Button>
);

export const Secondary = ({ icon, label, variant, onClick }) => (
  <Button onClick={onClick} variant={!variant ? "secondary" : variant}>
    {icon === "Plus" ? <PlusIcon /> : null}
    {!label ? "Secondary button" : label}
  </Button>
);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    icon: {
      options: ["None", "Plus"],
      type: "select",
    },
    label: { control: "text" },
    variant: {
      options: ["primary", "secondary"],
      type: "select",
    },
    onClick: { action: "clicked" },
  },
};
