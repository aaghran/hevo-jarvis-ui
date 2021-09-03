import React, { useState } from "react";
import { Card, Nav, Row, Col, Badge, Carousel } from "react-bootstrap";
import moment from "moment";

let value_icons = {
  "Build products that users love":
    "https://emoji.slack-edge.com/T1ZV74Y7N/core-values-build-products-that-users-love/c866630d4e4b9444.png",
  "Have audacious goals":
    "https://emoji.slack-edge.com/T1ZV74Y7N/core-values-have-audacious-goals/71d9ea8cffdaa1aa.png",
  "Be best at what you do":
    "https://emoji.slack-edge.com/T1ZV74Y7N/core-values-be-the-best-at-what-you-do/75f9baba650c1ab6.png",
  "Be honest":
    "https://emoji.slack-edge.com/T1ZV74Y7N/core-values-be-honest/aa1300571d27f468.png",
  "Have empathy":
    "https://emoji.slack-edge.com/T1ZV74Y7N/core-values-have-empathy/996ec09eb7d0c131.png",
};

const KudosElement = ({ data }) => {
  // console.log(data);
  return (
    <Card className="p-1 mb-2">
      <Card.Body>
        <Card.Title>
          {/* add value icon */}

          {data.message}
        </Card.Title>
        <p>
          {" "}
          <img
            className="value-icons"
            src={value_icons[data.core_value]}
          />{" "}
          {data.core_value}
        </p>
        <p>
          <img
            className="value-icons"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          />{" "}
          By {data.received_by}
          {/* <span className="text-warning">#jarvis,#integrations</span>{" "} */}
          {/* <span className="ml-2">
            <Badge variant="dark">{moment(data.ts).format()}</Badge>
          </span>{" "} */}
        </p>
      </Card.Body>
    </Card>
  );
};

const RecognitionGallery = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  console.log("props");
  console.log(props);
  let type = props.type;
  let kudos_all = props.kudos;
  return (
    <>
      <Carousel
        className="recognition-slider mb-2 p-2"
        variant="dark"
        interval={2000}
        fade
      >
        {kudos_all.map(function (object, i) {
          return (
            <Carousel.Item>
              <Carousel.Caption>
                <KudosElement data={object} key={object.id} />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default RecognitionGallery;
