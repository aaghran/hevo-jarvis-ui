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
          <title>Jarvis - Reimbursement</title>
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
                  <h1>Roadmap</h1> (Coming Soon)
                </Col>
              </Row>
              <Row className="">
                <Col sm="12" className="mb-2"></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
