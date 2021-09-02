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
                  <h1>Your leaves</h1>
                </Col>
                <Col sm="2" className="mb-2 text-right">
                  {/* @TODO - add holiday list image in modal */}
                  <a href=""><h4>Holiday list</h4></a>
                </Col>
                <Col sm="2" className="mb-2">
                  {/* @TODO - modal with apply leave */}
                  <Button
                    variant="danger"
                    // href="/home"
                    size="lg"
                    block
                  >
                    Apply Leave &rarr;
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm="12" className="mb-2">
                  <Card>
                    <Card.Body>
                      {/* <Card.Title></Card.Title> */}
                      <Card.Text className="p-2">
                        Looks like you have not taken a leave for a long time!
                        Apply for one now.
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="12">
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
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
