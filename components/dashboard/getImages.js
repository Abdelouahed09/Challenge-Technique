import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageCard from "./Card";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.NEXT_PUBLIC_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .catch((error) => {
        setImages.showErrors(error.res.data.error);
      });
  };

  return (
    <>
      <Container>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <Row xl={5} lg={3} md={2} sm={1} xs={1} className="g-3">
            {images.map((image) => (
              <Col key={image.id}>
                <ImageCard {...image} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </>
  );
}
