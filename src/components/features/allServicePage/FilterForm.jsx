'use client'

import React from 'react'
import { Form, Select, Input, InputNumber, Checkbox, Button } from 'antd'

const { Option } = Select

export default function FilterForm({ onApply }) {
  const [form] = Form.useForm()

  const handleFinish = (values) => {
    if (onApply) onApply(values)
    console.log('Apply values:', values)
  }

  const handleReset = () => form.resetFields()

  const locationOptions = ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna']
  const categoryOptions = ['Design', 'Development', 'Marketing', 'Writing']
  const levelOptions = ['Beginner', 'Rising Star', 'Pro', 'Pro Master']

  return (
    <div className="w-full  py-6">
      {/* Global small style overrides for AntD bits we need to tweak */}
      <style>{`
        /* Make AntD inputs/selects/number controls match exact height and center content */
        .ant-select-selector,
        .ant-input,
        .ant-input-number,
        .ant-input-number .ant-input-number-input {
          height: 44px !important;
          min-height: 44px !important;
          display: flex !important;
          align-items: center !important;
        }

        .ant-input-number .ant-input-number-input {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          line-height: 1 !important;
        }

        /* Hover / focus: black border (remove blue focus) */
        .ant-input:hover,
        .ant-input:focus,
        .ant-select-selector:hover,
        .ant-select-focused .ant-select-selector,
        .ant-input-number:hover,
        .ant-input-number-focused {
          border-color: #000 !important;
          box-shadow: none !important;
        }

        /* Remove extra glow on focus for input-number inner input */
        .ant-input-number-focused { box-shadow: none !important; }

        /* Primary (Apply) button — force black bg & border */
        .ant-btn.ant-btn-primary {
          background-color: #000 !important;
          border-color: #000 !important;
          color: #fff !important;
        }
        .ant-btn.ant-btn-primary:hover,
        .ant-btn.ant-btn-primary:focus {
          background-color: #000 !important;
          border-color: #000 !important;
          color: #fff !important;
          opacity: 0.95;
        }

        /* Reset button variant (red border & text) */
        .ant-btn-reset {
          border-color: #ef4444 !important;
          color: #ef4444 !important;
          background: transparent !important;
        }
        .ant-btn-reset:hover {
          background: rgba(239,68,68,0.06) !important;
          border-color: #ef4444 !important;
          color: #ef4444 !important;
        }

        /* Ensure the checkbox container vertically centers */
        .verified-wrap {
          display: flex;
          align-items: center;
          height: 100%;
        }

        /* Small responsive tweak: slightly smaller inputs on very small screens */
        @media (max-width: 380px) {
          .ant-select-selector,
          .ant-input,
          .ant-input-number,
          .ant-input-number .ant-input-number-input {
            height: 40px !important;
            min-height: 40px !important;
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <Form
          form={form}
          name="filter"
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            location: undefined,
            category: undefined,
            services: '',
            priceMin: undefined,
            priceMax: undefined,
            level: undefined,
            verified: false,
          }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2">
              <Form.Item name="location" label="Location" className="mb-0">
                <Select
                  placeholder="Select Your Location"
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  size="large"
                  className="w-full"
                >
                  {locationOptions.map((loc) => (
                    <Option key={loc} value={loc}>
                      {loc}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="md:col-span-2">
              <Form.Item name="category" label="Category" className="mb-0">
                <Select
                  placeholder="Select Your Category"
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  size="large"
                  className="w-full"
                >
                  {categoryOptions.map((c) => (
                    <Option key={c} value={c}>
                      {c}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="md:col-span-2">
              <Form.Item name="services" label="Services" className="mb-0">
                <Input
                  placeholder="Enter Your Service"
                  size="large"
                  className="w-full"
                />
              </Form.Item>
            </div>

            
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
            <div className="">
              <Form.Item
                name="priceMin"
                label="Price Minimum"
                className="mb-0"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    message: 'Must be >= 0',
                  },
                ]}
              >
                <InputNumber
                  min={0}
                  size="large"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  placeholder="$0.00"
                  className="w-full"
                />
              </Form.Item>
            </div>

            <div className="">
              <Form.Item
                name="priceMax"
                label="Price Maximum"
                className="mb-0"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    message: 'Must be >= 0',
                  },
                ]}
              >
                <InputNumber
                  min={0}
                  size="large"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  placeholder="$1000.00"
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="md:col-span-2">
              <Form.Item name="level" label="Professional Levels" className="mb-0">
                <Select
                  placeholder="Select Professional Level"
                  allowClear
                  size="large"
                  className="w-full"
                >
                  {levelOptions.map((lvl) => (
                    <Option key={lvl} value={lvl}>
                      {lvl}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            {/* Verified badge - vertically centered */}
            <div className="">
              <div className="verified-wrap">
                <Form.Item name="verified" valuePropName="checked" className="mb-0">
                  <Checkbox>Verified badge</Checkbox>
                </Form.Item>
              </div>
            </div>

            {/* Buttons - responsive stacking */}
            <div className="md:col-span-1 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
              <div className="w-full sm:w-auto">
                <Button
                  type="default"
                  onClick={handleReset}
                  block
                  className="ant-btn-reset !h-[44px]"
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  type="primary"
                  onClick={() => form.submit()}
                  block
                  className='!h-[44px]'
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
