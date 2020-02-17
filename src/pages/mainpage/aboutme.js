import React from "react"
import { Image, Col, Row } from "react-bootstrap"
import * as myImage from '../../images/me.jpg'

export default class AboutMeSection extends React.Component {
  render() {
    return <section className="">
        <br/><br/>
        <Row>
        <Col sm={4} className="centered">
            <Image src={myImage} alt="Belle And I" style={{maxWidth: '100%', borderRadius: '10px'}}/>
        </Col>
        <Col sm={8}>
            <h3 className="centered">About Me</h3>
            <p>I'm from Fort Collins, Colorado. I started programming in 2014 at Colorado State University, with my first languages being Java, C++, and Python.<br/>In the summer of 2016 I started an internship with HP in Fort Collins to help develop web services.<br/><br/>My summer internship turned into a year round job until my graduation in 2017. I then joined as a full time employee.<br/>In 2018, I took a job in San Diego for a full stack development role for HP Reveal. I continue to work for HP today.</p>
        </Col>
        </Row>
    </section>
  }
}