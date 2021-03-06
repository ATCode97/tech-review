import React from 'react';
import "./fecards.css";
import StarComp from '../StarComps/StarComp'
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import ReactMdlStar from '../StarComps/ReactMdlStar';
import SemanticStar from '../StarComps/SemanticStar';
import Votes from './Votes';

const Fecards = () => {
  return (
    <div>
      <h1 style={{
        color: "whitesmoke",
        textAlign: "center",
        fontFamily: "Courier New",
      }}><strong>Front End Libraries</strong></h1>
      <hr className='hr'></hr>
      <div className='br'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <Container fluid='true' style={{ marginLeft: '2rem', marginTop: '0rem', color: 'whitesmoke', fontFamily: 'Courier New' }}>
        <Row>
          <Col sm={3}><h2><strong>React Bootstrap</strong></h2>
            <p><strong>Bootstrap designs rebuilt for React integration</strong></p>
            <StarComp />
            <Votes />
            <Button variant='outline-light'>
              <Link style={{ color: "white" }} to={"/felibraries/reactbootstrap"}>
                Find Out More
            </Link>
            </Button>
          </Col>
          <Col sm={3}><h2><strong>Material UI</strong></h2>
            <p><strong>React Components for faster and easier web development</strong></p>
            <StarComp />
            <Votes />
            <Button variant='outline-light'>
              <Link style={{ color: "whitesmoke" }} to={"/felibraries/material-ui"}>
                Find Out More
            </Link>
            </Button>
          </Col>
          <Col sm={3}><h2><strong>Semantic UI</strong></h2>
            <p><strong>Create beautiful responsive layouts using HTML</strong></p>
            <SemanticStar />
            <Votes />
            <Button variant='outline-light'>
              <Link style={{ color: "whitesmoke" }} to={"/felibraries/semantic-ui"}>
                Find Out More
            </Link>
            </Button>
          </Col>
          <Col sm={3}><h2><strong>React-MDL</strong></h2>
            <p><strong>React components for Material Design Lite</strong></p>
            <ReactMdlStar />
            <Votes />
            <Button variant='outline-light'>
              <Link style={{ color: "whitesmoke" }} to={"/felibraries/react-mdl"}>
                Find Out More
            </Link>
            </Button>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Col style={{ marginLeft: '37rem' }}>
          <Row><Link to={'/felibraries/comparison'}><Button>Compare</Button></Link></Row>
        </Col>
      </Container>
    </div >
  );
};

export default Fecards;