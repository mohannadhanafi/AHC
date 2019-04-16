/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-constant-condition */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Form,
  Input,
} from 'antd';
import axios from 'axios';

import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    confirmDirty: false,
    disable: false,
    plan: '',
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const { match: { params: { id } } } = this.props;
      if (!err) {
        this.setState({ disable: true });
        axios.post(`/api/v2/plan/${id}`, values).then((result) => {
          const {
            data: { message },
            statusText,
          } = result;
          if (result.status === 200) {
            NotificationManager.success(message, 'SUCCESS', 2000);
            setTimeout(() => {
              this.props.history.push('/admin/plan/viewplan');
            }, 3000);
          } else {
            NotificationManager.error(message || statusText, 'ERROR', 2000);
          }
        }).catch((error) => {
          this.setState({ loading: false }, () => {
            const {
              data: { message: errorMessage },
              statusText: statusMessage,
            } = error.response;
            NotificationManager.error(errorMessage || statusMessage, 'ERROR', 2000);
          });
        });
      }
    });
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    axios(`/api/v2/plan/${id}`).then((result) => {
      const { data } = result;
      const { plan } = data[0];
      this.setState({ plan });
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      disable,
      plan,
    } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Card className="gx-card" title="Edit Plan">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Plan
              </span>
)}
          >
            {getFieldDecorator('plan', {
              initalValue: plan,
              rules: [
                {
                  required: true,
                  message: 'Please input your plan!',
                  whitespace: true,
                }, {
                  max: 150,
                  message: 'Max is 150 letter !',
                  whitespace: true,
                },
              ],
            })(<Input placeholder={plan} />)}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            {!disable
              ? (
                <Button type="primary" htmlType="submit">
              Submit
                </Button>
              )
              : (
                <Button type="primary" disabled htmlType="submit">
         Submit
                </Button>
              ) }
          </FormItem>
        </Form>
        <NotificationContainer />
      </Card>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { authUser, url, role } = auth;
  return {
    authUser,
    url,
    role,
  };
};

const RegistrationForm = Form.create()(Registration);
export default connect(mapStateToProps)(RegistrationForm);
