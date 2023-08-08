import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <div className="fs-2" style={{ margin: "50px" }}>
              Did you lose or find an item? Please upload its details here.
            </div>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputName1" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputNumber1" className="form-label">
                  Contact Number
                </label>
                <input
                  type="num"
                  className="form-control"
                  id="exampleInputNumber1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputFola1" className="form-label">
                  Found or Lost at
                </label>
                <input
                  type="fola"
                  className="form-control"
                  id="exampleInputFola1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputImage1" className="form-label">
                  Image of the item
                </label>
                <input type="file" className="form-control" id="file-input" name="ImageStyle" />
              </div>
              <div className="mb-3">
                <label for="exampleInputFol1" className="form-label">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Item Found
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Item Lost
                    </label>
                  </div>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
