import React, { Fragment } from 'react';
import { H5, P } from '../../AbstractElements';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import ApiBoard from './ApiBoard';
import CustomeBoard from './CustomeBoard';
import DefaultBoard from './DefaultBoard';

const KanbanBoardContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="jkanban-container">
        <Row>
          <Col xs="12">
            <DefaultBoard />
          </Col>
          <Col xs="12">
            <CustomeBoard />
          </Col>
          <Col xs="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>API</H5>
                <P attrPara={{ className: 'mb-0' }}>{' add item, add board, delete board: '}</P>
              </CardHeader>
              <CardBody>
                <ApiBoard />
              </CardBody>
            </Card>
          </Col>
          <div id="mydata"></div>
        </Row>
      </Container >
    </Fragment >
  );
};
export default KanbanBoardContain;