import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Btn, H3, P } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE } from '../../../Constant';
import { Error3 } from '../../../Data/svgIcons';

const ErrorPage3 = () => {
    return (
        <Fragment>
            <div className="page-wrapper" id="pageWrapper">
                <div className="error-wrapper">
                    <Container>
                        <div className="error-page1">
                            <div className="svg-wrraper mb-0">
                                <Error3 />
                            </div>
                            <Col md="8" className="offset-md-2">
                                <H3>Sorry, something goes wrong</H3>
                                <P attrPara={{ className: 'sub-content' }} >The page you are attempting to reach is currently not available.This may be because the page does not exist or has been moved.</P>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Btn attrBtn={{ className: 'btn-lg', color: 'primary' }}>{BACK_TO_HOME_PAGE}</Btn>
                                </Link>
                            </Col>
                        </div>
                    </Container>
                </div>
            </div>
        </Fragment >
    );
};

export default ErrorPage3;