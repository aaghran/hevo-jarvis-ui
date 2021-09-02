import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Image from "next/image";

const Menu = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">
            <img
              src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/Jarvis.png"
              alt="Logo"
              width={100}
              height={100}
            />
            Jarvis
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/leaves">Leaves</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/recognition">Rewards & Recognition</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reimbursement">Reimbursement</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Menu;
