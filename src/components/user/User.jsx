import { Button, Input } from 'antd'
import React from 'react'
import { Form } from 'react-router-dom'


function User  () {
    const [form] = Form.useForm()
    const {mutate:Create} = useCreateUser()


    const onFinish = (values) => {
        Create(values, {
            onSuccess() {
                message.success('Created successfully');
                setAddModal(false);
                form.resetFields();
                refetch();
            },
            onError() {
                message.error('Failed');
            }
        })
    }

  return (
    <>
<div className="w-full h-[90vh] flex justify-center items-center">
  <div className="flex flex-col items-center gap-6">
    <h1 className="text-[30px] text-center">Login</h1>
    <div className="w-[700px] h-[400px] border-2 border-dashed border-gray-400 text-gray-400 flex justify-center items-center">
      <Form layout="vertical" onFinish={onFinish} form={form}>

        <Form.Item name="name" label="Username or email address" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
            <Input/>
        </Form.Item>

        <Form.Item>
            <Button className="text-white text-center ">Log in</Button>
        </Form.Item>
      </Form>
    </div>
  </div>
</div>


    </>
  )
}

export default User