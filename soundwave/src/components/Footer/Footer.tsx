import { Icon } from "semantic-ui-react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
      </div>
      <div className="footer-column">
        <a href="https://twitter.com">
          <Icon name="twitter" />
          <span>Twitter</span>
        </a>
      </div>
      <div className="footer-column">
        <a href="https://facebook.com">
          <Icon name="facebook" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
};
