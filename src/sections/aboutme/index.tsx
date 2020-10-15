import React, { ReactElement } from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const AboutMe = (): ReactElement => {
  return (
    <section id="about">
      <Container>
        <div id="aboutme-blurb">
          <h2>About Me</h2>
          <p>
            I'm a Software Engineer from Fort Collins, Colorado and currently living in San Diego, California. I began
            programming in 2014 at Colorado State University, the first language being Java. Later on in the bachelors
            program we used C++, and Python as well.
          </p>
          <p>
            In the summer of 2015 I took on an internship with HP in Fort Collins to help develop web services to
            support the HP Jet Advantage Capture App. This experience exposed me to writing code that is deployed and
            used in the real world with HP Customers, while finishing up my bachelors in Computer Science.
          </p>
          <p>
            My summer 2015 internship turned into a year round role begining that Fall which lasted until my graduation
            in 2017. I then joined as a full time employee. Throughout my time as an intern, I helped flesh out more
            features for our suite of microservies that Jet Advantage Capuure was using for document sending. This
            feature is also implemented in the HP Smart App, known as SmartTasks.
          </p>
          <p>
            As a full time employee in Fort Collins, I helped develop the PageLift technology that is used in
            JetAdvantageCapture and the HP Smart App. This feature, written in C++, lets you capture documents using
            your cell phone camera. It automatically detects borders, performs an image transform, and finally image
            enhancement. I was in charge of keeping the feature performant on a range of smartphones, and utilized
            techniques such as threading to gain speed increases where it was applicable.
          </p>
          <p>
            In 2018, I took a job in San Diego for a full stack development role for HP Reveal. On HP Reveal I worked on
            Ruby On Rails based micro services, running on docker containers in AWS. I also worked on the
            Reveal/LinkReader applications for iOS and Android, writing new features and fixing bugs where necessary. I
            had the pleasure of working directly with HP Labs on Secure QR Codes, which was an offering for solving
            anti-counterfeit packaging.
          </p>
          <p>
            In early 2020, the HP Reveal solution was sold to a third party vendor. I shifted to a new project that uses
            web based technology in order to write code once, and deploy everywhere (think react native, or ionic
            capacitor). This project has had me be involved with writing code with React, Android, iOS, Windows & Mac.
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
};

export default AboutMe;
