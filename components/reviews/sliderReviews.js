import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import StyleSlider from "./sliderReviews.module.css";
import { Container, Row, Card, Image } from "react-bootstrap";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  }, // Select Item Number
  autoplay: true,
  dots: false,
};

export default function Slider() {
  return (
    <Container className={StyleSlider.container}>
      <OwlCarousel className={StyleSlider.owl} loop {...options} navElement>
        <div>
          <Card className={StyleSlider.card}>
            <div className={StyleSlider.cardDetails}>
              <i className="fas fa-quote-left"></i>
              <p className="content mb-3 mx-2">
                We are excuted to support Untitled create this innovative and
              </p>
              <Row className={StyleSlider.userDetails}>
                <h4>Johanna Kollar</h4>
                <p>Strategic Development Manager</p>
                <Image
                  roundedCircle
                  src="https://i.imgur.com/oW8Wpwi.jpg"
                  className={StyleSlider.img}
                  alt=""
                />
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className={StyleSlider.card}>
            <div className={StyleSlider.cardDetails}>
              <i className="fas fa-quote-left"></i>
              <p className="content mb-3 mx-2">
                We are happy to part of Untitled and offer our subscribers in
              </p>
              <Row className={StyleSlider.userDetails}>
                <h4>Marielle Haag</h4>
                <p>Accountant</p>
                <Image
                  roundedCircle
                  src="https://i.imgur.com/gazoShk.jpg"
                  className={StyleSlider.img}
                  alt=""
                />
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className={StyleSlider.card}>
            <div className={StyleSlider.cardDetails}>
              <i className="fas fa-quote-left"></i>
              <p className="content mb-3 mx-2">
                We are happy to part of Untitled and offer our subscribers in
              </p>
              <Row className={StyleSlider.userDetails}>
                <h4>Marielle Haag</h4>
                <p>Accountant</p>
                <Image
                  roundedCircle
                  src="https://i.imgur.com/gazoShk.jpg"
                  className={StyleSlider.img}
                  alt=""
                />
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className={StyleSlider.card}>
            <div className={StyleSlider.cardDetails}>
              <i className="fas fa-quote-left"></i>
              <p className="content mb-3 mx-2">
                We are excuted to support Untitled create this innovative and
              </p>
              <Row className={StyleSlider.userDetails}>
                <h4>Johanna Kollar</h4>
                <p>Strategic Development Manager</p>
                <Image
                  roundedCircle
                  src="https://i.imgur.com/oW8Wpwi.jpg"
                  className={StyleSlider.img}
                  alt=""
                />
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className={StyleSlider.card}>
            <div className={StyleSlider.cardDetails}>
              <i className="fas fa-quote-left"></i>
              <p className="content mb-3 mx-2">
                We are happy to part of Untitled and offer our subscribers in
              </p>
              <Row className={StyleSlider.userDetails}>
                <h4>Marielle Haag</h4>
                <p>Accountant</p>
                <Image
                  roundedCircle
                  src="https://i.imgur.com/gazoShk.jpg"
                  className={StyleSlider.img}
                  alt=""
                />
              </Row>
            </div>
          </Card>
        </div>
      </OwlCarousel>
    </Container>
  );
}
