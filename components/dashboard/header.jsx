import React from "react";
import { Col, Row, Button, Form, Tabs, Tab } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import StyleHeader from "./header.module.css";

export default function ListingsHeader() {
  return (
    <>
      <Col
        className={StyleHeader.container}
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Form.Select
          className={StyleHeader.btn}
          aria-label="Default select example"
        >
          <option>Popular</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Row className={StyleHeader.btnGroup}>
          <Col>
            <Row>
              <Tabs
                defaultActiveKey="all"
                id="justify-tab-example"
                className={StyleHeader.tabGroup}
              >
                <Tab
                  className={StyleHeader.tab}
                  eventKey="all"
                  title="All"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="animation"
                  title="Animation"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="branding"
                  title="Branding"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="illustration"
                  title="Illustration"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="mobile"
                  title="Mobile"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="print"
                  title="Print"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="product"
                  title="Product Design"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="typography"
                  title="Typography"
                ></Tab>
                <Tab
                  className={StyleHeader.tab}
                  eventKey="web"
                  title="Web Design"
                ></Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
        <Button className={StyleHeader.btnRow}>
          {" "}
          <BiFilter className={StyleHeader.filterIcon} /> Filters
        </Button>
      </Col>
    </>
  );
}
