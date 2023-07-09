import { Button as SemanticButton } from 'semantic-ui-react';
import './Button.css'

type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const Button = ({ onClick, label }: ButtonProps) => {
  return <SemanticButton on onClick={onClick} id="landing-page-button">{label}</SemanticButton >;
};