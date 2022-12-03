import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <React.Fragment className="aboutus-wrapper">
      <div data-testid="aboutus-navbar">
      <Navbar/>
      </div>
      <div className="aboutus-title">About BruinPal</div>
      <p className="aboutus-desc">
      Life at UCLA can be difficult. BruinPal is a trading platform made by Bruins, for Bruins. 
      It connects Bruins with each other to make everyone's lives a bit easier. 
      </p>
      <h2 className="aboutus-small-title">What we do</h2>
      <div className="aboutUsList">
          <div>
            <h4 className="aboutus-task-title">Tutoring</h4>
            We've all needed help in a class but never knew where to get it. Offer to help others or ask for help yourself.
          </div>
          <div>
            <h4 className="aboutus-task-title">Meal Swipes</h4>
            Use too many swipes or have some extra? Exchange them here.
          </div>
          <div>
            <h4 className="aboutus-task-title">Rides</h4>
            It's tough to get around Los Angeles without a car. Find rideshares or make your own here.
          </div>
      </div>
      <h2 className="aboutus-small-title">Contributors</h2>
      <div data-testid="aboutus-container">
      <Container style={{margin:"1% auto", textAlign:"center"}}>
            <Row justify="center">
              <Col lg={2} md={4} sm={12}>
                <img 
                  className="contributor-avatar" 
                  src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
                  alt="avatar" />
                <div className="contributor-name">Danny Lee</div>
                <div className="contributor-bio">
                This is a placeholder. Lorem ipsum dolor sit amet.
              </div>
                
              </Col>
              <Col lg={2} md={4} sm={12}>
              <img 
                  className="contributor-avatar" 
                  src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
                  alt="avatar" />
              <div className="contributor-name">Ruoye Wang</div>
              <div className="contributor-bio">
                This is a placeholder. Lorem ipsum dolor sit amet.
              </div>
              </Col>
              <Col lg={2} md={4} sm={12}>
              <img 
                  className="contributor-avatar" 
                  src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
                  alt="avatar" />
              <div className="contributor-name">Devin Yerasi</div>
              <div className="contributor-bio">
                This is a placeholder. Lorem ipsum dolor sit amet.
              </div>
              </Col>
              <Col lg={2} md={3} sm={12}>
              <img 
                  className="contributor-avatar" 
                  src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
                  alt="avatar" />
              <div className="contributor-name">Hussein Hassan</div>
              <div className="contributor-bio">
                This is a placeholder. Lorem ipsum dolor sit amet.
              </div>
              </Col>
              <Col lg={2} md={3} sm={12}>
              <img 
                  className="contributor-avatar" 
                  src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
                  alt="avatar" />
              <div className="contributor-name">Brian Compton</div>
              <div className="contributor-bio">
                This is a placeholder. Lorem ipsum dolor sit amet.
              </div>
              </Col>
            </Row>
        </Container>
        </div>
      <div data-testid="aboutus-footer">
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default AboutUs;