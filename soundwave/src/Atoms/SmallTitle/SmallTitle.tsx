import "./SmallTitle.css";

type SmallTitleProps = {
  value: string;
};

export const SmallTitle = ({ value }: SmallTitleProps) => {
  return <h3 id="small-title">{value}</h3>;
};
