/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
