import { SmallTitle } from "../SmallTitle/SmallTitle";
import "./Icons.css";

export const ChartIcon = () => {
  return (
    <div className="icon-container">
      <img
        src="assets/microphone.svg"
        alt="Chart Icon"
        className="discover-icon"
      />
      <SmallTitle value="Charts" />
    </div>
  );
};
