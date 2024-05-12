import { useState } from "react";
import CheckButton from "./CheckButton";
import { Form, Input, Flex, Rate } from "antd";
import {
  PlusOutlined,
  InfoCircleOutlined,
  LayoutOutlined,
  GiftOutlined,
  HourglassOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { Image, Upload } from "antd";
import FileAdd from "../assets/icons/file-add.png";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function BundleCard({ title, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const OpenDown = () => {
    setIsOpen(!isOpen);
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        borderRadius: 8,
        height: "100%",
        width: "100%",
      }}
      className="bg-zinc-50"
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
        className="text-zinc-400"
      >
        Upload Icon or Illustrations
      </div>
    </button>
  );

  const [value, setValue] = useState(3);

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
            : "border-0 h-0 md:w-[56vw] w-[90vw] overflow-hidden transition-all"
        }
      >
        <Form layout="vertical" className="m-6">
          <div className="flex gap-5 items-center text-[20px] text-zinc-500 font-medium mb-6">
            <h1>Popular Bundle</h1> <CheckButton />{" "}
          </div>

          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 6 ? null : uploadButton}
          </Upload>

          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}

          <Form.Item
            label={
              <span className="font-medium pt-3 text-[16px] flex gap-4">
                <h1>Bundle Name</h1>
              </span>
            }
          >
            <Input placeholder="Enter Name" className="h-11 md:w-[80%] w-[100%]" />
          </Form.Item>

          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-[16px] font-medium">Rating of Bundle</h1>

            <Flex gap="middle" vertical>
              <Rate tooltips={desc} onChange={setValue} value={value} />
            </Flex>
          </div>

          <div className="flex flex-col gap-4 md:w-[80%] w-[100%]">
            <div className="flex gap-4 items-start h-8  mb-6">
              <h2 className="text-[26px] font-medium">Components</h2>
              <img src={FileAdd} alt="" className="pt-1 h-8" />
            </div>
            <div className="flex gap-2">
              <InfoCircleOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
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

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
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
              <HourglassOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
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
              <GiftOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
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
          </div>

          <div className="flex md:flex-row flex-col justify-between">
            <Form.Item
              label={
                <span className="pt-3 text-[22px] font-medium">
                  Set Price On Bundle
                </span>
              }
            >
              <Input placeholder="Enter Price" className="h-11 md:w-[24vw] w-[100%]" />
            </Form.Item>
            <Form.Item
              label={
                <span className="pt-3 text-[22px] font-medium">
                  Discount on Bundle
                </span>
              }
            >
              <Input placeholder="Enter Price" className="h-11 md:w-[24vw] w-[100%]" />
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}

export default BundleCard;
