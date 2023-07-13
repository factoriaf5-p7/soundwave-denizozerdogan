import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";
import { Image } from "semantic-ui-react";

export const ChartIcon = () => {
  return (
    <div className="icon-container">
      <Image
        centered
        size="mini"
        src="/microphone.svg"
        alt="Chart Icon"
        className="discover-icon"
      />
      <SmallTitle value="Charts" />
    </div>
  );
};
