import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image, LI, UL } from '../../../../AbstractElements';
import { WithImageRounded } from '../../../../Constant/index';

const WithImageRound = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{WithImageRounded}</H5>
        </CardHeader>
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '', className: "img-40 rounded-pill" }} />
              {'Cras justo odio'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '', className: "img-40 rounded-pill" }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '', className: "img-40 rounded-pill" }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: require('../../../../assets/images/user/1.jpg'), alt: '', className: "img-40 rounded-pill" }} />
              {'Dapibus ac facilisis in'}
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;