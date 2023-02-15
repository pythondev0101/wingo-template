import React, { Fragment, useContext } from 'react';
import { Card, Col, CardBody, Media } from 'reactstrap';
import JobSearchContext from '../../../_helper/JobSearch';
import { H6, Image, P } from '../../../AbstractElements';

const ListCard = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
    <Fragment>
      <Col xl="9" className='xl-60 box-col-8'>
        {jobData &&
          jobData.slice(0, 8).map((data, id) => (
            <Card key={id}>
              <div className="job-search">
                <CardBody>
                  <Media>
                    <Image
                      attrImage={{
                        className: 'img-40 img-fluid m-r-20',
                        src: require(`../../../assets/images/${data.logo}`),
                        alt: '',
                      }}
                    />
                    <Media body>
                      <H6 attrH6={{ className: 'f-w-600' }}>
                        <a href="#javascript">{data.job_name}</a>
                        {data.badgeType === 'primary' ? (
                          <span className="badge badge-primary pull-right">
                            {data.badgeValue}
                          </span>
                        ) : (
                          ''
                        )}
                      </H6>
                        {data.job_area} <span>{data.job_city}</span>
                        <ul className='rating'>
                        <li>
                          <i className="fa fa-star font-warning"></i>
                        </li>
                        <li>
                          <i className="fa fa-star font-warning"></i>
                        </li>
                        <li>
                          <i className="fa fa-star font-warning"></i>
                        </li>
                        <li>
                          <i className="fa fa-star font-warning"></i>
                        </li>
                        <li>
                          <i className="fa fa-star font-warning-o"></i>
                        </li>
                        </ul>
                    </Media>
                  </Media>
                  <P>{data.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          ))}
      </Col>
    </Fragment>
  );
};

export default ListCard;
