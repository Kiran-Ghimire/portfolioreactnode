import { Form, Input, Button, Checkbox, Typography } from "antd";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.scss";
const { Title } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container contact">
      <div className="detailcontainer">
        <div className="contactdetail">
          <Title level={3} style={{ color: "white" }}>
            Get in Touch:
          </Title>
          <div>kiran.ghimiray098@gmail.com</div>
          <div>9877665443</div>
          <div>K cha bhai</div>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="contactform"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Link
          to="https://www.linkedin.com/in/kiran-ghimire-bb82a61b8"
          target="_blank"
        >
          <AiFillLinkedin
            size={40}
            color="white"
            style={{ marginRight: "5px" }}
          />
        </Link>
        <Link to="https://github.com/Kiran-Ghimire" target="_blank">
          <AiFillGithub color="white" size={40} />
        </Link>
      </div>
      <div style={{ marginTop: "5px" }}>
        &copy; Copyright all rights reserved.
      </div>
    </div>
  );
};

export default Contact;
