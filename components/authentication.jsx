import React from "react";
import { Col } from "react-bootstrap";
import StyleAuthentication from "./authentication.module.css";
import LogInForm from "./forms/logInForm";
// import Slider from "./reviews/sliderReviews";

export default function Auth() {
  return (
    <>
      <Col
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        xxs={12}
        className={StyleAuthentication.leftSide}
      >
        <LogInForm />
      </Col>
      <Col
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        xxs={12}
        className={StyleAuthentication.img1}
      >
        {/* <Slider /> */}
      </Col>
    </>
  );
}
