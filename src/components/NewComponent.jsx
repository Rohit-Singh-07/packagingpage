import { useState } from "react";
import CheckButton from "./CheckButton";
import UploadImg from "./UploadImg";
import { Button, Form, Input, Radio, Switch } from "antd";
import {
  InfoCircleOutlined,
  LayoutOutlined,
  GiftOutlined,
  HourglassOutlined,
  DeleteFilled,
} from "@ant-design/icons";

function NewComponent({ onSave }) {
  const [checked, setChecked] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("limegreen");

  const onChange = (checked) => {
    setChecked(checked);
    setBackgroundColor(checked ? "limegreen" : "gray");
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="bg-zinc-50 border-2 border-zinc-200 rounded-lg w-[56vw] transition-all mb-6">
        <Form layout="vertical" className="m-6">

        <h2 className="text-[23px] font-medium pb-4">New Components</h2>

          <UploadImg />

          <Form.Item
            label={
              <span className="font-medium pt-3 text-[16px] flex gap-4">
                <h1>Product Name</h1>
              </span>
            }
          >
            <Input placeholder="Enter Name" className="h-11 w-[80%]" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-[20px] pt-2">Type</span>}
            name="radiogroup"
          >
            <Radio.Group defaultValue={1} className="font-medium text-[16px]">
              <Radio value={1}>Primary</Radio>
              <Radio value={2}>Secondary</Radio>
              <Radio value={3}>Tertiary</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-[16px]">Description</span>}
          >
            <Input.TextArea
              autoSize={false}
              placeholder="Write Description"
              className="w-[80%]"
              style={{ resize: "none", height: "120px" }}
            />
          </Form.Item>

          <div className="flex flex-col gap-4 w-[80%]">
            <h2 className="text-[26px] font-medium">About Component</h2>
            <div className="flex gap-2">
              <InfoCircleOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <DeleteFilled
                    className="text-red-300 cursor-pointer bg-red-100 w-10 flex justify-center items-center rounded-r-lg"
                    onClick={clearInput}
                  />
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <LayoutOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <Input
                placeholder="Enter About Component"
                className="h-11 text-[17px]"
              />
            </div>

            <div className="flex gap-2">
              <HourglassOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <Input
                placeholder="Enter About Component"
                className="h-11 text-[17px]"
              />
            </div>

            <div className="flex gap-2">
              <GiftOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <Input
                placeholder="Enter About Component"
                className="h-11 text-[17px]"
              />
            </div>

            <div className="flex gap-12 text-[20px] text-zinc-500 font-medium">
              <div className="flex gap-5 items-center">
                <h1>Customisable</h1> <CheckButton />{" "}
              </div>
              <div className="flex gap-5 items-center">
                <h1>Sell Independently</h1>{" "}
                <Switch
                  defaultChecked={checked}
                  onChange={onChange}
                  style={{ backgroundColor: backgroundColor }}
                />{" "}
              </div>
            </div>
          </div>

          <div className={checked ? "" : "hidden"}>
            <h2 className="text-[26px] font-medium pt-5">
              Set Independent Pricing
            </h2>
            <div className="flex justify-between">
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 1</span>}
              >
                <Input placeholder="Enter Price" className="h-11 w-[16.4vw]" />
              </Form.Item>
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 10</span>}
              >
                <Input placeholder="Enter Price" className="h-11 w-[16.4vw]" />
              </Form.Item>
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 50</span>}
              >
                <Input placeholder="Enter Price" className="h-11 w-[16.4vw]" />
              </Form.Item>
            </div>
          </div>

          <Button
            type="primary"
            shape="round"
            className="w-32 pb-8 text-[16px]"
            onClick={onSave}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NewComponent;
