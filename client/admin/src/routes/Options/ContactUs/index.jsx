/* eslint-disable camelcase */
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
import {
  Button, Form, Input,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    disable: false,
    copyrighrs: '',
    mobile: '',
    email: '',
    address: '',
    latitude: '',
    longitude: '',
    phone: '',
    tel: '',
    fax: '',
  };

  componentDidMount = async () => {
    const res = await axios.get('/api/v2/getoptions');
    const { data } = res;
    const {
      copyrights,
      email,
      address,
      mobile,
      phone,
      tel,
      fax,
      latitude,
      longitude,
    } = data[0];
    this.setState({
      copyrights,
      email,
      address,
      mobile,
      phone,
      tel,
      fax,
      latitude,
      longitude,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      this.setState({ disable: true });
      if (!err) {
        axios
          .post('/api/v2/option', values)
          .then((result) => {
            const {
              data: { message },
              statusText,
            } = result;
            if (result.status === 200) {
              NotificationManager.success(message, 'SUCCESS', 2000);
              setTimeout(() => {
                this.setState({ disable: false });
              }, 3000);
            } else {
              NotificationManager.error(message || statusText, 'ERROR', 2000);
              setTimeout(() => {
                this.setState({ disable: false });
              }, 2000);
            }
          })
          .catch((error) => {
            const {
              response: {
                data: { message },
              },
            } = error;
            NotificationManager.error(message, 'ERROR', 2000);
            setTimeout(() => {
              this.setState({ disable: false });
            }, 2000);
          });
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      email,
      address,
      copyrights,
      disable,
      mobile,
      phone,
      tel,
      fax,
      latitude,
      longitude,
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
      <>
        <Form onSubmit={this.handleSubmit}>

          <FormItem {...formItemLayout} label={<span>address</span>}>
            {getFieldDecorator('address', { initialValue: address })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Mobile">
            {getFieldDecorator('mobile', {
              initialValue: mobile,
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Phone">
            {getFieldDecorator('phone', {
              initialValue: phone,
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Tel">
            {getFieldDecorator('tel', {
              initialValue: tel,
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Fax">
            {getFieldDecorator('fax', {
              initialValue: fax,
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              initialValue: email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Copyrights</span>}>
            {getFieldDecorator('copyrights', {
              initialValue: copyrights,
              rules: [{ max: 70, message: 'Only 70 Letter is allowed !' }],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Latitude</span>}>
            {getFieldDecorator('latitude', {
              initialValue: latitude,
            })(<Input type="number" />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Longitude</span>}>
            {getFieldDecorator('longitude', {
              initialValue: longitude,
            })(<Input type="number" />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {!disable ? (
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            ) : (
              <Button type="primary" disabled htmlType="submit">
                Save
              </Button>
            )}
          </FormItem>
        </Form>
        <NotificationContainer />
      </>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
