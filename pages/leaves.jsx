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
} from "react-bootstrap";

import NavBar from "../components/nav";
import Image from "next/image";
import LeaveTable from "../components/leaveTable";
import HolidayOverlay from "../components/holiday-overlay";
import { getBreaks } from "../api/data";
import Router from "next/router";

export default class Leaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaves: [],
    };
  }
  componentDidMount() {
    let user = localStorage.getItem("user");
    if (!user) {
      Router.push("/");
    }

    let user_id = user.substring(0, user.lastIndexOf("@"));

    getBreaks(user_id)
      .then((response) => response.json())
      .then((leaves) => {
        let breaks = leaves.filter(function (leave) {
          return leave.type == "Leave";
        });
        breaks = breaks.filter(
          (leave, index, self) =>
            index === self.findIndex((t) => t.date === leave.date)
        );
        this.setState({ leaves: breaks });
        console.log(breaks);
      });
  }
  render() {
    let { leaves } = this.state;
    return (
      <Fragment>
        <Head>
          <title>Jarvis - Leaves</title>
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
              <Row>
                <Col sm="10" className="mb-2">
                  <h1>Leaves</h1>
                </Col>

                <Col sm="2" className="mb-2">
                  {/* @TODO - modal with apply leave */}
                </Col>
              </Row>
              <Row>
                <Col sm="8">
                  <Card className="bg-white">
                    <Card.Body>
                      <Card.Title className="text-dark">
                        Working hard? Take a break!
                      </Card.Title>
                      <Card.Text className=" text-dark">
                        <span>
                          Let your team know in advance to avoid any confusion
                          and last-minute hustles.
                        </span>
                        <br />
                        <br />
                        <Button
                          variant="primary"
                          href="slack://app?team=T1ZV74Y7N&id=A02CPCMDL02"
                          size="sm"
                          // block
                        >
                          Apply on Slack
                        </Button>
                      </Card.Text>
                      <LeaveTable leaves={leaves} className="mt-2" />
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="4" className="mb-2">
                  <Card className="bg-light">
                    <Card.Body>
                      <Card.Title>Leave Policy</Card.Title>
                      <Card.Text className="p-2">
                        <HolidayOverlay />
                        <p>
                          Our leave policy assists employees to balance between
                          work & personal engagement. National/Regional
                          Holidays: We close our laptops on all mandatory
                          non-working days designated by the state and central
                          government.
                          <br />
                          <br /> Festival Holidays - We respect our
                          organization’s diversity and encourage our employees
                          to celebrate together. Our official holiday calendar
                          covers key national festivals.
                          <br /> <br />
                          Sick Leaves - If you are under the weather, take off
                          and rejuvenate. We are concerned about your health and
                          want you to return in full spirits back to work.
                          <br />
                          <br />
                          Personal Time off - We have a thumb rule “ if you need
                          time off - take time off”. We encourage you to take
                          personal time off for your family and friends.
                          <br />
                        </p>
                      </Card.Text>
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
