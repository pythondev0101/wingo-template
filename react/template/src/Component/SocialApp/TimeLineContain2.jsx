import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import { ELANA, JasonBorne } from '../../Constant';
import { H6, P, Image } from '../../AbstractElements';
import imgg from '../../assets/images/user/1.jpg';
import time2 from '../../assets/images/social-app/timeline-2.png';
import LikeComments from './LikeComments';
import ApplyComments from './ApplyComments';
import MoreCommentss from './MoreComments';

const TimeLineContain2 = () => {
  const comment = 'we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post';
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="new-users-social">
              <Media>
                <Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                <div className="media-body">
                  <H6 attrH6={{ className: 'mb-0 f-w-700' }}>{ELANA}</H6>
                  <P>January, 12,2022</P>
                </div>
                <span className="pull-right mt-0">
                  <MoreVertical /></span></Media>
            </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${time2}` }} />
            <div className="timeline-content">
              <LikeComments />
              <div className="social-chat">
                <div className="your-msg">
                  <Media>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                    <div className="media-body">
                      <span className="f-w-600">{JasonBorne}
                        <span>1 Year Ago
                          <i className="fa fa-reply font-primary ps-1"></i>
                        </span>
                      </span>
                      <P>{comment}</P>
                    </div>
                  </Media>
                </div>
                <MoreCommentss />
              </div>
              <ApplyComments />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default TimeLineContain2;