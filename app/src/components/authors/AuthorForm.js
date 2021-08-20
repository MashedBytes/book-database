import { Form, Input, Button } from 'antd';
import { useLocation } from 'react-router';

import { Heading } from '../layout/Heading';

export const AuthorForm = (props) => {
  const [form] = Form.useForm()

  const location = useLocation()
  const { record } = location.state

  const actionType = record ? "PATCH" : "POST"

  record && form.setFieldsValue({
    name: record.name
  })
  
  const onFinish = values => {
    console.log(values);
  }

  const buttonLable = actionType === "POST" ? "Create" : "Update"
  const heading = actionType === "POST" ? "Add Author" : "Edit Author"

  return (
    <>
      <Heading title={heading} />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true, min: 3 }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {buttonLable}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}