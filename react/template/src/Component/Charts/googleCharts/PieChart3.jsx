import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { DonutChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import CommenHeader from '../Commen';

const PieChart3Class = ({ data, pieHole }) => {

  return (
    <Fragment>
      <Col sm="12" xl="6">
        <Card>
          <CommenHeader title={DonutChart} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={data?.data}// eslint-disable-next-line
                options={data?.options,
                  { pieHole: pieHole }
                }
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PieChart3Class;