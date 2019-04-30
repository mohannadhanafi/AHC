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
  Button, Card, Form, Input, TimePicker, Checkbox,
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
    mondayChecked: false,
    tuesdayChecked: false,
    wednesdayChecked: false,
    thursdayChecked: false,
    fridayChecked: false,
    saturdayChecked: false,
    sundayChecked: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ disable: true });
        axios
          .post('/api/v2/hours', values)
          .then((result) => {
            const {
              data: { message },
              statusText,
            } = result;
            if (result.status === 200) {
              NotificationManager.success(message, 'SUCCESS', 2000);
              setTimeout(() => {
                this.props.history.push('/admin/options/hours');
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
            this.setState({ loading: false }, () => {
              const {
                data: { message: errorMessage },
                statusText: statusMessage,
              } = error.response;
              NotificationManager.error(
                errorMessage || statusMessage,
                'ERROR',
                2000,
              );
              setTimeout(() => {
                this.setState({ disable: false });
              }, 2000);
            });
          });
      }
    });
  };

  mondayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ mondayChecked: checked });
  };

  tuesdayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ tuesdayChecked: checked });
  };

  wednesdayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ wednesdayChecked: checked });
  };

  thursdayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ thursdayChecked: checked });
  };

  fridayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ fridayChecked: checked });
  };

  saturdayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ saturdayChecked: checked });
  };

  sundayChange = ({ target }) => {
    const { checked } = target;
    this.setState({ sundayChecked: checked });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      disable,
      mondayChecked,
      tuesdayChecked,
      wednesdayChecked,
      thursdayChecked,
      fridayChecked,
      saturdayChecked,
      sundayChecked,
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
      <Card className="gx-card" title="Openning Hours">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label={<span>Monday</span>}>
            <Input.Group>
              {getFieldDecorator('monday_start')(
                mondayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ),
              )}
              {getFieldDecorator('monday_end')(
                mondayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.mondayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Tuesday</span>}>
            <Input.Group>
              {getFieldDecorator('tuesday_start')(
                tuesdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ),
              )}
              {getFieldDecorator('tuesday_end')(
                tuesdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.tuesdayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Wednesday</span>}>
            <Input.Group>
              {getFieldDecorator('wednesday_start')(
                wednesdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ),
              )}
              {getFieldDecorator('wednesday_end')(
                wednesdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                  />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.wednesdayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Thursday</span>}>
            <Input.Group>
              {getFieldDecorator('thursday_start')(
                thursdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                />
                ) : (

                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                  />
                ),
              )}
              {getFieldDecorator('thursday_end')(
                thursdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
              />
                ) : (

                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.thursdayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Friday</span>}>
            <Input.Group>
              {getFieldDecorator('friday_start')(
                fridayChecked
                  ? (
                    <TimePicker
                      disabled
                      use12Hours
                      format="h:mm a"
                      style={{ width: '27%', marginRight: '3px' }}
                />
                  ) : (
                    <TimePicker
                      use12Hours
                      format="h:mm a"
                      style={{ width: '27%', marginRight: '3px' }}
                />
                  ),
              )}
              {getFieldDecorator('friday_end')(
                fridayChecked
                  ? (
                    <TimePicker
                      disabled
                      use12Hours
                      format="h:mm a"
                      style={{ width: '27%', marginLeft: '3px' }}
              />
                  ) : (
                    <TimePicker
                      use12Hours
                      format="h:mm a"
                      style={{ width: '27%', marginLeft: '3px' }}
              />
                  ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.fridayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Saturday</span>}>
            <Input.Group>
              {getFieldDecorator('saturday_start')(
                saturdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                />
                ),
              )}
              {getFieldDecorator('saturday_end')(
                saturdayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.saturdayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Sunday</span>}>
            <Input.Group>
              {getFieldDecorator('sunday_start')(
                sundayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginRight: '3px' }}
                />
                ),
              )}
              {getFieldDecorator('sunday_end')(
                sundayChecked ? (
                  <TimePicker
                    disabled
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                />
                ) : (
                  <TimePicker
                    use12Hours
                    format="h:mm a"
                    style={{ width: '27%', marginLeft: '3px' }}
                />
                ),
              )}
              <Checkbox className="gx-ml-5" onChange={this.sundayChange}>
                Disable
              </Checkbox>
            </Input.Group>
          </Form.Item>
          <FormItem {...tailFormItemLayout}>
            {!disable ? (
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            ) : (
              <Button type="primary" disabled htmlType="submit">
                submit
              </Button>
            )}
          </FormItem>
        </Form>
        <NotificationContainer />
      </Card>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
