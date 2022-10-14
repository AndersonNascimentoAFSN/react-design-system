import { Meta, StoryObj } from "@storybook/react";
import { TextInputs, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInputs.Root,
  args: {
    children: [
      <TextInputs.Icon>
        <Envelope />
      </TextInputs.Icon>,
      <TextInputs.Input placeholder="Type your e-mail address" />,
    ],
    placeholder: "Type your e-email address",
    type: "email",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
