import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Card, Button } from 'antd';
import Logo from '../Logo';
import Social from '../Social';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import General from '../General';
import OpenningHours from '../Hours';
import Additional from '../Additional';

const { TabPane } = Tabs;

class index extends Component {
    state = {}

goToHome = () => {
  this.props.history.push('/admin/main');
}

render() {
  const { role } = this.props;
  return (
    <Card className="gx-card">
      <Button style={{ float: 'right' }}>Save</Button>
      <Button style={{ float: 'right' }} onClick={this.goToHome}>Cancel</Button>
      <Tabs defaultActiveKey="1" style={{ marginTop: '50px' }}>

        <TabPane tab="General Settings" key="1" style={{ color: 'red' }}>
          <General />
        </TabPane>

        {role === 'admin' ? (
          <TabPane tab="Contact Us" key="2">
            <ContactUs />
          </TabPane>
        ) : null}

        {role === 'admin' ? (
          <TabPane tab="Social Media" key="3">
            <Social />
          </TabPane>
        ) : null}

        {role === 'admin' ? (
          <TabPane tab="Style" key="4">
            <Logo />
          </TabPane>
        ) : null}

        <TabPane tab="Additional Codes" key="5">
          <Additional />
        </TabPane>

        {role === 'admin' ? (
          <TabPane tab="Footer" key="6">
            <Footer />
          </TabPane>
        ) : null}

        {role === 'admin' ? (
          <TabPane tab="Hours" key="7">
            <OpenningHours />
          </TabPane>
        ) : null}

      </Tabs>
    </Card>
  );
}
}

const mapStateToProps = ({ auth }) => {
  const { role } = auth;
  return {
    role,
  };
};
export default connect(mapStateToProps)(index);
