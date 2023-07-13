import { Title } from "../../Atoms/Title/Title";
import { SmallTextField } from "../../Atoms/SmallText/SmallText";
import { ChartIcon } from "../../Atoms/Icons/ChartIcon";
import { AlbumIcon } from "../../Atoms/Icons/AlbumIcon";
import { MoreIcon } from "../../Atoms/Icons/MoreIcon";
import "./Discover.css";
import { AlbumCover } from "../../Atoms/AlbumCover/AlbumCover";

export const Discover = () => {
  return (
    <div id="discover-section">
      <div className="title-icons-text">
        <div className="title">
          <Title text="Discover new music" />
        </div>
        <div className="icons">
          <ChartIcon />
          <AlbumIcon />
          <MoreIcon />
        </div>
        <div className="text">
          <SmallTextField value="By joining you can benefit by listening to the latest albums released." />
        </div>
      </div>
      <div className="album-covers-section">
        <div className="album-covers">
          <AlbumCover />
        </div>
      </div>
    </div>
  );
};
