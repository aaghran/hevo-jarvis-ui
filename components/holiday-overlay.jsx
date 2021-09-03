import React, { useRef, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";

const HolidayOverlay = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="holiday-cta">
        Holiday List
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Holidays in 2021</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img
            src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/holiday.png"
            className="w-100"
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HolidayOverlay;
