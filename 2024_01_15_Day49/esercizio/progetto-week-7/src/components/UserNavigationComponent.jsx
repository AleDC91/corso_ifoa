import React, { Component } from 'react'
import "../styles/UserNavigationComponent.css"
import { CiUser } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { Link } from 'react-router-dom';

export default class UserNavigationComponent extends Component {
  render() {
    return (
        <div className="right-nav-btns d-flex align-items-center ">
        <div className="search-nav mx-1">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </a>
        </div>
        <div className="kids text-white fs-7 mx-2">
          KIDS
        </div>
        <div className="bell mx-1 me-3">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="white"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </a>
        </div>
        <div className="user-avatar">
          <div className="dropdown">
            <button
              className="btn btn-dark bg-transparent dropdown-toggle p-0 rounded-0 border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="img-fluid" src="/images/avatar.png" alt="avatar" style={{width: "25px"}} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end bg-dark border border-white border-opacity-50 rounded-0">
              <li>
                <div className="drop-header d-flex">
                  <div className="user mx-2">
                    <div className="user-avatar" style={{width: "40px"}}>
                      <img
                        className="img-fluid rounded-circle"
                        src="/images/avatar.png"
                        alt="avatar user"
                        
                      />
                    </div>
                  </div>
                  <div className="user-info fs-7  px-1 pe-2">
                    <div className="name text-white">Netflix User</div>
                    <div className="email text-white opacity-50 ">
                      user@examples.com
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider bg-white opacity-50" />
              </li>
              <li>
                <Link className="dropdown-item text-white d-flex align-items-center" to="profile">
                <CiUser className='me-2'/>
                  Profile
                </Link>
              </li>
              <li>
                <a className="dropdown-item  text-white d-flex align-items-center" href="#">
                <IoIosStarOutline className='me-2'/>
                  Subscription
                </a>
              </li>
              <li>
                <Link className="dropdown-item  text-white d-flex align-items-center" to="settings">
                <IoSettingsOutline className='me-2'/>
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider bg-white opacity-50" />
              </li>
              <li>
                <a className="dropdown-item sign-out text-white" href="#">
                <PiSignOut className='me-2'/>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    )
  }
}
