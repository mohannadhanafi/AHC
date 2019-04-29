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
  Button, Card, Form, Input, Checkbox,
} from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { connect } from 'react-redux/es';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    disable: false,
    copyrighrs: '',
    name: '',
    active: false,
  };


  onChangeCheck = () => {
    this.setState({ active: !this.state.active });
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

    const { options } = this.props;

    const { disable } = this.state;
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
        {
  options.length ? (
    <Form onSubmit={this.handleSubmit}>

      <FormItem {...formItemLayout} label={<span>Website Name</span>}>
        {getFieldDecorator('name', {
          initialValue: options[0].name,
          rules: [{ max: 30, message: 'Only 30 Letter is allowed !' }],
        })(<Input />)}
      </FormItem>

      <FormItem {...formItemLayout} label={<span>Copyrights</span>}>
        {getFieldDecorator('copyrights', {
          initialValue: options[0].copyrights,
          rules: [{ max: 70, message: 'Only 70 Letter is allowed !' }],
        })(<Input />)}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label={<span>Active</span>}
            >
        {getFieldDecorator('active')(
          <Checkbox
            checked={this.state.active}
            onChange={this.onChangeCheck}
                >
                  Disable the webiste
          </Checkbox>,
        )}
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
  ) : null}

        <NotificationContainer />
      </>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
const mapStateToProps = ({ opations }) => {
  const { opations: options } = opations;
  return {
    options,
  };
};

export default connect(mapStateToProps, null)(RegistrationForm);
