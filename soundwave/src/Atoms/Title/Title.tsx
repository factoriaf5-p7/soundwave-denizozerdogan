import { Header } from "semantic-ui-react";
import "./Title.css";

export const Title = ({ text }: { text: string }) => {
  return (
    <Header as="h1" id="title" style={{}}>
      {text}
    </Header>
  );
};
