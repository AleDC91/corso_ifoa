import React, { Component } from 'react'
import "../styles/FooterComponent.css"

export default class FooterComponent extends Component {
  render() {
    return (
        <footer className="container-lg  footer">
        <div className="footer-head d-flex my-4">
          <div className="facebook">
            <a href="#">
              <i className="fab fa-facebook-square text-secondary me-4 fs-2" />
            </a>
          </div>
          <div className="instagram">
            <a href="#">
              {" "}
              <i className="fab fa-instagram-square text-secondary me-4 fs-2" />
            </a>
          </div>
          <div className="twitter">
            <a href="#">
              <i className="fab fa-twitter-square text-secondary me-4 fs-2" />
            </a>
          </div>
          <div className="twitter">
            <a href="#">
              <i className="fab fa-youtube-square text-secondary me-4 fs-2" />
            </a>
          </div>
        </div>
        <div className="footer-links row ">
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Audio and subtitles
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Audio descriptions
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Help center
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Gift cards
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Media center{" "}
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Investor Relations
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Jobs
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Terms of use
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Privacy
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Legal Notices
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Coockie preferences
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Corporate information
            </a>
          </div>
          <div className="col-6 col-md-3 py-2 ">
            <a href="#" className="text-decoration-none text-secondary">
              Contact Us
            </a>
          </div>
        </div>
        <button className="btn btn-outline-secondary m rounded-0 my-3 py-2">
          Service Code
        </button>
        <p className="copyright text-secondary mt-2 pb-5">
          © 1967-2019 Netflix-inc. altre cose illeggibili
        </p>
      </footer>
      
    )
  }
}
