import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Image from "next/image";

import Router from "next/router";

const Menu = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    Router.push("/");
  };
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-dark sidebar h-100 p-2 pl-4">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="mb-2">
          <Nav.Link href="/home">
            <img
              src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/Jarvis.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/leaves">Leaves</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/recognition">Rewards & Recognition</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/roadmap">Our Roadmap</Nav.Link>
        </Nav.Item>

        <hr />
        <Nav.Item>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav.Item>
        <span className="cntr-footer">
          <a href="https://hevodata.com/">© Team Jarvis - 2021</a>
        </span>
      </Nav>
      {/* @TODO - add email and logout */}
    </>
  );
};

export default Menu;
