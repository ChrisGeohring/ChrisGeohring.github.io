import React from "react";
import { Badge, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./index.scss";
export interface Project {
  title: string;
  text: string;
  languages: string[];
  link?: string;
}

const ProjectCard = (props: Project) => {
  const cardFooter = props.link ? (
    <CardFooter>
      Technologies Used
      <br />
      {props.languages.map(language => {
        return <Badge variant="secondary">{language}</Badge>;
      })}
      <br />
      <br />
      <Button className="button-visit" variant="primary" href={props.link}>
        Visit
      </Button>
    </CardFooter>
  ) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{props.text}</CardText>
      </CardBody>
      {cardFooter}
    </Card>
  );
};

export default ProjectCard;
