"use client"

import React, { useState } from "react";
import { Form, Input } from "antd";

export default function ChangePassword() {
  const [form] = Form.useForm();
  const [currentFilled, setCurrentFilled] = useState(false);
  const [newFilled, setNewFilled] = useState(false);
  const [confirmFilled, setConfirmFilled] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 
  const inputStyle = (filled) => ({
    height: 48,
    padding: "8px 12px",
    borderColor: filled ? "#000" : undefined,
  });

  return (
    <div className="container mx-4 xl:mx-[16%] border border-[#E8E8E9] rounded-[12px] py-10 lg:py-20 my-10 lg:my-20 bg-white">
      {/* Heading */}
      <div className="text-center space-y-4 md:space-y-6">
        <h3 className="text-[#1B1B25] text-[18px] md:text-2xl font-semibold">Change Password</h3>
      </div>

      {/* form */}
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <Form
          form={form}
          name="change-password"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-6"
        >
          {/* Current Password */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <span className="text-red-500 mr-2">*</span>
              <span>Current Password</span>
            </label>
            <Form.Item
              name="currentPassword"
              rules={[{ required: true, message: "Please input your current password!" }]}
            >
              <Input.Password
                placeholder="Enter current password"
                onChange={(e) => setCurrentFilled(e.target.value.trim().length > 0)}
                style={inputStyle(currentFilled)}
              />
            </Form.Item>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <span className="text-red-500 mr-2">*</span>
              <span>New Password</span>
            </label>
            <Form.Item
              name="newPassword"
              rules={[{ required: true, message: "Please input your new password!" }]}
            >
              <Input.Password
                placeholder="Enter new password"
                onChange={(e) => setNewFilled(e.target.value.trim().length > 0)}
                style={inputStyle(newFilled)}
              />
            </Form.Item>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <span className="text-red-500 mr-2">*</span>
              <span>Confirm New Password</span>
            </label>
            <Form.Item
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your new password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("The two passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm new password"
                onChange={(e) => setConfirmFilled(e.target.value.trim().length > 0)}
                style={inputStyle(confirmFilled)}
              />
            </Form.Item>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 ">
            <button
              type="button"
              onClick={() => form.resetFields()}
              className="flex-1 border cursor-pointer border-[#1B1B25] py-3 rounded-lg transition-colors duration-200 font-medium"
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
    </div>
  );
}
