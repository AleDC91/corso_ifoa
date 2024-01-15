import React, { Component } from "react";
import "../styles/ProfileComponent.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

export default class ProfileComponent extends Component {
  render() {
    return (
      <div className="profile-page pt-5">
        <h1 className="text-white">Edit Profile</h1>
        <div className="tabella-profilo">
          <Row>
            <Col xs={12} sm={3}>
              <img src="/images/avatar.png" alt="avatar" className="m-3" />
            </Col>
            <Col xs={12} sm={9} className="p-3 px-4">
              <div class="text-bg-secondary px-2 py-1 "> Strieve student</div>
              <div class="my-3 text-white">
                Language
                <div class="dropdown change-genre border-bottom pb-4 mt-1">
                  <div className="select-genre">
                    <Form.Select
                      aria-label="Default select example"
                      className="form-genres"
                    >
                      <option value="">English</option>
                      <option value="2">lingua 1</option>
                      <option value="3">lingua 2</option>
                      <option value="4">lingua 3</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={3}></Col>
            <Col xs={12} sm={9} className=" px-4 text-white">
              <div class="col border-bottom ">
                <div class=" px-2 py-1 mb-3 fs-5"> Maturity settings:</div>
                <div class="text-bg-dark px-2 py-1 mb-3 opacity-100 fw-bold">
                  {" "}
                  ALL MATURITY RATINGS
                </div>
                <div class=" px-2 py-1 fs-7 mb-3 opacity-100 ">
                  {" "}
                  Show of all maturity ratings for this profile
                </div>
                <button class="btn btn-outline-secondary bg-netflix-bg-color rounded-0 px-4 py-1 fs-7 mb-3">
                  EDIT
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3}></Col>
            <Col xs={12} sm={9} className=" px-4 text-white">
              <>
                <div className=" px-2 py-1 fs-5 my-3">Autoplay controls</div>
                <div className="form-check ms-4">
                  <input
                    className="form-check-input rounded-0 fs-4 border bg-netflix-bg-color"
                    type="checkbox"
                    defaultValue=""
                    id=""
                    defaultChecked=""
                    style={{backgroundColor: "#141414"}}
                  />
                  <label className="form-check-label fs-7" htmlFor="">
                    Autoplay next episode in a series on all devices
                  </label>
                </div>
                <div className="form-check ms-4 pb-4">
                  <input
                    className="form-check-input  rounded-0 fs-4 border bg-netflix-bg-color"
                    type="checkbox"
                    defaultValue=""
                    id=""
                    defaultChecked="true"
                    style={{backgroundColor: "#141414"}}
                  />
                  <label className="form-check-label fs-7" htmlFor="">
                    Autoplay previews while browsing on all devices
                  </label>
                </div>
              </>
            </Col>
          </Row>

        </div>
        <div class="bottom-btns d-flex justify-content-between mb-5 p-3">
            <a  class="btn btn-light rounded-0 px-4 fs-7" href="#" role="button">SAVE</a>
            <a  class="btn  btn-netflix-bg-color text-secondary border-secondary rounded-0 px-4 fs-" href="#" role="button">CANCEL</a>
            <a  class="btn  btn-netflix-bg-color text-secondary border-secondary rounded-0 px-4 fs-" href="#" role="button">DELETE PROFILE</a>
        
        </div>
      </div>
    );
  }
}
