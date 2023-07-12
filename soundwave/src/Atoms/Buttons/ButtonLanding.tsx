import { Button } from "semantic-ui-react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const ButtonLanding = ({ onClick, label }: ButtonProps) => {
  return (
    <Button on onClick={onClick} id="landing-page-button">
      {label}
    </Button>
  );
};
