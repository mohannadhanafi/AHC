import React, { Component } from 'react';
import { Tabs } from 'antd';
import Logo from '../Logo';
import Social from '../Social';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import General from '../General';
import OpenningHours from '../Hours';
import Additional from '../Additional';

const { TabPane } = Tabs;

export default class index extends Component {
    state = {}

    render() {
      return (
        <Tabs defaultActiveKey="1">
          <TabPane tab="General Settings" key="1" style={{ color: 'red' }}>
            <General />
          </TabPane>
          <TabPane tab="Contact Us" key="2">
            <ContactUs />
          </TabPane>
          <TabPane tab="Social Media" key="3">
            <Social />
          </TabPane>
          <TabPane tab="Style" key="4">
            <Logo />
          </TabPane>
          <TabPane tab="Additional Codes" key="5">
            <Additional />
          </TabPane>
          <TabPane tab="Footer" key="6">
            <Footer />
          </TabPane>
          <TabPane tab="Hours" key="7">
            <OpenningHours />
          </TabPane>
        </Tabs>
      );
    }
}
