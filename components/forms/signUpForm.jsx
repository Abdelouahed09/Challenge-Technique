import React, { useState, useContext } from "react";
import { Col, Form, Button } from "react-bootstrap";
import signUpFormStyle from "./signUpForm.module.css";
import { put } from "../../db/level";
import { USER_DB } from "../../db/constant";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtwo, setPasswordTwo] = useState("");

  const router = useRouter();
  const OnSubmitSignUp = async (e) => {
    e.preventDefault();

    await put(USER_DB, email, {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      passwordtwo,
    });
    router.push("/authentication/signin");
  };

  return (
    <>
      <Col
        className={signUpFormStyle.img}
        xl={5}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        xxs={12}
      ></Col>
      <Col
        className={signUpFormStyle.registrationForm}
        xl={7}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        xxs={12}
      >
        <h1 className={signUpFormStyle.formTitle}>Create your account</h1>
        <Form
          onSubmit={(e) => {
            OnSubmitSignUp(e);
          }}
        >
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>
              First name
            </Form.Label>
            <Form.Control
              type="text"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>Last name</Form.Label>
            <Form.Control
              type="text"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>
              Phone Number
            </Form.Label>
            <Form.Control
              type="number"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>Password</Form.Label>
            <Form.Control
              type="password"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={signUpFormStyle.label}>
              Enter Password Again
            </Form.Label>
            <Form.Control
              type="password"
              className={signUpFormStyle.userInputField}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </Form.Group>
          <Col>
            <input type="checkbox" className={signUpFormStyle.formCheckbox} />
            <p className={signUpFormStyle.checkboxText}>
              I accept the Privacy Policy and the Terms of Service
            </p>
          </Col>
          <Col className={signUpFormStyle.formChecks}>
            <input type="checkbox" className={signUpFormStyle.formCheckbox} />
            <p className={signUpFormStyle.checkboxText}>
              Subscribe to our newsletter
            </p>
          </Col>
          <Button type="submit" className={signUpFormStyle.signUpBtn}>
            Sign Up
          </Button>
        </Form>
      </Col>
    </>
  );
}
