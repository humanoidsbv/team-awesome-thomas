import React from "react";

import { Button } from "../../src/components/button";
import { ReactComponent as PlusIcon } from "../../public/icons/plus-icon.svg";

export const Primary = ({ ...args }) => (
  <Button
    disabled={args.disabled}
    onClick={args.onClick}
    variant={!args.disabled ? "primary" : args.disabled}
  >
    {args.icon === "Plus" ? <PlusIcon /> : null}
    {!args.label ? "Primary button" : args.label}
  </Button>
);

export const Secondary = ({ ...args }) => (
  <Button
    disabled={args.disabled}
    onClick={args.onClick}
    variant={!args.variant ? "secondary" : args.variant}
  >
    {args.icon === "Plus" ? <PlusIcon /> : null}
    {!args.label ? "Secondary button" : args.label}
  </Button>
);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
    icon: {
      options: ["None", "Plus"],
      type: "select",
    },
    label: { control: "text" },
    onClick: { action: "clicked", table: { disable: true } },
    type: { table: { disable: true } },
    variant: {
      options: ["primary", "secondary"],
      type: "select",
    },
  },
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lvXiiymHbNqLdfqyqNc5s5/team_awesome_dashboard?node-id=131-1434&t=UPS9dN5IXoVZQgmv-4",
  },
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lvXiiymHbNqLdfqyqNc5s5/team_awesome_dashboard?node-id=131-1435&t=UPS9dN5IXoVZQgmv-4",
  },
};
