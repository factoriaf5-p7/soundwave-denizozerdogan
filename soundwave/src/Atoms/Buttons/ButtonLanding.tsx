import { Button as SemanticButton } from "semantic-ui-react";
import "./ButtonLanding.css";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const ButtonLanding = ({ onClick, label }: ButtonProps) => {
  return (
    <SemanticButton on onClick={onClick} id="landing-page-button">
      {label}
    </SemanticButton>
  );
};
