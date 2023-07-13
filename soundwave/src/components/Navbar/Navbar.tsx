import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Logo } from "../../Atoms/Logo/Logo";
import { BrandName } from "../../Atoms/BrandName/BrandName";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Menu className="navbar">
      <div className="logo-brand-container">
        <Logo />
        <BrandName />
      </div>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/discover" className="navbar-link">
            Discover
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/join" className="navbar-link join-link">
            Join
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
