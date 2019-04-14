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
  Button, Card, Form, Input, Upload, Modal, Icon,
} from 'antd';
import uuid from 'uuid';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormItem = Form.Item;

class Registration extends Component {
  state = {
    title: '',
    count: '',
    icon: '',
    fileList: [],
    removedFile: [],
    fileName: '',
    disable: false,
  };

  componentDidMount = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios(`/api/v2/statistics/${id}`).then(async (result) => {
      const { data } = result;
      const { icon, count, title } = data;
      const fileList = [];
      if (icon !== '') {
        await axios
          .get(`/api/v2/getFile/${icon}`)
          .then(result => fileList.push({
            uid: uuid(),
            name: 'image.png',
            status: 'done',
            url: `/api/v2/getFile/${icon}`,
          }))
          .catch((error) => {});
      }
      this.setState({
        icon, count, title, fileList,
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ disable: true });
        const {
          match: {
            params: { id },
          },
        } = this.props;
        const { removedFile, fileList, fileName } = this.state;
        if (fileName !== '') {
          values.icon = fileName;
        }
        if (fileList.length) {
          axios
            .post(`/api/v2/statistics/${id}`, values)
            .then((result) => {
              const {
                data: { message },
              } = result;
              NotificationManager.success(message, 'SUCCESS', 2000);
              setTimeout(() => {
                this.props.history.push('/admin/statistics/view');
                this.setState({ disable: false });
              }, 3000);
              if (removedFile.length) {
                removedFile.map(async (file) => {
                  await axios.post('/api/v2/removeFile', { pic: file });
                });
              }
            })
            .catch(async (error) => {
              const {
                data: { message },
                statusText,
              } = error.response;
              NotificationManager.error(message || statusText, 'ERROR', 2000);
              setTimeout(() => {
                this.setState({ disable: false });
              }, 2000);
            });
        } else {
          NotificationManager.error('Please Choose an image !', 'ERROR', 2000);
          setTimeout(() => {
            this.setState({ disable: false });
          }, 2000);
        }
      }
    });
  };

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  removeFile = async (file) => {
    const { removedFile } = this.state;
    const { url } = file;
    if (url) {
      const urlSplit = url.split('/');
      const fileName = urlSplit[urlSplit.length - 1];
      removedFile.push(fileName);
    } else {
      const { response: { fullName } } = file;
      removedFile.push(fullName);
    }
    this.setState({ removedFile });
  };

  handleChange = ({ file, fileList }) => {
    this.setState({ fileList });
    if (fileList.length) {
      const { status } = file;
      const isSvg = file.type === 'image/svg+xml';
      const isPNG = file.type === 'image/png';
      if (!isSvg && !isPNG) {
        this.setState({ fileList });
        NotificationManager.error(
          'You can only upload svg files!',
          'ERROR',
          2000,
        );
        this.setState(() => ({ fileList: [] }));
      } else if (status === 'done') {
        const {
          response: { fullName },
        } = file;
        this.setState({ fileName: fullName });
      }
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      title, count, disable, icon, fileList, previewVisible,
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
      <Card className="gx-card" title="Statistic Details">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<span>Icon</span>}
          >
            <>
              <Upload
                action="/api/v2/uploadFile"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                onRemove={this.removeFile}
                accept="image/png, image/svg+xml"
              >
                {fileList.length === 1 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={`/api/v2/getFile/${icon}`}
                />
              </Modal>
            </>
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Title</span>}>
            {getFieldDecorator('title', {
              initialValue: title,
              rules: [
                {
                  max: 20,
                  message: 'Max is 20 letter',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Count</span>}>
            {getFieldDecorator('count', {
              initialValue: count,
              rules: [
                {
                  required: true,
                  message: 'Please input the subtitle!',
                  whitespace: true,
                },
              ],
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
      </Card>
    );
  }
}

const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
