import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { ComboChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import CommenHeader from '../Commen';

const ComboChartClass = ({ data }) => {

  return (
    <Fragment>
      <Col sm="12" >
        <Card>
          <CommenHeader title={ComboChart} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={[
                  [
                    'Month',
                    'Bolivia',
                    'Ecuador',
                    'Madagascar',
                    'Papua New Guinea',
                    'Rwanda',
                    'Average',
                  ],
                  ['2004/05', 165, 938, 522, 998, 450, 614.6],
                  ['2005/06', 135, 1120, 599, 1268, 288, 682],
                  ['2006/07', 157, 1167, 587, 807, 397, 623],
                  ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                  ['2008/09', 136, 691, 629, 1026, 366, 569.6],
                ]}
                options={{
                  title: 'Monthly Coffee Production by Country',
                  vAxis: { title: 'Cups' },
                  hAxis: { title: 'Month' },
                  seriesType: 'bars',
                  colors: ['#4d8aff', '#fd2d63', '#47cf60', '#a927f9', '#fd761e'],
                  series: { 5: { type: 'line' } },
                  backgroundColor: 'transparent',
                }}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ComboChartClass;