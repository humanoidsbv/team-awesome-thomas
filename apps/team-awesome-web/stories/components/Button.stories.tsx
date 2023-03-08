import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../../src/components/button";

export const Primary = () => (
  <Button onClick={action("clicked")} variant="primary">
    Primary button
  </Button>
);
export const Secondary = () => (
  <Button onClick={action("clicked")} variant="secondary">
    Secondary button
  </Button>
);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: "Button",
    onClick: { action: "clicked" },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    variant: { options: ["secondary", "primary"], control: { type: "select" } },
  },
};
