import Head from "next/head";
import { Fragment } from "react";
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
  Table,
  Tabs,
  Tab,
} from "react-bootstrap";

import NavBar from "../components/nav";
import Image from "next/image";

export default class Recognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Head>
          <title>Jarvis - Rewards and Recognition</title>
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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KFXF3TG');`,
            }}
          ></script>
        </Head>
        <Container fluid>
          <Row className="justify-content-md-between">
            <Col xs={2} id="sidebar-wrapper">
              <NavBar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Row className="mb-4">
                <Col sm="8" className="mb-4">
                  <h1>Rewards & Recognition</h1>
                </Col>
                <Col sm="4" className="mb-4">
                  {/* @TODO - modal with apply leave */}
                  <Button
                    variant="danger"
                    // href="/home"
                    size="lg"
                    block
                  >
                    Recognize your colleague
                  </Button>
                </Col>
              </Row>
              <Row className="">
                <Col sm="12" className="mb-4">
                  <Card>
                    <Card.Body>
                      {/* <Card.Title></Card.Title> */}
                      <Card.Text className="">
                        <h2>"It's very inexpensive to give a compliment."</h2>
                        <p>
                          {/* @TODO - Add our core values with the images here (with a one liner? */}
                          What are you core values
                          <li>
                            <img src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-build-products-that-users-love/c866630d4e4b9444.png" />{" "}
                            Build Products that users love
                          </li>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <div className="p-4 bg-white border rounded">
                    <Tabs
                      defaultActiveKey="leaderboard"
                      id="uncontrolled-tab-example"
                      className=""
                    >
                      <Tab eventKey="leaderboard" title="Leaderboard">
                        <Card>
                          <Card.Body>
                            <Card.Title>Who's the most recognized!</Card.Title>

                            <Table></Table>
                          </Card.Body>
                        </Card>
                      </Tab>
                      <Tab eventKey="received" title="Received">
                        <Card>
                          <Card.Body>
                            <Card.Title>Your recognition!</Card.Title>

                            <Table></Table>
                          </Card.Body>
                        </Card>
                      </Tab>
                      <Tab
                        eventKey="contact"
                        title="Claim Rewards (Coming Soon)"
                        disabled
                      >
                        Claim Rewards
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <footer className="cntr-footer">
          © <a href="https://hevodata.com/">Team Jarivs @Hevo</a> - 2021
        </footer>
      </Fragment>
    );
  }
}
