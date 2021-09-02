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
} from "react-bootstrap";

import NavBar from "../components/nav";
import Image from "next/image";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        {/* <NavBar /> */}

        <Container fluid>
          <Row className="justify-content-md-between">
            <Col sm="2" id="sidebar-wrapper">
              <NavBar />
            </Col>
            <Col sm={10} id="page-content-wrapper">
              <Col sm="12" className="mb-2">
                <h1 className="mt-2">Jarvis-Your personal bot</h1>
                <p>
                  <br />
                  Some intro
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
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text className="p-2">
                        Take a leave
                        <br />
                      </Card.Text>
                      <Button variant="primary" href="/leaves" size="lg" block>
                        Leaves &rarr;
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="12" lg="6" className="mt-2">
                  <Card className="">
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text className="p-2">
                        Be rewarded for your contribution to Hevo
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

        <footer className="cntr-footer">
          © <a href="http://hevodata.com/">Team Jarivs @Hevo</a> - 2021
        </footer>
      </Fragment>
    );
  }
}
