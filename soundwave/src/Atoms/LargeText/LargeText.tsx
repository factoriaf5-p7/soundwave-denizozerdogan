type LargeTextFieldProps = {
  value: string;
};

export const LargeTextField = ({ value }: LargeTextFieldProps) => {
  return <p id="large-text-field">{value}</p>;
};
