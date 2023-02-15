import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { FollowersData } from '../../../../Data/Bonus-ui';
import Image from '../../../../CommonElements/Media';
import { Btn, H5 } from '../../../../AbstractElements';

const Followers = () => {

  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Fragment>
      <Col xl="12" lg="6" md="12" sm="6">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'p-0' }} >
              <Btn attrBtn={{
                className: 'btn btn-link ps-0', databstoggle: 'collapse', databstarget: '#collapseicon11'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon11', color: 'transperant', onClick: toggleClick
              }} >Followings</Btn>
            </H5>
          </CardHeader>
          <div className={`collapse ${isShow && 'show'}`} id="collapseicon8" aria-labelledby="collapseicon8" data-parent="#accordion">
            <CardBody className="social-list filter-cards-view">
              {
                FollowersData.map((item) =>
                  <div className="media" key={item.id}>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${item.img}` }} />
                    <div className="media-body">
                      <span className="d-block">{item.name}</span>
                      <a href="#javascript">Add Friend</a>
                    </div>
                  </div>
                )
              }
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Followers;