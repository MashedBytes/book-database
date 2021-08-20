import { Form, Input, Button } from 'antd';

export const AuthorForm = (props) => {
  const [form] = Form.useForm();
  const actionType = props.name ? "PATCH" : "POST"

  const onFinish = values => {
    console.log(values);
  }


  const buttonLable = () => {
    return actionType == "POST" ? "Create" : "Update"
  }

  return (
    <Form form={form} onFinish={onFinish} initialValues={{name: props.name || "" }}>
      <Form.Item name="name" label="Name" rules={[{ required: true, min: 3 }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {buttonLable()}
        </Button>
      </Form.Item>
    </Form>
  )
}