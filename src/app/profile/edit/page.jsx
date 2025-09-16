"use client"

import { useState } from "react"
import { Form, Input, Button, Upload, Select, message } from "antd"
import { CameraOutlined, CloseOutlined } from "@ant-design/icons"

const { TextArea } = Input
const { Option } = Select

export default function ProfileForm() {
    const [form] = Form.useForm()
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (info) => {
        if (info.file.status === "uploading") {
            return
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            setImageUrl(info.file.response?.url || URL.createObjectURL(info.file.originFileObj))
        }


    }



    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!")
        }
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!")
        }
        return isJpgOrPng && isLt2M
    }

    // country code selection
    const prefixSelector = (
        <Form.Item name="prefix" noStyle initialValue="+39">
            <Select style={{ width: 70, height: 40 }}>
                <Option value="+39">+39</Option>
                <Option value="+1">+1</Option>
                <Option value="+44">+44</Option>
                <Option value="+33">+33</Option>
                <Option value="+49">+49</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values) => {
        console.log("Form values:", values)
        message.success("Profile updated successfully!")
    }

    const handleCancel = () => {
        form.resetFields()
        setImageUrl(null)
        message.info("Changes cancelled")
    }

    return (
        <div className="container mx-[10%] my-[6%] border border-[#E8E8E9] p-4 md:p-8  rounded-xl   bg-white">
            <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6">
                {/* Profile Picture Section */}
                <div className="mb-8">
                    <h3 className="text-[20px] font-medium text-[#1B1B25] mb-4">Profile Picture</h3>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center relative">

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader flex justify-center"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleImageUpload}
                            customRequest={({ file, onSuccess }) => {
                                // Mock upload - in real app, upload to your server
                                setTimeout(() => {
                                    onSuccess("ok")
                                }, 1000)
                            }}
                        >
                            {imageUrl ? (
                                <div className="relative w-full h-full">
                                    <img
                                        src={imageUrl || "/placeholder.svg"}
                                        alt="avatar"
                                        className="w-full h-full object-cover rounded"
                                    />

                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400">
                                    <CameraOutlined className="text-4xl mb-2" />
                                    <span className="text-sm">Upload</span>
                                </div>
                            )}
                        </Upload>
                        {imageUrl &&
                            <div>
                                <button
                                    onClick={() => setImageUrl(null)}
                                    className="text-red-600 cursor-pointer  z-10  rounded-full "
                                >
                                    Remove
                                </button>
                            </div>}
                    </div>
                </div>

                {/* Basic Info Section */}
                <div className="border border-[#E8E8E9] p-4 rounded-xl">
                    <h3 className="text-[20px] font-medium text-[#1B1B25] mb-4">Basic Info:</h3>

                    {/* Full Name and Last name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2  md:gap-4 ">
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[{ required: true, message: "Please enter your first name" }]}
                        >
                            <Input placeholder="Type here..." className="h-10 border-gray-200 " />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label="Last Name"
                            rules={[{ required: true, message: "Please enter your last name" }]}
                        >
                            <Input placeholder="Type here..." className="h-10 border-gray-200 " />
                        </Form.Item>
                    </div>

                    {/* Bio */}
                    <Form.Item name="bio" label="Bio" className="">
                        <TextArea
                            placeholder="Type here..."
                            rows={4}
                            className="border-gray-200 resize-none"
                        />
                    </Form.Item>

                    {/* City and Street Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2  md:gap-4 ">
                        <Form.Item name="city" label="City">
                            <Input placeholder="Enter your city" className="h-10 border-gray-200 " />
                        </Form.Item>

                        <Form.Item name="street" label="Street">
                            <Input placeholder="Enter Street Address" className="h-10 border-gray-200 " />
                        </Form.Item>
                    </div>

                    {/* Full Name and Phone Number Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mb-4">


                        <Form.Item name="phoneNumber" label="Phone number">
                            <Input addonBefore={prefixSelector} placeholder="Type here..." />
                        </Form.Item>

                        {/* Language */}
                        {/* <Form.Item name="language" label="Language" className="mb-6">
                            <Select placeholder="Select here..." className="h-10" dropdownClassName="border-gray-200">
                                <Option value="english">English</Option>
                                <Option value="french">French</Option>
                                <Option value="german">German</Option>
                                <Option value="italian">Italian</Option>

                            </Select>
                        </Form.Item> */}

                        {/* Email */}
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: "Please enter your registered email" },
                                { type: "email", message: "Please enter a valid email" },
                            ]}
                        >
                            <Input placeholder="abc@gmail.com" className="h-10 border-gray-200" />
                        </Form.Item>
                    </div>


                </div>

                {/* Action Buttons */}

                <div className="flex gap-4 pt-4 ">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 border cursor-pointer border-[#FA4649] text-[#FA4649] py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="flex-1 cursor-pointer border  border-[#1B1B25] bg-[#1B1B25] text-white py-3 rounded-lg  transition-colors duration-200 font-medium"
                    >
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}
