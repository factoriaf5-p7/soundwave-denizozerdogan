import { Container } from 'semantic-ui-react';
import { Title } from '../../Atoms/Title/Title';
import { Button } from '../../Atoms/Button/Button';
import { LargeTextField } from '../../Atoms/LargeText/LargeText';
import { HeroImage } from '../../Atoms/HeroImage/HeroImage';
import './LandingBody.css'
import { Link } from 'react-router-dom';

export const LandingBody = () => {
  return (
    <div className="hero-image-section">
      {/* Mobile Version */}
      <Container id="content-mobile">
        <div id="centered-content">
          <Title text="Feel The Music" />
          <LargeTextField value="Stream over 20 thousand songs with one click"/>
          <Link to="/join">
           <Button label="Join Now" onClick={() => {}} />
          </Link>   
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </Container>

      {/* Laptop Version */}
      <div id="content-laptop">
        <div id="overlay">
          <Title text="Feel The Music" />
          <LargeTextField value="Stream over 20 thousand songs with one click" />
          <Link to="/join">
           <Button label="Join Now" onClick={() => {}} />
          </Link>  
          <div className="circle-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          </div>
        </div>
        <HeroImage />
      </div>
    </div>
  );
};
