import Head from "next/head";
import { Fragment } from "react";
const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

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
import Router from "next/router";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      // rememberMe: false
    };
  }

  componentDidMount() {
    let user = localStorage.getItem("user", user);
    if (user) {
      Router.push("/home");
    }
  }

  handleChange = (event) => {
    const input = event.target;
    // const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ user: input.value });
    console.log(input.value);
  };

  handleFormSubmit = () => {
    // debugger;
    const { user, rememberMe } = this.state;
    console.log("user ", user);
    localStorage.setItem("user", user);
    Router.push("/home");
  };
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
        <Container>
          <div className="d-flex justify-content-md-center align-items-center vh-100">
            <Card style={{ width: "50%" }} className="justify-content-center">
              <Card.Img
                variant="top"
                className="login-logo"
                src="https://wanderingbong-v2.s3.ap-south-1.amazonaws.com/Jarvis.png"
              />
              <Card.Body>
                {/* <Card.Title>JARVIS</Card.Title> */}
                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required  />
                  </Form.Group> */}
                  {/* <Button type="submit">Submit</Button> */}
                  <Button variant="primary" type="submit" size="lg" block>
                    Login &rarr;
                  </Button>
                  {/* <Button
                    variant="danger"
                    href="/home"
                    size="lg"
                    block
                    disabled
                  >
                    Sign in with Google
                  </Button> */}
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>

        <footer className="cntr-footer">
          © <a href="http://hevodata.com/">Team Jarivs @Hevo</a> - 2021
        </footer>
      </Fragment>
    );
  }
}
