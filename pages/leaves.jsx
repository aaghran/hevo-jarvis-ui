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

export default class Leaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                <Col sm="8" className="mb-2">
                  <h1>Leaves</h1>
                </Col>

                <Col sm="2" className="mb-2">
                  {/* @TODO - modal with apply leave */}
                  <Button
                    variant="secondary"
                    // href="/home"
                    size="lg"
                    block
                  >
                    Apply Leave &rarr;
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm="6" className="mb-2">
                  <Card className="bg-light">
                    <Card.Body>
                      {/* <Card.Title></Card.Title> */}
                      <Card.Text className="p-2">
                        Leave Policy
                        <br />
                        <br />
                        <p>
                          Our leave policy assists employees to balance between
                          work & personal engagement. National/Regional
                          Holidays: We close our laptops on all mandatory
                          non-working days designated by the state and central
                          government. Festival Holidays - We respect our
                          organization’s diversity and encourage our employees
                          to celebrate together. Our official holiday calendar
                          covers key national festivals. Sick Leaves - If you
                          are under the weather, take off and rejuvenate. We are
                          concerned about your health and want you to return in
                          full spirits back to work. Personal Time off - We have
                          a thumb rule “ if you need time off - take time off”.
                          We encourage you to take personal time off for your
                          family and friends. We encourage our employees to
                          communicate leave plans with their Hevo - Employee
                          Handbook v1 7 managers and team members well in
                          advance to avoid any confusion and last-minute
                          hustles.
                        </p>
                      </Card.Text>
                      {/* <Col sm="2" className="mb-2 text-right"> */}
                      {/* @TODO - add holiday list image in modal */}
                      <a href="">
                        <h4>Holiday list</h4>
                      </a>
                      {/* </Col> */}
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card className="bg-dark">
                    <Card.Body>
                      <Card.Title className="text-white">
                        Your Leaves
                      </Card.Title>
                      <Card.Text className="p-2 text-white">
                        Looks like you have not taken a leave for a long time!
                        <br />
                        Apply one.
                        <br />
                        <Table
                          striped
                          bordered
                          hover
                          variant="dark"
                          className="mt-2"
                        >
                          <thead>
                            <tr>
                              <th>#</th>

                              <th>Name</th>
                              <th>Leave Date</th>
                              <th>Requested On</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Aaghran</td>
                              <td>6th Sept 2021</td>
                              <td>1st Sept 2021</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Aaghran</td>
                              <td>16th Sept 2021</td>
                              <td>1st Sept 2021</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Aaghran</td>
                              <td>20th Sept 2021</td>
                              <td>1st Sept 2021</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <footer className="cntr-footer">
          © <a href="http://hevodata.com/">Team Jarivs @Hevo</a> - 2021
        </footer>
      </Fragment>
    );
  }
}
