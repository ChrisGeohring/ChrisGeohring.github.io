import React, { ReactElement } from "react";
import { Row, Container } from "reactstrap";
import "./index.scss";
import ProjectCard, { Project } from "../../components/ProjectCard";
import projectData from "./projects.json";
const Projects = (): ReactElement => {
  const projects = projectData.projects;
  return (
    <section id="projects">
      <Container id="projects-container">
        <div id="pinner">
          <div id="projects-blurb">
            <br />
            <br />
            <h2>Projects</h2>
            <br />
            <br />
            <Row className="justify-content-center">
              {projects.map((project: Project) => {
                return (
                  <ProjectCard
                    title={project.title}
                    text={project.text}
                    languages={project.languages}
                    link={project.link}
                  />
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
