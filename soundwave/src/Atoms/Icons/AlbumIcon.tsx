import { Image } from "semantic-ui-react";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";

export const AlbumIcon = () => {
  return (
    <div className="icon-container">
      <Image
        centered
        size="mini"
        src="/albums.svg"
        alt="Album Icon"
        className="discover-icon"
      />
      <SmallTitle value="Albums" />
    </div>
  );
};
