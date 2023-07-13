import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";

export const MoreIcon = () => {
  return (
    <div className="icon-container">
      <img src="assets/more.svg" alt="More Icon" className="discover-icon" />
      <SmallTitle value="More" />
    </div>
  );
};
