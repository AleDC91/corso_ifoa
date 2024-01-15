import React, { Component } from "react";
import "../styles/SettingsPageComponent.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { BsBadgeHd } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa6";

export default class SettingsPageComponent extends Component {
  render() {
    return (
      <div className="settings-page bg-white py-5">
        <h1 className="text-black">Account</h1>
        <div className="settings-table pb-3 mb-5">
          <Row>
            <Col xs={12} sm={3} className="pt-3">
              <h5 className="opacity-50">MEMBERSHIP & BILLING</h5>
              <Button className="btn text-black rounded-0 shadow-sm mb-5 bottone-member">
                CANCEL MEMBERSHIP
              </Button>
            </Col>
            <Col xs={12} sm={9} className="p-3 px-4">
              <>
                <div className="d-flex justify-content-between mb-2">
                  <div>student@strive.school</div>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    Change account email
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div className="opacity-50">Password: ********</div>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    Change password
                  </a>
                </div>
                <div className="d-flex justify-content-between pb-5 border-bottom">
                  <div className="opacity-50">Phone: 324 434 3242</div>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    Change phone number
                  </a>
                </div>
                <div className="pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <FaCcPaypal className="fs-2 me-3" />
                      admin@strive.school
                    </div>
                    <a href="#" className="text-decoration-none">
                      Update payment info
                    </a>
                  </div>
                  <div className="d-flex justify-content-end mb-2 border-bottom">
                    <a href="#" className="text-decoration-none mb-3">
                      Billing details
                    </a>
                  </div>
                  <div className="d-flex justify-content-end mb-3 my-3">
                    <a href="#" className="text-decoration-none">
                      Redeem gift card
                    </a>
                  </div>
                  <div className="d-flex justify-content-end mb-3 my-3">
                    <a href="#" className="text-decoration-none">
                      Where to buy gift card
                    </a>
                  </div>
                </div>
              </>
            </Col>
          </Row>

          <Row className="border-top">
            <Col xs={12} sm={3} className="pt-3">
              <h5 className="opacity-50">PLAN DETAILS</h5>
            </Col>
            <Col xs={12} sm={9} className="p-3 px-4">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  Premium <BsBadgeHd className="fs-3 ms-3" />
                </div>
                <a href="#" className="text-decoration-none">
                  {" "}
                  Change plan
                </a>
              </div>
            </Col>
          </Row>

          <Row className="border-top">
            <Col xs={12} sm={3} className="pt-3">
              <h5 className="opacity-50">SETTINGS</h5>
            </Col>
            <Col xs={12} sm={9} className="p-3 px-4">
              <>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Parental controls
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Test partecipation
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Manage downloads devices
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Activate a device
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Recent device streaming activity
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <a href="#" className="text-decoration-none">
                    Sign out of all devices
                  </a>
                </div>
              </>
            </Col>
          </Row>
          <Row className="border-top">
            <Col xs={12} sm={3} className="pt-3">
              <h5 className="opacity-50">MY PROFILE</h5>
            </Col>
            <Col xs={12} sm={9} className="p-3 px-4">
            <>
  <div className="d-flex justify-content-between mb-2">
    <div className="d-flex align-items-center pb-3">
      <img src="/images/avatar.png" alt="" style={{width: "35px", }} className="me-3" />
      Strive student{" "}
    </div>
    <div className="d-flex flex-column">
      <a href="#" className="text-decoration-none mb-1">
        {" "}
        Manage profiles
      </a>
      <a href="#" className="text-decoration-none mb-2">
        {" "}
        Add profile email
      </a>
    </div>
  </div>
  <div className="col-6">
    <div className="d-flex justify-content-between mb-1">
      <a href="#" className="text-decoration-none mb-1">
        
        Language
      </a>
      <a href="#" className="text-decoration-none mb-1">
        
        Viewing activity
      </a>
    </div>
    <div className="d-flex justify-content-between mb-1">
      <a href="#" className="text-decoration-none mb-1">
        
        Playback settings
      </a>
      <a href="#" className="text-decoration-none mb-1">
        
        Ratings
      </a>
    </div>
    <a href="#" className="text-decoration-none mb-1">
      
      Subtitle appearence
    </a>
  </div>
</>

            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
