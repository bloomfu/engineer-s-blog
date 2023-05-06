import Button from "./Button";

export default {
  title: "My Button",
};

const Template = (args) => <Button {...args} />;

export const ButtonCustom = Template.bind({});

ButtonCustom.args = {
  title: "ホームへ戻る",
};
