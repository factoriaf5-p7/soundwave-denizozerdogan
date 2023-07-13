import { Image } from "semantic-ui-react";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";

export const MoreIcon = () => {
  return (
    <div className="icon-container">
      <Image
        centered
        size="mini"
        src="/more.svg"
        alt="More Icon"
        className="discover-icon"
      />
      <SmallTitle value="More" />
    </div>
  );
};
