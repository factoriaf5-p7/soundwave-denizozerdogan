import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";

export const AlbumIcon = () => {
  return (
    <div className="icon-container">
      <img src="assets/albums.svg" alt="Album Icon" className="discover-icon" />
      <SmallTitle value="Albums" />
    </div>
  );
};
