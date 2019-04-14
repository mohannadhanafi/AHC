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
  Button,
  Card,
  Form,
  Input,
  TimePicker,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    disable: false,
  };

  handleCancel = () => this.setState({ previewVisible: false });

componentDidMount = async () => {
  const res = await axios.get('/api/v2/hours/getAll');
  const { data } = res;
  const {
    facebook, twitter, whats, google, logo, email, address, youtube, instagram,
  } = data[0];
  this.setState({
    facebook, twitter, logo, whats, google, email, address, youtube, instagram,
  });
}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ disable: true });
        axios.post('/api/v2/option', values).then((result) => {
          const {
            data: { message },
            statusText,
          } = result;
          if (result.status === 200) {
            NotificationManager.success(message, 'SUCCESS', 2000);
            setTimeout(() => {
              this.props.history.push('/admin/options/social');
              this.setState({ disable: false });
            }, 3000);
          } else {
            NotificationManager.error(message || statusText, 'ERROR', 2000);
            setTimeout(() => {
              this.setState({ disable: false });
            }, 2000);
          }
        }).catch((error) => {
          this.setState({ loading: false }, () => {
            const {
              data: { message: errorMessage },
              statusText: statusMessage,
            } = error.response;
            NotificationManager.error(errorMessage || statusMessage, 'ERROR', 2000);
            setTimeout(() => {
              this.setState({ disable: false });
            }, 2000);
          });
        });
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      facebook, twitter, whats, google, youtube, instagram, disable,
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
      <Card className="gx-card" title="Social Media">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label={<span>Google</span>}>
            {getFieldDecorator('monday_start')(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {!disable
              ? (
                <Button type="primary" htmlType="submit">
                    submit
                </Button>
              )
              : (
                <Button type="primary" disabled htmlType="submit">
                    submit
                </Button>
              ) }
          </FormItem>
        </Form>
        <NotificationContainer />
      </Card>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
