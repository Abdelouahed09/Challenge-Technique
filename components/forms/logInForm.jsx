import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import logInFormStyle from "./logInForm.module.css";
import { FcGoogle } from "react-icons/fc";
import { get } from "../../db/level";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/user/userSlice";
import { useRouter } from "next/router";
import { USER_DB } from "../../db/constant";
import Link from "next/link";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const OnSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const value = await get(USER_DB, email, password);
      dispatch(addUser(value));
      router.push("/dashboard/listing");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <Row className="m-0 p-0">
        <Col
          className={logInFormStyle.sideForm}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          xxs={12}
        >
          <h1>Welcome back</h1>
          <h6 className={logInFormStyle.formTitle}>
            Welcome back! Please enter your details.
          </h6>
          <Form
            onSubmit={(e) => {
              OnSubmitSignIn(e);
            }}
            className={logInFormStyle.userForm}
          >
            <Form.Group>
              <Form.Label className={logInFormStyle.label}>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className={logInFormStyle.userInputField}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={logInFormStyle.label}>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
                className={logInFormStyle.userInputField}
              />
            </Form.Group>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} xxs={12}>
              <input type="checkbox" className={logInFormStyle.formCheckbox} />
              <p className={logInFormStyle.checkboxText}>Remember me</p>
              <a className={logInFormStyle.forgotPswrd}>Forgot password?</a>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} xxs={12}>
              <Button type="submit" className={logInFormStyle.signInBtn}>
                Sign In
              </Button>
            </Col>
          </Form>
          <Button className={logInFormStyle.socialButton}>
            <FcGoogle className={logInFormStyle.google} size={23} /> Sign In
            with Google
          </Button>
          <div className={logInFormStyle.text}>
            Don&apos;t have an account?
            <Link
              href="/authentication/signup"
              className={logInFormStyle.signUp}
            >
              Sign up for free
              <div className={logInFormStyle.line}></div>
            </Link>
          </div>
        </Col>
        <Col
          className={logInFormStyle.sideImage}
          xl={8}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          xxs={12}
        ></Col>
      </Row>
    </>
  );
}
