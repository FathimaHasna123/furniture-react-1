import { Button, Checkbox, ConfigProvider, Form, Input,} from 'antd'
import React from 'react'
import { useCreateUser } from '../../utils/user/userHook'
import { BsEye } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";


function User  () {
    const [form] = Form.useForm()
    const {mutate:CreateUser} = useCreateUser()


    const onFinish = (values) => {
      console.log("aaaaaa")
        CreateUser(values, {
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
    <h1 className="text-[25px] text-center">Login</h1>
    <div className="w-[700px] h-[350px] border-2 border-dashed border-gray-400 text-gray-400 p-5">
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        className="space-y-2">

        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 18,
                itemMarginBottom: 4,
              },
            },
          }} >

          <Form.Item  name="name" label="Username or email address" rules={[{ required: true, message: "Please enter your name" }]}
            labelCol={{ style: { textAlign: "left", paddingBottom: 4 } }}>
            <Input className="!mt-1" />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 18,
                itemMarginBottom: 4,
              },
            },
          }}>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}>

            <Input.Password
              iconRender={(visible) =>
                visible ? <BsEye /> : <BsFillEyeSlashFill />
              }/>
          </Form.Item>
        </ConfigProvider>

      
       <Form.Item name="remember" valuePropName="checked" className="!mb-2 flex justify-center">
  <Checkbox className="text-gray-600 text-[16px]">Remember me</Checkbox>
</Form.Item>


 <Form.Item className="flex justify-center">
  <Button
    type="primary"
    htmlType="submit"
    className="text-[16px] text-white bg-blue-700 hover:bg-red-950 p-5 rounded-[25px] px-6 mt-2" > Log in
  </Button>
</Form.Item>

<div className="text-center mt-2">
  <a href="/forgot-password" className="text-[16px] hover:text-blue-600">
    Lost your password?
  </a>
</div>

      </Form>
    </div>
  </div>
</div>



     

     
      

    </>
  )
}

export default User