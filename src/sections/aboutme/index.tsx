import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.scss';

export default class AboutMe extends Component<{}, {}> {
  // render will know everything!
  render() {
    return (
      <section id="about">
        <Container id="aboutme-column">
          <div id="aboutme-blurb">
            <h2>About Me</h2>
            <p>
              I'm from Fort Collins, Colorado. I started programming in 2014 at Colorado State University, with my first
              languages being Java, C++, and Python.
              <br />
              In the summer of 2016 I started an internship with HP in Fort Collins to help develop web services.
              <br />
              <br />
              My summer internship turned into a year round job until my graduation in 2017. I then joined as a full
              time employee.
              <br />
              In 2018, I took a job in San Diego for a full stack development role for HP Reveal. I continue to work for
              HP today.
            </p>
            <br />
            <Row id="images">
              <Col xs="6">
                <a href="https://www.colostate.edu">
                  <img alt="ColoradoState" src="./rams.png" width="120" height="120" />
                </a>
              </Col>
              <Col xs="6">
                <a href="https://www.hp.com">
                  <img alt="HP" src="./hp.png" width="120" height="120" />
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
