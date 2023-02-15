import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import { H5 } from '../../../AbstractElements';
import { CssData } from './data';
import { CssModes } from '../../../Constant';

const CssMode = () => {
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>{CssModes}</H5>
          </CardHeader>
          <CardBody>
            <AceEditor
              className="ace-editor"
              style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }}
              mode="css"
              theme="monokai"
              value={CssData}
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              setOptions={{ useWorker: false }}
              editorProps={{ $blockScrolling: true }}
              highlightActiveLine={true} />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CssMode;