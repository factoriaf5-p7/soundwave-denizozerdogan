import "./SmallText.css";

type SmallTextFieldProps = {
  value: string;
};

export const SmallTextField = ({ value }: SmallTextFieldProps) => {
  return <p id="small-text-field">{value}</p>;
};
