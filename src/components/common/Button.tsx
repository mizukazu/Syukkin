import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  color: string;
  type: string;
  onClick: () => unknown;
}

export const Button = (props: ButtonProps): ReactElement => {
  return <div>test</div>;
};
