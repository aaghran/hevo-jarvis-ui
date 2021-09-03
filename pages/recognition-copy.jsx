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
  Alert,
} from "react-bootstrap";

let kudos = [
  { name: "Aaghran", value: "Build products that users love" },
  { name: "Tariq", value: "Build products that users love" },
];

import NavBar from "../components/nav";
import Image from "next/image";
import RecognitionTable from "../components/recognitionTable";
import RecognitionReceived from "../components/recognitionReceived";
import RecognitionGallery from "../components/recognitionGallery";
import {
  getApplauds,
  getRecApplaudById,
  getSentApplaudById,
} from "../api/data";

class Recognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kudos_all: [],
      kudos_rcvd: [],
      kudos_given: [],
    };
  }
  componentDidMount() {
    let user = localStorage.getItem("user");
    let user_id = user.substring(0, user.lastIndexOf("@"));
    getApplauds()
      .then((response) => response.json())
      .then((kudos_all) => {
        this.setState({ kudos_all });
      });

    getRecApplaudById(user_id)
      .then((response) => response.json())
      .then((kudos_rcvd) => {
        this.setState({ kudos_rcvd });
      });

    getSentApplaudById(user_id)
      .then((response) => response.json())
      .then((kudos_given) => {
        this.setState({ kudos_given });
      });
    // console.log(kudos_rcvd);
    // this.setState({ kudos_all, kudos_rcvd, kudos_given });
    // return { kudos_all, kudos_rcvd, kudos_given };
  }
  // let { kudos_all, kudos_rcvd, kudos_given } = props;
  render() {
    let { kudos_all, kudos_rcvd, kudos_given } = this.state;
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
              <Row className="">
                <Col sm="8" className="mb-2">
                  <h1>Rewards & Recognition</h1>
                </Col>
                <Col sm="4" className="mb-2">
                  {/* @TODO - modal with apply leave */}
                  <Button
                    variant="primary"
                    href="slack://app?team=T1ZV74Y7N&id=A02CPCMDL02"
                    size="lg"
                    block
                  >
                    Recognize your colleague
                  </Button>
                </Col>
              </Row>
              <Row>
                <RecognitionGallery kudos={kudos_all} />
              </Row>
              <Row className="p-2">
                <Alert variant="primary" className="w-100 text-center">
                  <h2>"It's very inexpensive to give a compliment."</h2>
                </Alert>
              </Row>
              <Row className="">
                {/* </Row>
              <Row> */}
                <Col sm="12">
                  <div className="p-4 bg-white border rounded">
                    <Tabs
                      defaultActiveKey="received"
                      id="uncontrolled-tab-example"
                      className=""
                    >
                      <Tab eventKey="received" title="Received">
                        <Card>
                          <Card.Body>
                            <RecognitionReceived
                              type="received"
                              kudos={kudos_rcvd}
                            />
                          </Card.Body>
                        </Card>
                      </Tab>
                      <Tab eventKey="given" title="Given">
                        <Card>
                          <Card.Body>
                            {/* <Card.Title>Who's the most recognized!</Card.Title> */}
                            <RecognitionReceived
                              type="given"
                              kudos={kudos_given}
                            />
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
                      <Tab eventKey="about" title="About">
                        <Card>
                          <Card.Body>
                            {/* <Card.Title></Card.Title> */}

                            {/* @TODO - Add our core values with the images here (with a one liner? */}
                            <h3>Core Values</h3>
                            <br />
                            <Alert variant="primary">
                              <img
                                className="value-icons"
                                src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-build-products-that-users-love/c866630d4e4b9444.png"
                              />{" "}
                              Build Products that users love
                              <br />
                              As a product company, our first and foremost
                              responsibility is building great products.
                            </Alert>

                            <Alert variant="info">
                              <img
                                className="value-icons"
                                src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-have-audacious-goals/71d9ea8cffdaa1aa.png"
                              />{" "}
                              Have audacious goals and a keen desire to achieve
                              them.
                              <br />
                              Thinking Big and having large goals is the first
                              step to achieving them.
                            </Alert>

                            <Alert variant="warning">
                              <img
                                className="value-icons"
                                src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-be-the-best-at-what-you-do/75f9baba650c1ab6.png"
                              />{" "}
                              Aspire to be the best at what you do.
                              <br />
                              Mediocrity is like gravity; it draws everything
                              closer to itself, even the things that are not
                              mediocre yet.
                            </Alert>

                            <Alert variant="danger">
                              <img
                                className="value-icons"
                                src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-be-honest/aa1300571d27f468.png"
                              />{" "}
                              Be honest with your work and your teammates.
                              <br />
                              As we push to achieve greater results, it is
                              important to remain honest with ourselves and
                              others.
                            </Alert>

                            <Alert variant="success">
                              <img
                                className="value-icons"
                                src="https://emoji.slack-edge.com/T1ZV74Y7N/core-values-have-empathy/996ec09eb7d0c131.png"
                              />{" "}
                              Have empathy for your coworkers
                              <br />
                              In a team sport, winning requires working with
                              each other more than beating the opponent.
                            </Alert>
                          </Card.Body>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}


export default Recognition;
