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
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

const FormItem = Form.Item;
const { TextArea } = Input;

class Registration extends Component {
  state = {
    coreTitle: '',
    disable: false,
    servicestitile: '',
    servicesimage: '',
    previewVisible: false,
    previewImage: '',
    fileList: [],
    inputVisible: false,
    fileName: '',
    removedFile: [],
    pic: 'noPic.jpg',
  };

  componentWillMount() {
    axios.get('/api/v2/getTitle').then(async (result) => {
      const { data } = result;
      const { coreTitle, servicestitile, servicesimage: pic } = data[0];
      const fileList = [];
      await axios.get(`/api/v2/getFile/${pic}`).then(() => {
        fileList.push({
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: `/api/v2/getFile/${pic}`,
        });
      }).catch((error) => {
      });
      this.setState(() => ({
        coreTitle, servicestitile, pic, fileList,
      }));
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { fileList, fileName } = this.state;
        this.setState({ disable: true });
        if (fileName !== '') {
          values.servicesimage = fileName;
        }
        if (fileList.length) {
          axios
            .post('/api/v2/titles/update', values)
            .then((result) => {
              const {
                data: { message },
              } = result;
              NotificationManager.success(message, 'SUCCESS', 2000);
              setTimeout(() => {
                this.props.history.push('/admin/core/settings');
                this.setState({ disable: false });
              }, 3000);
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

  handleCancel = () => this.setState({ previewVisible: false });

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
    const { status } = file;
    if (status === 'done') {
      const {
        response: { fullName },
      } = file;
      this.setState({ fileName: fullName });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
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
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const {
      coreTitle, servicestitile, disable, fileList, previewVisible, pic,
    } = this.state;
    return (
      <Card className="gx-card" title="Settings">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Services Bg">
            <Upload
              action="/api/v2/uploadFile"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              withCredentials
              onRemove={this.removeFile}
              >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
              >
              <img
                alt="example"
                style={{ width: '100%' }}
                src={`/api/v2/getFile/${pic}`}
                />
            </Modal>
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Title</span>}>
            {getFieldDecorator('coreTitle', {
              initialValue: coreTitle,
              rules: [
                {
                  required: true,
                  message: 'Please input the title!',
                  whitespace: true,
                },
                {
                  max: 80,
                  message: 'Max is 80 letter',
                },
              ],
            })(<TextArea />)}
          </FormItem>
          <FormItem {...formItemLayout} label={<span>Services Title</span>}>
            {getFieldDecorator('servicestitile', {
              initialValue: servicestitile,
              rules: [
                {
                  required: true,
                  message: 'Please input the title!',
                  whitespace: true,
                },
                {
                  max: 150,
                  message: 'Max is 150 letter',
                },
              ],
            })(<TextArea />)}
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
