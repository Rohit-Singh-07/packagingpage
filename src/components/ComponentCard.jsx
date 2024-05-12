import { useState } from "react";
import CheckButton from "./CheckButton";
import UploadImg from "./UploadImg";
import { Form, Input, Radio, Switch } from "antd";
import {
  InfoCircleOutlined,
  LayoutOutlined,
  GiftOutlined,
  HourglassOutlined,
  DeleteFilled,
} from "@ant-design/icons";

function ComponetCard({ title, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const OpenDown = () => {
    setIsOpen(!isOpen);
  };

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
      <div
        onClick={OpenDown}
        className="bg-zinc-50 p-3 mb-6 border-2 border-zinc-200 rounded-lg md:w-[56vw] w-[90vw] flex justify-between items-center"
      >
        <div className="flex gap-2 text-[20px] font-medium items-center">
          <span className="text-[25px]">{icon}</span>
          <h2>{title}</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          className={
            isOpen
              ? "rotate-180 transition-all mr-2"
              : "rotate-0 transition-all mr-2"
          }
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.99975 1.859L1.41427 4.44449C1.02374 4.83501 0.469722 4.91416 0.176829 4.62127C-0.116065 4.32837 -0.0369189 3.77435 0.353605 3.38383L3.18203 0.555402C3.42532 0.312111 3.73207 0.18967 3.9996 0.202744C4.2672 0.189566 4.57408 0.312009 4.81746 0.555388L7.64588 3.38381C8.03641 3.77434 8.11555 4.32836 7.82266 4.62125C7.52977 4.91415 6.97575 4.835 6.58523 4.44447L3.99975 1.859Z"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>
      </div>

      <div
        className={
          isOpen
            ? "bg-zinc-50 border-2 border-zinc-200 rounded-lg md:w-[56vw] w-[90vw] transition-all mb-6"
            : "border-0 h-0 md:w-[56vw] w-80 overflow-hidden transition-all"
        }
      >
        <Form layout="vertical" className="m-6">
          <UploadImg />

          <Form.Item
            label={
              <span className="font-medium pt-3 text-[16px] flex gap-4">
                <h1>Box Name</h1>
              </span>
            }
          >
            <Input
              placeholder="Matte Box"
              className="h-11 md:w-[80%] w-[100%]"
            />
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
              className="md:w-[80%] w-[100%]"
              style={{ resize: "none", height: "120px" }}
            />
          </Form.Item>

          <div className="flex flex-col gap-4 md:w-[80%] w-[100%]">
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

            <div className="flex md:gap-12 gap-3 md:flex-row flex-col text-[20px] text-zinc-500 font-medium">
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
            <div className="flex md:flex-row flex-col justify-between">
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 1</span>}
              >
                <Input
                  placeholder="Enter Price"
                  className="h-11 md:w-[16.4vw] w-[100%]"
                />
              </Form.Item>
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 10</span>}
              >
                <Input
                  placeholder="Enter Price"
                  className="h-11 md:w-[16.4vw] w-[100%]"
                />
              </Form.Item>
              <Form.Item
                label={<span className="pt-3 font-semibold">Pack of 50</span>}
              >
                <Input
                  placeholder="Enter Price"
                  className="h-11 md:w-[16.4vw] w-[100%]"
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ComponetCard;
