import { Button } from "semantic-ui-react";

interface ButtonJoinProps {
  onClick: () => void;
}

export const ButtonJoin = ({ onClick }: ButtonJoinProps) => {
  return (
    <Button id="join-page-button" primary onClick={onClick}>
      Join Now
    </Button>
  );
};
