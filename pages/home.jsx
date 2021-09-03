import Head from "next/head";
import { Fragment } from "react";
import Router from "next/router";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Col,
  ListGroup,
} from "react-bootstrap";

import NavBar from "../components/nav";
import Image from "next/image";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let user = localStorage.getItem("user");
    if (!user) {
      Router.push("/");
    }
  }
  render() {
    return (
      <Fragment>
        <Head>
          <title>Jarvis</title>
          <meta name="title" content="Jarvis" />
          <meta name="description" content="" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="Jarvis" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content="Jarvis" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />
        </Head>
        {/* <NavBar /> */}

        <Container fluid>
          <Row className="justify-content-md-between">
            <Col sm="2" id="sidebar-wrapper">
              <NavBar />
            </Col>
            <Col sm={10} id="page-content-wrapper">
              <Col sm="12" className="mb-2 p-0">
                <h1 className="mt-2">Jarvis - Your personal bot</h1>
                <p>
                  <br />
                  Save time, work better!
                  <br />
                </p>

                {/* <span>Quick links: </span>
                <Button variant="outline-primary" href="/leaves" className="ml-2">
                  Leaves &rarr;
                </Button> */}
              </Col>
              <Row>
                <Col sm="12" lg="6" className="mt-2">
                  <Card className="">
                    <Card.Img
                      variant="top"
                      className="img-logo"
                      src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/relaxing.png"
                    />
                    <Card.Body>
                      <Card.Text className="p-2 text-center">
                        Our leave policy assists employees to balance between
                        work & personal engagement.
                      </Card.Text>
                      <Button variant="primary" href="/leaves" size="lg" block>
                        Leaves &rarr;
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="12" lg="6" className="mt-2">
                  <Card className="">
                    <Card.Img
                      variant="top"
                      className="img-logo"
                      src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/applaud.png"
                    />
                    <Card.Body>
                      <Card.Text className="p-2 text-center">
                        It's very inexpensive to give a compliment. Go ahead and
                        appreciate someone.
                        <br />
                      </Card.Text>
                      <Button
                        variant="primary"
                        href="/recognition"
                        size="lg"
                        block
                      >
                        Rewards & Recognition &rarr;
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
