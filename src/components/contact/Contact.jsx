import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button, Col, Form, Input, message, Row } from "antd"
import { useCreateContact } from '../../utils/contact/contactHook';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function Contact ()  {
  const position = [40.73061, -73.935242]
  const [form] = Form.useForm()
  const{muate:Create} = useCreateContact()


  const onFinish = (values) => {
    Create(values, {
        onSuccess() {
            message.success('Created successfully')
            setAddModal(false);
            form.resetFields();
            refetch();
        },
        onError() {
            message.error('Failed')
        }
    })
}

  return (
    <>
      {/* Map Section */}
      <div className="w-full h-[400px] md:h-[500px]">
        <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={position}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact Info + Form */}
      <div className="w-full h-[600px] flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 py-10 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 lg:ml-[250px]">
          <h1 className="text-[30px] md:text-[40px] font-semibold">Contact Info.</h1>
          <p className="text-[16px] md:text-[18px] text-gray-500">Some information that you may want to know</p>

          <div className="flex items-start space-x-4 pt-2">
            <img src="https://demo.woostify.com/fashion1/wp-content/uploads/sites/27/2018/10/contact-phone.jpg" alt="Phone"  />
            <div>
              <h5 className="text-[10px]">PHONE NUMBER</h5>
              <h3 className="text-[18px]">+1 342 5860 282</h3>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-2">
            <img src="https://demo.woostify.com/fashion1/wp-content/uploads/sites/27/2018/10/contact-address.jpg" alt="Address"  />
            <div>
              <h5 className="text-[10px]">ADDRESS</h5>
              <h3 className="text-[18px]">168 Park Avenue</h3>
              <p className="text-[14px] text-gray-500">Greenwich Village, NYC 1001 United State</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-2">
            <img src="https://demo.woostify.com/fashion1/wp-content/uploads/sites/27/2018/10/contact-mail.jpg" alt="Email" />
            <div>
              <h5 className="text-[10px]">EMAIL</h5>
              <h3 className="text-[18px]">hello@woostify.com</h3>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col space-y-4 w-full lg:w-1/2 pt-6 ">
          <h1 className="text-[24px] md:text-[30px]">Leave Your Message</h1>
          <p className="text-[16px] md:text-[18px] text-gray-500">Feel free to contact with us by using the form below</p>

          {/* <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input type="text"
              placeholder="Your Name"
              className="text-[16px] border border-gray-400 p-3 pl-6 pr-6 w-full" />
            <input type="text"
              placeholder="Email"
              className="text-[16px] border border-gray-400 p-3 pl-6 pr-6 w-full" />
          </div>

          <textarea placeholder="Message"
            className="border border-gray-400 p-4 w-full text-left text-[16px] resize-none h-[100px] md:h-[160px]"></textarea>

          <button className="text-[16px] text-white bg-blue-700 hover:bg-red-950 p-3 rounded-[25px] w-fit px-6 mt-2"> SEND US </button> */}



<Form layout="vertical" onFinish={onFinish} form={form}>
  <Row gutter={16}>
    <Col span={12}>
      <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
        <Input placeholder="Your Name" />
      </Form.Item>
    </Col>
    
    <Col span={12}>
      <Form.Item name="email" rules={[{ required: true, message: "Enter your Email" }]}>
        <Input placeholder="Email" />
      </Form.Item>
    </Col>
  </Row>

  <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}>
    <Input.TextArea placeholder="Message" />
  </Form.Item>

<Form.Item>
  <Button type="primary" htmlType="sumbit"
  className="text-[16px] text-white bg-blue-700 hover:bg-red-950 p-5 rounded-[25px] w-fit px-6 mt-2"> SEND US </Button> 

</Form.Item>
</Form>



        </div>
      </div>
    </>
  )
}

export default Contact
