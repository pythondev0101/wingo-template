import React, { Fragment } from 'react';
import Board from '@asseinfo/react-kanban';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import { H5, H6, LI, P, UL, Image } from '../../AbstractElements';
import { defaultData } from '../../Data/mock-table/apiboard';

const DefaultBoard = () => {
  const board = defaultData;
  var images = require.context('../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {board && board &&
        <Card>
          <CardHeader className="pb-0">
            <H5>Default Demo</H5>
          </CardHeader>
          <CardBody>
            <div className="kanban-container">
              <main className="kanban-drag">
                <Board
                  allowAddCard={{ on: 'top' }}
                  initialBoard={board}
                  renderCard={({ id, title, date, priority, img, company, rate, customer_img1, customer_img2, customer_img3 }) => (
                    <div className="kanban-item" key={id}>
                      <a href='#javascript' className="kanban-box">
                        <span className="date">{date}</span>
                        <span className={`badge ${priority === 'Urgent' ? 'badge-danger' : 'badge-primary'} f-right`}>{priority}</span>
                        <H6>{title}</H6>
                        <Media>
                          <Image attrImage={{
                            className: 'img-20 me-1 rounded-circle', src:
                              `${dynamicImage(img)}`, alt: ''
                          }} />
                          <Media body>
                            <P>{company}</P>
                          </Media>
                        </Media>
                        <div className="d-flex mt-3">
                          <UL attrUL={{ className: 'simple-list list' }}>
                            <LI>
                              <i className="fa fa-comments-o"></i>2
                            </LI>
                            <LI>
                              <i className="fa fa-paperclip ms-1"></i>2
                            </LI>
                            <LI>
                              <i className="fa fa-eye ms-1"></i>
                            </LI>
                          </UL>
                          <div className="customers">
                            <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                              <LI attrLI={{ className: 'd-inline-block me-3' }}>
                                <P attrPara={{ className: 'f-12' }}>{rate}</P>
                              </LI>
                              <LI attrLI={{ className: 'd-inline-block' }}>
                                <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img1)}`, alt: '' }} />
                              </LI>
                              <LI attrLI={{ className: 'd-inline-block' }}>
                                <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img2)}`, alt: '' }} />
                              </LI>
                              <LI attrLI={{ className: 'd-inline-block' }}>
                                <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img3)}`, alt: '' }} />
                              </LI>
                            </UL>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                >
                  {board}
                </Board>
              </main>
            </div>
          </CardBody>
        </Card>}
    </Fragment>
  );
};
export default DefaultBoard;