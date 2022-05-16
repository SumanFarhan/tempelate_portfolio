import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { GoRocket } from 'react-icons/go'
import { DesktopOutlined } from '@ant-design/icons'
import { PieChartOutlined } from '@ant-design/icons'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"
import { Carousel } from 'antd';
import logo from './logo.webp'
import IMG from './profile.jpg'
import p1 from './p1.jpg.webp'
import p2 from './p2.jpg.webp'
import p3 from './p3.webp'
import p4 from './p4.webp'
import p5 from './p5.webp'
import p6 from './p6.webp'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'
import { BsCurrencyPound } from 'react-icons/bs'
import logo1 from './logo1.webp'
import logo2 from './logo2.webp'
import logo3 from './logo3.webp'
import logo4 from './logo4.webp'
import logo5 from './logo5.webp'
import 'antd/dist/antd.css';



const contentStyle = {
  height: '160px',
  color: '#fff',
  textAlign: 'center',
};

const App = () => {
  return (
    <>
      <div className='main'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Pricing</Nav.Link>
                <NavDropdown title="Blog" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='textBanner'>
          <Container >
            <Row>
              <Col className='about'>
                <h6>This is me</h6>
                <h1>SUMAN FARHAN</h1>
                <p>Web designer and developer form Karachi,Pakistan.
                  My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles. So far I have C#, SQL, JavaScript, HTML, CSS, Bootstrap ,rust, python under my belt.
                  I've started learning React JS. </p>
                <Button variant="primary" size="lg">Discover Now</Button>{' '}
              </Col>
              <Col className='image'>
                <img src={IMG} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className='textBanner'>
        <Container >
          <Row>
            <Col className='image_Col_left'>
              <img src={IMG} />
            </Col>
            <Col className='about'>
              <h6>About Me</h6>
              <h1>PERSONAL DEATILS</h1>
              <p>I am a proactive and self-motivated professional with a
                strong passion for developing Web applications using modern frameworks. A graduated Computer Science student , I have acquired knowledge in various aspects of software development lifecycle including system study, design, analysis and application development. </p>
              <Button variant="primary" size="lg">View Full Details</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
      <div className='offered'>
        <h1>My Offered Services</h1>
        <p>At about this time of year, some months after
          New Year’s resolutions have been made and kept, or made and neglected.</p>
        <CardGroup>
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Web design is the process of planning, conceptualizing, and
                arranging content online.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><DesktopOutlined /></span>
              <Card.Title>Web development</Card.Title>
              <Card.Text>
                Web development is everything involved in the creation of a website.
                Typically it refers to the coding and programming side of web site production{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><GoRocket /></span>
              <Card.Title>Software Testing</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Web design is the process of planning, conceptualizing, and
                arranging content online.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><DesktopOutlined /></span>
              <Card.Title>Web development</Card.Title>
              <Card.Text>
                Web development is everything involved in the creation of a website.
                Typically it refers to the coding and programming side of web site production{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><GoRocket /></span>
              <Card.Title>Software Testing</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div className='blueSection'>
        <Container>
          <Row>
            <Col>
              <h1>2536</h1>
              <p>Projects Completed</p>
            </Col>
            <Col>
              <h1>2239</h1>
              <p>Cups of Coffeed</p></Col>
            <Col><h1>6784</h1>
              <p>Happy Clients</p></Col>
            <Col><h1>434</h1>
              <p>Real Professionals</p></Col>
          </Row>
        </Container>
      </div>


      <div className='offered'>
        <h1>Our Latest Featured Projects</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <Container>
          <Row>
            <Col>
              <img src={p1} />
              <h4 className='projects'>2D Vinyl Design</h4>
              <p>vector</p>
            </Col>
            <Col>
              <img src={p2} />
              <h4 className='projects'>2D Vinyl Design</h4>
              <p>vector</p></Col>
            <Col>
              <img src={p3} />
              <h4 className='projects'>Creative Poster Design</h4>
              <p>Agency</p></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img src={p4} />
              <h4 className='projects'>Embosed Logo Design</h4>
              <p>Portal</p>
            </Col>
            <Col>
              <img src={p5} />
              <h4 className='projects'>3D Helmet Design</h4>
              <p>vector</p></Col>
            <Col>
              <img src={p6} />
              <h4 className='projects'>2D Vinyl Design</h4>
              <p>raster</p></Col>
          </Row>
        </Container>
      </div>
      {/* slider */}

      <div className='offered'>
        <h1>Client’s Feedback About Me</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className='slides'>
          <Carousel autoplay>
            <div className='carousel'>
              <div style={contentStyle}>
                <div className='c1'>
                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>
                </div>
                <div className='c1'>

                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>
                </div>
              </div>

            </div>
            <div className='carousel'>
              <div style={contentStyle}>
                <div className='c1'>

                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>
                </div>
                <div className='c1'>

                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>
                </div>
              </div>

            </div>
            <div className='carousel'>
              <div style={contentStyle}>
                <div className='c1'>
                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>

                </div>
                <div className='c1'>
                  <div className='change' >
                    <p>“Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills
                      and knowledge to work for the growth of the organization.
                    </p>
                    <h4>Suman Farhan</h4>
                    <span className='p1'>Work at Facebook </span>

                  </div>
                </div>
              </div>
            </div>
          </Carousel>

        </div>
      </div>


      <div className='offered'>
        <h1>Choose Your Plan</h1>
        <p>When someone does something that they know that they shouldn’t do, did they.</p>
        <Container className='pricing'>
          <CardGroup>
            <Card>
              <span className='iconPricing'><RiNumber1 /></span>
              <Card.Body>
                <Card.Title>Economy</Card.Title>
                <Card.Text>
                  <p>For the indiviuals</p>
                  <hr />
                  <p>Secure online transfers</p>
                  <hr />
                  <p>Unlimited styles for interface</p>
                  <hr />
                  <p>Reliable Customer Services</p>
                  <hr />
                  <h1><BsCurrencyPound />199.00</h1>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <span className='iconPricing'><RiNumber2 /></span>
              <Card.Body>
                <Card.Title>Buisness</Card.Title>
                <Card.Text>
                  <p>For the indiviuals</p>
                  <hr />
                  <p>Secure online transfers</p>
                  <hr />
                  <p>Unlimited styles for interface</p>
                  <hr />
                  <p>Reliable Customer Services</p>
                  <hr />
                  <h1><BsCurrencyPound />299.00</h1>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <span className='iconPricing'><RiNumber3 /></span>
              <Card.Body>
                <Card.Title>Premium</Card.Title>
                <Card.Text>
                  <p>For the indiviuals</p>
                  <hr />
                  <p>Secure online transfers</p>
                  <hr />
                  <p>Unlimited styles for interface</p>
                  <hr />
                  <p>Reliable Customer Services</p>
                  <hr />
                  <h1><BsCurrencyPound />399.00</h1>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <span className='iconPricing'><RiNumber4 /></span>
              <Card.Body>
                <Card.Title>Exclusive</Card.Title>
                <Card.Text>
                  <p>For the indiviuals</p>
                  <hr />
                  <p>Secure online transfers</p>
                  <hr />
                  <p>Unlimited styles for interface</p>
                  <hr />
                  <p>Reliable Customer Services</p>
                  <hr />
                  <h1><BsCurrencyPound />499.00</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
      <div className='blueSection'>
        <Container>
          <Row>
            <Col>
              <img src={logo4} />
            </Col>
            <Col>
              <img src={logo1} />
            </Col>
            <Col>
              <img src={logo2} />
            </Col>
            <Col>
              <img src={logo3} />
            </Col>
            <Col>
              <img src={logo5} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <div color="blue" className="font-small pt-4  " style={{ color: "#ffff", backgroundColor: "black" }}>
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="4">
              <h5 className="title">About Me</h5>
              <p className='para'>
                “Self-motivated, highly passionate and hardworking and work in a challenging organization to utilize my skills and knowledge to work for the growth of the organization.

                My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles.
              </p>

            </Col>
            <Col md="4">
              <h5 className="title">Newsletter</h5>
              <p className='para1'>Stay updated with our latest trends</p>
              <InputGroup size="sm" className="mb-3">
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <span className='icon3'><AiOutlineArrowRight /></span>
              </InputGroup>
            </Col>
            <Col md="4">
              <h5 className="title">Follow Me</h5>
              <p className='para1'>on social Media</p>
              <AiFillLinkedin />
              <AiFillGithub />
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: Suman Farhan
          </Container>
        </div>
      </div>
    </>
  );
}


export default App