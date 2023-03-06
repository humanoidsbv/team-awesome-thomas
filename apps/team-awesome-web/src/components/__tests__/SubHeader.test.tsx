import React from "react";
import renderer from "react-test-renderer";
import { SubHeader } from "../sub-header";

it("Subheader renders correctly", () => {
  const tree = renderer.create(<SubHeader count="420" title="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
