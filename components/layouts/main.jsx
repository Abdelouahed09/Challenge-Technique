import React from "react";
import { Container, Row } from "react-bootstrap";
import StyleMainLayout from "./main.module.css";
export default function Main({ children }) {
  return (
    <>
      <Container fluid className={StyleMainLayout.container}>
        <Row className="m-0">{children}</Row>
      </Container>
    </>
  );
}
