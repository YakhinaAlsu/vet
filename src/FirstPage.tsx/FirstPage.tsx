import "antd/dist/antd.css";
import "./FirstPage.css";
import { Form, Input, Button } from "antd";

const FirstPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper--text">Выберите тип аккаунта</div>
        <div className="wrapper__container">
          <div className="wrapper__login-admin">
            <div className="link__item">
              <div className="item--text">Администратор</div>
            </div>
          </div>
          <div className="wrapper__login-client">
            <div className="link__item">
              <div className="item--text">Клиент</div>
            </div>
          </div>
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Логин"
              name="Пароль"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            ></Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
