import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="aboutus-title">About BruinPal</div>
      <p className="aboutus-desc">BruinPal is a trading platform made by Bruins, for Bruins. In BruinPal, you can sell your swipes, share rides, and give or get academic help!</p>
      <div style={{margin:"3%"}}>
        <h2 style={{margin:"1% auto", textAlign:"center"}}>Contributors</h2>
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
      <Footer />
    </React.Fragment>
  );
}

export default AboutUs;
